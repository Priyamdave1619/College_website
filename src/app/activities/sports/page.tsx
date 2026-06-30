import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { Trophy, Target, Users } from 'lucide-react'

export const metadata: Metadata = { title: 'Sports Activities', description: 'GICEAS sports facilities, inter-collegiate competitions, and sports achievements.' }

const sports = [
  { name: 'Cricket', level: 'Inter-Collegiate', achievement: 'District Level Finalists 2024' },
  { name: 'Volleyball', level: 'Inter-Collegiate', achievement: 'University Zone Champions 2024' },
  { name: 'Kho-Kho', level: 'Inter-Collegiate', achievement: 'State Level Participation 2023' },
  { name: 'Badminton', level: 'Inter-Collegiate', achievement: 'University Quarter-Finals 2024' },
  { name: 'Chess', level: 'Inter-Collegiate', achievement: 'District Level Winners 2024' },
  { name: 'Table Tennis', level: 'Inter-Collegiate', achievement: 'University Round Robin 2023' },
  { name: 'Athletics', level: 'Inter-Collegiate', achievement: 'Multiple Medals at Zone Level 2024' },
  { name: 'Yoga & Fitness', level: 'Intra-College', achievement: 'Annual Yoga Day Event' },
]

export default function SportsPage() {
  return (
    <>
      <PageHero title="Sports Activities" subtitle="GICEAS nurtures athletic talent through inter-collegiate competitions, sports events, and a culture of physical well-being."
        badge="Activities" breadcrumbs={[{ label: 'Activities', href: '/activities' }, { label: 'Sports' }]}
        gradient="bg-gradient-to-br from-emerald-800 to-[#1e3a8a]" />
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-4 mb-10">
            {[{ v: '8+', l: 'Sports Offered' }, { v: '50+', l: 'Annual Competitions' }, { v: '25+', l: 'Medals Won (2024)' }].map(s => (
              <div key={s.l} className="card p-4 text-center"><div className="text-2xl font-bold text-emerald-600 mb-1">{s.v}</div><div className="text-xs text-gray-500">{s.l}</div></div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {sports.map(s => (
              <div key={s.name} className="card p-4 flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0"><Trophy size={18} className="text-emerald-500" /></div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">{s.name}</h3>
                  <div className="text-[10px] text-gray-400 mb-1">{s.level}</div>
                  <div className="text-xs text-emerald-600 font-medium">{s.achievement}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="card p-6">
            <Users size={20} className="text-emerald-500 mb-3" />
            <h3 className="font-bold text-gray-900 mb-2">Annual Sports Meet</h3>
            <p className="text-sm text-gray-600">GICEAS organises an Annual Sports Meet every February featuring track & field events, team sports, and individual competitions. All students are encouraged to participate regardless of skill level.</p>
          </div>
        </div>
      </section>
    </>
  )
}
