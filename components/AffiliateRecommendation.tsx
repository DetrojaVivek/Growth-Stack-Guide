import React from 'react';
import { ExternalLink, Star } from 'lucide-react';

interface AffiliateRecommendationProps {
  toolName: string;
  tagline: string;
  pricing: string;
  affiliateUrl: string;
  verdict: string;
  rating?: number;
}

export default function AffiliateRecommendation({
  toolName,
  tagline,
  pricing,
  affiliateUrl,
  verdict,
  rating = 4.8,
}: AffiliateRecommendationProps) {
  return (
    <div className="my-8 p-6 rounded-2xl bg-white border-2 border-[var(--border-color)] shadow-[var(--shadow-sm)] space-y-4 text-left">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--border-color)] pb-3">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#10B981] block">
            Recommended Tool
          </span>
          <h4 className="font-heading font-extrabold text-lg text-[var(--text-dark)]">
            {toolName}
          </h4>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-xs font-bold text-[var(--primary-yellow-hover)]">
            <Star className="w-4 h-4 fill-current" />
            <span>{rating} / 5</span>
          </div>
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#FAF8F2] text-[var(--text-muted)] border border-[var(--border-color)]">
            {pricing}
          </span>
        </div>
      </div>

      <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
        {tagline}
      </p>

      <div className="p-3.5 rounded-xl bg-[#FAF8F2] border border-[var(--border-color)] text-xs text-[var(--text-dark)] leading-relaxed">
        <strong className="block text-[11px] uppercase tracking-wider text-[var(--text-muted)] mb-0.5">
          Why We Recommend It:
        </strong>
        {verdict}
      </div>

      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <span className="text-[11px] text-[var(--text-light)]">
          Sponsored Link • Supports Growth Stack Guide
        </span>
        <a
          href={affiliateUrl}
          target="_blank"
          rel="sponsored noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[var(--primary-yellow)] hover:bg-[var(--primary-yellow-hover)] text-[var(--text-dark)] font-bold text-xs shadow-xs transition-colors"
        >
          <span>Explore {toolName}</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
