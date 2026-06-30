import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { BookOpen, Download, ExternalLink } from 'lucide-react'

export const metadata: Metadata = { title: 'SU Syllabus', description: 'Download the official Meridian State University syllabus for all programmes offered at GICEAS.' }

const syllabi = [
  { program: 'B.Sc. Computer Science', level: 'UG', year: '2024–25', link: 'https://meridianuniversity.ac.in' },
  { program: 'M.Sc. Computer Science', level: 'PG', year: '2024–25', link: 'https://meridianuniversity.ac.in' },
  { program: 'BCA', level: 'UG', year: '2024–25', link: 'https://meridianuniversity.ac.in' },
  { program: 'MCA', level: 'PG', year: '2024–25', link: 'https://meridianuniversity.ac.in' },
  { program: 'B.Sc. Microbiology', level: 'UG', year: '2024–25', link: 'https://meridianuniversity.ac.in' },
  { program: 'M.Sc. Microbiology', level: 'PG', year: '2024–25', link: 'https://meridianuniversity.ac.in' },
  { program: 'B.Sc. Biotechnology', level: 'UG', year: '2024–25', link: 'https://meridianuniversity.ac.in' },
  { program: 'M.Sc. Biotechnology', level: 'PG', year: '2024–25', link: 'https://meridianuniversity.ac.in' },
  { program: 'B.Sc. Environmental Science', level: 'UG', year: '2024–25', link: 'https://meridianuniversity.ac.in' },
  { program: 'M.Sc. Environmental Science', level: 'PG', year: '2024–25', link: 'https://meridianuniversity.ac.in' },
  { program: 'B.Sc. Chemistry', level: 'UG', year: '2024–25', link: 'https://meridianuniversity.ac.in' },
  { program: 'M.Sc. Chemistry', level: 'PG', year: '2024–25', link: 'https://meridianuniversity.ac.in' },
]

export default function SyllabusPage() {
  return (
    <>
      <PageHero title="SU Syllabus" subtitle="Official Meridian State University syllabi for all undergraduate and postgraduate programmes offered at GICEAS."
        badge="Academic" breadcrumbs={[{ label: 'Academic', href: '/academic' }, { label: 'Syllabus' }]} />
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 mb-10 flex gap-3">
            <BookOpen size={20} className="text-blue-600 shrink-0 mt-0.5" />
            <p className="text-sm text-blue-700">Syllabi are prescribed by Meridian State University, Surat. For the latest and most updated versions, please visit the <a href="https://meridianuniversity.ac.in" target="_blank" rel="noreferrer" className="underline font-semibold">Meridian State University website <ExternalLink size={11} className="inline" /></a>.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {syllabi.map((s) => (
              <div key={s.program} className="card p-5 flex items-center justify-between gap-4">
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{s.program}</div>
                  <div className="flex gap-2 mt-1">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${s.level === 'UG' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'}`}>{s.level}</span>
                    <span className="text-[10px] text-gray-400">{s.year}</span>
                  </div>
                </div>
                <a href={s.link} target="_blank" rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold text-[#1e3a8a] hover:text-orange-500 transition-colors shrink-0">
                  <Download size={14} /> Download
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
