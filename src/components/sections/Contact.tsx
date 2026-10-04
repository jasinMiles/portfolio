import { ArrowUpRight, Github, Linkedin, Mail, Phone, Twitter } from 'lucide-react'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { HudFrame } from '../ui/HudFrame'
import { contactLinks, profile } from '../../data/portfolio'

const ICONS = {
  mail: Mail,
  phone: Phone,
  github: Github,
  linkedin: Linkedin,
  x: Twitter,
} as const

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          index="05"
          eyebrow="open channel"
          title="Let's build something"
          accent="worth shipping"
          align="center"
        />

        <Reveal delay={100}>
          <HudFrame label="" className="mt-12">
            <div className="p-6 sm:p-10">
              <p className="mx-auto max-w-xl text-center leading-relaxed text-white/70">
                I am open to frontend work — freelance projects, contract roles or a full-time
                seat. If you have a product that needs a fast, careful interface, send it over.
              </p>

              <div className="mt-9 grid grid-cols-[minmax(0,1fr)] gap-3 sm:grid-cols-2">
                {contactLinks.map((item) => {
                  const Icon = ICONS[item.icon]
                  const isPlaceholder = item.href.includes('TODO')

                  const inner = (
                    <>
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-neon/25 bg-neon/8 text-neon transition-all duration-300 group-hover:border-neon/60 group-hover:bg-neon/16">
                        <Icon size={17} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-mono text-[10px] tracking-[0.2em] text-muted uppercase">
                          {item.label}
                        </span>
                        <span className="mt-0.5 block truncate text-sm text-white/85 transition-colors group-hover:text-neon">
                          {item.handle}
                        </span>
                      </span>
                      <ArrowUpRight
                        size={16}
                        className="shrink-0 text-white/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-neon"
                      />
                    </>
                  )

                  const shell =
                    'group flex w-full min-w-0 items-center gap-3 overflow-hidden rounded-2xl border border-white/8 bg-ink-2/60 p-4 transition-all duration-400 hover:-translate-y-0.5 hover:border-neon/40 hover:bg-ink-3/70 sm:gap-4'

                  if (isPlaceholder) {
                    return (
                      <span
                        key={item.label}
                        title=""
                        className={`${shell} cursor-not-allowed opacity-55`}
                      >
                        {inner}
                      </span>
                    )
                  }

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer noopener"
                      className={shell}
                    >
                      {inner}
                    </a>
                  )
                })}
              </div>

              <div className="mt-9 flex flex-col items-center gap-4 border-t border-white/8 pt-8 sm:flex-row sm:justify-center">
                <a
                  href="mailto:avwerosuokeme@gmail.com"
                  className="group relative inline-flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-neon/90 to-violet/90 px-7 py-3.5 font-display text-sm font-bold tracking-[0.12em] text-ink uppercase transition-all hover:brightness-110 hover:shadow-[0_0_46px_-6px_rgba(34,242,255,0.95)] sm:w-auto"
                >
                  <Mail size={16} />
                  Send a message
                </a>
                <p className="font-mono text-[11px] text-muted sm:text-left">
                  <span className="block text-white/50">{profile.location}</span>
                  <span className="text-acid">Replies within 24 hours</span>
                </p>
              </div>
            </div>
          </HudFrame>
        </Reveal>
      </div>
    </section>
  )
}
