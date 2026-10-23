import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Info, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'FTC Affiliate Disclosure',
  description:
    'Full transparency on how Growth Stack Guide earns revenue through affiliate partnerships without compromising editorial integrity.',
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: 'FTC Affiliate Disclosure | Growth Stack Guide',
    description:
      'Learn about our affiliate relationships, FTC compliance, and commitment to 100% honest, field-tested recommendations.',
  },
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="w-full py-10 sm:py-16 lg:py-20 bg-[var(--bg-main)]">
      <div className="container-custom max-w-4xl mx-auto px-4 sm:px-6 space-y-10 sm:space-y-12">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--text-muted)]">
          <Link href="/" className="hover:text-[var(--text-dark)] transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-[var(--text-dark)]">Affiliate Disclosure</span>
        </nav>

        {/* Page Header */}
        <header className="space-y-4 text-left border-b border-[var(--border-color)] pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--purple-light)] text-[var(--purple-main)] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>FTC Compliance &amp; Editorial Transparency</span>
          </div>
          <h1 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[var(--text-dark)] tracking-tight leading-tight">
            Affiliate Disclosure
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed max-w-3xl">
            Growth Stack Guide believes in radical transparency. This page outlines how our publication generates revenue, how affiliate relationships work, and why our editorial recommendations remain 100% independent.
          </p>
          <div className="flex items-center gap-4 text-xs text-[var(--text-light)] pt-1">
            <span>Last Updated: October 2026</span>
            <span>•</span>
            <span>Applies to: growthstackguide.com</span>
          </div>
        </header>

        {/* Highlight Callout: In Plain English */}
        <section className="p-5 sm:p-7 rounded-2xl bg-[#FFFBF0] border border-[#FDE68A] text-left space-y-3 shadow-xs">
          <div className="flex items-center gap-2.5 text-[#92400E]">
            <Info className="w-5 h-5 flex-shrink-0" />
            <h2 className="font-heading font-bold text-base sm:text-lg">
              Summary: The Plain English Version
            </h2>
          </div>
          <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <p>
              Some links on Growth Stack Guide are affiliate links. If you click on one of these links and make a purchase, we may receive a referral commission from the vendor at <strong>zero extra cost to you</strong>.
            </p>
            <p>
              We <strong>never</strong> accept payment to write positive reviews, we <strong>never</strong> promote software we consider substandard, and our opinions are entirely our own. Every recommendation is based on real utility for solopreneurs, creators, and freelancers.
            </p>
          </div>
        </section>

        {/* Section 1: FTC Legal Framework */}
        <section className="space-y-4 text-left">
          <h2 className="font-heading font-bold text-xl sm:text-2xl text-[var(--text-dark)]">
            1. Federal Trade Commission (FTC) Compliance
          </h2>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            In compliance with the United States Federal Trade Commission (FTC) guidelines concerning the use of endorsements and testimonials in advertising (16 CFR Part 255), this disclosure informs our readers that Growth Stack Guide maintains commercial relationships with select software providers, digital service platforms, and marketplaces mentioned on this website.
          </p>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            Whenever a link leads to an external merchant or partner where an affiliate relationship exists, that link is accompanied by a clear, conspicuous disclosure in close proximity to the recommendation.
          </p>
        </section>

        {/* Section 2: How Affiliate Links Work */}
        <section className="space-y-4 text-left">
          <h2 className="font-heading font-bold text-xl sm:text-2xl text-[var(--text-dark)]">
            2. How Affiliate Links Work
          </h2>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            When you click an affiliate link on Growth Stack Guide, a tracking cookie is placed in your browser by the partner vendor. If you proceed to purchase a subscription or digital product within a specified window:
          </p>
          <ul className="space-y-2.5 text-sm text-[var(--text-dark)] pl-2">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[var(--color-success)] flex-shrink-0 mt-0.5" />
              <span><strong>The price you pay is identical</strong> to the regular price, or in many cases, discounted through exclusive promotional codes we negotiate for our readers.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[var(--color-success)] flex-shrink-0 mt-0.5" />
              <span><strong>The vendor pays us a percentage commission</strong> directly out of their operating budget as a marketing expense.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[var(--color-success)] flex-shrink-0 mt-0.5" />
              <span><strong>This revenue funds our editorial research</strong>, server costs, and the development of free educational blueprints and software audits without requiring paywalls.</span>
            </li>
          </ul>
        </section>

        {/* Section 3: Our Strict Editorial Independence Rules */}
        <section className="space-y-4 text-left">
          <h2 className="font-heading font-bold text-xl sm:text-2xl text-[var(--text-dark)]">
            3. Strict Editorial Independence
          </h2>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            Affiliate compensation does not influence our editorial ratings, review scores, or comparison outcomes. We adhere strictly to the following editorial standards:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 sm:p-5 rounded-xl bg-white border border-[var(--border-color)] space-y-2">
              <h3 className="font-heading font-bold text-sm text-[var(--text-dark)]">
                Hands-on Operational Testing
              </h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                We only recommend tools and systems we have actively tested in real production environments, content pipelines, or client delivery workflows.
              </p>
            </div>
            <div className="p-4 sm:p-5 rounded-xl bg-white border border-[var(--border-color)] space-y-2">
              <h3 className="font-heading font-bold text-sm text-[var(--text-dark)]">
                Zero Paid Placement
              </h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                Vendors cannot pay for a higher rank or a favorable review on Growth Stack Guide. Any tool that fails our testing criteria is noted with explicit drawbacks.
              </p>
            </div>
            <div className="p-4 sm:p-5 rounded-xl bg-white border border-[var(--border-color)] space-y-2">
              <h3 className="font-heading font-bold text-sm text-[var(--text-dark)]">
                Free &amp; Budget Alternatives First
              </h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                Whenever a zero-dollar or low-cost native tool achieves the same outcome, we explicitly present that free alternative alongside paid options.
              </p>
            </div>
            <div className="p-4 sm:p-5 rounded-xl bg-white border border-[var(--border-color)] space-y-2">
              <h3 className="font-heading font-bold text-sm text-[var(--text-dark)]">
                No Financial Hype
              </h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                We do not use get-rich-quick claims, fake earnings screenshots, or unrealistic income representations to push software or affiliate offers.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Partner Networks & Platforms */}
        <section className="space-y-4 text-left">
          <h2 className="font-heading font-bold text-xl sm:text-2xl text-[var(--text-dark)]">
            4. Partner Networks &amp; Product Types
          </h2>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            Growth Stack Guide may feature affiliate links from several reputable partner programs and digital product marketplaces, including:
          </p>
          <ul className="space-y-2 text-sm text-[var(--text-muted)] pl-4 list-disc">
            <li><strong>SaaS &amp; Productivity Platforms:</strong> Notion, Claude (Anthropic), OpenAI, Make.com, Kit (ConvertKit), and related automation tools.</li>
            <li><strong>Digital Product Platforms:</strong> Gumroad, LemonSqueezy, Payhip, and WarriorPlus digital marketplaces.</li>
            <li><strong>Hosting &amp; Domain Infrastructure:</strong> Selected cloud infrastructure and domain registry partners.</li>
          </ul>
        </section>

        {/* Section 5: Questions & Verification */}
        <section className="p-6 rounded-2xl bg-white border border-[var(--border-color)] space-y-4 text-left">
          <h2 className="font-heading font-bold text-lg text-[var(--text-dark)]">
            Have Questions About a Specific Link?
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
            If you ever have questions regarding our relationship with any tool or vendor featured on this website, or if you spot an outdated price or disclosure, please reach out to us directly.
          </p>
          <div className="pt-2 flex flex-wrap gap-4">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--primary-yellow)] hover:bg-[var(--primary-yellow-hover)] text-[var(--text-dark)] font-bold text-xs shadow-xs transition-colors"
            >
              <span>Contact Editorial Team</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/editorial-policy/"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#FAF8F2] hover:bg-[#F3EFE6] text-[var(--text-dark)] font-semibold text-xs border border-[var(--border-color)] transition-colors"
            >
              <span>Read Our Testing Policy</span>
              <ExternalLink className="w-3.5 h-3.5 text-[var(--text-light)]" />
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
