import { marqueeKeywords } from '../../data/portfolio'

export function Marquee() {
  const items = [...marqueeKeywords, ...marqueeKeywords]

  return (
    <div
      className="relative flex overflow-hidden border-y border-white/8 bg-ink-2/40 py-4 backdrop-blur-sm"
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
      }}
    >
      <div className="flex w-max animate-marquee items-center">
        {items.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center gap-8 px-4 sm:gap-10 sm:px-5"
          >
            <span className="font-display text-sm font-medium tracking-[0.18em] whitespace-nowrap text-white/45 uppercase transition-colors hover:text-neon sm:text-base">
              {item}
            </span>
            <span
              aria-hidden
              className="h-1.5 w-1.5 rotate-45 bg-neon/50 shadow-[0_0_10px_#22f2ff]"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
