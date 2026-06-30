import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, MessageCircle, Clock, ExternalLink } from 'lucide-react'
import { SITE } from '@/lib/data'

// ── Social Icons (proper SVG brand icons) ──────────────────────
function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  )
}
function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  )
}
function YoutubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
    </svg>
  )
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0c1228] text-gray-400">
      {/* Pre-footer CTA strip */}
      <div className="bg-gradient-to-r from-[#1e3a8a] to-[#0d9488] py-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-bold text-2xl mb-1" style={{ fontFamily: 'Georgia, serif' }}>
              Ready to Join GICEAS?
            </h3>
            <p className="text-white/70 text-sm">Admissions open for 2026–27. Explore our science programmes.</p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link href="/admission" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition-all text-sm hover:shadow-lg">
              Apply Now
            </Link>
            <Link href="/academic/courses" className="border-2 border-white/30 hover:border-white text-white px-6 py-3 rounded-xl font-semibold transition-all text-sm hover:bg-white/10">
              View Courses
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand column */}
        <div>
          {/* GICEAS Logo */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-16 h-16 rounded-xl overflow-hidden bg-white flex items-center justify-center shadow-lg shrink-0">
              <Image
                src="/logos/GreenfieldInstituteLogo.png"
                alt="GICEAS Logo"
                width={64}
                height={64}
                className="object-contain w-full h-full"
              />
            </div>
            <div>
              <div className="text-white font-bold text-sm leading-snug" style={{ fontFamily: 'Georgia, serif' }}>
                Greenfield<br/>Institute
              </div>
              <div className="text-gray-500 text-xs">Surat, Gujarat</div>
            </div>
          </div>

          <p className="text-sm leading-relaxed mb-5 text-gray-500">
            A constituent college of Meridian State University, Surat — dedicated to excellence in science education, research, and community service since 1984.
          </p>

          {/* Meridian State University badge */}
          <a
            href="https://meridianuniversity.ac.in"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-3 py-2.5 transition-colors group mb-5"
          >
            <div className="w-9 h-9 rounded-lg overflow-hidden bg-white flex items-center justify-center shrink-0">
              <Image
                src="/logos/MeridianStateUniversityLogo.png"
                alt="Meridian State University Logo"
                width={36}
                height={36}
                className="object-contain w-full h-full p-0.5"
              />
            </div>
            <div>
              <div className="text-[10px] text-gray-500">Constituent college of</div>
              <div className="text-white text-xs font-semibold group-hover:text-orange-400 transition-colors flex items-center gap-1">
                Meridian State University <ExternalLink size={10} className="opacity-50" />
              </div>
            </div>
            <span className="sr-only">(opens in new tab)</span>
          </a>

          {/* Accreditation badges */}
          <div className="flex gap-2 mb-5">
            {['NAAC', 'UGC', 'NIRF'].map((badge) => (
              <span
                key={badge}
                className="text-[10px] font-bold text-white/80 bg-white/10 border border-white/20 rounded-lg px-2 py-1"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Social media */}
          <div className="flex gap-2">
            <a
              href={SITE.social.facebook}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-lg bg-white/8 hover:bg-blue-600 flex items-center justify-center text-gray-400 hover:text-white transition-all"
              aria-label="GICEAS on Facebook (opens in new tab)"
            >
              <FacebookIcon />
            </a>
            <a
              href={SITE.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-lg bg-white/8 hover:bg-pink-600 flex items-center justify-center text-gray-400 hover:text-white transition-all"
              aria-label="GICEAS on Instagram (opens in new tab)"
            >
              <InstagramIcon />
            </a>
            <a
              href={SITE.social.youtube}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-lg bg-white/8 hover:bg-red-600 flex items-center justify-center text-gray-400 hover:text-white transition-all"
              aria-label="GICEAS on YouTube (opens in new tab)"
            >
              <YoutubeIcon />
            </a>
          </div>
        </div>

        {/* About & Academic links */}
        <div>
          <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-wider">About & Academic</h4>
          <ul className="space-y-2.5">
            {[
              ['About GICEAS', '/about'],
              ['History', '/about/history'],
              ['Vision & Mission', '/about/vision-mission'],
              ["Chairman's Message", '/about/chairman-message'],
              ["Principal's Message", '/about/principal-message'],
              ['Awards & Recognitions', '/about/awards'],
              ['Courses Offered', '/academic/courses'],
              ['Fees Structure', '/academic/fees'],
              ['NAAC Accreditation', '/academic/accreditation'],
              ['NIRF Ranking', '/academic/nirf'],
              ['Research', '/research'],
            ].map(([label, href]) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-sm hover:text-orange-400 transition-colors hover:pl-1 duration-150"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Student & Campus links */}
        <div>
          <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-wider">Students & Campus</h4>
          <ul className="space-y-2.5">
            {[
              ['Students Zone', '/students'],
              ['Academic Calendar', '/students/academic-calendar'],
              ['Scholarship & Freeship', '/students/scholarship'],
              ['Admission Forms', '/students/forms'],
              ['Exam Results', '/result'],
              ['Placement Cell', '/placement'],
              ['Gallery', '/gallery'],
              ['News & Events', '/news'],
              ['Campus Facilities', '/campus'],
              ['Anti-Ragging Cell', '/students/anti-ragging'],
              ['ICC', '/icc'],
            ].map(([label, href]) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-sm hover:text-orange-400 transition-colors hover:pl-1 duration-150"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://www.alumni.greenfield.ac.in"
                target="_blank"
                rel="noreferrer"
                className="text-sm hover:text-orange-400 transition-colors flex items-center gap-1"
              >
                Alumni Portal <ExternalLink size={10} className="opacity-50" />
              </a>
            </li>
            <li>
              <a
                href="https://fees.greenfield.ac.in"
                target="_blank"
                rel="noreferrer"
                className="text-sm hover:text-orange-400 transition-colors flex items-center gap-1"
              >
                Fees Payment <ExternalLink size={10} className="opacity-50" />
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Newsletter */}
        <div>
          <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-wider">Contact Us</h4>
          <div className="space-y-4 mb-6">
            <div className="flex gap-3">
              <MapPin size={16} className="text-orange-400 shrink-0 mt-0.5" />
              <p className="text-sm leading-relaxed">
                123 College Road, Near City Park,<br />
                Sample Nagar,<br />
                Surat – 395007, Gujarat, India.
              </p>
            </div>
            <div className="flex gap-3">
              <Phone size={16} className="text-orange-400 shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <a href="tel:9999900001" className="text-sm block hover:text-orange-400 transition-colors">99999 00001 (Admin)</a>
                <a href="tel:9999900002" className="text-sm block hover:text-orange-400 transition-colors">99999 00002 / 00003</a>
              </div>
            </div>
            <div className="flex gap-3">
              <Mail size={16} className="text-orange-400 shrink-0 mt-0.5" />
              <a href="mailto:info@greenfield.ac.in" className="text-sm hover:text-orange-400 transition-colors">info@greenfield.ac.in</a>
            </div>
            <div className="flex gap-3">
              <MessageCircle size={16} className="text-green-400 shrink-0 mt-0.5" />
              <a href="https://wa.me/919999900005" target="_blank" rel="noreferrer" className="text-sm hover:text-green-400 transition-colors">
                WhatsApp: 99999 00005
              </a>
            </div>
            <div className="flex gap-3">
              <Clock size={16} className="text-orange-400 shrink-0 mt-0.5" />
              <p className="text-sm">Mon – Sat: 9:00 AM – 5:00 PM</p>
            </div>
          </div>

          {/* Google Maps link */}
          <a
            href="https://maps.google.com/?q=Greenfield+Institute+Surat"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs text-orange-400 hover:text-orange-300 transition-colors mb-6"
          >
            <MapPin size={12} /> View on Google Maps <ExternalLink size={10} />
          </a>

          {/* Newsletter subscription */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <h5 className="text-white text-xs font-bold uppercase tracking-wider mb-2">Stay Updated</h5>
            <p className="text-xs text-gray-500 mb-3">Get news and event updates from GICEAS.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-orange-400 transition-colors"
                aria-label="Email address for newsletter"
              />
              <button
                className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors whitespace-nowrap"
                type="button"
                aria-label="Subscribe to newsletter"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8 py-5">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="text-gray-600">
            © {currentYear} Greenfield Institute of Computer Education and Applied Sciences, Surat.
            All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/privacy" className="hover:text-orange-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-orange-400 transition-colors">Terms of Use</Link>
            <Link href="/disclaimer" className="hover:text-orange-400 transition-colors">Disclaimer</Link>
            <span className="text-gray-600">
              Designed by{' '}
              <a href="#" className="text-gray-500 hover:text-orange-400 transition-colors">
                [Developer Name]
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
