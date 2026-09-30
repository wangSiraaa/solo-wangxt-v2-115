import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import type { SceneDef, TraceRow } from '../lib/types'

interface Props {
  scene: SceneDef
  selectedPointCode: string
  trace: TraceRow | null
  singleRay: {
    origin_enu: number[]
    direction_enu: number[]
    hit_enu: number[] | null
    occluded: boolean
  } | null
  onPickPoint: (code: string) => void
  registerCameraState?: (fn: () => unknown) => void
}

/**
 * Three.js 合成场景视图。
 *
 * 坐标口径必须与后端 coordinates.py 完全一致：
 *   three 世界坐标 (X, Y, Z) = ENU (东, 上, 北)
 *   模型局部坐标 (mx, my=模型北, mz=上) 先装入"模型框" three(x=mx, y=mz, z=my)，
 *   模型框整体绕世界 Y 轴旋转 +model_north_deg：
 *     X' = mx cosα + my sinα  (E)
 *     Z' = -mx sinα + my cosα (N)
 * 与后端 model_to_enu 逐分量相同。世界层另画真北/东轴，旋转差异肉眼可见。
 */
const ENU_TO_THREE = ([e, n, u]: number[]) => new THREE.Vector3(e, u, n)

export default function ThreeScene({
  scene,
  selectedPointCode,
  trace,
  singleRay,
  onPickPoint,
  registerCameraState,
}: Props) {
  const mountRef = useRef<HTMLDivElement>(null)
  const scene3DRef = useRef<THREE.Scene | null>(null)
  const overlayRef = useRef<THREE.Group | null>(null)
  const stateRef = useRef<{
    renderer?: THREE.WebGLRenderer
    camera?: THREE.PerspectiveCamera
    controls?: OrbitControls
    pointMeshes?: Record<string, THREE.Mesh>
  }>({})

  useEffect(() => {
    const mount = mountRef.current!
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    mount.appendChild(renderer.domElement)

    const scene3D = new THREE.Scene()
    scene3D.background = new THREE.Color(0xf4f7fb)
    scene3DRef.current = scene3D

    const camera = new THREE.PerspectiveCamera(
      50, mount.clientWidth / mount.clientHeight, 0.1, 2000)
    camera.position.set(60, 48, 70)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.target.set(0, 8, -12)
    controls.update()

    stateRef.current = { renderer, camera, controls }

    const onClick = (ev: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect()
      const ndc = new THREE.Vector2(
        ((ev.clientX - rect.left) / rect.width) * 2 - 1,
        -((ev.clientY - rect.top) / rect.height) * 2 + 1,
      )
      const rc = new THREE.Raycaster()
      rc.setFromCamera(ndc, camera)
      const meshes = Object.values(stateRef.current.pointMeshes ?? {})
      const hits = rc.intersectObjects(meshes, false)
      const code = hits[0]?.object.userData.code as string | undefined
      if (code) onPickPoint(code)
    }
    renderer.domElement.addEventListener('click', onClick)

    let raf = 0
    const loop = () => {
      controls.update()
      renderer.render(scene3D, camera)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    const onResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mount.clientWidth, mount.clientHeight)
    }
    window.addEventListener('resize', onResize)

    if (registerCameraState) {
      registerCameraState(() => ({
        position: camera.position.toArray(),
        target: controls.target.toArray(),
      }))
    }

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      renderer.domElement.removeEventListener('click', onClick)
      controls.dispose()
      renderer.dispose()
      mount.removeChild(renderer.domElement)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // 场景内容重建（静态层）
  useEffect(() => {
    const scene3D = scene3DRef.current
    if (!scene3D) return
    scene3D.clear()
    stateRef.current.pointMeshes = {}

    scene3D.add(new THREE.AmbientLight(0xffffff, 0.75))
    const dir = new THREE.DirectionalLight(0xffffff, 0.7)
    dir.position.set(40, 90, 30)
    scene3D.add(dir)

    // 世界层（ENU 固定）：地面网格 + 东/北/上轴
    const world = new THREE.Group()
    world.name = 'world-enu'
    const grid = new THREE.GridHelper(140, 28, 0x9fb3c8, 0xdde5ee)
    world.add(grid)
    world.add(new THREE.ArrowHelper(new THREE.Vector3(1, 0, 0), new THREE.Vector3(45, 0.2, 0), 12, 0xef4444, 1.6, 1.0)) // 东 E 红
    world.add(new THREE.ArrowHelper(new THREE.Vector3(0, 0, 1), new THREE.Vector3(45, 0.2, 0), 12, 0x22c55e, 1.6, 1.0)) // 北 N 绿
    world.add(new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), new THREE.Vector3(45, 0.2, 0), 12, 0x3b82f6, 1.6, 1.0)) // 上 U 蓝
    scene3D.add(world)

    // 模型层：随 model_north_deg 旋转
    const root = new THREE.Group()
    root.name = 'model'
    root.rotation.y = THREE.MathUtils.degToRad(scene.datum.model_north_deg)

    // 模型 +Y（模型北）在模型框中为 +Z，青色，旋转后与绿色真北轴形成 α 夹角
    root.add(new THREE.ArrowHelper(
      new THREE.Vector3(0, 0, 1), new THREE.Vector3(-45, 0.2, 0),
      12, 0x00acc1, 1.6, 1.0))

    for (const b of scene.buildings) {
      const [sx, sy, sz] = b.size
      const [cx, cy, cz] = b.center
      const geo = new THREE.BoxGeometry(sx, sz, sy)
      const mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({
        color: new THREE.Color(b.color),
        transparent: true,
        opacity: b.is_target ? 0.95 : 0.82,
        roughness: 0.8,
      }))
      mesh.position.set(cx, cz, cy)
      mesh.add(new THREE.LineSegments(
        new THREE.EdgesGeometry(geo),
        new THREE.LineBasicMaterial({ color: 0x374151 })))
      root.add(mesh)
    }

    for (const p of scene.points) {
      const [px, py, pz] = p.model_xyz
      const selected = p.code === selectedPointCode
      const m = new THREE.Mesh(
        new THREE.SphereGeometry(0.8, 18, 18),
        new THREE.MeshStandardMaterial({
          color: selected ? 0xe11d48 : 0x2563eb,
          emissive: selected ? 0x7f1027 : 0x0b2a6b,
          emissiveIntensity: selected ? 0.6 : 0.25,
        }))
      m.position.set(px, pz, py)
      m.userData.code = p.code
      stateRef.current.pointMeshes![p.code] = m
      root.add(m)

      // 窗面外法线（真方位）画在世界层：方位角 az -> ENU(sin az, cos az)
      if (p.normal_azimuth_deg != null) {
        const a = THREE.MathUtils.degToRad(p.normal_azimuth_deg)
        // 该测点 ENU 与后端同式
        const alpha = THREE.MathUtils.degToRad(scene.datum.model_north_deg)
        const e = px * Math.cos(alpha) + py * Math.sin(alpha)
        const n = -px * Math.sin(alpha) + py * Math.cos(alpha)
        const nrm = new THREE.ArrowHelper(
          new THREE.Vector3(Math.sin(a), 0, Math.cos(a)),
          new THREE.Vector3(e, pz + 0.2, n),
          4, 0x7c3aed, 1.0, 0.7)
        world.add(nrm)
      }
    }
    scene3D.add(root)

    // 射线覆盖层（世界 ENU）
    const overlay = new THREE.Group()
    overlay.name = 'ray-overlay'
    scene3D.add(overlay)
    overlayRef.current = overlay
  }, [scene, selectedPointCode])

  // 太阳方向箭头（逐时表中当前行或默认）
  useEffect(() => {
    const overlay = overlayRef.current
    if (!overlay) return
    const old = overlay.getObjectByName('sunArrow')
    if (old) overlay.remove(old)
    if (!trace) return
    const [e, n, u] = trace.sun_vector_enu
    const arrow = new THREE.ArrowHelper(
      new THREE.Vector3(e, u, n).normalize(),
      new THREE.Vector3(0, 32, 0),
      36, trace.occluded ? 0xdc2626 : 0xd97706, 3.2, 2.2)
    arrow.name = 'sunArrow'
    overlay.add(arrow)
  }, [trace])

  // 单点追查射线（起点→命中点）
  useEffect(() => {
    const overlay = overlayRef.current
    if (!overlay) return
    overlay.getObjectByName('traceRay')?.remove()
    overlay.getObjectByName('hitMarker')?.remove()
    if (!singleRay) return
    const o = ENU_TO_THREE(singleRay.origin_enu)
    const d = ENU_TO_THREE(singleRay.direction_enu).normalize()
    const end = singleRay.hit_enu
      ? ENU_TO_THREE(singleRay.hit_enu)
      : o.clone().add(d.clone().multiplyScalar(40))
    const geo = new THREE.BufferGeometry().setFromPoints([o, end])
    const line = new THREE.Line(geo, new THREE.LineBasicMaterial({
      color: singleRay.occluded ? 0xdc2626 : 0x16a34a, linewidth: 2 }))
    line.name = 'traceRay'
    overlay.add(line)
    if (singleRay.hit_enu) {
      const marker = new THREE.Mesh(
        new THREE.SphereGeometry(0.9, 16, 16),
        new THREE.MeshBasicMaterial({ color: 0xdc2626 }))
      marker.position.copy(ENU_TO_THREE(singleRay.hit_enu))
      marker.name = 'hitMarker'
      overlay.add(marker)
    }
  }, [singleRay])

  return <div ref={mountRef} className="three-mount" />
}
