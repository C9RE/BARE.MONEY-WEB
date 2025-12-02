import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bare.money'

  return [
    {
      url: baseUrl,
      lastModified: '2024-11-29',
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/docs`,
      lastModified: '2024-11-29',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: '2024-11-29',
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: '2024-11-29',
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/changelog`,
      lastModified: '2025-12-02',
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/status`,
      lastModified: '2025-12-02',
      changeFrequency: 'daily',
      priority: 0.4,
    },
  ]
}
