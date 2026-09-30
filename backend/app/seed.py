"""将合成场景写入 PostgreSQL/PostGIS（可重复执行，按 code upsert）。"""
from __future__ import annotations

from geoalchemy2.shape import from_shape
from shapely.geometry import Point, Polygon

from .db import Base, SessionLocal, engine
from .models import entities  # noqa: F401  (注册元数据)
from .services.coordinates import enu_to_llh, model_to_enu
from .services.synthetic_scene import EVAL_DATES, SCENES


def init_schema():
    with engine.begin() as conn:
        conn.exec_driver_sql("CREATE EXTENSION IF NOT EXISTS postgis;")
    Base.metadata.create_all(engine)


def seed():
    init_schema()
    db = SessionLocal()
    try:
        for sc in SCENES:
            scene = db.query(entities.Scene).filter_by(code=sc["code"]).one_or_none()
            if scene is None:
                scene = entities.Scene(code=sc["code"])
                db.add(scene)
            scene.name = sc["name"]
            scene.datum_name = sc["datum_name"]
            scene.lat = sc["lat"]
            scene.lon = sc["lon"]
            scene.timezone = sc["timezone"]
            scene.model_north_deg = sc["model_north_deg"]
            scene.note = sc["note"]
            db.flush()

            db.query(entities.Building).filter_by(scene_id=scene.id).delete()
            db.query(entities.MeasurePointModel).filter_by(scene_id=scene.id).delete()

            origin = (0.0, 0.0, 0.0)
            for b in sc["buildings"]:
                cx, cy, cz = b["center"]
                sx, sy, sz = b["size"]
                corners_model = [
                    (cx - sx / 2, cy - sy / 2, 0.0),
                    (cx + sx / 2, cy - sy / 2, 0.0),
                    (cx + sx / 2, cy + sy / 2, 0.0),
                    (cx - sx / 2, cy + sy / 2, 0.0),
                ]
                enu = model_to_enu(corners_model, scene.model_north_deg, origin)
                poly_enu = Polygon([(p[0], p[1]) for p in enu])
                lons, lats, _ = enu_to_llh(
                    enu[:, 0], enu[:, 1], enu[:, 2],
                    scene.lon, scene.lat)
                poly_wgs = Polygon(
                    list(zip(list(lons), list(lats))) + [(float(lons[0]), float(lats[0]))])
                db.add(entities.Building(
                    scene_id=scene.id, code=b["code"], name=b["name"],
                    cx=cx, cy=cy, cz=cz, sx=sx, sy=sy, sz=sz,
                    color=b["color"], is_target=b.get("is_target", False),
                    footprint_enu=from_shape(poly_enu, srid=0),
                    footprint_wgs84=from_shape(poly_wgs, srid=4326),
                ))

            for p in sc["points"]:
                px, py, pz = p["model_xyz"]
                enu_pt = model_to_enu(
                    [(px, py, pz)], scene.model_north_deg, origin)[0]
                lon, lat, h = enu_to_llh(
                    enu_pt[0], enu_pt[1], enu_pt[2], scene.lon, scene.lat)
                db.add(entities.MeasurePointModel(
                    scene_id=scene.id, code=p["code"], name=p["name"],
                    px=px, py=py, pz=pz,
                    normal_azimuth_deg=p.get("normal_azimuth_deg"),
                    window_name=p.get("window_name", ""),
                    position_enu=from_shape(
                        Point(float(enu_pt[0]), float(enu_pt[1]), float(enu_pt[2])),
                        srid=0),
                    position_wgs84=from_shape(
                        Point(float(lon), float(lat), float(h)),
                        srid=4326),
                ))
        db.commit()
    finally:
        db.close()
    print(f"seeded {len(SCENES)} scenes, dates={EVAL_DATES}")


if __name__ == "__main__":
    seed()
