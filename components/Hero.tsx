import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-6 pb-12 sm:pt-8 sm:pb-16 lg:py-20 bg-[var(--bg-main)]">
      <div className="container-custom max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Direct-Response Messaging Hook */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
            {/* Trust Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--purple-light)] border border-[var(--purple-glow)] text-[var(--purple-main)] text-[11px] sm:text-xs font-bold tracking-wide uppercase shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[var(--purple-main)] flex-shrink-0" />
              <span>100% Free Public Guides • Battle-Tested Business Systems</span>
            </div>

            {/* Main Headline (H1) - Fluid responsive sizing */}
            <h1 className="font-heading font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-[var(--text-dark)] tracking-tight leading-[1.15] break-words">
              AI Productivity &amp; Business Systems for{' '}
              <span className="text-[var(--primary-yellow)] underline decoration-[var(--border-color)] decoration-wavy underline-offset-4 sm:underline-offset-8">
                Freelancers &amp; Solopreneurs
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-sm sm:text-base lg:text-lg text-[var(--text-muted)] max-w-2xl leading-relaxed">
              Practical AI workflows, Notion systems, and software decision guides that help one-person businesses manage clients, projects, content, and operations without overhead.
            </p>

            {/* Dual CTA Button Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
              <Link
                href="/resources/ai-creator-productivity-kit/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-7 sm:py-4 rounded-full bg-[var(--primary-yellow)] hover:bg-[var(--primary-yellow-hover)] text-[var(--text-dark)] font-bold text-sm sm:text-base shadow-[var(--shadow-yellow)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 min-h-[48px] text-center"
              >
                <span>Get Free Follow-Up Tracker</span>
                <ArrowRight className="w-4 h-4 text-[var(--text-dark)] flex-shrink-0" />
              </Link>
              <Link
                href="/blog/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-7 sm:py-4 rounded-full bg-white hover:bg-[#FAF8F2] text-[var(--text-dark)] font-bold text-sm sm:text-base border border-[var(--border-color)] shadow-[var(--shadow-sm)] hover:border-[var(--text-muted)] transition-all min-h-[48px] text-center"
              >
                <span>Browse Problem Guides</span>
              </Link>
            </div>

            {/* Micro-Trust Highlights */}
            <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-y-2 gap-x-4 sm:gap-x-6 text-xs sm:text-sm font-semibold text-[var(--text-muted)]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-success)] flex-shrink-0" />
                <span>100% Free Public Reading</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-success)] flex-shrink-0" />
                <span>Battle-Tested on Free Tier</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-success)] flex-shrink-0" />
                <span>Zero Guru Fluff</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Composition with Hero Character, Graphic Backdrops & Floating Cards */}
          <div className="lg:col-span-5 relative flex items-center justify-center mt-6 lg:mt-0 select-none">
            {/* Main Visual Staging Area */}
            <div className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-[440px] lg:max-w-[480px] aspect-square flex items-center justify-center overflow-visible">
              
              {/* Graphic Backdrop Shape 1: Big Warm Yellow Organic Circle (Behind Character & Chair) */}
              <div
                className="hero-backdrop-yellow"
                aria-hidden="true"
              />

              {/* Graphic Backdrop Shape 2: Layered Purple Shapes (Overlapping on Right) */}
              <div
                className="hero-backdrop-purple-outer"
                aria-hidden="true"
              />
              <div
                className="hero-backdrop-purple-inner"
                aria-hidden="true"
              />

              {/* Soft Contact Floor Shadow under chair base */}
              <div
                className="absolute bottom-4 sm:bottom-6 left-[18%] right-[18%] h-6 sm:h-7 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(17,21,47,0.22)_0%,rgba(17,21,47,0)_70%)] blur-md z-0 pointer-events-none"
                aria-hidden="true"
              />

              {/* Main Character Graphic Cutout (Transparent, Layered in front of shapes) */}
              <div className="relative z-10 w-[280px] sm:w-[360px] md:w-[400px] aspect-square flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <picture>
                  <source srcSet="/images/hero/hero-character.webp" type="image/webp" />
                  <img
                    src="/images/hero/hero-character.png"
                    alt="Productive solopreneur working on AI workflows on laptop"
                    className="w-full h-full object-contain filter drop-shadow-[0_20px_35px_rgba(17,21,47,0.16)]"
                    loading="eager"
                    fetchPriority="high"
                    width={420}
                    height={420}
                  />
                </picture>
              </div>

              {/* Floating Card 1: Notion Life OS (Top-Left) */}
              <div className="absolute top-[4%] left-[-2%] sm:left-[-6%] z-20 flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-2xl sm:rounded-full bg-white/95 backdrop-blur-md border border-white/90 shadow-[0_12px_28px_rgba(17,21,47,0.08)] animate-hero-float-1 hover:scale-105 transition-transform cursor-default">
                <span className="text-sm sm:text-base flex-shrink-0">🧠</span>
                <span className="font-heading font-extrabold text-[11px] sm:text-xs md:text-sm text-[var(--text-dark)] whitespace-nowrap">
                  Notion Life OS
                </span>
              </div>

              {/* Floating Card 2: +11.5 Hours Saved (Top-Right) */}
              <div className="absolute top-[6%] right-[-2%] sm:right-[-6%] z-20 px-3 py-2 sm:px-4.5 sm:py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/90 shadow-[0_12px_28px_rgba(17,21,47,0.08)] text-left animate-hero-float-2 hover:scale-105 transition-transform cursor-default">
                <span className="font-heading font-extrabold text-xs sm:text-sm text-[#10B981] block leading-tight">
                  + 11.5 Hours
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold text-[var(--text-muted)] flex items-center gap-1 mt-0.5">
                  Saved Per Week ⏱️
                </span>
              </div>

              {/* Floating Card 3: Zero Anxiety Focus (Mid-Left) */}
              <div className="absolute top-[42%] left-[-4%] sm:left-[-10%] z-20 flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-2xl sm:rounded-full bg-white/95 backdrop-blur-md border border-white/90 shadow-[0_12px_28px_rgba(17,21,47,0.08)] animate-hero-float-3 hover:scale-105 transition-transform cursor-default">
                <span className="font-heading font-extrabold text-[11px] sm:text-xs md:text-sm text-[var(--text-dark)] whitespace-nowrap">
                  Zero Anxiety Focus
                </span>
              </div>

              {/* Floating Card 4: Solopreneur Stack (Mid-Right) */}
              <div className="absolute top-[48%] right-[-2%] sm:right-[-8%] z-20 flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-2xl sm:rounded-full bg-white/95 backdrop-blur-md border border-white/90 shadow-[0_12px_28px_rgba(17,21,47,0.08)] animate-hero-float-4 hover:scale-105 transition-transform cursor-default">
                <span className="text-sm sm:text-base flex-shrink-0">🚀</span>
                <span className="font-heading font-extrabold text-[11px] sm:text-xs md:text-sm text-[var(--text-dark)] whitespace-nowrap">
                  Solopreneur Stack
                </span>
              </div>

              {/* Plant Detail (Bottom-Right) */}
              <div
                className="absolute bottom-2 right-1 sm:bottom-3 sm:right-3 z-20 text-2xl sm:text-3xl drop-shadow-[0_6px_12px_rgba(0,0,0,0.12)] hover:scale-110 transition-transform cursor-default select-none"
                aria-hidden="true"
              >
                🪴
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
