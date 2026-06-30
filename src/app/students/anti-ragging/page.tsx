import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { Shield, Phone, AlertTriangle, CheckCircle } from 'lucide-react'

export const metadata: Metadata = { title: 'Anti-Ragging Committee', description: 'GICEAS Anti-Ragging Committee — zero tolerance policy, members, and complaint process.' }

export default function AntiRaggingPage() {
  return (
    <>
      <PageHero title="Anti-Ragging Committee" subtitle="GICEAS maintains a strict zero-tolerance policy against ragging. Any incident must be reported immediately."
        badge="Student Safety" breadcrumbs={[{ label: 'Students', href: '/students' }, { label: 'Anti-Ragging' }]}
        gradient="bg-gradient-to-br from-red-900 to-[#1e3a8a]" />
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3"><AlertTriangle size={24} className="text-red-600" /><h2 className="font-bold text-red-800 text-lg">Zero Tolerance Policy</h2></div>
              <p className="text-red-700 text-sm leading-relaxed">Ragging in any form — physical, verbal, psychological, or online — is strictly prohibited at GICEAS. Violators will face immediate suspension, expulsion, and criminal proceedings as per UGC regulations and Indian Penal Code.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#1e3a8a] mb-4">What Constitutes Ragging?</h2>
              <div className="space-y-2">
                {['Any act causing annoyance, harm, or psychological trauma to a new student','Forcing students to perform undignified acts','Verbal abuse, threats, or humiliation','Teasing or bullying on the basis of identity, appearance, or background','Cyber ragging or online harassment','Forcing students to consume substances'].map(r => (
                  <div key={r} className="flex items-start gap-2 text-sm text-gray-700"><AlertTriangle size={13} className="text-red-400 shrink-0 mt-0.5" />{r}</div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#1e3a8a] mb-4">How to Report</h2>
              <div className="space-y-3">
                {[
                  { step: '1', title: 'Contact Anti-Ragging Helpline', desc: 'Call UGC Helpline: 1800-180-5522 (Toll Free, 24×7)' },
                  { step: '2', title: 'Report to GICEAS Committee', desc: 'Reach the Anti-Ragging Committee through the Principal\'s office or any committee member.' },
                  { step: '3', title: 'File Online Complaint', desc: 'Use the UGC Anti-Ragging portal at antiragging.in to file a formal complaint.' },
                ].map(s => (
                  <div key={s.step} className="card p-4 flex gap-4">
                    <div className="w-8 h-8 rounded-lg bg-[#1e3a8a] text-white font-bold text-sm flex items-center justify-center shrink-0">{s.step}</div>
                    <div><div className="font-semibold text-gray-900 text-sm mb-0.5">{s.title}</div><p className="text-xs text-gray-500">{s.desc}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-5">
            <div className="rounded-2xl bg-red-600 p-5 text-white">
              <Phone size={20} className="mb-3" />
              <h4 className="font-bold mb-2">Emergency Helpline</h4>
              <a href="tel:18001805522" className="text-2xl font-bold">1800-180-5522</a>
              <p className="text-white/70 text-xs mt-1">UGC Toll-Free · 24×7</p>
            </div>
            <div className="card p-5">
              <h4 className="font-bold text-gray-900 mb-3 text-sm">Committee Members</h4>
              <div className="space-y-3">
                {[
                  { name: 'Dr. A. Mehta', role: 'Chairperson', contact: '99999 00004' },
                  { name: 'Dr. [Name]', role: 'Faculty Coordinator', contact: 'info@greenfield.ac.in' },
                  { name: '[Name]', role: 'Student Representative', contact: '' },
                  { name: '[Name]', role: 'Non-Teaching Staff Rep.', contact: '' },
                ].map((m, i) => (
                  <div key={i} className="border-b border-gray-50 pb-2 last:border-0">
                    <div className="font-semibold text-gray-900 text-xs">{m.name}</div>
                    <div className="text-[10px] text-orange-500">{m.role}</div>
                    {m.contact && <div className="text-[10px] text-gray-400">{m.contact}</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
