import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { skillGroups } from '../../data/portfolio'

export function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="02"
          eyebrow="capabilities"
          title="Tools I reach for"
          accent="every day"
          blurb="The stack behind SoftBuy and the kind of work I take on."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, groupIndex) => (
            <Reveal key={group.title} delay={groupIndex * 90}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/8 bg-ink-2/60 p-5 transition-all duration-400 hover:border-neon/35">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-400 group-hover:opacity-100"
                  style={{
                    background:
                      'linear-gradient(to right, transparent, var(--color-neon), transparent)',
                  }}
                />
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-sm font-semibold tracking-[0.14em] text-white uppercase">
                    {group.title}
                  </h3>
                  <span className="font-mono text-[10px] text-neon/45">{group.code}</span>
                </div>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="cursor-default rounded-lg border border-white/10 bg-white/4 px-2.5 py-1.5 font-mono text-[11px] tracking-wide text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-neon/60 hover:bg-neon/12 hover:text-neon hover:shadow-[0_0_20px_-6px_rgba(34,242,255,0.9)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
