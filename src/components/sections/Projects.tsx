import { ArrowUpRight, Check, ExternalLink, Github, Sparkles } from 'lucide-react'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { HudFrame } from '../ui/HudFrame'
import { StorefrontMock } from '../project/StorefrontMock'
import { projects } from '../../data/portfolio'
import type { Project } from '../../data/portfolio'

export function Projects() {
  return (
    <section id="work" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="03"
          eyebrow="selected work"
          title="One flagship build,"
          accent="done properly"
          blurb="SoftBuy is the project I would put in front of anyone reviewing my frontend work."
        />

        <div className="mt-14 space-y-8">
          {projects.map((item, index) => (
            <ProjectCard key={item.slug} project={item} index={index} />
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-8 flex items-center gap-2 font-mono text-[11px] text-muted">
            <Sparkles size={13} className="text-neon/70" />
            <span>
              {projects.length} project listed — more case studies available on request.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

type ProjectCardProps = {
  project: Project
  index: number
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const isPlaceholder = (href: string) => href.startsWith('TODO')

  return (
    <Reveal delay={index * 120}>
      <HudFrame tone={project.accent === 'plasma' ? 'plasma' : 'neon'}>
        <div className="grid gap-px bg-white/6 lg:grid-cols-2">
          <div className="relative overflow-hidden bg-ink/60 p-6 sm:p-9">
            <div className="animate-float">
              <StorefrontMock />
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-neon/30 bg-neon/8 px-2.5 py-1 font-mono text-[11px] text-neon"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-ink-2/70 p-6 sm:p-9">
            <div className="flex flex-wrap items-center gap-3">
              <span className="hud-label text-[10px] opacity-80">{project.category}</span>
              <span className="h-3 w-px bg-white/15" />
              <span className="font-mono text-[11px] text-white/40">{project.year}</span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-acid/30 bg-acid/10 px-2.5 py-1 font-mono text-[10px] tracking-wider text-acid uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-acid" />
                {project.status}
              </span>
            </div>

            <h3 className="mt-4 font-display text-3xl font-black tracking-tight text-white sm:text-4xl">
              <span className="gradient-text">{project.title}</span>
            </h3>

            <p className="mt-2 text-sm font-medium text-neon/85">{project.headline}</p>

            <div className="mt-5 space-y-3">
              <p className="leading-relaxed text-white/70">{project.summary}</p>
              {project.details.map((paragraph, detailIndex) => (
                <p key={detailIndex} className="leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
            </div>

            <dl className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {project.highlights.map((item) => (
                <div
                  key={item.label}
                  className="min-w-0 rounded-xl border border-white/8 bg-white/4 px-3 py-2.5"
                >
                  <dt className="font-mono text-[9px] tracking-[0.16em] text-muted uppercase">
                    {item.label}
                  </dt>
                  <dd className="mt-1 font-display text-xs font-semibold text-white sm:text-sm">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>

            <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li key={feature.title} className="flex items-start gap-2.5">
                  <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded border border-neon/40 bg-neon/12">
                    <Check size={10} className="text-neon" />
                  </span>
                  <span className="text-sm leading-relaxed text-white/65">
                    <span className="font-medium text-white/90">{feature.title}</span>
                    <span className="text-muted"> — {feature.body}</span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              {isPlaceholder(project.links.live) ? (
                <span
                  title="https://rad-dango-5749fb.netlify.app/"
                  className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-neon/25 bg-neon/5 px-5 py-2.5 font-mono text-[12px] tracking-wider text-neon/45 uppercase"
                >
                  <ExternalLink size={14} />
                  Live demo
                </span>
              ) : (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon/90 to-violet/90 px-5 py-2.5 font-mono text-[12px] font-bold tracking-wider text-ink uppercase transition-all hover:brightness-110 hover:shadow-[0_0_34px_-6px_rgba(34,242,255,0.9)]"
                >
                  Live demo
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              )}

              {isPlaceholder(project.links.repo) ? (
                <span
                  title="TODO: add the repository URL"
                  className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-white/12 bg-white/4 px-5 py-2.5 font-mono text-[12px] tracking-wider text-white/40 uppercase"
                >
                  <Github size={14} />
                  Source code
                </span>
              ) : (
                <a
                  href={project.links.repo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 font-mono text-[12px] tracking-wider text-white/80 uppercase transition-all hover:border-neon/50 hover:text-neon"
                >
                  <Github size={14} />
                  Source code
                </a>
              )}
            </div>
          </div>
        </div>
      </HudFrame>
    </Reveal>
  )
}
