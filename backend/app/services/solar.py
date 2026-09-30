"""太阳位置服务（pvlib 封装）。

口径声明（教学用）：
- 时间序列为**当地墙钟时间**（由 IANA 时区解释），pvlib 内部转 UTC 计算。
- 输出高度角 elevation 与真北顺时针方位角 azimuth，并转成 ENU 单位向量。
- 仅计算**几何可见性**：太阳在地平线以上即"几何可照"，不引入天气、云量。
  这不能与"晴好天气截图""实测辐射"混为一谈——截图只反映瞬时，不代表时长。
"""
from __future__ import annotations

from dataclasses import dataclass
from datetime import datetime, time, timedelta

import numpy as np
import pandas as pd
import pvlib


@dataclass
class SolarTable:
    times_local: list[datetime]
    elevation: np.ndarray          # 度
    azimuth: np.ndarray            # 度，真北顺时针
    vectors_enu: np.ndarray        # (N,3)

    def to_dicts(self) -> list[dict]:
        return [
            {
                "time_local": t.isoformat(timespec="minutes"),
                "elevation": round(float(el), 4),
                "azimuth": round(float(az), 4),
                "sun_vector_enu": [round(float(v), 6) for v in vec],
            }
            for t, el, az, vec in zip(
                self.times_local, self.elevation, self.azimuth, self.vectors_enu
            )
        ]


def _compute(lat: float, lon: float, timezone: str, times: list[datetime]):
    from .coordinates import solar_vector_enu

    tz_aware = pd.DatetimeIndex(times, tz=timezone)
    # 固定温度/气压仅用于折光修正；method='nrel_numpy' 不依赖网络。
    sp = pvlib.solarposition.get_solarposition(
        tz_aware, lat, lon,
        method="nrel_numpy",
        temperature=12, pressure=101325,
    )
    el = sp["elevation"].to_numpy(dtype=float)
    az = sp["azimuth"].to_numpy(dtype=float)
    return SolarTable(
        times_local=[t.to_pydatetime() for t in tz_aware],
        elevation=el,
        azimuth=az,
        vectors_enu=solar_vector_enu(el, az),
    )


def hourly_samples(lat: float, lon: float, timezone: str,
                   date: str, elev_min: float = 0.0) -> SolarTable:
    """逐时采样（整点，本地时间）。**这是采样口径**，不是连续时长。"""
    start = datetime.fromisoformat(date).combine(
        datetime.fromisoformat(date).date(), time(5, 0)
    )
    end = start.replace(hour=20)
    times = [start + timedelta(hours=k) for k in range((end - start).seconds // 3600 + 1)]
    table = _compute(lat, lon, timezone, times)
    mask = table.elevation > elev_min
    table.times_local = [t for t, m in zip(table.times_local, mask) if m]
    table.elevation, table.azimuth = table.elevation[mask], table.azimuth[mask]
    table.vectors_enu = table.vectors_enu[mask]
    return table


def fine_grid(lat: float, lon: float, timezone: str, date: str,
              step_seconds: int = 60, elev_min: float = 0.0) -> SolarTable:
    """细密时间网格（默认 60 秒），用于求**连续遮挡时段**，与逐时采样严格区分。"""
    day = datetime.fromisoformat(date).date()
    start = datetime.combine(day, time(0, 0))
    times = []
    t = start
    while t.date() == day:
        times.append(t)
        t += timedelta(seconds=step_seconds)
    table = _compute(lat, lon, timezone, times)
    mask = table.elevation > elev_min
    table.times_local = [t for t, m in zip(table.times_local, mask) if m]
    table.elevation, table.azimuth = table.elevation[mask], table.azimuth[mask]
    table.vectors_enu = table.vectors_enu[mask]
    return table
