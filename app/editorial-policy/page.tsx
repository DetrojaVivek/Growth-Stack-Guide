import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, CheckCircle2, AlertTriangle, ArrowRight, FileCheck2, Cpu } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Testing & Editorial Policy',
  description:
    'Our rigorous 5-point testing framework, AI usage disclosure, and editorial standards for reviewing productivity software and Notion templates.',
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: 'Testing & Editorial Policy | Growth Stack Guide',
    description:
      'Learn how we test tools, verify workflows, and maintain strict editorial independence on Growth Stack Guide.',
  },
};

export default function EditorialPolicyPage() {
  return (
    <div className="w-full py-10 sm:py-16 lg:py-20 bg-[var(--bg-main)]">
      <div className="container-custom max-w-4xl mx-auto px-4 sm:px-6 space-y-10 sm:space-y-12">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--text-muted)]">
          <Link href="/" className="hover:text-[var(--text-dark)] transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-[var(--text-dark)]">Editorial Policy</span>
        </nav>

        {/* Page Header */}
        <header className="space-y-4 text-left border-b border-[var(--border-color)] pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--purple-light)] text-[var(--purple-main)] text-xs font-bold uppercase tracking-wider">
            <FileCheck2 className="w-4 h-4" />
            <span>Integrity &amp; Review Standards</span>
          </div>
          <h1 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[var(--text-dark)] tracking-tight leading-tight">
            Testing &amp; Editorial Policy
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed max-w-3xl">
            Our readers rely on Growth Stack Guide to build real business systems. This document outlines our rigorous testing methodologies, how we evaluate software tools, our transparent AI disclosure, and our fact-checking procedures.
          </p>
          <div className="flex items-center gap-4 text-xs text-[var(--text-light)] pt-1">
            <span>Last Updated: October 2026</span>
            <span>•</span>
            <span>Applies to: growthstackguide.com</span>
          </div>
        </header>

        {/* The 5-Point Evaluation Framework */}
        <section className="space-y-4 text-left">
          <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-[var(--text-dark)]">
            Our 5-Point Software &amp; System Evaluation Framework
          </h2>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            Before any software tool, AI model, or Notion template is recommended on Growth Stack Guide, it must undergo evaluation against our five operational benchmarks:
          </p>

          <div className="space-y-3 pt-2">
            <div className="p-5 rounded-2xl bg-white border border-[var(--border-color)] shadow-xs flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-[var(--purple-light)] text-[var(--purple-main)] flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                1
              </div>
              <div className="space-y-1 min-w-0">
                <h3 className="font-heading font-bold text-base text-[var(--text-dark)]">
                  Real Operational Usability (Problem-Solving Power)
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                  Does this tool solve an actual operational bottleneck, or is it merely an aesthetic novelty? We deploy tools inside live content calendars, client pipelines, and task databases to test practical utility under real workloads.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[var(--border-color)] shadow-xs flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-[var(--primary-yellow-light)] text-[#B45309] flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                2
              </div>
              <div className="space-y-1 min-w-0">
                <h3 className="font-heading font-bold text-base text-[var(--text-dark)]">
                  Solo-Operator Feasibility ($0 or Low-Barrier Setup)
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                  Can a single person configure and maintain this system in under 30 minutes without writing custom code or hiring an external engineer? If a tool requires complex API middleware or an IT department, we flag it clearly.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[var(--border-color)] shadow-xs flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-[var(--color-success-bg)] text-[var(--color-success)] flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                3
              </div>
              <div className="space-y-1 min-w-0">
                <h3 className="font-heading font-bold text-base text-[var(--text-dark)]">
                  Value-to-Cost Ratio (Subscription Audit)
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                  Does the tool justify its price tag, or can its core functionality be replicated using free native tools (such as Notion free tier, Google Workspace, or free AI models)? We actively warn readers against subscription bloat.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[var(--border-color)] shadow-xs flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-[var(--color-info-bg)] text-[var(--color-info)] flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                4
              </div>
              <div className="space-y-1 min-w-0">
                <h3 className="font-heading font-bold text-base text-[var(--text-dark)]">
                  Maintenance &amp; Breakage Resilience
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                  How fragile is the setup? If an automated webhook fails or an API schema changes, will the user&apos;s business come to a halt? We prioritize systems with low maintenance overhead and clear fallback options.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[var(--border-color)] shadow-xs flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-[#FEF3C7] text-[#92400E] flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                5
              </div>
              <div className="space-y-1 min-w-0">
                <h3 className="font-heading font-bold text-base text-[var(--text-dark)]">
                  Data Portability &amp; Vendor Independence
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                  Can users export their notes, client databases, and prompts easily in standard formats (Markdown, CSV, JSON) if they decide to switch platforms? We penalize platforms that trap user data behind walled gardens.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Usage Disclosure */}
        <section className="p-6 sm:p-8 rounded-3xl bg-white border border-[var(--border-color)] shadow-xs space-y-4 text-left">
          <div className="flex items-center gap-3 text-[var(--purple-main)]">
            <Cpu className="w-6 h-6 flex-shrink-0" />
            <h2 className="font-heading font-bold text-lg sm:text-xl text-[var(--text-dark)]">
              Artificial Intelligence (AI) Usage Disclosure
            </h2>
          </div>
          <div className="space-y-3 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
            <p>
              Growth Stack Guide embraces generative AI as a powerful operational leverage tool for solo creators. In the spirit of total transparency, here is exactly how AI is — and is not — used in our publication:
            </p>
            <ul className="space-y-2 pl-4 list-disc text-[var(--text-dark)]">
              <li><strong>How AI is Used:</strong> We use Large Language Models (such as Claude 3.5 Sonnet and GPT-4o) for structural research assistance, code snippet formatting, grammatical proofreading, and brainstorming alternative headline angles.</li>
              <li><strong>What Humans Do:</strong> Every single editorial blueprint, Notion template, database relation, and review verdict is conceived, architected, and hands-on tested by human editors led by Vivek.</li>
              <li><strong>Strict Prohibition on AI Slop:</strong> We strictly prohibit unedited, automated AI content farming. We never publish generic prompt regurgitations or AI-generated articles that haven&apos;t been empirically validated.</li>
            </ul>
          </div>
        </section>

        {/* Editorial Independence & Sponsored Content Policy */}
        <section className="space-y-4 text-left">
          <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-[var(--text-dark)]">
            Editorial Independence &amp; Paid Placement Policy
          </h2>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            Our editorial integrity is our single most valuable asset. We adhere to non-negotiable guidelines regarding commercial relationships:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div className="p-4 rounded-xl bg-white border border-[var(--border-color)] space-y-2">
              <div className="flex items-center gap-2 text-[var(--color-success)] font-bold text-xs uppercase">
                <CheckCircle2 className="w-4 h-4" />
                <span>Our Guarantee</span>
              </div>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                Vendors cannot pay for favorable ratings, higher rankings in comparisons, or altered testing conclusions. If a tool has a confusing UI or high pricing, we say so plainly.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[var(--border-color)] space-y-2">
              <div className="flex items-center gap-2 text-[var(--color-error)] font-bold text-xs uppercase">
                <AlertTriangle className="w-4 h-4" />
                <span>What We Reject</span>
              </div>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                We decline sponsored posts that demand pre-approved scripts or require removal of negative feedback. Sponsored content (if ever accepted) is explicitly labeled with clear sponsor tags.
              </p>
            </div>
          </div>
        </section>

        {/* Corrections & Fact-Checking Protocol */}
        <section className="space-y-4 text-left">
          <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-[var(--text-dark)]">
            Corrections &amp; Feedback Protocol
          </h2>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            SaaS pricing changes frequently and software features update continuously. If you spot a broken link, an outdated price, or an inaccurate software spec in any of our guides:
          </p>
          <ol className="space-y-2 text-sm text-[var(--text-muted)] pl-4 list-decimal">
            <li>Email our editorial desk at <strong className="text-[var(--text-dark)]">contact@growthstackguide.com</strong> with the URL and specific detail.</li>
            <li>Our team will verify the claim against the vendor&apos;s active documentation within 48 business hours.</li>
            <li>When corrections are made, we update the article&apos;s &quot;Last Verified&quot; timestamp immediately.</li>
          </ol>
        </section>

        {/* Contact CTA */}
        <section className="p-6 rounded-3xl bg-white border border-[var(--border-color)] space-y-4 text-left">
          <h2 className="font-heading font-bold text-lg text-[var(--text-dark)]">
            Report an Error or Submit Editorial Feedback
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
            Help us maintain the highest standard of accuracy. Contact our editorial team with questions, corrections, or tool submission suggestions.
          </p>
          <div className="pt-2">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--primary-yellow)] hover:bg-[var(--primary-yellow-hover)] text-[var(--text-dark)] font-bold text-xs shadow-xs transition-colors"
            >
              <span>Contact Editorial Desk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
