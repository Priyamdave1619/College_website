import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { Star, ExternalLink } from 'lucide-react'

export const metadata: Metadata = { title: 'GSIRF Ranking', description: 'Gujarat State Institutional Ranking Framework data for GICEAS.' }

export default function GSIRFPage() {
  return (
    <>
      <PageHero title="GSIRF Ranking" subtitle="Gujarat State Institutional Ranking Framework — GICEAS's state-level ranking data and submissions."
        badge="State Rankings" breadcrumbs={[{ label: 'Academic', href: '/academic' }, { label: 'GSIRF' }]} />
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="card p-6 mb-8">
            <Star size={28} className="text-orange-500 mb-4" />
            <h2 className="font-bold text-gray-900 text-lg mb-3">About GSIRF</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">The Gujarat State Institutional Ranking Framework (GSIRF) is a state-level ranking initiative to assess and rank higher education institutions in Gujarat. GICEAS participates annually to benchmark its performance against peer institutions across the state.</p>
            <p className="text-gray-600 text-sm leading-relaxed">Rankings are based on parameters including academic quality, research output, student support, and community engagement.</p>
          </div>
          <div className="space-y-3">
            {['2024', '2023', '2022'].map(y => (
              <div key={y} className="card p-4 flex items-center justify-between">
                <span className="font-medium text-gray-900 text-sm">GSIRF Data {y}</span>
                <a href="#" className="text-xs font-semibold text-[#1e3a8a] hover:text-orange-500">Download</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
