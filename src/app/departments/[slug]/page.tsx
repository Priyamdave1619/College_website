import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PageHero from '@/components/PageHero'
import { DEPARTMENTS } from '@/lib/data'
import { CheckCircle, FlaskConical, GraduationCap, Users } from 'lucide-react'

export async function generateStaticParams() {
  return DEPARTMENTS.map(d => ({ slug: d.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const dept = DEPARTMENTS.find(d => d.slug === params.slug)
  return { title: dept ? `${dept.name} Department` : 'Department' }
}

export default function DeptPage({ params }: { params: { slug: string } }) {
  const dept = DEPARTMENTS.find(d => d.slug === params.slug)
  if (!dept) notFound()

  return (
    <>
      <PageHero
        title={`Department of ${dept.name}`}
        subtitle={dept.programs.join(' · ')}
        badge="Department"
        breadcrumbs={[{ label: 'Departments', href: '/departments' }, { label: dept.name }]}
        gradient={`bg-gradient-to-br from-[#1e3a8a] to-[#0f1638]`}
      />
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[#1e3a8a] mb-3">About the Department</h2>
              <p className="text-gray-600 leading-relaxed">{dept.about}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">Programmes Offered</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {dept.programs.map(p => (
                  <div key={p} className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <GraduationCap size={18} className="text-orange-500 shrink-0" />
                    <div className="font-medium text-gray-900 text-sm">{p}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">Laboratory Facilities</h2>
              <div className="space-y-2">
                {dept.labs.map(lab => (
                  <div key={lab} className="flex items-center gap-3 text-sm text-gray-700">
                    <FlaskConical size={14} className="text-teal-500 shrink-0" /> {lab}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">Department Highlights</h2>
              <div className="grid sm:grid-cols-2 gap-2">
                {['Experienced and research-active faculty', 'Modern laboratory infrastructure', 'Industry connect and guest lectures', 'Active student association', 'Research paper publications', 'Placement assistance for graduates'].map(h => (
                  <div key={h} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle size={14} className="text-green-500 shrink-0 mt-0.5" /> {h}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="rounded-2xl p-6 border border-gray-100 bg-gray-50">
              <h3 className="font-bold text-gray-900 mb-4">Quick Facts</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Users size={15} className="text-orange-400" /> <span><strong>{dept.faculty}</strong> Faculty Members</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <GraduationCap size={15} className="text-orange-400" /> <span><strong>{dept.programs.length}</strong> Programmes</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <FlaskConical size={15} className="text-orange-400" /> <span><strong>{dept.labs.length}</strong> Laboratories</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl p-6 bg-gradient-to-br from-[#1e3a8a] to-[#0f766e] text-white">
              <h3 className="font-bold mb-2 text-sm">Interested in this Department?</h3>
              <p className="text-white/70 text-xs mb-4">Apply for admission to {dept.name} programmes for 2026-27.</p>
              <a href="/admission" className="block text-center bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors">Apply Now</a>
            </div>

            <div className="rounded-2xl p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-3 text-sm">Contact Department</h3>
              <div className="text-sm text-gray-500 space-y-1">
                <div>Head: {dept.hod}</div>
                <div>Email: info@greenfield.ac.in</div>
                <div>Phone: 99999 00002</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
