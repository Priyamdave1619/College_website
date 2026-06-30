import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { MapPin, Plane, Camera } from 'lucide-react'

export const metadata: Metadata = { title: 'Educational Tour', description: 'GICEAS educational tours and field visits — learning beyond the classroom.' }

const tours = [
  { dept: 'B.Sc. Computer Science', destination: 'ISRO Space Applications Centre, Ahmedabad', year: '2024', participants: 48 },
  { dept: 'B.Sc. Microbiology', destination: 'ICAR Research Centre, Anand', year: '2024', participants: 35 },
  { dept: 'B.Sc. Biotechnology', destination: 'Biocon, Bengaluru', year: '2023', participants: 40 },
  { dept: 'B.Sc. Environmental Science', destination: 'National Botanical Gardens, Mumbai', year: '2024', participants: 30 },
  { dept: 'B.Sc. Chemistry', destination: 'Gujarat Alkalis & Chemicals Ltd., Vadodara', year: '2023', participants: 38 },
  { dept: 'All Departments', destination: 'Ahmedabad Heritage Walk & CEPT University', year: '2024', participants: 120 },
]

export default function EducationalTourPage() {
  return (
    <>
      <PageHero title="Educational Tours" subtitle="Learning beyond the classroom — GICEAS organises field visits and educational tours to industries, research labs, and heritage sites."
        badge="Activities" breadcrumbs={[{ label: 'Activities', href: '/activities' }, { label: 'Educational Tour' }]} />
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="space-y-4">
            {tours.map(t => (
              <div key={t.dept + t.year} className="card p-5 flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center shrink-0"><MapPin size={18} className="text-orange-500" /></div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm">{t.dept}</h3>
                      <div className="text-xs text-[#1e3a8a] font-medium mt-0.5">{t.destination}</div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs bg-blue-50 text-[#1e3a8a] font-semibold px-2 py-0.5 rounded-full">{t.year}</span>
                      <div className="text-[10px] text-gray-400 mt-1">{t.participants} students</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
