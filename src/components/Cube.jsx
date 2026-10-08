import { useEffect, useRef } from 'react'
import * as THREE from 'three'

// Cubo mágico 3x3x3 preto em WebGL: gira devagar e uma camada vira 90° de tempos em tempos
export default function Cube() {
  const host = useRef(null)

  useEffect(() => {
    const el = host.current
    if (!el) return
    const still = matchMedia('(prefers-reduced-motion: reduce)').matches

    let renderer
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' })
    } catch {
      return
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    renderer.domElement.style.cssText = 'width:100%;height:100%;display:block'
    el.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 50)
    camera.position.set(0, 0, 11.5)
    scene.add(new THREE.AmbientLight(0xffffff, 0.9))
    const keyLight = new THREE.DirectionalLight(0xffffff, 3.2)
    keyLight.position.set(-4, 6, 6)
    scene.add(keyLight)
    const rimLight = new THREE.DirectionalLight(0xffffff, 1.3)
    rimLight.position.set(6, -3, -4)
    scene.add(rimLight)

    const root = new THREE.Group()
    root.rotation.set(0.55, 0.7, 0)
    scene.add(root)

    const geo = new THREE.BoxGeometry(0.94, 0.94, 0.94)
    const edges = new THREE.EdgesGeometry(geo)
    const mat = new THREE.MeshStandardMaterial({ color: 0x07080a, roughness: 0.36, metalness: 0.55 })
    const lineMat = new THREE.LineBasicMaterial({ color: 0x3a4045, transparent: true, opacity: 0.95 })
    const cubes = []
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          const m = new THREE.Mesh(geo, mat)
          m.add(new THREE.LineSegments(edges, lineMat))
          m.position.set(x, y, z)
          root.add(m)
          cubes.push(m)
        }
      }
    }
    const pivot = new THREE.Group()
    root.add(pivot)

    const AXES = ['x', 'y', 'z']
    let twist = null
    let wait = 2
    let tilt = 0
    let visible = true
    let running = false
    let last = 0
    let raf = 0

    const startTwist = () => {
      const axis = AXES[Math.floor(Math.random() * 3)]
      const layer = Math.floor(Math.random() * 3) - 1
      const dir = Math.random() < 0.5 ? 1 : -1
      cubes.forEach(c => { if (Math.abs(c.position[axis] - layer) < 0.1) pivot.attach(c) })
      twist = { axis, dir, t: 0 }
    }
    const endTwist = () => {
      pivot.updateMatrixWorld(true)
      pivot.children.slice().forEach(c => {
        root.attach(c)
        c.position.set(Math.round(c.position.x), Math.round(c.position.y), Math.round(c.position.z))
      })
      pivot.rotation.set(0, 0, 0)
    }

    const size = () => {
      const w = el.clientWidth || 320
      renderer.setSize(w, w, false)
      renderer.render(scene, camera)
    }

    const loop = now => {
      if (!visible) { running = false; return }
      const dt = Math.min((now - last) / 1000, 0.05)
      last = now
      root.rotation.y += dt * 0.28
      root.rotation.x += ((0.55 + tilt) - root.rotation.x) * Math.min(1, dt * 2)
      if (twist) {
        twist.t += dt / 0.9
        const u = Math.min(twist.t, 1)
        const e = u < 0.5 ? 4 * u * u * u : 1 - Math.pow(-2 * u + 2, 3) / 2
        pivot.rotation[twist.axis] = twist.dir * e * Math.PI / 2
        if (u >= 1) { endTwist(); twist = null; wait = 1.4 + Math.random() * 1.2 }
      } else {
        wait -= dt
        if (wait <= 0) startTwist()
      }
      renderer.render(scene, camera)
      raf = requestAnimationFrame(loop)
    }
    const start = () => {
      if (running || !visible || still) return
      running = true
      last = performance.now()
      raf = requestAnimationFrame(loop)
    }

    size()
    start()

    const io = new IntersectionObserver(([x]) => { visible = x.isIntersecting; if (visible) start() })
    io.observe(el)
    const ro = new ResizeObserver(size)
    ro.observe(el)
    const onMove = e => { tilt = (e.clientY / window.innerHeight - 0.5) * 0.5 }
    window.addEventListener('pointermove', onMove, { passive: true })

    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      ro.disconnect()
      window.removeEventListener('pointermove', onMove)
      geo.dispose(); edges.dispose(); mat.dispose(); lineMat.dispose()
      renderer.dispose()
      if (renderer.domElement.parentNode === el) el.removeChild(renderer.domElement)
    }
  }, [])

  return <div className="cube" ref={host} role="img" aria-label="Cubo mágico 3D girando" />
}
