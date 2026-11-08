import React from 'react';
import Link from 'next/link';
import { Sparkles, Check, Download, ExternalLink, ShieldCheck, FileText, Database, CheckSquare } from 'lucide-react';

const freebieItems = [
  {
    icon: Database,
    title: 'The Freelancer Follow-Up Pipeline (Notion DB)',
    desc: 'Pre-configured 5-property pipeline with single-tap lead capture and dynamic Formula 2.0 urgency tags (Overdue, Due Today, In Touch).',
    badge: 'Runs on Notion Free Tier',
  },
  {
    icon: FileText,
    title: 'Overdue Invoice Recovery Swipe Scripts (PDF & Markdown)',
    desc: '3 word-for-word email templates designed to recover late Net-30 payments without damaging client relationships or sounding aggressive.',
    badge: '3 Copy-Paste Templates',
  },
  {
    icon: CheckSquare,
    title: '15-Minute Solopreneur Sprint Checklist (Notion SOP)',
    desc: 'Structured Friday review protocol to clear inbox clutter, reconcile weekly billable hours, and lock priorities for Monday morning.',
    badge: 'Instant Notion Duplication',
  },
];

export default function FeaturedFreebie() {
  return (
    <section id="free-toolkit" className="py-12 sm:py-16 lg:py-20 bg-white border-y border-[var(--border-color)]">
      <div className="container-custom max-w-7xl mx-auto">
        <div className="rounded-3xl bg-[var(--bg-main)] border border-[var(--border-color)] p-6 sm:p-10 lg:p-12 shadow-[var(--shadow-md)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Value & Core Assets */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--primary-yellow-light)] border border-[var(--primary-yellow)]/40 text-[#B45309] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#B45309] flex-shrink-0" />
                <span>100% Free Resource Vault &bull; Hosted on Gumroad ($0)</span>
              </div>

              <div className="space-y-3">
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[var(--text-dark)] tracking-tight leading-tight">
                  Claim the Complete Solo Operator Toolkit
                </h2>
                <p className="text-xs sm:text-base text-[var(--text-muted)] leading-relaxed">
                  We believe essential business infrastructure should be accessible to every solo operator. Enter your email on Gumroad to duplicate these 3 battle-tested Notion systems and swipe files directly into your workspace at zero cost.
                </p>
              </div>

              {/* 3 Companion Asset Cards */}
              <div className="space-y-3 pt-1">
                {freebieItems.map((item) => {
                  const IconComp = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="p-4 rounded-2xl bg-white border border-[var(--border-color)] flex items-start gap-3.5 shadow-2xs"
                    >
                      <div className="w-8 h-8 rounded-xl bg-[var(--purple-light)] text-[var(--purple-main)] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div className="space-y-1 min-w-0">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h3 className="font-heading font-bold text-xs sm:text-sm text-[var(--text-dark)]">
                            {item.title}
                          </h3>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#ECFDF5] text-[#065F46] border border-[#A7F3D0]">
                            {item.badge}
                          </span>
                        </div>
                        <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Link
                  href="/resources/ai-creator-productivity-kit/"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-[var(--primary-yellow)] hover:bg-[var(--primary-yellow-hover)] text-[var(--text-dark)] font-bold text-xs sm:text-sm shadow-[var(--shadow-yellow)] transition-all transform hover:-translate-y-0.5 min-h-[48px] text-center"
                >
                  <Download className="w-4 h-4 text-[var(--text-dark)] flex-shrink-0" />
                  <span>Claim Free Toolkit on Gumroad ($0)</span>
                </Link>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#065F46] justify-center sm:justify-start">
                  <ShieldCheck className="w-4 h-4 text-[#059669]" />
                  <span>100% Free Forever &bull; Zero Credit Card</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Preview */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-[340px] sm:max-w-[400px] rounded-3xl overflow-hidden bg-white border border-[var(--border-color)] shadow-[var(--shadow-lg)] group mx-auto">
                <div className="aspect-[4/3] overflow-hidden bg-[#F6F3EB]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <picture>
                    <source
                      srcSet="/images/guides/freelancer-follow-up-tracker-notion-system.webp"
                      type="image/webp"
                    />
                    <img
                      src="/images/guides/freelancer-follow-up-tracker-notion-system.jpg"
                      alt="The Freelancer Follow-Up Tracker Notion workspace dashboard and lead pipeline"
                      width={400}
                      height={300}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </picture>
                </div>
                <div className="p-4 bg-white border-t border-[var(--border-color)] space-y-1 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[var(--text-dark)]">
                      Solo Operator Starter Pack
                    </span>
                    <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-[#ECFDF5] text-[#065F46]">
                      Free $0
                    </span>
                  </div>
                  <p className="text-[11px] text-[var(--text-muted)]">
                    Duplicate straight into Notion with 1 click. Fully customizable.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
