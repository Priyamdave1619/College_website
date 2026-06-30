import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { Download, FileText } from 'lucide-react'

export const metadata: Metadata = { title: 'Previous Question Papers', description: 'Download previous year question papers for all GICEAS programmes.' }

const papers = [
  { program: 'B.Sc. Computer Science', years: ['2023–24', '2022–23', '2021–22'] },
  { program: 'M.Sc. Computer Science', years: ['2023–24', '2022–23', '2021–22'] },
  { program: 'BCA', years: ['2023–24', '2022–23', '2021–22'] },
  { program: 'MCA', years: ['2023–24', '2022–23'] },
  { program: 'B.Sc. Microbiology', years: ['2023–24', '2022–23', '2021–22'] },
  { program: 'B.Sc. Biotechnology', years: ['2023–24', '2022–23', '2021–22'] },
  { program: 'B.Sc. Environmental Science', years: ['2023–24', '2022–23'] },
  { program: 'B.Sc. Chemistry', years: ['2023–24', '2022–23', '2021–22'] },
]

export default function QuestionPapersPage() {
  return (
    <>
      <PageHero title="Previous Question Papers" subtitle="Access and download previous year university examination papers for all programmes at GICEAS."
        badge="Students Zone" breadcrumbs={[{ label: 'Students', href: '/students' }, { label: 'Question Papers' }]} />
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-8 text-sm text-orange-700">
            <strong>Note:</strong> Question papers are sourced from Meridian State University. For the most comprehensive archive, also visit <a href="https://meridianuniversity.ac.in" target="_blank" rel="noreferrer" className="underline font-semibold">meridianuniversity.ac.in</a>.
          </div>
          <div className="space-y-4">
            {papers.map((p) => (
              <div key={p.program} className="card p-5">
                <div className="flex items-center gap-2 mb-3">
                  <FileText size={16} className="text-[#1e3a8a]" />
                  <h3 className="font-semibold text-gray-900">{p.program}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {p.years.map(y => (
                    <a key={y} href="#" className="flex items-center gap-1.5 text-xs bg-blue-50 text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white px-3 py-1.5 rounded-lg font-medium transition-colors">
                      <Download size={12} /> {y}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
