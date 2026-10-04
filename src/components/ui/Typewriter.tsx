import { useEffect, useRef, useState } from 'react'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

type TypewriterProps = {
  words: readonly string[]
  className?: string
  typeSpeed?: number
  deleteSpeed?: number
  pauseMs?: number
}

export function Typewriter({
  words,
  className = '',
  typeSpeed = 62,
  deleteSpeed = 32,
  pauseMs = 1700,
}: TypewriterProps) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [erasing, setErasing] = useState(false)
  const reducedMotion = usePrefersReducedMotion()
  const timer = useRef<number | null>(null)

  useEffect(() => {
    if (reducedMotion) {
      setText(words[0] ?? '')
      return
    }

    const current = words[index % words.length] ?? ''

    const tick = () => {
      if (!erasing) {
        const next = current.slice(0, text.length + 1)
        setText(next)
        if (next === current) {
          timer.current = window.setTimeout(() => setErasing(true), pauseMs)
          return
        }
        timer.current = window.setTimeout(tick, typeSpeed)
        return
      }

      const next = current.slice(0, text.length - 1)
      setText(next)
      if (next === '') {
        setErasing(false)
        setIndex((i) => (i + 1) % words.length)
        return
      }
      timer.current = window.setTimeout(tick, deleteSpeed)
    }

    timer.current = window.setTimeout(tick, erasing ? deleteSpeed : typeSpeed)
    return () => {
      if (timer.current) window.clearTimeout(timer.current)
    }
  }, [text, erasing, index, words, reducedMotion, typeSpeed, deleteSpeed, pauseMs])

  return (
    <span className={className}>
      {text}
      <span className="ml-0.5 inline-block w-[3px] translate-y-[2px] animate-blink bg-neon align-middle text-transparent">
        |
      </span>
    </span>
  )
}
