import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { Target, Rocket, Heart, CheckCircle } from 'lucide-react'

export const metadata: Metadata = { title: 'Vision, Mission & Values' }

export default function VisionPage() {
  return (
    <>
      <PageHero title="Vision, Mission & Values" subtitle="The founding principles that guide every decision at GICEAS." breadcrumbs={[{ label: 'About', href: '/about' }, { label: 'Vision, Mission & Values' }]} />
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 space-y-12">
          {[
            { icon: Target, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100', title: 'Our Vision', content: 'Aspiring for excellence through world-class education, research and innovation in contemporary and prospective sciences in the service of humanity.', points: ['Global academic standards', 'Science-led community service', 'Inclusive and diverse learning environment', 'Continuous quality improvement'] },
            { icon: Rocket, color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-100', title: 'Our Mission', content: 'To facilitate a diverse spectrum of science education programmes through modern pedagogical approaches for nurturing quality research of international standards.', points: ['Cutting-edge curriculum and pedagogy', 'Research-driven academic culture', 'Industry-academia collaboration', 'Holistic student development'] },
            { icon: Heart, color: 'text-teal-600', bg: 'bg-teal-50', border: 'border-teal-100', title: 'Our Core Values', content: 'The values of our namesake, Swami Devananda, permeate our institutional culture — truth, service, and universal brotherhood.', points: ['Integrity in all academic matters', 'Respect for every individual', 'Scientific curiosity and open inquiry', 'Social responsibility and community service'] },
          ].map(({ icon: Icon, color, bg, border, title, content, points }) => (
            <div key={title} className={`rounded-2xl p-8 border ${border} ${bg}`}>
              <div className="flex items-center gap-4 mb-5">
                <div className={`w-14 h-14 rounded-2xl ${bg} border ${border} shadow-sm flex items-center justify-center`}>
                  <Icon size={28} className={color} />
                </div>
                <h2 className={`text-2xl font-bold ${color}`}>{title}</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-5">{content}</p>
              <div className="grid sm:grid-cols-2 gap-2">
                {points.map(p => (
                  <div key={p} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle size={14} className="text-green-500 shrink-0 mt-0.5" /> {p}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
