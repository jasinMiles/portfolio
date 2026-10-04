import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type SectionHeadingProps = {
  index: string
  eyebrow: string
  title: string
  accent?: string
  blurb?: ReactNode
  align?: 'left' | 'center'
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  accent,
  blurb,
  align = 'left',
}: SectionHeadingProps) {
  const centered = align === 'center'

  return (
    <Reveal className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-3xl'}>
      <div className={`flex items-center gap-3 ${centered ? 'justify-center' : ''}`}>
        <span className="font-mono text-xs text-neon/70">{index}</span>
        <span className="h-px w-10 bg-gradient-to-r from-neon/70 to-transparent" />
        <span className="hud-label text-[10px] opacity-85">{eyebrow}</span>
      </div>

      <h2 className="mt-4 text-3xl leading-tight font-bold sm:text-4xl md:text-[2.75rem]">
        <span className="text-white/95">{title}</span>
        {accent && <span className="gradient-text"> {accent}</span>}
      </h2>

      {blurb && (
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-[1.05rem]">{blurb}</p>
      )}
    </Reveal>
  )
}
