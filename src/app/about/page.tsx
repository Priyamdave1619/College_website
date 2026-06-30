import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import { CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = { title: 'About GICEAS' }

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About GICEAS"
        subtitle="Greenfield Institute of Computer Education and Applied Sciences — a constituent college of Meridian State University, Surat."
        badge="Est. 1984"
        breadcrumbs={[{ label: 'About GICEAS' }]}
      />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-5 text-gray-600 leading-relaxed">
            <p>Greenfield Institute of Computer Education and Applied Sciences (GICEAS) is one of the premier science institutions in Surat, Gujarat. Established in 1984 under the aegis of the Greenfield Seva Trust, the college has grown into a full-fledged constituent college of Meridian State University.</p>
            <p>The institute is named after the great saint and philosopher Swami Devananda, whose values of truth, service, and universal brotherhood continue to inspire the institution's academic and extracurricular ethos.</p>
            <p>Situated at the Sample Nagar campus — the educational hub of Surat — GICEAS offers undergraduate and postgraduate programmes across eight departments: Computer Science, Microbiology, Biotechnology, Environmental Science, Chemistry, Allied Sciences, Library, and Administration.</p>
            <p>The college is recognized by the University Grants Commission (UGC), accredited by NAAC, and consistently ranked in NIRF and GSIRF. It has a vibrant research culture, active NSS and NCC units, and a strong placement cell connecting graduates with leading employers.</p>
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              {['NAAC Accredited Institution', 'NIRF & GSIRF Ranked', 'UGC Recognized', 'Constituent College of Meridian State University', 'Active NSS & NCC Units', 'Strong Industry Placement Network', 'State-of-the-art Laboratories', 'Digital Library & E-Resources'].map(f => (
                <div key={f} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle size={15} className="text-orange-500 shrink-0 mt-0.5" /> {f}
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            {[
              { label: 'History', href: '/about/history', desc: 'Origins and milestones since 1984' },
              { label: 'Vision, Mission & Values', href: '/about/vision-mission', desc: 'Our guiding principles' },
              { label: "Chairman's Message", href: '/about/chairman-message', desc: 'A word from our Chairman' },
              { label: "Principal's Message", href: '/about/principal-message', desc: 'Message from the Principal' },
              { label: 'Working Committee', href: '/about/working-committee', desc: 'Our governing body' },
              { label: 'Donors', href: '/about/donors', desc: 'Gratitude to our benefactors' },
              { label: 'Past Principals', href: '/about/principals', desc: 'Leaders who shaped GICEAS' },
              { label: 'Awards & Recognitions', href: '/about/awards', desc: 'Our achievements' },
            ].map(({ label, href, desc }) => (
              <Link key={label} href={href} className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-orange-200 hover:shadow-sm transition-all group">
                <div>
                  <div className="font-semibold text-gray-900 group-hover:text-[#1e3a8a] text-sm transition-colors">{label}</div>
                  <div className="text-xs text-gray-400">{desc}</div>
                </div>
                <ArrowRight size={15} className="text-gray-300 group-hover:text-orange-500 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
