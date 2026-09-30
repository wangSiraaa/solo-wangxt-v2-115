"""手算核对 1：坐标变换。

已知几何（无任何外部数据）：
- ENU 基线下模型朝北 α=30°，模型向量 (dx,dy) 转 ENU：
      E = dx cosα + dy sinα,  N = -dx sinα + dy cosα
- (10, 0, 0)  -> (10cos30, -10sin30, 0) = (8.6603, -5.0, 0)
- (0, 10, 0)  -> (10sin30,  10cos30, 0) = (5.0, 8.6603, 0)
往返必须恒等。
"""
import math

import numpy as np

from app.services.coordinates import (enu_to_model, model_to_enu,
                                      solar_vector_enu,
                                      llh_to_enu, enu_to_llh,
                                      facade_normal_enu)


def test_rotation_known_values_30deg():
    out = model_to_enu([(10.0, 0.0, 0.0), (0.0, 10.0, 0.0)], 30.0)
    assert np.allclose(out[0], [math.cos(math.radians(30)) * 10, -5.0, 0.0], atol=1e-9)
    assert np.allclose(out[1], [5.0, math.cos(math.radians(30)) * 10, 0.0], atol=1e-9)


def test_rotation_zero_is_identity():
    p = [(3.0, -7.0, 11.0)]
    assert np.allclose(model_to_enu(p, 0.0), p)


def test_roundtrip():
    pts = np.array([[12.5, -4.0, 3.0], [-8.0, 9.0, 27.0]])
    for alpha in (-73.0, 0.0, 30.0, 145.0, 360.0):
        back = enu_to_model(model_to_enu(pts, alpha), alpha)
        assert np.allclose(back, pts, atol=1e-9)


def test_solar_vector_cardinal_directions():
    # 正南 A=180，水平 h=0 -> N 方向 -1
    v = solar_vector_enu(0.0, 180.0)
    assert np.allclose(v, [0.0, -1.0, 0.0], atol=1e-12)
    # 正东 h=0 -> E +1
    v = solar_vector_enu(0.0, 90.0)
    assert np.allclose(v, [1.0, 0.0, 0.0], atol=1e-12)
    # h=90 -> U +1
    v = solar_vector_enu(90.0, 180.0)
    assert np.allclose(v, [0.0, 0.0, 1.0], atol=1e-12)


def test_facade_normal():
    assert np.allclose(facade_normal_enu(180.0), [0.0, -1.0, 0.0])
    assert np.allclose(facade_normal_enu(270.0), [-1.0, 0.0, 0.0])


def test_llh_enu_roundtrip_and_baseline_zeros():
    lat0, lon0 = 32.0, 118.8
    enu = llh_to_enu(lon0, lat0, 0.0, lon0, lat0)
    assert np.allclose(enu, [0, 0, 0], atol=1e-6)
    # 参考点向东约 100m（经线方向 1 度≈111.32km*cos32 处），往返闭合
    import math as m
    dlon = 0.001 / m.cos(m.radians(lat0))
    lon, lat, h = enu_to_llh(100.0, 0.0, 0.0, lon0, lat0)
    enu2 = llh_to_enu(lon, lat, h, lon0, lat0)
    assert np.allclose(enu2, [100, 0, 0], atol=1e-4)
