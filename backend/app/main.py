"""FastAPI 入口。前端构建产物放在 frontend/dist 时一并静态托管。"""
from __future__ import annotations

import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from .api.routes import router
from .config import settings

app = FastAPI(
    title="日照遮挡教学工作台",
    description="FastAPI + pvlib + trimesh + PostGIS；仅合成教学场景，非合规结论。",
    version="0.1.0",
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[o.strip() for o in settings.cors_origins.split(",")],
    allow_methods=["*"], allow_headers=["*"],
)
app.include_router(router)


@app.get("/")
def root():
    return {"service": "sun-occlusion-teaching-workbench",
            "docs": "/docs", "warning": "synthetic teaching only"}


if os.path.isdir(settings.frontend_dist):
    app.mount("/app", StaticFiles(directory=settings.frontend_dist, html=True),
              name="frontend")
