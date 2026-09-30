"""ORM 模型：场景（含统一坐标基准）、建筑体量、窗面测点、评价结果、快照。

教学说明：几何主数据存模型局部坐标 + 场景级旋转角；
PostGIS 中同时保存 ENU/WGS84 派生几何，便于空间查询与结果追查。
坐标基准（经纬度基准、时区、模型朝北）挂在场景级，保证三者统一。
"""
from __future__ import annotations

from datetime import datetime

from geoalchemy2 import Geometry
from sqlalchemy import (JSON, Boolean, DateTime, Float, ForeignKey, Integer,
                        String, Text, UniqueConstraint)
from sqlalchemy.orm import Mapped, mapped_column, relationship

from ..db import Base


class Scene(Base):
    __tablename__ = "scenes"

    id: Mapped[int] = mapped_column(primary_key=True)
    code: Mapped[str] = mapped_column(String(16), unique=True)
    name: Mapped[str] = mapped_column(String(200))
    # ---- 统一坐标基准（场景级，不允许逐测点各搞一套）----
    datum_name: Mapped[str] = mapped_column(String(32), default="WGS84")
    lat: Mapped[float] = mapped_column(Float)
    lon: Mapped[float] = mapped_column(Float)
    timezone: Mapped[str] = mapped_column(String(64))
    model_north_deg: Mapped[float] = mapped_column(Float, default=0.0)
    origin_e: Mapped[float] = mapped_column(Float, default=0.0)
    origin_n: Mapped[float] = mapped_column(Float, default=0.0)
    origin_u: Mapped[float] = mapped_column(Float, default=0.0)
    note: Mapped[str] = mapped_column(Text, default="")
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)

    buildings: Mapped[list["Building"]] = relationship(
        back_populates="scene", cascade="all, delete-orphan")
    points: Mapped[list["MeasurePointModel"]] = relationship(
        back_populates="scene", cascade="all, delete-orphan")
    results: Mapped[list["Evaluation"]] = relationship(
        back_populates="scene", cascade="all, delete-orphan")


class Building(Base):
    __tablename__ = "buildings"
    __table_args__ = (UniqueConstraint("scene_id", "code", name="uq_building_scene_code"),)

    id: Mapped[int] = mapped_column(primary_key=True)
    scene_id: Mapped[int] = mapped_column(ForeignKey("scenes.id", ondelete="CASCADE"))
    code: Mapped[str] = mapped_column(String(16))
    name: Mapped[str] = mapped_column(String(200))
    cx: Mapped[float] = mapped_column(Float)
    cy: Mapped[float] = mapped_column(Float)
    cz: Mapped[float] = mapped_column(Float)
    sx: Mapped[float] = mapped_column(Float)
    sy: Mapped[float] = mapped_column(Float)
    sz: Mapped[float] = mapped_column(Float)
    color: Mapped[str] = mapped_column(String(16), default="#9aa3ad")
    is_target: Mapped[bool] = mapped_column(Boolean, default=False)
    # ENU 下的底面多边形（z 不进 2D 几何，高度存 sz）
    footprint_enu = mapped_column(Geometry("POLYGON", srid=0), nullable=True)
    # WGS84 下的底面多边形（srid=4326），由 ENU 反算
    footprint_wgs84 = mapped_column(Geometry("POLYGON", srid=4326), nullable=True)

    scene: Mapped[Scene] = relationship(back_populates="buildings")


class MeasurePointModel(Base):
    __tablename__ = "measure_points"
    __table_args__ = (UniqueConstraint("scene_id", "code", name="uq_point_scene_code"),)

    id: Mapped[int] = mapped_column(primary_key=True)
    scene_id: Mapped[int] = mapped_column(ForeignKey("scenes.id", ondelete="CASCADE"))
    code: Mapped[str] = mapped_column(String(16))
    name: Mapped[str] = mapped_column(String(200))
    px: Mapped[float] = mapped_column(Float)
    py: Mapped[float] = mapped_column(Float)
    pz: Mapped[float] = mapped_column(Float)
    normal_azimuth_deg: Mapped[float] = mapped_column(Float, nullable=True)
    window_name: Mapped[str] = mapped_column(String(200), default="")
    # 测点在 ENU 与 WGS84 中的位置（PostGIS 点）
    position_enu = mapped_column(Geometry("POINTZ", srid=0), nullable=True)
    position_wgs84 = mapped_column(Geometry("POINTZ", srid=4326), nullable=True)

    scene: Mapped[Scene] = relationship(back_populates="points")


class Evaluation(Base):
    """一次评价：某场景×某日期×某测点，逐时与细网格两套结果分别存 JSON。"""
    __tablename__ = "evaluations"
    __table_args__ = (UniqueConstraint(
        "scene_id", "point_id", "eval_date", name="uq_eval_scene_point_date"),)

    id: Mapped[int] = mapped_column(primary_key=True)
    scene_id: Mapped[int] = mapped_column(ForeignKey("scenes.id", ondelete="CASCADE"))
    point_id: Mapped[int] = mapped_column(
        ForeignKey("measure_points.id", ondelete="CASCADE"))
    eval_date: Mapped[str] = mapped_column(String(10))
    hourly_summary: Mapped[dict] = mapped_column(JSON)
    continuous_summary: Mapped[dict] = mapped_column(JSON)
    hourly_traces: Mapped[list] = mapped_column(JSON)
    snapshot_id: Mapped[int | None] = mapped_column(
        ForeignKey("snapshots.id", ondelete="SET NULL"), nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)

    scene: Mapped[Scene] = relationship(back_populates="results")
    point: Mapped["MeasurePointModel"] = relationship()
    snapshot: Mapped["Snapshot"] = relationship()


class Snapshot(Base):
    """场景快照（Three.js 相机位姿 + 可选缩略图路径），结果通过 snapshot_id 关联。"""
    __tablename__ = "snapshots"

    id: Mapped[int] = mapped_column(primary_key=True)
    scene_id: Mapped[int] = mapped_column(ForeignKey("scenes.id", ondelete="CASCADE"))
    label: Mapped[str] = mapped_column(String(200))
    camera_state: Mapped[dict] = mapped_column(JSON)
    thumbnail_path: Mapped[str] = mapped_column(String(500), nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)
