import React from 'react';
import Link from 'next/link';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export default function AuthorBox() {
  return (
    <aside className="my-10 p-6 sm:p-7 rounded-2xl bg-[#F8F9FD] border border-[var(--border-color)] shadow-xs flex flex-col sm:flex-row items-start sm:items-center gap-5 text-left">
      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[var(--purple-main)] text-white font-extrabold text-2xl flex items-center justify-center flex-shrink-0 shadow-xs">
        V
      </div>

      <div className="space-y-2 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-heading font-extrabold text-base sm:text-lg text-[var(--text-dark)]">
            Vivek
          </h3>
          <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[var(--purple-light)] text-[var(--purple-main)]">
            Systems Architect &amp; Founder
          </span>
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#10B981]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Verified Practitioner</span>
          </span>
        </div>

        <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
          Vivek tests and documents operating frameworks, minimal Notion architectures, and autonomous AI prompt workflows for solo operators and US freelancers. Every blueprint is tested in production before publication.
        </p>

        <div className="pt-1">
          <Link
            href="/about/"
            className="inline-flex items-center gap-1 text-xs font-bold text-[var(--purple-main)] hover:underline"
          >
            <span>Read full editorial mission &amp; testing standards</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </aside>
  );
}
