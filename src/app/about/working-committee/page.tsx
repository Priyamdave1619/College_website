import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = { title: 'Working Committee' }

const members = [
  { name: 'Shri Ashish Vakil', role: 'Chairman', dept: 'Governing Body' },
  { name: 'Dr. A. Mehta', role: 'Principal', dept: 'Administration' },
  { name: 'Shri [Name]', role: 'Secretary', dept: 'Governing Body' },
  { name: 'Shri [Name]', role: 'Treasurer', dept: 'Governing Body' },
  { name: 'Dr. [Name]', role: 'Head of Department', dept: 'Computer Science' },
  { name: 'Dr. [Name]', role: 'Head of Department', dept: 'Microbiology' },
  { name: 'Dr. [Name]', role: 'Head of Department', dept: 'Biotechnology' },
  { name: 'Dr. [Name]', role: 'Head of Department', dept: 'Environmental Science' },
  { name: 'Dr. [Name]', role: 'Head of Department', dept: 'Chemistry' },
  { name: 'Prof. [Name]', role: 'Librarian', dept: 'Library' },
]

export default function WorkingCommitteePage() {
  return (
    <>
      <PageHero title="Working Committee" subtitle="The governing body and department heads who shape the direction of GICEAS." breadcrumbs={[{ label: 'About', href: '/about' }, { label: 'Working Committee' }]} />
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {members.map((m, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:shadow-md transition-shadow text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1e3a8a] to-[#0f766e] text-white font-bold text-xl flex items-center justify-center mx-auto mb-3">
                  {m.name.split(' ').filter(w => w.length > 1).slice(0, 2).map(w => w[0]).join('')}
                </div>
                <div className="font-bold text-gray-900 text-sm">{m.name}</div>
                <div className="text-orange-500 text-xs font-semibold mt-0.5">{m.role}</div>
                <div className="text-gray-400 text-xs mt-0.5">{m.dept}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
