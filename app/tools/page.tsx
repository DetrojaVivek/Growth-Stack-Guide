import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllTools } from '@/data/tools';
import {
  Wrench,
  ShieldCheck,
  Star,
  ExternalLink,
  ArrowRight,
  Info,
  Check,
  Calendar,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Curated Software & AI Tool Directory | Growth Stack Guide',
  description:
    'Field-tested software recommendations for solo operators. Honest reviews of Notion, Claude, ChatGPT, Make.com, Kit, and Canva with verified pricing and zero sponsored fluff.',
  openGraph: {
    title: 'Curated Software & AI Tool Directory | Growth Stack Guide',
    description:
      'We test every tool in real production workflows. Transparent reviews, verified pricing timestamps, and genuine limitations.',
  },
};

export default function ToolsDirectoryPage() {
  const tools = getAllTools();

  return (
    <div className="w-full py-10 sm:py-16 lg:py-20 bg-[var(--bg-main)]">
      <div className="container-custom max-w-7xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--text-muted)] text-left">
          <Link href="/" className="hover:text-[var(--text-dark)] transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-[var(--text-dark)]">Tools</span>
        </nav>

        {/* Header */}
        <header className="space-y-4 text-left border-b border-[var(--border-color)] pb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--purple-light)] text-[var(--purple-main)] text-xs font-bold uppercase tracking-wider">
            <Wrench className="w-4 h-4" />
            <span>The Solo Operator Tech Stack</span>
          </div>

          <h1 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[var(--text-dark)] tracking-tight leading-tight">
            Curated Software &amp; AI Tools We Actually Use.
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-[var(--text-muted)] leading-relaxed max-w-3xl">
            We don&apos;t review 500 random tools to collect affiliate clicks. These are the 6 foundational software systems that power our own daily publishing, client management, and automation pipelines.
          </p>

          {/* FTC Disclosure Notice */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#FFFBF0] border border-[#FDE68A] text-left flex items-start gap-3 mt-4">
            <Info className="w-5 h-5 text-[#D97706] flex-shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs sm:text-sm text-slate-800">
              <span className="font-bold block text-[#92400E]">
                Editorial Integrity &amp; FTC Affiliate Disclosure
              </span>
              <p className="text-slate-700 leading-relaxed text-xs">
                Some links below are affiliate links. If you choose to upgrade to a paid tier through them, we may receive a commission at zero additional cost to you. We strictly outline limitations alongside strengths and never accept paid placements to artificially alter ratings.{' '}
                <Link href="/affiliate-disclosure/" className="text-[var(--purple-main)] underline font-semibold">
                  Read our full affiliate policy &rarr;
                </Link>
              </p>
            </div>
          </div>
        </header>

        {/* Tools Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <div
              key={tool.slug}
              className="rounded-3xl bg-white border border-[var(--border-color)] p-6 sm:p-7 flex flex-col justify-between shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-all hover:border-[var(--border-hover)] text-left group"
            >
              <div className="space-y-5">
                
                {/* Header Row */}
                <div className="flex items-start justify-between gap-3 border-b border-[var(--border-color)] pb-4">
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--purple-main)]">
                      {tool.category}
                    </span>
                    <h2 className="font-heading font-extrabold text-xl text-[var(--text-dark)] group-hover:text-[var(--purple-main)] transition-colors">
                      <Link href={`/tools/${tool.slug}/`}>
                        {tool.name}
                      </Link>
                    </h2>
                  </div>
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FFFBF0] border border-[#FDE68A] text-[#B45309] text-xs font-bold flex-shrink-0">
                    <Star className="w-3.5 h-3.5 fill-[#F5B82E] text-[#F5B82E]" />
                    <span>{tool.rating.toFixed(1)}</span>
                  </div>
                </div>

                {/* Tagline */}
                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                  {tool.tagline}
                </p>

                {/* Pricing & Verification Badge */}
                <div className="p-3.5 rounded-xl bg-[var(--bg-main)] border border-[var(--border-color)] space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[var(--text-dark)]">{tool.pricingTier}</span>
                    <span className="text-[11px] text-[var(--text-light)] flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{tool.verifiedDate}</span>
                    </span>
                  </div>
                  <p className="text-[11px] text-[var(--text-muted)] leading-normal">
                    {tool.pricingSummary}
                  </p>
                </div>

                {/* Top Pros */}
                <div className="space-y-2 pt-1">
                  <span className="text-xs font-bold text-[var(--text-dark)] uppercase tracking-wider block">
                    Core Strengths:
                  </span>
                  <ul className="space-y-1.5">
                    {tool.pros.slice(0, 2).map((pro) => (
                      <li key={pro} className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                        <Check className="w-3.5 h-3.5 text-[#10B981] flex-shrink-0 mt-0.5 stroke-[3]" />
                        <span className="line-clamp-2">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-[var(--border-color)] mt-6 flex items-center justify-between gap-3">
                <Link
                  href={`/tools/${tool.slug}/`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--text-dark)] hover:text-[var(--purple-main)] transition-colors"
                >
                  <span>In-Depth Review</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href={tool.affiliateUrl}
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[var(--primary-yellow)] hover:bg-[var(--primary-yellow-hover)] text-[var(--text-dark)] font-bold text-xs shadow-xs transition-all"
                >
                  <span>Try {tool.name}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>
          ))}
        </section>

      </div>
    </div>
  );
}
