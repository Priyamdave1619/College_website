import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { Music, Star, Calendar } from 'lucide-react'

export const metadata: Metadata = { title: 'Cultural Activities', description: 'GICEAS cultural activities — festivals, talent shows, competitions, and artistic celebrations.' }

const events = [
  { name: 'Navratri Celebration', desc: 'Annual Garba & Dandiya event with cultural performances and traditional dress competition.', timing: 'October' },
  { name: 'Annual Cultural Fest', desc: 'Inter-department competitions in dance, drama, singing, and fine arts spanning two days.', timing: 'February' },
  { name: 'Freshers\' Welcome', desc: 'Welcome programme for new students featuring performances by senior students.', timing: 'August' },
  { name: 'Independence Day & Republic Day', desc: 'Patriotic programmes, cultural performances, and flag hoisting ceremonies.', timing: 'August / January' },
  { name: 'Farewell Ceremony', desc: 'A memorable send-off for final-year students with cultural programme and awards.', timing: 'April' },
  { name: 'Teacher\'s Day Celebration', desc: 'Student-led programme to honour faculty with cultural performances and appreciation.', timing: 'September' },
]

export default function CulturalPage() {
  return (
    <>
      <PageHero title="Cultural Activities" subtitle="GICEAS celebrates the rich cultural fabric of India through vibrant events, festivals, and artistic expressions throughout the year."
        badge="Activities" breadcrumbs={[{ label: 'Activities', href: '/activities' }, { label: 'Cultural' }]}
        gradient="bg-gradient-to-br from-pink-800 to-[#1e3a8a]" />
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {events.map(e => (
              <div key={e.name} className="card p-5">
                <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center mb-3"><Music size={18} className="text-pink-500" /></div>
                <div className="text-[10px] text-orange-500 font-bold uppercase tracking-wider mb-1">{e.timing}</div>
                <h3 className="font-bold text-gray-900 text-sm mb-2">{e.name}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 card p-6 text-center">
            <Star size={28} className="text-orange-400 mx-auto mb-3" />
            <h3 className="font-bold text-gray-900 mb-2">Inter-Collegiate Competitions</h3>
            <p className="text-sm text-gray-500 max-w-xl mx-auto">GICEAS students actively participate in and win inter-collegiate cultural competitions at district, state, and national levels. The cultural committee encourages every student to discover and showcase their talents.</p>
          </div>
        </div>
      </section>
    </>
  )
}
