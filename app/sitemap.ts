import type { MetadataRoute } from 'next';
import { getAllArticles } from '@/lib/content';
import { getAllTopicPillars } from '@/lib/topics';
import { getAllProducts } from '@/data/products';
import { getAllResources } from '@/data/resources';
import { getAllTools } from '@/data/tools';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://growthstackguide.com';

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/blog/`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/topics/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/resources/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/products/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/tools/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/about/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ];

  const pillarRoutes: MetadataRoute.Sitemap = getAllTopicPillars().map((p) => ({
    url: `${baseUrl}/topics/${p.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  const articleRoutes: MetadataRoute.Sitemap = getAllArticles().map((a) => ({
    url: `${baseUrl}/blog/${a.slug}/`,
    lastModified: new Date(a.frontmatter.updated || a.frontmatter.date),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const productRoutes: MetadataRoute.Sitemap = getAllProducts().map((p) => ({
    url: `${baseUrl}/products/${p.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.75,
  }));

  const resourceRoutes: MetadataRoute.Sitemap = getAllResources().map((r) => ({
    url: `${baseUrl}/resources/${r.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.75,
  }));

  const toolRoutes: MetadataRoute.Sitemap = getAllTools().map((t) => ({
    url: `${baseUrl}/tools/${t.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.75,
  }));

  return [
    ...staticRoutes,
    ...pillarRoutes,
    ...articleRoutes,
    ...productRoutes,
    ...resourceRoutes,
    ...toolRoutes,
  ];
}
