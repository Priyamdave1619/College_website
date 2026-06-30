import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { ExternalLink, AlertCircle } from 'lucide-react'

export const metadata: Metadata = { title: 'Results 2024-25 & 2025-26' }

export default function ResultPage() {
  return (
    <>
      <PageHero title="Examination Results" subtitle="Results for 2024-25 and 2025-26 academic years via Meridian State University." breadcrumbs={[{ label: 'Results' }]} />
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex items-start gap-3 bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8 text-sm text-blue-800">
            <AlertCircle size={16} className="shrink-0 mt-0.5 text-blue-500" />
            Results are hosted on the official Meridian State University portal. Click the links below to access your results.
          </div>
          <div className="space-y-4">
            {[
              { label: 'Results 2025-26 (All Programmes)', href: 'https://www.greenfield.ac.in/pages/result-2024-25-and-2025-26/', sem: 'Sem I–VI' },
              { label: 'Results 2024-25 (All Programmes)', href: 'https://www.greenfield.ac.in/pages/result-2024-25-and-2025-26/', sem: 'Sem I–VI' },
            ].map(r => (
              <a key={r.label} href={r.href} target="_blank" rel="noreferrer"
                className="flex items-center justify-between p-5 rounded-2xl border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all group">
                <div>
                  <div className="font-bold text-gray-900 group-hover:text-[#1e3a8a] transition-colors">{r.label}</div>
                  <div className="text-sm text-gray-500">{r.sem} · All Departments</div>
                </div>
                <ExternalLink size={18} className="text-gray-300 group-hover:text-orange-500 transition-colors" />
              </a>
            ))}
          </div>
          <p className="text-xs text-gray-400 text-center mt-6">For queries, contact the college exam cell at 99999 00002 or info@greenfield.ac.in</p>
        </div>
      </section>
    </>
  )
}
