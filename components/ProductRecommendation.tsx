import React from 'react';
import Link from 'next/link';
import { Layers, ArrowRight, ExternalLink } from 'lucide-react';

interface ProductRecommendationProps {
  title: string;
  tagline: string;
  priceDisplay: string;
  productSlug: string;
  gumroadUrl: string;
  features: string[];
}

export default function ProductRecommendation({
  title,
  tagline,
  priceDisplay,
  productSlug,
  gumroadUrl,
  features,
}: ProductRecommendationProps) {
  return (
    <div className="my-8 p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-white to-[#FAF8F2] border-2 border-[var(--border-color)] shadow-[var(--shadow-sm)] space-y-4 text-left">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--border-color)] pb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-[var(--purple-light)] text-[var(--purple-main)] flex items-center justify-center flex-shrink-0">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--purple-main)] block">
              Pre-Built Notion Operating System
            </span>
            <h4 className="font-heading font-extrabold text-lg text-[var(--text-dark)]">
              {title}
            </h4>
          </div>
        </div>

        <span className="font-heading font-extrabold text-lg text-[var(--text-dark)] self-start sm:self-auto">
          {priceDisplay}
        </span>
      </div>

      <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
        {tagline}
      </p>

      {features.length > 0 && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[var(--text-dark)]">
          {features.map((feat, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--purple-main)] flex-shrink-0" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="pt-3 border-t border-[var(--border-color)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <Link
          href={`/products/${productSlug}/`}
          className="text-xs font-bold text-[var(--text-dark)] hover:text-[var(--purple-main)] inline-flex items-center gap-1"
        >
          <span>View system specifications</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>

        <a
          href={gumroadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[var(--primary-yellow)] hover:bg-[var(--primary-yellow-hover)] text-[var(--text-dark)] font-bold text-xs shadow-xs transition-colors"
        >
          <span>Get System on Gumroad</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
