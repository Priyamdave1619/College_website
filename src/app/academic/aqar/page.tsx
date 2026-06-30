import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { Download, FileText } from 'lucide-react'

export const metadata: Metadata = { title: 'AQAR Report', description: 'Annual Quality Assurance Reports (AQAR) submitted by GICEAS to NAAC.' }

const reports = [
  { year: '2023–24', status: 'Submitted', link: '#' },
  { year: '2022–23', status: 'Submitted', link: '#' },
  { year: '2021–22', status: 'Submitted', link: '#' },
  { year: '2020–21', status: 'Submitted', link: '#' },
  { year: '2019–20', status: 'Submitted', link: '#' },
]

export default function AQARPage() {
  return (
    <>
      <PageHero title="AQAR Report" subtitle="Annual Quality Assurance Reports submitted to the National Assessment and Accreditation Council (NAAC)."
        badge="IQAC" breadcrumbs={[{ label: 'Academic', href: '/academic' }, { label: 'AQAR' }]} />
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-gray-600 text-sm leading-relaxed mb-8">The Annual Quality Assurance Report (AQAR) is submitted by the IQAC of GICEAS to NAAC every year. It documents the quality initiatives undertaken and assesses institutional performance against NAAC parameters.</p>
          <div className="space-y-3">
            {reports.map((r) => (
              <div key={r.year} className="card p-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center"><FileText size={18} className="text-[#1e3a8a]" /></div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">AQAR {r.year}</div>
                    <div className="text-xs text-green-600 font-medium">{r.status}</div>
                  </div>
                </div>
                <a href={r.link} className="flex items-center gap-1.5 text-xs font-semibold text-[#1e3a8a] hover:text-orange-500 transition-colors">
                  <Download size={14} /> Download PDF
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
