import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[var(--bg-navy)] text-white border-t border-[var(--border-dark)] mt-auto">
      {/* Main Footer Links Container */}
      <div className="container-custom max-w-7xl mx-auto py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Column 1: Brand & Mission Statement (Span 4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-lg overflow-hidden bg-white p-1 border border-white/20 flex items-center justify-center flex-shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <picture>
                  <source srcSet="/images/brand/logo.webp" type="image/webp" />
                  <img
                    src="/images/brand/logo.png"
                    alt="Growth Stack Guide Logo"
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </picture>
              </div>
              <span className="font-heading font-extrabold text-lg text-white tracking-tight">
                Growth Stack Guide
              </span>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Practical Notion, AI, and productivity systems for creators, freelancers and solopreneurs. Built to help you organize work, plan content, and automate workflows without guru hype.
            </p>

            {/* Social Links */}
            <div className="pt-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
                Official Channels
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[var(--primary-yellow)] hover:text-[var(--text-dark)] text-slate-300 flex items-center justify-center transition-colors border border-white/10"
                  aria-label="Pinterest"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/social/pinterest.svg" alt="Pinterest" className="w-4 h-4 invert opacity-90" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[var(--primary-yellow)] hover:text-[var(--text-dark)] text-slate-300 flex items-center justify-center transition-colors border border-white/10"
                  aria-label="Facebook"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/social/facebook.svg" alt="Facebook" className="w-4 h-4 invert opacity-90" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[var(--primary-yellow)] hover:text-[var(--text-dark)] text-slate-300 flex items-center justify-center transition-colors border border-white/10"
                  aria-label="Instagram"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/social/instagram.svg" alt="Instagram" className="w-4 h-4 invert opacity-90" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Core Knowledge Pillars (Span 3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Core Systems
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/topics/ai-productivity/" className="hover:text-[var(--primary-yellow)] transition-colors inline-block py-1">
                  ⚡ AI Productivity Systems
                </Link>
              </li>
              <li>
                <Link href="/topics/notion-systems/" className="hover:text-[var(--primary-yellow)] transition-colors inline-block py-1">
                  🧠 Notion Business Systems
                </Link>
              </li>
              <li>
                <Link href="/topics/freelancer-systems/" className="hover:text-[var(--primary-yellow)] transition-colors inline-block py-1">
                  💼 Freelancer Business Systems
                </Link>
              </li>
              <li>
                <Link href="/topics/solopreneur-operations/" className="hover:text-[var(--primary-yellow)] transition-colors inline-block py-1">
                  🎯 Solopreneur Operations OS
                </Link>
              </li>
              <li>
                <Link href="/topics/software-guides/" className="hover:text-[var(--primary-yellow)] transition-colors inline-block py-1">
                  ⚖️ AI &amp; Software Decision Guides
                </Link>
              </li>
              <li>
                <Link href="/blog/" className="hover:text-[var(--primary-yellow)] transition-colors inline-block py-1 font-semibold text-slate-300">
                  📚 Browse All Free Master Guides →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Products & Resources (Span 2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Products &amp; Tools
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link
                  href="/resources/ai-creator-productivity-kit/"
                  className="hover:text-[var(--primary-yellow)] transition-colors inline-block py-1 text-slate-300 font-semibold"
                >
                  Free Follow-Up Tracker
                </Link>
              </li>
              <li>
                <Link href="/products/client-pulse/" className="hover:text-[var(--primary-yellow)] transition-colors inline-block py-1">
                  $7 Client Pulse CRM
                </Link>
              </li>
              <li>
                <Link href="/products/client-kickoff-kit/" className="hover:text-[var(--primary-yellow)] transition-colors inline-block py-1">
                  $19 Client Kickoff Kit
                </Link>
              </li>
              <li>
                <Link href="/products/" className="hover:text-[var(--primary-yellow)] transition-colors inline-block py-1 text-xs font-bold text-[var(--primary-yellow)]">
                  Browse All Products &rarr;
                </Link>
              </li>
              <li>
                <Link href="/tools/" className="hover:text-[var(--primary-yellow)] transition-colors inline-block py-1">
                  Software Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Trust, Legal & Compliance (Span 3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Editorial &amp; Trust
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/about/" className="hover:text-[var(--primary-yellow)] transition-colors inline-block py-1">
                  About Vivek &amp; GSG
                </Link>
              </li>
              <li>
                <Link href="/editorial-policy/" className="hover:text-[var(--primary-yellow)] transition-colors inline-block py-1">
                  Testing &amp; Editorial Policy
                </Link>
              </li>
              <li>
                <Link href="/affiliate-disclosure/" className="hover:text-[var(--primary-yellow)] transition-colors inline-block py-1">
                  FTC Affiliate Disclosure
                </Link>
              </li>
              <li>
                <Link href="/privacy/" className="hover:text-[var(--primary-yellow)] transition-colors inline-block py-1">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms/" className="hover:text-[var(--primary-yellow)] transition-colors inline-block py-1">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="hover:text-[var(--primary-yellow)] transition-colors inline-block py-1">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Compliance & Copyright Bar */}
      <div className="border-t border-white/10 bg-black/40">
        <div className="container-custom max-w-7xl mx-auto py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <p className="text-slate-300">
            &copy; {currentYear} Growth Stack Guide. All rights reserved. Built for solopreneurs, creators &amp; freelancers.
          </p>
          <p className="max-w-xl text-center md:text-right text-xs text-slate-300 leading-relaxed">
            <span className="font-semibold text-white">FTC Disclosure:</span> Some links on Growth Stack Guide are affiliate links. If you purchase through them, we may earn a small commission at zero extra cost to you. We only recommend field-tested tools and templates we genuinely use and verify.
          </p>
        </div>
      </div>
    </footer>
  );
}
