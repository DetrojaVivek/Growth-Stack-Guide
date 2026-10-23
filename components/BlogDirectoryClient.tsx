'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArticleFrontmatter } from '@/lib/types';
import BlogCard from '@/components/BlogCard';
import { Search, Sparkles } from 'lucide-react';

interface BlogDirectoryClientProps {
  articles: ArticleFrontmatter[];
}

const categories = [
  { label: 'All Blueprints', slug: 'all' },
  { label: 'AI Productivity', slug: 'ai-productivity' },
  { label: 'Notion Systems', slug: 'notion-systems' },
  { label: 'Freelancer Systems', slug: 'freelancer-systems' },
  { label: 'Solopreneur OS', slug: 'solopreneur-operations' },
  { label: 'Software Decision Guides', slug: 'software-guides' },
];

export default function BlogDirectoryClient({ articles }: BlogDirectoryClientProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      selectedCategory === 'all' || article.categorySlug === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8 text-left">
      {/* Search & Filter Controls */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border-b border-[var(--border-color)] pb-6">
        
        {/* Category Pill Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.slug;
            return (
              <button
                key={cat.slug}
                type="button"
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-[var(--text-dark)] text-white shadow-xs'
                    : 'bg-white text-[var(--text-muted)] hover:text-[var(--text-dark)] hover:bg-[#F3EFE6] border border-[var(--border-color)]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Quick Search Input */}
        <div className="relative min-w-[240px] md:min-w-[280px]">
          <input
            type="text"
            placeholder="Search guides by keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-3.5 py-2 pl-9 rounded-xl bg-white border border-[var(--border-color)] text-xs text-[var(--text-dark)] placeholder-[var(--text-light)] focus:outline-none focus:border-[var(--purple-main)] focus:ring-1 focus:ring-[var(--purple-main)] transition-colors shadow-xs"
          />
          <Search className="absolute left-3 top-2.5 w-3.5 h-3.5 text-[var(--text-light)]" />
        </div>
      </div>

      {/* Articles Feed Grid */}
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <BlogCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <div className="p-10 rounded-2xl bg-white border border-[var(--border-color)] text-center space-y-3">
          <p className="text-sm font-semibold text-[var(--text-dark)]">
            No guides match your selected filter or query.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="text-xs font-bold text-[var(--purple-main)] underline hover:text-[var(--purple-hover)]"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Freebie Banner Callout */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-navy)] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm mt-12">
        <div className="space-y-1.5 max-w-xl">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--primary-yellow)] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Pre-Built Notion Pipeline</span>
          </div>
          <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
            Download the Freelancer Follow-Up Tracker
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            1-Tap inbound lead capture dock, Formula 2.0 dynamic urgency radar, and 3 battle-tested follow-up swipe scripts.
          </p>
        </div>
        <Link
          href="/resources/ai-creator-productivity-kit/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--primary-yellow)] hover:bg-[var(--primary-yellow-hover)] text-[var(--text-dark)] font-bold text-xs sm:text-sm shadow-md transition-colors flex-shrink-0"
        >
          <span>Claim Free Follow-Up Tracker</span>
        </Link>
      </div>

    </div>
  );
}
