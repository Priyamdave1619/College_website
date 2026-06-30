import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { COURSES } from '@/lib/data'
import { Clock, Users, GraduationCap } from 'lucide-react'

export const metadata: Metadata = { title: 'Courses Offered' }

export default function CoursesPage() {
  const ug = COURSES.filter(c => c.level === 'UG')
  const pg = COURSES.filter(c => c.level === 'PG')
  return (
    <>
      <PageHero title="Courses Offered" subtitle="Undergraduate and postgraduate science programmes affiliated to Meridian State University." breadcrumbs={[{ label: 'Academic', href: '/academic' }, { label: 'Courses Offered' }]} />
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 space-y-14">
          {[{ label: 'Undergraduate Programmes (UG)', courses: ug }, { label: 'Postgraduate Programmes (PG)', courses: pg }].map(({ label, courses }) => (
            <div key={label}>
              <h2 className="text-2xl font-bold text-[#1e3a8a] mb-6 flex items-center gap-2">
                <GraduationCap className="text-orange-500" /> {label}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {courses.map(c => (
                  <div key={c.program} className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all">
                    <div className="font-bold text-gray-900 mb-3">{c.program}</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-500"><Clock size={14} className="text-orange-400" /> Duration: {c.duration}</div>
                      <div className="flex items-center gap-2 text-sm text-gray-500"><Users size={14} className="text-orange-400" /> Intake: {c.seats} seats</div>
                      <div className="flex items-center gap-2 text-sm text-gray-500"><GraduationCap size={14} className="text-orange-400" /> Department: {c.dept}</div>
                    </div>
                    <div className="mt-3 text-xs font-semibold text-orange-500 uppercase tracking-wider">{c.level} Programme</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="bg-[#1e3a8a] rounded-2xl p-6 text-white text-center">
            <h3 className="text-xl font-bold mb-2">Ready to Apply?</h3>
            <p className="text-white/70 mb-4 text-sm">Admissions for 2026-27 are open. Download the application form or apply online.</p>
            <a href="/admission" className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition-colors">Apply Now</a>
          </div>
        </div>
      </section>
    </>
  )
}
