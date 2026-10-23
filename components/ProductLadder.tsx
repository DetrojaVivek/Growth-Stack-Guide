import React from 'react';
import Link from 'next/link';
import { Check, Sparkles, ArrowRight } from 'lucide-react';

const products = [
  {
    title: 'Freelancer Follow-Up Tracker',
    price: '$0',
    tier: 'Free System',
    badge: 'Lead Pipeline',
    badgeBg: '#EBF5FF',
    badgeColor: '#2563EB',
    description: 'High-speed follow-up pipeline to guarantee zero freelance inquiries slip through the cracks.',
    features: [
      '1-Tap [+ Quick-Log Inbound Lead] action dock',
      'Dynamic Formula 2.0 Urgency Radar alerts',
      '3 Follow-Up Email Swipe Scripts (48h & breakup)',
      '14-Day cadence timing roadmap table',
    ],
    href: '/resources/ai-creator-productivity-kit/',
    highlighted: false,
    ctaText: 'Get Free Access',
  },
  {
    title: 'Client Pulse CRM',
    price: '$7',
    tier: 'Relationship CRM',
    badge: 'Quick Win',
    badgeBg: '#F3F0FF',
    badgeColor: '#6C4DFF',
    description: 'Lightweight freelancer CRM that prevents client neglect, tracks Zoom agreements, and milestones.',
    features: [
      'Automated 14-Day Inactivity Radar alerts',
      'Dedicated Client Relationship Dossiers & timezones',
      'Standardized Zoom Meeting Decision Log Hub',
      '3 Client Retention Email Swipe Files (Scope & upsell)',
    ],
    href: '/products/client-pulse/',
    highlighted: false,
    ctaText: 'Get Client Pulse ($7)',
  },
  {
    title: 'Client Kickoff Kit',
    price: '$19',
    tier: 'Onboarding Suite',
    badge: 'Most Popular',
    badgeBg: '#FEF3C7',
    badgeColor: '#D97706',
    description: 'Repeatable onboarding workflow with niche intake questionnaires and contract scope defense clauses.',
    features: [
      'Onboarding Command Center with 3 filtered views',
      'Automated Formula 2.0 ⚡ Readiness Radar gatekeeper',
      '3 Niche Intake Questionnaires (Design, Copy, Dev)',
      '3 Contract Scope Creep Defense Boilerplate Clauses',
    ],
    href: '/products/client-kickoff-kit/',
    highlighted: true,
    ctaText: 'Get Kickoff Kit ($19)',
  },
];

export default function ProductLadder() {
  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-[var(--bg-main)]">
      <div className="container-custom max-w-7xl mx-auto space-y-8 sm:space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white border border-[var(--border-color)] text-[11px] sm:text-xs font-bold text-[var(--purple-main)] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[var(--purple-main)]" />
            <span>Digital Product Ladder</span>
          </div>
          <h2 className="font-heading font-extrabold text-xl sm:text-3xl lg:text-4xl text-[var(--text-dark)] tracking-tight">
            Premium Systems for Serious Solopreneurs
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[var(--text-muted)] leading-relaxed">
            Start free or upgrade to dedicated workflow suites. Every paid template includes lifetime updates, clear video SOPs, and zero monthly subscriptions.
          </p>
        </div>

        {/* 3 Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {products.map((item) => (
            <div
              key={item.title}
              className={`flex flex-col justify-between p-5 sm:p-6 lg:p-6 rounded-2xl bg-white border transition-all ${
                item.highlighted
                  ? 'border-[var(--primary-yellow)] ring-2 ring-[var(--primary-yellow)]/30 shadow-[var(--shadow-lg)] transform lg:-translate-y-2'
                  : 'border-[var(--border-color)] hover:border-[var(--purple-main)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)]'
              }`}
            >
              <div className="space-y-3.5 sm:space-y-4">
                {/* Badge & Tier */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] sm:text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">
                    {item.tier}
                  </span>
                  <span
                    className="text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full"
                    style={{ backgroundColor: item.badgeBg, color: item.badgeColor }}
                  >
                    {item.badge}
                  </span>
                </div>

                {/* Price Display */}
                <div>
                  <span className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-3xl xl:text-4xl text-[var(--text-dark)]">
                    {item.price}
                  </span>
                  <span className="text-xs text-[var(--text-muted)] ml-1 font-medium">
                    one-time
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-[var(--text-dark)] leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] mt-1.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-2 pt-2 border-t border-[var(--border-color)]">
                  {item.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-xs text-[var(--text-dark)]">
                      <Check className="w-3.5 h-3.5 text-[var(--color-success)] flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-5 mt-4 border-t border-[var(--border-color)]">
                <Link
                  href={item.href}
                  className={`flex items-center justify-center gap-1.5 w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm min-h-[44px] transition-all ${
                    item.highlighted
                      ? 'bg-[var(--primary-yellow)] hover:bg-[var(--primary-yellow-hover)] text-[var(--text-dark)] shadow-[var(--shadow-yellow)]'
                      : 'bg-white hover:bg-[#FAF8F2] text-[var(--text-dark)] border border-[var(--border-color)] hover:border-[var(--text-muted)]'
                  }`}
                >
                  <span>{item.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
