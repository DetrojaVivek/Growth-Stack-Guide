import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Sparkles,
  Download,
  CheckCircle2,
  ExternalLink,
  Zap,
  Clock,
  Mail,
  ShieldCheck,
  HelpCircle,
  Laptop,
  CheckSquare,
  AlertTriangle,
  FolderLock,
  Lock,
  ArrowRight,
  Eye,
  Check,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free Freelancer Follow-Up Tracker (Notion Template & Swipe Scripts) | Growth Stack Guide',
  description:
    'Download the official Freelancer Follow-Up Tracker for Notion ($0 Free Template). Unlock the 1-Tap Quick-Log Dock, Formula 2.0 Urgency Radar, 14-Day Cadence Table, and 3 Proven Follow-Up Email Swipe Scripts.',
  openGraph: {
    title: 'Free Freelancer Follow-Up Tracker | Growth Stack Guide',
    description:
      'High-speed follow-up pipeline for solo service providers. Never let a prospective client inquiry slip through the cracks. 100% free on Notion.',
    images: [
      {
        url: '/images/guides/freelancer-follow-up-tracker-notion-system.jpg',
        width: 1200,
        height: 630,
        alt: 'Freelancer Follow-Up Tracker Notion Workspace Preview',
      },
    ],
  },
};

// Configurable Gumroad Lead Magnet checkout URL ($0 Free Download)
const GUMROAD_FREEBIE_URL = 'https://growthstackguide.gumroad.com/l/freelancer-follow-up-tracker';

// The 7 Delivered Core Pillars strictly matching 01_Tier0_Promises_Delivered.md with High-Curiosity Fascinations
const deliveredPillars = [
  {
    number: '01',
    title: 'The "Zero Leakage" Quick-Capture Dock',
    promise: 'Never lose a prospective client inquiry across email, LinkedIn, Upwork, or social DMs again.',
    icon: Zap,
    accentBg: '#F3F0FF',
    accentColor: '#6C4DFF',
    badge: 'Under 5 Seconds',
    teaser:
      'Most freelancers lose leads because logging inquiries takes too long. This 1-tap dock captures prospect channel and project scope in under 5 seconds—and instantly arms an automated 48-hour follow-up countdown so you never leave revenue on the table.',
    deliveredItems: [
      '1-Tap [+ Quick-Log Inbound Lead] native action dock button',
      'Captures prospect name, contact channel, and scope in under 5 seconds',
      'Automatically sets initial "New" status and arms first follow-up date 48 hours ahead',
      'Mobile-optimized for iOS and Android Notion widget quick capture',
    ],
  },
  {
    number: '02',
    title: 'The "Zero Mental Math" Urgency Radar',
    promise: 'Always know who needs attention today without calculating dates or scrolling spreadsheets.',
    icon: AlertTriangle,
    accentBg: '#FEF3C7',
    accentColor: '#D97706',
    badge: 'Formula 2.0 Radar',
    teaser:
      'Eliminate spreadsheet dread. The proprietary Formula 2.0 engine recalculates dates every midnight and sorts leads into color-coded priority queues—instantly surfacing overdue touchpoints in high-contrast red so your morning focus takes under 60 seconds.',
    deliveredItems: [
      '🚨 Overdue (Xd) — Immediate action required; overdue touchpoints highlighted in high-contrast red',
      '⏰ Due Today — High-priority daily focus list to clear in under 10 minutes',
      '⏳ In Xd — Upcoming leads safely scheduled for future touchpoints',
      '✅ Concluded — Deals cleanly closed (Won or Lost) without cluttering active pipelines',
    ],
  },
  {
    number: '03',
    title: 'The "Never Wonder What to Say" Email Swipe Vault',
    promise: 'Never send an awkward, desperate "just checking in" email again.',
    icon: Mail,
    accentBg: '#EBFBEE',
    accentColor: '#10B981',
    badge: '3 Swipe Scripts',
    teaser:
      'Stop using weak phrases that destroy your negotiating leverage. Access three field-tested email templates engineered specifically for freelance service providers—including the psychological 9-word question that re-opens 40%+ of cold conversations.',
    deliveredItems: [
      'Script 1: The 48-Hour Polite Nudge — Professional proposal receipt confirmation sent 2 days post-pitch',
      'Script 2: The Value-Add Touchpoint — Zero-pressure relationship builder providing value without asking for a reply (5–7 days)',
      'Script 3: The 9-Word Breakup Email — Battle-tested question triggering 40%+ response rate after 2 weeks of radio silence',
      'Pre-formatted toggle blocks ready to copy-paste directly into your email client',
    ],
  },
  {
    number: '04',
    title: 'The 14-Day Cadence Timing Roadmap Table',
    promise: 'A proven outreach schedule so you stay top-of-mind without being spammy or pushy.',
    icon: Clock,
    accentBg: '#EBF5FF',
    accentColor: '#3B9EFF',
    badge: 'Cadence Map',
    teaser:
      'Why following up on Day 5 instead of Day 4 prevents you from looking desperate, and how the Day 9 calendar check establishes authority. The complete 14-Day roadmap maps every critical touchpoint from discovery to deal closure.',
    deliveredItems: [
      'Day 0: Inbound discovery & 5-second quick-logging into the pipeline',
      'Day 2: 48-hour polite nudge to confirm proposal receipt',
      'Day 5: High-value resource touchpoint with zero reply pressure',
      'Day 9: Production timeline and project availability window check',
      'Day 14: Final 9-word breakup question or clean pipeline archive',
    ],
  },
  {
    number: '05',
    title: 'The "Instant Meeting Context" Lead Dossier',
    promise: 'Never walk into a sales call or message without knowing exactly what the client wants.',
    icon: CheckSquare,
    accentBg: '#EEF2FF',
    accentColor: '#4F46E5',
    badge: 'Lead Dossier',
    teaser:
      'The 4 critical project parameters top solo consultants log during discovery so they never scramble for notes or stutter on pricing during a high-stakes call.',
    deliveredItems: [
      'Client Primary Goal & Scope Definition captured upfront',
      'Budget Range Discussed and pricing parameters recorded',
      'Target Launch / Project Deadline milestones logged',
      'Next Touchpoint Talking Points to lead confident, authoritative conversations',
    ],
  },
  {
    number: '06',
    title: 'The "Clean Pipeline & Deal Won" Momentum Protocol',
    promise: 'Closing a deal will never clutter your prospect pipeline with active delivery work.',
    icon: Laptop,
    accentBg: '#F3F4F6',
    accentColor: '#11152F',
    badge: 'Hand-Off Protocol',
    teaser:
      'What top freelancers do the exact second a client says "yes" to lock the deposit before buyer’s remorse sets in—while keeping the sales dashboard clean and focused.',
    deliveredItems: [
      'Send formal invoice & agreement to lock the deposit upfront',
      'Record client communication style, timezone, and key decision-makers',
      'Clear closed deals off the sales pipeline to maintain daily focus',
      'Seamlessly transition client notes into active project kickoff',
    ],
  },
  {
    number: '07',
    title: 'The 100% Free, Private & Lightweight Workspace',
    promise: 'A genuine $0 utility tool that respects your privacy and requires zero paid subscriptions.',
    icon: FolderLock,
    accentBg: '#FEF2F2',
    accentColor: '#DC2626',
    badge: '100% Free & Private',
    teaser:
      'No monthly software subscriptions, no complicated Zapier webhooks, and no third-party data tracking. Operates 100% inside your personal Notion workspace.',
    deliveredItems: [
      '100% Free Forever: Zero paywalls on core follow-up tracking databases',
      '100% Private: Operates entirely inside your personal Notion workspace—no third-party tracking',
      'Mobile-Optimized: 1-tap capture dock works seamlessly on iOS & Android Notion widgets',
      'Zero Overhead: Clean, minimal architecture that loads instantly without lag',
    ],
  },
];

// 14-Day Cadence Table Data strictly from 01_Tier0_Promises_Delivered.md with High-Value Curiosity Angles
const cadenceMilestones = [
  {
    day: 'Day 0',
    phase: 'Inbound Discovery & Instant Logging',
    timing: 'Within 5 minutes of inquiry',
    action: '1-Tap Quick-Log lead name, contact channel, and scope. Automatically set initial "New" status and 48-hour follow-up countdown.',
    asset: '1-Tap Action Dock',
    badgeColor: '#EBF5FF',
    badgeTextColor: '#2563EB',
  },
  {
    day: 'Day 2',
    phase: '48-Hour Polite Nudge',
    timing: '48 hours post-pitch',
    action: 'Send Script 1 to confirm proposal receipt and offer a brief scope walk-through without sounding anxious or needy.',
    asset: 'Swipe Script 1',
    badgeColor: '#FEF3C7',
    badgeTextColor: '#D97706',
  },
  {
    day: 'Day 5',
    phase: 'Value-Add Touchpoint',
    timing: '3 days after nudge (silence)',
    action: 'Send Script 2 with a tailored reference or benchmark. Delivers pure value with zero reply pressure to build high-status trust.',
    asset: 'Swipe Script 2',
    badgeColor: '#EBFBEE',
    badgeTextColor: '#10B981',
  },
  {
    day: 'Day 9',
    phase: 'Timeline & Project Window Check',
    timing: '4 days after value touchpoint',
    action: 'Send polite production calendar check regarding launch availability and upcoming sprint capacity.',
    asset: 'Window Check SOP',
    badgeColor: '#F3F0FF',
    badgeTextColor: '#6C4DFF',
  },
  {
    day: 'Day 14',
    phase: 'The 9-Word Breakup Question',
    timing: '2 weeks of radio silence',
    action: 'Send Script 3 to trigger loss aversion. Forces a 40%+ immediate response or allows clean, dignified pipeline closure.',
    asset: 'Swipe Script 3 (9 Words)',
    badgeColor: '#FEE2E2',
    badgeTextColor: '#DC2626',
  },
];

// 3 Email Swipe Scripts Sneak Peeks (Curiosity-Driven / Locked Teasers)
const swipeTeasers = [
  {
    number: '01',
    title: 'The 48-Hour Polite Nudge',
    timing: 'Sent 2 days post-pitch',
    goal: 'Confirms proposal receipt and establishes professional authority without appearing anxious for the deal.',
    subjectPreview: 'Quick follow-up regarding [Project Name] proposal',
    hookInsight:
      'Most freelancers apologize for following up ("Sorry to bother you!"). This script uses a high-status confirmation angle that makes clients treat you as a busy, in-demand peer.',
    responseRate: 'Standard Follow-Up Baseline',
    tag: 'Gentle Confirmation',
  },
  {
    number: '02',
    title: 'The Value-Add Touchpoint',
    timing: 'Sent 5–7 days after silence',
    goal: 'Zero-pressure relationship builder that provides value without asking for a reply.',
    subjectPreview: 'Resource for [Client Primary Goal]',
    hookInsight:
      'Explicitly tells the client "no reply needed". By removing conversational debt, it triggers genuine gratitude and often sparks an immediate scope conversation.',
    responseRate: 'High Trust Multiplier',
    tag: 'Zero-Pressure Angle',
  },
  {
    number: '03',
    title: 'The 9-Word Breakup Email',
    timing: 'Sent after 2 weeks of radio silence',
    goal: 'Battle-tested question that triggers a 40%+ response rate after complete radio silence.',
    subjectPreview: '[Project Name]',
    hookInsight:
      'Taps into the powerful psychological phenomenon of loss aversion. Instead of chasing, you cleanly ask a specific 9-word question that compels a decisive reply within hours.',
    responseRate: '40%+ Verified Response Rate',
    tag: 'High-Response Trigger',
  },
];

const faqs = [
  {
    question: 'Is this template really 100% free?',
    answer:
      'Yes. The Freelancer Follow-Up Tracker is 100% free forever with zero paywalls, trial expirations, or credit card requirements.',
  },
  {
    question: 'Do I need a paid Notion plan to use this?',
    answer:
      'No. Every database, button, and Formula 2.0 property in this workspace runs 100% on Notion’s free personal tier.',
  },
  {
    question: 'How do I duplicate the template into my personal Notion workspace?',
    answer:
      'Click any download button to claim the template on Gumroad. Your confirmation screen and email receipt contain a direct link to the template. Open the link, log in to Notion, and click "Duplicate" in the upper-right corner. The entire workspace clones into your account in seconds.',
  },
  {
    question: 'How does the Formula 2.0 Urgency Radar work?',
    answer:
      'The formula automatically compares today’s date with the scheduled follow-up date. It categorizes leads into 🚨 Overdue (Xd), ⏰ Due Today, ⏳ In Xd, or ✅ Concluded, highlighting overdue touchpoints in red without any manual mental math.',
  },
  {
    question: 'What email swipe scripts are included in the template?',
    answer:
      'You receive 3 pre-written swipe files: Script 1 (The 48-Hour Polite Nudge), Script 2 (The Value-Add Touchpoint), and Script 3 (The 9-Word Breakup Email that triggers 40%+ response rates after radio silence).',
  },
  {
    question: 'Is my client data completely private?',
    answer:
      '100% private. The template operates entirely within your own Notion account. No external databases, third-party webhooks, or third-party servers ever touch your client notes or pipeline data.',
  },
];

export default function FreebieLandingPage() {
  return (
    <div className="w-full bg-[var(--bg-main)]">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20 border-b border-[var(--border-color)]">
        <div className="container-custom max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--text-muted)] mb-6 sm:mb-8 text-left">
            <Link href="/" className="hover:text-[var(--text-dark)] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/resources/" className="hover:text-[var(--text-dark)] transition-colors">
              Resources
            </Link>
            <span>/</span>
            <span className="text-[var(--text-dark)]">Freelancer Follow-Up Tracker</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Direct-Response Copy (7 cols) */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--primary-yellow-light)] border border-[var(--primary-yellow)]/40 text-[#B45309] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#B45309] flex-shrink-0" />
                <span>$0 Free Notion System &bull; Inbound Sales Pipeline</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[var(--text-dark)] tracking-tight leading-[1.15]">
                Why 60% of inbound freelance inquiries go ghost...{' '}
                <span className="text-[var(--primary-yellow)] underline decoration-[var(--border-color)] decoration-wavy underline-offset-6">
                  and the automated pipeline that brings them back.
                </span>
              </h1>

              {/* Supporting Copy with Open Loop / Fascination */}
              <p className="text-sm sm:text-base lg:text-lg text-[var(--text-muted)] leading-relaxed max-w-2xl">
                The <strong className="text-[var(--text-dark)]">Freelancer Follow-Up Tracker</strong> is a lightweight Notion workspace that stops 4-figure freelance inquiries from slipping through the cracks. Includes an automated Formula 2.0 urgency radar, a 5-second lead capture dock, and 3 battle-tested follow-up swipe scripts (including the 9-word question with a 40%+ response rate).
              </p>

              {/* Value Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-medium text-[var(--text-dark)]">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                  <span>5-Second Quick-Log</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[var(--text-dark)]">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                  <span>Formula 2.0 Urgency Radar</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[var(--text-dark)]">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                  <span>3 Field-Tested Swipe Scripts</span>
                </div>
              </div>

              {/* Primary Call to Action */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={GUMROAD_FREEBIE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[var(--primary-yellow)] hover:bg-[var(--primary-yellow-hover)] text-[var(--text-dark)] font-bold text-sm sm:text-base shadow-[var(--shadow-yellow)] transition-all transform hover:-translate-y-0.5"
                >
                  <Download className="w-4 h-4 text-[var(--text-dark)]" />
                  <span>Download Free Tracker to Unlock Swipes</span>
                  <ExternalLink className="w-4 h-4 text-[var(--text-dark)] opacity-70" />
                </a>

                <div className="text-left text-xs text-[var(--text-muted)] space-y-0.5">
                  <div className="flex items-center gap-1 font-semibold text-[var(--text-dark)]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>Instant Digital Duplication</span>
                  </div>
                  <div>100% Free Forever &bull; Runs on Notion&apos;s Free Plan</div>
                </div>
              </div>

            </div>

            {/* Right Column: Visual Mockup Container (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-[360px] sm:max-w-[420px] rounded-3xl overflow-hidden bg-white border border-[var(--border-color)] shadow-[var(--shadow-lg)] group">
                <div className="aspect-[4/3] overflow-hidden bg-[#F6F3EB] relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <picture>
                    <source
                      srcSet="/images/guides/freelancer-follow-up-tracker-notion-system.webp"
                      type="image/webp"
                    />
                    <img
                      src="/images/guides/freelancer-follow-up-tracker-notion-system.jpg"
                      alt="Freelancer Follow-Up Tracker Notion Workspace Full Preview"
                      width={420}
                      height={315}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </picture>
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 rounded-full bg-[#0B0E1A]/85 backdrop-blur-xs text-white text-[11px] font-bold flex items-center gap-1.5 shadow-md">
                      <Lock className="w-3 h-3 text-[var(--primary-yellow)]" />
                      <span>Includes 3 Swipe Files</span>
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-5 bg-white border-t border-[var(--border-color)] text-left flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-xs font-bold text-[var(--text-dark)] block">
                      Freelancer Follow-Up Tracker
                    </span>
                    <span className="text-[11px] text-[var(--text-muted)] block">
                      Official Notion Workspace Template
                    </span>
                  </div>
                  <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-[var(--color-success-bg)] text-[#065F46] flex-shrink-0">
                    Free Access ($0)
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Problem / Core Value Promise Strip */}
      <section className="py-10 sm:py-14 bg-white border-b border-[var(--border-color)]">
        <div className="container-custom max-w-4xl mx-auto px-4 sm:px-6 text-left space-y-4">
          <span className="text-xs font-bold text-[#E11D48] uppercase tracking-wider block">
            The Freelance Revenue Leak
          </span>
          <h2 className="font-heading font-extrabold text-xl sm:text-3xl text-[var(--text-dark)]">
            Most lost freelance projects aren&apos;t lost to competitors—they are lost to silence.
          </h2>
          <div className="text-xs sm:text-sm text-[var(--text-muted)] space-y-2.5 leading-relaxed">
            <p>
              When a prospective client reaches out via email, LinkedIn, Upwork, or referrals, what happens next determines whether you close a $3,000 project or hear crickets. Without a systematic follow-up engine, solo service providers commit two fatal mistakes:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
              <li><strong>Mistake 1:</strong> You wait too long, forget to follow up, and the client hires someone who responded with faster momentum.</li>
              <li><strong>Mistake 2:</strong> You send desperate, awkward &quot;just checking in to see if you had questions&quot; emails that undermine your negotiating posture and peer status.</li>
            </ul>
            <p>
              The Freelancer Follow-Up Tracker turns outreach into an automated, high-speed discipline. You capture leads in 5 seconds, let dynamic formulas flag daily priorities, and use proven swipe files that prompt high-value prospects to reply.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Deep Dive: All 7 Delivered Promises with Fascinations */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[var(--bg-main)]">
        <div className="container-custom max-w-5xl mx-auto px-4 sm:px-6 space-y-10 sm:space-y-14">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--purple-main)] uppercase tracking-wider">
              <Laptop className="w-4 h-4" />
              <span>Full System Architecture</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[var(--text-dark)]">
              The 7 Core Promises Delivered in the Workspace
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-muted)]">
              Engineered from the ground up to run natively on Notion&apos;s free plan with zero monthly overhead.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {deliveredPillars.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={pillar.number}
                  className="p-6 sm:p-8 rounded-3xl bg-white border border-[var(--border-color)] shadow-[var(--shadow-sm)] text-left space-y-5"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[var(--border-color)] pb-5">
                    <div className="flex items-center gap-3.5">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: pillar.accentBg, color: pillar.accentColor }}
                      >
                        <IconComp className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold text-[var(--text-light)]">
                            PART {pillar.number}
                          </span>
                          <span
                            className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                            style={{ backgroundColor: pillar.accentBg, color: pillar.accentColor }}
                          >
                            {pillar.badge}
                          </span>
                        </div>
                        <h3 className="font-heading font-extrabold text-lg sm:text-xl text-[var(--text-dark)]">
                          {pillar.title}
                        </h3>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-[var(--text-muted)] italic">
                      &quot;{pillar.promise}&quot;
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[var(--text-dark)] font-medium leading-relaxed bg-[#FAF8F2] p-3.5 rounded-2xl border border-[var(--border-color)]/60">
                    💡 <span className="text-[var(--text-muted)]">{pillar.teaser}</span>
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    {pillar.deliveredItems.map((item) => (
                      <div key={item} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. Delivered Feature Showcase: 14-Day Cadence Timing Roadmap Table */}
      <section className="py-12 sm:py-16 bg-white border-t border-[var(--border-color)]">
        <div className="container-custom max-w-5xl mx-auto px-4 sm:px-6 space-y-8 text-left">
          
          <div className="space-y-2 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-[var(--purple-main)] uppercase tracking-wider block">
              Pillar 04 Timing Roadmap
            </span>
            <h2 className="font-heading font-extrabold text-xl sm:text-3xl text-[var(--text-dark)]">
              The 14-Day Follow-Up Cadence Roadmap
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-muted)]">
              A systematic milestone cadence that keeps you top-of-mind without ever coming across as pushy, annoying, or desperate.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[var(--border-color)] shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white">
              <thead>
                <tr className="bg-[var(--bg-main)] border-b border-[var(--border-color)] text-[var(--text-dark)] font-bold">
                  <th className="py-3.5 px-4 sm:px-6 w-24">Milestone</th>
                  <th className="py-3.5 px-4 sm:px-6 w-48">Outreach Stage</th>
                  <th className="py-3.5 px-4 sm:px-6 w-44">Recommended Timing</th>
                  <th className="py-3.5 px-4 sm:px-6">System Action &amp; Protocol</th>
                  <th className="py-3.5 px-4 sm:px-6 w-36 text-right">Included Asset</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-color)]">
                {cadenceMilestones.map((milestone) => (
                  <tr key={milestone.day} className="hover:bg-[#FAF8F2] transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-mono font-bold text-[var(--text-dark)] whitespace-nowrap">
                      <span
                        className="px-2.5 py-1 rounded-full text-xs font-extrabold"
                        style={{ backgroundColor: milestone.badgeColor, color: milestone.badgeTextColor }}
                      >
                        {milestone.day}
                      </span>
                    </td>
                    <td className="py-4 px-4 sm:px-6 font-bold text-[var(--text-dark)]">
                      {milestone.phase}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-[var(--text-muted)] whitespace-nowrap">
                      {milestone.timing}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-[var(--text-muted)] leading-relaxed">
                      {milestone.action}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-right whitespace-nowrap">
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[var(--purple-main)] bg-[var(--purple-light)] px-2.5 py-1 rounded-full">
                        <Lock className="w-3 h-3" />
                        <span>{milestone.asset}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-2xl bg-[#F8F9FD] border border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
            <div className="space-y-0.5">
              <span className="text-xs font-bold text-[var(--text-dark)] block">
                Want the full interactive checklist and automation formulas?
              </span>
              <span className="text-[11px] text-[var(--text-muted)] block">
                The complete 14-day cadence roadmap is pre-built into the Notion database views.
              </span>
            </div>
            <a
              href={GUMROAD_FREEBIE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--primary-yellow)] hover:bg-[var(--primary-yellow-hover)] text-[var(--text-dark)] font-bold text-xs shadow-xs transition-colors flex-shrink-0"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Get Free Cadence Table</span>
            </a>
          </div>

        </div>
      </section>

      {/* 5. Delivered Feature Showcase: 3 Follow-Up Email Swipe Scripts (Curiosity Teaser / Locked Previews) */}
      <section className="py-12 sm:py-16 bg-[var(--bg-main)] border-t border-[var(--border-color)]">
        <div className="container-custom max-w-5xl mx-auto px-4 sm:px-6 space-y-8 text-left">
          
          <div className="space-y-2 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-[#10B981] uppercase tracking-wider block">
              Pillar 03 Copywriting Swipes
            </span>
            <h2 className="font-heading font-extrabold text-xl sm:text-3xl text-[var(--text-dark)]">
              3 Battle-Tested Email Swipe Scripts (Sneak Peek)
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-muted)]">
              Pre-written, peer-status follow-up scripts formatted inside Notion toggle blocks. Duplicate the template to unlock word-for-word copy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {swipeTeasers.map((swipe) => (
              <div
                key={swipe.title}
                className="p-6 rounded-3xl bg-white border border-[var(--border-color)] shadow-[var(--shadow-sm)] flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#EBFBEE] text-[#065F46]">
                      {swipe.tag}
                    </span>
                    <span className="text-[11px] font-semibold text-[var(--text-muted)]">
                      {swipe.timing}
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-base sm:text-lg text-[var(--text-dark)]">
                    Script {swipe.number}: {swipe.title}
                  </h3>

                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    {swipe.goal}
                  </p>

                  {/* Teaser Box with Blurred / Locked Content */}
                  <div className="p-4 rounded-2xl bg-[#F8F9FD] border border-[var(--border-color)] space-y-2.5 relative overflow-hidden">
                    <div className="text-[11px] font-bold text-slate-500 font-mono">
                      Subject: <span className="text-slate-800">{swipe.subjectPreview}</span>
                    </div>

                    <div className="relative pt-1 border-t border-[var(--border-color)]">
                      {/* Blurred teaser mock */}
                      <div className="filter blur-[3.5px] select-none text-[11px] text-slate-400 font-mono leading-relaxed space-y-1">
                        <p>Hi [First Name],</p>
                        <p>Wanted to quickly check in regarding the project scope we outlined on Tuesday. Happy to answer questions...</p>
                        <p>Talk soon,</p>
                      </div>

                      {/* Locked Overlay Badge */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-center bg-white/40 backdrop-blur-[1px]">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0B0E1A] text-white text-[10px] font-extrabold shadow-md">
                          <Lock className="w-3 h-3 text-[var(--primary-yellow)]" />
                          <span>Full Word-for-Word Script Locked</span>
                        </div>
                        <span className="text-[10px] text-slate-600 font-medium mt-1">
                          Unlocked inside the free Notion workspace
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Copy Insight */}
                  <div className="p-3 rounded-xl bg-[#FAF8F2] border border-[var(--border-color)]/60 text-[11px] text-[var(--text-dark)] leading-snug space-y-1">
                    <span className="font-bold text-[#B45309] block">Why It Works:</span>
                    <p className="text-[var(--text-muted)]">{swipe.hookInsight}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-[var(--border-color)] flex items-center justify-between text-[11px]">
                  <span className="font-bold text-[#10B981]">{swipe.responseRate}</span>
                  <a
                    href={GUMROAD_FREEBIE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-bold text-[var(--purple-main)] hover:underline"
                  >
                    <span>Unlock Script</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Central Callout Banner for Swipes */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0B0E1A] to-[#1E2438] text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-bold text-[var(--primary-yellow)] uppercase tracking-wider block">
                The 9-Word Breakup Question
              </span>
              <h3 className="font-heading font-extrabold text-lg sm:text-2xl text-white">
                Ready to re-open silent leads without sounding desperate?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Download the free Notion template to copy-paste all 3 swipe scripts directly into your email client in under 60 seconds.
              </p>
            </div>
            <a
              href={GUMROAD_FREEBIE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[var(--primary-yellow)] hover:bg-[var(--primary-yellow-hover)] text-[var(--text-dark)] font-bold text-xs sm:text-sm shadow-md transition-all flex-shrink-0"
            >
              <Download className="w-4 h-4" />
              <span>Unlock All 3 Swipes ($0)</span>
            </a>
          </div>

        </div>
      </section>

      {/* 6. Delivered Feature Showcase: Instant Lead Dossier & 5-Minute Hand-Off Protocol */}
      <section className="py-12 sm:py-16 bg-white border-t border-[var(--border-color)]">
        <div className="container-custom max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            
            {/* Lead Dossier */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-main)] border border-[var(--border-color)] space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--purple-main)] uppercase tracking-wider">
                <CheckSquare className="w-4 h-4" />
                <span>Pillar 05 Pre-Built Framework</span>
              </div>
              <h3 className="font-heading font-extrabold text-lg sm:text-xl text-[var(--text-dark)]">
                Instant Meeting Context Lead Dossier
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                Never enter a discovery call or message thread without full context. Pre-built properties organize critical parameters at a glance:
              </p>
              <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-[var(--text-dark)]">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                  <span><strong>Client Primary Goal &amp; Scope:</strong> Exact project parameters</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                  <span><strong>Budget Range Discussed:</strong> Target rates and price brackets</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                  <span><strong>Target Launch / Deadline:</strong> Critical client milestones</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                  <span><strong>Next Talking Points:</strong> Key discussion topics for call prep</span>
                </li>
              </ul>
            </div>

            {/* 5-Minute Client Hand-Off Protocol */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-main)] border border-[var(--border-color)] space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#10B981] uppercase tracking-wider">
                <Laptop className="w-4 h-4" />
                <span>Pillar 06 Deal Won Protocol</span>
              </div>
              <h3 className="font-heading font-extrabold text-lg sm:text-xl text-[var(--text-dark)]">
                5-Minute Client Hand-Off Protocol
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                Closing a deal shouldn&apos;t clutter your prospect pipeline with active delivery work. Smoothly transition deals to execution:
              </p>
              <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-[var(--text-dark)]">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                  <span>Send formal invoice &amp; agreement to lock the deposit upfront</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                  <span>Record client communication style, timezone, and decision-makers</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                  <span>Clear closed deals off sales pipeline to maintain daily focus</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                  <span>Seamlessly transition client notes into active project kickoff</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Quick Setup Workflow */}
      <section className="py-12 sm:py-16 bg-[var(--bg-main)] border-t border-[var(--border-color)]">
        <div className="container-custom max-w-4xl mx-auto px-4 sm:px-6 space-y-8 text-left">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-heading font-extrabold text-xl sm:text-3xl text-[var(--text-dark)]">
              How to Get Started in 3 Quick Steps
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-muted)]">
              Clone the workspace into your personal Notion account in under 60 seconds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[var(--border-color)] space-y-3">
              <div className="w-8 h-8 rounded-full bg-[var(--primary-yellow-light)] text-[var(--primary-yellow)] font-heading font-extrabold flex items-center justify-center text-sm border border-[var(--primary-yellow)]/30">
                1
              </div>
              <h3 className="font-heading font-bold text-sm text-[var(--text-dark)]">Claim on Gumroad</h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                Click any download button, enter $0 at checkout, and get instant access to the Notion template link.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[var(--border-color)] space-y-3">
              <div className="w-8 h-8 rounded-full bg-[var(--primary-yellow-light)] text-[var(--primary-yellow)] font-heading font-extrabold flex items-center justify-center text-sm border border-[var(--primary-yellow)]/30">
                2
              </div>
              <h3 className="font-heading font-bold text-sm text-[var(--text-dark)]">Tap &quot;Duplicate&quot; in Notion</h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                Open the link in your browser, log in to Notion, and click &quot;Duplicate&quot; in the upper-right corner.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[var(--border-color)] space-y-3">
              <div className="w-8 h-8 rounded-full bg-[var(--primary-yellow-light)] text-[var(--primary-yellow)] font-heading font-extrabold flex items-center justify-center text-sm border border-[var(--primary-yellow)]/30">
                3
              </div>
              <h3 className="font-heading font-bold text-sm text-[var(--text-dark)]">Unlock &amp; Track Leads</h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                Click [+ Quick-Log Inbound Lead] to log incoming inquiries, copy swipe scripts, and let Formula 2.0 manage urgency alerts.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className="py-12 sm:py-16 bg-white border-t border-[var(--border-color)]">
        <div className="container-custom max-w-3xl mx-auto px-4 sm:px-6 space-y-8 text-left">
          
          <div className="space-y-2 text-center">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--purple-main)] uppercase tracking-wider">
              <HelpCircle className="w-4 h-4" />
              <span>Questions Answered</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[var(--text-dark)]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-main)] border border-[var(--border-color)] space-y-2"
              >
                <h3 className="font-heading font-bold text-sm sm:text-base text-[var(--text-dark)]">
                  {faq.question}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. Final Download Banner */}
      <section className="py-12 sm:py-16 bg-[var(--bg-main)] border-t border-[var(--border-color)]">
        <div className="container-custom max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-[var(--text-dark)] tracking-tight">
            Stop losing 4-figure client inquiries to radio silence.
          </h2>
          <p className="text-xs sm:text-base text-[var(--text-muted)] max-w-xl mx-auto">
            Duplicate the Freelancer Follow-Up Tracker for free and unlock the 14-day cadence, Formula 2.0 radar, and all 3 battle-tested swipe scripts today.
          </p>
          <div className="pt-2">
            <a
              href={GUMROAD_FREEBIE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[var(--primary-yellow)] hover:bg-[var(--primary-yellow-hover)] text-[var(--text-dark)] font-bold text-sm sm:text-base shadow-[var(--shadow-yellow)] transition-all transform hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4" />
              <span>Get Free Follow-Up Tracker &amp; Swipes ($0)</span>
              <ExternalLink className="w-4 h-4 opacity-70" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
