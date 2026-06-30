/**
 * loading.tsx — Root-level Next.js App Router loading UI
 * Place at: src/app/loading.tsx
 *
 * This renders as a skeleton/placeholder while page JS loads.
 * Used in conjunction with GlobalLoader (which handles client-side transitions).
 */
export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col" role="status" aria-label="Page loading…">
      {/* Hero skeleton */}
      <div className="bg-gradient-to-br from-[#1e3a8a] to-[#0f1638] py-24 md:py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-4">
          {/* Badge skeleton */}
          <div className="w-40 h-7 rounded-full bg-white/10 mb-6 animate-pulse" />
          {/* Heading skeleton */}
          <div className="w-3/4 h-12 rounded-xl bg-white/10 mb-4 animate-pulse" />
          <div className="w-1/2 h-12 rounded-xl bg-white/10 mb-6 animate-pulse" />
          {/* Subtext skeleton */}
          <div className="w-2/3 h-5 rounded-lg bg-white/8 mb-2 animate-pulse" />
          <div className="w-1/2 h-5 rounded-lg bg-white/8 mb-8 animate-pulse" />
          {/* CTA buttons skeleton */}
          <div className="flex gap-4">
            <div className="w-40 h-12 rounded-xl bg-orange-500/30 animate-pulse" />
            <div className="w-36 h-12 rounded-xl bg-white/10 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Content skeleton */}
      <div className="py-16 bg-white flex-1">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section label skeleton */}
          <div className="flex flex-col items-center mb-12">
            <div className="w-24 h-4 rounded-full bg-orange-100 mb-3 animate-pulse" />
            <div className="w-64 h-8 rounded-xl bg-gray-100 mb-3 animate-pulse" />
            <div className="w-14 h-1 rounded-full bg-orange-100 animate-pulse" />
          </div>
          {/* Cards grid skeleton */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-2xl border border-gray-100 p-6 space-y-3" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="w-12 h-12 rounded-xl bg-gray-100 animate-pulse" />
                <div className="w-3/4 h-5 rounded-lg bg-gray-100 animate-pulse" />
                <div className="w-full h-4 rounded-lg bg-gray-50 animate-pulse" />
                <div className="w-2/3 h-4 rounded-lg bg-gray-50 animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <span className="sr-only">Loading page content, please wait…</span>
    </div>
  )
}
