import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { GraduationCap } from 'lucide-react'

export const metadata: Metadata = { title: 'Past Principals', description: 'A tribute to the visionary leaders who have served as Principal of GICEAS.' }

const principals = [
  { name: 'Dr. A. Mehta', period: '2020 – Present', title: 'Principal (Current)', note: 'Leading GICEAS into a new era of academic excellence and research.' },
  { name: 'Dr. [Name]', period: '2012 – 2020', title: 'Principal', note: 'Expanded the college\'s research output and industry partnerships.' },
  { name: 'Dr. [Name]', period: '2004 – 2012', title: 'Principal', note: 'Oversaw NAAC accreditation and infrastructure development.' },
  { name: 'Dr. [Name]', period: '1996 – 2004', title: 'Principal', note: 'Introduced postgraduate programmes across science departments.' },
  { name: 'Dr. [Name]', period: '1988 – 1996', title: 'Principal', note: 'Grew the college from its foundational years into a full-fledged institution.' },
  { name: 'Dr. [Name]', period: '1984 – 1988', title: 'Founding Principal', note: 'Established the college under the aegis of Greenfield Seva Trust.' },
]

export default function PastPrincipalsPage() {
  return (
    <>
      <PageHero title="Past Principals" subtitle="Honouring the visionary leaders who dedicated their careers to shaping GICEAS."
        badge="Leadership Legacy" breadcrumbs={[{ label: 'About', href: '/about' }, { label: 'Past Principals' }]} />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1e3a8a] to-orange-300" aria-hidden="true" />
            <div className="space-y-8">
              {principals.map((p, i) => (
                <div key={i} className="relative flex gap-6 pl-16">
                  <div className="absolute left-6 top-3 w-5 h-5 rounded-full bg-white border-4 border-[#1e3a8a] shadow" aria-hidden="true" />
                  <div className="card p-5 flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-8 h-8 rounded-lg bg-[#1e3a8a]/10 flex items-center justify-center"><GraduationCap size={14} className="text-[#1e3a8a]" /></div>
                          <h3 className="font-bold text-gray-900">{p.name}</h3>
                        </div>
                        <div className="text-xs text-orange-500 font-semibold uppercase tracking-wider">{p.title}</div>
                      </div>
                      <span className="text-xs bg-blue-50 text-[#1e3a8a] font-semibold px-3 py-1 rounded-full">{p.period}</span>
                    </div>
                    <p className="text-sm text-gray-500">{p.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
