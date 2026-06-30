import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { Link2, Users, Globe } from 'lucide-react'

export const metadata: Metadata = { title: 'Maitri Setu', description: 'GICEAS Maitri Setu — bridging communities and fostering cultural exchange among students.' }

export default function MaitriSetuPage() {
  return (
    <>
      <PageHero title="Maitri Setu" subtitle="Building bridges of friendship, understanding, and unity — Maitri Setu fosters community bonds at GICEAS."
        badge="Activities" breadcrumbs={[{ label: 'Activities', href: '/activities' }, { label: 'Maitri Setu' }]}
        gradient="bg-gradient-to-br from-teal-800 to-[#1e3a8a]" />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          <p className="text-gray-600 text-sm leading-relaxed">Maitri Setu — meaning "Bridge of Friendship" — is GICEAS's community outreach and friendship programme that connects students with local communities, underprivileged schools, and neighbouring institutions to promote dialogue, cultural exchange, and mutual respect.</p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: <Link2 size={20} className="text-teal-500" />, title: 'Community Connect', desc: 'Engaging with local communities through visits, awareness drives, and joint activities.' },
              { icon: <Users size={20} className="text-teal-500" />, title: 'Peer Exchange', desc: 'Student exchange visits with other colleges to share knowledge and build friendship networks.' },
              { icon: <Globe size={20} className="text-teal-500" />, title: 'Cultural Dialogue', desc: 'Celebrating India\'s diversity through inter-cultural events and festivals.' },
            ].map(a => (
              <div key={a.title} className="card p-5">
                <div className="mb-3">{a.icon}</div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{a.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
