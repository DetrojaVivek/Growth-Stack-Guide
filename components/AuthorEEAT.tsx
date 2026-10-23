import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Info } from 'lucide-react';

export default function AuthorEEAT() {
  return (
    <section className="py-10 sm:py-16 bg-[var(--bg-main)]">
      <div className="container-custom max-w-5xl mx-auto">
        <div className="p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-white border border-[var(--border-color)] shadow-[var(--shadow-sm)] space-y-6">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            {/* Avatar Initials / Badge */}
            <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-[var(--purple-light)] border border-[var(--purple-glow)] text-[var(--purple-main)] font-heading font-extrabold text-xl sm:text-3xl flex items-center justify-center flex-shrink-0 shadow-inner">
              V
            </div>

            {/* Author Information */}
            <div className="space-y-1 text-left flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-heading font-extrabold text-lg sm:text-2xl text-[var(--text-dark)]">
                  Vivek
                </h3>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[var(--color-success-bg)] text-[var(--color-success)] text-xs font-bold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Founder &amp; Architect</span>
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] font-medium">
                Systems Architect &bull; Digital Workflows &bull; Tier-1 English Market Focus
              </p>
            </div>
          </div>

          {/* Editorial Philosophy Statement */}
          <div className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed space-y-3 pt-2 border-t border-[var(--border-color)] text-left">
            <p>
              I build, field-test, and document AI-powered productivity systems and Notion dashboards for creators, freelancers, and solopreneurs. This publication is founded on radical transparency: <strong className="text-[var(--text-dark)]">zero fake testimonials, zero fabricated income claims, and zero guru hype</strong>.
            </p>
            <p>
              Every workflow and template shared on Growth Stack Guide is designed to solve real operational bottlenecks — from messy client communications to chaotic content calendars.
            </p>
          </div>

          {/* FTC & Affiliate Transparency Callout Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#FFFBF0] border border-[#FDE68A] text-left flex items-start gap-3 sm:gap-3.5">
            <Info className="w-5 h-5 text-[#D97706] flex-shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs sm:text-sm text-slate-800 flex-1 min-w-0">
              <span className="font-bold block text-[#92400E]">
                Editorial Integrity &amp; FTC Affiliate Disclosure
              </span>
              <p className="text-slate-700 leading-relaxed text-xs">
                Some links on Growth Stack Guide are affiliate links. If you choose to purchase through them, we may earn an affiliate commission at zero additional cost to you. We strictly review software based on real utility and never accept paid placement to artificially alter tool ratings.{' '}
                <Link href="/affiliate-disclosure/" className="text-[var(--purple-main)] underline font-semibold hover:text-[var(--purple-hover)]">
                  Read our full affiliate policy &rarr;
                </Link>
              </p>
            </div>
          </div>

          {/* Trust Navigation Links */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-bold text-[var(--text-muted)] pt-1">
            <Link href="/about/" className="hover:text-[var(--purple-main)] transition-colors">
              About Growth Stack Guide &rarr;
            </Link>
            <span className="text-slate-300 hidden sm:inline">&bull;</span>
            <Link href="/editorial-policy/" className="hover:text-[var(--purple-main)] transition-colors">
              Editorial Policy &rarr;
            </Link>
            <span className="text-slate-300 hidden sm:inline">&bull;</span>
            <Link href="/contact/" className="hover:text-[var(--purple-main)] transition-colors">
              Contact &amp; Inquiries &rarr;
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
