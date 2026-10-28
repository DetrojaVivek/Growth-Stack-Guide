import React from 'react';
import Link from 'next/link';
import type { BlogPostMeta } from '@/lib/types';
import { Clock, Calendar, ShieldCheck, Info } from 'lucide-react';
import { getTopicPillarBySlug } from '@/data/topics';

interface ArticleHeaderProps {
  meta: BlogPostMeta;
}

export default function ArticleHeader({ meta }: ArticleHeaderProps) {
  const pillar = getTopicPillarBySlug(meta.category);

  return (
    <header className="space-y-5 text-left border-b border-[var(--border-color)] pb-8">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--text-muted)] flex-wrap">
        <Link href="/" className="hover:text-[var(--text-dark)] transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/topics/" className="hover:text-[var(--text-dark)] transition-colors">
          Topics
        </Link>
        <span>/</span>
        <Link
          href={`/topics/${meta.category}/`}
          className="hover:text-[var(--text-dark)] transition-colors"
          style={{ color: pillar?.accentColor }}
        >
          {pillar?.title || meta.category}
        </Link>
      </nav>

      {/* Meta Badges */}
      <div className="flex flex-wrap items-center gap-2">
        <span
          className="text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider"
          style={{
            backgroundColor: pillar?.accentBg || '#F3F0FF',
            color: pillar?.accentColor || '#6C4DFF',
          }}
        >
          {pillar?.categoryName || meta.category}
        </span>
        <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#FAF8F2] text-[var(--text-dark)] border border-[var(--border-color)]">
          Depth Level {meta.depthLevel}/5
        </span>
        <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#FAF8F2] text-[var(--text-muted)] border border-[var(--border-color)]">
          {meta.intentLevel}
        </span>
      </div>

      {/* Article H1 Headline */}
      <h1 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-[var(--text-dark)] tracking-tight leading-[1.2]">
        {meta.title}
      </h1>

      {/* Meta Byline: Author, Dates, Reading Time */}
      <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-semibold text-[var(--text-muted)] pt-1">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-full bg-[var(--purple-main)] text-white text-[10px] font-bold flex items-center justify-center">
            V
          </div>
          <span>
            By <strong className="text-[var(--text-dark)]">Vivek</strong> (Systems Architect)
          </span>
        </div>
        <span>•</span>
        <div className="flex items-center gap-1">
          <Calendar className="w-3.5 h-3.5 text-[var(--text-light)]" />
          <time dateTime={meta.date}>{meta.date}</time>
        </div>
        {meta.updatedAt && (
          <>
            <span>•</span>
            <span className="text-[var(--color-success)]">Updated {meta.updatedAt}</span>
          </>
        )}
        <span>•</span>
        <div className="flex items-center gap-1">
          <Clock className="w-3.5 h-3.5 text-[var(--text-light)]" />
          <span>{meta.readingTime} min read</span>
        </div>
      </div>

      {/* Quick Problem Solved Hook */}
      <div className="p-4 rounded-xl bg-white border border-[var(--border-color)] shadow-xs flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-[var(--color-success)] flex-shrink-0 mt-0.5" />
        <div className="space-y-0.5 text-xs sm:text-sm">
          <strong className="text-[var(--text-dark)] block">Operational Problem Solved:</strong>
          <span className="text-[var(--text-muted)] leading-relaxed">{meta.problemSolved}</span>
        </div>
      </div>

      {/* Inline FTC Editorial & Affiliate Disclosure */}
      <div className="p-3.5 rounded-xl bg-[#F8F9FD] border border-[var(--border-color)] text-left flex items-start gap-2.5 text-xs text-[var(--text-muted)]">
        <Info className="w-4 h-4 text-[var(--purple-main)] flex-shrink-0 mt-0.5" />
        <p className="leading-relaxed text-[11px] sm:text-xs">
          <strong className="text-[var(--text-dark)] font-semibold">Editorial Integrity &amp; Reader Support:</strong> Growth Stack Guide is supported by our readers. When you purchase tools or services through our links, we may earn an affiliate commission at zero additional cost to you. We strictly recommend software architectures and operational systems we have personally deployed and stress-tested. <Link href="/affiliate-disclosure/" className="text-[var(--purple-main)] underline hover:text-[var(--text-dark)] font-medium transition-colors">Read our full editorial policy</Link>.
        </p>
      </div>
    </header>
  );
}
