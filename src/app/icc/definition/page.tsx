import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { Shield } from 'lucide-react'

export const metadata: Metadata = { title: 'ICC – Definition', description: 'Legal definition of sexual harassment as per the POSH Act, 2013.' }

export default function ICCSubPage() {
  return (
    <>
      <PageHero title="Definition" subtitle="Legal definition of sexual harassment as per the POSH Act, 2013."
        badge="ICC" breadcrumbs={[{ label: 'ICC', href: '/icc' }, { label: 'Definition' }]}
        gradient="bg-gradient-to-br from-purple-900 to-[#1e3a8a]" />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="card p-8">
            <Shield size={32} className="text-purple-500 mb-4" />
            <h2 className="font-bold text-gray-900 text-xl mb-4">Definition</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">Legal definition of sexual harassment as per the POSH Act, 2013.</p>
            <p className="text-gray-500 text-sm leading-relaxed">For detailed information, please contact the ICC at <a href="mailto:icc@greenfield.ac.in" className="text-purple-600 underline">icc@greenfield.ac.in</a> or visit the Principal's office. All communications are kept strictly confidential.</p>
            <div className="mt-6 bg-purple-50 border border-purple-200 rounded-xl p-4">
              <p className="text-sm text-purple-700"><strong>Reference:</strong> The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 and UGC Regulations, 2015.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
