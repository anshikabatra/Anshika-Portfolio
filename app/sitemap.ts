import type { MetadataRoute } from 'next'

const BASE = 'https://anshikabatra.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: BASE, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE}/more`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/resume`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ]
}
