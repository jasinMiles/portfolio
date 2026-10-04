import { profile } from '../../data/portfolio'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative z-10 border-t border-white/8 bg-ink/70 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-lg border border-neon/40 bg-neon/10 font-display text-xs font-bold text-neon">
              {profile.monogram}
            </span>
            <div>
              <p className="font-display text-sm font-bold text-white">{profile.name}</p>
              <p className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
                {profile.roles[0]}
              </p>
            </div>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {[
              { id: 'about', label: 'About' },
              { id: 'skills', label: 'Skills' },
              { id: 'work', label: 'Work' },
              { id: 'path', label: 'Path' },
              { id: 'contact', label: 'Contact' },
            ].map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="font-mono text-[11px] tracking-[0.16em] text-white/45 uppercase transition-colors hover:text-neon"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5 font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-acid shadow-[0_0_8px_#b6ff3d]" />
            online
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/6 pt-6 font-mono text-[10px] tracking-[0.14em] text-white/30 uppercase sm:flex-row">
          <p>
            © {year} {profile.name}
          </p>
          <p className="text-white/25">
            built with <span className="text-neon/60">react</span> ·{' '}
            <span className="text-neon/60">typescript</span> ·{' '}
            <span className="text-neon/60">tailwind</span>
          </p>
          <a href="#top" className="transition-colors hover:text-neon">
            back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
