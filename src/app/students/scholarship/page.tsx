import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { Award, CheckCircle, Phone, Mail, ExternalLink } from 'lucide-react'

export const metadata: Metadata = { title: 'Scholarship & Freeship', description: 'Scholarship and freeship opportunities available to GICEAS students.' }

const scholarships = [
  { name: 'Post-Matric Scholarship (SC/ST)', provider: 'Government of Gujarat', eligibility: 'SC/ST students with family income below ₹2.5 lakh', coverage: 'Full fees + maintenance allowance', link: 'https://scholarships.gov.in' },
  { name: 'EBC Scholarship', provider: 'Government of Gujarat', eligibility: 'Economically Backward Class students', coverage: 'Partial tuition fee waiver', link: 'https://scholarships.gov.in' },
  { name: 'Central Sector Scholarship', provider: 'Ministry of Education (UGC)', eligibility: 'Top 20 percentile in Class 12, family income < ₹8 lakh', coverage: '₹10,000–₹20,000 per year', link: 'https://scholarships.gov.in' },
  { name: 'INSPIRE Scholarship', provider: 'DST, Government of India', eligibility: 'Top 1% in Class 12 pursuing Natural Science', coverage: '₹80,000 per year', link: 'https://online-inspire.gov.in' },
  { name: 'Meridian State University Merit Award', provider: 'Meridian State University', eligibility: 'University rank holders', coverage: 'Certificate + cash prize', link: 'https://meridianuniversity.ac.in' },
  { name: 'GICEAS Internal Merit Scholarship', provider: 'GICEAS / Greenfield Seva Trust', eligibility: 'Top performers in GICEAS (first division, 75%+)', coverage: 'Partial fee waiver', link: '/contact' },
]

export default function ScholarshipPage() {
  return (
    <>
      <PageHero title="Scholarship & Freeship" subtitle="Financial aid, scholarships, and freeship schemes available to GICEAS students from government and institutional sources."
        badge="Students Zone" breadcrumbs={[{ label: 'Students', href: '/students' }, { label: 'Scholarship' }]} />
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-gray-600 text-sm leading-relaxed mb-10 max-w-2xl">GICEAS is committed to ensuring that financial constraints do not come in the way of a student's education. Below are the major scholarship and freeship schemes available to eligible students.</p>
          <div className="space-y-4 mb-12">
            {scholarships.map((s) => (
              <div key={s.name} className="card p-5">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="font-bold text-gray-900">{s.name}</h3>
                    <div className="text-xs text-orange-500 font-semibold mt-0.5">{s.provider}</div>
                  </div>
                  <a href={s.link} target={s.link.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                    className="text-xs font-semibold text-[#1e3a8a] hover:text-orange-500 flex items-center gap-1 shrink-0">
                    Apply / Info {s.link.startsWith('http') && <ExternalLink size={11} />}
                  </a>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Eligibility</div>
                    <div className="text-xs text-gray-700">{s.eligibility}</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3">
                    <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Coverage</div>
                    <div className="text-xs text-green-700 font-semibold">{s.coverage}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="card p-6 bg-blue-50 border-blue-200">
            <h3 className="font-bold text-[#1e3a8a] mb-3">Need Help Applying?</h3>
            <p className="text-sm text-gray-600 mb-4">The GICEAS administration office assists students with scholarship applications, documentation, and follow-ups. Contact us during office hours.</p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:9999900001" className="flex items-center gap-2 text-sm text-[#1e3a8a] font-semibold"><Phone size={15} /> 99999 00001</a>
              <a href="mailto:info@greenfield.ac.in" className="flex items-center gap-2 text-sm text-[#1e3a8a] font-semibold"><Mail size={15} /> info@greenfield.ac.in</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
