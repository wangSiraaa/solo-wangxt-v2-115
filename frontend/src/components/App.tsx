import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { api } from '../lib/api'
import type {
  Evaluation, Meta, SceneDef, SingleTrace, TraceRow,
} from '../lib/types'
import ThreeScene from './ThreeScene'

const pad = (n: number) => String(n).padStart(2, '0')
const minutesOf = (iso: string) => {
  const t = iso.slice(11, 16)
  const [h, m] = t.split(':').map(Number)
  return h * 60 + m
}

export default function App() {
  const [meta, setMeta] = useState<Meta | null>(null)
  const [scenes, setScenes] = useState<SceneDef[]>([])
  const [sceneCode, setSceneCode] = useState('A')
  const [pointCode, setPointCode] = useState('W1')
  const [date, setDate] = useState('2025-12-22')
  const [evaln, setEvaln] = useState<Evaluation | null>(null)
  const [activeRow, setActiveRow] = useState<TraceRow | null>(null)
  const [single, setSingle] = useState<SingleTrace | null>(null)
  const [err, setErr] = useState('')
  const [busy, setBusy] = useState(false)
  const [persistMsg, setPersistMsg] = useState('')
  const [whenInput, setWhenInput] = useState('2025-12-22 09:00')
  const [elInput, setElInput] = useState('35')
  const [azInput, setAzInput] = useState('180')
  const cameraGetter = useRef<(() => unknown) | null>(null)

  useEffect(() => {
    api.meta().then(setMeta).catch((e) => setErr(String(e)))
    api.scenes().then((s) => setScenes(s)).catch((e) => setErr(String(e)))
  }, [])

  const scene = useMemo(
    () => scenes.find((s) => s.code === sceneCode) ?? null, [scenes, sceneCode])

  const runEvaluate = useCallback(async (persist: boolean) => {
    setBusy(true)
    setErr('')
    setPersistMsg('')
    try {
      const res = await api.evaluate({
        scene_code: sceneCode, point_code: pointCode, date,
        persist,
        snapshot_label: persist
          ? `快照 ${sceneCode}/${pointCode}/${date}`
          : undefined,
        camera_state: persist ? cameraGetter.current?.() : undefined,
      })
      setEvaln(res)
      setActiveRow(null)
      setSingle(null)
      if (persist && res.persisted) {
        setPersistMsg(
          `已入库：evaluation_id=${res.persisted.evaluation_id}，` +
          `snapshot_id=${res.persisted.snapshot_id}（结果与该视角快照关联，可追查）`)
      }
    } catch (e) {
      setErr(String(e))
    } finally {
      setBusy(false)
    }
  }, [sceneCode, pointCode, date])

  useEffect(() => {
    if (scenes.length) void runEvaluate(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sceneCode, pointCode, date, scenes])

  const doTraceTime = async () => {
    setErr('')
    try {
      const r = await api.trace(sceneCode, pointCode, whenInput)
      setSingle(r)
      setActiveRow(r.trace)
    } catch (e) { setErr(String(e)) }
  }
  const doTraceAnalytic = async () => {
    setErr('')
    try {
      const r = await api.traceAnalytic(
        sceneCode, pointCode, Number(elInput), Number(azInput))
      setSingle(r)
      setActiveRow(r.trace)
    } catch (e) { setErr(String(e)) }
  }

  const singleRay = useMemo(() => {
    if (!single) return null
    return {
      origin_enu: single.ray_origin_enu,
      direction_enu: single.ray_direction_enu,
      hit_enu: single.trace.nearest?.hit_point_enu ?? null,
      occluded: single.trace.occluded,
    }
  }, [single])

  return (
    <div className="app">
      <header>
        <h1>窗面日照遮挡 · 教学工作台</h1>
        <div className="banner">
          {meta?.banner ?? '合成教学场景'} ｜{' '}
          仅几何可见性，不做天气修正，<b>不构成规划/日照标准合规结论</b>
        </div>
      </header>

      <div className="toolbar">
        <label>场景
          <select value={sceneCode} onChange={(e) => setSceneCode(e.target.value)}>
            {scenes.map((s) => <option key={s.code} value={s.code}>{s.code} · {s.name}</option>)}
          </select>
        </label>
        <label>窗面测点
          <select value={pointCode} onChange={(e) => setPointCode(e.target.value)}>
            {scene?.points.map((p) =>
              <option key={p.code} value={p.code}>{p.code} · {p.name}</option>)}
          </select>
        </label>
        <label>日期
          <select value={date} onChange={(e) => setDate(e.target.value)}>
            {meta?.eval_dates.map((d) =>
              <option key={d.date} value={d.date}>{d.date}（{d.label}）</option>)}
          </select>
        </label>
        <button onClick={() => void runEvaluate(false)} disabled={busy}>重新计算</button>
        <button className="primary" onClick={() => void runEvaluate(true)} disabled={busy}>
          计算并存入 Postgres（关联视角快照）
        </button>
        {busy && <span className="muted">计算中…</span>}
      </div>

      <div className="layout">
        <div className="left">
          <ThreeScene
            scene={scene!}
            selectedPointCode={pointCode}
            trace={activeRow ?? null}
            singleRay={singleRay}
            onPickPoint={(c) => setPointCode(c)}
            registerCameraState={(fn) => { cameraGetter.current = fn }}
          />
          <div className="legend">
            <span><i className="dot red" />太阳被遮挡</span>
            <span><i className="dot amber" />太阳可见</span>
            <span><i className="axis e" />红=东E</span>
            <span><i className="axis n" />绿=真北N</span>
            <span><i className="axis u" />蓝=上U</span>
            <span><i className="axis mn" />青=模型北(+Y)</span>
            <span><i className="axis wn" />紫=窗外法线</span>
          </div>
          {persistMsg && <div className="persist-ok">{persistMsg}</div>}
        </div>

        <div className="right">
          <section>
            <h2>① 统一坐标基准（场景级，逐测点不可改）</h2>
            {scene && (
              <table className="kv">
                <tbody>
                  <tr><td>椭球基准</td><td>{scene.datum.name}</td></tr>
                  <tr><td>纬度 / 经度</td><td>{scene.datum.lat}°, {scene.datum.lon}°（合成虚构位置）</td></tr>
                  <tr><td>当地时区</td><td>{scene.datum.timezone}（IANA；本地墙钟）</td></tr>
                  <tr><td>模型朝北 model_north_deg</td><td>
                    <b>{scene.datum.model_north_deg}°</b>（模型+Y 轴的真北顺时针方位角）
                  </td></tr>
                  <tr><td>窗面外法线真方位</td>
                    <td>{scene.points.find((p) => p.code === pointCode)?.normal_azimuth_deg ?? '—'}°</td></tr>
                  {evaln && <tr><td>测点 ENU（米）</td><td>{JSON.stringify(evaln.coordinate_context.point_enu)}</td></tr>}
                </tbody>
              </table>
            )}
            {scene && scene.datum_check.length > 0 && (
              <div className="error">基准不统一：{scene.datum_check.join('；')}</div>
            )}
            <div className="muted small">{scene?.note}</div>
          </section>

          <section>
            <h2>② 逐时采样 ≠ 日照时长</h2>
            <p className="small warn">{meta?.hourly_vs_continuous_note}</p>
            <div className="hourly">
              {evaln?.hourly.traces.map((t) => {
                const cls = t.occluded ? 'occ'
                  : t.facade_faces_sun === false ? 'away' : 'sun'
                return (
                  <button key={t.time_local}
                    className={`chip ${cls} ${activeRow?.time_local === t.time_local ? 'active' : ''}`}
                    title={t.nearest ? `遮挡物：${t.nearest.building_name}` : '可见'}
                    onClick={() => { setActiveRow(t); setSingle(null) }}>
                    {t.time_local.slice(11, 16)}
                    <small>{cls === 'occ' ? `遮·${t.nearest?.building_id}`
                      : cls === 'away' ? '背日' : '晴'}</small>
                  </button>
                )
              })}
            </div>
            {evaln && (
              <div className="small muted">
                整点瞬时样本：共 {evaln.hourly.summary.samples_total} 个 ｜ 可见{' '}
                {evaln.hourly.summary.samples_sunlit} ｜ 被遮挡{' '}
                {evaln.hourly.summary.samples_occluded} ｜ 窗面背日{' '}
                {evaln.hourly.summary.samples_facade_away}
                <b>（样本数，不是小时数）</b>
              </div>
            )}
          </section>

          <section>
            <h2>③ 连续可照 / 遮挡时段（{meta?.fine_step_seconds ?? 300}s 网格游程编码）</h2>
            <SegmentTimeline evaln={evaln} />
          </section>

          <section>
            <h2>④ 单点追查遮挡物</h2>
            <div className="trace-controls">
              <label>按本地时刻
                <input value={whenInput} onChange={(e) => setWhenInput(e.target.value)}
                  placeholder="2025-12-22 09:00" />
              </label>
              <button onClick={() => void doTraceTime()}>射线追查</button>
            </div>
            <div className="trace-controls">
              <label>手算核对：高度角°
                <input value={elInput} onChange={(e) => setElInput(e.target.value)} style={{ width: 70 }} />
              </label>
              <label>真北方位角°
                <input value={azInput} onChange={(e) => setAzInput(e.target.value)} style={{ width: 70 }} />
              </label>
              <button onClick={() => void doTraceAnalytic()}>解析射线</button>
            </div>
            <TraceDetail single={single} />
          </section>

          <section>
            <h2>⑤ 未建模遮挡说明</h2>
            <ul className="small">
              {meta?.unmodeled_occluders.map((x, i) => <li key={i}>{x}</li>)}
            </ul>
            <p className="small muted">
              几张晴好天气的渲染截图只代表瞬时，截图数量/亮度不能当作日照时长；
              本台时长仅来自 ③ 的细网格几何计算。
            </p>
          </section>
        </div>
      </div>
      {err && <div className="error">{err}</div>}
    </div>
  )
}

function SegmentTimeline({ evaln }: { evaln: Evaluation | null }) {
  const segs = useMemo(() => {
    if (!evaln) return []
    const c = evaln.continuous
    return [
      ...c.sunlit_segments.map((s) => ({ ...s, kind: 'sunlit' as const })),
      ...c.occluded_segments.map((s) => ({ ...s, kind: 'occluded' as const })),
    ].sort((a, b) => minutesOf(a.start) - minutesOf(b.start))
  }, [evaln])
  if (!evaln) return null
  const c = evaln.continuous
  const t0 = Math.min(...segs.map((s) => minutesOf(s.start)))
  const t1 = Math.max(...segs.map((s) => minutesOf(s.end)))
  const span = Math.max(1, t1 - t0)
  return (
    <div>
      <div className="duration">
        连续可照合计 <b>{c.sunlit_duration_h} h</b>（{c.sunlit_duration_min} min），
        遮挡段 {c.occluded_segments.length} 个
      </div>
      <div className="bar">
        {segs.map((s, i) => {
          const a = minutesOf(s.start), b = minutesOf(s.end)
          const onlyAway = !!s.occluder_ids?.length &&
            s.occluder_ids.every((o) => o === 'FACADE_AWAY')
          const cls = s.kind === 'sunlit' ? 'sunlit' : onlyAway ? 'away' : 'occluded'
          return (
            <div key={i}
              className={`bar-seg ${cls}`}
              style={{ left: `${((a - t0) / span) * 100}%`, width: `${((b - a) / span) * 100}%` }}
              title={`${s.start.slice(11, 16)}–${s.end.slice(11, 16)} ${s.duration_min}min ${s.occluder_ids?.join(',') ?? ''}`}>
            </div>
          )
        })}
      </div>
      <div className="bar-legend small muted">
        <i className="sw sun" />可照 <i className="sw occ" />建筑遮挡 <i className="sw away" />窗面背日（非建筑遮挡）
      </div>
      <div className="bar-labels"><span>{pad(Math.floor(t0 / 60))}:{pad(t0 % 60)}</span>
        <span>{pad(Math.floor(t1 / 60))}:{pad(t1 % 60)}</span></div>
      <table className="segs">
        <thead><tr><th>状态</th><th>起</th><th>止</th><th>时长(min)</th><th>遮挡物</th></tr></thead>
        <tbody>
          {segs.map((s, i) => {
            const onlyAway = !!s.occluder_ids?.length &&
              s.occluder_ids.every((o) => o === 'FACADE_AWAY')
            const rowCls = s.kind === 'sunlit' ? 'sunlit' : onlyAway ? 'away' : 'occluded'
            return (
            <tr key={i} className={rowCls}>
              <td>{s.kind === 'sunlit' ? '可照' : onlyAway ? '窗面背日' : '遮挡'}</td>
              <td>{s.start.slice(11, 16)}</td><td>{s.end.slice(11, 16)}</td>
              <td>{s.duration_min}</td>
              <td>{s.occluder_ids?.join(', ') ?? ''}</td>
            </tr>)
          })}
        </tbody>
      </table>
    </div>
  )
}

function TraceDetail({ single }: { single: SingleTrace | null }) {
  if (!single) return <div className="muted small">选择时刻或输入角度后显示：射线起终点、最近遮挡物、命中面索引。</div>
  const t = single.trace
  return (
    <table className="kv">
      <tbody>
        <tr><td>时刻</td><td>{single.when ?? '（解析射线，无时刻）'}</td></tr>
        <tr><td>高度角 / 方位角</td><td>{t.elevation.toFixed(2)}° / {t.azimuth.toFixed(2)}°（真北顺时针）</td></tr>
        <tr><td>窗面朝向判定</td><td>{t.facade_faces_sun == null ? '—' : t.facade_faces_sun ? '太阳位于窗外侧' : '窗面背日（不计可照）'}</td></tr>
        <tr><td>是否遮挡</td><td><b>{t.occluded ? '是' : '否'}</b></td></tr>
        {t.nearest && <>
          <tr><td>遮挡物</td><td><b>{t.nearest.building_id}</b> · {t.nearest.building_name}</td></tr>
          <tr><td>命中面索引</td><td>{t.nearest.face_index}（可回查该建筑三角网）</td></tr>
          <tr><td>命中点 ENU(m)</td><td>{t.nearest.hit_point_enu.join(', ')}</td></tr>
          <tr><td>命中距离(m)</td><td>{t.nearest.distance_m}</td></tr>
        </>}
        {t.all_hits && t.all_hits.length > 1 && (
          <tr><td>全部命中</td><td>{t.all_hits.map((h) => `${h.building_id}@${h.distance_m}m`).join('；')}</td></tr>
        )}
      </tbody>
    </table>
  )
}
