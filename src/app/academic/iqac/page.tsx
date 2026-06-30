import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { Users, Target, CheckCircle } from 'lucide-react'

export const metadata: Metadata = { title: 'IQAC Committee', description: 'Internal Quality Assurance Cell (IQAC) of GICEAS — members, objectives and functions.' }

const members = [
  { name: 'Dr. A. Mehta', role: 'Chairperson', designation: 'Principal, GICEAS' },
  { name: 'Dr. [Name]', role: 'Coordinator', designation: 'Senior Faculty' },
  { name: '[Name]', role: 'Administrative Representative', designation: 'Office Superintendent' },
  { name: 'Dr. [Name]', role: 'Faculty Member', designation: 'Department of Computer Science' },
  { name: 'Dr. [Name]', role: 'Faculty Member', designation: 'Department of Microbiology' },
  { name: 'Dr. [Name]', role: 'Faculty Member', designation: 'Department of Biotechnology' },
  { name: '[Name]', role: 'Alumni Representative', designation: 'GICEAS Alumni' },
  { name: '[Name]', role: 'Industry Representative', designation: 'Industry Expert' },
  { name: '[Name]', role: 'Student Representative', designation: 'Student Council' },
]

export default function IQACPage() {
  return (
    <>
      <PageHero title="IQAC Committee" subtitle="The Internal Quality Assurance Cell ensures continuous improvement in all academic and administrative processes at GICEAS."
        badge="Quality Assurance" breadcrumbs={[{ label: 'Academic', href: '/academic' }, { label: 'IQAC' }]} />
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-xl font-bold text-[#1e3a8a] mb-4">About IQAC</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">The Internal Quality Assurance Cell (IQAC) was established at GICEAS as per the guidelines of NAAC. It functions as a quality check mechanism to ensure that quality enhancement is internalized in the functioning of the institution.</p>
              <p className="text-gray-600 text-sm leading-relaxed">The IQAC prepares the Annual Quality Assurance Report (AQAR) and coordinates quality-related activities including seminars, workshops, feedback systems, and performance appraisals.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#1e3a8a] mb-4">IQAC Members</h2>
              <div className="space-y-3">
                {members.map((m, i) => (
                  <div key={i} className="card p-4 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#1e3a8a]/10 flex items-center justify-center shrink-0">
                      <Users size={16} className="text-[#1e3a8a]" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{m.name}</div>
                      <div className="text-xs text-orange-500 font-semibold">{m.role}</div>
                      <div className="text-xs text-gray-400">{m.designation}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-5">
            <div className="card p-5">
              <Target size={20} className="text-orange-500 mb-3" />
              <h3 className="font-bold text-gray-900 mb-3 text-sm">Objectives</h3>
              <div className="space-y-2">
                {['Channelize efforts towards academic excellence','Promote research and consultancy','Ensure academic and administrative audit','Develop quality benchmarks','Facilitate learner-centric education','Promote use of ICT'].map(o => (
                  <div key={o} className="flex items-start gap-2 text-xs text-gray-600"><CheckCircle size={12} className="text-green-500 shrink-0 mt-0.5" />{o}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
