import { Heart, Search, ShoppingCart, Star } from 'lucide-react'

const CATEGORIES = ['All Products', 'Audio', 'Wearables', 'Accessories', 'Lifestyle']

const PRODUCTS = [
  { name: 'Nova Wireless Headphones', price: 249, was: 329, rating: 4.9, badge: 'Bestseller', tint: 'from-violet-200 to-purple-100' },
  { name: 'Pulse Smart Watch', price: 189, was: 249, rating: 4.7, badge: 'Hot', tint: 'from-purple-200 to-fuchsia-100' },
  { name: 'Echo Bluetooth Speaker', price: 129, was: 169, rating: 4.6, badge: 'New', tint: 'from-violet-100 to-indigo-100' },
  { name: 'Orbit RGB Keyboard', price: 139, was: 199, rating: 4.7, badge: 'Sale', tint: 'from-fuchsia-100 to-purple-200' },
]

export function StorefrontMock() {
  return (
    <div className="relative w-full">
      <div
        aria-hidden
        className="absolute -inset-6 rounded-[2rem] opacity-60 blur-2xl"
        style={{
          background:
            'radial-gradient(60% 60% at 50% 30%, rgba(139,92,246,0.30), rgba(168,85,247,0.18) 55%, transparent 78%)',
        }}
      />

      <div className="clip-corner relative overflow-hidden rounded-xl border border-violet-300/25 bg-[#f8f6ff] shadow-[0_30px_90px_-30px_rgba(0,0,0,0.95)]">
        <div className="flex items-center gap-3 border-b border-purple-100 bg-white px-3 py-2">
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-red-400" />
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
          </div>
          <div className="mx-auto flex items-center gap-1.5 rounded-md bg-slate-100 px-2.5 py-1 font-mono text-[9px] tracking-wide text-slate-500">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            softbuy
          </div>
        </div>

        <div className="flex items-center gap-2 border-b border-purple-100 bg-white/95 px-3 py-2.5">
          <span className="grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-violet-600 to-purple-500">
            <ShoppingCart size={12} className="text-white" />
          </span>
          <span className="font-display text-sm font-bold tracking-tight text-slate-800">
            Soft<span className="text-violet-600">Buy</span>
          </span>
          <div className="ml-2 hidden flex-1 items-center gap-1.5 rounded-lg border border-purple-200 bg-violet-50/60 px-2.5 py-1.5 sm:flex">
            <Search size={11} className="shrink-0 text-slate-400" />
            <span className="truncate font-mono text-[9px] text-slate-400">
              Search products, brands and categories…
            </span>
          </div>
          <Heart size={13} className="shrink-0 text-slate-400" />
          <span className="relative shrink-0">
            <ShoppingCart size={13} className="text-slate-600" />
            <span className="absolute -top-1.5 -right-1.5 grid h-3.5 w-3.5 place-items-center rounded-full bg-violet-600 font-mono text-[8px] font-bold text-white">
              3
            </span>
          </span>
        </div>

        <div className="flex items-center gap-1.5 overflow-hidden border-b border-purple-100 bg-white px-3 py-2">
          {CATEGORIES.map((cat, index) => (
            <span
              key={cat}
              className={`shrink-0 rounded-lg px-2.5 py-1 font-mono text-[9px] whitespace-nowrap ${
                index === 0
                  ? 'bg-gradient-to-r from-violet-600 to-purple-500 font-bold text-white'
                  : 'text-slate-500'
              }`}
            >
              {cat}
            </span>
          ))}
        </div>

        <div
          className="flex items-center justify-between px-3 py-2"
          style={{ background: 'linear-gradient(90deg,#7c3aed,#a855f7)' }}
        >
          <span className="font-display text-[10px] font-bold tracking-wider text-white uppercase">
            Flash Sale
          </span>
          <span className="flex items-center gap-1 font-mono text-[10px] font-bold text-white">
            01<span className="text-white/60">:</span>42<span className="text-white/60">:</span>18
          </span>
          <span className="rounded-md bg-white/20 px-2 py-0.5 font-mono text-[9px] font-bold text-white">
            Shop now
          </span>
        </div>

        <div className="bg-[#f8f6ff] px-3 pt-3 pb-4">
          <div className="mb-2.5 flex items-baseline justify-between">
            <span className="font-display text-[11px] font-extrabold text-slate-800">
              Recommended for <span className="text-violet-600">You</span>
            </span>
            <span className="font-mono text-[8px] text-slate-400">12 products</span>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {PRODUCTS.map((product) => {
              const off = Math.round((1 - product.price / product.was) * 100)
              return (
                <div
                  key={product.name}
                  className="flex flex-col overflow-hidden rounded-lg border border-purple-100 bg-white"
                >
                  <div className={`relative h-14 bg-gradient-to-br ${product.tint}`}>
                    {product.badge && (
                      <span className="absolute top-1.5 left-1.5 rounded bg-violet-600 px-1.5 py-0.5 font-mono text-[7px] font-bold tracking-wide text-white">
                        {product.badge}
                      </span>
                    )}
                    <Heart
                      size={10}
                      className="absolute top-1.5 right-1.5 text-slate-400"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-2">
                    <span className="flex items-center gap-1">
                      <Star size={8} className="fill-amber-400 text-amber-400" />
                      <span className="font-mono text-[8px] font-bold text-amber-700">
                        {product.rating}
                      </span>
                      <span className="ml-auto font-mono text-[7px] text-emerald-600">
                        In stock
                      </span>
                    </span>
                    <span className="mt-1 line-clamp-2 text-[9px] leading-tight font-medium text-slate-700">
                      {product.name}
                    </span>
                    <span className="mt-auto flex items-baseline gap-1 pt-1.5">
                      <span className="font-display text-[11px] font-extrabold text-slate-800">
                        ${product.price}
                      </span>
                      <span className="font-mono text-[8px] text-slate-400 line-through">
                        ${product.was}
                      </span>
                      <span className="ml-auto font-mono text-[8px] font-bold text-red-500">
                        -{off}%
                      </span>
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-2.5 grid grid-cols-4 gap-1.5">
            {['Free delivery', 'Secure payments', '30-day returns', '24/7 support'].map(
              (item) => (
                <span
                  key={item}
                  className="truncate rounded-md border border-purple-100 bg-white px-1 py-1 text-center font-mono text-[7px] text-slate-500"
                >
                  {item}
                </span>
              ),
            )}
          </div>
        </div>

        <div
          aria-hidden
          className="h-8 border-t border-purple-100"
          style={{
            backgroundImage:
              'linear-gradient(90deg, rgba(124,58,237,0.10) 1px, transparent 1px)',
            backgroundSize: '14px 14px',
          }}
        />
      </div>
    </div>
  )
}
