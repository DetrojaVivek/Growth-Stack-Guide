import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllArticles } from '@/lib/content';
import BlogDirectoryClient from '@/components/BlogDirectoryClient';
import { BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Master Guides Library — Operational Blueprints & Systems',
  description:
    'Browse our complete library of 100% free editorial blueprints, Notion systems, and AI workflows for solo creators, freelancers, and solopreneurs.',
  openGraph: {
    title: 'Master Guides Library | Growth Stack Guide',
    description:
      'Field-tested Notion architectures, prompt vaults, and content batching frameworks. 100% free to read without paywalls.',
  },
};

export default function BlogIndexPage() {
  const articles = getAllArticles().map((a) => a.frontmatter);

  return (
    <div className="w-full py-10 sm:py-16 lg:py-20 bg-[var(--bg-main)]">
      <div className="container-custom max-w-7xl mx-auto px-4 sm:px-6 space-y-10 sm:space-y-12">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--text-muted)] text-left">
          <Link href="/" className="hover:text-[var(--text-dark)] transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-[var(--text-dark)]">Master Guides</span>
        </nav>

        {/* Page Header */}
        <header className="space-y-4 text-left border-b border-[var(--border-color)] pb-8 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--purple-light)] text-[var(--purple-main)] text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-4 h-4" />
            <span>100% Free Public Editorial Blueprints</span>
          </div>
          <h1 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[var(--text-dark)] tracking-tight leading-tight">
            Master Guides &amp; Systems Library
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-[var(--text-muted)] leading-relaxed">
            Step-by-step systems, prompt vaults, and relational Notion tutorials designed for solo operators. Zero guru fluff, zero paywalls, and zero forced account creation.
          </p>
        </header>

        {/* Client Interactive Directory */}
        <BlogDirectoryClient articles={articles} />

      </div>
    </div>
  );
}
