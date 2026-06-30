import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { FlaskConical, BookOpen, Dumbbell, Coffee, Home, Mic, ShieldCheck, Monitor, Leaf, Users } from 'lucide-react'

export const metadata: Metadata = { title: 'Campus Facilities' }

const facilities = [
  { id: 'laboratory', icon: FlaskConical, name: 'Laboratories', color: 'text-blue-600', bg: 'bg-blue-50', desc: 'GICEAS houses state-of-the-art laboratories for Computer Science, Microbiology, Biotechnology, Environmental Science, and Chemistry. Each lab is equipped with modern instruments and safety infrastructure to support both UG and PG practical curriculum.', features: ['Modern instruments & equipment', 'Safety-compliant infrastructure', 'Dedicated lab technicians', 'Research-grade facility'] },
  { id: 'library', icon: BookOpen, name: 'Library', color: 'text-green-600', bg: 'bg-green-50', desc: 'The central library offers a rich collection of textbooks, reference books, scientific journals, and digital resources. Students have access to INFLIBNET N-LIST for thousands of e-journals and e-books.', features: ['10,000+ print titles', 'INFLIBNET N-LIST access', 'Digital reading stations', 'Quiet study zones'] },
  { id: 'seminar-hall', icon: Mic, name: 'Seminar Hall', color: 'text-purple-600', bg: 'bg-purple-50', desc: 'Two well-equipped seminar halls with audio-visual systems, LCD projectors, and seating for 150+ students host guest lectures, workshops, conferences, and convocation ceremonies.', features: ['AV-equipped with LCD', '150+ seating capacity', 'Air-conditioned', 'Stage & podium'] },
  { id: 'playground', icon: Dumbbell, name: 'Playground', color: 'text-orange-600', bg: 'bg-orange-50', desc: 'A spacious playground supports cricket, football, volleyball, and athletics. GICEAS students actively participate in inter-collegiate sports tournaments under Meridian State University.', features: ['Multi-sport ground', 'Athletics track', 'Inter-college competitions', 'Sports equipment room'] },
  { id: 'hostel', icon: Home, name: 'Hostel', color: 'text-teal-600', bg: 'bg-teal-50', desc: 'On-campus hostel accommodation is available for outstation students in a safe and supportive environment. Separate blocks for male and female students with 24/7 security and CCTV monitoring.', features: ['Separate blocks for boys/girls', '24/7 security & CCTV', 'Mess/canteen facility', 'Wi-Fi enabled rooms'] },
  { id: 'canteen', icon: Coffee, name: 'Canteen', color: 'text-rose-600', bg: 'bg-rose-50', desc: 'The campus canteen serves nutritious, hygienic, and affordable meals throughout the college day. A variety of vegetarian snacks, meals, and beverages are available for students and staff.', features: ['Hygienic & affordable food', 'Vegetarian menu', 'Spacious seating', 'Open all college hours'] },
  { id: 'sports', icon: Dumbbell, name: 'Sports Activities', color: 'text-amber-600', bg: 'bg-amber-50', desc: 'GICEAS has a proud tradition of sports participation. Students compete at inter-collegiate, state, and national levels in various sports. Dedicated coaches and trainers support student athletes.', features: ['Qualified sports coaches', 'State & national participation', 'Annual sports day', 'Yoga & fitness sessions'] },
  { id: 'ncc', icon: ShieldCheck, name: 'NCC Office', color: 'text-indigo-600', bg: 'bg-indigo-50', desc: 'The NCC (National Cadet Corps) unit at GICEAS instils discipline, leadership, and patriotism in students. The unit has won national-level accolades including awards from the Director General of NCC.', features: ['NCC Army Wing', 'National camps & events', 'Community service activities', 'Award-winning cadets'] },
]

export default function CampusPage() {
  return (
    <>
      <PageHero title="Campus Facilities" subtitle="A vibrant campus designed to support learning, research, health, and holistic student development." breadcrumbs={[{ label: 'Campus' }]} />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 space-y-14">
          {facilities.map((f, i) => {
            const Icon = f.icon
            return (
              <div key={f.id} id={f.id} className={`grid md:grid-cols-2 gap-8 items-start ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`rounded-2xl p-8 ${f.bg} flex items-center justify-center min-h-48 ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                  <Icon size={72} className={f.color + ' opacity-30'} />
                </div>
                <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                  <div className={`inline-flex items-center gap-2 ${f.bg} ${f.color} rounded-full px-3 py-1 text-xs font-semibold mb-3`}>
                    <Icon size={13} /> {f.name}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">{f.name}</h2>
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">{f.desc}</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {f.features.map(feat => (
                      <li key={feat} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" /> {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
