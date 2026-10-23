import React from 'react';
import Link from 'next/link';
import { getAllTopicPillars } from '@/lib/topics';
import { Compass, ArrowRight, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  const pillars = getAllTopicPillars();

  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center py-16 sm:py-24 bg-[var(--bg-main)]">
      <div className="container-custom max-w-2xl mx-auto px-4 text-center space-y-8">
        
        {/* Visual Badge */}
        <div className="w-20 h-20 rounded-3xl bg-[var(--purple-light)] text-[var(--purple-main)] mx-auto flex items-center justify-center font-heading font-extrabold text-3xl shadow-xs">
          404
        </div>

        {/* Messaging */}
        <div className="space-y-3">
          <h1 className="font-heading font-extrabold text-2xl sm:text-4xl text-[var(--text-dark)] tracking-tight">
            Page or Blueprint Not Found
          </h1>
          <p className="text-xs sm:text-base text-[var(--text-muted)] leading-relaxed max-w-lg mx-auto">
            The link you followed may have moved or been updated. You can browse our complete library of free guides or explore one of the 5 official Knowledge Pillars below.
          </p>
        </div>

        {/* Primary Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/blog/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[var(--primary-yellow)] hover:bg-[var(--primary-yellow-hover)] text-[var(--text-dark)] font-bold text-xs sm:text-sm shadow-xs transition-colors"
          >
            <Compass className="w-4 h-4" />
            <span>Browse All Free Guides</span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-5 py-3.5 rounded-full bg-white hover:bg-[#FAF8F2] text-[var(--text-dark)] font-semibold text-xs sm:text-sm border border-[var(--border-color)] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
        </div>

        {/* 5 Pillar Navigation Pills */}
        <div className="pt-6 border-t border-[var(--border-color)] space-y-3 text-left">
          <span className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider block text-center">
            Or Explore by Strategic Pillar
          </span>
          <div className="flex flex-wrap justify-center gap-2">
            {pillars.map((pillar) => (
              <Link
                key={pillar.slug}
                href={`/topics/${pillar.slug}/`}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white hover:bg-[var(--purple-light)] text-[var(--text-dark)] hover:text-[var(--purple-main)] border border-[var(--border-color)] transition-colors shadow-2xs"
              >
                {pillar.title}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
