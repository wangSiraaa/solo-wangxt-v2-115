"""API 端到端冒烟：场景列表、解析射线、评价结果口径分离；库内 PostGIS 几何抽查。

标记为 db 依赖：需先运行 ``python -m app.seed`` 且 DATABASE_URL 可达。
"""
import os

import pytest
from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_health_and_meta():
    r = client.get("/api/health")
    assert r.status_code == 200
    m = client.get("/api/meta").json()
    assert "非规划合规" in m["banner"] or "不构成" in m["banner"]
    assert "树木" in "".join(m["unmodeled_occluders"])
    assert set(x["date"] for x in m["eval_dates"]) == {"2025-12-22", "2025-06-21"}


def test_scene_datum_unified_and_exposed():
    scenes = {s["code"]: s for s in client.get("/api/scenes").json()}
    for code, s in scenes.items():
        d = s["datum"]
        assert d["timezone"] == "Asia/Shanghai"
        assert d["model_north_deg"] in (0.0, 30.0)
        assert s["datum_check"] == []


def test_analytic_trace_endpoint():
    r = client.post("/api/trace-analytic", json={
        "scene_code": "A", "point_code": "W1",
        "elevation_deg": 35.0, "azimuth_deg": 180.0})
    t = r.json()["trace"]
    assert t["occluded"] is True
    assert t["nearest"]["building_id"] == "N1"


def test_evaluate_endpoint_rejects_non_teaching_date():
    r = client.post("/api/evaluate", json={
        "scene_code": "A", "point_code": "W1", "date": "2025-01-01"})
    assert r.status_code == 400


def test_evaluate_endpoint_two_metrics():
    r = client.post("/api/evaluate", json={
        "scene_code": "A", "point_code": "W1", "date": "2025-12-22"})
    res = r.json()
    assert res["hourly"]["summary"]["sampling"] == "hourly_instant"
    assert res["continuous"]["sampling"] == "fine_grid_run_length"
    assert any("树木" in x for x in res["unmodeled_occluders"])


@pytest.mark.skipif(os.getenv("DATABASE_URL") is None,
                    reason="需要 PostgreSQL/PostGIS 与 seed 数据")
def test_postgis_geometries_roundtrip():
    r = client.get("/api/db/verify-geometries", params={"scene_code": "A"})
    assert r.status_code == 200
    data = r.json()
    assert data["scene"]["datum"] == "WGS84"
    wkts = [b["wkt"] for b in data["building_footprints_wgs84"] if b["wkt"]]
    assert len(wkts) == 3
    assert all("POLYGON" in w for w in wkts)
