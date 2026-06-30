import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'

interface Crumb { label: string; href?: string }

interface Props {
  title: string
  subtitle?: string
  breadcrumbs?: Crumb[]
  badge?: string
  gradient?: string
  /** Optional campus/department image URL for background blend */
  image?: string
  /** Show the SVG wave divider at the bottom (default: true) */
  wave?: boolean
  /** Override the accent bar color (default: orange) */
  accentColor?: string
}

export default function PageHero({
  title,
  subtitle,
  breadcrumbs,
  badge,
  gradient,
  image,
  wave = true,
  accentColor = '#f97316',
}: Props) {
  return (
    <div
      className={`relative py-16 text-white overflow-hidden ${gradient || 'bg-gradient-to-br from-[#1e3a8a] to-[#0f1638]'}`}
    >
      {/* Background campus image (optional) */}
      {image && (
        <Image
          src={image}
          alt=""
          fill
          className="object-cover opacity-20 mix-blend-luminosity"
          sizes="100vw"
          priority
          aria-hidden="true"
        />
      )}

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />

      {/* Left accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1"
        style={{ background: `linear-gradient(to bottom, ${accentColor}, transparent)` }}
        aria-hidden="true"
      />

      {/* Decorative circles */}
      <div
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-[0.04]"
        style={{ background: accentColor }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-10 left-1/3 w-40 h-40 rounded-full opacity-[0.04]"
        style={{ background: accentColor }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Badge */}
        {badge && (
          <div
            className="inline-flex items-center gap-2 border border-white/20 text-white/90 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ background: 'rgba(255,255,255,0.08)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: accentColor }} aria-hidden="true" />
            {badge}
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2" style={{ fontFamily: 'Georgia, serif' }}>
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-white/70 text-base max-w-2xl leading-relaxed mt-2">
            {subtitle}
          </p>
        )}

        {/* Breadcrumbs */}
        {breadcrumbs && (
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 mt-5 text-sm text-white/60"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight size={13} aria-hidden="true" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/90" aria-current="page">
                    {crumb.label}
                  </span>
                )}
              </span>
            ))}
          </nav>
        )}
      </div>

      {/* SVG wave divider at the bottom */}
      {wave && (
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none" aria-hidden="true">
          <svg
            viewBox="0 0 1440 40"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full h-10 text-white fill-current"
          >
            <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" />
          </svg>
        </div>
      )}
    </div>
  )
}
