import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import { DEPARTMENTS } from '@/lib/data'
import { Monitor, Microscope, Dna, Leaf, FlaskConical, Beaker, BookOpen, Building2, ArrowRight } from 'lucide-react'

export const metadata: Metadata = { title: 'Departments' }

const icons: Record<string, React.ElementType> = {
  'computer-science': Monitor, microbiology: Microscope, biotechnology: Dna,
  'environmental-science': Leaf, chemistry: FlaskConical, allied: Beaker, library: BookOpen, admin: Building2,
}

export default function DepartmentsPage() {
  return (
    <>
      <PageHero title="Our Departments" subtitle="Eight departments dedicated to excellence in science education and research." breadcrumbs={[{ label: 'Departments' }]} />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEPARTMENTS.map(d => {
            const Icon = icons[d.slug] || FlaskConical
            return (
              <Link key={d.slug} href={`/departments/${d.slug}`} className="group card card-hover p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110" style={{ backgroundColor: d.color + '18' }}>
                    <Icon size={26} style={{ color: d.color }} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg group-hover:text-[#1e3a8a] transition-colors">{d.name}</h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-3">{d.about}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {d.programs.map(p => <span key={p} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">{p}</span>)}
                </div>
                <div className="flex items-center gap-1 text-sm font-semibold text-[#1e3a8a] opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore Department <ArrowRight size={14} />
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    </>
  )
}
