import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

type Star = {
  x: number
  y: number
  z: number
  hue: number
}

const FOCAL = 430
const MAX_Z = 1500
const BASE_SPEED = 190
const TINT_LIGHT = [222, 236, 255] as const
const TINT_NEON = [34, 242, 255] as const
const TINT_PLASMA = [255, 61, 240] as const

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    let width = 0
    let height = 0
    let stars: Star[] = []
    let raf = 0
    let last = performance.now()
    let scrollBoost = 0
    let pointerX = 0
    let pointerY = 0
    let smoothX = 0
    let smoothY = 0

    const pickTint = (roll: number): readonly [number, number, number] => {
      if (roll > 0.94) return TINT_PLASMA
      if (roll > 0.76) return TINT_NEON
      return TINT_LIGHT
    }

    const buildStars = () => {
      const target = Math.min(900, Math.max(180, Math.round((width * height) / 3400)))
      stars = Array.from({ length: target }, () => {
        const z = MAX_Z * (0.35 + Math.random() * 0.65)
        return {
          x: (Math.random() * 2 - 1) * 1.5,
          y: (Math.random() * 2 - 1) * 1.5,
          z,
          hue: Math.random(),
        }
      })
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      buildStars()
    }

    const onPointerMove = (event: PointerEvent) => {
      pointerX = (event.clientX / window.innerWidth - 0.5) * 2
      pointerY = (event.clientY / window.innerHeight - 0.5) * 2
    }

    const onScroll = () => {
      const next = window.scrollY
      scrollBoost = Math.min(520, scrollBoost + Math.abs(next - lastScroll) * 2.4)
      lastScroll = next
    }

    let lastScroll = window.scrollY

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })

    const draw = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now

      const decay = Math.pow(0.0015, dt)
      scrollBoost *= decay
      if (scrollBoost < 0.4) scrollBoost = 0.4

      const speed = BASE_SPEED + scrollBoost
      smoothX += (pointerX - smoothX) * 0.045
      smoothY += (pointerY - smoothY) * 0.045

      const cx = width / 2 - smoothX * 40
      const cy = height / 2 - smoothY * 30
      const unit = Math.min(width, height) * 0.5

      ctx.clearRect(0, 0, width, height)
      ctx.lineCap = 'round'

      for (const star of stars) {
        star.z -= speed * dt
        if (star.z <= 1) {
          star.x = (Math.random() * 2 - 1) * 1.5
          star.y = (Math.random() * 2 - 1) * 1.5
          star.z = MAX_Z * (0.75 + Math.random() * 0.25)
          star.hue = Math.random()
          continue
        }

        const k = FOCAL / star.z
        const near = 1 - star.z / MAX_Z
        const px = cx + star.x * k * unit
        const py = cy + star.y * k * unit

        const kTail = FOCAL / (star.z + speed * 0.075)
        const tx = cx + star.x * kTail * unit
        const ty = cy + star.y * kTail * unit

        const tint = pickTint(star.hue)
        const alpha = Math.min(1, 0.14 + near * near * 0.95)
        const lineWidth = 0.35 + near * 2.1

        const gradient = ctx.createLinearGradient(tx, ty, px, py)
        gradient.addColorStop(0, `rgba(${tint[0]}, ${tint[1]}, ${tint[2]}, 0)`)
        gradient.addColorStop(1, `rgba(${tint[0]}, ${tint[1]}, ${tint[2]}, ${alpha})`)

        ctx.strokeStyle = gradient
        ctx.lineWidth = lineWidth
        ctx.beginPath()
        ctx.moveTo(tx, ty)
        ctx.lineTo(px, py)
        ctx.stroke()

        if (near > 0.72) {
          ctx.fillStyle = `rgba(255, 255, 255, ${(near - 0.72) * 2.2})`
          ctx.beginPath()
          ctx.arc(px, py, lineWidth * 1.1, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      raf = window.requestAnimationFrame(draw)
    }

    raf = window.requestAnimationFrame(draw)

    return () => {
      window.cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  if (reducedMotion) {
    return (
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'radial-gradient(1.4px 1.4px at 20% 30%, #dfe9ff 50%, transparent), radial-gradient(1.2px 1.2px at 70% 60%, #22f2ff 50%, transparent), radial-gradient(1px 1px at 45% 80%, #ffffff 50%, transparent), radial-gradient(1.2px 1.2px at 85% 20%, #ff3df0 50%, transparent)',
        }}
      />
    )
  }

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  )
}
