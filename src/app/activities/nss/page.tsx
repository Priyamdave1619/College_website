import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { Users, Heart, Calendar, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = { title: 'NSS – National Service Scheme', description: 'GICEAS NSS unit — community service, social awareness, and youth empowerment.' }

const activities = [
  { title: 'Blood Donation Drive', date: 'October 2024', desc: 'Annual camp in collaboration with Civil Hospital Surat. 85+ units collected.' },
  { title: 'Tree Plantation Drive', date: 'August 2024', desc: '200+ saplings planted across Sample Nagar campus and surrounding neighbourhood.' },
  { title: 'Swachh Bharat Campaign', date: 'October 2024', desc: 'Cleanliness drive at Dumas Beach and surrounding public spaces.' },
  { title: 'Voter Awareness Programme', date: 'November 2024', desc: 'Sensitising students and community about their constitutional right to vote.' },
  { title: 'Digital Literacy Camp', date: 'January 2025', desc: 'Teaching basic computer skills to underprivileged community members.' },
  { title: 'Health Awareness Camp', date: 'February 2025', desc: 'Free health check-up and awareness drive in collaboration with health NGOs.' },
]

export default function NSSPage() {
  return (
    <>
      <PageHero title="National Service Scheme" subtitle="Serving the community, shaping lives — GICEAS NSS unit bridges the campus with society."
        badge="NSS Unit" breadcrumbs={[{ label: 'Activities', href: '/activities' }, { label: 'NSS' }]}
        gradient="bg-gradient-to-br from-green-800 to-[#1e3a8a]" />
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-xl font-bold text-[#1e3a8a] mb-3">NSS at GICEAS</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">The NSS unit at GICEAS was established under the Ministry of Youth Affairs & Sports. Our volunteers participate in social service, environmental conservation, health awareness, and community development throughout the year.</p>
              <p className="text-gray-600 text-sm leading-relaxed">NSS motto: <strong className="text-[#1e3a8a]">"Not Me, But You"</strong></p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[{ v: '120+', l: 'Volunteers' }, { v: '50+', l: 'Activities/Year' }, { v: '2000+', l: 'Community Hours' }].map(s => (
                <div key={s.l} className="card p-4 text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">{s.v}</div>
                  <div className="text-xs text-gray-500">{s.l}</div>
                </div>
              ))}
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2"><Calendar size={16} className="text-green-500" />Recent Activities</h3>
              <div className="space-y-3">
                {activities.map(a => (
                  <div key={a.title} className="card p-4 flex gap-3">
                    <div className="w-1 rounded-full bg-green-400 shrink-0" />
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
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
              <Users size={18} className="text-green-500 mb-3" />
              <h4 className="font-bold text-gray-900 text-sm mb-3">NSS Officers</h4>
              {[{ name: 'Dr. [Name]', dept: 'Computer Science' }, { name: 'Dr. [Name]', dept: 'Microbiology' }].map((o, i) => (
                <div key={i} className="mb-3 pb-3 border-b border-gray-50 last:border-0">
                  <div className="font-semibold text-gray-900 text-xs">{o.name}</div>
                  <div className="text-[10px] text-gray-400">Programme Officer · {o.dept}</div>
                  <a href="mailto:nss@greenfield.ac.in" className="text-[10px] text-green-600">nss@greenfield.ac.in</a>
                </div>
              ))}
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-green-600 to-[#1e3a8a] p-5 text-white">
              <Heart size={18} className="mb-2" />
              <h4 className="font-bold text-sm mb-2">Join NSS</h4>
              <p className="text-white/75 text-xs mb-3">Enrol during July–August each academic year. Open to all students.</p>
              <Link href="/students/forms" className="text-xs font-semibold bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-lg transition-colors inline-block">Enrolment Form</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
