import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { BookOpen, CheckCircle, XCircle } from 'lucide-react'

export const metadata: Metadata = { title: 'Code of Conduct', description: 'GICEAS student code of conduct — rules, responsibilities, and expected behaviour.' }

export default function CodeOfConductPage() {
  return (
    <>
      <PageHero title="Code of Conduct" subtitle="Students of GICEAS are expected to uphold the highest standards of academic integrity, discipline, and respectful behaviour."
        badge="Students Zone" breadcrumbs={[{ label: 'Students', href: '/students' }, { label: 'Code of Conduct' }]} />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 space-y-10">
          {[
            {
              title: 'General Conduct', icon: <BookOpen size={20} className="text-[#1e3a8a]" />,
              dos: ['Maintain punctuality for all classes, labs, and events','Wear the prescribed uniform or formal attire as directed','Treat all faculty, staff, and fellow students with respect','Keep the campus clean and maintain public property','Follow all institutional rules and Meridian State University regulations'],
              donts: ['Engage in ragging or bullying in any form','Use mobile phones during lectures without permission','Participate in any form of academic dishonesty or plagiarism','Consume tobacco, alcohol, or any prohibited substances on campus','Use social media to defame the institution or its members'],
            },
            {
              title: 'Academic Integrity', icon: <CheckCircle size={20} className="text-green-500" />,
              dos: ['Submit original work — acknowledge all sources','Attend minimum 75% of lectures to appear for examinations','Report academic misconduct to the concerned authority','Actively participate in curricular and co-curricular activities'],
              donts: ['Copy in examinations or during internal assessments','Misrepresent attendance records','Plagiarise from internet sources or peers','Forge signatures or documents'],
            },
          ].map(s => (
            <div key={s.title} className="card p-6">
              <div className="flex items-center gap-2 mb-5">{s.icon}<h2 className="font-bold text-gray-900 text-lg">{s.title}</h2></div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <div className="text-xs font-bold text-green-600 uppercase tracking-wider mb-3">Do's ✓</div>
                  <div className="space-y-2">{s.dos.map(d => <div key={d} className="flex items-start gap-2 text-sm text-gray-700"><CheckCircle size={13} className="text-green-500 shrink-0 mt-0.5" />{d}</div>)}</div>
                </div>
                <div>
                  <div className="text-xs font-bold text-red-600 uppercase tracking-wider mb-3">Don'ts ✗</div>
                  <div className="space-y-2">{s.donts.map(d => <div key={d} className="flex items-start gap-2 text-sm text-gray-700"><XCircle size={13} className="text-red-400 shrink-0 mt-0.5" />{d}</div>)}</div>
                </div>
              </div>
            </div>
          ))}
          <div className="bg-[#1e3a8a] rounded-2xl p-6 text-white text-center">
            <p className="text-white/80 text-sm">Violation of the Code of Conduct may result in disciplinary action including warning, suspension, or expulsion, as decided by the Discipline Committee of GICEAS.</p>
          </div>
        </div>
      </section>
    </>
  )
}
