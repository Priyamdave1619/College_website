'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  ChevronRight, GraduationCap, FlaskConical, Users, Award,
  Target, Rocket, Heart, Monitor, Microscope, Dna, Leaf,
  Beaker, BookOpen, Building2, Calendar, Newspaper, Phone,
  MapPin, Mail, ArrowRight, Quote, ExternalLink, Star, CheckCircle,
  TrendingUp, Globe, Lightbulb
} from 'lucide-react'
import { DEPARTMENTS, EVENTS, NEWS, SITE } from '@/lib/data'

// ── Hero ──────────────────────────────────────────────────────
const slides = [
  {
    heading: "Shaping Tomorrow's Scientists & Innovators",
    sub: "A constituent college of Meridian State University, Surat — where rigorous science meets modern pedagogy.",
    cta: "Explore Programmes",
    ctaHref: "/academic/courses",
    bg: "from-[#1e3a8a] via-[#1a337a] to-[#0f1638]",
    tag: "Science · Technology · Research",
  },
  {
    heading: "40+ Years of Academic Excellence",
    sub: "Founded in the service of humanity, GICEAS nurtures the next generation of scientists, researchers, and innovators.",
    cta: "Our History",
    ctaHref: "/about/history",
    bg: "from-[#0f766e] via-[#0d6b62] to-[#1e3a8a]",
    tag: "Legacy · Innovation · Community",
  },
  {
    heading: "Research That Shapes the Future",
    sub: "State-of-the-art laboratories and dedicated research guides empower students and faculty to contribute to global knowledge.",
    cta: "Research & Publications",
    ctaHref: "/research",
    bg: "from-[#7c3aed] via-[#6d28d9] to-[#1e3a8a]",
    tag: "Discovery · Publication · Impact",
  },
]

const stats = [
  { icon: GraduationCap, value: "40+", label: "Years of Excellence" },
  { icon: FlaskConical, value: "8", label: "Departments" },
  { icon: Users, value: "3000+", label: "Alumni Worldwide" },
  { icon: Award, value: "NAAC", label: "Accredited" },
]

function Hero() {
  const [active, setActive] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % slides.length), 6000)
    return () => clearInterval(t)
  }, [])
  const s = slides[active]
  return (
    <section className={`relative flex flex-col bg-gradient-to-br ${s.bg} transition-[background] duration-1000`}>
      <div className="absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="relative flex-1 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
              <span className="text-white/90 text-sm font-medium">{s.tag}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">{s.heading}</h1>
            <p className="text-lg text-white/75 mb-8 max-w-2xl leading-relaxed">{s.sub}</p>
            <div className="flex flex-wrap gap-4">
              <Link href={s.ctaHref} className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-7 py-3.5 rounded-xl font-semibold transition-all hover:shadow-xl hover:shadow-orange-500/30">
                {s.cta} <ChevronRight size={18} />
              </Link>
              <Link href="/admission" className="flex items-center gap-2 border-2 border-white/40 hover:border-white text-white px-7 py-3.5 rounded-xl font-semibold transition-all hover:bg-white/10">
                Apply Now 2026–27
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Slide dots */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-3">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setActive(i)}
            className={`rounded-full transition-all duration-300 ${i === active ? 'w-2.5 h-8 bg-orange-400' : 'w-2.5 h-2.5 bg-white/30 hover:bg-white/60'}`} />
        ))}
      </div>
      {/* Stats bar */}
      <div className="relative bg-black/20 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-3 text-white">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <Icon size={20} className="text-orange-300" />
              </div>
              <div>
                <div className="text-2xl font-bold leading-tight">{value}</div>
                <div className="text-xs text-white/60">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── News Ticker ───────────────────────────────────────────────
const tickerItems = [
  "🎉 Merit List 2026-27 Published – Check Admission Corner",
  "📢 Examination Timetable for Semester V & VI Available",
  "🏅 Mansi Arora Awarded by Director General NCC",
  "🌿 World Environment Day Quiz – Register Now",
  "💼 CS Placement Drive – Contact the Placement Cell",
  "📝 Admissions Open for 2026-27 – Apply Online",
]

function NewsTicker() {
  return (
    <div className="bg-[#1e3a8a] text-white py-2.5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex items-center gap-4">
        <span className="shrink-0 bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Latest</span>
        <div className="ticker-wrap flex-1">
          <div className="ticker-inner text-sm">
            {tickerItems.join("   ·   ")}&nbsp;&nbsp;&nbsp;&nbsp;{tickerItems.join("   ·   ")}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Vision Mission ────────────────────────────────────────────
const vmCards = [
  { icon: Target, title: "Our Vision", color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100", text: "Aspiring for excellence through world-class education, research and innovation in contemporary and prospective sciences in the service of humanity." },
  { icon: Rocket, title: "Our Mission", color: "text-orange-600", bg: "bg-orange-50", border: "border-orange-100", text: "To facilitate a diverse spectrum of science education programmes through modern pedagogical approaches for nurturing quality research of international standards." },
  { icon: Heart, title: "Our Values", color: "text-teal-600", bg: "bg-teal-50", border: "border-teal-100", text: "Integrity, inclusivity, scientific curiosity, and a deep commitment to social responsibility drive everything we do at GICEAS." },
]

function VisionMission() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="section-label">Who We Are</p>
          <h2 className="section-title text-4xl">Vision, Mission & Values</h2>
          <div className="section-bar mx-auto" />
        </div>
        <div className="grid md:grid-cols-3 gap-7">
          {vmCards.map(({ icon: Icon, title, color, bg, border, text }) => (
            <div key={title} className={`rounded-2xl p-8 border ${border} ${bg} hover:shadow-lg transition-shadow`}>
              <div className={`inline-flex p-3.5 rounded-2xl ${bg} border ${border} mb-5 shadow-sm`}>
                <Icon size={26} className={color} />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${color}`}>{title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── About Strip ───────────────────────────────────────────────
function AboutStrip() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="section-label">Established 1984</p>
          <h2 className="section-title text-4xl">About GICEAS</h2>
          <div className="section-bar" />
          <p className="text-gray-600 leading-relaxed mb-4">
            Greenfield Institute of Computer Education and Applied Sciences (GICEAS) is a premier constituent college of Meridian State University, located in the heart of Surat, Gujarat. Founded with the mission to uplift society through scientific education, GICEAS has nurtured thousands of graduates who today contribute meaningfully to science, technology, and industry.
          </p>
          <p className="text-gray-600 leading-relaxed mb-7">
            The institute offers undergraduate and postgraduate programmes in Computer Science, Microbiology, Biotechnology, Environmental Science, Chemistry, and Allied Sciences — all delivered through state-of-the-art laboratories, experienced faculty, and an ethos of research-driven learning.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-7">
            {[
              { label: "NAAC Accredited", icon: CheckCircle },
              { label: "NIRF Ranked", icon: TrendingUp },
              { label: "International Reach", icon: Globe },
              { label: "Research Focus", icon: Lightbulb },
            ].map(({ label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <Icon size={16} className="text-orange-500" /> {label}
              </div>
            ))}
          </div>
          <div className="flex gap-3">
            <Link href="/about" className="btn-navy text-sm">Read More</Link>
            <Link href="/contact" className="btn-outline text-sm">Contact Us</Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { v: "40+", l: "Years of Legacy", c: "bg-[#1e3a8a] text-white" },
            { v: "8", l: "Departments", c: "bg-orange-500 text-white" },
            { v: "500+", l: "Students per year", c: "bg-teal-600 text-white" },
            { v: "100+", l: "Faculty & Staff", c: "bg-purple-600 text-white" },
            { v: "3000+", l: "Alumni Network", c: "bg-emerald-600 text-white" },
            { v: "20+", l: "Research Papers/yr", c: "bg-rose-600 text-white" },
          ].map(({ v, l, c }) => (
            <div key={l} className={`${c} rounded-2xl p-5 text-center`}>
              <div className="text-3xl font-bold mb-1">{v}</div>
              <div className="text-xs opacity-80">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Departments ───────────────────────────────────────────────
const deptIcons: Record<string, React.ElementType> = {
  'computer-science': Monitor,
  microbiology: Microscope,
  biotechnology: Dna,
  'environmental-science': Leaf,
  chemistry: FlaskConical,
  allied: Beaker,
  library: BookOpen,
  admin: Building2,
}

function Departments() {
  const depts = [
    ...DEPARTMENTS,
    { slug: 'library', name: 'Library', color: '#e11d48', bg: 'bg-rose-50', border: 'border-rose-200', icon: '📚', programs: ['Digital Resources', 'Reference Services'], about: '', labs: [], faculty: 3 },
    { slug: 'admin', name: 'Administration', color: '#6b7280', bg: 'bg-gray-50', border: 'border-gray-200', icon: '🏛️', programs: ['College Administration'], about: '', labs: [], faculty: 10 },
  ]
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="section-label">Academic Excellence</p>
          <h2 className="section-title text-4xl">Our Departments</h2>
          <div className="section-bar mx-auto" />
          <p className="text-gray-500 max-w-lg mx-auto text-sm">Eight departments, one mission: to nurture science that serves humanity.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {depts.map((d) => {
            const Icon = deptIcons[d.slug] || FlaskConical
            return (
              <Link key={d.slug} href={`/departments/${d.slug}`}
                className="card card-hover p-6 group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: d.color + '20' }}>
                  <Icon size={22} style={{ color: d.color }} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#1e3a8a] transition-colors">{d.name}</h3>
                <div className="flex flex-wrap gap-1 mb-3">
                  {d.programs.slice(0, 2).map(p => (
                    <span key={p} className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{p}</span>
                  ))}
                </div>
                <div className="text-[#1e3a8a] text-sm font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore <ArrowRight size={14} />
                </div>
              </Link>
            )
          })}
        </div>
        <div className="text-center mt-8">
          <Link href="/departments" className="btn-outline text-sm">View All Departments</Link>
        </div>
      </div>
    </section>
  )
}

// ── Events & News ─────────────────────────────────────────────
const catColors: Record<string, string> = {
  Environment: 'bg-green-100 text-green-700',
  Seminar: 'bg-blue-100 text-blue-700',
  Career: 'bg-purple-100 text-purple-700',
  NSS: 'bg-orange-100 text-orange-700',
  Exhibition: 'bg-pink-100 text-pink-700',
  Research: 'bg-rose-100 text-rose-700',
  Achievement: 'bg-yellow-100 text-yellow-700',
  Admissions: 'bg-teal-100 text-teal-700',
  Placement: 'bg-indigo-100 text-indigo-700',
}

function EventsNews() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Events */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="section-label">What's On</p>
                <h2 className="section-title text-3xl">Recent Events</h2>
                <div className="section-bar" />
              </div>
              <Link href="/activities" className="text-sm text-[#1e3a8a] font-semibold hover:text-orange-500 transition-colors flex items-center gap-1">
                All Events <ArrowRight size={14} />
              </Link>
            </div>
            <div className="space-y-3">
              {EVENTS.map((e, i) => (
                <div key={i} className="card p-4 flex gap-4 group cursor-pointer hover:border-orange-200">
                  <div className="w-10 h-10 rounded-xl bg-[#1e3a8a]/8 flex items-center justify-center shrink-0 group-hover:bg-[#1e3a8a] transition-colors">
                    <Calendar size={17} className="text-[#1e3a8a] group-hover:text-white transition-colors" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${catColors[e.category] || 'bg-gray-100 text-gray-600'}`}>{e.category}</span>
                      <span className="text-[10px] text-gray-400">{e.date}</span>
                    </div>
                    <p className="text-sm font-medium text-gray-800 group-hover:text-[#1e3a8a] transition-colors leading-snug line-clamp-2">{e.title}</p>
                    <p className="text-[10px] text-gray-400 mt-1">{e.dept}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* News */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="section-label">Updates</p>
                <h2 className="section-title text-3xl">News & Notices</h2>
                <div className="section-bar" />
              </div>
              <Link href="/news" className="text-sm text-[#1e3a8a] font-semibold hover:text-orange-500 transition-colors flex items-center gap-1">
                All News <ArrowRight size={14} />
              </Link>
            </div>
            <div className="space-y-3 mb-6">
              {NEWS.map((n, i) => (
                <div key={i} className="card p-4 flex gap-4 group cursor-pointer hover:border-orange-200">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center shrink-0 group-hover:bg-orange-500 transition-colors">
                    <Newspaper size={17} className="text-orange-500 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${catColors[n.category] || 'bg-gray-100 text-gray-600'}`}>{n.category}</span>
                      <span className="text-[10px] text-gray-400">{n.date}</span>
                    </div>
                    <p className="text-sm font-medium text-gray-800 group-hover:text-[#1e3a8a] transition-colors leading-snug">{n.title}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Quick access */}
            <div className="rounded-2xl bg-gradient-to-br from-[#1e3a8a] to-[#0f766e] p-5 text-white">
              <h4 className="font-bold mb-3 text-sm uppercase tracking-wider">Quick Access</h4>
              <div className="grid grid-cols-2 gap-2">
                {[['Admission Corner', '/admission'], ['Exam Results', '/result'], ['Exam Timetable', '/students/timetable'], ['Fees Payment', 'https://fees.greenfield.ac.in']].map(([l, h]) => (
                  <a key={l} href={h} className="text-xs bg-white/10 hover:bg-white/20 rounded-xl px-3 py-2.5 text-center font-medium transition-colors">{l}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Messages ──────────────────────────────────────────────────
function Messages() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="section-label">Leadership</p>
          <h2 className="section-title text-4xl">Words from Our Leaders</h2>
          <div className="section-bar mx-auto" />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              role: "Chairman's Message", name: "Shri Ashish Vakil", title: "Chairman, GICEAS",
              initials: "AV", grad: "from-[#1e3a8a] to-[#0f1638]",
              text: "It was once said that India's Destiny is being shaped in four walls. In classrooms and laboratories, educational institutes work together with students and teachers to develop good human resource for the welfare of mankind. In the present scenario, India's destiny is shaped both inside and outside these walls — and GICEAS stands at the forefront of that transformation.",
              href: "/about/chairman-message",
            },
            {
              role: "Principal's Message", name: "Dr. A. Mehta", title: "Principal, GICEAS",
              initials: "CD", grad: "from-[#0f766e] to-[#1e3a8a]",
              text: "Dear Parents, students and well-wishers of the GICEAS family — my prayerful greetings to all of you. I would like to express my deep gratitude for your constant support, love and concern towards the college which enables and encourages us to keep moving forward in our pursuit of academic excellence and student-centred growth.",
              href: "/about/principal-message",
            },
          ].map(m => (
            <div key={m.role} className="card overflow-hidden">
              <div className={`bg-gradient-to-r ${m.grad} p-6 flex items-center gap-4`}>
                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-xl font-bold text-white shrink-0">
                  {m.initials}
                </div>
                <div>
                  <div className="text-orange-300 text-[10px] font-bold uppercase tracking-widest mb-0.5">{m.role}</div>
                  <div className="text-white font-bold text-lg leading-tight">{m.name}</div>
                  <div className="text-white/60 text-xs">{m.title}</div>
                </div>
              </div>
              <div className="p-6">
                <Quote size={26} className="text-orange-200 mb-3" />
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">{m.text}</p>
                <Link href={m.href} className="mt-4 inline-flex items-center gap-1 text-[#1e3a8a] font-semibold text-sm hover:text-orange-500 transition-colors">
                  Read Full Message <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Campus ────────────────────────────────────────────────────
const campusItems = [
  { icon: FlaskConical, name: "Laboratories", desc: "Modern labs for hands-on experiments across all science disciplines." },
  { icon: BookOpen, name: "Library", desc: "Extensive print & digital resources for research and academics." },
  { icon: Star, name: "Sports Ground", desc: "Multi-sport facilities and inter-collegiate competitions." },
  { icon: Users, name: "Seminar Hall", desc: "Audio-visual equipped halls for guest lectures and events." },
  { icon: Building2, name: "Hostel", desc: "Safe, comfortable on-campus accommodation for outstation students." },
  { icon: GraduationCap, name: "NCC / NSS", desc: "Character building through discipline, service and leadership." },
  { icon: Award, name: "Canteen", desc: "Nutritious, affordable meals served throughout the college day." },
  { icon: Monitor, name: "Computer Labs", desc: "High-speed internet-connected labs available to all students." },
]

function Campus() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="section-label">Life at GICEAS</p>
          <h2 className="section-title text-4xl">Campus Facilities</h2>
          <div className="section-bar mx-auto" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {campusItems.map(({ icon: Icon, name, desc }) => (
            <div key={name} className="card card-hover p-6 text-center group cursor-pointer">
              <div className="w-12 h-12 mx-auto rounded-xl bg-[#1e3a8a]/8 flex items-center justify-center mb-4 group-hover:bg-[#1e3a8a] transition-colors">
                <Icon size={22} className="text-[#1e3a8a] group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-1.5">{name}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/campus" className="btn-navy text-sm">Explore Campus</Link>
        </div>
      </div>
    </section>
  )
}

// ── CTA ───────────────────────────────────────────────────────
function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1e3a8a] via-[#172057] to-[#0f1638] relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-orange-500/10 pointer-events-none" />
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <p className="text-orange-300 font-semibold text-xs uppercase tracking-widest mb-3">Begin Your Journey</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">Admissions Open 2026–27</h2>
        <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
          Explore our undergraduate and postgraduate science programmes. Take the first step toward a rewarding career in research, technology, and innovation.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/admission" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3.5 rounded-xl font-bold transition-all hover:shadow-xl hover:shadow-orange-500/30">
            Apply for Admission
          </Link>
          <Link href="/academic/courses" className="border-2 border-white/30 hover:border-white text-white px-8 py-3.5 rounded-xl font-bold transition-all hover:bg-white/10">
            View All Courses
          </Link>
          <a href="tel:9999900001" className="flex items-center gap-2 border border-white/20 hover:border-white/40 text-white/80 hover:text-white px-7 py-3.5 rounded-xl font-medium transition-all">
            <Phone size={16} /> Call Admissions
          </a>
        </div>
      </div>
    </section>
  )
}

// ── Map/Contact strip ─────────────────────────────────────────
function ContactStrip() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {[
          { icon: MapPin, label: "Address", lines: ["123 College Road, Near City Park,", "Sample Nagar, Surat – 395007, Gujarat"] },
          { icon: Phone, label: "Call Us", lines: ["Admin: 9999900001", "Institute: 9999900002 / 9999900003", "Principal: 9999900004"] },
          { icon: Mail, label: "Email", lines: ["info@greenfield.ac.in", "WhatsApp: 9999900005"] },
        ].map(({ icon: Icon, label, lines }) => (
          <div key={label} className="flex gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#1e3a8a]/8 flex items-center justify-center shrink-0">
              <Icon size={20} className="text-[#1e3a8a]" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">{label}</h4>
              {lines.map(l => <p key={l} className="text-sm text-gray-500">{l}</p>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ── Page ──────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <NewsTicker />
      <Hero />
      <VisionMission />
      <AboutStrip />
      <Departments />
      <EventsNews />
      <Messages />
      <Campus />
      <CTA />
      <ContactStrip />
    </>
  )
}
