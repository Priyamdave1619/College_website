import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { Quote } from 'lucide-react'

export const metadata: Metadata = { title: "Principal's Message" }

export default function PrincipalPage() {
  return (
    <>
      <PageHero title="Principal's Message" breadcrumbs={[{ label: 'About', href: '/about' }, { label: "Principal's Message" }]} gradient="bg-gradient-to-br from-[#0f766e] to-[#1e3a8a]" />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="shrink-0 text-center">
              <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-[#0f766e] to-[#1e3a8a] flex items-center justify-center text-4xl font-bold text-white mx-auto mb-3">CD</div>
              <div className="font-bold text-gray-900">Dr. A. Mehta</div>
              <div className="text-sm text-gray-500">Principal, GICEAS</div>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <Quote size={32} className="text-teal-200" />
              <p>Dear Parents, students and well-wishers of the GICEAS family — my prayerful greetings to all of you. I would like to express my deep sentiments of gratitude to every one of you for your constant support, love and concern towards the college which enables and encourages us to keep moving forward.</p>
              <p>At GICEAS, we believe that education is not merely the acquisition of knowledge, but the development of character, critical thinking, and compassion. Our faculty, staff, and support teams work in unison to create an environment where every student can discover their true potential.</p>
              <p>Our modern laboratories, research facilities, and extracurricular programmes are designed to complement classroom learning and ensure that students graduate as well-rounded individuals ready to make their mark in the world.</p>
              <p>I am proud of our students' achievements in academics, research, sports, and social service. We will continue to strive for higher standards, greater inclusivity, and deeper community impact.</p>
              <p>I invite you all to be active participants in this journey of growth and excellence at GICEAS.</p>
              <p className="font-semibold text-gray-800">With warmth and best wishes,<br />Dr. A. Mehta<br /><span className="text-sm font-normal text-gray-500">Principal, Greenfield Institute</span></p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
