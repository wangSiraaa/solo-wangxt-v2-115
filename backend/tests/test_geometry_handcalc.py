"""手算核对 2：射线遮挡边界（场景A，全部由已知盒子几何推出）。

场景A（α=0，模型坐标即 ENU）：
- W1 低窗：(x=-6, y=-5, z=1.5)，南窗外法线方位 180°
- N1 盒子：x∈[-7,7], y∈[-32.5,-17.5], z∈[0,15]
正午射线 A=180（沿 -y）水平距离到 N1 北立面 = 12.5 m
临界高度角 h* = atan((15 - 1.5)/12.5) = atan(1.08) ≈ 47.2026°
  h < h* 必遮挡（且 x=-6 在 [-7,7] 内）；h > h* 越过屋顶，不遮挡。
另外：
- A=180、W4 高窗 z=25：射线恒在 N1 屋顶之上，不遮挡。
- W1 朝北（法线 0°）时太阳在窗背侧：facade_faces_sun=False（窗面背日，不计可照）。
"""
import math

from app.services import analysis
from app.services.synthetic_scene import SCENES

SCENE_A = next(s for s in SCENES if s["code"] == "A")
W1 = next(p for p in SCENE_A["points"] if p["code"] == "W1")
W4 = next(p for p in SCENE_A["points"] if p["code"] == "W4")

H_STAR = math.degrees(math.atan((15.0 - 1.5) / 12.5))


def test_noon_threshold_value():
    assert abs(H_STAR - 47.2026) < 1e-3


def test_w1_noon_below_threshold_occluded_by_N1():
    r = analysis.trace_analytic(SCENE_A, W1, H_STAR - 2.0, 180.0)
    t = r["trace"]
    assert t["occluded"] is True
    assert t["nearest"]["building_id"] == "N1"
    # 命中点 y 必在 N1 北立面上
    assert abs(t["nearest"]["hit_point_enu"][1] - (-17.5)) < 1e-6


def test_w1_noon_above_threshold_clear():
    r = analysis.trace_analytic(SCENE_A, W1, H_STAR + 2.0, 180.0)
    assert r["trace"]["occluded"] is False


def test_w1_noon_near_threshold_matches_hand_calc():
    # 在 h* 下方 0.05° 应恰好遮挡（边界本身数值相切可能不稳定，用小余量）
    r = analysis.trace_analytic(SCENE_A, W1, H_STAR - 0.05, 180.0)
    assert r["trace"]["occluded"] is True


def test_w4_high_window_never_occluded_at_noon():
    for h in (10.0, 30.0, 60.0, 85.0):
        r = analysis.trace_analytic(SCENE_A, W4, h, 180.0)
        assert r["trace"]["occluded"] is False


def test_facade_away_flag_for_north_facing():
    # 复制 W1 但法线朝北；正午太阳位于南半天，窗面背日
    p_north = dict(W1)
    p_north["normal_azimuth_deg"] = 0.0
    r = analysis.trace_analytic(SCENE_A, p_north, 35.0, 180.0)
    assert r["trace"]["facade_faces_sun"] is False


def test_hit_face_index_is_traceable():
    # 单点追查必须能给出遮挡物、命中面索引与命中点
    r = analysis.trace_analytic(SCENE_A, W1, 35.0, 180.0)
    h = r["trace"]["nearest"]
    assert h["building_name"]
    assert isinstance(h["face_index"], int)
    assert len(h["hit_point_enu"]) == 3


def test_target_building_never_self_occludes():
    # 太阳从北半天照南窗（窗背日）时，射线穿目标楼盒子，
    # 但目标楼 T1 已排除出遮挡物集合：occluded 必须为 False，只能记 FACADE_AWAY。
    r = analysis.trace_analytic(SCENE_A, W1, 20.0, 0.0)  # 正北低空太阳
    assert r["trace"]["occluded"] is False
    assert r["trace"]["nearest"] is None
    assert r["trace"]["facade_faces_sun"] is False


def test_rotation_scene_b_geometrically_consistent():
    # 场景B = 场景A 同几何旋转 30°：解析射线 A=210 时（模型南），
    # 对 N1 的遮挡临界高度角应与场景A 正午一致（47.20°，因为窗与 N1 几何关系不变）
    sb = next(s for s in SCENES if s["code"] == "B")
    w1b = next(p for p in sb["points"] if p["code"] == "W1")
    r_below = analysis.trace_analytic(sb, w1b, H_STAR - 2.0, 210.0)
    r_above = analysis.trace_analytic(sb, w1b, H_STAR + 2.0, 210.0)
    assert r_below["trace"]["occluded"] is True
    assert r_below["trace"]["nearest"]["building_id"] == "N1"
    assert r_above["trace"]["occluded"] is False
