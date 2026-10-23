import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  getAllTopicPillars,
  getTopicPillarBySlug,
} from '@/lib/topics';
import { getArticlesByCategory } from '@/lib/content';
import { getProductsByCategory } from '@/data/products';
import { getToolsByCategory } from '@/data/tools';
import BlogCard from '@/components/BlogCard';
import {
  Brain,
  Zap,
  PenTool,
  Briefcase,
  Target,
  CheckCircle2,
  Download,
  ArrowRight,
  HelpCircle,
  ExternalLink,
  Layers,
  Wrench,
} from 'lucide-react';

interface TopicPageProps {
  params: {
    slug: string;
  };
}

const iconMap: Record<string, React.ElementType> = {
  Brain,
  Zap,
  PenTool,
  Briefcase,
  Target,
};

const topicBanners: Record<
  string,
  {
    badge: string;
    title: string;
    description: string;
    ctaText: string;
    ctaUrl: string;
  }
> = {
  'ai-productivity': {
    badge: 'Free Prompt Vault & Swipe File',
    title: 'Get the 50 Field-Tested AI Prompts for Creators & Solopreneurs',
    description:
      'Stop using generic one-line prompts that produce robotic copy. Copy 50 structured, multi-turn prompt chains with role priming, voice constraints, and output rubrics for Claude and ChatGPT.',
    ctaText: 'Get Free AI Prompt Vault',
    ctaUrl: '/resources/50-ai-prompt-vault-swipe-file/',
  },
  'notion-systems': {
    badge: 'Free Notion Workspace',
    title: 'Get the Turnkey Notion Workspace Architecture',
    description:
      'Master relational databases, habit tracking formulas, and minimal workspace architecture without cognitive fatigue or cluttered nested pages.',
    ctaText: 'Get Free Notion System',
    ctaUrl: '/resources/ai-creator-productivity-kit/',
  },
  'freelancer-systems': {
    badge: 'Pre-Built Notion Architecture',
    title: 'Get the Pre-Configured Notion Follow-Up Pipeline',
    description:
      'Don\'t build from scratch. Our Freelancer Follow-Up Tracker includes an automated Formula 2.0 urgency radar, a 5-second lead capture dock, and 3 battle-tested follow-up swipe scripts.',
    ctaText: 'Get Free Follow-Up Tracker',
    ctaUrl: '/resources/ai-creator-productivity-kit/',
  },
  'solopreneur-operations': {
    badge: 'Free Sunday SOP Checklist',
    title: 'Get the Solopreneur Weekly Review Operating Checklist',
    description:
      'A repeatable 45-minute Sunday ritual SOP to clear backlogs, audit financial inputs, and plan high-impact sprints with zero Monday decision fatigue.',
    ctaText: 'Get Free Weekly Checklist',
    ctaUrl: '/resources/solopreneur-weekly-review-checklist/',
  },
  'software-guides': {
    badge: 'Unbiased Software Reviews',
    title: 'Explore Our Verified Software Decision Matrices',
    description:
      'Compare pricing tiers, limitations, and operational trade-offs for solo business software without vendor marketing spin or sponsored bias.',
    ctaText: 'Browse Verified Software',
    ctaUrl: '/tools/',
  },
};

export async function generateStaticParams() {
  const pillars = getAllTopicPillars();
  return pillars.map((pillar) => ({
    slug: pillar.slug,
  }));
}

export async function generateMetadata({ params }: TopicPageProps): Promise<Metadata> {
  const pillar = getTopicPillarBySlug(params.slug);
  if (!pillar) {
    return {
      title: 'Topic Not Found',
    };
  }

  return {
    title: `${pillar.title} — Field-Tested Blueprints & SOPs | Growth Stack Guide`,
    description: pillar.description,
    openGraph: {
      title: `${pillar.title} | Growth Stack Guide`,
      description: pillar.description,
    },
  };
}

export default function TopicHubPage({ params }: TopicPageProps) {
  const pillar = getTopicPillarBySlug(params.slug);

  if (!pillar) {
    notFound();
  }

  const articles = getArticlesByCategory(pillar.slug);
  const relatedProducts = getProductsByCategory(pillar.slug);
  const relatedTools = getToolsByCategory(pillar.slug);
  const IconComponent = iconMap[pillar.iconName] || Brain;
  const banner = topicBanners[pillar.slug] || topicBanners['ai-productivity'];

  return (
    <div className="w-full py-10 sm:py-16 lg:py-20 bg-[var(--bg-main)]">
      <div className="container-custom max-w-7xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--text-muted)] text-left">
          <Link href="/" className="hover:text-[var(--text-dark)] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/topics/" className="hover:text-[var(--text-dark)] transition-colors">
            Topics
          </Link>
          <span>/</span>
          <span className="text-[var(--text-dark)]">{pillar.categoryName}</span>
        </nav>

        {/* Hero Section */}
        <header className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-white border border-[var(--border-color)] shadow-[var(--shadow-sm)] space-y-6 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className={`space-y-4 ${pillar.coverImage ? 'lg:col-span-7' : 'lg:col-span-12'}`}>
              <div className="flex flex-wrap items-center gap-2.5">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xs"
                  style={{ backgroundColor: pillar.accentBg, color: pillar.accentColor }}
                >
                  <IconComponent className="w-6 h-6" />
                </div>
                <span
                  className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs"
                  style={{ backgroundColor: pillar.accentBg, color: pillar.accentColor }}
                >
                  {pillar.badge}
                </span>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#FAF8F2] text-[var(--text-muted)] border border-[var(--border-color)]">
                  {pillar.blueprintCount}
                </span>
              </div>

              <h1 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[var(--text-dark)] tracking-tight leading-tight">
                {pillar.title}
              </h1>

              <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed border-t border-[var(--border-color)] pt-4">
                {pillar.longDescription}
              </p>
            </div>

            {pillar.coverImage && (
              <div className="lg:col-span-5 relative aspect-[16/10] rounded-2xl overflow-hidden border border-[var(--border-color)] shadow-xs bg-[#F6F3EB]">
                <picture>
                  <source
                    srcSet={pillar.coverImage.replace(/\.(png|jpg|jpeg)$/, '.webp')}
                    type="image/webp"
                  />
                  <img
                    src={pillar.coverImage}
                    alt={pillar.title}
                    width={640}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </picture>
              </div>
            )}
          </div>

          {/* Standard Operating Procedures Breakdown */}
          <div className="space-y-3 pt-4 border-t border-[var(--border-color)]">
            <span className="text-xs font-bold text-[var(--text-dark)] uppercase tracking-wider block">
              Core Systems &amp; Relational Architectures Covered:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {pillar.systemSOPs.map((sop) => (
                <div key={sop} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-dark)]">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                  <span>{sop}</span>
                </div>
              ))}
            </div>
          </div>
        </header>

        {/* Category Products (if any) */}
        {relatedProducts.length > 0 && (
          <section className="space-y-6 text-left">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-[var(--purple-main)] uppercase tracking-wider">
                <Layers className="w-4 h-4" />
                <span>Pre-Built Systems in this Category</span>
              </div>
              <Link href="/products/" className="text-xs font-bold text-[var(--purple-main)] hover:underline">
                View All Products &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedProducts.map((prod) => (
                <div
                  key={prod.slug}
                  className="p-6 rounded-3xl bg-white border border-[var(--border-color)] shadow-xs flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[var(--purple-light)] text-[var(--purple-main)]">
                        {prod.tier}
                      </span>
                      <span className="font-extrabold text-sm text-[var(--text-dark)]">
                        {prod.priceDisplay}
                      </span>
                    </div>
                    <h3 className="font-heading font-extrabold text-lg text-[var(--text-dark)]">
                      <Link href={`/products/${prod.slug}/`} className="hover:text-[var(--purple-main)] transition-colors">
                        {prod.title}
                      </Link>
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                      {prod.tagline}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[var(--border-color)] mt-4 flex items-center justify-between">
                    <Link
                      href={`/products/${prod.slug}/`}
                      className="text-xs font-bold text-[var(--text-dark)] hover:text-[var(--purple-main)] inline-flex items-center gap-1"
                    >
                      <span>Explore System</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <a
                      href={prod.gumroadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold px-4 py-2 rounded-full bg-[var(--primary-yellow)] hover:bg-[var(--primary-yellow-hover)] text-[var(--text-dark)] inline-flex items-center gap-1.5"
                    >
                      <span>Get on Gumroad</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Pillar Guides Grid */}
        <section className="space-y-6 text-left">
          <div className="flex items-center justify-between">
            <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-[var(--text-dark)]">
              Published Guides in this Category
            </h2>
            <Link
              href="/blog/"
              className="text-xs font-bold text-[var(--purple-main)] hover:underline inline-flex items-center gap-1"
            >
              <span>View All Master Guides</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <BlogCard key={article.slug} article={article.frontmatter} />
              ))}
            </div>
          ) : (
            <div className="p-8 rounded-2xl bg-white border border-[var(--border-color)] text-center text-sm text-[var(--text-muted)]">
              More detailed blueprints are actively being added to this category.
            </div>
          )}
        </section>

        {/* Curated Category Tools */}
        {relatedTools.length > 0 && (
          <section className="space-y-6 text-left">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-[var(--purple-main)] uppercase tracking-wider">
                <Wrench className="w-4 h-4" />
                <span>Verified Tools for {pillar.categoryName}</span>
              </div>
              <Link href="/tools/" className="text-xs font-bold text-[var(--purple-main)] hover:underline">
                View All Tools &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedTools.map((tool) => (
                <div
                  key={tool.slug}
                  className="p-5 rounded-2xl bg-white border border-[var(--border-color)] shadow-xs flex flex-col justify-between gap-4"
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-heading font-bold text-base text-[var(--text-dark)]">
                        <Link href={`/tools/${tool.slug}/`} className="hover:text-[var(--purple-main)] transition-colors">
                          {tool.name}
                        </Link>
                      </h3>
                      <span className="text-[11px] font-semibold text-[var(--text-light)] px-2 py-0.5 rounded-full bg-[#FAF8F2] border border-[var(--border-color)] flex-shrink-0">
                        {tool.pricingTier.split('(')[0].trim()}
                      </span>
                    </div>
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed line-clamp-2">
                      {tool.tagline}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[var(--border-color)] flex items-center justify-between text-xs">
                    <Link
                      href={`/tools/${tool.slug}/`}
                      className="font-bold text-[var(--text-dark)] hover:text-[var(--purple-main)] inline-flex items-center gap-1"
                    >
                      <span>Review Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <a
                      href={tool.affiliateUrl}
                      target="_blank"
                      rel="sponsored noopener noreferrer"
                      className="inline-flex items-center gap-1 font-bold text-[var(--purple-main)] hover:underline"
                      aria-label={`Visit ${tool.name}`}
                    >
                      <span>Visit Tool</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Associated Systems Architecture Banner */}
        <section className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-r from-white to-[#FAF8F2] border border-[var(--border-color)] shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-left">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold text-[#10B981] uppercase tracking-wider block">
              {banner.badge}
            </span>
            <h3 className="font-heading font-extrabold text-lg sm:text-2xl text-[var(--text-dark)]">
              {banner.title}
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
              {banner.description}
            </p>
          </div>

          <Link
            href={banner.ctaUrl}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[var(--primary-yellow)] hover:bg-[var(--primary-yellow-hover)] text-[var(--text-dark)] font-bold text-xs sm:text-sm shadow-xs transition-colors flex-shrink-0"
          >
            <Download className="w-4 h-4" />
            <span>{banner.ctaText}</span>
          </Link>
        </section>

        {/* Category FAQs */}
        {pillar.faqs.length > 0 && (
          <section className="space-y-6 text-left border-t border-[var(--border-color)] pt-8">
            <div className="flex items-center gap-2 text-xs font-bold text-[var(--purple-main)] uppercase tracking-wider">
              <HelpCircle className="w-4 h-4" />
              <span>Category Roadblocks Solved</span>
            </div>
            <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-[var(--text-dark)]">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pillar.faqs.map((faq) => (
                <div key={faq.question} className="p-5 rounded-2xl bg-white border border-[var(--border-color)] space-y-2 shadow-xs">
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

      </div>
    </div>
  );
}
