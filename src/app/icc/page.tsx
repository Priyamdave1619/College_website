import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import { ShieldCheck, ArrowRight } from 'lucide-react'

export const metadata: Metadata = { title: 'Internal Complaints Committee (ICC)' }

export default function ICCPage() {
  return (
    <>
      <PageHero title="Internal Complaints Committee" subtitle="GICEAS is committed to a safe, inclusive, and harassment-free campus for all." badge="ICC" breadcrumbs={[{ label: 'ICC' }]} gradient="bg-gradient-to-br from-[#7c3aed] to-[#1e3a8a]" />
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex gap-4">
              <ShieldCheck size={36} className="text-purple-500 shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-[#1e3a8a] mb-2">About ICC</h2>
                <p className="text-gray-600 leading-relaxed text-sm">The Internal Complaints Committee (ICC) at GICEAS is constituted in accordance with the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013. The committee is dedicated to ensuring a safe and respectful environment for all members of the GICEAS community — students, faculty, and staff.</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm">Any form of sexual harassment is strictly prohibited at GICEAS. The ICC provides a confidential, fair, and time-bound redressal mechanism for complaints, ensuring that all parties are treated with dignity and respect throughout the process.</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {['Confidential complaint handling', 'Fair and impartial inquiry process', 'Time-bound redressal (within 90 days)', 'Protection of complainant identity', 'Regular awareness workshops', 'Zero tolerance policy'].map(p => (
                <div key={p} className="flex items-center gap-2 text-sm text-gray-700"><ShieldCheck size={13} className="text-purple-500 shrink-0" /> {p}</div>
              ))}
            </div>
            <div className="bg-purple-50 border border-purple-100 rounded-xl p-4 text-sm text-purple-800">
              <strong>How to file a complaint:</strong> Submit a written complaint addressed to the ICC Chairperson at the college office or via email at info@greenfield.ac.in. All complaints are handled in strict confidence.
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="font-bold text-gray-900 mb-2">ICC Sections</h3>
            {[['About ICC', '/icc'], ['Members / Composition', '/icc/members'], ['Objectives & Visions', '/icc/objectives'], ['Plan of Actions', '/icc/plan-of-actions'], ['Procedure for Filing Complaint', '/icc/procedure'], ['Definition of Sexual Harassment', '/icc/definition'], ['Investigation Procedure', '/icc/investigation'], ['Disciplinary Mechanism', '/icc/disciplinary-mechanism'], ['Action against Frivolous Complaints', '/icc/frivolous-complaints']].map(([l, h]) => (
              <Link key={l} href={h} className="flex items-center justify-between p-3.5 rounded-xl border border-gray-100 hover:border-purple-200 text-sm text-gray-700 hover:text-[#1e3a8a] group transition-all">
                {l} <ArrowRight size={13} className="text-gray-300 group-hover:text-purple-500" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
