import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = { title: 'Fees Structure' }

const fees = [
  { program: 'B.Sc. Computer Science', tuition: '₹12,000', other: '₹3,500', total: '₹15,500' },
  { program: 'M.Sc. Computer Science', tuition: '₹18,000', other: '₹4,000', total: '₹22,000' },
  { program: 'BCA', tuition: '₹14,000', other: '₹3,500', total: '₹17,500' },
  { program: 'MCA', tuition: '₹20,000', other: '₹4,500', total: '₹24,500' },
  { program: 'B.Sc. Microbiology', tuition: '₹10,000', other: '₹3,500', total: '₹13,500' },
  { program: 'M.Sc. Microbiology', tuition: '₹15,000', other: '₹4,000', total: '₹19,000' },
  { program: 'B.Sc. Biotechnology', tuition: '₹11,000', other: '₹3,500', total: '₹14,500' },
  { program: 'M.Sc. Biotechnology', tuition: '₹16,000', other: '₹4,000', total: '₹20,000' },
  { program: 'B.Sc. Environmental Science', tuition: '₹9,000', other: '₹3,000', total: '₹12,000' },
  { program: 'M.Sc. Environmental Science', tuition: '₹13,000', other: '₹3,500', total: '₹16,500' },
  { program: 'B.Sc. Chemistry', tuition: '₹9,000', other: '₹3,000', total: '₹12,000' },
  { program: 'M.Sc. Chemistry', tuition: '₹13,000', other: '₹3,500', total: '₹16,500' },
]

export default function FeesPage() {
  return (
    <>
      <PageHero title="Fees Structure" subtitle="Annual fee details for 2026-27 academic year. Fees subject to revision by Meridian State University." breadcrumbs={[{ label: 'Academic', href: '/academic' }, { label: 'Fees Structure' }]} />
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-8 text-sm text-orange-700">
            <strong>Note:</strong> Fees mentioned are indicative and subject to confirmation by Meridian State University for 2026-27. Scholarship and freeship benefits are available for eligible students.
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1e3a8a] text-white">
                  <th className="text-left px-5 py-3.5 font-semibold">Programme</th>
                  <th className="text-right px-5 py-3.5 font-semibold">Tuition Fee</th>
                  <th className="text-right px-5 py-3.5 font-semibold">Other Fees</th>
                  <th className="text-right px-5 py-3.5 font-semibold">Total/Year</th>
                </tr>
              </thead>
              <tbody>
                {fees.map((f, i) => (
                  <tr key={f.program} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-5 py-3 font-medium text-gray-900">{f.program}</td>
                    <td className="px-5 py-3 text-right text-gray-600">{f.tuition}</td>
                    <td className="px-5 py-3 text-right text-gray-600">{f.other}</td>
                    <td className="px-5 py-3 text-right font-bold text-[#1e3a8a]">{f.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/students/scholarship" className="btn-outline text-sm">Scholarship Information</a>
            <a href="https://fees.greenfield.ac.in" target="_blank" rel="noreferrer" className="btn-primary text-sm">Pay Fees Online</a>
          </div>
        </div>
      </section>
    </>
  )
}
