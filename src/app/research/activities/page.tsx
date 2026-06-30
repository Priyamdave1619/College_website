import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { FlaskConical, Calendar, Users } from 'lucide-react'

export const metadata: Metadata = { title: 'Research Activities', description: 'Ongoing and completed research activities, projects, and collaborations at GICEAS.' }

const activities = [
  { title: 'Minor Research Project – DST', dept: 'Dept. of Chemistry', status: 'Completed', year: '2023', funding: 'DST, Govt. of India', desc: 'Synthesis and characterization of novel antimicrobial compounds.' },
  { title: 'Major Research Project – UGC', dept: 'Dept. of Microbiology', status: 'Ongoing', year: '2024–26', funding: 'UGC', desc: 'Study of antibiotic resistance mechanisms in pathogenic bacteria isolated from hospital environments.' },
  { title: 'Industry-Sponsored Research', dept: 'Dept. of Biotechnology', status: 'Ongoing', year: '2024–25', funding: 'Industry Partner', desc: 'Development of biosensor-based rapid diagnostic kits.' },
  { title: 'Environmental Monitoring Study', dept: 'Dept. of Environmental Science', status: 'Completed', year: '2023', funding: 'Gujarat Pollution Control Board', desc: 'Water quality assessment of Tapi River tributaries near Surat.' },
]

export default function ResearchActivitiesPage() {
  return (
    <>
      <PageHero title="Research Activities" subtitle="GICEAS faculty and students engage in cutting-edge research across science disciplines with national and industry funding."
        badge="Research" breadcrumbs={[{ label: 'Research', href: '/research' }, { label: 'Activities' }]} />
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-4 mb-10">
            {[{ v: '15+', l: 'Active Projects' }, { v: '₹45L+', l: 'Total Funding' }, { v: '6', l: 'Funding Agencies' }].map(s => (
              <div key={s.l} className="card p-4 text-center"><div className="text-2xl font-bold text-[#0d9488] mb-1">{s.v}</div><div className="text-xs text-gray-500">{s.l}</div></div>
            ))}
          </div>
          <div className="space-y-5">
            {activities.map(a => (
              <div key={a.title} className="card p-5">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <FlaskConical size={16} className="text-[#0d9488]" />
                      <h3 className="font-bold text-gray-900">{a.title}</h3>
                    </div>
                    <div className="text-xs text-orange-500 font-semibold">{a.dept}</div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${a.status === 'Ongoing' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>{a.status}</span>
                    <span className="text-xs text-gray-400">{a.year}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-2">{a.desc}</p>
                <div className="text-xs text-[#1e3a8a] font-medium">Funded by: {a.funding}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
