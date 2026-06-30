import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { Heart, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Donors & Benefactors',
  description: 'GICEAS acknowledges and thanks its generous donors and benefactors who have supported the growth of the institution.',
}

const donors = [
  { name: 'Greenfield Seva Trust', category: 'Founding Trust', contribution: 'Institutional Founder & Ongoing Support' },
  { name: 'Anonymous Donor', category: 'Infrastructure', contribution: 'Computer Laboratory Equipment (2022)' },
  { name: 'Alumni Collective', category: 'Scholarships', contribution: 'Merit Scholarship Fund — ₹5 Lakh corpus' },
  { name: 'Industry Partner (Confidential)', category: 'Research', contribution: 'Research Lab Modernisation Grant' },
  { name: 'Community Trust, Surat', category: 'Library', contribution: 'Digital Library Resources & E-Books' },
  { name: 'NCC Alumni Group', category: 'Sports', contribution: 'Sports Equipment & Ground Maintenance' },
]

export default function DonorsPage() {
  return (
    <>
      <PageHero title="Donors & Benefactors" subtitle="GICEAS is deeply grateful to all individuals, organisations, and trusts whose generosity has helped shape the institution."
        badge="Gratitude" breadcrumbs={[{ label: 'About', href: '/about' }, { label: 'Donors' }]} />
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <Heart size={40} className="text-orange-400 mx-auto mb-4" />
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">The progress of GICEAS would not have been possible without the vision and generosity of our donors. Their contributions — in the form of funds, equipment, scholarships, and resources — have enriched the lives of thousands of students over four decades.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5 mb-12">
            {donors.map((d) => (
              <div key={d.name} className="card p-5 flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center shrink-0"><Star size={18} className="text-orange-500" /></div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{d.name}</div>
                  <div className="text-[10px] text-orange-500 font-semibold uppercase tracking-wider mb-1">{d.category}</div>
                  <div className="text-sm text-gray-500">{d.contribution}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-[#1e3a8a] to-[#0d9488] p-8 text-white text-center">
            <h3 className="font-bold text-xl mb-3">Contribute to GICEAS's Growth</h3>
            <p className="text-white/80 text-sm max-w-xl mx-auto mb-5">If you wish to support GICEAS through donations, equipment, scholarships, or expertise, please reach out to our administration office.</p>
            <a href="mailto:info@greenfield.ac.in" className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors">Get in Touch</a>
          </div>
        </div>
      </section>
    </>
  )
}
