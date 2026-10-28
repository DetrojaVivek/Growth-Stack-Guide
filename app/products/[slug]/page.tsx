import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllProducts, getProductBySlug } from '@/data/products';
import {
  Sparkles,
  Check,
  X,
  ShieldCheck,
  ExternalLink,
  Layers,
  Database,
  ArrowRight,
  HelpCircle,
  Clock,
  Zap,
} from 'lucide-react';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const products = getAllProducts();
  const slugs = new Set([
    ...products.map((p) => p.slug),
    'client-pulse',
    'client-kickoff-kit',
    'ai-productivity-starter-pack',
    'creator-os',
  ]);
  return Array.from(slugs).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.title} (${product.priceDisplay}) | Growth Stack Guide`,
    description: product.description,
    alternates: {
      canonical: `/products/${params.slug}/`,
    },
    openGraph: {
      title: `${product.title} — Official Notion System (${product.priceDisplay})`,
      description: product.description,
      url: `/products/${params.slug}/`,
      images: [
        {
          url: product.coverImage,
          alt: product.title,
        },
      ],
    },
  };
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="w-full py-10 sm:py-16 lg:py-20 bg-[var(--bg-main)]">
      <div className="container-custom max-w-5xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--text-muted)] text-left">
          <Link href="/" className="hover:text-[var(--text-dark)] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/products/" className="hover:text-[var(--text-dark)] transition-colors">
            Products
          </Link>
          <span>/</span>
          <span className="text-[var(--text-dark)] truncate">{product.title}</span>
        </nav>

        {/* Product Hero Header */}
        <header className="space-y-6 text-left border-b border-[var(--border-color)] pb-10">
          <div className="flex flex-wrap items-center gap-3">
            <span
              className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-xs"
              style={{ backgroundColor: product.badgeBg, color: product.badgeColor }}
            >
              {product.badge}
            </span>
            <span className="text-xs font-bold text-[var(--text-light)] uppercase tracking-wider">
              {product.tier}
            </span>
            <span className="text-slate-300 hidden sm:inline">&bull;</span>
            <Link
              href={`/topics/${product.categorySlug}/`}
              className="text-xs font-semibold text-[var(--purple-main)] hover:underline"
            >
              {product.categoryName}
            </Link>
          </div>

          <h1 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[var(--text-dark)] tracking-tight leading-tight">
            {product.title}
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-[var(--text-muted)] leading-relaxed max-w-3xl">
            {product.tagline}
          </p>

          {/* Pricing & Primary CTA Row */}
          <div className="p-6 rounded-3xl bg-white border border-[var(--border-color)] shadow-[var(--shadow-sm)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-1">
              <div className="flex items-baseline gap-2">
                <span className="font-heading font-extrabold text-3xl sm:text-4xl text-[var(--text-dark)]">
                  {product.priceDisplay}
                </span>
                <span className="text-xs font-semibold text-[var(--text-muted)]">
                  One-time payment • Lifetime personal access
                </span>
              </div>
              <p className="text-xs text-[#10B981] font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>Instant Gumroad Delivery to Notion • Zero Subscription Fees</span>
              </p>
            </div>

            <a
              href={product.gumroadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[var(--primary-yellow)] hover:bg-[var(--primary-yellow-hover)] text-[var(--text-dark)] font-bold text-sm sm:text-base shadow-[var(--shadow-yellow)] transition-all transform hover:-translate-y-0.5 w-full sm:w-auto"
            >
              <span>Get Instant Access Now</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </header>

        {/* Visual Preview Graphic */}
        <section className="space-y-3 text-left">
          <div className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-[#F6F3EB] border border-[var(--border-color)] shadow-[var(--shadow-md)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.coverImage}
              alt={`${product.title} Workspace Preview`}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-xs text-[var(--text-light)] text-center sm:text-left">
            Interactive preview showing interconnected relational databases and dynamic focus dashboard.
          </p>
        </section>

        {/* Outcome & Description Narrative */}
        <section className="space-y-6 text-left">
          <h2 className="font-heading font-extrabold text-xl sm:text-3xl text-[var(--text-dark)]">
            Overview &amp; Architecture
          </h2>
          <div className="p-6 rounded-2xl bg-white border border-[var(--border-color)] space-y-4 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed shadow-xs">
            <p>{product.description}</p>
            <div className="p-4 rounded-xl bg-[var(--bg-main)] border border-[var(--border-color)]">
              <p className="text-xs sm:text-sm font-semibold text-[var(--text-dark)] m-0">
                <strong className="text-[#B45309]">Target Outcome:</strong> {product.outcome}
              </p>
            </div>
          </div>
        </section>

        {/* Databases Included Specification */}
        <section className="space-y-6 text-left">
          <div className="flex items-center gap-2 text-xs font-bold text-[var(--purple-main)] uppercase tracking-wider">
            <Database className="w-4 h-4" />
            <span>Relational Architecture</span>
          </div>

          <h2 className="font-heading font-extrabold text-xl sm:text-3xl text-[var(--text-dark)]">
            What Databases Are Inside
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {product.includedDatabases.map((db) => (
              <div
                key={db.name}
                className="p-5 rounded-2xl bg-white border border-[var(--border-color)] space-y-2 shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-heading font-bold text-sm sm:text-base text-[var(--text-dark)]">
                    {db.name}
                  </h3>
                  {db.count && (
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[var(--purple-light)] text-[var(--purple-main)]">
                      {db.count}
                    </span>
                  )}
                </div>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  {db.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Features Checklist */}
        <section className="space-y-6 text-left">
          <h2 className="font-heading font-extrabold text-xl sm:text-3xl text-[var(--text-dark)]">
            Everything Included in Your Download
          </h2>
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[var(--border-color)] shadow-xs">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.features.map((feat) => (
                <li key={feat} className="flex items-start gap-3 text-xs sm:text-sm text-[var(--text-muted)]">
                  <div className="w-5 h-5 rounded-full bg-[var(--color-success-bg)] text-[var(--color-success)] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Disqualification Matrix: Who This Is For vs NOT For */}
        <section className="space-y-6 text-left">
          <h2 className="font-heading font-extrabold text-xl sm:text-3xl text-[var(--text-dark)]">
            Is This System Right For You?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Who This Is For */}
            <div className="p-6 rounded-3xl bg-white border border-[#A7F3D0] shadow-xs space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#065F46] uppercase tracking-wider">
                <Check className="w-4 h-4 stroke-[3]" />
                <span>Who This Is For</span>
              </div>
              <ul className="space-y-3">
                {product.whoIsThisFor.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <div className="w-4 h-4 rounded-full bg-[#ECFDF5] text-[#059669] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Who This Is NOT For */}
            <div className="p-6 rounded-3xl bg-white border border-[#FECDD3] shadow-xs space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#9F1239] uppercase tracking-wider">
                <X className="w-4 h-4 stroke-[3]" />
                <span>Who This Is NOT For</span>
              </div>
              <ul className="space-y-3">
                {product.whoIsThisNotFor.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <div className="w-4 h-4 rounded-full bg-[#FFF1F2] text-[#E11D48] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </section>

        {/* How It Works (3 Steps) */}
        <section className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-navy)] text-white text-left space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold text-[var(--primary-yellow)] uppercase tracking-wider">
              Simple 3-Step Setup
            </span>
            <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
              How You Receive and Use This System
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-white/10 text-[var(--primary-yellow)] font-bold text-sm flex items-center justify-center">
                1
              </div>
              <h3 className="font-heading font-bold text-sm text-white">
                Instant Gumroad Checkout
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Complete your one-time purchase securely on Gumroad. No subscription or recurring fees.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-white/10 text-[var(--primary-yellow)] font-bold text-sm flex items-center justify-center">
                2
              </div>
              <h3 className="font-heading font-bold text-sm text-white">
                1-Click Notion Duplication
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Click the private access link in your receipt and tap &quot;Duplicate&quot; to copy the system to your workspace.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-white/10 text-[var(--primary-yellow)] font-bold text-sm flex items-center justify-center">
                3
              </div>
              <h3 className="font-heading font-bold text-sm text-white">
                Customize and Execute
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Follow our 10-minute setup guide to populate your active tasks, content schedule, and client pipeline.
              </p>
            </div>
          </div>
        </section>

        {/* Product FAQs */}
        <section className="space-y-6 text-left border-t border-[var(--border-color)] pt-10">
          <div className="flex items-center gap-2 text-xs font-bold text-[var(--purple-main)] uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>Common Questions</span>
          </div>

          <h2 className="font-heading font-extrabold text-xl sm:text-3xl text-[var(--text-dark)]">
            Frequently Asked Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.faqs.map((faq) => (
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

        {/* Bottom CTA Card */}
        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-white to-[#FAF8F2] border border-[var(--border-color)] shadow-[var(--shadow-md)] text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-bold text-[#B45309] uppercase tracking-wider block">
              Ready to Upgrade Your Operations?
            </span>
            <h3 className="font-heading font-extrabold text-xl sm:text-3xl text-[var(--text-dark)]">
              Get {product.title} Today
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
              One-time payment of {product.priceDisplay}. Instant delivery to your Notion workspace with zero recurring costs.
            </p>
          </div>

          <a
            href={product.gumroadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[var(--primary-yellow)] hover:bg-[var(--primary-yellow-hover)] text-[var(--text-dark)] font-bold text-sm sm:text-base shadow-[var(--shadow-yellow)] transition-all flex-shrink-0"
          >
            <span>Get on Gumroad ({product.priceDisplay})</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </section>

      </div>
    </div>
  );
}
