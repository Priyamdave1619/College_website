import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { Shield, Star, Award } from 'lucide-react'

export const metadata: Metadata = { title: 'NCC – National Cadet Corps', description: 'GICEAS NCC unit — discipline, leadership, and national service through cadet training.' }

export default function NCCPage() {
  return (
    <>
      <PageHero title="National Cadet Corps" subtitle="Unity & Discipline — GICEAS's NCC unit trains the next generation of responsible, disciplined citizens."
        badge="NCC Unit" breadcrumbs={[{ label: 'Activities', href: '/activities' }, { label: 'NCC' }]}
        gradient="bg-gradient-to-br from-olive-800 to-[#1e3a8a]" />
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-xl font-bold text-[#1e3a8a] mb-3">NCC at GICEAS</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">GICEAS has an active NCC unit affiliated to the Ministry of Defence. Our cadets undergo rigorous training in discipline, physical fitness, leadership, and national service. NCC experience adds significant value to students' careers in defence, civil services, and corporate sectors.</p>
              <p className="text-gray-600 text-sm leading-relaxed">NCC Motto: <strong className="text-[#1e3a8a]">"Unity and Discipline"</strong></p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
              <Award size={20} className="text-amber-600 mb-2" />
              <h3 className="font-bold text-amber-800 mb-2">Recent Achievement</h3>
              <p className="text-sm text-amber-700">NCC Cadet <strong>Mansi Arora</strong> was awarded by DG NCC Lt. General Gurbirpal Singh for outstanding performance at the National Camp. GICEAS takes immense pride in this achievement.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Training Activities</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {['Drill & Physical Training','Weapon Training & Firing','First Aid & Disaster Management','Camp Training (Annual NCC Camps)','Republic Day & Independence Day Parades','Social Service & Community Activities','Trekking & Adventure Activities','Leadership Development Workshops'].map(t => (
                  <div key={t} className="flex items-center gap-2 text-sm text-gray-700 bg-gray-50 rounded-xl px-3 py-2">
                    <Shield size={13} className="text-[#1e3a8a] shrink-0" />{t}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-5">
            <div className="card p-5">
              <h4 className="font-bold text-gray-900 text-sm mb-4">NCC Benefits</h4>
              {['Priority in defence recruitment','Weightage in civil services & govt jobs','Leadership & discipline development','National-level exposure through camps','B & C Certificate — valuable credentials','Scholarship opportunities for cadets'].map(b => (
                <div key={b} className="flex items-start gap-2 text-xs text-gray-600 mb-2"><Star size={11} className="text-amber-500 shrink-0 mt-0.5" />{b}</div>
              ))}
            </div>
            <div className="card p-5">
              <h4 className="font-bold text-gray-900 text-sm mb-3">NCC Officer</h4>
              <div className="text-xs text-gray-700">Lt. [Name]<br /><span className="text-gray-400">NCC Officer · GICEAS</span><br /><a href="mailto:ncc@greenfield.ac.in" className="text-[#1e3a8a]">ncc@greenfield.ac.in</a></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
