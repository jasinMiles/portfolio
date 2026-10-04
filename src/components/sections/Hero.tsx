import { ArrowRight, ChevronDown, MapPin, Sparkles } from 'lucide-react'
import { ActionLink } from '../ui/ActionLink'
import { GlitchText } from '../ui/GlitchText'
import { Typewriter } from '../ui/Typewriter'
import { profile } from '../../data/portfolio'

const RING_LABELS = [
  'REACT',
  'JAVASCRIPT',
  'TYPESCRIPT',
  'TAILWIND',
  'REDUX',
  'REST API',
]

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center pt-28 pb-16 sm:pt-32"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8">
        <div>
          <div className="inline-flex items-center gap-2.5 rounded-full border border-neon/25 bg-neon/8 px-3.5 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-acid opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-acid" />
            </span>
            <span className="font-mono text-[10px] tracking-[0.24em] text-acid uppercase">
              {profile.availability}
            </span>
          </div>

          <p className="hud-label mt-7 flex items-center gap-2 text-[10px] opacity-70">
            <MapPin size={12} className="shrink-0 text-neon" />
            {profile.location}
          </p>

          <h1 className="mt-3 text-[2.6rem] leading-[1.02] font-black tracking-tight sm:text-6xl lg:text-[4.2rem]">
            <GlitchText
              text={profile.firstName}
              className="block gradient-text animate-flicker"
            />
            <GlitchText
              text={profile.lastName}
              className="block text-white/92 [text-shadow:0_0_38px_rgba(34,242,255,0.35)]"
            />
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="font-mono text-xs text-white/30">&gt;</span>
            <Typewriter
              words={profile.roles}
              className="font-display text-lg font-semibold text-neon text-glow sm:text-xl"
            />
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ActionLink href="#work" variant="primary" size="lg">
              <Sparkles size={16} />
              View SoftBuy
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </ActionLink>
            <ActionLink href="#contact" variant="ghost" size="lg">
              Get in touch
            </ActionLink>
          </div>

          <div className="mt-7 flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
            
            <span className="mx-1 h-3 w-px bg-white/15" />
            <span className="text-white/40"></span>
          </div>

          <dl className="mt-10 grid max-w-xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/6 sm:grid-cols-4">
            {profile.stats.map((stat) => (
              <div key={stat.label} className="bg-ink-2/85 px-4 py-4 text-center">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-xl font-bold text-neon text-glow sm:text-2xl">
                    {stat.value}
                  </span>
                  <span className="mt-1 block font-mono text-[9px] tracking-[0.16em] text-muted uppercase">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto grid w-full max-w-md place-items-center lg:max-w-none">
          <Hologram />
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted transition-colors hover:text-neon lg:flex"
      >
        <span className="font-mono text-[9px] tracking-[0.3em] uppercase">scroll</span>
        <ChevronDown size={16} className="animate-bob" />
      </a>
    </section>
  )
}

function Hologram() {
  return (
    <div className="relative aspect-square w-full animate-tilt" style={{ transformStyle: 'preserve-3d' }}>
      <div
        aria-hidden
        className="absolute inset-[6%] rounded-full opacity-70 blur-2xl"
        style={{
          background:
            'radial-gradient(circle, rgba(34,242,255,0.28) 0%, rgba(139,92,246,0.16) 45%, transparent 70%)',
        }}
      />

      <div className="absolute inset-[4%] overflow-hidden rounded-full border border-neon/20">
        <span className="absolute inset-[6%] rounded-full bg-neon/5 blur-xl" />
        {RING_LABELS.map((label, index) => {
          const angle = (360 / RING_LABELS.length) * index
          return (
            <div
              key={label}
              aria-hidden
              className="absolute inset-0"
              style={{ transform: `rotate(${angle}deg)` }}
            >
              <span
                className="absolute top-[1.5%] left-1/2 -translate-x-1/2 font-mono text-[9px] tracking-[0.2em] whitespace-nowrap text-neon/55"
                style={{ transform: `translateX(-50%) rotate(${-angle}deg)` }}
              >
                {label}
              </span>
            </div>
          )
        })}
      </div>

      <div className="absolute inset-[17%] animate-orbit rounded-full border border-neon/30">
        <span className="absolute -top-[3px] left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-neon shadow-[0_0_14px_3px_rgba(34,242,255,0.85)]" />
      </div>

      <div className="absolute inset-[26%] animate-orbit-reverse rounded-full border border-dashed border-violet/40">
        <span className="absolute top-1/2 -right-[3px] h-2 w-2 -translate-y-1/2 rounded-full bg-plasma shadow-[0_0_14px_3px_rgba(255,61,240,0.8)]" />
      </div>

      <div className="absolute inset-[26%] animate-float">
        <div
          className="grid h-full w-full place-items-center rounded-[28%] border border-white/12 bg-gradient-to-br from-neon/12 via-violet/8 to-transparent backdrop-blur-xl neon-ring"
          style={{ clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)' }}
        >
          <div className="text-center">
            <span className="block font-display text-4xl font-black tracking-tight text-white text-glow sm:text-5xl">
              {profile.monogram}
            </span>
            <span className="mt-1.5 block font-mono text-[9px] tracking-[0.28em] text-neon/70 uppercase">
              frontend
            </span>
          </div>
        </div>
      </div>

      <div className="absolute inset-[34%] rounded-full border border-neon/35">
        <span className="absolute inset-0 animate-pulse-ring rounded-full border border-neon/40" />
      </div>

      <div
        aria-hidden
        className="absolute inset-x-[8%] bottom-[-6%] h-24 rounded-[50%] blur-2xl"
        style={{ background: 'rgba(34,242,255,0.22)' }}
      />
    </div>
  )
}
