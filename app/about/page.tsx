import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Sparkles, ShieldCheck, Target, ArrowRight, CheckCircle2, HeartHandshake } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Growth Stack Guide',
  description:
    'Learn about Growth Stack Guide, our anti-guru philosophy, and our mission to provide practical AI and Notion systems for solo operators.',
  openGraph: {
    title: 'About Growth Stack Guide | Practical AI & Notion Systems',
    description:
      'Why we built Growth Stack Guide: To eliminate digital chaos for creators, freelancers, and solopreneurs without guru hype.',
  },
};

export default function AboutPage() {
  return (
    <div className="w-full py-10 sm:py-16 lg:py-20 bg-[var(--bg-main)]">
      <div className="container-custom max-w-4xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--text-muted)]">
          <Link href="/" className="hover:text-[var(--text-dark)] transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-[var(--text-dark)]">About</span>
        </nav>

        {/* Hero Section */}
        <header className="space-y-5 text-left border-b border-[var(--border-color)] pb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--purple-light)] text-[var(--purple-main)] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Our Mission &amp; Philosophy</span>
          </div>
          <h1 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[var(--text-dark)] tracking-tight leading-tight">
            Built for Solo Operators Who Value Execution Over Hype.
          </h1>
          <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed max-w-3xl">
            Growth Stack Guide was founded on a simple observation: the modern creator and freelancer doesn&apos;t need another $997 internet marketing course or an enterprise tool that requires an engineering team to configure. They need lean, battle-tested systems that work on Day 1.
          </p>
        </header>

        {/* Why We Exist (The Big Problem) */}
        <section className="space-y-4 text-left">
          <h2 className="font-heading font-extrabold text-xl sm:text-3xl text-[var(--text-dark)]">
            The Problem: The Modern Productivity Trap
          </h2>
          <div className="space-y-3 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
            <p>
              Most solopreneurs and digital freelancers spend upwards of <strong>10 to 15 hours every week</strong> trapped in operational friction: wrestling with 50 open browser tabs, hunting down lost project notes, manually re-writing similar client proposals, and guessing how to write effective AI prompts.
            </p>
            <p>
              Meanwhile, the internet productivity space has become saturated with two extremes:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-white border border-[var(--border-color)] space-y-2">
              <span className="text-xs font-bold text-[var(--color-error)] uppercase tracking-wider block">
                Extreme 1: Enterprise Bloat
              </span>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                Complex, multi-thousand-dollar software stacks built for 200-person corporations with mandatory sales calls, lengthy onboarding, and monthly subscription lock-ins that drain solo budgets.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-[var(--border-color)] space-y-2">
              <span className="text-xs font-bold text-[var(--color-error)] uppercase tracking-wider block">
                Extreme 2: Guru Fluff
              </span>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                Hype-driven courses promising overnight passive millions, filled with recycled motivational videos, fake revenue screenshots, and zero practical operational frameworks.
              </p>
            </div>
          </div>
        </section>

        {/* The Growth Stack Guide Solution: Our 3 Core Pillars */}
        <section className="space-y-6 text-left">
          <h2 className="font-heading font-extrabold text-xl sm:text-3xl text-[var(--text-dark)]">
            The 3 Pillars of Growth Stack Guide
          </h2>
          
          <div className="space-y-4">
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[var(--border-color)] shadow-xs flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--purple-light)] text-[var(--purple-main)] flex items-center justify-center font-bold text-lg flex-shrink-0">
                1
              </div>
              <div className="space-y-1.5 min-w-0">
                <h3 className="font-heading font-bold text-base sm:text-lg text-[var(--text-dark)]">
                  Radical, Frictionless Public Access
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                  Every guide, editorial blueprint, and core system on this website is 100% free to read without mandatory account registration, forced paywalls, or gated reading limits. If our knowledge helps you organize your business, we have done our job.
                </p>
              </div>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[var(--border-color)] shadow-xs flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--primary-yellow-light)] text-[#B45309] flex items-center justify-center font-bold text-lg flex-shrink-0">
                2
              </div>
              <div className="space-y-1.5 min-w-0">
                <h3 className="font-heading font-bold text-base sm:text-lg text-[var(--text-dark)]">
                  The Anti-Guru Transparency Guarantee
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                  Zero fake earnings screenshots. Zero fabricated customer reviews. Zero high-pressure countdown timers. When we recommend a software tool, we outline its exact limitations alongside its strengths.
                </p>
              </div>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[var(--border-color)] shadow-xs flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-success-bg)] text-[var(--color-success)] flex items-center justify-center font-bold text-lg flex-shrink-0">
                3
              </div>
              <div className="space-y-1.5 min-w-0">
                <h3 className="font-heading font-bold text-base sm:text-lg text-[var(--text-dark)]">
                  Solo-First Digital Leverage
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                  Every Notion template, AI prompt chain, and workflow is designed to be operated by a single person with zero employees. We maximize output while keeping operational overhead near zero.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Bio Card */}
        <section className="p-6 sm:p-8 rounded-3xl bg-white border border-[var(--border-color)] shadow-[var(--shadow-sm)] space-y-6 text-left">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[var(--purple-light)] border border-[var(--purple-glow)] text-[var(--purple-main)] font-heading font-extrabold text-2xl sm:text-3xl flex items-center justify-center flex-shrink-0">
              V
            </div>
            <div className="space-y-1 flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[var(--text-dark)]">
                  Meet Vivek
                </h3>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[var(--color-success-bg)] text-[var(--color-success)] text-xs font-bold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Founder &amp; Systems Architect</span>
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-muted)]">
                Digital Systems Architect &bull; Productivity Researcher &bull; Operating for Tier-1 US Markets
              </p>
            </div>
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed border-t border-[var(--border-color)] pt-4">
            <p>
              I build and test productivity architectures, relational Notion dashboards, and generative AI prompt chains specifically designed for creators and solopreneurs navigating the digital economy.
            </p>
            <p>
              Growth Stack Guide was created out of my own frustration with chaotic workflows. By testing dozens of tools and building structured SOPs, I consolidated content pipelines, client portals, and daily focus systems into modular, duplicable Notion templates.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap gap-4">
            <Link
              href="/products/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--primary-yellow)] hover:bg-[var(--primary-yellow-hover)] text-[var(--text-dark)] font-bold text-xs shadow-xs transition-colors"
            >
              <span>Explore Our Systems &rarr;</span>
            </Link>
            <Link
              href="/editorial-policy/"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#FAF8F2] hover:bg-[#F3EFE6] text-[var(--text-dark)] font-semibold text-xs border border-[var(--border-color)] transition-colors"
            >
              <span>How We Test Systems</span>
            </Link>
          </div>
        </section>

        {/* Next Steps CTA */}
        <section className="p-8 rounded-3xl bg-[var(--bg-navy)] text-white text-center sm:text-left space-y-4">
          <div className="max-w-2xl space-y-2">
            <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
              Ready to Eliminate Operational Overhead?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Explore our comprehensive master blueprints and turnkey Notion business systems engineered to streamline client onboarding, content batching, and daily planning.
            </p>
          </div>
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <Link
              href="/blog/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--primary-yellow)] hover:bg-[var(--primary-yellow-hover)] text-[var(--text-dark)] font-bold text-xs sm:text-sm shadow-md transition-colors"
            >
              <span>Browse Master Blueprints</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/products/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm transition-colors"
            >
              <span>View Digital Systems &rarr;</span>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
