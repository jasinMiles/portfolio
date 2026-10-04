import { useEffect, useState } from 'react'

const BOOT_LINES = [
  'linking uplink · Mercury',
  'mounting react runtime',
  'arming context providers',
  'compiling utility directives',
  'ignition · warp starfield online',
  'handshake complete · welcome aboard',
]

export function Preloader() {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setProgress(100)
      setDone(true)
      setVisible(false)
      return
    }

    let raf = 0
    const start = performance.now()
    const duration = 1500

    const loop = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setProgress(Math.round(eased * 100))
      if (t < 1) {
        raf = window.requestAnimationFrame(loop)
        return
      }
      window.setTimeout(() => setDone(true), 260)
    }

    raf = window.requestAnimationFrame(loop)
    return () => window.cancelAnimationFrame(raf)
  }, [])

  useEffect(() => {
    if (!done) return
    const timeout = window.setTimeout(() => setVisible(false), 700)
    return () => window.clearTimeout(timeout)
  }, [done])

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [visible])

  const lineIndex = Math.min(
    BOOT_LINES.length - 1,
    Math.floor((progress / 100) * BOOT_LINES.length),
  )

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-ink transition-all duration-700 ${
        visible ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <div className="scanlines pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative w-full max-w-sm px-5 sm:max-w-md sm:px-8">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="hud-label text-[10px] opacity-70">portfolio.Mercury</p>
            <p className="mt-1 font-display text-lg font-bold text-white">
              MICHAEL<span className="text-neon">_</span>OKEME
            </p>
          </div>
          <span className="font-mono text-3xl font-bold text-neon tabular-nums text-glow">
            {String(progress).padStart(3, '0')}%
          </span>
        </div>

        <div className="h-1 w-full overflow-hidden rounded-full bg-white/8">
          <div
            className="h-full rounded-full bg-gradient-to-r from-neon via-violet to-plasma transition-[width] duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <ul className="mt-5 space-y-1.5 font-mono text-[11px]">
          {BOOT_LINES.map((line, index) => (
            <li
              key={line}
              className={`flex items-center gap-2 transition-all duration-300 ${
                index <= lineIndex ? 'translate-x-0 opacity-80' : 'opacity-0'
              }`}
            >
              <span className="text-neon/70">{index <= lineIndex ? '>' : '.'}</span>
              <span className="tracking-wider text-white/60">{line}</span>
              {index === lineIndex && (
                <span className="animate-blink text-neon">_</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
