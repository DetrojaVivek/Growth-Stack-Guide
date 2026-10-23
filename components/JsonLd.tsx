import React from 'react';
import type { BlogPostMeta } from '@/lib/types';

interface JsonLdProps {
  article: BlogPostMeta;
}

export default function JsonLd({ article }: JsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    author: {
      '@type': 'Person',
      name: article.author,
      url: 'https://growthstackguide.com/about/',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Growth Stack Guide',
      url: 'https://growthstackguide.com/',
      logo: {
        '@type': 'ImageObject',
        url: 'https://growthstackguide.com/images/brand/logo.png',
      },
    },
    datePublished: article.date,
    dateModified: article.updatedAt || article.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://growthstackguide.com/blog/${article.slug}/`,
    },
    image: article.featuredImage
      ? `https://growthstackguide.com${article.featuredImage}`
      : 'https://growthstackguide.com/images/guides/freelance-client-onboarding-portal-crm.jpg',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
