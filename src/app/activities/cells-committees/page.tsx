import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { Shield, Users, CheckCircle } from 'lucide-react'

export const metadata: Metadata = { title: 'Cells & Committees', description: 'GICEAS institutional cells and committees — Anti-Ragging, IQAC, ICC, Gender Cell, and more.' }

const committees = [
  { name: 'IQAC – Internal Quality Assurance Cell', purpose: 'Quality enhancement in academics and administration', chair: 'Dr. A. Mehta (Principal)', link: '/academic/iqac' },
  { name: 'ICC – Internal Complaints Committee', purpose: 'Prevention, prohibition and redressal of sexual harassment', chair: 'Senior Faculty Member', link: '/icc' },
  { name: 'Anti-Ragging Committee', purpose: 'Zero tolerance against ragging on campus', chair: 'Dr. A. Mehta (Principal)', link: '/students/anti-ragging' },
  { name: 'Gender Sensitization Cell', purpose: 'Promoting gender equality and awareness', chair: 'Senior Faculty Member', link: '/students/gender-cell' },
  { name: 'Discipline Committee', purpose: 'Maintaining academic discipline and code of conduct', chair: 'Vice-Principal', link: '/students/code-of-conduct' },
  { name: 'Examination Committee', purpose: 'Coordinating internal and university examinations', chair: 'Examination In-charge', link: '/result' },
  { name: 'Placement Cell', purpose: 'Industry connect, placement, and internship activities', chair: 'Placement Coordinator', link: '/placement' },
  { name: 'Research Committee', purpose: 'Promoting research culture and publication activities', chair: 'Research Coordinator', link: '/research' },
  { name: 'Alumni Cell', purpose: 'Maintaining alumni connect and networking', chair: 'Alumni Coordinator', link: '/about' },
  { name: 'NSS Unit', purpose: 'Community service and social development programmes', chair: 'NSS Programme Officer', link: '/activities/nss' },
]

export default function CellsCommitteesPage() {
  return (
    <>
      <PageHero title="Cells & Committees" subtitle="GICEAS's institutional cells and committees ensure the highest standards of governance, welfare, and student support."
        badge="Activities" breadcrumbs={[{ label: 'Activities', href: '/activities' }, { label: 'Cells & Committees' }]} />
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-5">
            {committees.map(c => (
              <a key={c.name} href={c.link} className="card p-5 hover:border-[#1e3a8a] hover:shadow-md transition-all group">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1e3a8a]/8 flex items-center justify-center shrink-0 group-hover:bg-[#1e3a8a]/15 transition-colors">
                    <Shield size={18} className="text-[#1e3a8a]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1 group-hover:text-[#1e3a8a] transition-colors">{c.name}</h3>
                    <p className="text-xs text-gray-500 mb-1">{c.purpose}</p>
                    <div className="text-[10px] text-orange-500 font-semibold">Chair: {c.chair}</div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
