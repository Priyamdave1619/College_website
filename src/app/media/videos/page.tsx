import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { Play, Youtube } from 'lucide-react'

export const metadata: Metadata = { title: 'Video Gallery', description: 'Watch GICEAS event recordings, campus tours, student achievements, and faculty lectures.' }

const videos = [
  { title: 'GICEAS Campus Virtual Tour', desc: 'Take a walkthrough of our campus, labs, library, and facilities.', thumb: 'campus-tour', duration: '4:32', ytId: 'dQw4w9WgXcQ' },
  { title: 'Annual Cultural Programme 2024', desc: 'Highlights from our annual cultural fest featuring dance, drama, and music.', thumb: 'cultural', duration: '12:15', ytId: 'dQw4w9WgXcQ' },
  { title: 'Placement Success Stories', desc: 'GICEAS alumni share their career journeys and placement experiences.', thumb: 'placement', duration: '8:47', ytId: 'dQw4w9WgXcQ' },
  { title: 'NSS Blood Donation Drive 2024', desc: 'Documentation of GICEAS NSS unit\'s annual blood donation camp.', thumb: 'nss', duration: '5:20', ytId: 'dQw4w9WgXcQ' },
  { title: 'Research Lab Facilities', desc: 'Tour of GICEAS\'s state-of-the-art laboratories across departments.', thumb: 'lab', duration: '6:55', ytId: 'dQw4w9WgXcQ' },
  { title: 'Chairman\'s Vision – GICEAS 40 Years', desc: 'Chairman Sudhirbhai Shah shares the vision and journey of GICEAS.', thumb: 'chairman', duration: '9:10', ytId: 'dQw4w9WgXcQ' },
]

const colors = ['from-blue-600','from-green-600','from-purple-600','from-red-600','from-teal-600','from-orange-600']

export default function VideosPage() {
  return (
    <>
      <PageHero title="Video Gallery" subtitle="Watch GICEAS's campus life, events, achievements, and more — subscribe to our YouTube channel for the latest videos."
        badge="Media" breadcrumbs={[{ label: 'Gallery', href: '/gallery' }, { label: 'Videos' }]} />
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-end mb-6">
            <a href="https://www.youtube.com/c/greenfieldedu" target="_blank" rel="noreferrer"
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors">
              <Youtube size={16} /> Subscribe on YouTube
            </a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((v, i) => (
              <div key={v.title} className="card overflow-hidden group cursor-pointer">
                <div className={`h-44 bg-gradient-to-br ${colors[i]} to-[#0f1638] flex items-center justify-center relative`}>
                  <div className="w-14 h-14 rounded-full bg-white/20 group-hover:bg-white/30 flex items-center justify-center transition-colors">
                    <Play size={24} className="text-white fill-white ml-1" />
                  </div>
                  <span className="absolute bottom-2 right-2 text-xs text-white bg-black/60 px-2 py-0.5 rounded">{v.duration}</span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 text-sm mb-1 group-hover:text-[#1e3a8a] transition-colors">{v.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
