import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { Heart, Activity, CheckCircle } from 'lucide-react'

export const metadata: Metadata = { title: 'Red Cross', description: 'GICEAS Red Cross youth unit — health awareness, first aid, and humanitarian service activities.' }

export default function RedCrossPage() {
  return (
    <>
      <PageHero title="Red Cross Youth Unit" subtitle="GICEAS's Red Cross Youth unit instils values of humanity, impartiality, and voluntary service in students."
        badge="Activities" breadcrumbs={[{ label: 'Activities', href: '/activities' }, { label: 'Red Cross' }]}
        gradient="bg-gradient-to-br from-red-800 to-[#1e3a8a]" />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          <p className="text-gray-600 text-sm leading-relaxed">The Indian Red Cross Society (IRCS) Youth Wing at GICEAS engages students in humanitarian activities, first aid training, health campaigns, and disaster preparedness under the principles of the International Red Cross Movement.</p>
          <div className="grid md:grid-cols-2 gap-5">
            {[{ title: 'First Aid Training', desc: 'Regular first aid workshops including CPR, bandaging, and emergency response.' },
              { title: 'Blood Donation Drives', desc: 'Coordinating blood donation camps in collaboration with civil hospitals.' },
              { title: 'Health Awareness Camps', desc: 'Free health check-up camps in nearby villages and underprivileged areas.' },
              { title: 'Disaster Relief Awareness', desc: 'Workshops on flood, earthquake preparedness and community resilience.' },
            ].map(a => (
              <div key={a.title} className="card p-5">
                <Heart size={18} className="text-red-500 mb-2" />
                <h3 className="font-bold text-gray-900 text-sm mb-1">{a.title}</h3>
                <p className="text-xs text-gray-500">{a.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
            <Activity size={20} className="text-red-600 mb-2" />
            <h3 className="font-bold text-red-800 mb-2">Join the Red Cross</h3>
            <p className="text-sm text-red-700">Enrolment is open to all students. Join and make a difference in your community. Contact the NSS/activities coordinator for details.</p>
          </div>
        </div>
      </section>
    </>
  )
}
