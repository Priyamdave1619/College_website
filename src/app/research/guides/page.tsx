import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { GraduationCap } from 'lucide-react'

export const metadata: Metadata = { title: 'Research Guides – GICEAS' }

export default function Page() {
  return (
    <>
      <PageHero title="Research Guides" subtitle="GICEAS research guides — faculty guides and research scholars pursuing doctoral and post-doctoral work."
        badge="Research" breadcrumbs={[{ label: 'Research', href: '/research' }, { label: 'Guides' }]} />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="card p-8 text-center">
            <GraduationCap size={40} className="text-[#1e3a8a] mx-auto mb-4" />
            <h2 className="font-bold text-gray-900 text-xl mb-3">Research Guides</h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">This section is being updated with the latest research guide and scholar information. Please contact the Research Cell at <a href="mailto:research@greenfield.ac.in" className="text-[#1e3a8a] underline">research@greenfield.ac.in</a> for more details.</p>
          </div>
        </div>
      </section>
    </>
  )
}
