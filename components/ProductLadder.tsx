import React from 'react';
import Link from 'next/link';
import { Check, Sparkles, ArrowRight, ShieldCheck, Wrench, ChevronRight } from 'lucide-react';

export default function ProductLadder() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[var(--bg-main)]">
      <div className="container-custom max-w-7xl mx-auto space-y-10 sm:space-y-12">
        
        {/* Open-Access Editorial Philosophy Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[var(--border-color)] shadow-xs max-w-5xl mx-auto text-left space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ECFDF5] text-[#065F46] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#059669]" />
            <span>The Open-Access Promise</span>
          </div>
          <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-[var(--text-dark)]">
            Every System on Growth Stack Guide Can Be Built for Free
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            We believe software independence is critical for one-person businesses. Every database schema, formula calculation, and setup step is published in full in our free public guides. We never lock foundational knowledge behind paywalls.
          </p>
        </div>

        {/* Turnkey Systems Sub-Section */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[var(--border-color)] text-[11px] sm:text-xs font-bold text-[var(--purple-main)] uppercase tracking-wider shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[var(--purple-main)]" />
            <span>Optional Convenience Workspaces</span>
          </div>
          <h3 className="font-heading font-extrabold text-xl sm:text-3xl text-[var(--text-dark)] tracking-tight">
            Prefer Turnkey Systems Ready to Deploy?
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-[var(--text-muted)] leading-relaxed">
            If you don&apos;t have 5 hours to build database structures from scratch, these pre-configured workspaces are ready to duplicate directly into your Notion account.
          </p>
        </div>

        {/* 3 Balanced Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch text-left">
          
          {/* Card 1: Client Pulse */}
          <div className="p-6 rounded-3xl bg-white border border-[var(--border-color)] hover:border-[var(--purple-main)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-all flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#F3F0FF] text-[#6C4DFF] uppercase tracking-wider">
                  Relationship CRM
                </span>
                <span className="font-heading font-extrabold text-base text-[var(--text-dark)]">
                  $7 on Gumroad
                </span>
              </div>
              <div className="space-y-1.5">
                <h4 className="font-heading font-bold text-lg text-[var(--text-dark)]">
                  Client Pulse CRM
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The anti-neglect client tracking engine. Prevents dropped client relationships with automated 14-day touchpoint alerts and standardized Zoom decision logs.
                </p>
              </div>
              <ul className="space-y-2 text-xs text-slate-600 border-t border-[var(--border-color)] pt-3">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#059669]" />
                  <span>Automated Inactivity Radar</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#059669]" />
                  <span>Client Relationship Dossiers</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#059669]" />
                  <span>3 Retention Email Swipe Files</span>
                </li>
              </ul>
            </div>
            <Link
              href="/products/client-pulse/"
              className="inline-flex items-center justify-between p-3 rounded-2xl bg-[var(--bg-main)] hover:bg-[#F3F0FF] text-xs font-bold text-[var(--text-dark)] transition-colors"
            >
              <span>View System Specs</span>
              <ChevronRight className="w-4 h-4 text-[#6C4DFF]" />
            </Link>
          </div>

          {/* Card 2: Client Kickoff Kit */}
          <div className="p-6 rounded-3xl bg-white border-2 border-[var(--primary-yellow)] shadow-[var(--shadow-md)] flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#FEF3C7] text-[#B45309] uppercase tracking-wider">
                  Onboarding Command
                </span>
                <span className="font-heading font-extrabold text-base text-[var(--text-dark)]">
                  $19 on Gumroad
                </span>
              </div>
              <div className="space-y-1.5">
                <h4 className="font-heading font-bold text-lg text-[var(--text-dark)]">
                  Client Kickoff Kit
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The complete client onboarding command center. Eliminates scope creep with asset-locking milestones, intake questionnaires, and private client portals.
                </p>
              </div>
              <ul className="space-y-2 text-xs text-slate-600 border-t border-[var(--border-color)] pt-3">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#059669]" />
                  <span>Asset-Locking Gatekeeper</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#059669]" />
                  <span>3 Niche Intake Questionnaires</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#059669]" />
                  <span>Scope Creep Defense Boilerplates</span>
                </li>
              </ul>
            </div>
            <Link
              href="/products/client-kickoff-kit/"
              className="inline-flex items-center justify-between p-3 rounded-2xl bg-[var(--primary-yellow)] hover:bg-[var(--primary-yellow-hover)] text-xs font-bold text-[var(--text-dark)] transition-colors"
            >
              <span>View System Specs</span>
              <ChevronRight className="w-4 h-4 text-[var(--text-dark)]" />
            </Link>
          </div>

          {/* Card 3: Software Decision Guides (Editorial Balance) */}
          <div className="p-6 rounded-3xl bg-white border border-[var(--border-color)] hover:border-[var(--purple-main)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-all flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#EBF5FF] text-[#2563EB] uppercase tracking-wider">
                  Software Stack
                </span>
                <span className="font-heading font-extrabold text-base text-[#059669]">
                  100% Free
                </span>
              </div>
              <div className="space-y-1.5">
                <h4 className="font-heading font-bold text-lg text-[var(--text-dark)]">
                  Tested Software Guides
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Honest, field-tested evaluations of Notion, Claude, and ChatGPT. Learn exactly when to upgrade, when to stay on free tiers, and how to avoid SaaS bloat.
                </p>
              </div>
              <ul className="space-y-2 text-xs text-slate-600 border-t border-[var(--border-color)] pt-3">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#059669]" />
                  <span>Verified 2026 Pricing Timestamps</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#059669]" />
                  <span>Real Software Limitations Disclosed</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#059669]" />
                  <span>Zero Sponsored Placements</span>
                </li>
              </ul>
            </div>
            <Link
              href="/tools/"
              className="inline-flex items-center justify-between p-3 rounded-2xl bg-[var(--bg-main)] hover:bg-[#EBF5FF] text-xs font-bold text-[var(--text-dark)] transition-colors"
            >
              <span>Explore Software Reviews</span>
              <ChevronRight className="w-4 h-4 text-[#2563EB]" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
