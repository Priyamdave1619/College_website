'use client'
import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Phone, Mail, ExternalLink, Search, ArrowRight, BookOpen, Building2, GraduationCap, FileText } from 'lucide-react'
import { NAV, DEPARTMENTS, COURSES } from '@/lib/data'

// ─── Ticker ───────────────────────────────────────────────────────────────────
const TICKER_ITEMS = [
  '🎓 Admissions Open 2026–27 — Apply Now',
  '📢 Merit List Published — Check Your Status',
  '🏆 NCC Cadet Mansi Arora Awarded by DG NCC Lt. General Gurbirpal Singh',
  '📄 GICEAS Faculty Research Papers Published in UGC-Listed Journals',
  '🤝 MoU Signed with Leading IT Company for Placement Support',
  '🌿 World Environment Day Quiz – Results Announced',
]

// ─── Search index ─────────────────────────────────────────────────────────────
// Build a flat list of searchable items from NAV + DEPARTMENTS + COURSES
type SearchItem = {
  title: string
  subtitle: string
  href: string
  category: 'Page' | 'Department' | 'Course'
  icon: string
  keywords: string
}

function buildSearchIndex(): SearchItem[] {
  const items: SearchItem[] = []

  // NAV pages + children
  for (const nav of NAV) {
    items.push({
      title: nav.label,
      subtitle: nav.href,
      href: nav.href,
      category: 'Page',
      icon: '📄',
      keywords: nav.label.toLowerCase(),
    })
    for (const child of nav.children ?? []) {
      items.push({
        title: child.label,
        subtitle: nav.label,
        href: child.href,
        category: 'Page',
        icon: '📄',
        keywords: `${child.label} ${nav.label}`.toLowerCase(),
      })
    }
  }

  // Departments
  for (const dept of DEPARTMENTS) {
    items.push({
      title: dept.name,
      subtitle: (dept.programs ?? []).join(', '),
      href: `/departments/${dept.slug}`,
      category: 'Department',
      icon: dept.icon ?? '🏫',
      keywords: `${dept.name} ${(dept.programs ?? []).join(' ')}`.toLowerCase(),
    })
  }

  // Courses
  for (const course of COURSES) {
    items.push({
      title: course.program,
      subtitle: `${course.duration} · ${course.seats} seats · ${course.level}`,
      href: '/academic/courses',
      category: 'Course',
      icon: '🎓',
      keywords: `${course.program} ${course.dept} ${course.level}`.toLowerCase(),
    })
  }

  return items
}

const SEARCH_INDEX = buildSearchIndex()

const QUICK_LINKS = [
  { label: 'Admissions',   href: '/admission',        icon: '🎓' },
  { label: 'Courses',      href: '/academic/courses',  icon: '📚' },
  { label: 'Results',      href: '/result',            icon: '📊' },
  { label: 'Placement',    href: '/placement',         icon: '💼' },
  { label: 'Departments',  href: '/departments',       icon: '🏫' },
  { label: 'Contact',      href: '/contact',           icon: '📞' },
  { label: 'Research',     href: '/research',          icon: '🔬' },
  { label: 'Gallery',      href: '/gallery',           icon: '🖼️' },
]

const CATEGORY_ICON: Record<string, React.ReactNode> = {
  Page:       <FileText size={13} />,
  Department: <Building2 size={13} />,
  Course:     <GraduationCap size={13} />,
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function Navbar() {
  const [mobileOpen,     setMobileOpen]     = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [searchOpen,     setSearchOpen]     = useState(false)
  const [searchQuery,    setSearchQuery]    = useState('')
  const [scrolled,       setScrolled]       = useState(false)

  const pathname   = usePathname()
  const searchRef  = useRef<HTMLInputElement>(null)
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Real-time filtered results
  const searchResults = useMemo<SearchItem[]>(() => {
    const q = searchQuery.trim().toLowerCase()
    if (!q) return []
    return SEARCH_INDEX.filter(item => item.keywords.includes(q) || item.title.toLowerCase().includes(q)).slice(0, 10)
  }, [searchQuery])

  /* scroll shadow */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  /* close everything on route change */
  useEffect(() => {
    setMobileOpen(false)
    setMobileExpanded(null)
    setActiveDropdown(null)
    setSearchOpen(false)
    setSearchQuery('')
  }, [pathname])

  /* focus search input */
  useEffect(() => {
    if (searchOpen) setTimeout(() => searchRef.current?.focus(), 60)
  }, [searchOpen])

  /* body scroll lock */
  useEffect(() => {
    document.body.style.overflow = searchOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [searchOpen])

  /* escape key */
  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') { setSearchOpen(false); setMobileOpen(false) }
  }, [])
  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [onKeyDown])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  const openDropdown  = (label: string) => { if (hoverTimer.current) clearTimeout(hoverTimer.current); setActiveDropdown(label) }
  const closeDropdown = () => { hoverTimer.current = setTimeout(() => setActiveDropdown(null), 120) }
  const keepDropdown  = () => { if (hoverTimer.current) clearTimeout(hoverTimer.current) }

  const closeSearch = () => { setSearchOpen(false); setSearchQuery('') }

  // Group results by category
  const grouped = useMemo(() => {
    const map: Record<string, SearchItem[]> = {}
    for (const r of searchResults) {
      if (!map[r.category]) map[r.category] = []
      map[r.category].push(r)
    }
    return map
  }, [searchResults])

  return (
    <>
      {/* ═══════════════════════ SEARCH MODAL ═══════════════════════ */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-[9998] flex items-start justify-center"
          style={{ paddingTop: '80px' }}
          onClick={closeSearch}
        >
          {/* Blurred dark backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal */}
          <div
            className="relative w-full max-w-2xl mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden"
            style={{ maxHeight: 'calc(100vh - 120px)' }}
            onClick={e => e.stopPropagation()}
          >
            {/* ── Search bar ── */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100 bg-white sticky top-0 z-10">
              <Search size={20} className="text-[#1e3a8a] shrink-0" />
              <input
                ref={searchRef}
                type="search"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search pages, departments, courses…"
                className="flex-1 text-base text-gray-800 placeholder-gray-400 bg-transparent outline-none"
                aria-label="Search GICEAS website"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="text-gray-400 hover:text-gray-600 transition-colors" aria-label="Clear">
                  <X size={16} />
                </button>
              )}
              <button
                onClick={closeSearch}
                className="ml-1 w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 transition-colors shrink-0"
                aria-label="Close search"
              >
                <X size={16} />
              </button>
            </div>

            <div className="overflow-y-auto" style={{ maxHeight: 'calc(100vh - 220px)' }}>
              {/* ── Real-time results ── */}
              {searchQuery.trim() ? (
                searchResults.length > 0 ? (
                  <div className="py-3">
                    {Object.entries(grouped).map(([category, items]) => (
                      <div key={category}>
                        <div className="flex items-center gap-2 px-5 py-2 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                          <span className="text-[#1e3a8a]">{CATEGORY_ICON[category]}</span>
                          {category}s
                        </div>
                        {items.map((item, i) => (
                          <Link
                            key={`${category}-${i}`}
                            href={item.href}
                            target={(item.href.startsWith('http')) ? '_blank' : undefined}
                            rel={(item.href.startsWith('http')) ? 'noreferrer' : undefined}
                            onClick={closeSearch}
                            className="flex items-center gap-3 px-5 py-3 hover:bg-blue-50 transition-colors group"
                          >
                            <span className="text-xl w-8 text-center shrink-0">{item.icon}</span>
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-medium text-gray-800 group-hover:text-[#1e3a8a] truncate">
                                {item.title}
                              </div>
                              <div className="text-xs text-gray-400 truncate">{item.subtitle}</div>
                            </div>
                            <ArrowRight size={14} className="text-gray-300 group-hover:text-[#1e3a8a] shrink-0 transition-colors" />
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-14 text-center px-6">
                    <Search size={36} className="text-gray-200 mb-3" />
                    <p className="text-gray-500 font-medium">No results for "<span className="text-[#1e3a8a]">{searchQuery}</span>"</p>
                    <p className="text-gray-400 text-sm mt-1">Try searching for departments, courses, or pages</p>
                  </div>
                )
              ) : (
                /* ── Quick links (default state) ── */
                <div className="px-5 py-5">
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4">Quick Links</p>
                  <div className="grid grid-cols-2 gap-2">
                    {QUICK_LINKS.map(link => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={closeSearch}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 hover:bg-blue-50 hover:text-[#1e3a8a] text-gray-700 transition-colors group border border-transparent hover:border-blue-100"
                      >
                        <span className="text-xl">{link.icon}</span>
                        <span className="text-sm font-medium">{link.label}</span>
                        <ArrowRight size={13} className="ml-auto text-gray-300 group-hover:text-[#1e3a8a] transition-colors" />
                      </Link>
                    ))}
                  </div>

                  {/* Popular searches */}
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mt-6 mb-3">Popular Searches</p>
                  <div className="flex flex-wrap gap-2">
                    {['BCA', 'MCA', 'Admission 2026', 'NCC', 'Syllabus', 'IQAC', 'Placement', 'Result'].map(s => (
                      <button
                        key={s}
                        onClick={() => setSearchQuery(s)}
                        className="text-xs px-3 py-1.5 rounded-full bg-blue-50 text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white transition-colors font-medium border border-blue-100"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer hint */}
            <div className="px-5 py-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
              <span>Press <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-[10px] font-mono">Esc</kbd> to close</span>
              <span>{searchResults.length > 0 ? `${searchResults.length} result${searchResults.length > 1 ? 's' : ''}` : 'Type to search'}</span>
            </div>
          </div>
        </div>
      )}

      {/* Skip link */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-[#1e3a8a] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg focus:outline-none">
        Skip to main content
      </a>

      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-xl' : ''}`}>

        {/* ── Row 1: Ticker ── */}
        <div className="bg-[#0f1638] text-white overflow-hidden py-1.5">
          <div className="flex overflow-hidden items-center">
            <span className="shrink-0 bg-orange-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-0.5 z-10 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Latest
            </span>
            <div className="ticker-wrap flex-1 ml-2 overflow-hidden">
              <div className="ticker-inner text-[11px] text-white/80">
                {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
                  <span key={i} className="mx-8">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Row 2: Logo + contact info + search + SU logo ── */}
        <div className={`bg-white border-b border-gray-100 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md' : ''}`}>
          <div className="max-w-screen-xl mx-auto px-4 py-2 flex items-center gap-4">

            {/* GICEAS Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0 group" aria-label="GICEAS Home">
              <div className="w-14 h-14 rounded-xl overflow-hidden shadow border border-gray-100 bg-white flex items-center justify-center group-hover:shadow-md transition-shadow">
                <Image src="/logos/GreenfieldInstituteLogo.png" alt="GICEAS Logo" width={56} height={56} className="object-contain w-full h-full" priority />
              </div>
              <div className="hidden sm:block">
                <div className="text-[#1e3a8a] font-bold text-sm leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                  Greenfield Institute
                </div>
                <div className="text-gray-400 text-[10px] leading-tight tracking-wide">
                  Computer Education & Applied Sciences
                </div>
              </div>
            </Link>

            {/* Divider */}
            <div className="hidden xl:block w-px h-10 bg-gray-200 shrink-0" />

            {/* Contact info block — left of search */}
            <div className="hidden xl:flex flex-col gap-0.5 shrink-0 text-[11px]">
              {/* Phone + email row */}
              <div className="flex items-center gap-2 text-gray-500">
                <Phone size={10} className="text-[#1e3a8a] shrink-0" />
                <a href="tel:02612240170" className="hover:text-[#1e3a8a] transition-colors font-medium">0261-2240170</a>
                <span className="text-gray-300">|</span>
                <a href="tel:9999900001" className="hover:text-[#1e3a8a] transition-colors font-medium">99999 00001</a>
                <span className="text-gray-300 mx-0.5">·</span>
                <Mail size={10} className="text-[#1e3a8a] shrink-0" />
                <a href="mailto:info@greenfield.ac.in" className="hover:text-[#1e3a8a] transition-colors font-medium">info@greenfield.ac.in</a>
              </div>
              {/* Links row */}
              <div className="flex items-center gap-2 text-gray-400">
                <Link href="/admission" className="inline-flex items-center gap-1 bg-orange-500 hover:bg-orange-600 text-white px-2 py-0.5 rounded-full font-semibold transition-colors text-[10px] leading-tight">
                  Admissions Open 2026–27
                </Link>
                <span className="text-gray-200">|</span>
                <Link href="/result" className="hover:text-[#1e3a8a] transition-colors font-medium text-gray-500">Results</Link>
                <span className="text-gray-200">|</span>
                <a href="https://meridianuniversity.ac.in" target="_blank" rel="noreferrer"
                  className="flex items-center gap-0.5 hover:text-[#1e3a8a] transition-colors font-medium text-gray-500">
                  Meridian State University <ExternalLink size={9} className="opacity-60" />
                </a>
              </div>
            </div>

            {/* Spacer */}
            <div className="flex-1" />

            {/* Search trigger */}
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 text-gray-400 hover:border-[#1e3a8a] hover:text-[#1e3a8a] transition-all bg-gray-50 hover:bg-blue-50 min-w-[160px] lg:min-w-[200px]"
              aria-label="Open search"
            >
              <Search size={15} className="shrink-0" />
              <span className="text-sm flex-1 text-left">Search…</span>
              <kbd className="hidden lg:inline-block text-[10px] bg-white border border-gray-200 rounded px-1.5 py-0.5 font-mono text-gray-300">/</kbd>
            </button>

            {/* Meridian State University logo */}
            <a href="https://meridianuniversity.ac.in" target="_blank" rel="noreferrer"
              className="hidden md:flex items-center gap-2 group shrink-0" title="Meridian State University">
              <div className="text-right hidden xl:block">
                <div className="text-[9px] text-gray-400 leading-tight">Affiliated to</div>
                <div className="text-[#1e3a8a] text-xs font-semibold leading-tight group-hover:text-orange-500 transition-colors">
                  Meridian State University
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-white border border-gray-100 flex items-center justify-center group-hover:border-orange-200 transition shadow-sm">
                <Image src="/logos/MeridianStateUniversityLogo.png" alt="Meridian State University" width={48} height={48} className="object-contain w-full h-full p-0.5" priority />
              </div>
            </a>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* ── Row 3: Desktop Nav strip ── */}
        <nav
          className={`hidden lg:block border-b border-gray-200 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md' : 'bg-white'}`}
          aria-label="Main navigation"
        >
          <div className="max-w-screen-xl mx-auto px-4">
            <ul className="flex items-center justify-center flex-wrap">
              {NAV.map((item) => (
                <li key={item.label} className="relative"
                  onMouseEnter={() => item.children ? openDropdown(item.label) : undefined}
                  onMouseLeave={() => item.children ? closeDropdown() : undefined}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-0.5 px-3 py-3.5 text-[13px] font-medium whitespace-nowrap transition-all border-b-2 ${
                      isActive(item.href)
                        ? 'text-[#1e3a8a] border-orange-500 font-semibold'
                        : 'text-gray-700 border-transparent hover:text-[#1e3a8a] hover:border-orange-300'
                    }`}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                    aria-haspopup={item.children ? 'true' : undefined}
                    aria-expanded={item.children ? activeDropdown === item.label : undefined}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown size={12} className={`opacity-50 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.children && (
                    <div
                      onMouseEnter={keepDropdown}
                      onMouseLeave={closeDropdown}
                      className={`absolute top-full left-0 mt-0 min-w-[220px] bg-white border border-gray-100 rounded-b-2xl rounded-tr-2xl shadow-2xl py-2 z-50 transition-all duration-200 origin-top ${
                        activeDropdown === item.label
                          ? 'opacity-100 scale-y-100 pointer-events-auto'
                          : 'opacity-0 scale-y-95 pointer-events-none'
                      }`}
                      role="menu"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          target={(child as any).external ? '_blank' : undefined}
                          rel={(child as any).external ? 'noreferrer' : undefined}
                          role="menuitem"
                          className={`flex items-center justify-between px-4 py-2.5 text-[13px] transition-colors ${
                            isActive(child.href)
                              ? 'bg-blue-50 text-[#1e3a8a] font-semibold'
                              : 'text-gray-700 hover:bg-blue-50 hover:text-[#1e3a8a]'
                          }`}
                          onClick={() => setActiveDropdown(null)}
                        >
                          <span>{child.label}</span>
                          {(child as any).external && <ExternalLink size={10} className="opacity-40 shrink-0 ml-2" />}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* ── Mobile Menu ── */}
        <div
          id="mobile-menu"
          aria-label="Mobile navigation"
          className={`lg:hidden border-t border-gray-100 overflow-y-auto bg-white transition-all duration-300 ${mobileOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
        >
          {/* Mobile search */}
          <div className="px-4 pt-3 pb-2 border-b border-gray-50">
            <button
              onClick={() => { setMobileOpen(false); setSearchOpen(true) }}
              className="w-full flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 text-gray-400 bg-gray-50 text-sm"
            >
              <Search size={15} />
              Search pages & courses…
            </button>
          </div>

          <a href="https://meridianuniversity.ac.in" target="_blank" rel="noreferrer"
            className="flex items-center gap-2.5 px-4 py-3 bg-orange-50 text-orange-700 text-sm font-medium border-b border-orange-100">
            <div className="w-7 h-7 rounded-lg overflow-hidden bg-white border border-orange-200 flex items-center justify-center shrink-0">
              <Image src="/logos/MeridianStateUniversityLogo.png" alt="Meridian State University" width={28} height={28} className="object-contain" />
            </div>
            Meridian State University <ExternalLink size={12} />
          </a>

          {NAV.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <div className={`flex items-stretch border-b border-gray-50 ${isActive(item.href) ? 'bg-blue-50' : ''}`}>
                  <Link
                    href={item.href}
                    className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${isActive(item.href) ? 'text-[#1e3a8a]' : 'text-gray-800 hover:text-[#1e3a8a]'}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  <button
                    className="px-4 text-gray-400 hover:text-[#1e3a8a] border-l border-gray-100"
                    onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                    aria-label={`Toggle ${item.label}`}
                  >
                    <ChevronDown size={15} className={`transition-transform duration-200 ${mobileExpanded === item.label ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={`flex items-center px-4 py-3 text-sm font-medium border-b border-gray-50 transition-colors ${isActive(item.href) ? 'bg-blue-50 text-[#1e3a8a]' : 'text-gray-800 hover:bg-blue-50 hover:text-[#1e3a8a]'}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )}
              {item.children && mobileExpanded === item.label && (
                <div className="bg-gray-50 border-l-[3px] border-orange-400 ml-4" role="menu">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      target={(child as any).external ? '_blank' : undefined}
                      rel={(child as any).external ? 'noreferrer' : undefined}
                      role="menuitem"
                      className={`flex items-center gap-2 px-4 py-2.5 text-sm transition-colors ${isActive(child.href) ? 'text-[#1e3a8a] font-semibold' : 'text-gray-600 hover:text-[#1e3a8a] hover:bg-blue-50'}`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                      {(child as any).external && <ExternalLink size={11} className="opacity-40" />}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="p-4 bg-gray-50 border-t border-gray-100 flex gap-3">
            <Link href="/admission" className="flex-1 text-center btn-primary text-sm py-2.5" onClick={() => setMobileOpen(false)}>Apply Now</Link>
            <Link href="/contact"   className="flex-1 text-center btn-outline  text-sm py-2.5" onClick={() => setMobileOpen(false)}>Contact</Link>
          </div>
        </div>
      </header>
    </>
  )
}
