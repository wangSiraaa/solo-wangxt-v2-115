import type { Evaluation, Meta, SceneDef, SingleTrace } from './types'

async function jsonFetch<T>(url: string, init?: RequestInit): Promise<T> {
  const r = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    ...init,
  })
  if (!r.ok) throw new Error(`${r.status} ${await r.text()}`)
  return r.json() as Promise<T>
}

export const api = {
  meta: () => jsonFetch<Meta>('/api/meta'),
  scenes: () => jsonFetch<SceneDef[]>('/api/scenes'),
  evaluate: (body: {
    scene_code: string
    point_code: string
    date: string
    persist?: boolean
    snapshot_label?: string
    camera_state?: unknown
  }) =>
    jsonFetch<Evaluation>('/api/evaluate', {
      method: 'POST',
      body: JSON.stringify(body),
    }),
  trace: (scene_code: string, point_code: string, when: string) =>
    jsonFetch<SingleTrace & { banner: string }>('/api/trace', {
      method: 'POST',
      body: JSON.stringify({ scene_code, point_code, when }),
    }),
  traceAnalytic: (
    scene_code: string,
    point_code: string,
    elevation_deg: number,
    azimuth_deg: number,
  ) =>
    jsonFetch<SingleTrace & { banner: string }>('/api/trace-analytic', {
      method: 'POST',
      body: JSON.stringify({ scene_code, point_code, elevation_deg, azimuth_deg }),
    }),
  results: (scene_code: string) =>
    jsonFetch<unknown[]>('/api/results?' + new URLSearchParams({ scene_code })),
  geometries: (scene_code: string) =>
    jsonFetch<unknown>(
      '/api/db/verify-geometries?' + new URLSearchParams({ scene_code }),
    ),
}
