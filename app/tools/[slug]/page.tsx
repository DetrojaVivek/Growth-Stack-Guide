import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllTools, getToolBySlug } from '@/data/tools';
import {
  Wrench,
  Star,
  Check,
  X,
  ShieldCheck,
  ExternalLink,
  Info,
  Calendar,
  HelpCircle,
  ArrowRight,
} from 'lucide-react';

interface ToolPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const tools = getAllTools();
  return tools.map((tool) => ({
    slug: tool.slug,
  }));
}

export async function generateMetadata({ params }: ToolPageProps): Promise<Metadata> {
  const tool = getToolBySlug(params.slug);
  if (!tool) {
    return {
      title: 'Tool Not Found',
    };
  }

  return {
    title: `${tool.name} Review (${tool.verifiedDate}) | Growth Stack Guide`,
    description: `Hands-on review of ${tool.name}. Verified pricing (${tool.pricingTier}), honest pros and limitations, and how we use it in solo workflows.`,
    alternates: {
      canonical: `/tools/${params.slug}/`,
    },
    openGraph: {
      title: `${tool.name} Review & Verified Pricing | Growth Stack Guide`,
      description: tool.tagline,
      url: `/tools/${params.slug}/`,
    },
  };
}

export default function ToolDetailPage({ params }: ToolPageProps) {
  const tool = getToolBySlug(params.slug);

  if (!tool) {
    notFound();
  }

  return (
    <div className="w-full py-10 sm:py-16 lg:py-20 bg-[var(--bg-main)]">
      <div className="container-custom max-w-4xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--text-muted)] text-left">
          <Link href="/" className="hover:text-[var(--text-dark)] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/tools/" className="hover:text-[var(--text-dark)] transition-colors">
            Tools
          </Link>
          <span>/</span>
          <span className="text-[var(--text-dark)] truncate">{tool.name}</span>
        </nav>

        {/* Tool Header */}
        <header className="space-y-6 text-left border-b border-[var(--border-color)] pb-10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[var(--purple-light)] text-[var(--purple-main)]">
                {tool.category}
              </span>
              <span className="text-xs font-semibold text-[var(--text-muted)] flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[var(--text-light)]" />
                <span>Pricing Verified: {tool.verifiedDate}</span>
              </span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFBF0] border border-[#FDE68A] text-[#B45309] text-xs font-extrabold">
              <Star className="w-4 h-4 fill-[#F5B82E] text-[#F5B82E]" />
              <span>{tool.rating.toFixed(2)} / 5.0 Utility Rating</span>
            </div>
          </div>

          <h1 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[var(--text-dark)] tracking-tight leading-tight">
            {tool.name}: An Honest Hands-On Operational Review
          </h1>

          <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
            {tool.tagline}
          </p>

          {/* Pricing Highlight Box */}
          <div className="p-6 rounded-3xl bg-white border border-[var(--border-color)] shadow-[var(--shadow-sm)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[var(--text-light)] uppercase tracking-wider block">
                Official Pricing Structure
              </span>
              <div className="font-heading font-extrabold text-lg sm:text-xl text-[var(--text-dark)]">
                {tool.pricingTier}
              </div>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                {tool.pricingSummary}
              </p>
            </div>

            <a
              href={tool.affiliateUrl}
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[var(--primary-yellow)] hover:bg-[var(--primary-yellow-hover)] text-[var(--text-dark)] font-bold text-xs sm:text-sm shadow-xs transition-all flex-shrink-0 w-full sm:w-auto text-center"
            >
              <span>Visit Official {tool.name} Site</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* FTC Disclosure Notice */}
          <div className="p-4 rounded-2xl bg-[#FFFBF0] border border-[#FDE68A] text-left flex items-start gap-3">
            <Info className="w-4 h-4 text-[#D97706] flex-shrink-0 mt-0.5" />
            <p className="text-xs text-slate-700 leading-relaxed">
              <strong className="text-[#92400E]">FTC Affiliate Notice:</strong> If you choose to upgrade to a paid subscription via our links, Growth Stack Guide may receive a small referral commission at zero extra cost to you. We strictly review software based on real utility and highlight genuine limitations.
            </p>
          </div>
        </header>

        {/* Pros & Limitations Scorecard */}
        <section className="space-y-6 text-left">
          <h2 className="font-heading font-extrabold text-xl sm:text-3xl text-[var(--text-dark)]">
            Field-Tested Scorecard: Strengths &amp; Limitations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Pros */}
            <div className="p-6 rounded-3xl bg-white border border-[#A7F3D0] shadow-xs space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#065F46] uppercase tracking-wider">
                <Check className="w-4 h-4 stroke-[3]" />
                <span>What It Does Exceptionally Well</span>
              </div>
              <ul className="space-y-3">
                {tool.pros.map((pro) => (
                  <li key={pro} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <div className="w-4 h-4 rounded-full bg-[#ECFDF5] text-[#059669] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Limitations */}
            <div className="p-6 rounded-3xl bg-white border border-[#FECDD3] shadow-xs space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#9F1239] uppercase tracking-wider">
                <X className="w-4 h-4 stroke-[3]" />
                <span>Real Limitations to Consider</span>
              </div>
              <ul className="space-y-3">
                {tool.limitations.map((limit) => (
                  <li key={limit} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <div className="w-4 h-4 rounded-full bg-[#FFF1F2] text-[#E11D48] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>{limit}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </section>

        {/* Best For & Operational Verdict */}
        <section className="space-y-6 text-left">
          <h2 className="font-heading font-extrabold text-xl sm:text-3xl text-[var(--text-dark)]">
            The Editorial Verdict
          </h2>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[var(--border-color)] space-y-5 shadow-xs">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[var(--purple-main)] uppercase tracking-wider">
                Ideal Target Persona
              </span>
              <h3 className="font-heading font-bold text-base sm:text-lg text-[var(--text-dark)]">
                Best For:
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                {tool.bestFor}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[var(--bg-main)] border border-[var(--border-color)] space-y-1.5">
              <span className="text-xs font-bold text-[#B45309] uppercase tracking-wider">
                Growth Stack Guide Assessment
              </span>
              <p className="text-xs sm:text-sm font-medium text-[var(--text-dark)] leading-relaxed">
                &quot;{tool.verdict}&quot;
              </p>
            </div>
          </div>
        </section>

        {/* Tool FAQs */}
        <section className="space-y-6 text-left border-t border-[var(--border-color)] pt-10">
          <div className="flex items-center gap-2 text-xs font-bold text-[var(--purple-main)] uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>Common Questions</span>
          </div>

          <h2 className="font-heading font-extrabold text-xl sm:text-3xl text-[var(--text-dark)]">
            Frequently Asked Questions About {tool.name}
          </h2>

          <div className="space-y-4">
            {tool.faqs.map((faq) => (
              <div
                key={faq.question}
                className="p-5 rounded-2xl bg-white border border-[var(--border-color)] space-y-2 shadow-xs"
              >
                <h3 className="font-heading font-bold text-sm text-[var(--text-dark)]">
                  {faq.question}
                </h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Outbound Link Bar */}
        <section className="p-8 rounded-3xl bg-[var(--bg-navy)] text-white text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1 max-w-lg">
            <h3 className="font-heading font-extrabold text-lg sm:text-2xl text-white">
              Ready to Explore {tool.name}?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Start with their official free tier to test the interface before committing to paid seats.
            </p>
          </div>

          <a
            href={tool.affiliateUrl}
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[var(--primary-yellow)] hover:bg-[var(--primary-yellow-hover)] text-[var(--text-dark)] font-bold text-xs sm:text-sm shadow-md transition-all flex-shrink-0"
          >
            <span>Visit {tool.name}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </section>

      </div>
    </div>
  );
}
