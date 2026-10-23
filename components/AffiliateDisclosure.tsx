import React from 'react';
import Link from 'next/link';
import { Info } from 'lucide-react';

export default function AffiliateDisclosure() {
  return (
    <div className="my-6 p-4 rounded-xl bg-[#FAF8F2] border border-[var(--border-color)] text-xs text-[var(--text-muted)] flex items-start gap-3 text-left">
      <Info className="w-4 h-4 text-[var(--text-light)] flex-shrink-0 mt-0.5" />
      <div className="space-y-1">
        <span className="font-bold text-[var(--text-dark)] block">
          Editorial Integrity &amp; Affiliate Disclosure
        </span>
        <p className="leading-relaxed">
          Growth Stack Guide is reader-supported. When you purchase tools or services through links on our site, we may earn an affiliate commission at zero additional cost to you. We strictly evaluate software based on hands-on workflow utility and reject paid sponsored reviews.{' '}
          <Link href="/affiliate-disclosure/" className="underline hover:text-[var(--text-dark)]">
            Read our full FTC disclosure policy.
          </Link>
        </p>
      </div>
    </div>
  );
}
