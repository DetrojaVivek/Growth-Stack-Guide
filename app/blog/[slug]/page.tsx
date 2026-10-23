import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  getArticleBySlug as getTsxArticleBySlug,
  getAllRegisteredSlugs,
  getRelatedArticles as getTsxRelatedArticles,
} from '@/lib/content-registry';
import {
  getAllArticles as getAllLegacyArticles,
  getArticleBySlug as getLegacyArticleBySlug,
  getRelatedArticles as getLegacyRelatedArticles,
} from '@/lib/content';
import ArticleHeader from '@/components/ArticleHeader';
import JsonLd from '@/components/JsonLd';
import BlogCard from '@/components/BlogCard';
import Callout from '@/components/Callout';
import GuideRenderer from '@/components/guides/GuideRenderer';
import { Clock, Calendar, ShieldCheck, ArrowRight } from 'lucide-react';

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const tsxSlugs = getAllRegisteredSlugs();
  const legacyArticles = getAllLegacyArticles();
  const legacySlugs = legacyArticles.map((a) => a.slug);
  const allSlugs = Array.from(new Set([...tsxSlugs, ...legacySlugs]));

  return allSlugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const tsxArticle = getTsxArticleBySlug(params.slug);
  if (tsxArticle) {
    const { meta } = tsxArticle;
    return {
      title: `${meta.title} | Growth Stack Guide`,
      description: meta.description,
      openGraph: {
        title: meta.title,
        description: meta.description,
        type: 'article',
        publishedTime: meta.date,
        modifiedTime: meta.updatedAt,
        authors: [meta.author],
        images: [
          {
            url: meta.featuredImage || '/images/guides/freelance-client-onboarding-portal-crm.jpg',
            alt: meta.title,
          },
        ],
      },
    };
  }

  const legacyArticle = await getLegacyArticleBySlug(params.slug);
  if (legacyArticle) {
    return {
      title: `${legacyArticle.frontmatter.title} | Growth Stack Guide`,
      description: legacyArticle.frontmatter.description,
      openGraph: {
        title: legacyArticle.frontmatter.title,
        description: legacyArticle.frontmatter.description,
        type: 'article',
        publishedTime: legacyArticle.frontmatter.date,
        modifiedTime: legacyArticle.frontmatter.updated,
        authors: [legacyArticle.frontmatter.author],
        images: [
          {
            url: legacyArticle.frontmatter.cover || '/images/guides/freelance-client-onboarding-portal-crm.jpg',
            alt: legacyArticle.frontmatter.coverAlt || legacyArticle.frontmatter.title,
          },
        ],
      },
    };
  }

  return {
    title: 'Article Not Found',
  };
}

export default async function BlogPostPage({ params }: ArticlePageProps) {
  // 1. Check Static Typed TSX Content Engine (ADR-007 & architecture.md Section 3)
  const tsxArticle = getTsxArticleBySlug(params.slug);

  if (tsxArticle) {
    const { Component, meta } = tsxArticle;
    const related = getTsxRelatedArticles(meta.slug, meta.category, 3);

    return (
      <main id="main-content" className="w-full min-h-screen py-10 sm:py-16 bg-[var(--bg-main)] min-w-0 max-w-full">
        <div className="max-w-[760px] mx-auto px-4 sm:px-6 space-y-8 sm:space-y-10 min-w-0">
          <JsonLd article={meta} />
          <ArticleHeader meta={meta} />
          <Component />

          {/* Related Articles Section */}
          {related.length > 0 && (
            <section className="space-y-6 text-left border-t border-[var(--border-color)] pt-8 mt-12">
              <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-[var(--text-dark)]">
                Related Master Blueprints
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/blog/${rel.slug}/`}
                    className="p-5 rounded-2xl bg-white border border-[var(--border-color)] hover:border-[var(--purple-main)] shadow-xs transition-all space-y-2 group"
                  >
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--purple-main)] block">
                      {rel.category}
                    </span>
                    <h3 className="font-heading font-bold text-sm sm:text-base text-[var(--text-dark)] group-hover:text-[var(--purple-main)] transition-colors leading-snug">
                      {rel.title}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] line-clamp-2 leading-relaxed">
                      {rel.description}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    );
  }

  // 2. Fallback to Legacy Structured Guides (data/guides/)
  const legacyArticle = await getLegacyArticleBySlug(params.slug);
  if (!legacyArticle) {
    notFound();
  }

  const relatedLegacy = getLegacyRelatedArticles(
    legacyArticle.slug,
    legacyArticle.frontmatter.categorySlug,
    3
  );

  return (
    <article className="w-full py-10 sm:py-16 bg-[var(--bg-main)] min-w-0 max-w-full">
      <div className="max-w-[760px] mx-auto px-4 sm:px-6 space-y-8 sm:space-y-10 min-w-0 max-w-full">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--text-muted)] text-left flex-wrap">
          <Link href="/" className="hover:text-[var(--text-dark)] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/blog/" className="hover:text-[var(--text-dark)] transition-colors">
            Blog
          </Link>
          <span>/</span>
          <Link
            href={`/topics/${legacyArticle.frontmatter.categorySlug}/`}
            className="hover:text-[var(--text-dark)] transition-colors"
          >
            {legacyArticle.frontmatter.category}
          </Link>
        </nav>

        {/* Header */}
        <header className="space-y-4 text-left border-b border-[var(--border-color)] pb-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-[var(--purple-light)] text-[var(--purple-main)] uppercase tracking-wider">
              {legacyArticle.frontmatter.category}
            </span>
            {legacyArticle.frontmatter.difficulty && (
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#FAF8F2] text-[var(--text-dark)] border border-[var(--border-color)]">
                {legacyArticle.frontmatter.difficulty}
              </span>
            )}
            {legacyArticle.frontmatter.readingTime && (
              <span className="text-xs font-semibold text-[var(--text-muted)] flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[var(--text-light)]" />
                <span>{legacyArticle.frontmatter.readingTime} min read</span>
              </span>
            )}
          </div>

          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[var(--text-dark)] tracking-tight leading-tight">
            {legacyArticle.frontmatter.title}
          </h1>

          <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
            {legacyArticle.frontmatter.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[var(--text-muted)] pt-2">
            <span>By <strong className="text-[var(--text-dark)]">Vivek</strong> (Systems Architect)</span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[var(--text-light)]" />
              <time dateTime={legacyArticle.frontmatter.date}>{legacyArticle.frontmatter.date}</time>
            </div>
          </div>
        </header>

        {/* Body Content */}
        {legacyArticle.blocks ? (
          <GuideRenderer blocks={legacyArticle.blocks} />
        ) : (
          <div
            className="prose prose-slate max-w-none text-left"
            dangerouslySetInnerHTML={{ __html: legacyArticle.htmlContent || '' }}
          />
        )}

        {/* Related Articles */}
        {relatedLegacy.length > 0 && (
          <section className="space-y-6 text-left border-t border-[var(--border-color)] pt-8">
            <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-[var(--text-dark)]">
              Related Master Blueprints
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedLegacy.map((rel) => (
                <BlogCard key={rel.slug} article={rel.frontmatter} />
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
