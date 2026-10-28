import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllResources, getResourceBySlug } from '@/data/resources';
import {
  Sparkles,
  Download,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  HelpCircle,
  Clock,
  Layers,
} from 'lucide-react';

interface ResourcePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const resources = getAllResources();
  return resources.map((r) => ({
    slug: r.slug,
  }));
}

export async function generateMetadata({ params }: ResourcePageProps): Promise<Metadata> {
  const resource = getResourceBySlug(params.slug);
  if (!resource) {
    return {
      title: 'Resource Not Found',
    };
  }

  return {
    title: `${resource.title} | Growth Stack Guide`,
    description: resource.description,
    alternates: {
      canonical: `/resources/${params.slug}/`,
    },
    openGraph: {
      title: `Free ${resource.title} | Growth Stack Guide`,
      description: resource.description,
      url: `/resources/${params.slug}/`,
      images: [
        {
          url: resource.coverImage,
          alt: resource.title,
        },
      ],
    },
  };
}

export default function ResourceDetailPage({ params }: ResourcePageProps) {
  const resource = getResourceBySlug(params.slug);

  if (!resource) {
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
          <Link href="/resources/" className="hover:text-[var(--text-dark)] transition-colors">
            Resources
          </Link>
          <span>/</span>
          <span className="text-[var(--text-dark)] truncate">{resource.title}</span>
        </nav>

        {/* Hero Header */}
        <header className="space-y-6 text-left border-b border-[var(--border-color)] pb-10">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[var(--color-success-bg)] text-[#065F46] shadow-xs">
              {resource.badge}
            </span>
            <span className="text-xs font-bold text-[var(--purple-main)] bg-[var(--purple-light)] px-2.5 py-0.5 rounded-full">
              {resource.modulesCount}
            </span>
            <span className="text-slate-300 hidden sm:inline">&bull;</span>
            <span className="text-xs font-bold text-[#B45309]">
              1-Click Notion Duplication
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[var(--text-dark)] tracking-tight leading-tight">
            {resource.title}
          </h1>

          <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
            {resource.tagline}
          </p>

          {/* Quick Action Download Box */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[var(--border-color)] shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[var(--color-success)] uppercase tracking-wider block">
                Instant Digital Delivery
              </span>
              <div className="font-heading font-extrabold text-xl text-[var(--text-dark)]">
                Instant Template Access
              </div>
              <p className="text-xs text-[var(--text-muted)]">
                Delivered instantly via Gumroad with 1-click workspace duplication.
              </p>
            </div>

            <a
              href={resource.gumroadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[var(--primary-yellow)] hover:bg-[var(--primary-yellow-hover)] text-[var(--text-dark)] font-bold text-xs sm:text-sm shadow-xs hover:shadow transition-all flex-shrink-0 w-full sm:w-auto text-center"
            >
              <Download className="w-4 h-4" />
              <span>Claim Free on Gumroad</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>
        </header>

        {/* Visual Cover Preview */}
        <div className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-[#F6F3EB] border border-[var(--border-color)] shadow-[var(--shadow-sm)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={resource.coverImage}
            alt={resource.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Detailed Breakdown */}
        <section className="space-y-6 text-left">
          <h2 className="font-heading font-extrabold text-xl sm:text-3xl text-[var(--text-dark)]">
            What Is Included in This Free Resource
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
            {resource.description}
          </p>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[var(--border-color)] space-y-4 shadow-xs">
            <span className="text-xs font-bold text-[var(--purple-main)] uppercase tracking-wider block">
              Core Modules &amp; Systems
            </span>
            <ul className="space-y-3">
              {resource.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-xs sm:text-sm text-[var(--text-dark)]">
                  <div className="w-4 h-4 rounded-full bg-[var(--color-success-bg)] text-[var(--color-success)] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQs */}
        {resource.faqs && resource.faqs.length > 0 && (
          <section className="space-y-6 text-left border-t border-[var(--border-color)] pt-10">
            <div className="flex items-center gap-2 text-xs font-bold text-[var(--purple-main)] uppercase tracking-wider">
              <HelpCircle className="w-4 h-4" />
              <span>Common Questions</span>
            </div>

            <h2 className="font-heading font-extrabold text-xl sm:text-3xl text-[var(--text-dark)]">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {resource.faqs.map((faq) => (
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
        )}

        {/* Bottom Download CTA Bar */}
        <section className="p-8 rounded-3xl bg-[var(--bg-navy)] text-white text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1 max-w-lg">
            <h3 className="font-heading font-extrabold text-lg sm:text-2xl text-white">
              Ready to Upgrade Your Daily System?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Claim this system today and duplicate it into your workspace.
            </p>
          </div>

          <a
            href={resource.gumroadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[var(--primary-yellow)] hover:bg-[var(--primary-yellow-hover)] text-[var(--text-dark)] font-bold text-xs sm:text-sm shadow-md transition-all flex-shrink-0"
          >
            <span>Get Notion Template</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </section>

      </div>
    </div>
  );
}
