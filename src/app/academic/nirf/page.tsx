import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { TrendingUp, ExternalLink, Download } from 'lucide-react'

export const metadata: Metadata = { title: 'NIRF Ranking', description: 'National Institutional Ranking Framework (NIRF) data and ranking of GICEAS.' }

export default function NIRFPage() {
  return (
    <>
      <PageHero title="NIRF Ranking" subtitle="National Institutional Ranking Framework — GICEAS's participation and ranking data."
        badge="Rankings" breadcrumbs={[{ label: 'Academic', href: '/academic' }, { label: 'NIRF' }]} />
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="card p-6 mb-8">
            <TrendingUp size={28} className="text-orange-500 mb-4" />
            <h2 className="font-bold text-gray-900 text-lg mb-3">About NIRF</h2>
            <p className="text-gray-600 text-sm leading-relaxed">The National Institutional Ranking Framework (NIRF) was approved by the MHRD (now Ministry of Education) in September 2015. It ranks institutions across India based on Teaching, Learning & Resources, Research & Professional Practice, Graduation Outcomes, Outreach & Inclusivity, and Peer Perception.</p>
          </div>
          <div className="space-y-3 mb-8">
            {['2024', '2023', '2022', '2021'].map(y => (
              <div key={y} className="card p-4 flex items-center justify-between">
                <span className="font-medium text-gray-900 text-sm">NIRF Data {y}</span>
                <a href="#" className="flex items-center gap-1.5 text-xs font-semibold text-[#1e3a8a] hover:text-orange-500">
                  <Download size={13} /> Download
                </a>
              </div>
            ))}
          </div>
          <a href="https://www.nirfindia.org" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 btn-navy text-sm">
            Visit NIRF Portal <ExternalLink size={14} />
          </a>
        </div>
      </section>
    </>
  )
}
