import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllResources } from '@/data/resources';
import {
  Sparkles,
  Check,
  Download,
  ShieldCheck,
  ExternalLink,
  Gift,
  HelpCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free Digital Resources & Notion Blueprints | Growth Stack Guide',
  description:
    'Download 100% free Notion templates, AI prompt swipe files, and weekly review SOPs. Delivered instantly to your workspace with zero paywalls.',
  openGraph: {
    title: 'Free Resources & Notion Blueprints | Growth Stack Guide',
    description:
      'Organize your creative workflow for free. Download our flagship AI Creator Productivity Kit and weekly checklists.',
  },
};

export default function ResourcesPage() {
  const resources = getAllResources();

  return (
    <div className="w-full py-10 sm:py-16 lg:py-20 bg-[var(--bg-main)]">
      <div className="container-custom max-w-7xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--text-muted)] text-left">
          <Link href="/" className="hover:text-[var(--text-dark)] transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-[var(--text-dark)]">Resources</span>
        </nav>

        {/* Header */}
        <header className="space-y-4 text-left border-b border-[var(--border-color)] pb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--color-success-bg)] text-[#065F46] text-xs font-bold uppercase tracking-wider">
            <Gift className="w-4 h-4" />
            <span>Featured Digital Assets & Blueprints</span>
          </div>

          <h1 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[var(--text-dark)] tracking-tight leading-tight">
            Free Notion Workspaces, SOPs &amp; AI Prompt Vaults.
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-[var(--text-muted)] leading-relaxed max-w-3xl">
            Practical operational tools you can duplicate into your own workspace in under 60 seconds. Zero forced paid upsells, zero expired trial countdowns.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[var(--text-muted)] pt-2">
            <span className="inline-flex items-center gap-1.5 text-[#10B981]">
              <ShieldCheck className="w-4 h-4" />
              <span>Instant Digital Delivery to Notion</span>
            </span>
            <span className="text-slate-300 hidden sm:inline">&bull;</span>
            <span className="inline-flex items-center gap-1.5 text-[var(--text-dark)]">
              <Sparkles className="w-4 h-4 text-[#D97706]" />
              <span>Tested on Notion Free Tier</span>
            </span>
          </div>
        </header>

        {/* Resources Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((res) => (
            <div
              key={res.slug}
              className="rounded-3xl bg-white border border-[var(--border-color)] p-6 flex flex-col justify-between shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-all hover:border-[var(--border-hover)] text-left group"
            >
              <div className="space-y-5">
                
                {/* Visual Cover */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#F6F3EB] border border-[var(--border-color)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={res.coverImage}
                    alt={res.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[var(--color-success-bg)] text-[#065F46] shadow-xs">
                      {res.badge}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-black/75 backdrop-blur-xs text-white text-xs font-extrabold">
                      Free Access
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <div className="text-xs font-bold text-[var(--purple-main)] uppercase tracking-wider">
                    {res.modulesCount}
                  </div>
                  <h2 className="font-heading font-extrabold text-lg sm:text-xl text-[var(--text-dark)] group-hover:text-[var(--purple-main)] transition-colors">
                    {res.slug === 'ai-creator-productivity-kit' ? (
                      <Link href={`/resources/${res.slug}/`}>
                        {res.title}
                      </Link>
                    ) : (
                      res.title
                    )}
                  </h2>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    {res.tagline}
                  </p>
                </div>

                {/* Features Checklist */}
                <div className="space-y-2 pt-1 border-t border-[var(--border-color)]">
                  <ul className="space-y-1.5">
                    {res.features.slice(0, 3).map((feat) => (
                      <li key={feat} className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                        <div className="w-3.5 h-3.5 rounded-full bg-[var(--color-success-bg)] text-[var(--color-success)] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="line-clamp-2">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Actions */}
              <div className="pt-6 border-t border-[var(--border-color)] mt-6 flex flex-col gap-2.5">
                {res.slug === 'ai-creator-productivity-kit' ? (
                  <Link
                    href={`/resources/${res.slug}/`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[var(--bg-main)] hover:bg-[#F0ECE1] text-[var(--text-dark)] font-bold text-xs border border-[var(--border-color)] transition-colors text-center"
                  >
                    <span>Read Full Guide &amp; Details</span>
                  </Link>
                ) : null}

                <a
                  href={res.gumroadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[var(--primary-yellow)] hover:bg-[var(--primary-yellow-hover)] text-[var(--text-dark)] font-bold text-xs shadow-xs transition-all text-center"
                >
                  <Download className="w-4 h-4" />
                  <span>Get Notion Template</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </div>

            </div>
          ))}
        </section>

        {/* Why 100% Free Section */}
        <section className="p-6 sm:p-10 rounded-3xl bg-white border border-[var(--border-color)] text-left space-y-4 shadow-xs">
          <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-[var(--text-dark)]">
            Why We Offer These Systems for Free
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed max-w-3xl">
            We believe the best way to earn your long-term trust is by giving away our best foundational systems for free. If our free Notion workspaces and prompt vaults save you 5 to 10 hours this week, you might later consider our advanced $19 Creator OS or check out our recommended software tools. There are zero forced paywalls or bait-and-switch countdown timers.
          </p>
        </section>

      </div>
    </div>
  );
}
