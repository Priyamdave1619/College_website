import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { Award, Star, Trophy } from 'lucide-react'

export const metadata: Metadata = { title: 'Awards & Recognitions' }

const awards = [
  { year: '2025', title: 'NCC Best Cadet Award', desc: 'Cadet Mansi Arora was awarded by Director General NCC Lt. General Gurbirpal Singh for outstanding service and discipline.', category: 'NCC/NSS' },
  { year: '2024', title: 'NAAC Re-Accreditation', desc: 'GICEAS successfully underwent NAAC re-accreditation, reaffirming its commitment to quality education and research.', category: 'Academic' },
  { year: '2023', title: 'NIRF Ranking – First Entry', desc: 'GICEAS made its debut in the National Institutional Ranking Framework (NIRF) of the Ministry of Education, Government of India.', category: 'Ranking' },
  { year: '2022', title: 'Best Science College – Surat', desc: 'Recognized as one of the best science colleges in Surat by the Gujarat State Government\'s Department of Higher Education.', category: 'Institutional' },
  { year: '2021', title: 'Green Campus Certification', desc: 'GICEAS received the Green Campus Certification for its efforts in environmental sustainability, waste management, and energy conservation.', category: 'Environment' },
  { year: '2020', title: 'GSIRF Ranking', desc: 'Ranked among the top colleges in the Gujarat State Institutional Ranking Framework.', category: 'Ranking' },
]

export default function AwardsPage() {
  return (
    <>
      <PageHero title="Awards & Recognitions" subtitle="Celebrating excellence across academics, research, and service." breadcrumbs={[{ label: 'About', href: '/about' }, { label: 'Awards & Recognitions' }]} />
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((a, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center shrink-0">
                  <Trophy size={22} className="text-orange-500" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs bg-[#1e3a8a]/10 text-[#1e3a8a] px-2 py-0.5 rounded-full font-medium">{a.category}</span>
                    <span className="text-xs text-gray-400">{a.year}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{a.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
