'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  Search,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Brain,
  Zap,
  PenTool,
  Briefcase,
  Target,
  BookOpen,
  Sparkles,
  Layers,
} from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

const mainNavItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Resources', href: '/resources/' },
  { label: 'Products', href: '/products/' },
  { label: 'Tools', href: '/tools/' },
  { label: 'Master Guides', href: '/blog/' },
];

const knowledgePillars = [
  {
    title: 'AI Productivity Systems',
    description: 'Prompt chains, workflow automations & planning SOPs',
    href: '/topics/ai-productivity/',
    icon: Zap,
    color: '#3B9EFF',
    bg: '#EBF5FF',
  },
  {
    title: 'Notion Business Systems',
    description: 'Second Brain databases, task engines & minimal templates',
    href: '/topics/notion-systems/',
    icon: Brain,
    color: '#6C4DFF',
    bg: '#F3F0FF',
  },
  {
    title: 'Freelancer Business Systems',
    description: 'Client onboarding portals, proposal SOPs & invoice ledgers',
    href: '/topics/freelancer-systems/',
    icon: Briefcase,
    color: '#4F46E5',
    bg: '#EEF2FF',
  },
  {
    title: 'Solopreneur Operations OS',
    description: 'Lean business operating systems & Sunday weekly review rituals',
    href: '/topics/solopreneur-operations/',
    icon: Target,
    color: '#D97706',
    bg: '#FEF3C7',
  },
  {
    title: 'AI & Software Decision Guides',
    description: 'Hands-on software comparisons, decision trees & tool reviews',
    href: '/topics/software-guides/',
    icon: Layers,
    color: '#10B981',
    bg: '#EBFBEE',
  },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mobileSearchQuery, setMobileSearchQuery] = useState('');
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard accessibility: Close mobile drawer or dropdown on Escape
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        if (isMobileMenuOpen) setIsMobileMenuOpen(false);
        if (isDropdownOpen) setIsDropdownOpen(false);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen, isDropdownOpen]);

  // Body scroll lock during active mobile menu
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  }, [pathname]);

  const handleMobileSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mobileSearchQuery.trim()) {
      setIsMobileMenuOpen(false);
      router.push(`/search/?q=${encodeURIComponent(mobileSearchQuery.trim())}`);
    }
  };

  const isLinkActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border-color)] bg-[var(--bg-main)]/95 backdrop-blur-md transition-colors">
      <div className="container-custom max-w-7xl mx-auto flex items-center justify-between h-16 sm:h-20">
        
        {/* Brand Logo & Tagline (Responsive min-w-0 for small viewports) */}
        <Link
          href="/"
          className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--purple-main)] rounded-lg p-0.5 min-w-0 flex-shrink"
          aria-label="Growth Stack Guide Home"
        >
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-lg overflow-hidden bg-white border border-[var(--border-color)] flex items-center justify-center shadow-xs group-hover:border-[var(--primary-yellow)] transition-colors flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <picture>
              <source srcSet="/images/brand/logo.webp" type="image/webp" />
              <img
                src="/images/brand/logo.png"
                alt="Growth Stack Guide Logo"
                width={36}
                height={36}
                className="w-full h-full object-contain"
              />
            </picture>
          </div>
          <div className="flex flex-col min-w-0 truncate">
            <span className="font-heading font-extrabold text-sm sm:text-base lg:text-lg text-[var(--text-dark)] tracking-tight leading-none group-hover:text-[var(--purple-main)] transition-colors truncate">
              Growth Stack Guide
            </span>
            <span className="hidden sm:block text-[9px] sm:text-[10px] font-bold text-[var(--text-muted)] tracking-wider uppercase mt-0.5 truncate">
              AI Productivity &amp; Systems
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links (>= 1024px) */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs xl:text-sm font-medium">
          {mainNavItems.map((item) => {
            const active = isLinkActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-2 xl:px-3 py-1.5 rounded-md transition-colors relative whitespace-nowrap ${
                  active
                    ? 'text-[var(--text-dark)] font-bold'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-dark)] hover:bg-[#F3EFE6]'
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-[var(--primary-yellow)] rounded-full" />
                )}
              </Link>
            );
          })}

          {/* Knowledge Pillars Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`flex items-center gap-1 px-2 xl:px-3 py-1.5 rounded-md transition-colors whitespace-nowrap ${
                isDropdownOpen
                  ? 'text-[var(--text-dark)] bg-[#F3EFE6]'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-dark)] hover:bg-[#F3EFE6]'
              }`}
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
            >
              <span>Knowledge Pillars</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  isDropdownOpen ? 'rotate-180 text-[var(--purple-main)]' : ''
                }`}
              />
            </button>

            {/* Dropdown Menu Popover */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-80 xl:w-96 max-h-[calc(100vh-5.5rem)] sm:max-h-[calc(100dvh-5.5rem)] rounded-2xl bg-white border border-[var(--border-color)] shadow-[var(--shadow-lg)] p-2 sm:p-2.5 z-50 animate-in fade-in zoom-in-95 duration-150 flex flex-col">
                <div className="px-3 py-1.5 border-b border-[var(--border-color)] mb-1 flex items-center justify-between flex-shrink-0">
                  <span className="text-[11px] font-bold text-[var(--text-muted)] uppercase tracking-wider">
                    Core Systems &amp; Workflows
                  </span>
                  <span className="text-[11px] font-bold text-[var(--purple-main)] bg-[var(--purple-light)] px-2 py-0.5 rounded-full">
                    5 Pillars
                  </span>
                </div>

                <div className="space-y-0.5 overflow-y-auto overscroll-contain custom-scrollbar pr-1 flex-1">
                  {knowledgePillars.map((pillar) => {
                    const IconComponent = pillar.icon;
                    return (
                      <Link
                        key={pillar.title}
                        href={pillar.href}
                        onClick={() => setIsDropdownOpen(false)}
                        className="flex items-start gap-2.5 py-1.5 px-2 rounded-xl hover:bg-[#FAF8F2] transition-colors group"
                      >
                        <div
                          className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105 mt-0.5"
                          style={{ backgroundColor: pillar.bg, color: pillar.color }}
                        >
                          <IconComponent className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-[var(--text-dark)] group-hover:text-[var(--purple-main)] transition-colors truncate pr-1">
                              {pillar.title}
                            </span>
                            <ArrowRight className="w-3.5 h-3.5 text-[var(--text-light)] group-hover:text-[var(--purple-main)] transition-colors opacity-0 group-hover:opacity-100 flex-shrink-0" />
                          </div>
                          <p className="text-[10px] sm:text-[11px] text-[var(--text-muted)] line-clamp-1">
                            {pillar.description}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Desktop CTA & Search Actions (>= 1024px) */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-3 flex-shrink-0">
          <Link
            href="/search/"
            className="p-2 rounded-full text-[var(--text-muted)] hover:text-[var(--text-dark)] hover:bg-[#F3EFE6] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--purple-main)]"
            aria-label="Search articles and templates"
          >
            <Search className="w-4 h-4 xl:w-5 xl:h-5" />
          </Link>

          <Link
            href="/resources/ai-creator-productivity-kit/"
            className="inline-flex items-center gap-1.5 xl:gap-2 px-3.5 xl:px-5 py-2 xl:py-2.5 rounded-full bg-[var(--primary-yellow)] hover:bg-[var(--primary-yellow-hover)] text-[var(--text-dark)] font-bold text-xs tracking-wide shadow-xs hover:shadow transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
          >
            <Sparkles className="w-3.5 h-3.5 text-[var(--text-dark)]" />
            <span>Free Follow-Up Tracker</span>
          </Link>
        </div>

        {/* Mobile Action Controls (< 1024px) */}
        <div className="flex lg:hidden items-center gap-1 sm:gap-1.5 flex-shrink-0">
          <Link
            href="/search/"
            className="w-10 h-10 rounded-xl text-[var(--text-muted)] hover:text-[var(--text-dark)] hover:bg-[#F3EFE6] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--purple-main)] flex items-center justify-center"
            aria-label="Open search page"
          >
            <Search className="w-5 h-5" />
          </Link>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-10 h-10 rounded-xl text-[var(--text-dark)] hover:bg-[#F3EFE6] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--purple-main)] flex items-center justify-center"
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Accessible Mobile Navigation Drawer (< 1024px) */}
      {isMobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          ref={mobileMenuRef}
          className="fixed inset-x-0 top-16 sm:top-20 h-[calc(100dvh-4rem)] sm:h-[calc(100dvh-5rem)] bg-[var(--bg-main)] z-50 overflow-y-auto overscroll-contain border-t border-[var(--border-color)] p-4 sm:p-6 flex flex-col justify-between animate-in slide-in-from-top-2 duration-200 lg:hidden shadow-2xl pb-[max(1.5rem,env(safe-area-inset-bottom))]"
        >
          <div className="space-y-6">
            {/* Mobile Inline Search Form */}
            <form onSubmit={handleMobileSearchSubmit} className="relative">
              <input
                type="text"
                placeholder="Search templates, guides, AI tools..."
                value={mobileSearchQuery}
                onChange={(e) => setMobileSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-10 rounded-xl bg-white border border-[var(--border-color)] text-sm text-[var(--text-dark)] placeholder-[var(--text-light)] focus:outline-none focus:border-[var(--purple-main)] focus:ring-1 focus:ring-[var(--purple-main)] shadow-xs"
              />
              <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-[var(--text-light)]" />
              <button
                type="submit"
                className="absolute right-2 top-2 px-3 py-1.5 text-xs font-bold text-white bg-[var(--purple-main)] rounded-lg min-h-[32px]"
              >
                Go
              </button>
            </form>

            {/* Primary Navigation List (Touch Targets strictly >= 48px) */}
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-[var(--text-muted)] uppercase tracking-wider px-3 block mb-1">
                Navigation
              </span>
              {mainNavItems.map((item) => {
                const active = isLinkActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-base font-semibold transition-colors min-h-[48px] ${
                      active
                        ? 'bg-[var(--primary-yellow-light)] text-[var(--text-dark)] font-bold'
                        : 'text-[var(--text-dark)] hover:bg-[#F3EFE6]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 text-[var(--text-light)]" />
                  </Link>
                );
              })}
            </div>

            {/* Knowledge Pillars Mobile Grid */}
            <div className="space-y-2 pt-2 border-t border-[var(--border-color)]">
              <span className="text-[11px] font-bold text-[var(--text-muted)] uppercase tracking-wider px-3 block mb-1">
                Core Systems
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {knowledgePillars.map((pillar) => {
                  const IconComponent = pillar.icon;
                  return (
                    <Link
                      key={pillar.title}
                      href={pillar.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[var(--border-color)] hover:border-[var(--purple-main)] transition-colors min-h-[48px]"
                    >
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: pillar.bg, color: pillar.color }}
                      >
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-[var(--text-dark)] truncate">
                        {pillar.title}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom Drawer CTA */}
          <div className="pt-6 pb-2 border-t border-[var(--border-color)] mt-6">
            <Link
              href="/resources/ai-creator-productivity-kit/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-[var(--primary-yellow)] hover:bg-[var(--primary-yellow-hover)] text-[var(--text-dark)] font-bold text-sm shadow-md transition-colors min-h-[48px]"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get Free Follow-Up Tracker ↓</span>
            </Link>
            <p className="text-center text-[11px] text-[var(--text-muted)] mt-2">
              Instant 1-Click Notion Duplication • Full Access
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
