"""生成教学算例批次结果：两场景 × 冬夏日期 × 4 个窗面测点。

输出：
  /workspace/data/batch_results.json   全量结果（含连续时段）
  /workspace/data/batch_summary.csv    汇总表（连续可照时长 + 遮挡物）
纯合成场景，非规划合规结论。
"""
from __future__ import annotations

import csv
import json
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from app.services import analysis
from app.services.synthetic_scene import EVAL_DATES, FINE_STEP_SECONDS, SCENES

OUT_DIR = os.getenv("OUT_DIR", "/workspace/data")


def main():
    rows = []
    full = []
    for scene in SCENES:
        for date in EVAL_DATES:
            for point in scene["points"]:
                r = analysis.evaluate_point(scene, point, date, FINE_STEP_SECONDS)
                c = r["continuous"]
                occluders = sorted({
                    o for seg in c["occluded_segments"] for o in seg["occluder_ids"]})
                rows.append({
                    "scene": scene["code"],
                    "model_north_deg": scene["model_north_deg"],
                    "point": point["code"],
                    "point_z_m": point["model_xyz"][2],
                    "window_normal_az_deg": point.get("normal_azimuth_deg"),
                    "date": date,
                    "sunlit_hours_continuous": c["sunlit_duration_h"],
                    "n_occluded_segments": len(c["occluded_segments"]),
                    "occluders": ";".join(occluders),
                    "hourly_samples_sunlit": r["hourly"]["summary"]["samples_sunlit"],
                    "hourly_samples_total": r["hourly"]["summary"]["samples_total"],
                })
                full.append(r)

    os.makedirs(OUT_DIR, exist_ok=True)
    with open(os.path.join(OUT_DIR, "batch_summary.csv"), "w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=list(rows[0].keys()))
        w.writeheader()
        w.writerows(rows)
    with open(os.path.join(OUT_DIR, "batch_results.json"), "w") as f:
        json.dump({
            "disclaimer": (
                "合成教学场景，示例评价口径，非任何规划/日照标准合规结论；"
                "树木等遮挡未建模；逐时样本与连续时长为两种不同口径。"),
            "fine_step_seconds": FINE_STEP_SECONDS,
            "results": full,
        }, f, ensure_ascii=False, indent=2, default=str)
    print(f"wrote {len(rows)} rows -> {OUT_DIR}/batch_summary.csv")
    for r in rows:
        print(f"场景{r['scene']:>2} α={r['model_north_deg']:>3}° {r['point']} "
              f"z={r['point_z_m']:>4} {r['date']} 可照={r['sunlit_hours_continuous']:>5}h "
              f"遮挡物={r['occluders'] or '—'}")


if __name__ == "__main__":
    main()
