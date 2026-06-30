import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { COURSES } from '@/lib/data'
import { CheckCircle, Download, Phone, Mail, Clock, ArrowRight } from 'lucide-react'

export const metadata: Metadata = { title: 'Admission Corner 2026-27' }

const steps = [
  { n: '01', title: 'Check Eligibility', desc: 'Review the eligibility criteria for your desired programme — minimum 50% in 10+2 with relevant science subjects.' },
  { n: '02', title: 'Download Application Form', desc: 'Download the admission application form from this page or collect it from the college office.' },
  { n: '03', title: 'Submit Documents', desc: 'Submit filled form with mark sheets, transfer certificate, ID proof, and passport photos at the office.' },
  { n: '04', title: 'Merit List & Confirmation', desc: 'Wait for the merit list to be published. Confirm your admission by paying the fees within the deadline.' },
]

export default function AdmissionPage() {
  return (
    <>
      <PageHero title="Admission Corner 2026–27" subtitle="Everything you need to know about admissions to GICEAS programmes." badge="Now Open" breadcrumbs={[{ label: 'Admission Corner' }]} />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Banner */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 text-white flex flex-col md:flex-row items-center justify-between gap-4 mb-14">
            <div>
              <div className="font-bold text-xl mb-1">Admissions Open for 2026–27</div>
              <div className="text-white/80 text-sm">Apply for UG & PG Science programmes affiliated to Meridian State University</div>
            </div>
            <div className="flex gap-3">
              <a href="/students/forms" className="bg-white text-orange-600 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-orange-50 transition-colors">Download Form</a>
              <a href="https://fees.greenfield.ac.in" target="_blank" rel="noreferrer" className="border-2 border-white text-white font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-white/10 transition-colors">Pay Fees</a>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Steps */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#1e3a8a] mb-6">How to Apply</h2>
                <div className="space-y-5">
                  {steps.map(s => (
                    <div key={s.n} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#1e3a8a] text-white font-bold text-sm flex items-center justify-center shrink-0">{s.n}</div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">Programmes & Intake</h2>
                <div className="overflow-x-auto rounded-2xl border border-gray-200">
                  <table className="w-full text-sm">
                    <thead><tr className="bg-[#1e3a8a] text-white"><th className="text-left px-4 py-3">Programme</th><th className="px-4 py-3">Duration</th><th className="px-4 py-3">Seats</th></tr></thead>
                    <tbody>
                      {COURSES.map((c, i) => (
                        <tr key={c.program} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-4 py-2.5 font-medium text-gray-900">{c.program}</td>
                          <td className="px-4 py-2.5 text-center text-gray-600">{c.duration}</td>
                          <td className="px-4 py-2.5 text-center text-gray-600">{c.seats}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <div className="card p-6">
                <h3 className="font-bold text-gray-900 mb-4">Eligibility Criteria</h3>
                <div className="space-y-2">
                  {['10+2 with Science stream', 'Minimum 50% aggregate marks', 'Gujarati medium & English medium accepted', 'Valid category certificate (if applicable)'].map(e => (
                    <div key={e} className="flex items-start gap-2 text-sm text-gray-700"><CheckCircle size={14} className="text-green-500 shrink-0 mt-0.5" /> {e}</div>
                  ))}
                </div>
              </div>

              <div className="card p-6">
                <h3 className="font-bold text-gray-900 mb-4">Important Dates</h3>
                <div className="space-y-3">
                  {[{ ev: 'Applications Open', dt: 'June 1, 2026' }, { ev: 'Last Date to Apply', dt: 'July 15, 2026' }, { ev: 'Merit List Published', dt: 'July 20, 2026' }, { ev: 'Admission Confirmation', dt: 'July 31, 2026' }, { ev: 'Classes Begin', dt: 'August 5, 2026' }].map(({ ev, dt }) => (
                    <div key={ev} className="flex items-start gap-3 text-sm">
                      <Clock size={13} className="text-orange-400 shrink-0 mt-0.5" />
                      <div><div className="text-gray-500">{ev}</div><div className="font-semibold text-gray-900">{dt}</div></div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-[#1e3a8a] to-[#0f1638] p-6 text-white">
                <h3 className="font-bold mb-3 text-sm">Admission Helpdesk</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2"><Phone size={13} className="text-orange-300" /> 99999 00001</div>
                  <div className="flex items-center gap-2"><Phone size={13} className="text-orange-300" /> 99999 00002</div>
                  <div className="flex items-center gap-2"><Mail size={13} className="text-orange-300" /> info@greenfield.ac.in</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
