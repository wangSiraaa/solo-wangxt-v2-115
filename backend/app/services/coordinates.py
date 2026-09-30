"""坐标基准模块（教学用，合成场景）。

统一三件事，缺一不可：
1. 经纬度基准：默认 WGS84 椭球，ENU 局部切平面（东-北-上）。
2. 当地时区：IANA 名称（如 ``Asia/Shanghai``），pvlib 按该时区解释本地时刻。
3. 模型朝北方向 ``model_north_deg``：建筑模型局部坐标 +Y 轴相对**真北**的顺时针方位角。
   0 表示模型 +Y 即真北；30 表示模型 +Y 指向真北顺时针 30°。
   旋转角属于**场景元数据**，不能逐测点随意设定。

太阳方位角统一采用"真北顺时针"口径（pvlib ``azimuth`` 即此口径，北半球正南为 180°）。
本模块不处理磁偏角、UTM 分区与投影坐标转换——教学场景统一使用 ENU 米制坐标。
"""
from __future__ import annotations

import math
from dataclasses import dataclass

import numpy as np

# WGS84 椭球参数
WGS84_A = 6378137.0
WGS84_F = 1 / 298.257223563
WGS84_E2 = WGS84_F * (2 - WGS84_F)


@dataclass(frozen=True)
class GeoDatum:
    name: str = "WGS84"
    a: float = WGS84_A
    e2: float = WGS84_E2


def _prime_vertical_radius(lat_rad: float, datum: GeoDatum) -> float:
    return datum.a / math.sqrt(1 - datum.e2 * math.sin(lat_rad) ** 2)


def llh_to_enu(lon, lat, h, lon0: float, lat0: float, h0: float = 0.0,
               datum: GeoDatum = GeoDatum()):
    """经纬度(度)+椭球高(米) -> 以参考点为原点的 ENU（东,北,上，米）。

    支持标量或数组输入。教学场景半径 <1 km，平面近似误差可忽略，
    这里仍采用带大地高的标准正切变换，便于和手工三角核对。
    """
    lon = np.asarray(lon, dtype=float)
    lat = np.asarray(lat, dtype=float)
    h = np.asarray(h, dtype=float)
    lat0r, lon0r = math.radians(lat0), math.radians(lon0)
    n0 = _prime_vertical_radius(lat0r, datum)
    x0 = (n0 + h0) * math.cos(lat0r) * math.cos(lon0r)
    y0 = (n0 + h0) * math.cos(lat0r) * math.sin(lon0r)
    z0 = (n0 * (1 - datum.e2) + h0) * math.sin(lat0r)

    latr, lonr = np.radians(lat), np.radians(lon)
    n = datum.a / np.sqrt(1 - datum.e2 * np.sin(latr) ** 2)
    x = (n + h) * np.cos(latr) * np.cos(lonr)
    y = (n + h) * np.cos(latr) * np.sin(lonr)
    z = (n * (1 - datum.e2) + h) * np.sin(latr)

    dx, dy, dz = x - x0, y - y0, z - z0
    sl, cl, so, co = math.sin(lat0r), math.cos(lat0r), math.sin(lon0r), math.cos(lon0r)
    east = -so * dx + co * dy
    north = -sl * co * dx - sl * so * dy + cl * dz
    up = cl * co * dx + cl * so * dy + sl * dz
    return np.column_stack([east, north, up]) if east.ndim else np.array(
        [float(east), float(north), float(up)]
    )


def enu_to_llh(e, n, u, lon0: float, lat0: float, h0: float = 0.0,
               datum: GeoDatum = GeoDatum()):
    """ENU（东,北,上，米） -> 经纬度(度)+椭球高(米)。"""
    e = np.asarray(e, dtype=float)
    n = np.asarray(n, dtype=float)
    u = np.asarray(u, dtype=float)
    lat0r, lon0r = math.radians(lat0), math.radians(lon0)
    n0 = _prime_vertical_radius(lat0r, datum)
    x0 = (n0 + h0) * math.cos(lat0r) * math.cos(lon0r)
    y0 = (n0 + h0) * math.cos(lat0r) * math.sin(lon0r)
    z0 = (n0 * (1 - datum.e2) + h0) * math.sin(lat0r)
    sl, cl, so, co = math.sin(lat0r), math.cos(lat0r), math.sin(lon0r), math.cos(lon0r)
    # ENU -> ECEF 旋转（上式的逆 = 转置）
    dx = -so * e - sl * co * n + cl * co * u
    dy = co * e - sl * so * n + cl * so * u
    dz = cl * n + sl * u
    x, y, z = x0 + dx, y0 + dy, z0 + dz
    # ECEF -> 大地坐标（标准纬度迭代，教学精度足够）
    p = np.hypot(x, y)
    lonr = np.arctan2(y, x)
    latr = np.arctan2(z, p * (1 - datum.e2))
    for _ in range(5):
        nn = datum.a / np.sqrt(1 - datum.e2 * np.sin(latr) ** 2)
        latr = np.arctan2(z + datum.e2 * nn * np.sin(latr), p)
    hgt = p / np.cos(latr) - datum.a / np.sqrt(1 - datum.e2 * np.sin(latr) ** 2)
    return np.degrees(lonr), np.degrees(latr), hgt


# ---------- 模型坐标 <-> ENU ----------

def model_to_enu(points, model_north_deg: float, origin_enu=(0.0, 0.0, 0.0)):
    """模型局部坐标 (x=右, y=模型北, z=上) 转 ENU。

    模型 +Y 轴的真北方位角为 ``model_north_deg``（顺时针）。
    因此模型向量 (dx, dy) 对应的 ENU 水平分量：
        E = dx cosα + dy sinα
        N = -dx sinα + dy cosα
    其中 α=model_north_deg。α=0 时模型轴与 ENU 重合。
    """
    pts = np.asarray(points, dtype=float)
    single = pts.ndim == 1
    if single:
        pts = pts[None, :]
    a = math.radians(model_north_deg)
    ca, sa = math.cos(a), math.sin(a)
    e = pts[:, 0] * ca + pts[:, 1] * sa + origin_enu[0]
    n = -pts[:, 0] * sa + pts[:, 1] * ca + origin_enu[1]
    u = pts[:, 2] + origin_enu[2]
    out = np.column_stack([e, n, u])
    return out[0] if single else out


def enu_to_model(points, model_north_deg: float, origin_enu=(0.0, 0.0, 0.0)):
    """ENU 转模型局部坐标（model_to_enu 的逆变换，验证旋转一致性用）。"""
    pts = np.asarray(points, dtype=float)
    single = pts.ndim == 1
    if single:
        pts = pts[None, :]
    a = math.radians(model_north_deg)
    ca, sa = math.cos(a), math.sin(a)
    de = pts[:, 0] - origin_enu[0]
    dn = pts[:, 1] - origin_enu[1]
    x = ca * de - sa * dn
    y = sa * de + ca * dn
    z = pts[:, 2] - origin_enu[2]
    out = np.column_stack([x, y, z])
    return out[0] if single else out


# ---------- 太阳向量 ----------

def solar_vector_enu(elevation_deg, azimuth_north_cw_deg):
    """高度角 + 真北顺时针方位角 -> ENU 单位向量（数组输入返回 (N,3)）。

    高度角 h 为地平线以上仰角；方位角 A 为真北起顺时针。
        E = cos h sin A,  N = cos h cos A,  U = sin h
    与 pvlib ``solarposition.nrel_earthsun_azimuth_zenith`` 的分量口径一致。
    """
    h = np.radians(np.asarray(elevation_deg, dtype=float))
    az = np.radians(np.asarray(azimuth_north_cw_deg, dtype=float))
    east = np.cos(h) * np.sin(az)
    north = np.cos(h) * np.cos(az)
    up = np.sin(h)
    vec = np.column_stack([east, north, up]) if east.ndim == 1 \
        else np.array([float(east), float(north), float(up)])
    return vec


def facade_normal_enu(azimuth_north_cw_deg):
    """窗面外法线方位角（真北顺时针）-> 水平单位向量 ENU。

    例：朝南立面外法线 A=180° -> (E=0, N=-1, U=0)。
    """
    a = math.radians(azimuth_north_cw_deg)
    return np.array([math.sin(a), math.cos(a), 0.0])


def validate_datum_consistency(scene_meta: dict) -> list[str]:
    """校验场景元数据中经纬度基准/时区/朝北的统一性，返回问题清单（空=通过）。"""
    problems: list[str] = []
    for key in ("lat", "lon", "timezone", "model_north_deg"):
        if scene_meta.get(key) is None:
            problems.append(f"场景缺少统一元数据: {key}")
    if "timezone" in scene_meta and "/" not in str(scene_meta["timezone"]) \
            and str(scene_meta["timezone"]) not in {"UTC"}:
        problems.append("时区应使用 IANA 名称（如 Asia/Shanghai），勿用 UTC 偏移量")
    mn = scene_meta.get("model_north_deg")
    if mn is not None and not (-360 <= float(mn) <= 360):
        problems.append("model_north_deg 超出合理角度范围")
    return problems
