import React from 'react';
import Link from 'next/link';
import { getAllArticles } from '@/lib/content';
import BlogCard from '@/components/BlogCard';
import { ArrowRight, BookOpen } from 'lucide-react';

export default function LatestGuidesFeed() {
  const articles = getAllArticles().map((a) => a.frontmatter).slice(0, 3);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[var(--bg-main)]">
      <div className="container-custom max-w-7xl mx-auto space-y-8 sm:space-y-12">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-left border-b border-[var(--border-color)] pb-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[var(--border-color)] text-xs font-bold text-[var(--purple-main)] uppercase tracking-wider shadow-xs">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Editorial Blueprints</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[var(--text-dark)] tracking-tight">
              Latest Operational Blueprints
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[var(--text-muted)] leading-relaxed">
              Step-by-step implementation guides to organize your freelance business, automate content creation, and master Notion.
            </p>
          </div>

          <Link
            href="/blog/"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[var(--purple-main)] hover:text-[var(--purple-hover)] hover:underline whitespace-nowrap self-start sm:self-auto"
          >
            <span>Browse All Guides</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <BlogCard key={article.slug} article={article} />
          ))}
        </div>

      </div>
    </section>
  );
}
