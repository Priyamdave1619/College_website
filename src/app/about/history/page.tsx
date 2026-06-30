import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = { title: 'History – About GICEAS' }

const milestones = [
  { year: '1984', title: 'Founding of GICEAS', desc: 'Greenfield Institute was established under the Greenfield Seva Trust with the vision of providing quality science education to the youth of Surat.' },
  { year: '1990', title: 'Expansion of Programmes', desc: 'New UG programmes in Microbiology and Chemistry were introduced, broadening the academic scope of the institute.' },
  { year: '1998', title: 'Computer Science Department', desc: 'The Department of Computer Science was formally established, offering B.Sc. (CS) and BCA, aligning GICEAS with the emerging IT revolution.' },
  { year: '2002', title: 'Postgraduate Programmes', desc: 'M.Sc. programmes in Computer Science, Microbiology, and Biotechnology were launched to strengthen postgraduate education.' },
  { year: '2007', title: 'NAAC Accreditation', desc: 'GICEAS received its first NAAC accreditation, a landmark recognition of the institute\'s academic quality and infrastructure standards.' },
  { year: '2012', title: 'Environmental Science Department', desc: 'In response to growing environmental challenges, the Department of Environmental Science was launched.' },
  { year: '2016', title: 'Digital Library Initiative', desc: 'The college launched a fully digital library with access to thousands of journals, e-books, and research databases.' },
  { year: '2020', title: 'Meridian State University Affiliation', desc: 'GICEAS became a constituent college of the newly established Meridian State University, Surat — a significant milestone in its academic journey.' },
  { year: '2023', title: 'NIRF Ranking', desc: 'GICEAS was ranked in the NIRF framework for the first time, establishing its national academic standing.' },
  { year: '2025', title: 'New Research Centre', desc: 'A dedicated interdisciplinary research centre was inaugurated to support faculty and student research across all departments.' },
]

export default function HistoryPage() {
  return (
    <>
      <PageHero title="History" subtitle="The story of GICEAS — from its founding in 1984 to the present day." breadcrumbs={[{ label: 'About', href: '/about' }, { label: 'History' }]} />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gray-600 leading-relaxed mb-12 text-center max-w-2xl mx-auto">
            Greenfield Institute of Computer Education and Applied Sciences has a rich history spanning over four decades of academic excellence, community service, and scientific discovery.
          </p>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1e3a8a] via-orange-400 to-teal-500" />
            <div className="space-y-10">
              {milestones.map(({ year, title, desc }) => (
                <div key={year} className="flex gap-6 group">
                  <div className="relative shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center text-xs font-bold shadow-lg group-hover:bg-orange-500 transition-colors z-10 relative">
                      {year.slice(2)}
                    </div>
                  </div>
                  <div className="pb-2">
                    <div className="text-orange-500 text-xs font-bold uppercase tracking-wider mb-0.5">{year}</div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">{title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
