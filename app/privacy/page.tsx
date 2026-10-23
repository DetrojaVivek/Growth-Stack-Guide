import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Lock, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Learn how Growth Stack Guide collects, uses, and protects your personal data in accordance with US digital privacy standards.',
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: 'Privacy Policy | Growth Stack Guide',
    description:
      'Our commitment to privacy: Zero data selling, minimal data collection, and complete transparency.',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full py-10 sm:py-16 lg:py-20 bg-[var(--bg-main)]">
      <div className="container-custom max-w-4xl mx-auto px-4 sm:px-6 space-y-10 sm:space-y-12">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--text-muted)]">
          <Link href="/" className="hover:text-[var(--text-dark)] transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-[var(--text-dark)]">Privacy Policy</span>
        </nav>

        {/* Page Header */}
        <header className="space-y-4 text-left border-b border-[var(--border-color)] pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--purple-light)] text-[var(--purple-main)] text-xs font-bold uppercase tracking-wider">
            <Lock className="w-4 h-4" />
            <span>Data Protection &amp; User Privacy</span>
          </div>
          <h1 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[var(--text-dark)] tracking-tight leading-tight">
            Privacy Policy
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed max-w-3xl">
            At Growth Stack Guide, we respect your privacy. This policy explains what information we collect, why we collect it, and the strict measures we take to safeguard your personal data.
          </p>
          <div className="flex items-center gap-4 text-xs text-[var(--text-light)] pt-1">
            <span>Effective Date: October 2026</span>
            <span>•</span>
            <span>Applies to: growthstackguide.com</span>
          </div>
        </header>

        {/* Key Guarantees Box */}
        <section className="p-5 sm:p-7 rounded-2xl bg-white border border-[var(--border-color)] shadow-xs text-left space-y-3">
          <h2 className="font-heading font-bold text-base sm:text-lg text-[var(--text-dark)]">
            Our Core Privacy Guarantees
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-dark)]">
              <CheckCircle2 className="w-4 h-4 text-[var(--color-success)] flex-shrink-0 mt-0.5" />
              <span><strong>We never sell your data</strong> to third-party data brokers or marketing agencies.</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-dark)]">
              <CheckCircle2 className="w-4 h-4 text-[var(--color-success)] flex-shrink-0 mt-0.5" />
              <span><strong>No forced account creation</strong> to browse our guides or access free public tools.</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-dark)]">
              <CheckCircle2 className="w-4 h-4 text-[var(--color-success)] flex-shrink-0 mt-0.5" />
              <span><strong>1-Click unsubscribe</strong> included in every single email update we send.</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-dark)]">
              <CheckCircle2 className="w-4 h-4 text-[var(--color-success)] flex-shrink-0 mt-0.5" />
              <span><strong>Bank-level encryption</strong> utilized across all payment processing partners.</span>
            </div>
          </div>
        </section>

        {/* Section 1: Information We Collect */}
        <section className="space-y-4 text-left">
          <h2 className="font-heading font-bold text-xl sm:text-2xl text-[var(--text-dark)]">
            1. Information We Collect
          </h2>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            We intentionally minimize the information we collect to only what is strictly required to deliver our educational content and digital products:
          </p>
          <div className="space-y-3 text-sm text-[var(--text-muted)] pl-2">
            <div>
              <strong className="text-[var(--text-dark)] block">A. Voluntary Information You Provide:</strong>
              When you opt in to receive the Free AI Creator Productivity Kit, subscribe to our weekly systems newsletter, or submit a support inquiry, you provide your name and email address.
            </div>
            <div>
              <strong className="text-[var(--text-dark)] block">B. Transaction Information:</strong>
              When you purchase a digital template from our product ladder, transactions are securely handled by trusted third-party payment processors (such as Gumroad or Stripe). Growth Stack Guide <strong>never sees or stores</strong> your credit card or billing payment credentials.
            </div>
            <div>
              <strong className="text-[var(--text-dark)] block">C. Technical &amp; Device Information:</strong>
              Like most websites, our hosting servers automatically log non-personally identifiable technical information, such as browser type, operating system, language preference, referring URL, and approximate geographic region (country/state level).
            </div>
          </div>
        </section>

        {/* Section 2: How We Use Your Information */}
        <section className="space-y-4 text-left">
          <h2 className="font-heading font-bold text-xl sm:text-2xl text-[var(--text-dark)]">
            2. How We Use Your Information
          </h2>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            We use collected information solely for legitimate operational and educational purposes:
          </p>
          <ul className="space-y-2 text-sm text-[var(--text-muted)] pl-4 list-disc">
            <li>To deliver the digital Notion templates, PDF guides, and prompt vaults you requested.</li>
            <li>To send relevant email newsletters containing productivity blueprints, template updates, and vetted tool recommendations.</li>
            <li>To respond to your inquiries, technical support questions, and feedback.</li>
            <li>To monitor website performance, prevent malicious activity, and optimize site speed.</li>
          </ul>
        </section>

        {/* Section 3: Third-Party Service Providers */}
        <section className="space-y-4 text-left">
          <h2 className="font-heading font-bold text-xl sm:text-2xl text-[var(--text-dark)]">
            3. Third-Party Service Providers
          </h2>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            We work with industry-standard third-party service providers who assist us in operating our digital publication:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div className="p-4 rounded-xl bg-white border border-[var(--border-color)]">
              <h3 className="font-heading font-bold text-sm text-[var(--text-dark)]">Email Delivery</h3>
              <p className="text-xs text-[var(--text-muted)] mt-1">
                We use privacy-compliant email service providers (such as Kit / ConvertKit) to manage newsletter delivery and subscriber lists.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[var(--border-color)]">
              <h3 className="font-heading font-bold text-sm text-[var(--text-dark)]">Payment Processing</h3>
              <p className="text-xs text-[var(--text-muted)] mt-1">
                Payment transactions for paid templates are processed by Gumroad / Stripe in compliance with PCI-DSS standards.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[var(--border-color)]">
              <h3 className="font-heading font-bold text-sm text-[var(--text-dark)]">Hosting &amp; CDN</h3>
              <p className="text-xs text-[var(--text-muted)] mt-1">
                Our static website is hosted on high-performance cloud networks (such as Vercel) providing SSL/TLS encryption.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[var(--border-color)]">
              <h3 className="font-heading font-bold text-sm text-[var(--text-dark)]">Analytics</h3>
              <p className="text-xs text-[var(--text-muted)] mt-1">
                We utilize privacy-focused, cookie-free or aggregated metrics to understand traffic trends without cross-site tracking.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Cookies & Tracking */}
        <section className="space-y-4 text-left">
          <h2 className="font-heading font-bold text-xl sm:text-2xl text-[var(--text-dark)]">
            4. Cookies &amp; Tracking Technologies
          </h2>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            A cookie is a small data file placed on your device. We use minimal functional cookies necessary for site navigation and tracking affiliate referrals when you click outbound partner links.
          </p>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            You can configure your browser to reject cookies or notify you when cookies are sent. Rejecting cookies will not affect your ability to view and read any of the public guides on Growth Stack Guide.
          </p>
        </section>

        {/* Section 5: Your Rights & Opt-Outs */}
        <section className="space-y-4 text-left">
          <h2 className="font-heading font-bold text-xl sm:text-2xl text-[var(--text-dark)]">
            5. Your Rights &amp; Control (US &amp; International)
          </h2>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            Regardless of your jurisdiction (including rights under the California Consumer Privacy Act (CCPA) and EU GDPR), you maintain full control over your personal data:
          </p>
          <ul className="space-y-2 text-sm text-[var(--text-muted)] pl-4 list-disc">
            <li><strong>Right to Access:</strong> You can request a copy of the personal information we hold about you.</li>
            <li><strong>Right to Deletion:</strong> You can request that we permanently delete your email and contact information from our databases.</li>
            <li><strong>Instant Unsubscribe:</strong> Every email newsletter includes an immediate, one-click unsubscribe link at the bottom.</li>
          </ul>
        </section>

        {/* Section 6: Contact for Privacy Requests */}
        <section className="p-6 rounded-2xl bg-white border border-[var(--border-color)] space-y-4 text-left">
          <h2 className="font-heading font-bold text-lg text-[var(--text-dark)]">
            Privacy Questions or Data Requests?
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
            If you have questions regarding this Privacy Policy or wish to exercise your data rights, please contact our team at{' '}
            <strong className="text-[var(--text-dark)]">contact@growthstackguide.com</strong> or through our contact page.
          </p>
          <div className="pt-2">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--primary-yellow)] hover:bg-[var(--primary-yellow-hover)] text-[var(--text-dark)] font-bold text-xs shadow-xs transition-colors"
            >
              <span>Submit Data Request</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
