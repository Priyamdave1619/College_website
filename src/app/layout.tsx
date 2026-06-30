/**
 * Enhanced layout.tsx — Drop-in replacement for src/app/layout.tsx
 *
 * Additions over original:
 *  • GlobalLoader (GICEAS-branded page transition loader)
 *  • FloatingActions (back-to-top + WhatsApp button)
 *  • Open Graph metadata for social sharing
 *  • Twitter card metadata
 *  • Viewport configuration
 *  • Theme color for mobile browsers
 *  • Keywords and robots meta
 */

import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import GlobalLoader from '@/components/GlobalLoader'
import FloatingActions from '@/components/FloatingActions'

const SITE_URL = 'https://www.greenfield.ac.in'
const OG_IMAGE = `${SITE_URL}/og-image.png` // Create a 1200x630 branded OG image

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'GICEAS – Greenfield Institute of Computer Education & Applied Sciences | Surat',
    template: '%s | GICEAS Surat',
  },
  description:
    'Greenfield Institute of Computer Education and Applied Sciences (GICEAS) — a constituent college of Meridian State University, Surat. Offering undergraduate and postgraduate programmes in Computer Science, Microbiology, Biotechnology, Environmental Science, and Chemistry.',
  keywords: [
    'GICEAS', 'Greenfield Institute', 'Surat college',
    'Meridian State University', 'science college Gujarat', 'BCA', 'MCA',
    'BSc Computer Science', 'BSc Microbiology', 'BSc Biotechnology',
    'BSc Environmental Science', 'BSc Chemistry', 'NAAC accredited college Surat',
  ],
  authors: [{ name: 'GICEAS – Greenfield Institute', url: SITE_URL }],
  creator: 'GICEAS',
  publisher: 'Greenfield Institute',
  alternates: { canonical: SITE_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'GICEAS – Greenfield Institute',
    title: 'GICEAS – Greenfield Institute of Computer Education & Applied Sciences',
    description:
      'A constituent college of Meridian State University, Surat — offering science programmes in CS, Microbiology, Biotechnology, Environmental Science, and Chemistry.',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'GICEAS – Greenfield Institute, Surat',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GICEAS – Greenfield Institute | Surat',
    description: 'A constituent college of Meridian State University offering science programmes in Surat, Gujarat.',
    images: [OG_IMAGE],
  },
}

export const viewport: Viewport = {
  themeColor: '#1e3a8a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        {/* Page transition loader — must be client component */}
        <GlobalLoader />

        <Navbar />

        {/* id="main-content" is required for the skip-to-content link in Navbar */}
        <main id="main-content" className="flex-1">
          {children}
        </main>

        <Footer />

        {/* Floating back-to-top + WhatsApp buttons */}
        <FloatingActions />

        {/* JSON-LD structured data for Google rich snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'CollegeOrUniversity',
              name: 'Greenfield Institute of Computer Education and Applied Sciences',
              alternateName: ['GICEAS', 'SRICEAS'],
              url: SITE_URL,
              logo: `${SITE_URL}/logos/greenfieldlogo.jpeg`,
              description:
                'GICEAS is a constituent college of Meridian State University, Surat, offering undergraduate and postgraduate programmes in Computer Science, Microbiology, Biotechnology, Environmental Science, and Chemistry.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '123 College Road, Near City Park, Sample Nagar',
                addressLocality: 'Surat',
                addressRegion: 'Gujarat',
                postalCode: '395007',
                addressCountry: 'IN',
              },
              telephone: ['+91-9999900001', '+91-9999900002'],
              email: 'info@greenfield.ac.in',
              sameAs: [
                'https://www.facebook.com/GreenfieldInstitute/',
                'https://www.instagram.com/greenfield_institute/',
                'https://www.youtube.com/c/greenfieldedu',
              ],
              parentOrganization: {
                '@type': 'Organization',
                name: 'Meridian State University',
                url: 'https://meridianuniversity.ac.in',
              },
            }),
          }}
        />
      </body>
    </html>
  )
}
