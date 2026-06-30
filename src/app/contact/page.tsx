import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactForm from '@/components/ContactForm'
import { MapPin, Phone, Mail, Clock, MessageCircle, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact GICEAS',
  description: 'Contact Greenfield Institute, Surat — address, phone, email, and enquiry form.',
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We are here to help. Reach out to GICEAS for admissions, academic queries, placement, or general information."
        badge="Get in Touch"
        breadcrumbs={[{ label: 'Contact' }]}
      />
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-5 gap-10">
          {/* Info column */}
          <div className="lg:col-span-2 space-y-5">
            <div className="card p-6">
              <h2 className="font-bold text-gray-900 mb-5">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <MapPin size={18} className="text-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm mb-1">Address</div>
                    <p className="text-sm text-gray-500 leading-relaxed">123 College Road, Near City Park, Sample Nagar, Surat – 395007, Gujarat, India.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Phone size={18} className="text-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm mb-1">Phone</div>
                    <a href="tel:9999900001" className="text-sm text-gray-500 hover:text-[#1e3a8a] block">99999 00001</a>
                    <a href="tel:9999900002" className="text-sm text-gray-500 hover:text-[#1e3a8a] block">99999 00002 / 00003</a>
                    <a href="tel:02612240170" className="text-sm text-gray-500 hover:text-[#1e3a8a] block">0261-2240170</a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Mail size={18} className="text-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm mb-1">Email</div>
                    <a href="mailto:info@greenfield.ac.in" className="text-sm text-[#1e3a8a] hover:underline">info@greenfield.ac.in</a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <MessageCircle size={18} className="text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm mb-1">WhatsApp</div>
                    <a href="https://wa.me/919999900005" target="_blank" rel="noreferrer" className="text-sm text-green-600 hover:underline flex items-center gap-1">99999 00005 <ExternalLink size={11} /></a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock size={18} className="text-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm mb-1">Office Hours</div>
                    <p className="text-sm text-gray-500">Monday – Saturday<br />9:00 AM – 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Google Maps embed */}
            <div className="card overflow-hidden">
              <iframe
                src="https://www.google.com/maps?q=Surat,Gujarat,India&output=embed"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="GICEAS Location on Google Maps"
              />
              <div className="p-3 border-t border-gray-100">
                <a href="https://maps.google.com/?q=Greenfield+Institute+Surat" target="_blank" rel="noreferrer"
                  className="text-xs text-[#1e3a8a] font-semibold flex items-center gap-1 hover:text-orange-500">
                  <MapPin size={12} /> Get Directions <ExternalLink size={11} />
                </a>
              </div>
            </div>
          </div>
          {/* Form column */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
