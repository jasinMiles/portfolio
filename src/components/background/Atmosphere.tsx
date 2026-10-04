export function Atmosphere() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="animate-drift absolute -top-[22%] left-[-14%] h-[70vh] w-[70vh] rounded-full opacity-45 blur-[110px]"
        style={{
          background:
            'radial-gradient(circle, rgba(34,242,255,0.55) 0%, rgba(34,242,255,0.16) 45%, transparent 70%)',
        }}
      />
      <div
        className="animate-drift absolute -top-[10%] right-[-18%] h-[78vh] w-[78vh] rounded-full opacity-40 blur-[120px]"
        style={{
          animationDelay: '-8s',
          background:
            'radial-gradient(circle, rgba(139,92,246,0.6) 0%, rgba(139,92,246,0.18) 46%, transparent 72%)',
        }}
      />
      <div
        className="animate-drift absolute bottom-[-25%] left-[26%] h-[62vh] w-[62vh] rounded-full opacity-30 blur-[130px]"
        style={{
          animationDelay: '-15s',
          background:
            'radial-gradient(circle, rgba(255,61,240,0.5) 0%, rgba(255,61,240,0.12) 48%, transparent 74%)',
        }}
      />
      <div
        className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-[90px]"
        style={{
          background: 'radial-gradient(circle, rgba(34,242,255,0.35), transparent 68%)',
        }}
      />
    </div>
  )
}
