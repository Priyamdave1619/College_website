import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { Award, CheckCircle, ExternalLink } from 'lucide-react'

export const metadata: Metadata = { title: 'Accreditation & Recognition', description: 'GICEAS accreditation details — NAAC, UGC recognition, and other quality certifications.' }

export default function AccreditationPage() {
  return (
    <>
      <PageHero title="Accreditation & Recognition" subtitle="GICEAS is proud to be accredited and recognised by premier bodies ensuring quality education."
        badge="Quality" breadcrumbs={[{ label: 'Academic', href: '/academic' }, { label: 'Accreditation' }]} />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { title: 'NAAC Accredited', body: 'National Assessment and Accreditation Council', desc: 'GICEAS is accredited by NAAC, ensuring adherence to quality standards in higher education.', grade: 'Grade B+', color: 'bg-blue-50 border-blue-200' },
              { title: 'UGC Recognised', body: 'University Grants Commission', desc: 'Recognised under Section 2(f) and 12(B) of the UGC Act, making graduates eligible for scholarships and fellowships.', grade: '2(f) & 12(B)', color: 'bg-green-50 border-green-200' },
              { title: 'Meridian State University', body: 'Constituent College', desc: 'A constituent college of Meridian State University, Surat — ensuring academic integrity and university-level oversight.', grade: 'Constituent', color: 'bg-orange-50 border-orange-200' },
            ].map((a) => (
              <div key={a.title} className={`card border-2 ${a.color} p-6 text-center`}>
                <Award size={32} className="text-orange-500 mx-auto mb-3" />
                <div className="font-bold text-gray-900 mb-1">{a.title}</div>
                <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-3">{a.body}</div>
                <div className="text-xs font-bold bg-[#1e3a8a] text-white px-3 py-1 rounded-full inline-block mb-3">{a.grade}</div>
                <p className="text-xs text-gray-500 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
          <div className="card p-6">
            <h3 className="font-bold text-gray-900 mb-4">Additional Recognitions</h3>
            <div className="space-y-3">
              {['NIRF Ranked Institution', 'GSIRF (Gujarat State) Ranking', 'Affiliated to Meridian State University (formerly VNSGU)', 'NSS Unit sanctioned by Ministry of Youth Affairs', 'NCC Unit recognised by Ministry of Defence', 'IQAC Established for quality enhancement'].map(r => (
                <div key={r} className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle size={15} className="text-green-500 shrink-0" />{r}</div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
