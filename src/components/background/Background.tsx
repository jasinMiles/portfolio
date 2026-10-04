import { Atmosphere } from './Atmosphere'
import { EffectsOverlay } from './EffectsOverlay'
import { GridFloor } from './GridFloor'
import { Starfield } from './Starfield'

export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-ink">
      <div className="absolute inset-0 bg-[radial-gradient(90%_70%_at_50%_-10%,#0b1830_0%,#050912_45%,#03050c_100%)]" />
      <Atmosphere />
      <Starfield />
      <GridFloor />
      <EffectsOverlay />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-ink via-ink/85 to-transparent" />
    </div>
  )
}
