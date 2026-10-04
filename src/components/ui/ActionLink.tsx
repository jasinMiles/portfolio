const BASE =
  'inline-flex items-center justify-center gap-2.5 rounded-full font-medium transition-all duration-300 select-none'

const VARIANTS = {
  primary:
    'relative overflow-hidden bg-gradient-to-r from-neon/90 to-violet/90 text-ink px-6 py-3 font-semibold shadow-[0_0_30px_-6px_rgba(34,242,255,0.75)] hover:shadow-[0_0_44px_-4px_rgba(34,242,255,0.95)] hover:brightness-110',
  ghost:
    'border border-neon/35 bg-neon/5 px-6 py-3 text-neon hover:border-neon/80 hover:bg-neon/12 hover:shadow-[0_0_28px_-10px_rgba(34,242,255,0.8)]',
  solid:
    'border border-white/12 bg-white/6 px-5 py-2.5 text-sm text-white/85 backdrop-blur-md hover:border-neon/50 hover:text-white',
} as const

const SIZES = {
  sm: 'text-sm',
  md: 'text-sm sm:text-[0.95rem]',
  lg: 'text-base',
} as const

type ActionProps = {
  href: string
  variant?: keyof typeof VARIANTS
  size?: keyof typeof SIZES
  className?: string
  children: React.ReactNode
  external?: boolean
}

export function ActionLink({
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  external = false,
}: ActionProps) {
  const needsPlaceholder = href.startsWith('TODO')

  if (needsPlaceholder) {
    return (
      <span
        title=""
        className={`${BASE} ${VARIANTS[variant]} ${SIZES[size]} cursor-not-allowed opacity-45 ${className}`}
      >
        {children}
      </span>
    )
  }

  return (
    <a
      href={href}
      className={`${BASE} group ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
      {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
    >
      {children}
    </a>
  )
}
