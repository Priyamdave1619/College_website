import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import { FlaskConical, BookOpen, Users, Award, ArrowRight } from 'lucide-react'

export const metadata: Metadata = { title: 'Research' }

const papers = [
  { title: 'Antibiotic Resistance Patterns in Hospital-Acquired Infections in South Gujarat', authors: 'Dr. A. Patel, Dr. M. Shah', journal: 'Journal of Microbiology Research', year: '2024', dept: 'Microbiology' },
  { title: 'Machine Learning Approaches to Water Quality Prediction in Urban Rivers', authors: 'Dr. R. Mehta, Prof. S. Joshi', journal: 'Environmental Science & Technology', year: '2024', dept: 'Environmental Science' },
  { title: 'CRISPR-Based Gene Editing Applications in Agricultural Biotechnology', authors: 'Dr. P. Desai, Dr. N. Trivedi', journal: 'Biotechnology Advances', year: '2023', dept: 'Biotechnology' },
  { title: 'Synthesis and Characterization of Novel Organic Compounds with Antimicrobial Properties', authors: 'Dr. K. Vyas, Dr. H. Parikh', journal: 'Indian Journal of Chemistry', year: '2023', dept: 'Chemistry' },
  { title: 'Deep Learning for Real-Time Traffic Anomaly Detection in Smart Cities', authors: 'Prof. A. Modi, Dr. S. Patel', journal: 'IEEE Transactions on ITS', year: '2024', dept: 'Computer Science' },
]

export default function ResearchPage() {
  return (
    <>
      <PageHero title="Research at GICEAS" subtitle="Faculty and student research contributing to science, technology, and human welfare." breadcrumbs={[{ label: 'Research' }]} />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Highlights */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {[{ icon: FlaskConical, v: '5', l: 'Research Labs' }, { icon: BookOpen, v: '100+', l: 'Papers Published' }, { icon: Users, v: '12', l: 'Research Guides' }, { icon: Award, v: '30+', l: 'Research Scholars' }].map(({ icon: Icon, v, l }) => (
              <div key={l} className="card p-5 text-center">
                <Icon size={22} className="text-orange-500 mx-auto mb-2" />
                <div className="text-3xl font-bold text-[#1e3a8a] mb-1">{v}</div>
                <div className="text-xs text-gray-500">{l}</div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-[#1e3a8a] mb-6">Recent Publications by Faculty</h2>
              <div className="space-y-4">
                {papers.map((p, i) => (
                  <div key={i} className="card p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full font-medium">{p.dept}</span>
                      <span className="text-xs text-gray-400">{p.year}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1 leading-snug">{p.title}</h3>
                    <p className="text-xs text-gray-500 mb-1">{p.authors}</p>
                    <p className="text-xs text-[#1e3a8a] font-medium italic">{p.journal}</p>
                  </div>
                ))}
              </div>
              <Link href="/research/papers" className="inline-flex items-center gap-1 mt-4 text-sm text-[#1e3a8a] font-semibold hover:text-orange-500 transition-colors">
                View All Publications <ArrowRight size={14} />
              </Link>
            </div>

            <div className="space-y-5">
              <div className="card p-6">
                <h3 className="font-bold text-gray-900 mb-3">Research Quick Links</h3>
                {[['Research Facility', '/research/facility'], ['Research Activities', '/research/activities'], ['Research Guides', '/research/guides'], ['Research Scholars', '/research/scholars']].map(([l, h]) => (
                  <Link key={l} href={h} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0 text-sm text-gray-700 hover:text-[#1e3a8a] group">
                    {l} <ArrowRight size={13} className="text-gray-300 group-hover:text-orange-500" />
                  </Link>
                ))}
              </div>
              <div className="rounded-2xl p-6 bg-gradient-to-br from-[#1e3a8a] to-[#0f766e] text-white">
                <h3 className="font-bold mb-2 text-sm">Interested in Research?</h3>
                <p className="text-white/70 text-xs mb-4">GICEAS welcomes PhD scholars and collaborative research proposals from industry and academia.</p>
                <Link href="/contact" className="block text-center bg-white text-[#1e3a8a] hover:bg-orange-50 rounded-xl px-4 py-2.5 text-sm font-bold transition-colors">Contact Research Cell</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
