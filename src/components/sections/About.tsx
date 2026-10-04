import { Boxes, Layout, ShieldCheck, Zap } from 'lucide-react'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { HudFrame } from '../ui/HudFrame'
import { profile } from '../../data/portfolio'

const FOCUS_AREAS = [
  {
    icon: Layout,
    title: 'Interface engineering',
    body: 'Turning designs into pixel-accurate, responsive layouts that hold up on every screen size.',
  },
  {
    icon: Boxes,
    title: 'State & data',
    body: 'Wiring components to REST APIs with predictable state, loading and error states.',
  },
  {
    icon: Zap,
    title: 'Performance',
    body: 'Keeping bundles lean, first paint fast and interactions smooth on low-end devices.',
  },
  {
    icon: ShieldCheck,
    title: 'Accessibility',
    body: 'Semantic markup, keyboard support and contrast that passes, not just looks good.',
  },
]

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="01"
          eyebrow="about"
          title="A developer who cares about"
          accent="the details"
          blurb="Short version of who I am and what I bring to a team."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal delay={80}>
            <HudFrame label="">
              <div className="space-y-5 p-6 sm:p-8">
                {profile.bio.map((paragraph, index) => (
                  <p key={index} className="leading-relaxed text-white/75">
                    {paragraph}
                  </p>
                ))}

                <div className="mt-7 border-t border-white/8 pt-6">
                  <p className="hud-label text-[10px] opacity-70">working style</p>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {[
                      'Ship small, ship often',
                      'Component-first thinking',
                      'Mobile-first layouts',
                      'Clean, reviewable code',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-white/70">
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rotate-45 bg-neon shadow-[0_0_8px_#22f2ff]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </HudFrame>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {FOCUS_AREAS.map((area, index) => (
              <Reveal key={area.title} delay={140 + index * 90}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-white/8 bg-ink-2/70 p-5 transition-all duration-400 hover:border-neon/40 hover:bg-ink-3/70">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -top-16 -right-16 h-32 w-32 rounded-full bg-neon/15 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <div className="relative flex items-start gap-3.5">
                    <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-neon/30 bg-neon/8">
                      <area.icon size={16} className="text-neon" />
                    </span>
                    <div>
                      <h3 className="font-display text-sm font-semibold tracking-wide text-white">
                        {area.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">{area.body}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
