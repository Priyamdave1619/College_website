import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { NEWS, EVENTS } from '@/lib/data'
import { Newspaper, Calendar } from 'lucide-react'

export const metadata: Metadata = { title: 'News & Activities' }

const catColors: Record<string, string> = {
  Achievement: 'bg-yellow-100 text-yellow-700', Admissions: 'bg-teal-100 text-teal-700',
  Research: 'bg-rose-100 text-rose-700', Placement: 'bg-indigo-100 text-indigo-700',
  Environment: 'bg-green-100 text-green-700', Seminar: 'bg-blue-100 text-blue-700',
  Career: 'bg-purple-100 text-purple-700', NSS: 'bg-orange-100 text-orange-700',
}

export default function NewsPage() {
  return (
    <>
      <PageHero title="News & Activities" subtitle="Latest updates, events, and happenings from the GICEAS campus." breadcrumbs={[{ label: 'News & Activities' }]} />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-[#1e3a8a] mb-6 flex items-center gap-2"><Newspaper size={22} className="text-orange-500" /> Latest News</h2>
            <div className="space-y-4">
              {NEWS.map((n, i) => (
                <div key={i} className="p-5 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-sm transition-all">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${catColors[n.category] || 'bg-gray-100 text-gray-600'}`}>{n.category}</span>
                    <span className="text-xs text-gray-400">{n.date}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm leading-snug">{n.title}</h3>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#1e3a8a] mb-6 flex items-center gap-2"><Calendar size={22} className="text-orange-500" /> Recent Events</h2>
            <div className="space-y-4">
              {EVENTS.map((e, i) => (
                <div key={i} className="p-5 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-sm transition-all">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${catColors[e.category] || 'bg-gray-100 text-gray-600'}`}>{e.category}</span>
                    <span className="text-xs text-gray-400">{e.date}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm leading-snug">{e.title}</h3>
                  <p className="text-xs text-gray-400 mt-1">{e.dept}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
