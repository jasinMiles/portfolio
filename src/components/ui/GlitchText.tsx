import { useEffect, useState } from 'react'

type GlitchTextProps = {
  text: string
  className?: string
}

export function GlitchText({ text, className = '' }: GlitchTextProps) {
  const [jitter, setJitter] = useState(false)

  useEffect(() => {
    let cycle = 0

    const schedule = () => {
      cycle = window.setTimeout(() => {
        setJitter(true)
        window.setTimeout(() => setJitter(false), 220)
        schedule()
      }, 3600 + Math.random() * 4200)
    }

    schedule()

    return () => {
      window.clearTimeout(cycle)
    }
  }, [])

  return (
    <span className={`relative inline-block ${className}`}>
      <span
        aria-hidden
        className={`pointer-events-none absolute inset-0 select-none text-plasma/85 transition-opacity duration-150 ${jitter ? 'opacity-100' : 'opacity-0'}`}
        style={{
          transform: jitter ? 'translate(-2px, -1px)' : 'none',
          clipPath: 'polygon(0 0, 100% 0, 100% 42%, 0 42%)',
        }}
      >
        {text}
      </span>
      <span
        aria-hidden
        className={`pointer-events-none absolute inset-0 select-none text-neon/85 transition-opacity duration-150 ${jitter ? 'opacity-100' : 'opacity-0'}`}
        style={{
          transform: jitter ? 'translate(2px, 1px)' : 'none',
          clipPath: 'polygon(0 58%, 100% 58%, 100% 100%, 0 100%)',
        }}
      >
        {text}
      </span>
      <span className="relative">{text}</span>
    </span>
  )
}
