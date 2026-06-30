import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import { Calendar, FileText, BookOpen, Gift, ShieldCheck, Heart, Book, Download, ExternalLink, ArrowRight } from 'lucide-react'

export const metadata: Metadata = { title: "Students Zone" }

const sections = [
  { icon: Calendar, label: 'Academic Calendar', href: '/students/academic-calendar', desc: 'View term dates, exam schedules, and holidays for 2025-26.', color: 'text-blue-600', bg: 'bg-blue-50' },
  { icon: FileText, label: 'Previous Question Papers', href: '/students/question-papers', desc: 'Download past exam papers for all programmes and semesters.', color: 'text-purple-600', bg: 'bg-purple-50' },
  { icon: BookOpen, label: 'E-Magazine', href: '/students/e-magazine', desc: "Read GICEAS's student-produced digital magazine.", color: 'text-teal-600', bg: 'bg-teal-50' },
  { icon: Gift, label: 'Scholarship & Freeship', href: '/students/scholarship', desc: 'Information on government and institutional scholarships.', color: 'text-green-600', bg: 'bg-green-50' },
  { icon: ShieldCheck, label: 'Anti Ragging Committee', href: '/students/anti-ragging', desc: 'GICEAS has a zero-tolerance policy on ragging.', color: 'text-red-600', bg: 'bg-red-50' },
  { icon: Heart, label: 'Gender Sensitization Cell', href: '/students/gender-cell', desc: 'Promoting gender equality and awareness on campus.', color: 'text-pink-600', bg: 'bg-pink-50' },
  { icon: Book, label: 'Code of Conduct', href: '/students/code-of-conduct', desc: 'Rules, responsibilities, and expected student behaviour.', color: 'text-orange-600', bg: 'bg-orange-50' },
  { icon: Download, label: 'Admission Forms', href: '/students/forms', desc: 'Download lateral entry, application, and complaint forms.', color: 'text-indigo-600', bg: 'bg-indigo-50' },
]

export default function StudentsPage() {
  return (
    <>
      <PageHero title="Students Zone" subtitle="Resources, forms, and information for current GICEAS students." breadcrumbs={[{ label: 'Students Zone' }]} />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {sections.map(({ icon: Icon, label, href, desc, color, bg }) => (
              <Link key={label} href={href} className="card card-hover p-5 group">
                <div className={`w-11 h-11 rounded-xl ${bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <Icon size={20} className={color} />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1 group-hover:text-[#1e3a8a] transition-colors">{label}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </Link>
            ))}
          </div>
          {/* External quick links */}
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { label: 'Results (2024-25 & 2025-26)', href: '/result', note: 'Official results via Meridian State University', icon: FileText },
              { label: 'Alumni Portal', href: 'https://www.alumni.greenfield.ac.in', note: 'Connect with GICEAS alumni network', icon: Heart, external: true },
              { label: 'Fees Payment', href: 'https://fees.greenfield.ac.in', note: 'Pay semester fees securely online', icon: ExternalLink, external: true },
            ].map(({ label, href, note, icon: Icon, external }) => (
              <a key={label} href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}
                className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-[#1e3a8a] to-[#0f766e] text-white hover:shadow-lg transition-shadow group">
                <Icon size={22} className="text-orange-300 shrink-0" />
                <div>
                  <div className="font-bold text-sm">{label}</div>
                  <div className="text-white/60 text-xs">{note}</div>
                </div>
                <ArrowRight size={16} className="ml-auto opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
