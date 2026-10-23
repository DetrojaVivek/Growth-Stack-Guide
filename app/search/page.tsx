'use client';

import React, { useState, useEffect, useMemo, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { getAllArticles } from '@/lib/content';
import { getAllProducts } from '@/data/products';
import { getAllTools } from '@/data/tools';
import { getAllTopicPillars } from '@/lib/topics';
import { Search, ArrowRight, Sparkles, BookOpen, Layers, Briefcase, Zap, Brain, Target } from 'lucide-react';

function SearchContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    if (initialQuery) {
      setQuery(initialQuery);
    }
  }, [initialQuery]);

  const articles = useMemo(() => getAllArticles(), []);
  const products = useMemo(() => getAllProducts(), []);
  const tools = useMemo(() => getAllTools(), []);
  const pillars = useMemo(() => getAllTopicPillars(), []);

  const normalizedQuery = query.toLowerCase().trim();

  const matchingArticles = useMemo(() => {
    if (!normalizedQuery) return articles.slice(0, 6);
    return articles.filter(
      (a) =>
        a.frontmatter.title.toLowerCase().includes(normalizedQuery) ||
        a.frontmatter.description.toLowerCase().includes(normalizedQuery) ||
        a.frontmatter.tags.some((t) => t.toLowerCase().includes(normalizedQuery))
    );
  }, [articles, normalizedQuery]);

  const matchingProducts = useMemo(() => {
    if (!normalizedQuery) return products.slice(0, 4);
    return products.filter(
      (p) =>
        p.title.toLowerCase().includes(normalizedQuery) ||
        p.description.toLowerCase().includes(normalizedQuery) ||
        p.tagline.toLowerCase().includes(normalizedQuery)
    );
  }, [products, normalizedQuery]);

  const matchingTools = useMemo(() => {
    if (!normalizedQuery) return tools.slice(0, 4);
    return tools.filter(
      (t) =>
        t.name.toLowerCase().includes(normalizedQuery) ||
        t.tagline.toLowerCase().includes(normalizedQuery) ||
        t.category.toLowerCase().includes(normalizedQuery)
    );
  }, [tools, normalizedQuery]);

  const totalResults =
    matchingArticles.length + matchingProducts.length + matchingTools.length;

  return (
    <div className="w-full py-10 sm:py-16 lg:py-20 bg-[var(--bg-main)]">
      <div className="container-custom max-w-5xl mx-auto px-4 sm:px-6 space-y-10 sm:space-y-12">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--text-muted)] text-left">
          <Link href="/" className="hover:text-[var(--text-dark)] transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-[var(--text-dark)]">Search Systems</span>
        </nav>

        {/* Search Header & Input */}
        <div className="space-y-6 text-left max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--purple-light)] text-[var(--purple-main)] text-xs font-bold uppercase tracking-wider">
            <Search className="w-3.5 h-3.5" />
            <span>Search Systems &amp; Blueprints</span>
          </div>

          <h1 className="font-heading font-extrabold text-2xl sm:text-4xl text-[var(--text-dark)] tracking-tight">
            Find the Exact Workflow You Need
          </h1>

          {/* Search Input Box */}
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search Notion templates, AI prompts, client SOPs, software reviews..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full px-5 py-4 pl-12 rounded-2xl bg-white border border-[var(--border-color)] text-sm sm:text-base text-[var(--text-dark)] placeholder-[var(--text-light)] focus:outline-none focus:border-[var(--purple-main)] focus:ring-2 focus:ring-[var(--purple-glow)] shadow-[var(--shadow-sm)] transition-all"
              autoFocus
            />
            <Search className="absolute left-4 top-4 w-5 h-5 text-[var(--text-light)]" />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="absolute right-4 top-4 text-xs font-bold text-[var(--text-muted)] hover:text-[var(--text-dark)] px-2 py-0.5 rounded-md hover:bg-slate-100"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* 0 Results Empty State */}
        {normalizedQuery && totalResults === 0 ? (
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[var(--border-color)] text-center space-y-6 shadow-xs">
            <div className="w-14 h-14 rounded-2xl bg-[var(--primary-yellow-light)] text-[#B45309] mx-auto flex items-center justify-center font-bold text-xl">
              🔍
            </div>
            <div className="space-y-2 max-w-lg mx-auto">
              <h2 className="font-heading font-bold text-lg sm:text-xl text-[var(--text-dark)]">
                No guides or templates found for &quot;{query}&quot;
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                Try searching for broader terms like <em>&quot;Notion&quot;</em>, <em>&quot;client onboarding&quot;</em>, <em>&quot;prompts&quot;</em>, or browse our 5 Knowledge Pillars below.
              </p>
            </div>

            {/* 5 Pillar Pills */}
            <div className="pt-2 flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
              {pillars.map((pillar) => (
                <Link
                  key={pillar.slug}
                  href={`/topics/${pillar.slug}/`}
                  className="px-4 py-2 rounded-full text-xs font-bold bg-[#FAF8F2] hover:bg-[var(--purple-light)] text-[var(--text-dark)] hover:text-[var(--purple-main)] border border-[var(--border-color)] transition-colors"
                >
                  {pillar.title}
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-12">
            
            {/* Matching Editorial Guides */}
            {matchingArticles.length > 0 && (
              <section className="space-y-4 text-left">
                <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-3">
                  <h2 className="font-heading font-extrabold text-lg sm:text-xl text-[var(--text-dark)] flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[var(--purple-main)]" />
                    <span>Editorial Blueprints &amp; Guides ({matchingArticles.length})</span>
                  </h2>
                  <Link href="/blog/" className="text-xs font-bold text-[var(--purple-main)] hover:underline">
                    View All &rarr;
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {matchingArticles.map((article) => (
                    <Link
                      key={article.slug}
                      href={`/blog/${article.slug}/`}
                      className="p-5 rounded-2xl bg-white border border-[var(--border-color)] hover:border-[var(--purple-main)] shadow-xs hover:shadow-sm transition-all group space-y-2 block"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold text-[var(--purple-main)] bg-[var(--purple-light)] px-2.5 py-0.5 rounded-full">
                          {article.frontmatter.category}
                        </span>
                        <span className="text-[11px] text-[var(--text-muted)]">
                          {article.frontmatter.readingTime || 7} min read
                        </span>
                      </div>
                      <h3 className="font-heading font-bold text-sm sm:text-base text-[var(--text-dark)] group-hover:text-[var(--purple-main)] transition-colors line-clamp-2">
                        {article.frontmatter.title}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)] line-clamp-2 leading-relaxed">
                        {article.frontmatter.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Matching Notion Systems */}
            {matchingProducts.length > 0 && (
              <section className="space-y-4 text-left">
                <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-3">
                  <h2 className="font-heading font-extrabold text-lg sm:text-xl text-[var(--text-dark)] flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#D97706]" />
                    <span>Notion Business Systems ({matchingProducts.length})</span>
                  </h2>
                  <Link href="/products/" className="text-xs font-bold text-[var(--purple-main)] hover:underline">
                    View Catalog &rarr;
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {matchingProducts.map((prod) => (
                    <Link
                      key={prod.slug}
                      href={`/products/${prod.slug}/`}
                      className="p-5 rounded-2xl bg-white border border-[var(--border-color)] hover:border-[var(--primary-yellow)] shadow-xs transition-all group flex flex-col justify-between space-y-3"
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)]">
                            {prod.tier}
                          </span>
                          <span className="font-heading font-extrabold text-sm text-[var(--text-dark)]">
                            {prod.priceDisplay}
                          </span>
                        </div>
                        <h3 className="font-heading font-bold text-sm text-[var(--text-dark)] group-hover:text-[#B45309] transition-colors line-clamp-1">
                          {prod.title}
                        </h3>
                        <p className="text-xs text-[var(--text-muted)] line-clamp-2">
                          {prod.tagline}
                        </p>
                      </div>
                      <span className="text-xs font-bold text-[var(--purple-main)] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        <span>Details &rarr;</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Matching Software Decision Guides */}
            {matchingTools.length > 0 && (
              <section className="space-y-4 text-left">
                <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-3">
                  <h2 className="font-heading font-extrabold text-lg sm:text-xl text-[var(--text-dark)] flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#10B981]" />
                    <span>Software &amp; AI Decision Guides ({matchingTools.length})</span>
                  </h2>
                  <Link href="/tools/" className="text-xs font-bold text-[var(--purple-main)] hover:underline">
                    View Reviews &rarr;
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {matchingTools.map((tool) => (
                    <Link
                      key={tool.slug}
                      href={`/tools/${tool.slug}/`}
                      className="p-5 rounded-2xl bg-white border border-[var(--border-color)] hover:border-[#10B981] shadow-xs transition-all group space-y-2 block"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--text-muted)]">
                          {tool.category}
                        </span>
                        <span className="text-xs font-bold text-[#B45309]">
                          ★ {tool.rating}
                        </span>
                      </div>
                      <h3 className="font-heading font-bold text-sm text-[var(--text-dark)] group-hover:text-[#059669] transition-colors">
                        {tool.name} Review
                      </h3>
                      <p className="text-xs text-[var(--text-muted)] line-clamp-2">
                        {tool.tagline}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            )}

          </div>
        )}

      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="w-full py-20 text-center text-sm font-semibold text-[var(--text-muted)]">
          Loading Search Systems...
        </div>
      }
    >
      <SearchContent />
    </Suspense>
  );
}
