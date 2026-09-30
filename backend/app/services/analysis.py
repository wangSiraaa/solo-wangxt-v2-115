"""分析编排：太阳位置 × trimesh 求交，输出逐时口径与连续时段口径两套结果。"""
from __future__ import annotations

from dataclasses import asdict
from datetime import datetime

import numpy as np

from . import geometry as geo
from . import solar as solar_svc
from .coordinates import facade_normal_enu


def build_engine_from_scene(scene: dict) -> geo.OcclusionEngine:
    buildings = [
        geo.Building(
            id=b["code"], name=b["name"],
            center=tuple(b["center"]), size=tuple(b["size"]),
            color=b.get("color", "#9aa3ad"),
        )
        for b in scene["buildings"]
    ]
    target_id = next((b["code"] for b in scene["buildings"]
                      if b.get("is_target")), None)
    return geo.OcclusionEngine(
        buildings,
        model_north_deg=float(scene["model_north_deg"]),
        origin_enu=(float(scene.get("origin_e", 0.0)),
                    float(scene.get("origin_n", 0.0)),
                    float(scene.get("origin_u", 0.0))),
        target_building_id=target_id,
    )


def _normal_for_point(point: dict) -> np.ndarray | None:
    az = point.get("normal_azimuth_deg")
    return facade_normal_enu(float(az)) if az is not None else None


def _trace_to_dict(tr: geo.TraceResult, include_all_hits: bool) -> dict:
    d = {
        "time_local": tr.time_local.isoformat(timespec="minutes"),
        "elevation": round(tr.elevation, 4),
        "azimuth": round(tr.azimuth, 4),
        "sun_vector_enu": [round(float(v), 6) for v in tr.sun_vector_enu],
        "facade_faces_sun": tr.facade_faces_sun,
        "occluded": tr.occluded,
        "nearest": None,
    }
    if tr.nearest is not None:
        d["nearest"] = {
            "building_id": tr.nearest.building_id,
            "building_name": tr.nearest.building_name,
            "distance_m": round(tr.nearest.distance_m, 4),
            "hit_point_enu": [round(float(x), 4) for x in tr.nearest.point_enu],
            "face_index": tr.nearest.face_index,
        }
    if include_all_hits:
        d["all_hits"] = [
            {
                "building_id": h.building_id,
                "building_name": h.building_name,
                "distance_m": round(h.distance_m, 4),
                "hit_point_enu": [round(float(x), 4) for x in h.point_enu],
            }
            for h in tr.all_hits
        ]
    return d


def evaluate_point(scene: dict, point: dict, date: str,
                   fine_step_seconds: int = 300) -> dict:
    """对单点执行：逐时采样 + 细网格连续时段，两套结果同时返回并明确标注口径。"""
    engine = build_engine_from_scene(scene)
    mp = geo.MeasurePoint(
        id=point["code"], name=point["name"],
        model_xyz=tuple(point["model_xyz"]),
        normal_azimuth_deg=point.get("normal_azimuth_deg"),
        window_name=point.get("window_name", ""),
    )
    normal = _normal_for_point(point)

    hourly = solar_svc.hourly_samples(
        scene["lat"], scene["lon"], scene["timezone"], date)
    hourly_traces = [
        engine.trace(mp, vec, t, el, az, normal)
        for t, el, az, vec in zip(hourly.times_local, hourly.elevation,
                                  hourly.azimuth, hourly.vectors_enu)
    ]
    fine = solar_svc.fine_grid(
        scene["lat"], scene["lon"], scene["timezone"], date,
        step_seconds=fine_step_seconds)
    fine_traces = [
        engine.trace(mp, vec, t, el, az, normal)
        for t, el, az, vec in zip(fine.times_local, fine.elevation,
                                  fine.azimuth, fine.vectors_enu)
    ]
    segments = geo.run_length_segments(fine_traces, fine_step_seconds)

    return {
        "scene_code": scene["code"],
        "point_code": point["code"],
        "date": date,
        "coordinate_context": {
            "lat": scene["lat"], "lon": scene["lon"],
            "timezone": scene["timezone"], "datum": scene.get("datum_name", "WGS84"),
            "model_north_deg": scene["model_north_deg"],
            "window_normal_azimuth_deg": point.get("normal_azimuth_deg"),
            "point_model_xyz": point["model_xyz"],
            "point_enu": [round(float(v), 4)
                          for v in engine.point_enu(mp)],
        },
        "hourly": {
            "summary": geo.summarize_hourly(hourly_traces),
            "traces": [_trace_to_dict(t, include_all_hits=False)
                       for t in hourly_traces],
        },
        "continuous": geo.summarize_continuous(segments),
        "unmodeled_occluders": geo.UNMODELED_OCCLUDERS,
    }


def trace_analytic(scene: dict, point: dict, elevation_deg: float,
                   azimuth_deg: float) -> dict:
    """给定高度角/真北方位角直接构向量求交（不经 pvlib），供已知几何手算核对。"""
    engine = build_engine_from_scene(scene)
    mp = geo.MeasurePoint(
        id=point["code"], name=point["name"],
        model_xyz=tuple(point["model_xyz"]),
        normal_azimuth_deg=point.get("normal_azimuth_deg"),
    )
    normal = _normal_for_point(point)
    from .coordinates import solar_vector_enu
    vec = solar_vector_enu(elevation_deg, azimuth_deg)
    tr = engine.trace(mp, np.asarray(vec), datetime(2000, 1, 1),
                      float(elevation_deg), float(azimuth_deg), normal)
    return {
        "ray_origin_enu": [round(float(v), 4) for v in tr.ray_origin_enu],
        "ray_direction_enu": [round(float(v), 6) for v in tr.sun_vector_enu],
        "facade_faces_sun": tr.facade_faces_sun,
        "trace": _trace_to_dict(tr, include_all_hits=True),
    }


def trace_single(scene: dict, point: dict, when: str,
                 include_all_hits: bool = True) -> dict:
    """单点单时刻追查：给出射线、最近遮挡物、命中面索引与命中点，供教学追查。"""
    engine = build_engine_from_scene(scene)
    mp = geo.MeasurePoint(
        id=point["code"], name=point["name"],
        model_xyz=tuple(point["model_xyz"]),
        normal_azimuth_deg=point.get("normal_azimuth_deg"),
    )
    normal = _normal_for_point(point)
    dt = datetime.fromisoformat(when)
    # 直接复用细网格计算中同一时刻；单点用 pvlib 单独求一次
    table = solar_svc._compute(
        scene["lat"], scene["lon"], scene["timezone"], [dt])
    tr = engine.trace(mp, table.vectors_enu[0], table.times_local[0],
                      float(table.elevation[0]), float(table.azimuth[0]), normal)
    return {
        "when": tr.time_local.isoformat(timespec="seconds"),
        "ray_origin_enu": [round(float(v), 4) for v in tr.ray_origin_enu],
        "ray_direction_enu": [round(float(v), 6) for v in tr.sun_vector_enu],
        "facade_faces_sun": tr.facade_faces_sun,
        "trace": _trace_to_dict(tr, include_all_hits=include_all_hits),
    }
