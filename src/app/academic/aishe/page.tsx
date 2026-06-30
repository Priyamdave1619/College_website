import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { BarChart2, FileText, ExternalLink } from 'lucide-react'

export const metadata: Metadata = { title: 'AISHE', description: 'All India Survey on Higher Education (AISHE) data submitted by GICEAS.' }

export default function AISHEPage() {
  return (
    <>
      <PageHero title="AISHE" subtitle="All India Survey on Higher Education — annual data submitted by GICEAS to the Ministry of Education."
        badge="Data Reporting" breadcrumbs={[{ label: 'Academic', href: '/academic' }, { label: 'AISHE' }]} />
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="card p-6 mb-8">
            <BarChart2 size={28} className="text-[#1e3a8a] mb-4" />
            <h2 className="font-bold text-gray-900 text-lg mb-3">About AISHE</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">The All India Survey on Higher Education (AISHE) is conducted by the Ministry of Education, Government of India. GICEAS submits annual data covering student enrollment, faculty strength, infrastructure, and academic programmes.</p>
            <p className="text-gray-600 text-sm leading-relaxed">The AISHE data helps the Government formulate policies for higher education and allocate resources to institutions.</p>
          </div>
          <div className="space-y-3">
            {['2023–24', '2022–23', '2021–22', '2020–21'].map(y => (
              <div key={y} className="card p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText size={18} className="text-[#1e3a8a]" />
                  <span className="font-medium text-gray-900 text-sm">AISHE Data {y}</span>
                </div>
                <a href="https://aishe.gov.in" target="_blank" rel="noreferrer"
                  className="text-xs font-semibold text-[#1e3a8a] hover:text-orange-500 flex items-center gap-1">
                  View <ExternalLink size={11} />
                </a>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href="https://aishe.gov.in" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 btn-navy text-sm">
              Visit AISHE Portal <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
