import React from 'react';
import Link from 'next/link';
import { ArrowRight, Brain, Zap, Briefcase, Target, Layers, Sparkles } from 'lucide-react';

const pillars = [
  {
    title: 'AI Productivity Systems',
    description: 'Field-tested prompt chains, autonomous workflow automations, and weekly planning systems that eliminate administrative overhead.',
    href: '/topics/ai-productivity/',
    icon: Zap,
    color: '#3B9EFF',
    bg: '#EBF5FF',
    badge: 'AI Automation Hub',
    count: '12+ Systems',
  },
  {
    title: 'Notion Business Systems',
    description: 'Turn chaotic notes into an interconnected Second Brain. Relational database schemas, CRM pipelines, and clean workspace architecture.',
    href: '/topics/notion-systems/',
    icon: Brain,
    color: '#6C4DFF',
    bg: '#F3F0FF',
    badge: 'Second Brain Hub',
    count: '15+ Blueprints',
  },
  {
    title: 'Freelancer Business Systems',
    description: 'Client onboarding systems, plain-English contract agreements, scope boundary protection, and milestone invoice ledgers.',
    href: '/topics/freelancer-systems/',
    icon: Briefcase,
    color: '#4F46E5',
    bg: '#EEF2FF',
    badge: 'Client Ops Hub',
    count: '8+ Kits',
  },
  {
    title: 'Solopreneur Operations OS',
    description: 'Lean business operating systems for solo digital operators. Sunday weekly review rituals, multi-channel batching, and cashflow tracking.',
    href: '/topics/solopreneur-operations/',
    icon: Target,
    color: '#D97706',
    bg: '#FEF3C7',
    badge: 'Business OS Hub',
    count: '9+ Dashboards',
  },
  {
    title: 'AI & Software Decision Guides',
    description: 'Unbiased, hands-on software evaluations and decision matrices for solo operators. Verified pricing timestamps and zero sponsor bias.',
    href: '/topics/software-guides/',
    icon: Layers,
    color: '#10B981',
    bg: '#EBFBEE',
    badge: 'Decision Matrix',
    count: '6+ Reviews',
  },
];

export default function CoreCategories() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[var(--bg-main)]">
      <div className="container-custom max-w-7xl mx-auto space-y-8 sm:space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-[var(--border-color)] text-xs font-bold text-[var(--purple-main)] uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[var(--purple-main)]" />
            <span>The 5 Strategic Knowledge Pillars</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[var(--text-dark)] tracking-tight">
            Explore Field-Tested Systems by Pillar
          </h2>
          <p className="text-xs sm:text-base text-[var(--text-muted)] leading-relaxed max-w-2xl mx-auto">
            Organized frameworks, duplicable Notion templates, and tested AI prompt chains engineered specifically for one-person businesses.
          </p>
        </div>

        {/* 5 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            const isLastOnLarge = index === 4;
            return (
              <Link
                key={pillar.title}
                href={pillar.href}
                className={`group flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-white border border-[var(--border-color)] hover:border-[var(--purple-main)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-all transform hover:-translate-y-1 text-left ${
                  isLastOnLarge ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 shadow-xs"
                      style={{ backgroundColor: pillar.bg, color: pillar.color }}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#FAF8F2] text-[var(--text-muted)] border border-[var(--border-color)]">
                      {pillar.count}
                    </span>
                  </div>

                  <div>
                    <span
                      className="text-[11px] font-bold uppercase tracking-wider block mb-1"
                      style={{ color: pillar.color }}
                    >
                      {pillar.badge}
                    </span>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-[var(--text-dark)] group-hover:text-[var(--purple-main)] transition-colors leading-snug">
                      {pillar.title}
                    </h3>
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
    </section>
  );
}
