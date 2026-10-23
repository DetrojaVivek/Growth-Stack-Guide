import React from 'react';
import Link from 'next/link';
import { Download, ArrowRight } from 'lucide-react';

interface ResourceRecommendationProps {
  title: string;
  tagline: string;
  resourceSlug: string;
  badge?: string;
}

export default function ResourceRecommendation({
  title,
  tagline,
  resourceSlug,
  badge = 'Free Download ($0)',
}: ResourceRecommendationProps) {
  return (
    <div className="my-8 p-6 rounded-2xl bg-[#F8F9FD] border border-[var(--border-color)] shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-left">
      <div className="space-y-1.5 max-w-xl">
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#10B981] block">
          {badge}
        </span>
        <h4 className="font-heading font-extrabold text-base sm:text-lg text-[var(--text-dark)]">
          {title}
        </h4>
        <p className="text-xs text-[var(--text-muted)] leading-relaxed">
          {tagline}
        </p>
      </div>

      <Link
        href={`/resources/${resourceSlug}/`}
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--primary-yellow)] hover:bg-[var(--primary-yellow-hover)] text-[var(--text-dark)] font-bold text-xs shadow-xs transition-colors flex-shrink-0"
      >
        <Download className="w-3.5 h-3.5" />
        <span>Get Free Tracker</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </div>
  );
}
