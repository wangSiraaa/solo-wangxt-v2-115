# 窗面日照遮挡教学工作台（React + Three.js / FastAPI / pvlib / trimesh / PostGIS）

> **性质声明**：本项目只使用**合成场景**与**示例评价口径**，用于规划教学中讲解
> 太阳几何、建筑体量遮挡、坐标基准与"采样 vs 连续时长"的区别。
> **不代表真实地块，不输出任何规划/日照标准合规结论。**

## 1. 它回答什么教学问题

两组合成建筑体量对窗面日照有何影响：

| 场景 | 几何 | `model_north_deg` | 窗面真方位 |
|---|---|---:|---:|
| A | 目标楼 T1 + 邻楼 N1（南）、N2（西） | 0° | 正南 180° |
| B | 与 A **完全相同的模型几何**，整体旋转 | 30° | 210°（西南） |

每个场景的同一扇南立面布置 **4 个测点**（z=1.5 / 10 / 25 m，左右不同），
评价日期取 **冬至 2025-12-22** 与 **夏至 2025-06-21**。

## 2. 三套必须统一的基准

在场景表 `scenes` 与所有计算中统一保存、校验：

1. **经纬度基准**：WGS84，局部 ENU 切平面（东-北-上，米）。建筑同时落库
   ENU 多边形（SRID=0）与 WGS84 多边形（SRID=4326）。
2. **当地时区**：IANA 名称 `Asia/Shanghai`。pvlib 按本地墙钟解释，内部转 UTC。
3. **模型朝北 `model_north_deg`**：模型局部 +Y 轴相对**真北**的顺时针方位角，
   属场景级元数据，不允许逐测点各设一套。场景 A=0°，场景 B=30°。

变换（`backend/app/services/coordinates.py`）：

```
E = mx·cosα + my·sinα
N = -mx·sinα + my·cosα
U = mz
```

太阳方位角统一为**真北顺时针**（pvlib 口径，正南=180°）。

## 3. 两种口径严格区分（本台核心教学点）

- **逐时采样**（`/api/evaluate` → `hourly`）：整点瞬时射线，只输出
  "可见 / 被遮挡 / 窗面背日"的**样本个数**。样本数 **不是** 日照小时数。
- **连续遮挡时段**（`continuous`）：默认 **5 分钟**细密时间网格逐根射线，
  再做游程编码，输出连续可照的**分钟数**与各遮挡段（起、止、时长、遮挡物 id）。
- **晴亮截图 ≠ 日照时长**：3D 视图里的高亮射线只是某一时刻的可视化；
  页面任何"小时/分钟"数字只能来自细网格计算。
- 窗面测点带外法线：太阳处于窗背侧半球时记 `FACADE_AWAY`（窗面背日），
  不计入可照，也不算"某栋楼挡住了"。

## 4. 几何口径与未建模遮挡

- 射线在 ENU 中做 trimesh 三角网求交；起点沿太阳方向外移 3 cm 防数值自交；
  **目标楼 T1 自身排除出遮挡物集合**（窗点嵌在自身表面，否则会伪命中）。
- 太阳按点光源，不考虑太阳圆盘张角、折光以外的大气效应、天气云量。
- **未建模遮挡（结果不反映，须在教学中明示）**：
  树木绿化、地形高差、场地外远处建筑、阳台/挑檐/窗洞凹进、
  遮阳百叶与临时构筑物、玻璃反射与室内遮挡。

## 5. 单点追查遮挡物 & 场景快照

- `POST /api/trace`：给场景+测点+本地时刻，返回射线起点/方向、窗面朝向判定、
  最近遮挡物（建筑 id、名称、**命中三角面索引**、命中点 ENU、距离）与全部命中。
- `POST /api/trace-analytic`：直接给高度角/方位角（不经 pvlib），用于手算核对。
- 界面"计算并存入 Postgres"会把 Three.js 相机位姿存入 `snapshots`，
  评价行 `evaluations.snapshot_id` 关联该快照，实现**结果↔场景快照**对照。

## 6. 手算核对（`backend/tests/`，24 项全部通过）

- 坐标：α=30° 时 `(10,0)→(8.6603,-5)`、`(0,10)→(5,8.6603)`；往返闭合；
  WGS84↔ENU 闭合。
- 射线边界（场景 A，W1 z=1.5，正午方位 180°）：
  到 N1 北立面水平距离 12.5 m，临界高度角
  `h* = atan((15−1.5)/12.5) = 47.2026°`；h*−2° 必须命中 N1 北立面，
  h*+2° 必须越过屋顶。
- pvlib：冬至正午高度 ≈ 34.56°、夏至 ≈ 81.44°（与 90−φ∓23.44° 一致），
  本地墙钟 12:00 对应太阳过中天。

## 7. 运行

后端环境（Python 3.11 + pvlib + trimesh + PostgreSQL/PostGIS）：

```bash
# 1) 准备数据库并灌入合成场景
bash backend/scripts/setup_db.sh
# 2) 启动 API
export DATABASE_URL="postgresql+psycopg2://sunuser@/sunteach?host=/tmp&port=55436"
/tmp/condaroot/env/bin/uvicorn --app-dir backend app.main:app --host 0.0.0.0 --port 8000
# 3) 生成跨冬夏×邻楼×旋转的 16 行算例（data/batch_summary.csv / batch_results.json）
/tmp/condaroot/env/bin/python backend/scripts/run_batch_examples.py
# 4) 测试
/tmp/condaroot/env/bin/python -m pytest backend/tests -q
```

前端：

```bash
cd frontend
npm install
npm run dev        # http://localhost:5173 （/api 代理到 8000）
# 或 npm run build，产物 dist/ 由 FastAPI 挂在 /app
```

## 8. 主要算例结论（示例口径，仅教学）

- 场景 A 冬至：低窗 W1 被南侧 N1 在上午至正午连续遮挡（连续可照仅 3.83 h），
  顶层窗 W4 全天不被邻楼遮挡（9.92 h）——**楼层高度差**最直观。
- 场景 A 夏至：太阳高度高，N1 不再挡南窗；可照段缩短为 4.9 h 是因为
  太阳从东北升、西北落，清晨/傍晚**窗面背日（FACADE_AWAY）**，而非被楼挡住。
- 场景 B 旋转 30°：遮挡时段随建筑与窗的真方位整体改变（如冬至 N1 遮挡段
  变为 11:05–14:20）。对比 A/B 可验证"模型朝北不统一"会直接改变结果。

数据文件：`data/batch_summary.csv`（16 行汇总）、`data/batch_results.json`（全量时段）。
