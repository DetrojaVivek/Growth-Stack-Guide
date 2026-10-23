import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllProducts } from '@/data/products';
import {
  Sparkles,
  Check,
  ArrowRight,
  ShieldCheck,
  ExternalLink,
  Layers,
  HelpCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Digital Products & Notion Operating Systems | Growth Stack Guide',
  description:
    'Explore our field-tested Notion operating systems, freelancer CRMs, and creator suites. Built for solo operators on Notion free tier with one-time transparent pricing ($7 and $19).',
  openGraph: {
    title: 'Digital Products & Notion Systems | Growth Stack Guide',
    description:
      'Turn digital chaos into structured leverage. Outcome-oriented Notion systems from the $7 Client Pulse CRM to the $19 Client Kickoff Kit.',
  },
};

export default function ProductsPage() {
  const products = getAllProducts();

  return (
    <div className="w-full py-10 sm:py-16 lg:py-20 bg-[var(--bg-main)]">
      <div className="container-custom max-w-7xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--text-muted)]">
          <Link href="/" className="hover:text-[var(--text-dark)] transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-[var(--text-dark)]">Products</span>
        </nav>

        {/* Catalog Header */}
        <header className="space-y-4 text-left border-b border-[var(--border-color)] pb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--primary-yellow-light)] border border-[var(--primary-yellow)]/30 text-[#B45309] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Digital Product Value Ladder</span>
          </div>

          <h1 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[var(--text-dark)] tracking-tight leading-tight">
            Field-Tested Notion Systems for Solo Operators.
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-[var(--text-muted)] leading-relaxed max-w-3xl">
            Clean, relational operating systems built to eliminate digital overwhelm. No recurring subscription lock-ins, no complicated coding setups. Every template runs 100% on Notion&apos;s free plan.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[var(--text-muted)] pt-2">
            <span className="inline-flex items-center gap-1.5 text-[#10B981]">
              <ShieldCheck className="w-4 h-4" />
              <span>One-Time Payment • Instant Gumroad Delivery</span>
            </span>
            <span className="text-slate-300 hidden sm:inline">&bull;</span>
            <span className="inline-flex items-center gap-1.5 text-[var(--text-dark)]">
              <Layers className="w-4 h-4 text-[var(--purple-main)]" />
              <span>Compatible with Free Notion Tier</span>
            </span>
          </div>
        </header>

        {/* Product Cards Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {products.map((product) => (
            <div
              key={product.slug}
              className="rounded-3xl bg-white border border-[var(--border-color)] p-6 sm:p-8 flex flex-col justify-between shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-all hover:border-[var(--border-hover)] text-left group"
            >
              <div className="space-y-6">
                
                {/* Visual Header */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#F6F3EB] border border-[var(--border-color)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={product.coverImage}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-xs"
                      style={{ backgroundColor: product.badgeBg, color: product.badgeColor }}
                    >
                      {product.badge}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-xs text-white text-xs font-extrabold">
                      {product.priceDisplay}
                    </span>
                  </div>
                </div>

                {/* Title & Tagline */}
                <div className="space-y-2">
                  <div className="text-xs font-bold text-[var(--text-light)] uppercase tracking-wider">
                    {product.tier}
                  </div>
                  <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-[var(--text-dark)] group-hover:text-[var(--purple-main)] transition-colors">
                    <Link href={`/products/${product.slug}/`}>
                      {product.title}
                    </Link>
                  </h2>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                    {product.tagline}
                  </p>
                </div>

                {/* Outcome Statement */}
                <div className="p-3.5 rounded-xl bg-[var(--bg-main)] border border-[var(--border-color)]">
                  <p className="text-xs font-medium text-[var(--text-dark)]">
                    <strong className="text-[#B45309]">Target Outcome:</strong> {product.outcome}
                  </p>
                </div>

                {/* Key Features Checklist */}
                <div className="space-y-2 pt-1">
                  <span className="text-xs font-bold text-[var(--text-dark)] uppercase tracking-wider block">
                    What&apos;s Included:
                  </span>
                  <ul className="space-y-2">
                    {product.features.slice(0, 4).map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-xs text-[var(--text-muted)]">
                        <div className="w-4 h-4 rounded-full bg-[var(--color-success-bg)] text-[var(--color-success)] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-8 border-t border-[var(--border-color)] mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href={`/products/${product.slug}/`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[var(--bg-main)] hover:bg-[#F0ECE1] text-[var(--text-dark)] font-bold text-xs border border-[var(--border-color)] transition-colors flex-1"
                >
                  <span>View Full Breakdown</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href={product.gumroadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[var(--primary-yellow)] hover:bg-[var(--primary-yellow-hover)] text-[var(--text-dark)] font-bold text-xs shadow-xs transition-all flex-shrink-0"
                >
                  <span>Get on Gumroad ({product.priceDisplay})</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </section>

        {/* Free Tier & Operational Philosophy Guarantee */}
        <section className="p-6 sm:p-10 rounded-3xl bg-white border border-[var(--border-color)] text-left space-y-6 shadow-xs">
          <div className="flex items-center gap-2.5 text-[var(--purple-main)]">
            <ShieldCheck className="w-6 h-6" />
            <h2 className="font-heading font-extrabold text-lg sm:text-2xl text-[var(--text-dark)]">
              The Growth Stack Guide Product Standard
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
            <div className="space-y-2">
              <h3 className="font-heading font-bold text-sm text-[var(--text-dark)]">
                1. 100% Free Notion Plan Compatible
              </h3>
              <p>
                We never force you into paid Notion team seats. Every database property, rollup, and Formula 2.0 expression is optimized to run smoothly on Notion’s free personal plan.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-heading font-bold text-sm text-[var(--text-dark)]">
                2. Zero Hidden Recurring Fees
              </h3>
              <p>
                Unlike bloated monthly SaaS dashboards, our systems are one-time purchases with lifetime personal usage rights and free future updates.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-heading font-bold text-sm text-[var(--text-dark)]">
                3. Battle-Tested in Real Work
              </h3>
              <p>
                We do not sell theoretical blueprints. Every database and SOP in these systems runs our own daily publishing and consulting operations.
              </p>
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="space-y-6 text-left border-t border-[var(--border-color)] pt-12">
          <div className="flex items-center gap-2 text-xs font-bold text-[var(--purple-main)] uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>Product Questions Answered</span>
          </div>

          <h2 className="font-heading font-extrabold text-xl sm:text-3xl text-[var(--text-dark)]">
            Common Questions About Our Systems
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-white border border-[var(--border-color)] space-y-2">
              <h3 className="font-heading font-bold text-sm text-[var(--text-dark)]">
                How does digital delivery work?
              </h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                Immediately upon completing checkout on Gumroad, you receive a direct receipt containing the private Notion template link. You open the link, click &quot;Duplicate&quot;, and the entire system is copied to your Notion account in seconds.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-[var(--border-color)] space-y-2">
              <h3 className="font-heading font-bold text-sm text-[var(--text-dark)]">
                Can I use this if I am new to Notion?
              </h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                Yes. Each system comes with pre-populated dummy data and a concise video walkthrough showing how the databases link together. If you are a complete beginner, our $7 Starter Pack is the ideal starting point.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-[var(--border-color)] space-y-2">
              <h3 className="font-heading font-bold text-sm text-[var(--text-dark)]">
                Can I customize the databases after duplicating?
              </h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                Absolutely. Once duplicated, you own 100% of the workspace. You can rename tags, add custom database properties, and configure unique views to match your exact routine.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-[var(--border-color)] space-y-2">
              <h3 className="font-heading font-bold text-sm text-[var(--text-dark)]">
                What if I already downloaded the Free Follow-Up Tracker?
              </h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                The Free Follow-Up Tracker manages top-of-funnel inbound inquiries. The $7 Client Pulse CRM prevents active client neglect with a 14-day inactivity radar, and the $19 Client Kickoff Kit provides niche intake questionnaires and scope defense clauses for project kickoffs.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
