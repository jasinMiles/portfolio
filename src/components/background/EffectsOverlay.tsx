import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

export function EffectsOverlay() {
  const glowRef = useRef<HTMLDivElement | null>(null)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (reducedMotion) return
    const node = glowRef.current
    if (!node) return

    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let tx = x
    let ty = y
    let raf = 0

    const onMove = (event: PointerEvent) => {
      tx = event.clientX
      ty = event.clientY
    }

    const loop = () => {
      x += (tx - x) * 0.09
      y += (ty - y) * 0.09
      node.style.transform = `translate3d(${x - 220}px, ${y - 220}px, 0)`
      raf = window.requestAnimationFrame(loop)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    raf = window.requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('pointermove', onMove)
      window.cancelAnimationFrame(raf)
    }
  }, [reducedMotion])

  return (
    <>
      {!reducedMotion && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div
            className="absolute inset-x-0 h-40 animate-scan"
            style={{
              background:
                'linear-gradient(to bottom, transparent, rgba(34,242,255,0.055) 45%, rgba(34,242,255,0.10) 50%, transparent)',
            }}
          />
          <div
            ref={glowRef}
            className="absolute top-0 left-0 h-[440px] w-[440px] rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(34,242,255,0.10) 0%, rgba(139,92,246,0.05) 40%, transparent 66%)',
              willChange: 'transform',
            }}
          />
        </div>
      )}

      <div aria-hidden className="scanlines pointer-events-none absolute inset-0 opacity-45 mix-blend-overlay" />

      <div
        aria-hidden
        className="noise-layer pointer-events-none absolute inset-0 opacity-[0.055] mix-blend-soft-light"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(130% 95% at 50% 42%, transparent 42%, rgba(2,3,8,0.55) 78%, rgba(2,3,8,0.92) 100%)',
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.28]"
        style={{
          background:
            'repeating-linear-gradient(90deg, rgba(34,242,255,0.05) 0px, rgba(34,242,255,0.05) 1px, transparent 1px, transparent 84px)',
        }}
      />
    </>
  )
}
