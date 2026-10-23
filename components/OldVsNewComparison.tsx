import React from 'react';
import { X, Check } from 'lucide-react';

const oldWayItems = [
  '50+ open browser tabs, lost bookmarks, and scattered notes across apps',
  'Manual time-blocking on static calendars resulting in missed deadlines',
  'Guessing AI prompts with vague phrasing and inconsistent, poor outputs',
  'Disorganized client communication, forgotten invoices, and scope creep',
  'Buying $200+ internet marketing courses packed with generic motivational fluff',
];

const newWayItems = [
  'One centralized Notion Second Brain for daily tasks, client SOPs, and content',
  'Automated time-blocking workflows designed to protect your focus and energy',
  'Field-tested prompt chains that deliver high-converting copy in minutes',
  'Streamlined client onboarding portals with transparent deliverables and tracking',
  '100% free public blueprints and accessible, field-tested $7 to $19 templates',
];

export default function OldVsNewComparison() {
  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-white border-y border-[var(--border-color)]">
      <div className="container-custom max-w-7xl mx-auto space-y-8 sm:space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--purple-light)] text-[var(--purple-main)] text-xs font-bold uppercase tracking-wider">
            <span>Work Smarter</span>
          </div>
          <h2 className="font-heading font-extrabold text-xl sm:text-3xl lg:text-4xl text-[var(--text-dark)] tracking-tight">
            The Old Way vs. The Growth Stack AI Way
          </h2>
          <p className="text-xs sm:text-base text-[var(--text-muted)] leading-relaxed">
            See the difference between operating in daily chaos versus executing with systematic digital workflows.
          </p>
        </div>

        {/* 2-Column Responsive Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          
          {/* Card 1: The Old Way (Red Tint) */}
          <div className="p-5 sm:p-7 lg:p-9 rounded-2xl bg-[#FFF5F5] border border-[#FED7D7] space-y-5 sm:space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FEE2E2] text-[var(--color-error)] flex items-center justify-center font-bold text-lg flex-shrink-0">
                <X className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
              </div>
              <div className="min-w-0">
                <h3 className="font-heading font-bold text-base sm:text-xl text-[var(--text-dark)] leading-tight">
                  The Old Chaotic Way
                </h3>
                <span className="text-xs text-[var(--text-muted)] block mt-0.5">
                  Scattered, overwhelmed, and reactive
                </span>
              </div>
            </div>

            <ul className="space-y-3.5 sm:space-y-4">
              {oldWayItems.map((item) => (
                <li key={item} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-[var(--text-dark)]">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#FEE2E2] text-[var(--color-error)] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="leading-relaxed text-slate-700 min-w-0">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: The Growth Stack Way (Green Tint) */}
          <div className="p-5 sm:p-7 lg:p-9 rounded-2xl bg-[#F0FDF4] border border-[#BBF7D0] space-y-5 sm:space-y-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[var(--color-success-bg)] text-[var(--color-success)] flex items-center justify-center font-bold text-lg flex-shrink-0">
                <Check className="w-5 h-5 stroke-[3]" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg sm:text-xl text-[var(--text-dark)]">
                  The Growth Stack AI Way
                </h3>
                <span className="text-xs text-[var(--color-success)] font-semibold">
                  Organized, automated, and compounding
                </span>
              </div>
            </div>

            <ul className="space-y-4">
              {newWayItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-xs sm:text-sm text-[var(--text-dark)]">
                  <div className="w-5 h-5 rounded-full bg-[var(--color-success-bg)] text-[var(--color-success)] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="leading-relaxed text-slate-800 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
