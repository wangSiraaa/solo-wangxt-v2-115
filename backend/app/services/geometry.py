"""几何与遮挡服务（trimesh 射线求交，合成场景，教学用）。

口径声明：
- 所有射线在 **ENU 米制坐标**中进行（东-北-上），模型坐标先经 coordinates.model_to_enu 旋转。
- 遮挡物**只包含数据库中的建筑体量（Box 合成体量）**。树木、地形、阳台、窗洞凹进、
  遮阳设施、远处未入库建筑均**未建模**，结果不反映这些遮挡（见 UNMODELED_OCCLUDERS）。
- 射线起点沿太阳方向外移 3 cm，避免与自身立面的数值自交。
- 结果是纯几何可见性（太阳圆盘按点光源处理，不考虑 0.53° 张角、晨昏蒙影与大气）。
"""
from __future__ import annotations

from dataclasses import dataclass, field
from datetime import datetime, timedelta

import numpy as np
import trimesh

from .coordinates import model_to_enu

RAY_ORIGIN_LIFT_M = 0.03

UNMODELED_OCCLUDERS = [
    "树木与绿化（教学场景刻意不建模，实地可能造成显著遮挡）",
    "地形高差与场地以外的远处建筑",
    "阳台、挑檐、窗洞侧壁凹进等建筑细部",
    "遮阳板、百叶、临时构筑物",
    "窗玻璃反射、污渍与室内遮挡",
]


@dataclass
class Building:
    id: str
    name: str
    # 模型局部坐标参数（轴对齐盒子）：中心 (x,y,z) 与尺寸 (dx,dy,dz)
    center: tuple[float, float, float]
    size: tuple[float, float, float]
    color: str = "#9aa3ad"

    def mesh_model(self) -> trimesh.Trimesh:
        return trimesh.creation.box(extents=self.size)

    def mesh_enu(self, model_north_deg: float, origin_enu) -> trimesh.Trimesh:
        mesh = self.mesh_model()
        verts = mesh.vertices + np.asarray(self.center)
        verts = model_to_enu(verts, model_north_deg, origin_enu)
        mesh.vertices = verts
        return mesh


@dataclass
class MeasurePoint:
    id: str
    name: str
    model_xyz: tuple[float, float, float]
    normal_azimuth_deg: float | None = None  # 窗外法线真北方位角；None=不判窗面朝向
    window_name: str = ""


@dataclass
class Hit:
    building_id: str
    building_name: str
    distance_m: float
    point_enu: tuple[float, float, float]
    face_index: int


@dataclass
class TraceResult:
    time_local: datetime
    elevation: float
    azimuth: float
    sun_vector_enu: tuple[float, float, float]
    ray_origin_enu: tuple[float, float, float]
    facade_faces_sun: bool | None          # 太阳是否位于窗面外侧半球
    occluded: bool
    nearest: Hit | None = None
    all_hits: list[Hit] = field(default_factory=list)


class OcclusionEngine:
    """场景内逐建筑建立求交器，便于把命中面直接归属到遮挡物。"""

    def __init__(self, buildings: list[Building], model_north_deg: float,
                 origin_enu=(0.0, 0.0, 0.0), target_building_id: str | None = None):
        self.buildings = buildings
        self.model_north_deg = model_north_deg
        self.origin_enu = tuple(origin_enu)
        # 窗点位于目标楼自身表面/盒子内部：射线必然穿过自身三角网，
        # 必须把目标楼排除出"遮挡物"，否则会产生自遮挡伪命中。
        self.target_building_id = target_building_id
        self.meshes: dict[str, trimesh.Trimesh] = {}
        self.intersectors: dict[str, trimesh.ray.ray_triangle.RayMeshIntersector] = {}
        for b in buildings:
            if b.id == target_building_id:
                continue
            m = b.mesh_enu(model_north_deg, self.origin_enu)
            self.meshes[b.id] = m
            self.intersectors[b.id] = trimesh.ray.ray_triangle.RayMeshIntersector(m)

    def point_enu(self, mp: MeasurePoint) -> np.ndarray:
        return model_to_enu(np.asarray(mp.model_xyz, dtype=float),
                            self.model_north_deg, self.origin_enu)

    def trace(self, mp: MeasurePoint, sun_vec_enu: np.ndarray,
              time_local: datetime, elevation: float, azimuth: float,
              normal_enu: np.ndarray | None = None) -> TraceResult:
        p = self.point_enu(mp)
        v = np.asarray(sun_vec_enu, dtype=float)
        v = v / np.linalg.norm(v)
        origin = p + v * RAY_ORIGIN_LIFT_M  # 外移 3cm，避免数值自交
        hits: list[Hit] = []
        for bid, inter in self.intersectors.items():
            b = next(x for x in self.buildings if x.id == bid)
            locs, index_ray, face_idx = inter.intersects_location(
                origin[None, :], v[None, :], multiple_hits=True
            )
            for loc, fidx in zip(locs, face_idx):
                d = float(np.linalg.norm(loc - origin))
                if d > 1e-6:
                    hits.append(Hit(b.id, b.name, d,
                                    tuple(float(x) for x in loc), int(fidx)))
        hits.sort(key=lambda h: h.distance_m)
        facade = None
        if normal_enu is not None:
            facade = bool(np.dot(normal_enu, v) >= -1e-9)
        return TraceResult(
            time_local=time_local, elevation=float(elevation),
            azimuth=float(azimuth),
            sun_vector_enu=tuple(float(x) for x in v),
            ray_origin_enu=tuple(float(x) for x in origin),
            facade_faces_sun=facade,
            occluded=len(hits) > 0,
            nearest=hits[0] if hits else None,
            all_hits=hits,
        )


# ---------- 时段聚合：逐时采样 vs 连续遮挡时段 ----------

@dataclass
class Segment:
    kind: str            # "sunlit" 或 "occluded"
    start: datetime
    end: datetime
    duration_min: float
    occluder_ids: list[str] = field(default_factory=list)


def run_length_segments(traces: list[TraceResult],
                        step_seconds: int) -> list[Segment]:
    """把细密网格上的逐刻状态游程编码为**连续时段**。

    约定：每根射线代表长度为 ``step_seconds`` 的时间格中点/起点；
    连续同类格合并，段长 = 格数 × 步长。遮挡段记录段内出现过的遮挡物 id。
    """
    if not traces:
        return []
    sunlit = [not t.occluded for t in traces]
    # 窗面测点：太阳在窗背侧半球时不算"可照"，标记为遮挡态并注明 occluder=FACADE_AWAY
    states = []
    for tr, ok in zip(traces, sunlit):
        if not ok:
            states.append("occluded")
        elif tr.facade_faces_sun is False:
            states.append("facade_away")
        else:
            states.append("sunlit")

    segments: list[Segment] = []
    i = 0
    while i < len(states):
        j = i
        occluders: set[str] = set()
        while j + 1 < len(states) and states[j + 1] == states[i]:
            j += 1
        for tr in traces[i:j + 1]:
            if tr.nearest is not None:
                occluders.add(tr.nearest.building_id)
        n_cells = j - i + 1
        start = traces[i].time_local
        end = traces[j].time_local + timedelta(seconds=step_seconds)
        kind = states[i]
        if kind == "facade_away":
            occluders.add("FACADE_AWAY")
        segments.append(Segment(
            kind=("occluded" if kind != "sunlit" else "sunlit"),
            start=start, end=end,
            duration_min=n_cells * step_seconds / 60.0,
            occluder_ids=sorted(occluders),
        ))
        i = j + 1
    return segments


def summarize_hourly(traces: list[TraceResult]) -> dict:
    """逐时采样口径：只报"命中/未命中样本数"，绝不换算成连续时长。"""
    total = len(traces)
    sunlit = sum(1 for t in traces if not t.occluded
                 and t.facade_faces_sun is not False)
    occluded = sum(1 for t in traces if t.occluded)
    away = sum(1 for t in traces if not t.occluded
               and t.facade_faces_sun is False)
    return {
        "sampling": "hourly_instant",
        "samples_total": total,
        "samples_sunlit": sunlit,
        "samples_occluded": occluded,
        "samples_facade_away": away,
        "sunlit_sample_ratio": round(sunlit / total, 4) if total else None,
        "note": "逐时为瞬时采样口径，样本数不等于日照小时数；连续时长请看 fine_grid 结果。",
    }


def summarize_continuous(segments: list[Segment]) -> dict:
    sunlit_min = sum(s.duration_min for s in segments if s.kind == "sunlit")
    occ_segs = [s for s in segments if s.kind == "occluded"]
    return {
        "sampling": "fine_grid_run_length",
        "sunlit_duration_min": round(sunlit_min, 2),
        "sunlit_duration_h": round(sunlit_min / 60.0, 3),
        "occluded_segments": [
            {
                "start": s.start.isoformat(timespec="minutes"),
                "end": s.end.isoformat(timespec="minutes"),
                "duration_min": round(s.duration_min, 2),
                "occluder_ids": s.occluder_ids,
            }
            for s in occ_segs
        ],
        "sunlit_segments": [
            {
                "start": s.start.isoformat(timespec="minutes"),
                "end": s.end.isoformat(timespec="minutes"),
                "duration_min": round(s.duration_min, 2),
            }
            for s in segments if s.kind == "sunlit"
        ],
    }
