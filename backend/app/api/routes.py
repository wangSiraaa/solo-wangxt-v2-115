"""FastAPI 路由：场景/测点查询、评价、单点追查、快照。

所有端点均标注"教学合成场景，非规划合规结论"。
"""
from __future__ import annotations

import os

from fastapi import APIRouter, Depends, HTTPException
from geoalchemy2.shape import to_shape
from pydantic import BaseModel
from sqlalchemy.orm import Session

from ..config import settings
from ..db import get_db
from ..models import entities
from ..services import analysis
from ..services.coordinates import validate_datum_consistency
from ..services.geometry import UNMODELED_OCCLUDERS
from ..services.synthetic_scene import (DATE_LABELS, EVAL_DATES, FINE_STEP_SECONDS,
                                        HOURLY_NOTE, SCENES)

router = APIRouter(prefix="/api")

TEACHING_BANNER = (
    "合成教学场景，仅用于讲解日照几何与遮挡计算口径；"
    "不代表真实地块，不构成任何规划/日照标准合规结论。"
)


def _scene_dict(code: str) -> dict:
    for sc in SCENES:
        if sc["code"] == code:
            return sc
    raise HTTPException(404, f"unknown scene {code}")


def _point_dict(scene: dict, point_code: str) -> dict:
    for p in scene["points"]:
        if p["code"] == point_code:
            return p
    raise HTTPException(404, f"unknown point {point_code}")


@router.get("/meta")
def meta():
    return {
        "banner": TEACHING_BANNER,
        "hourly_vs_continuous_note": HOURLY_NOTE,
        "fine_step_seconds": FINE_STEP_SECONDS,
        "eval_dates": [{"date": d, "label": DATE_LABELS.get(d, "")} for d in EVAL_DATES],
        "unmodeled_occluders": UNMODELED_OCCLUDERS,
    }


@router.get("/scenes")
def list_scenes():
    return [
        {
            "code": s["code"], "name": s["name"],
            "datum": {"name": s["datum_name"], "lat": s["lat"], "lon": s["lon"],
                      "timezone": s["timezone"], "model_north_deg": s["model_north_deg"]},
            "datum_check": validate_datum_consistency(s),
            "buildings": s["buildings"],
            "points": s["points"],
            "note": s["note"],
        }
        for s in SCENES
    ]


class EvaluateBody(BaseModel):
    scene_code: str
    point_code: str
    date: str
    persist: bool = False
    snapshot_label: str | None = None
    camera_state: dict | None = None


@router.post("/evaluate")
def evaluate(body: EvaluateBody, db: Session = Depends(get_db)):
    scene = _scene_dict(body.scene_code)
    point = _point_dict(scene, body.point_code)
    if body.date not in EVAL_DATES:
        raise HTTPException(400, f"教学日期仅支持 {EVAL_DATES}")
    result = analysis.evaluate_point(scene, point, body.date, FINE_STEP_SECONDS)

    if body.persist:
        sc_row = db.query(entities.Scene).filter_by(code=scene["code"]).one()
        p_row = db.query(entities.MeasurePointModel).filter_by(
            scene_id=sc_row.id, code=point["code"]).one()
        snap_id = None
        if body.camera_state is not None:
            snap = entities.Snapshot(
                scene_id=sc_row.id,
                label=body.snapshot_label or f"{scene['code']}/{point['code']}/{body.date}",
                camera_state=body.camera_state)
            db.add(snap)
            db.flush()
            snap_id = snap.id
        existing = db.query(entities.Evaluation).filter_by(
            scene_id=sc_row.id, point_id=p_row.id, eval_date=body.date).one_or_none()
        if existing is None:
            existing = entities.Evaluation(
                scene_id=sc_row.id, point_id=p_row.id, eval_date=body.date)
            db.add(existing)
        existing.hourly_summary = result["hourly"]["summary"]
        existing.continuous_summary = result["continuous"]
        existing.hourly_traces = result["hourly"]["traces"]
        existing.snapshot_id = snap_id
        db.commit()
        result["persisted"] = {"evaluation_id": existing.id, "snapshot_id": snap_id}
    return result


class TraceBody(BaseModel):
    scene_code: str
    point_code: str
    when: str


@router.post("/trace")
def trace(body: TraceBody):
    scene = _scene_dict(body.scene_code)
    point = _point_dict(scene, body.point_code)
    return {"banner": TEACHING_BANNER, **analysis.trace_single(scene, point, body.when)}


class AnalyticTraceBody(BaseModel):
    scene_code: str
    point_code: str
    elevation_deg: float
    azimuth_deg: float


@router.post("/trace-analytic")
def trace_analytic(body: AnalyticTraceBody):
    """教学手算核对入口：自己给太阳高度/方位，射线立刻给出命中的建筑与命中面。"""
    scene = _scene_dict(body.scene_code)
    point = _point_dict(scene, body.point_code)
    return {"banner": TEACHING_BANNER,
            **analysis.trace_analytic(scene, point,
                                      body.elevation_deg, body.azimuth_deg)}


@router.get("/results")
def results(scene_code: str, db: Session = Depends(get_db)):
    """列出该场景已持久化的评价结果（含快照 id，支持结果↔场景快照关联追查）。"""
    sc_row = db.query(entities.Scene).filter_by(code=scene_code).one_or_none()
    if sc_row is None:
        raise HTTPException(404, "场景尚未入库，请先运行 seed")
    rows = db.query(entities.Evaluation).filter_by(scene_id=sc_row.id).all()
    out = []
    for r in rows:
        out.append({
            "evaluation_id": r.id,
            "point_code": r.point.code,
            "point_name": r.point.name,
            "date": r.eval_date,
            "hourly_summary": r.hourly_summary,
            "continuous_summary": r.continuous_summary,
            "snapshot_id": r.snapshot_id,
            "snapshot": None if r.snapshot is None else {
                "id": r.snapshot.id, "label": r.snapshot.label,
                "camera_state": r.snapshot.camera_state,
            },
        })
    return out


@router.get("/db/verify-geometries")
def verify_geometries(scene_code: str, db: Session = Depends(get_db)):
    """抽查 PostGIS 中保存的 ENU 与 WGS84 几何，证明坐标基准已落库。"""
    sc_row = db.query(entities.Scene).filter_by(code=scene_code).one_or_none()
    if sc_row is None:
        raise HTTPException(404, "场景尚未入库")
    buildings = db.query(entities.Building).filter_by(scene_id=sc_row.id).all()
    pts = db.query(entities.MeasurePointModel).filter_by(scene_id=sc_row.id).all()
    return {
        "scene": {"code": sc_row.code, "datum": sc_row.datum_name,
                  "lat": sc_row.lat, "lon": sc_row.lon,
                  "timezone": sc_row.timezone,
                  "model_north_deg": sc_row.model_north_deg},
        "building_footprints_wgs84": [
            {"code": b.code,
             "wkt": to_shape(b.footprint_wgs84).wkt if b.footprint_wgs84 else None}
            for b in buildings
        ],
        "points_wgs84": [
            {"code": p.code,
             "wkt": to_shape(p.position_wgs84).wkt if p.position_wgs84 else None}
            for p in pts
        ],
    }


@router.get("/health")
def health():
    return {"status": "ok", "db_url_masked": _mask(settings.database_url)}


def _mask(url: str) -> str:
    return url.split("@")[-1] if "@" in url else url
