import React from 'react';
import Link from 'next/link';
import { Sparkles, Check, Download } from 'lucide-react';

const freebieModules = [
  {
    title: '1-Tap Quick-Capture Action Dock',
    desc: 'Log inbound prospect inquiries from email, LinkedIn, or Upwork in under 5 seconds with auto-scheduled 48h follow-ups.',
  },
  {
    title: 'Formula 2.0 Dynamic Urgency Radar',
    desc: 'Automated urgency badges highlight 🚨 Overdue leads, ⏰ Due Today actions, and ⏳ Upcoming touchpoints with zero mental math.',
  },
  {
    title: '3 Battle-Tested Email Swipe Scripts',
    desc: 'Includes the 48-Hour Polite Nudge, the Value-Add Touchpoint, and the high-response 9-Word Breakup Email.',
  },
  {
    title: '14-Day Cadence Timing Roadmap Table',
    desc: 'A proven outreach milestone schedule (Days 0, 2, 5, 9, 14) so you stay top-of-mind without feeling pushy or desperate.',
  },
  {
    title: 'Instant Context Lead Dossier Note Framework',
    desc: 'Pre-built fields capture primary goals, budget range, target launch date, and talking points before sales calls.',
  },
  {
    title: '5-Minute Client Hand-Off Protocol',
    desc: 'Interactive checklist to lock deposits, record client working styles, and transition closed deals into active delivery.',
  },
  {
    title: '100% Free, Private & Lightweight Workspace',
    desc: 'Operates entirely inside your personal Notion workspace—zero external subscriptions, 100% data privacy, and mobile widget ready.',
  },
];

export default function FeaturedFreebie() {
  return (
    <section id="free-kit" className="py-10 sm:py-16 lg:py-20 bg-white border-y border-[var(--border-color)]">
      <div className="container-custom max-w-7xl mx-auto">
        <div className="rounded-2xl sm:rounded-3xl bg-[var(--bg-main)] border border-[var(--border-color)] p-4 sm:p-8 lg:p-12 shadow-[var(--shadow-md)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Column: Product Value & Modules */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[var(--primary-yellow-light)] border border-[var(--primary-yellow)]/30 text-[#B45309] text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#B45309] flex-shrink-0" />
                <span>Flagship Free Template • Inbound Pipeline System</span>
              </div>

              <h2 className="font-heading font-extrabold text-xl sm:text-3xl lg:text-4xl text-[var(--text-dark)] tracking-tight leading-tight">
                Stop letting freelance inquiries slip through the cracks.
              </h2>

              <p className="text-xs sm:text-base text-[var(--text-muted)] leading-relaxed">
                The <strong className="text-[var(--text-dark)]">Freelancer Follow-Up Tracker</strong> gives you an automated urgency radar, a 5-second lead capture dock, and battle-tested email swipe scripts in one lightweight Notion workspace.
              </p>

              {/* Modules Checklist */}
              <div className="space-y-2.5 sm:space-y-3 pt-1 sm:pt-2">
                {freebieModules.map((mod, index) => (
                  <div key={mod.title} className="flex items-start gap-2.5 sm:gap-3">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[var(--color-success-bg)] text-[var(--color-success)] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[3]" />
                    </div>
                    <div className="text-xs sm:text-sm min-w-0">
                      <strong className="text-[var(--text-dark)] font-bold">
                        Pillar {index + 1}: {mod.title}
                      </strong>{' '}
                      — <span className="text-[var(--text-muted)]">{mod.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Download CTA */}
              <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Link
                  href="/resources/ai-creator-productivity-kit/"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:px-8 sm:py-4 rounded-full bg-[var(--primary-yellow)] hover:bg-[var(--primary-yellow-hover)] text-[var(--text-dark)] font-bold text-xs sm:text-base shadow-[var(--shadow-yellow)] transition-all transform hover:-translate-y-0.5 min-h-[48px] text-center"
                >
                  <Download className="w-4 h-4 text-[var(--text-dark)] flex-shrink-0" />
                  <span>Get Free Follow-Up Tracker</span>
                </Link>
                <span className="text-[11px] sm:text-xs text-[var(--text-muted)] text-center sm:text-left">
                  Instant 1-Click Notion Duplication • 100% Free Forever
                </span>
              </div>
            </div>

            {/* Right Column: Visual Product Preview */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-[280px] sm:max-w-[380px] lg:max-w-[400px] rounded-2xl overflow-hidden bg-white border border-[var(--border-color)] shadow-[var(--shadow-lg)] group mx-auto">
                <div className="aspect-[4/3] overflow-hidden bg-[#F6F3EB]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <picture>
                    <source
                      srcSet="/images/guides/freelancer-follow-up-tracker-notion-system.webp"
                      type="image/webp"
                    />
                    <img
                      src="/images/guides/freelancer-follow-up-tracker-notion-system.jpg"
                      alt="Freelancer Follow-Up Tracker Notion Workspace Template Lead Pipeline Mockup"
                      width={400}
                      height={300}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </picture>
                </div>
                <div className="p-3.5 sm:p-4 bg-white border-t border-[var(--border-color)] flex items-center justify-between">
                  <div className="min-w-0 pr-2">
                    <span className="text-xs font-bold text-[var(--text-dark)] block truncate">
                      Freelancer Follow-Up Tracker
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-[var(--text-muted)] block truncate">
                      Official Notion Workspace Template
                    </span>
                  </div>
                  <span className="text-[11px] sm:text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-[var(--color-success-bg)] text-[var(--color-success)] flex-shrink-0">
                    Free Access
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
