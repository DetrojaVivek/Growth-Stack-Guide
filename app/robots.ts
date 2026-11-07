import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/search/', '/search'],
      },
      {
        userAgent: 'Pinterestbot',
        allow: '/',
      },
    ],
    sitemap: 'https://growthstackguide.com/sitemap.xml',
  };
}
