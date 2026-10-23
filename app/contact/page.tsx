import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, Clock, HelpCircle, ShieldCheck, ArrowRight } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with the Growth Stack Guide team for technical template support, editorial feedback, or partnership inquiries.',
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: 'Contact Us | Growth Stack Guide',
    description:
      'We welcome feedback, questions, and editorial suggestions from creators, freelancers, and solopreneurs.',
  },
};

export default function ContactPage() {
  return (
    <div className="w-full py-10 sm:py-16 lg:py-20 bg-[var(--bg-main)]">
      <div className="container-custom max-w-5xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--text-muted)]">
          <Link href="/" className="hover:text-[var(--text-dark)] transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-[var(--text-dark)]">Contact</span>
        </nav>

        {/* Page Header */}
        <header className="space-y-4 text-left border-b border-[var(--border-color)] pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--purple-light)] text-[var(--purple-main)] text-xs font-bold uppercase tracking-wider">
            <Mail className="w-4 h-4" />
            <span>Direct Communication &amp; Support</span>
          </div>
          <h1 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[var(--text-dark)] tracking-tight leading-tight">
            Contact &amp; Inquiries
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed max-w-3xl">
            Have a question about duplicating a Notion template, spotted an outdated software spec, or want to suggest a workflow for us to test? We read and reply to all genuine reader correspondence.
          </p>
        </header>

        {/* 2-Column Contact Info + Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Contact Channels & Guidelines (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="p-6 rounded-2xl bg-white border border-[var(--border-color)] shadow-xs space-y-4">
              <h2 className="font-heading font-bold text-lg text-[var(--text-dark)]">
                Direct Contact Information
              </h2>

              <div className="space-y-4 pt-1">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[var(--purple-light)] text-[var(--purple-main)] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5 min-w-0">
                    <span className="text-xs font-semibold text-[var(--text-muted)] block">
                      General &amp; Editorial Email
                    </span>
                    <a
                      href="mailto:contact@growthstackguide.com"
                      className="font-bold text-sm text-[var(--text-dark)] hover:text-[var(--purple-main)] transition-colors break-all"
                    >
                      contact@growthstackguide.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[var(--color-success-bg)] text-[var(--color-success)] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5 min-w-0">
                    <span className="text-xs font-semibold text-[var(--text-muted)] block">
                      Typical Response Time
                    </span>
                    <span className="font-bold text-sm text-[var(--text-dark)]">
                      Within 24–48 Business Hours
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[var(--color-info-bg)] text-[var(--color-info)] flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5 min-w-0">
                    <span className="text-xs font-semibold text-[var(--text-muted)] block">
                      Editorial Independence
                    </span>
                    <span className="text-xs text-[var(--text-muted)] leading-relaxed block">
                      We strictly decline paid link placements, automated guest posts, and unvetted sponsor deals.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Guidelines Card */}
            <div className="p-5 rounded-2xl bg-[#FAF8F2] border border-[var(--border-color)] space-y-3">
              <h3 className="font-heading font-bold text-sm text-[var(--text-dark)]">
                Inquiry Guidelines
              </h3>
              <ul className="space-y-2 text-xs text-[var(--text-muted)] leading-relaxed">
                <li>
                  <strong className="text-[var(--text-dark)]">Template Support:</strong> Please include the name of the Notion template and your browser/device type so we can quickly diagnose any issue.
                </li>
                <li>
                  <strong className="text-[var(--text-dark)]">Editorial Corrections:</strong> Include the specific URL of the article and a link to the vendor&apos;s active documentation so our team can verify and update timestamps.
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

        {/* Frequently Asked Questions Section */}
        <section className="space-y-6 text-left pt-6 border-t border-[var(--border-color)]">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--purple-main)] uppercase tracking-wider">
              <HelpCircle className="w-4 h-4" />
              <span>Common Questions</span>
            </div>
            <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-[var(--text-dark)]">
              Frequently Asked Inquiries
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-[var(--border-color)] space-y-2">
              <h3 className="font-heading font-bold text-sm text-[var(--text-dark)]">
                How do I duplicate a Notion template into my workspace?
              </h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                Open the template link from your receipt in your browser, log in to your Notion account, and click the <strong>&quot;Duplicate&quot;</strong> button in the top right corner. The entire workspace will instantly copy into your private workspace.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[var(--border-color)] space-y-2">
              <h3 className="font-heading font-bold text-sm text-[var(--text-dark)]">
                Can I suggest a software tool for review?
              </h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                Yes! If you are using a productivity tool that solves a genuine bottleneck for creators, message us. We review software solely based on real operational utility without paid placement.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[var(--border-color)] space-y-2">
              <h3 className="font-heading font-bold text-sm text-[var(--text-dark)]">
                Do you accept paid guest posts or backlinks?
              </h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                No. Growth Stack Guide is 100% editorially independent. We do not sell backlinks, accept paid sponsor articles with pre-approved copy, or publish automated content.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[var(--border-color)] space-y-2">
              <h3 className="font-heading font-bold text-sm text-[var(--text-dark)]">
                How can I unsubscribe from email updates?
              </h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                Every email newsletter we send includes a clear, 1-click unsubscribe link at the very bottom. You will be removed instantly without any questions asked.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
