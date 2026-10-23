import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Scale, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description:
    'The terms and conditions governing the use of Growth Stack Guide digital products, Notion templates, and educational resources.',
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: 'Terms of Use | Growth Stack Guide',
    description:
      'Clear terms regarding the usage of our digital templates, educational blueprints, and affiliate links.',
  },
};

export default function TermsOfUsePage() {
  return (
    <div className="w-full py-10 sm:py-16 lg:py-20 bg-[var(--bg-main)]">
      <div className="container-custom max-w-4xl mx-auto px-4 sm:px-6 space-y-10 sm:space-y-12">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--text-muted)]">
          <Link href="/" className="hover:text-[var(--text-dark)] transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-[var(--text-dark)]">Terms of Use</span>
        </nav>

        {/* Page Header */}
        <header className="space-y-4 text-left border-b border-[var(--border-color)] pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--purple-light)] text-[var(--purple-main)] text-xs font-bold uppercase tracking-wider">
            <Scale className="w-4 h-4" />
            <span>Digital Products &amp; Content Agreement</span>
          </div>
          <h1 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[var(--text-dark)] tracking-tight leading-tight">
            Terms of Use
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed max-w-3xl">
            Please read these terms carefully before accessing Growth Stack Guide, duplicating our Notion templates, or purchasing digital products from our platform.
          </p>
          <div className="flex items-center gap-4 text-xs text-[var(--text-light)] pt-1">
            <span>Last Revised: October 2026</span>
            <span>•</span>
            <span>Applies to: growthstackguide.com</span>
          </div>
        </header>

        {/* Highlight Callout: Earnings Disclaimer */}
        <section className="p-5 sm:p-7 rounded-2xl bg-[#FFFBF0] border border-[#FDE68A] text-left space-y-3 shadow-xs">
          <div className="flex items-center gap-2.5 text-[#92400E]">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <h2 className="font-heading font-bold text-base sm:text-lg">
              Important: Educational Purpose &amp; Earnings Disclaimer
            </h2>
          </div>
          <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <p>
              Growth Stack Guide provides digital productivity systems, Notion workspaces, and AI prompt engineering tutorials designed to help you organize workflows, plan content, and eliminate administrative friction.
            </p>
            <p>
              <strong>We make zero guarantees regarding specific financial income or business revenue.</strong> Any revenue metrics, case studies, or time-saved figures discussed on this site represent realistic potential outcomes based on disciplined execution, not promises of guaranteed wealth. Your business success depends on your market, skill, effort, and execution.
            </p>
          </div>
        </section>

        {/* Section 1: Agreement to Terms */}
        <section className="space-y-4 text-left">
          <h2 className="font-heading font-bold text-xl sm:text-2xl text-[var(--text-dark)]">
            1. Agreement to Terms
          </h2>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            By visiting Growth Stack Guide (growthstackguide.com), downloading free resources, duplicating templates, or purchasing products, you agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree with any part of these terms, you should discontinue use of the site immediately.
          </p>
        </section>

        {/* Section 2: License & Template Usage */}
        <section className="space-y-4 text-left">
          <h2 className="font-heading font-bold text-xl sm:text-2xl text-[var(--text-dark)]">
            2. Intellectual Property &amp; License to Use Templates
          </h2>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            When you access a Notion template or purchase a digital product from Growth Stack Guide, you are granted a limited, non-exclusive, non-transferable license subject to the following rules:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 sm:p-5 rounded-xl bg-white border border-[var(--border-color)] space-y-2">
              <span className="text-xs font-bold text-[var(--color-success)] uppercase tracking-wider block">
                Allowed Usage
              </span>
              <ul className="space-y-1.5 text-xs text-[var(--text-muted)]">
                <li>• Use templates to organize your personal work and business projects.</li>
                <li>• Use client portals and CRM setups with your direct freelance clients.</li>
                <li>• Modify, customize, and extend formulas, databases, and pages for your internal needs.</li>
              </ul>
            </div>
            <div className="p-4 sm:p-5 rounded-xl bg-white border border-[var(--border-color)] space-y-2">
              <span className="text-xs font-bold text-[var(--color-error)] uppercase tracking-wider block">
                Strictly Prohibited
              </span>
              <ul className="space-y-1.5 text-xs text-[var(--text-muted)]">
                <li>• Reselling, sublicensing, or commercially redistributing our templates as standalone products.</li>
                <li>• Uploading our templates to public marketplaces claiming original authorship.</li>
                <li>• Scraping our editorial guides or prompt vaults for AI model re-monetization.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Third-Party Tools & Services */}
        <section className="space-y-4 text-left">
          <h2 className="font-heading font-bold text-xl sm:text-2xl text-[var(--text-dark)]">
            3. Third-Party Software &amp; External Links
          </h2>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            Our systems and tutorials frequently integrate with third-party software, including Notion, OpenAI, Claude (Anthropic), Make.com, and Kit. Growth Stack Guide is an independent publication and is not directly affiliated with, sponsored by, or endorsed by Notion Labs, Inc. or any other referenced SaaS corporation.
          </p>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            We are not responsible for changes, feature removals, price modifications, or service disruptions implemented by third-party software vendors. Your use of external software is governed solely by that vendor's respective terms of service.
          </p>
        </section>

        {/* Section 4: Refund Policy */}
        <section className="space-y-4 text-left">
          <h2 className="font-heading font-bold text-xl sm:text-2xl text-[var(--text-dark)]">
            4. Digital Products &amp; Refund Policy
          </h2>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            Due to the immediate, irrevocable access granted upon delivery of digital Notion workspaces and downloadable PDF assets:
          </p>
          <ul className="space-y-2 text-sm text-[var(--text-muted)] pl-4 list-disc">
            <li>We encourage you to thoroughly review template feature lists and preview images before purchasing.</li>
            <li>If you encounter a technical defect or broken database formula in any paid template that our support team cannot resolve, we provide a <strong>14-day satisfaction review</strong>. Contact our support team with your order receipt.</li>
          </ul>
        </section>

        {/* Section 5: Limitation of Liability */}
        <section className="space-y-4 text-left">
          <h2 className="font-heading font-bold text-xl sm:text-2xl text-[var(--text-dark)]">
            5. Limitation of Liability
          </h2>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            All content, templates, software reviews, and guides on Growth Stack Guide are provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without warranties of any kind, whether express or implied. Under no circumstances shall Growth Stack Guide, its founder, or contributors be liable for any indirect, incidental, consequential, or punitive damages arising from your reliance on or use of our systems.
          </p>
        </section>

        {/* Section 6: Contact */}
        <section className="p-6 rounded-2xl bg-white border border-[var(--border-color)] space-y-4 text-left">
          <h2 className="font-heading font-bold text-lg text-[var(--text-dark)]">
            Questions Regarding Our Terms?
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
            If you have questions regarding these terms, licensing permissions, or intellectual property rights, please contact us.
          </p>
          <div className="pt-2">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--primary-yellow)] hover:bg-[var(--primary-yellow-hover)] text-[var(--text-dark)] font-bold text-xs shadow-xs transition-colors"
            >
              <span>Contact Legal &amp; Support</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
