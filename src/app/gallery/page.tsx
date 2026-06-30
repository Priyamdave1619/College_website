import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = { title: 'Photo Gallery' }

const categories = ['All', 'Events', 'Campus', 'Sports', 'Cultural', 'Convocation', 'NCC/NSS']

const placeholderImages = Array.from({ length: 18 }, (_, i) => ({
  id: i + 1,
  category: categories[(i % (categories.length - 1)) + 1],
  caption: `Gallery Image ${i + 1}`,
  bg: ['bg-blue-100', 'bg-orange-100', 'bg-green-100', 'bg-purple-100', 'bg-teal-100', 'bg-rose-100'][i % 6],
}))

export default function GalleryPage() {
  return (
    <>
      <PageHero title="Photo Gallery" subtitle="Moments from campus life, events, achievements, and celebrations at GICEAS." breadcrumbs={[{ label: 'Media' }, { label: 'Photo Gallery' }]} />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Category filter (static) */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map(c => (
              <span key={c} className={`px-4 py-1.5 rounded-full text-sm font-medium cursor-pointer transition-colors ${c === 'All' ? 'bg-[#1e3a8a] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>{c}</span>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {placeholderImages.map(img => (
              <div key={img.id} className={`${img.bg} rounded-2xl aspect-square flex flex-col items-center justify-center group cursor-pointer hover:shadow-lg transition-all hover:scale-[1.02] relative overflow-hidden`}>
                <div className="text-4xl opacity-20 mb-2">📷</div>
                <div className="text-xs text-gray-500 font-medium">{img.category}</div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-end p-3">
                  <span className="text-xs text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity">{img.caption}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 mt-8">
            Replace placeholder tiles with real images from <code className="bg-gray-100 px-1 rounded">public/gallery/</code> folder.
          </p>
        </div>
      </section>
    </>
  )
}
