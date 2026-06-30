import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import { Briefcase, Users, TrendingUp, Building2, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = { title: 'Training & Placement Cell' }

const placements = [
  { dept: 'Computer Science', companies: ['Infosys', 'TCS', 'Wipro', 'HCL', 'Tech Mahindra', 'Cognizant', 'L&T Infotech'], href: '/placement/computer-science' },
  { dept: 'Microbiology', companies: ['Zydus Cadila', 'Sun Pharma', 'Torrent Pharma', 'IPCA Labs', 'Alembic Pharma'], href: '/placement/microbiology' },
  { dept: 'Biotechnology', companies: ['Biocon', 'Serum Institute', 'Dr. Reddys', 'Wockhardt', 'Glenmark'], href: '/placement/biotechnology' },
  { dept: 'Environmental Science', companies: ['TERI', 'ERM India', 'Reliance Industries', 'Gujarat Pollution Control Board'], href: '/placement/environmental-science' },
  { dept: 'Chemistry', companies: ['Gharda Chemicals', 'BASF India', 'Aarti Industries', 'Pidilite', 'Asian Paints'], href: '/placement/chemistry' },
]

export default function PlacementPage() {
  return (
    <>
      <PageHero title="Training & Placement Cell" subtitle="Connecting GICEAS graduates with leading employers across science, technology, and industry." breadcrumbs={[{ label: 'Placement' }]} />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-14">
            {[{ icon: Users, v: '500+', l: 'Students Placed (5 yrs)' }, { icon: Building2, v: '100+', l: 'Recruiting Companies' }, { icon: TrendingUp, v: '85%', l: 'Placement Rate' }, { icon: Briefcase, v: '₹4.2L', l: 'Avg. Package' }].map(({ icon: Icon, v, l }) => (
              <div key={l} className="card p-5 text-center">
                <Icon size={24} className="text-orange-500 mx-auto mb-2" />
                <div className="text-3xl font-bold text-[#1e3a8a] mb-1">{v}</div>
                <div className="text-xs text-gray-500">{l}</div>
              </div>
            ))}
          </div>

          {/* Cell description */}
          <div className="grid lg:grid-cols-2 gap-12 mb-14">
            <div>
              <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">About the Placement Cell</h2>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm">The Training & Placement Cell at GICEAS is dedicated to bridging the gap between academia and industry. Our experienced placement team works year-round to organize campus drives, internship opportunities, skill-building workshops, and industry visits.</p>
              <p className="text-gray-600 leading-relaxed mb-5 text-sm">We partner with leading companies across pharmaceuticals, IT, environmental consulting, chemicals, and biotechnology to ensure that our graduates are industry-ready and well-placed.</p>
              <div className="space-y-2">
                {['Campus recruitment drives', 'Resume building & interview prep workshops', 'Industry guest lectures', 'Internship facilitation', 'Career counselling sessions', 'Alumni mentorship programme'].map(s => (
                  <div key={s} className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle size={14} className="text-green-500 shrink-0" /> {s}</div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">Placement by Department</h2>
              {placements.map(p => (
                <div key={p.dept} className="card p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-gray-900 text-sm">{p.dept}</h3>
                    <Link href={p.href} className="text-xs text-[#1e3a8a] font-semibold hover:text-orange-500 transition-colors">View Details →</Link>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {p.companies.map(c => <span key={c} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{c}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
