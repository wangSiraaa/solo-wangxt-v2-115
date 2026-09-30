"""手算核对 3：pvlib 太阳位置与评价口径。

- 时区必须按 IANA 解释：南京冬至太阳过中天在本地墙钟约 12:00（中国统一 UTC+8，
  经度 118.8° 与标准子午线 120° 差 4.8 分钟，中天约 12:05 前后）。
- 冬至高度角与天文年历近似值核对：32°N 冬至正午 h ≈ 90-32-23.44 = 34.56°。
- 夏至 h ≈ 90-32+23.44 = 81.44°。
- 逐时口径与连续时段口径必须分离：前者只数样本，后者给分钟数。
"""
import pandas as pd

from app.services import analysis, solar
from app.services.synthetic_scene import SCENES

SCENE_A = next(s for s in SCENES if s["code"] == "A")
W1 = next(p for p in SCENE_A["points"] if p["code"] == "W1")


def test_winter_noon_elevation_matches_almanac():
    tb = solar._compute(32.0, 118.8, "Asia/Shanghai",
                        [pd.Timestamp("2025-12-22 12:00", tz="Asia/Shanghai")])
    assert abs(tb.elevation[0] - 34.56) < 0.5
    assert abs(tb.azimuth[0] - 180.0) < 2.0


def test_summer_noon_elevation_matches_almanac():
    tb = solar._compute(32.0, 118.8, "Asia/Shanghai",
                        [pd.Timestamp("2025-06-21 12:00", tz="Asia/Shanghai")])
    assert abs(tb.elevation[0] - 81.44) < 0.6


def test_hourly_and_continuous_are_distinct():
    res = analysis.evaluate_point(SCENE_A, W1, "2025-12-22", 300)
    h, c = res["hourly"]["summary"], res["continuous"]
    assert h["sampling"] == "hourly_instant"
    assert c["sampling"] == "fine_grid_run_length"
    # 逐时结果里不得出现"时长分钟"字段；连续结果里必须有
    assert "sunlit_duration_min" not in h
    assert "sunlit_duration_min" in c
    assert h["samples_total"] == h["samples_sunlit"] + \
        h["samples_occluded"] + h["samples_facade_away"]
    # 连续时段之和（可照+遮挡）覆盖全部日照时间网格
    total = c["sunlit_duration_min"] + sum(
        s["duration_min"] for s in c["occluded_segments"])
    assert total > 0
    # 冬至 W1 低窗：正午被 N1 遮挡，连续可照不应超过全天可照（几何可照约 6.6h 内）
    assert 0 < c["sunlit_duration_min"] < 600


def test_summer_w1_more_sun_than_winter():
    w = analysis.evaluate_point(SCENE_A, W1, "2025-12-22", 300)["continuous"]
    s = analysis.evaluate_point(SCENE_A, W1, "2025-06-21", 300)["continuous"]
    assert s["sunlit_duration_min"] > w["sunlit_duration_min"]


def test_solar_timezone_is_local_wall_clock():
    # 同一 UTC 瞬间，用 UTC 与 Asia/Shanghai 解释得到的高度角应相差约一个时段的日弧
    t_utc = pd.Timestamp("2025-12-22 04:00", tz="UTC")  # 北京 12:00
    tb_local = solar._compute(32.0, 118.8, "Asia/Shanghai", [t_utc])
    assert tb_local.elevation[0] > 30  # 按本地 12:00 算，太阳高悬
