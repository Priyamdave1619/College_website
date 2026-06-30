import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { Users, Heart, Phone, Mail, CheckCircle } from 'lucide-react'

export const metadata: Metadata = { title: 'Gender Sensitization Cell', description: 'GICEAS Gender Sensitization Cell — promoting equality, safety, and dignity for all students.' }

export default function GenderCellPage() {
  return (
    <>
      <PageHero title="Gender Sensitization Cell" subtitle="Fostering a campus culture of equality, respect, and dignity for every student at GICEAS."
        badge="Student Welfare" breadcrumbs={[{ label: 'Students', href: '/students' }, { label: 'Gender Cell' }]}
        gradient="bg-gradient-to-br from-purple-900 to-[#1e3a8a]" />
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-xl font-bold text-[#1e3a8a] mb-3">About the Cell</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">The Gender Sensitization Cell at GICEAS was established to create awareness about gender issues, promote equality, and ensure a safe, inclusive environment for all students and staff regardless of gender. The cell works in close coordination with the Internal Complaints Committee (ICC).</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#1e3a8a] mb-4">Objectives</h2>
              <div className="space-y-2">
                {['Promote gender equality and inclusivity on campus','Conduct awareness programmes, workshops, and seminars','Address gender-based discrimination and harassment','Support victims of gender-based issues with counselling','Sensitize students and staff through activities and campaigns','Collaborate with external NGOs and women\'s welfare organisations'].map(o => (
                  <div key={o} className="flex items-start gap-2 text-sm text-gray-700"><CheckCircle size={14} className="text-purple-500 shrink-0 mt-0.5" />{o}</div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#1e3a8a] mb-4">Recent Activities</h2>
              <div className="space-y-3">
                {[
                  { title: 'Women\'s Day Celebration 2025', date: 'March 2025', desc: 'Panel discussion on women in STEM, felicitation of outstanding women achievers.' },
                  { title: 'Gender Sensitivity Workshop', date: 'January 2025', desc: 'Interactive session with students on understanding gender roles and breaking stereotypes.' },
                  { title: 'Self-Defence Training', date: 'September 2024', desc: 'Three-day self-defence workshop conducted in collaboration with city police.' },
                  { title: 'Awareness Campaign – Say No to Discrimination', date: 'August 2024', desc: 'Campus-wide poster campaign and pledge drive.' },
                ].map(a => (
                  <div key={a.title} className="card p-4 flex gap-3">
                    <div className="w-1 rounded-full bg-purple-400 shrink-0" />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-gray-900 text-sm">{a.title}</span>
                        <span className="text-[10px] text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{a.date}</span>
                      </div>
                      <p className="text-xs text-gray-500">{a.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-5">
            <div className="card p-5">
              <Heart size={20} className="text-purple-500 mb-3" />
              <h4 className="font-bold text-gray-900 mb-3 text-sm">Cell Members</h4>
              <div className="space-y-3">
                {['Dr. A. Mehta – Chairperson','Dr. [Name] – Coordinator','[Name] – Faculty Representative','[Name] – Student Representative (F)','[Name] – Student Representative (M)'].map((m, i) => (
                  <div key={i} className="text-xs text-gray-600 border-b border-gray-50 pb-2 last:border-0">{m}</div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-purple-700 to-[#1e3a8a] p-5 text-white">
              <h4 className="font-bold text-sm mb-2">Report a Concern</h4>
              <p className="text-white/70 text-xs mb-3">All complaints are treated with strict confidentiality.</p>
              <a href="mailto:gendercell@greenfield.ac.in" className="flex items-center gap-2 text-sm font-semibold">
                <Mail size={14} /> gendercell@greenfield.ac.in
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
