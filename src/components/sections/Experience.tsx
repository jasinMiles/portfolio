import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { experience } from '../../data/portfolio'

export function Experience() {
  return (
    <section id="path" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          index="04"
          eyebrow="trajectory"
          title="Where I have been"
          accent="so far"
          blurb="across frontend engineering, fullstack teaching and technical operations."
        />

        <ol className="relative mt-14 pl-8 sm:pl-10">
          <span
            aria-hidden
            className="absolute top-2 bottom-2 left-[7px] w-px bg-gradient-to-b from-neon/70 via-violet/45 to-transparent sm:left-[11px]"
          />

          {experience.map((entry, index) => (
            <li key={entry.period} className="relative pb-12 last:pb-0">
              <Reveal delay={index * 110}>
                <span
                  aria-hidden
                  className="absolute top-1.5 -left-[28px] grid h-4 w-4 place-items-center rounded-full border border-neon/50 bg-ink sm:-left-[36px]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-neon shadow-[0_0_10px_#22f2ff]" />
                  <span className="absolute inset-0 animate-pulse-ring rounded-full border border-neon/40" />
                </span>

                <div className="group rounded-2xl border border-white/8 bg-ink-2/55 p-5 transition-all duration-400 hover:border-neon/35 hover:bg-ink-3/60 sm:p-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-[11px] tracking-[0.16em] text-neon uppercase">
                      {entry.period}
                    </span>
                  </div>
                  <h3 className="mt-2 font-display text-lg font-bold text-white">
                    {entry.role}
                  </h3>
                  <p className="mt-0.5 font-mono text-[12px] text-violet/85">{entry.org}</p>
                  <p className="mt-3 leading-relaxed text-muted">{entry.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
