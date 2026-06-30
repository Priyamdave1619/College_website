import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = { title: 'Privacy Policy – GICEAS' }

export default function Page() {
  return (
    <>
      <PageHero title="Privacy" subtitle="Please read this privacy policy carefully before using the GICEAS website."
        badge="Legal" breadcrumbs={[{ label: 'Privacy' }]} />
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 prose prose-sm prose-gray">
          <p className="text-gray-500 text-xs mb-6">Last updated: June 2026 | Greenfield Institute of Computer Education and Applied Sciences, Surat.</p>
          <p className="text-gray-600 text-sm leading-relaxed">This page is currently being updated. For any queries regarding our privacy policy, please contact us at <a href="mailto:info@greenfield.ac.in" className="text-[#1e3a8a] underline">info@greenfield.ac.in</a>.</p>
        </div>
      </section>
    </>
  )
}
