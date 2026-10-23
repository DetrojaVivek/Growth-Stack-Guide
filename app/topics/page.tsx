import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllTopicPillars } from '@/lib/topics';
import { Brain, Zap, PenTool, Briefcase, Target, ArrowRight, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Knowledge Pillars & System Categories',
  description:
    'Explore our 5 core productivity knowledge pillars: Notion Systems, AI Workflows, Creator Systems, Freelancer CRM, and Solopreneur Business OS.',
  openGraph: {
    title: 'Knowledge Pillars | Growth Stack Guide',
    description:
      'Field-tested blueprints, SOPs, and operating architectures categorized for solo creators, freelancers, and entrepreneurs.',
  },
};

const iconMap: Record<string, React.ElementType> = {
  Brain,
  Zap,
  PenTool,
  Briefcase,
  Target,
};

export default function TopicsIndexPage() {
  const pillars = getAllTopicPillars();

  return (
    <div className="w-full py-10 sm:py-16 lg:py-20 bg-[var(--bg-main)]">
      <div className="container-custom max-w-7xl mx-auto px-4 sm:px-6 space-y-10 sm:space-y-14">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--text-muted)] text-left">
          <Link href="/" className="hover:text-[var(--text-dark)] transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-[var(--text-dark)]">Knowledge Pillars</span>
        </nav>

        {/* Header */}
        <header className="space-y-4 text-left border-b border-[var(--border-color)] pb-8 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--purple-light)] text-[var(--purple-main)] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Curated Operating Systems</span>
          </div>
          <h1 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[var(--text-dark)] tracking-tight leading-tight">
            Explore Systems by Knowledge Pillar
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-[var(--text-muted)] leading-relaxed">
            Select your operational focus area below to access free step-by-step guides, duplicable Notion templates, and tested AI prompt chains tailored for solo digital operators.
          </p>
        </header>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const IconComponent = iconMap[pillar.iconName] || Brain;
            return (
              <Link
                key={pillar.slug}
                href={`/topics/${pillar.slug}/`}
                className="group flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-white border border-[var(--border-color)] hover:border-[var(--purple-main)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-all transform hover:-translate-y-1 text-left"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 shadow-xs"
                      style={{ backgroundColor: pillar.accentBg, color: pillar.accentColor }}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#FAF8F2] text-[var(--text-muted)] border border-[var(--border-color)]">
                      {pillar.blueprintCount}
                    </span>
                  </div>

                  <div>
                    <span
                      className="text-[11px] font-bold uppercase tracking-wider block"
                      style={{ color: pillar.accentColor }}
                    >
                      {pillar.badge}
                    </span>
                    <h2 className="font-heading font-bold text-lg sm:text-xl text-[var(--text-dark)] group-hover:text-[var(--purple-main)] transition-colors mt-1">
                      {pillar.title}
                    </h2>
                  </div>

                  <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-[var(--border-color)] flex items-center justify-between text-xs font-bold text-[var(--purple-main)]">
                  <span>Explore Pillar Hub</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </div>
  );
}
