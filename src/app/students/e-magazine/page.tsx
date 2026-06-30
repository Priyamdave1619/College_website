import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { BookOpen, Download, ExternalLink } from 'lucide-react'

export const metadata: Metadata = { title: 'E-Magazine', description: 'GICEAS student e-magazine — annual publication featuring student articles, research, and achievements.' }

const issues = [
  { title: 'Srishti 2024', year: '2023–24', desc: 'Annual student magazine featuring research articles, poetry, interviews, and campus life.' },
  { title: 'Srishti 2023', year: '2022–23', desc: 'Special edition highlighting GICEAS\'s achievements and student milestones.' },
  { title: 'Srishti 2022', year: '2021–22', desc: 'A tribute to resilience — stories from students during the post-pandemic recovery.' },
]

export default function EMagazinePage() {
  return (
    <>
      <PageHero title="E-Magazine" subtitle="GICEAS's annual student magazine — a platform for creative writing, research insights, and campus chronicles."
        badge="Students Zone" breadcrumbs={[{ label: 'Students', href: '/students' }, { label: 'E-Magazine' }]} />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {issues.map((issue) => (
              <div key={issue.title} className="card overflow-hidden">
                <div className="bg-gradient-to-br from-[#1e3a8a] to-[#0d9488] h-40 flex items-center justify-center">
                  <BookOpen size={48} className="text-white/60" />
                </div>
                <div className="p-5">
                  <div className="text-[10px] text-orange-500 font-bold uppercase tracking-wider mb-1">{issue.year}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{issue.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4">{issue.desc}</p>
                  <a href="#" className="flex items-center gap-1.5 text-xs font-semibold text-[#1e3a8a] hover:text-orange-500 transition-colors">
                    <Download size={13} /> Read / Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
