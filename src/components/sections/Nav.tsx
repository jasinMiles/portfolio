import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useActiveSection } from '../../hooks/useActiveSection'
import { profile } from '../../data/portfolio'

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'Work' },
  { id: 'path', label: 'Path' },
  { id: 'contact', label: 'Contact' },
] as const

const SECTION_IDS = LINKS.map((link) => link.id)

export function Nav() {
  const active = useActiveSection(SECTION_IDS)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-2' : 'py-4'
        }`}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <nav
            className={`flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 sm:px-5 ${
              scrolled
                ? 'glass neon-ring shadow-[0_10px_40px_-16px_rgba(0,0,0,0.9)]'
                : 'border border-transparent'
            }`}
          >
            <a href="#top" className="group flex items-center gap-2.5">
              <span className="relative grid h-9 w-9 place-items-center rounded-lg border border-neon/40 bg-neon/10 font-display text-xs font-bold text-neon">
                {profile.monogram}
                <span className="absolute inset-0 animate-pulse-ring rounded-lg border border-neon/50" />
              </span>
              <span className="hidden font-mono text-[11px] tracking-[0.2em] text-white/70 uppercase transition-colors group-hover:text-neon sm:block">
                {profile.firstName}
                <span className="text-neon/60">_</span>
                {profile.lastName}
              </span>
            </a>

            <ul className="hidden items-center gap-1 md:flex">
              {LINKS.map((link) => {
                const isActive = active === link.id
                return (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className={`relative rounded-full px-4 py-2 font-mono text-[11px] tracking-[0.18em] uppercase transition-all duration-300 ${
                        isActive
                          ? 'bg-neon/12 text-neon'
                          : 'text-white/55 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <span className="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-transparent via-neon to-transparent" />
                      )}
                    </a>
                  </li>
                )
              })}
            </ul>

            <div className="flex items-center gap-2">
              <a
                href="#contact"
                className="hidden rounded-full border border-neon/35 bg-neon/8 px-4 py-2 font-mono text-[11px] tracking-[0.18em] text-neon uppercase transition-all hover:bg-neon/16 hover:shadow-[0_0_26px_-8px_rgba(34,242,255,0.9)] sm:block"
              >
                Hire me
              </a>
              <button
                type="button"
                onClick={() => setOpen((value) => !value)}
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
                className="grid h-9 w-9 place-items-center rounded-lg border border-white/12 bg-white/5 text-white/80 transition-colors hover:border-neon/50 hover:text-neon md:hidden"
              >
                {open ? <X size={16} /> : <Menu size={16} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 transition-all duration-400 md:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="absolute inset-0 bg-ink/85 backdrop-blur-xl"
        />
        <ul className="absolute inset-x-5 top-28 flex flex-col gap-1 rounded-3xl glass p-4">
          {LINKS.map((link, index) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-2xl px-4 py-3.5 font-display text-sm tracking-[0.2em] text-white/75 uppercase transition-colors hover:bg-neon/10 hover:text-neon"
                style={{
                  transitionDelay: `${index * 40}ms`,
                  transform: open ? 'translateY(0)' : 'translateY(8px)',
                }}
              >
                {link.label}
                <span className="font-mono text-[10px] text-neon/50">
                  0{index + 1}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
