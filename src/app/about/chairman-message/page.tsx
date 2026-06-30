import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { Quote } from 'lucide-react'

export const metadata: Metadata = { title: "Chairman's Message" }

export default function ChairmanPage() {
  return (
    <>
      <PageHero title="Chairman's Message" breadcrumbs={[{ label: 'About', href: '/about' }, { label: "Chairman's Message" }]} />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="shrink-0 text-center">
              <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-[#1e3a8a] to-[#0f1638] flex items-center justify-center text-4xl font-bold text-white mx-auto mb-3">AV</div>
              <div className="font-bold text-gray-900">Shri Ashish Vakil</div>
              <div className="text-sm text-gray-500">Chairman, GICEAS</div>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <Quote size={32} className="text-orange-200" />
              <p>It was once said that India's Destiny is being shaped in four walls. In classrooms and laboratories, educational institutes work together with students and teachers to develop good human resource for the welfare of mankind. In the present scenario, India's destiny is shaped both inside and outside these walls.</p>
              <p>The institution of Greenfield Institute of Computer Education and Applied Sciences (GICEAS) has always committed itself to the highest ideals of science education. In keeping with the spirit of our founder, Swami Devananda, we believe that education is a powerful means of transforming lives and societies.</p>
              <p>Over the past four decades, GICEAS has grown from a modest science college into a vibrant institution of learning, research, and character development. We have produced graduates who have gone on to distinguished careers in science, technology, medicine, industry, and public service.</p>
              <p>I wish every student at GICEAS great success not just in exams, but in life — in their capacity to contribute meaningfully to their families, communities, and the nation. My doors are always open to you.</p>
              <p className="font-semibold text-gray-800">With warm regards and good wishes,<br />Shri Ashish Vakil<br /><span className="text-sm font-normal text-gray-500">Chairman, Greenfield Institute</span></p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
