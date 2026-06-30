import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { Calendar, MapPin, Users, Briefcase } from 'lucide-react'

export const metadata: Metadata = { title: 'Placement Events', description: 'Upcoming and past placement drives, career fairs, and training events at GICEAS.' }

const events = [
  { type: 'Campus Drive', company: 'TCS – Tata Consultancy Services', date: 'March 15, 2025', mode: 'On-Campus', roles: 'Graduate Trainee Engineer', eligible: 'B.Sc. CS, BCA, MCA' },
  { type: 'Campus Drive', company: 'Zydus Lifesciences', date: 'March 22, 2025', mode: 'On-Campus', roles: 'Research Associate', eligible: 'B.Sc. / M.Sc. Microbiology, Biotechnology' },
  { type: 'Off-Campus', company: 'Infosys BPM', date: 'April 5, 2025', mode: 'Virtual', roles: 'Process Executive', eligible: 'All Programmes' },
  { type: 'Career Fair', company: 'Surat Industry Recruitment Fair', date: 'February 28, 2025', mode: 'Off-Campus', roles: 'Multiple Profiles', eligible: 'Final Year – All Departments' },
]

export default function PlacementEventsPage() {
  return (
    <>
      <PageHero title="Placement Events" subtitle="Upcoming campus drives, off-campus opportunities, and career development events for GICEAS students."
        badge="Placement Cell" breadcrumbs={[{ label: 'Placement', href: '/placement' }, { label: 'Events' }]} />
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="space-y-4">
            {events.map((e, i) => (
              <div key={i} className="card p-5">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full mr-2 ${e.type === 'Campus Drive' ? 'bg-green-100 text-green-700' : e.type === 'Career Fair' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'}`}>{e.type}</span>
                    <h3 className="font-bold text-gray-900 mt-2">{e.company}</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-[#1e3a8a]">{e.date}</div>
                    <div className="text-xs text-gray-400">{e.mode}</div>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-3 text-xs text-gray-600">
                  <div className="flex items-center gap-2"><Briefcase size={13} className="text-orange-400" /><span>{e.roles}</span></div>
                  <div className="flex items-center gap-2"><Users size={13} className="text-orange-400" /><span>{e.eligible}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
