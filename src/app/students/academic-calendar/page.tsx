import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { Calendar, Download } from 'lucide-react'

export const metadata: Metadata = { title: 'Academic Calendar', description: 'GICEAS academic calendar for 2025–26 — important dates, exam schedules, holidays.' }

const events = [
  { month: 'June 2025', items: ['Admission Process Begins', 'New Academic Year Commences', 'Orientation Programme for First-Year Students'] },
  { month: 'July 2025', items: ['Regular Classes Begin (All Programmes)', 'Library Induction for New Students', 'NSS Enrolment Drive'] },
  { month: 'August 2025', items: ['Independence Day Celebration', 'First Internal Assessment (UG)', 'NCC Camp Registration'] },
  { month: 'September 2025', items: ['First Internal Assessment (PG)', 'Seminar on Career Opportunities', 'Anti-Ragging Awareness Week'] },
  { month: 'October 2025', items: ['Mid-Semester Break', 'Blood Donation Camp (NSS)', 'Inter-Department Sports Event'] },
  { month: 'November 2025', items: ['Second Internal Assessment', 'Cultural Festival – Navratri Celebrations', 'Industry Visit (CS & BCA)'] },
  { month: 'December 2025', items: ['End-Semester Examinations (SU)', 'Research Paper Submission Deadline', 'Winter Vacation'] },
  { month: 'January 2026', items: ['Second Semester Begins', 'Republic Day Celebrations', 'Science Exhibition Preparation'] },
  { month: 'February 2026', items: ['Third Internal Assessment', 'Annual Sports Meet', 'Placement Drive (Final Year)'] },
  { month: 'March 2026', items: ['Annual Cultural Programme', 'Inter-College Science Exhibition', 'Alumni Meet'] },
  { month: 'April 2026', items: ['End-Semester Examinations', 'Project Viva & Submissions', 'Farewell Programme'] },
  { month: 'May 2026', items: ['Summer Vacation', 'Result Declaration', 'Admission Process for 2026–27'] },
]

export default function AcademicCalendarPage() {
  return (
    <>
      <PageHero title="Academic Calendar 2025–26" subtitle="Important dates, examinations, holidays, and events for the academic year."
        badge="Students Zone" breadcrumbs={[{ label: 'Students', href: '/students' }, { label: 'Academic Calendar' }]} />
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-end mb-6">
            <a href="#" className="flex items-center gap-2 btn-primary text-sm"><Download size={15} /> Download PDF</a>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {events.map((e) => (
              <div key={e.month} className="card p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar size={16} className="text-orange-500" />
                  <h3 className="font-bold text-gray-900 text-sm">{e.month}</h3>
                </div>
                <ul className="space-y-1.5">
                  {e.items.map(item => (
                    <li key={item} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
