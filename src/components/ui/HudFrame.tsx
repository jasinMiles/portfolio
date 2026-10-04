import type { ReactNode } from 'react'

type HudFrameProps = {
  children: ReactNode
  className?: string
  label?: string
  tone?: 'neon' | 'plasma'
}

export function HudFrame({ children, className = '', label, tone = 'neon' }: HudFrameProps) {
  const glow =
    tone === 'neon'
      ? 'shadow-[0_0_44px_-14px_rgba(34,242,255,0.55)]'
      : 'shadow-[0_0_44px_-14px_rgba(255,61,240,0.55)]'

  return (
    <div className={`corner-frame glass clip-corner ${glow} ${className}`}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(70% 70% at 50% 0%, black, transparent 75%)',
        }}
      />
      {label && (
        <div className="relative flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-neon shadow-[0_0_8px_#22f2ff] animate-pulse" />
          <span className="hud-label text-[10px] opacity-80">{label}</span>
        </div>
      )}
      <div className="relative">{children}</div>
    </div>
  )
}
