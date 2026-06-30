import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { Download, FileText } from 'lucide-react'

export const metadata: Metadata = { title: 'Student Forms & Downloads', description: 'Download official forms and documents for GICEAS students.' }

const formGroups = [
  { category: 'Admission & Enrolment', forms: [
    { name: 'Admission Form 2026–27', type: 'PDF' },
    { name: 'Transfer Certificate Application', type: 'PDF' },
    { name: 'Migration Certificate Request', type: 'PDF' },
    { name: 'Bonafide Certificate Request', type: 'PDF' },
  ]},
  { category: 'Examination', forms: [
    { name: 'Exam Form (Regular)', type: 'PDF' },
    { name: 'Exam Form (Ex-Student)', type: 'PDF' },
    { name: 'Re-evaluation / Re-checking Request', type: 'PDF' },
    { name: 'Marksheet Correction Request', type: 'PDF' },
  ]},
  { category: 'Scholarship & Financial Aid', forms: [
    { name: 'Scholarship Application Form', type: 'PDF' },
    { name: 'EBC / Freeship Form', type: 'PDF' },
    { name: 'Income Certificate Declaration', type: 'PDF' },
  ]},
  { category: 'Library', forms: [
    { name: 'Library Membership Form', type: 'PDF' },
    { name: 'Book Issue / Return Slip', type: 'PDF' },
    { name: 'Library No-Dues Certificate Request', type: 'PDF' },
  ]},
  { category: 'Miscellaneous', forms: [
    { name: 'Leave Application', type: 'PDF' },
    { name: 'ID Card Reissue Request', type: 'PDF' },
    { name: 'Hostel Application Form', type: 'PDF' },
    { name: 'NSS Enrolment Form', type: 'PDF' },
    { name: 'NCC Enrolment Form', type: 'PDF' },
  ]},
]

export default function FormsPage() {
  return (
    <>
      <PageHero title="Student Forms & Downloads" subtitle="Download official forms, applications, and documents needed for academic and administrative processes."
        badge="Students Zone" breadcrumbs={[{ label: 'Students', href: '/students' }, { label: 'Forms' }]} />
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 space-y-8">
          {formGroups.map(g => (
            <div key={g.category}>
              <h2 className="font-bold text-[#1e3a8a] text-sm uppercase tracking-wider mb-3">{g.category}</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {g.forms.map(f => (
                  <div key={f.name} className="card p-4 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <FileText size={16} className="text-[#1e3a8a] shrink-0" />
                      <span className="text-sm text-gray-800">{f.name}</span>
                    </div>
                    <a href="#" className="flex items-center gap-1.5 text-xs font-semibold text-orange-500 hover:text-orange-600 shrink-0">
                      <Download size={13} /> {f.type}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
