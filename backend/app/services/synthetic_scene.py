"""合成教学场景定义。

两个场景共享同一套模型局部几何，区别只在 ``model_north_deg``，
用于演示"模型朝北与真北不统一"会导致什么样的结果差异：
- scene_A：模型 +Y 与真北重合（model_north_deg=0），窗朝正南。
- scene_B：同一几何旋转 30°（model_north_deg=30），窗朝真方位 210°，邻楼随之旋转。

场地坐标为虚构（lat/lon 取南京附近的圆整数），建筑尺寸仅用于教学，
不代表任何真实地块或规划方案。
单位：米。模型坐标 x=向右(模型东)、y=模型北、z=向上，地面 z=0。
"""
from __future__ import annotations

SCENES = [
    {
        "code": "A",
        "name": "场景A 正南窗·邻楼遮挡（模型北=真北）",
        "lat": 32.0,
        "lon": 118.8,
        "timezone": "Asia/Shanghai",
        "datum_name": "WGS84",
        "model_north_deg": 0.0,
        "note": "合成场地，纯教学用，不对应真实地块；不构成规划合规结论。",
        "buildings": [
            {
                "code": "T1", "name": "目标住宅楼（受测窗所在楼）",
                "center": [0.0, 0.0, 15.0], "size": [20.0, 10.0, 30.0],
                "color": "#c9d4e3", "is_target": True,
            },
            {
                "code": "N1", "name": "南侧邻楼（正午前后遮挡）",
                "center": [0.0, -25.0, 7.5], "size": [14.0, 15.0, 15.0],
                "color": "#e8b04b", "is_target": False,
            },
            {
                "code": "N2", "name": "西侧邻楼（跨西立面，下午遮挡，上午边缘擦过）",
                "center": [-18.0, -10.0, 9.0], "size": [8.0, 12.0, 18.0],
                "color": "#d98c5f", "is_target": False,
            },
        ],
        "points": [
            {"code": "W1", "name": "一层左窗 z=1.5m",
             "model_xyz": [-6.0, -5.0, 1.5], "normal_azimuth_deg": 180.0,
             "window_name": "南立面左窗"},
            {"code": "W2", "name": "三层中窗 z=10m",
             "model_xyz": [0.0, -5.0, 10.0], "normal_azimuth_deg": 180.0,
             "window_name": "南立面中窗"},
            {"code": "W3", "name": "一层右窗 z=1.5m",
             "model_xyz": [6.0, -5.0, 1.5], "normal_azimuth_deg": 180.0,
             "window_name": "南立面右窗"},
            {"code": "W4", "name": "顶层左窗 z=25m",
             "model_xyz": [-6.0, -5.0, 25.0], "normal_azimuth_deg": 180.0,
             "window_name": "南立面高窗"},
        ],
    },
    {
        "code": "B",
        "name": "场景B 同几何旋转30°（模型北→真北方位30°）",
        "lat": 32.0,
        "lon": 118.8,
        "timezone": "Asia/Shanghai",
        "datum_name": "WGS84",
        "model_north_deg": 30.0,
        "note": "与场景A模型几何完全一致，仅整体旋转30°，用于核对坐标旋转口径。",
        "buildings": [
            {
                "code": "T1", "name": "目标住宅楼（受测窗所在楼）",
                "center": [0.0, 0.0, 15.0], "size": [20.0, 10.0, 30.0],
                "color": "#c9d4e3", "is_target": True,
            },
            {
                "code": "N1", "name": "南侧邻楼（旋转后位于西南）",
                "center": [0.0, -25.0, 7.5], "size": [14.0, 15.0, 15.0],
                "color": "#e8b04b", "is_target": False,
            },
            {
                "code": "N2", "name": "西侧邻楼（旋转后位于西北）",
                "center": [-18.0, -10.0, 9.0], "size": [8.0, 12.0, 18.0],
                "color": "#d98c5f", "is_target": False,
            },
        ],
        "points": [
            {"code": "W1", "name": "一层左窗 z=1.5m",
             "model_xyz": [-6.0, -5.0, 1.5], "normal_azimuth_deg": 210.0,
             "window_name": "模型南立面（真方位210°）"},
            {"code": "W2", "name": "三层中窗 z=10m",
             "model_xyz": [0.0, -5.0, 10.0], "normal_azimuth_deg": 210.0,
             "window_name": "模型南立面（真方位210°）"},
            {"code": "W3", "name": "一层右窗 z=1.5m",
             "model_xyz": [6.0, -5.0, 1.5], "normal_azimuth_deg": 210.0,
             "window_name": "模型南立面（真方位210°）"},
            {"code": "W4", "name": "顶层左窗 z=25m",
             "model_xyz": [-6.0, -5.0, 25.0], "normal_azimuth_deg": 210.0,
             "window_name": "模型南立面（真方位210°）"},
        ],
    },
]

# 示例评价口径（不是规范口径！）：仅用于教学对比
EVAL_DATES = ["2025-12-22", "2025-06-21"]   # 冬至 / 夏至
DATE_LABELS = {"2025-12-22": "冬至前后", "2025-06-21": "夏至前后"}
FINE_STEP_SECONDS = 300                      # 连续时段用 5 分钟网格
HOURLY_NOTE = (
    "逐时（整点瞬时射线）只统计样本数；连续可照时长由 5 分钟网格游程编码得到，"
    "二者口径不同，禁止用晴亮截图张数替代日照时长。"
)
