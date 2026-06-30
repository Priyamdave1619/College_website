import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import { Heart, ShieldCheck, Leaf, Music, Dumbbell, GraduationCap, Globe, Users, ArrowRight } from 'lucide-react'

export const metadata: Metadata = { title: 'Activities & Clubs' }

const activities = [
  { icon: Users, name: 'NSS', slug: 'nss', color: 'text-blue-600', bg: 'bg-blue-50', desc: 'National Service Scheme volunteers engage in community service, rural camps, and social awareness drives.' },
  { icon: ShieldCheck, name: 'NCC', slug: 'ncc', color: 'text-green-600', bg: 'bg-green-50', desc: 'National Cadet Corps unit develops discipline, leadership, and patriotism through training and national events.' },
  { icon: Heart, name: 'Red Cross', slug: 'red-cross', color: 'text-red-600', bg: 'bg-red-50', desc: 'Red Cross activities include blood donation camps, first-aid training, and disaster relief awareness.' },
  { icon: Leaf, name: 'Maitri Setu', slug: 'maitri-setu', color: 'text-teal-600', bg: 'bg-teal-50', desc: 'Community outreach programme bridging college students with underprivileged communities in Surat.' },
  { icon: Music, name: 'Cultural', slug: 'cultural', color: 'text-purple-600', bg: 'bg-purple-50', desc: 'Annual cultural festival featuring music, dance, drama, and art competitions for all students.' },
  { icon: Dumbbell, name: 'Sports', slug: 'sports', color: 'text-orange-600', bg: 'bg-orange-50', desc: 'Inter-collegiate sports competitions in cricket, football, volleyball, athletics, and more.' },
  { icon: Globe, name: 'Educational Tour', slug: 'educational-tour', color: 'text-indigo-600', bg: 'bg-indigo-50', desc: 'Annual educational tours to research institutions, industries, and places of scientific importance.' },
  { icon: GraduationCap, name: 'Cells & Committees', slug: 'cells-committees', color: 'text-rose-600', bg: 'bg-rose-50', desc: 'Various academic and welfare cells operating within the college for student support and development.' },
]

export default function ActivitiesPage() {
  return (
    <>
      <PageHero title="Activities & Clubs" subtitle="A vibrant student life — from community service to cultural celebrations." breadcrumbs={[{ label: 'Activities' }]} />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {activities.map(({ icon: Icon, name, slug, color, bg, desc }) => (
              <Link key={slug} href={`/activities/${slug}`} className="card card-hover p-6 group">
                <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon size={22} className={color} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#1e3a8a] transition-colors">{name}</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-3">{desc}</p>
                <div className="flex items-center gap-1 text-xs font-semibold text-[#1e3a8a] opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ArrowRight size={12} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
