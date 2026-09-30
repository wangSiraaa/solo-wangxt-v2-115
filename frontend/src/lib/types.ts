export interface Datum {
  name: string
  lat: number
  lon: number
  timezone: string
  model_north_deg: number
}

export interface BuildingDef {
  code: string
  name: string
  center: [number, number, number]
  size: [number, number, number]
  color: string
  is_target: boolean
}

export interface PointDef {
  code: string
  name: string
  model_xyz: [number, number, number]
  normal_azimuth_deg: number | null
  window_name: string
}

export interface SceneDef {
  code: string
  name: string
  datum: Datum
  datum_check: string[]
  buildings: BuildingDef[]
  points: PointDef[]
  note: string
}

export interface HitInfo {
  building_id: string
  building_name: string
  distance_m: number
  hit_point_enu: number[]
  face_index?: number
}

export interface TraceRow {
  time_local: string
  elevation: number
  azimuth: number
  sun_vector_enu: number[]
  facade_faces_sun: boolean | null
  occluded: boolean
  nearest: HitInfo | null
  all_hits?: HitInfo[]
}

export interface HourlySummary {
  sampling: 'hourly_instant'
  samples_total: number
  samples_sunlit: number
  samples_occluded: number
  samples_facade_away: number
  sunlit_sample_ratio: number | null
  note: string
}

export interface Segment {
  start: string
  end: string
  duration_min: number
  occluder_ids?: string[]
}

export interface ContinuousSummary {
  sampling: 'fine_grid_run_length'
  sunlit_duration_min: number
  sunlit_duration_h: number
  occluded_segments: Segment[]
  sunlit_segments: Segment[]
}

export interface Evaluation {
  scene_code: string
  point_code: string
  date: string
  coordinate_context: {
    lat: number
    lon: number
    timezone: string
    datum: string
    model_north_deg: number
    window_normal_azimuth_deg: number | null
    point_model_xyz: number[]
    point_enu: number[]
  }
  hourly: { summary: HourlySummary; traces: TraceRow[] }
  continuous: ContinuousSummary
  unmodeled_occluders: string[]
  persisted?: { evaluation_id: number; snapshot_id: number | null }
}

export interface SingleTrace {
  when?: string
  ray_origin_enu: number[]
  ray_direction_enu: number[]
  facade_faces_sun: boolean | null
  trace: TraceRow
}

export interface Meta {
  banner: string
  hourly_vs_continuous_note: string
  fine_step_seconds: number
  eval_dates: { date: string; label: string }[]
  unmodeled_occluders: string[]
}
