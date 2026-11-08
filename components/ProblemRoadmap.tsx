import React from 'react';
import Link from 'next/link';
import {
  Users,
  AlertCircle,
  FileText,
  Layers,
  ArrowRight,
  Compass,
  CheckCircle2,
  DollarSign,
  Zap,
} from 'lucide-react';

const problems = [
  {
    tag: 'Client Onboarding',
    tagBg: '#F3F0FF',
    tagColor: '#6C4DFF',
    icon: Users,
    iconBg: '#F3F0FF',
    iconColor: '#6C4DFF',
    title: 'Chaotic Client Hand-Offs & Scope Creep',
    friction: 'You sign a new client, but requirements scatter across emails, files go missing, and kickoff calls turn into unstructured Q&A.',
    solution: 'Standardize intake, asset locking, and private client portal access into 4 sequential steps in Notion.',
    guideTitle: 'The 4-Phase Freelance Client Onboarding Blueprint',
    guideUrl: '/blog/client-onboarding-system/',
    badge: 'Cuts 70% of Check-In Emails',
  },
  {
    tag: 'Cashflow Defense',
    tagBg: '#FEF3C7',
    tagColor: '#B45309',
    icon: DollarSign,
    iconBg: '#FEF3C7',
    iconColor: '#B45309',
    title: 'Late Net-30 Payments & Awkward Reminders',
    friction: 'Invoices sit unpaid for 15, 30, or 45 days. You hesitate to follow up because you don’t want to sound aggressive or damage relationships.',
    solution: 'Implement an automated invoice aging ledger paired with 3 objective, step-by-step escalation email scripts.',
    guideTitle: 'Freelance Overdue Invoice Recovery System & Scripts',
    guideUrl: '/blog/freelance-overdue-invoice-email-scripts/',
    badge: 'Field-Tested Word-for-Word Scripts',
  },
  {
    tag: 'Pipeline Management',
    tagBg: '#ECFDF5',
    tagColor: '#065F46',
    icon: Layers,
    iconBg: '#ECFDF5',
    iconColor: '#065F46',
    title: 'Ghosted Inquiries & Forgotten Follow-Ups',
    friction: 'Prospective client leads get lost across email inboxes, Upwork chats, and LinkedIn messages because corporate CRMs feel too bloated.',
    solution: 'Build a lightweight 5-property Notion pipeline with single-tap capture and dynamic 48-hour urgency badges.',
    guideTitle: 'Minimalist 5-Property Notion Freelancer CRM',
    guideUrl: '/blog/notion-freelancer-crm/',
    badge: 'Runs on Notion Free Tier',
  },
  {
    tag: 'Tool Selection',
    tagBg: '#EBF5FF',
    tagColor: '#2563EB',
    icon: Zap,
    iconBg: '#EBF5FF',
    iconColor: '#2563EB',
    title: 'Overpaying for Bloated SaaS Subscriptions',
    friction: 'Paying $40 to $80 per month for heavy software with features you will never use, while free-tier setups go completely underutilized.',
    solution: 'Unvarnished software evaluations showing how to run your business on free-tier Notion and frontier AI models.',
    guideTitle: 'Notion for Solopreneurs: Honest Operational Review (2026)',
    guideUrl: '/tools/notion/',
    badge: 'Verified 2026 Pricing & Real Limits',
  },
];

export default function ProblemRoadmap() {
  return (
    <section id="start-here" className="py-12 sm:py-16 lg:py-20 bg-[var(--bg-main)]">
      <div className="container-custom max-w-7xl mx-auto space-y-8 sm:space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-[var(--border-color)] text-xs font-bold text-[var(--purple-main)] uppercase tracking-wider shadow-xs">
            <Compass className="w-3.5 h-3.5 text-[var(--purple-main)]" />
            <span>Start Here &bull; Choose Your Operational Bottleneck</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[var(--text-dark)] tracking-tight">
            Where Is Your Solo Business Leaking Time or Cash?
          </h2>
          <p className="text-xs sm:text-base text-[var(--text-muted)] leading-relaxed max-w-2xl mx-auto">
            Skip the generic advice. Pick your current operational friction point to access the verified step-by-step guide and free companion setup.
          </p>
        </div>

        {/* 4 Problem Paths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto text-left">
          {problems.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.title}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-[var(--border-color)] hover:border-[var(--purple-main)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-all flex flex-col justify-between space-y-5 group"
              >
                <div className="space-y-4">
                  {/* Top Bar: Icon + Category Badge */}
                  <div className="flex items-center justify-between gap-3">
                    <div
                      className="w-10 h-10 rounded-2xl flex items-center justify-center shadow-2xs"
                      style={{ backgroundColor: item.iconBg, color: item.iconColor }}
                    >
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span
                      className="text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider"
                      style={{ backgroundColor: item.tagBg, color: item.tagColor }}
                    >
                      {item.tag}
                    </span>
                  </div>

                  {/* Title & Pain Point */}
                  <div className="space-y-2">
                    <h3 className="font-heading font-extrabold text-lg sm:text-xl text-[var(--text-dark)] group-hover:text-[var(--purple-main)] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.friction}
                    </p>
                  </div>

                  {/* The Tested Solution */}
                  <div className="p-3.5 rounded-2xl bg-[var(--bg-main)] border border-[var(--border-color)] space-y-1">
                    <span className="text-[11px] font-bold text-[var(--text-dark)] uppercase tracking-wider block">
                      The Operational Solution:
                    </span>
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                      {item.solution}
                    </p>
                  </div>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-2 border-t border-[var(--border-color)] flex items-center justify-between gap-2">
                  <div className="text-[11px] font-semibold text-[#065F46] flex items-center gap-1 truncate">
                    <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 text-[#059669]" />
                    <span className="truncate">{item.badge}</span>
                  </div>

                  <Link
                    href={item.guideUrl}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--purple-main)] hover:underline flex-shrink-0"
                  >
                    <span>Read Blueprint</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

