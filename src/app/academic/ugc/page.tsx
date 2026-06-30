import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { Shield, ExternalLink, CheckCircle } from 'lucide-react'

export const metadata: Metadata = { title: 'UGC Notification', description: 'UGC recognition and notifications for GICEAS — Section 2(f) and 12(B) status.' }

export default function UGCPage() {
  return (
    <>
      <PageHero title="UGC Notification" subtitle="University Grants Commission recognition details for Greenfield Institute."
        badge="UGC" breadcrumbs={[{ label: 'Academic', href: '/academic' }, { label: 'UGC' }]} />
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex items-center gap-4 card p-6 mb-8">
            <Shield size={36} className="text-[#1e3a8a] shrink-0" />
            <div>
              <h2 className="font-bold text-gray-900 text-lg">UGC Recognition Status</h2>
              <p className="text-sm text-gray-500">Recognised under Section 2(f) and 12(B) of the UGC Act, 1956</p>
            </div>
          </div>
          <div className="space-y-4 mb-8">
            {[
              { title: 'Section 2(f) Status', desc: 'GICEAS is recognised under Section 2(f) of the UGC Act, affirming its status as a legitimate higher education institution.' },
              { title: 'Section 12(B) Status', desc: 'Recognition under Section 12(B) makes GICEAS eligible for grants, scholarships, and central funding from UGC.' },
              { title: 'Eligible for Central Schemes', desc: 'Students at GICEAS are eligible for UGC scholarships, fellowships, and government-sponsored programmes.' },
            ].map(i => (
              <div key={i.title} className="card p-5 flex gap-4">
                <CheckCircle size={20} className="text-green-500 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-gray-900 text-sm mb-1">{i.title}</div>
                  <p className="text-sm text-gray-500">{i.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <a href="https://ugc.ac.in" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 btn-navy text-sm">
            Visit UGC Website <ExternalLink size={14} />
          </a>
        </div>
      </section>
    </>
  )
}
