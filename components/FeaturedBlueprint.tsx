import React from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, Sparkles, CheckCircle2, Bookmark } from 'lucide-react';

export default function FeaturedBlueprint() {
  return (
    <section className="py-12 sm:py-16 bg-white border-y border-[var(--border-color)]">
      <div className="container-custom max-w-7xl mx-auto">
        <div className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-[#FAF8F2] via-white to-[#F3F0FF] border border-[var(--border-color)] shadow-[var(--shadow-sm)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--purple-light)] text-[var(--purple-main)] text-xs font-bold uppercase tracking-wider">
                  <Bookmark className="w-3.5 h-3.5" />
                  <span>Featured Cornerstone Blueprint</span>
                </span>
                <span className="text-xs font-semibold text-[var(--text-muted)] flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[var(--text-light)]" />
                  <span>8 min deep dive</span>
                </span>
              </div>

              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[var(--text-dark)] tracking-tight leading-tight">
                How Freelancers Can Build a Client Onboarding System That Does Not Depend on Memory
              </h2>

              <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                When a freelance client signs a contract, relying on memory causes dropped requirements and scope creep. This operating blueprint standardizes intake, asset collection, and portal provisioning into 4 sequential steps in Notion.
              </p>

              {/* Key Takeaways Preview */}
              <div className="space-y-2 pt-1 border-t border-[var(--border-color)]">
                <div className="flex items-start gap-2 text-xs sm:text-sm text-[var(--text-dark)] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-success)] flex-shrink-0 mt-0.5" />
                  <span>The 4-Phase Freelance Onboarding Lifecycle (Intake &rarr; Assets &rarr; Portal &rarr; Kickoff)</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-[var(--text-dark)] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-success)] flex-shrink-0 mt-0.5" />
                  <span>Lock asset collection before scheduling kickoff calls to protect your billable time</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-[var(--text-dark)] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-success)] flex-shrink-0 mt-0.5" />
                  <span>Duplicable 1-Page Notion Client Portal template walkthrough</span>
                </div>
              </div>

              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href="/blog/freelance-client-onboarding-portal-guide/"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[var(--primary-yellow)] hover:bg-[var(--primary-yellow-hover)] text-[var(--text-dark)] font-bold text-xs sm:text-sm shadow-xs hover:shadow transition-all min-h-[44px]"
                >
                  <span>Read Full Blueprint (100% Free)</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/topics/freelancer-systems/"
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-full bg-white hover:bg-[#FAF8F2] text-[var(--text-dark)] font-semibold text-xs border border-[var(--border-color)] transition-colors min-h-[44px]"
                >
                  <span>View Freelancer Pillar Hub &rarr;</span>
                </Link>
              </div>
            </div>

            {/* Right Graphic Column (5 cols) */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-[360px] rounded-2xl overflow-hidden bg-white border border-[var(--border-color)] shadow-[var(--shadow-md)] group">
                <div className="aspect-[16/10] overflow-hidden bg-[#F6F3EB]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <picture>
                    <source
                      srcSet="/images/guides/freelance-client-onboarding-system-blueprint.webp"
                      type="image/webp"
                    />
                    <img
                      src="/images/guides/freelance-client-onboarding-system-blueprint.jpg"
                      alt="The 4-Phase Freelance Client Onboarding Lifecycle Systems Architecture Blueprint"
                      width={360}
                      height={225}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </picture>
                </div>
                <div className="p-4 bg-white border-t border-[var(--border-color)] flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-[var(--text-dark)] block">
                      Client Onboarding Command
                    </span>
                    <span className="text-[11px] text-[var(--text-muted)] block">
                      Freelancer Systems Blueprint #1
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[var(--purple-main)] bg-[var(--purple-light)] px-2.5 py-1 rounded-full">
                    SOP Blueprint
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
