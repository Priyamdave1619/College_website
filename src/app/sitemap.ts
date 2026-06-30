import { MetadataRoute } from 'next'
import { NAV, DEPARTMENTS } from '@/lib/data'

const BASE_URL = 'https://www.greenfield.ac.in'

/**
 * Auto-generated sitemap.xml for GICEAS website.
 * Place this file at: src/app/sitemap.ts
 * Next.js will serve it at /sitemap.xml automatically.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // Static top-level routes
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/about/history`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${BASE_URL}/about/vision-mission`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${BASE_URL}/about/chairman-message`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${BASE_URL}/about/principal-message`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${BASE_URL}/about/working-committee`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE_URL}/about/awards`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/about/donors`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${BASE_URL}/about/principals`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },

    { url: `${BASE_URL}/academic`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/academic/courses`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/academic/fees`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/academic/syllabus`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/academic/accreditation`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${BASE_URL}/academic/aqar`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE_URL}/academic/iqac`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE_URL}/academic/nirf`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${BASE_URL}/academic/gsirf`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },

    { url: `${BASE_URL}/departments`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/campus`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/students`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/students/scholarship`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/students/anti-ragging`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE_URL}/students/forms`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    { url: `${BASE_URL}/activities`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/activities/nss`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/activities/ncc`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/activities/cultural`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/activities/sports`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },

    { url: `${BASE_URL}/placement`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/research`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/research/papers`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    { url: `${BASE_URL}/gallery`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/news`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${BASE_URL}/admission`, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE_URL}/result`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/icc`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
  ]

  // Dynamic department routes
  const departmentRoutes: MetadataRoute.Sitemap = DEPARTMENTS.map((dept) => ({
    url: `${BASE_URL}/departments/${dept.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticRoutes, ...departmentRoutes]
}
