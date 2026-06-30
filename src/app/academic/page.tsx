import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import { BookOpen, FileText, Award, BarChart2, ClipboardList, Bell, GraduationCap, ArrowRight } from 'lucide-react'

export const metadata: Metadata = { title: 'Academic' }

const sections = [
  { icon: GraduationCap, label: 'Courses Offered', href: '/academic/courses', desc: 'UG & PG science programmes affiliated to Meridian State University.' },
  { icon: FileText, label: 'Fees Structure', href: '/academic/fees', desc: 'Annual tuition and other fees for all programmes.' },
  { icon: BookOpen, label: 'SU Syllabus', href: '/academic/syllabus', desc: 'Download official Meridian State University syllabus documents.' },
  { icon: Award, label: 'Accreditation', href: '/academic/accreditation', desc: 'NAAC accreditation details and quality assurance information.' },
  { icon: BarChart2, label: 'AQAR Report', href: '/academic/aqar', desc: 'Annual Quality Assurance Reports submitted to NAAC.' },
  { icon: ClipboardList, label: 'IQAC Committee', href: '/academic/iqac', desc: 'Internal Quality Assurance Cell members and activities.' },
  { icon: FileText, label: 'AISHE', href: '/academic/aishe', desc: 'All India Survey on Higher Education data submission.' },
  { icon: Bell, label: 'UGC Notification', href: '/academic/ugc', desc: 'Notifications and guidelines received from the UGC.' },
  { icon: BarChart2, label: 'NIRF Ranking', href: '/academic/nirf', desc: 'National Institutional Ranking Framework data & scores.' },
  { icon: BarChart2, label: 'GSIRF Ranking', href: '/academic/gsirf', desc: 'Gujarat State Institutional Ranking Framework data.' },
]

export default function AcademicPage() {
  return (
    <>
      <PageHero title="Academic" subtitle="Programmes, policies, accreditation, and academic resources at GICEAS." breadcrumbs={[{ label: 'Academic' }]} />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sections.map(({ icon: Icon, label, href, desc }) => (
            <Link key={label} href={href} className="card card-hover p-6 group flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#1e3a8a]/8 flex items-center justify-center shrink-0 group-hover:bg-[#1e3a8a] transition-colors">
                <Icon size={22} className="text-[#1e3a8a] group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 group-hover:text-[#1e3a8a] text-sm mb-1 transition-colors">{label}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
              <ArrowRight size={15} className="ml-auto shrink-0 text-gray-200 group-hover:text-orange-500 transition-colors" />
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
