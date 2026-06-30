import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { Briefcase, TrendingUp, Users, Building2 } from 'lucide-react'

export const metadata: Metadata = { title: 'Placement – Environmental Science', description: 'Placement statistics and recruiter information for Environmental Science students at GICEAS.' }

const recruiters = ['Infosys', 'TCS', 'Wipro', 'HCL Technologies', 'L&T Infotech', 'Zydus Cadila', 'Sun Pharma', 'Torrent Pharma', 'GCRI', 'SGS India', 'Bureau Veritas', 'Intertek']
const stats = [{ v: '85%', l: 'Placement Rate' }, { v: '₹3.5L', l: 'Avg. Package' }, { v: '₹8.5L', l: 'Highest Package' }, { v: '40+', l: 'Recruiters' }]

export default function PlacementDeptPage() {
  return (
    <>
      <PageHero title="Placement – Environmental Science" subtitle="Career outcomes and industry connections for Environmental Science graduates from GICEAS."
        badge="Placement Cell" breadcrumbs={[{ label: 'Placement', href: '/placement' }, { label: 'Environmental Science' }]} />
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {stats.map(s => (
              <div key={s.l} className="card p-4 text-center">
                <div className="text-2xl font-bold text-[#1e3a8a] mb-1">{s.v}</div>
                <div className="text-xs text-gray-500">{s.l}</div>
              </div>
            ))}
          </div>
          <h2 className="font-bold text-[#1e3a8a] text-lg mb-4">Recruiters</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-10">
            {recruiters.map(r => (
              <div key={r} className="card p-3 text-center text-sm font-medium text-gray-700 flex items-center justify-center gap-2">
                <Building2 size={14} className="text-orange-400" />{r}
              </div>
            ))}
          </div>
          <div className="card p-6 bg-gradient-to-br from-[#1e3a8a] to-[#0d9488] text-white">
            <Briefcase size={20} className="mb-3" />
            <h3 className="font-bold text-lg mb-2">Looking to Recruit?</h3>
            <p className="text-white/80 text-sm mb-4">We welcome companies to partner with GICEAS for campus placements. Contact our Placement Cell to schedule campus drives.</p>
            <a href="mailto:placement@greenfield.ac.in" className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-xl font-semibold text-sm transition-colors">Contact Placement Cell</a>
          </div>
        </div>
      </section>
    </>
  )
}
