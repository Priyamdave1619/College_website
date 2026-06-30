import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { FileText, ExternalLink } from 'lucide-react'

export const metadata: Metadata = { title: 'Research Publications', description: 'Published research papers and articles by GICEAS faculty in national and international journals.' }

const papers = [
  { author: 'Dr. [Name] et al.', title: 'Novel Synthesis Approach for Antibacterial Copper Nanoparticles', journal: 'Journal of Nanomaterials', year: '2024', type: 'International', doi: '#' },
  { author: 'Dr. [Name] et al.', title: 'Assessment of Antibiotic Resistance in Clinical Isolates from Surat Hospitals', journal: 'Indian Journal of Microbiology', year: '2024', type: 'National (UGC Listed)', doi: '#' },
  { author: 'Dr. [Name] et al.', title: 'Water Quality Parameters of Tapi River: A Seasonal Study', journal: 'Environmental Science & Technology', year: '2023', type: 'International', doi: '#' },
  { author: 'Dr. [Name] et al.', title: 'Application of Machine Learning in Protein Structure Prediction', journal: 'Bioinformatics Advances', year: '2024', type: 'International', doi: '#' },
  { author: 'Dr. [Name] et al.', title: 'Green Synthesis and Characterization of ZnO Nanoparticles', journal: 'Journal of Chemistry', year: '2023', type: 'International', doi: '#' },
  { author: 'Dr. [Name] et al.', title: 'Microbial Diversity in Mangrove Ecosystems of South Gujarat', journal: 'Current Science', year: '2023', type: 'National (UGC Listed)', doi: '#' },
]

export default function ResearchPapersPage() {
  return (
    <>
      <PageHero title="Research Publications" subtitle="GICEAS faculty publish regularly in UGC-listed and international peer-reviewed journals, contributing to global scientific knowledge."
        badge="Research" breadcrumbs={[{ label: 'Research', href: '/research' }, { label: 'Publications' }]} />
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="space-y-4">
            {papers.map((p, i) => (
              <div key={i} className="card p-5">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${p.type.includes('International') ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>{p.type}</span>
                  <span className="text-xs text-gray-400">{p.year}</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{p.title}</h3>
                <div className="text-xs text-[#1e3a8a] mb-1">{p.author}</div>
                <div className="flex items-center gap-2">
                  <FileText size={12} className="text-gray-400" />
                  <span className="text-xs text-gray-500 italic">{p.journal}</span>
                  <a href={p.doi} className="text-xs text-orange-500 hover:text-orange-600 flex items-center gap-0.5 ml-auto"><ExternalLink size={11} />DOI</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
