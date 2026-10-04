export function GridFloor() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[62vh] overflow-hidden"
      style={{ perspective: '340px', perspectiveOrigin: '50% 0%' }}
    >
      <div className="absolute inset-x-[-60%] bottom-[-8%] h-[190%] animate-grid-move grid-plane opacity-[0.55] [mask-image:linear-gradient(to_top,black_0%,black_38%,transparent_88%)]">
        <div
          className="h-full w-full"
          style={{
            transform: 'rotateX(72deg)',
            transformOrigin: '50% 0%',
            backgroundImage:
              'linear-gradient(to right, rgba(34,242,255,0.34) 1px, transparent 1px), linear-gradient(to bottom, rgba(34,242,255,0.30) 1px, transparent 1px)',
            backgroundSize: '72px 100px',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(139,92,246,0.22) 1px, transparent 1px), linear-gradient(to bottom, rgba(139,92,246,0.18) 1px, transparent 1px)',
            backgroundSize: '288px 400px',
          }}
        />
      </div>

      <div
        className="absolute inset-x-0 top-0 h-[2px]"
        style={{
          background:
            'linear-gradient(to right, transparent, rgba(34,242,255,0.85), rgba(139,92,246,0.7), transparent)',
          filter: 'blur(1px)',
        }}
      />
      <div
        className="absolute inset-x-0 top-0 h-40"
        style={{
          background:
            'radial-gradient(60% 100% at 50% 0%, rgba(34,242,255,0.20), rgba(139,92,246,0.10) 45%, transparent 75%)',
        }}
      />
    </div>
  )
}
