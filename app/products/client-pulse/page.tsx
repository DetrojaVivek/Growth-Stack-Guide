import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Sparkles,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  HelpCircle,
  Laptop,
  CheckSquare,
  AlertTriangle,
  FolderLock,
  Lock,
  ArrowRight,
  Clock,
  Video,
  Layers,
  RotateCw,
  Zap,
  Check,
  CreditCard,
  Calendar,
  DollarSign,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Client Pulse ($7) — Anti-Neglect Relationship CRM for Solo Freelancers | Growth Stack Guide',
  description:
    'The lightweight Notion CRM for solo service providers. Includes automated 14-day inactivity radar, Zoom meeting decision logs, 5-stage milestone tracking, and 3 client retention swipe scripts. One-time $7 lifetime access.',
  keywords: [
    'Notion freelancer CRM',
    'anti neglect CRM',
    'client retention template',
    'freelance client relationship manager',
    'Notion CRM for service providers',
    'freelance client onboarding',
  ],
  openGraph: {
    title: 'Client Pulse ($7) — Anti-Neglect Relationship CRM for Solo Freelancers',
    description:
      'Never lose a paying client to radio silence. Lightweight Notion CRM with automated 14-day inactivity radar, Zoom meeting logs, and 3 retention swipe scripts.',
    images: [
      {
        url: '/images/guides/client-pulse-anti-neglect-freelancer-crm-notion.jpg',
        width: 1200,
        height: 630,
        alt: 'Client Pulse Anti-Neglect Notion CRM Workspace Preview',
      },
    ],
  },
};

// Configurable Gumroad Checkout URL ($7 Lifetime Purchase)
const GUMROAD_CLIENT_PULSE_URL = 'https://growthstackguide.gumroad.com/l/client-pulse-crm';

// The 8 Core Delivered Promises strictly matching 02_Tier1_Promises_Delivered.md
const deliveredPillars = [
  {
    number: '01',
    title: 'The "Zero Client Neglect" Automated Inactivity Radar',
    promise: 'Never accidentally ghost or neglect an active paying client while busy delivering project work.',
    icon: AlertTriangle,
    accentBg: '#FEF3C7',
    accentColor: '#D97706',
    badge: 'Formula 2.0 Engine',
    teaser:
      'The silent killer of freelance retainers isn\'t poor work—it\'s radio silence while you\'re heads-down in delivery. The Formula 2.0 Inactivity Radar tracks days since your last touchpoint and automatically surfaces high-visibility alerts before a client ever feels forgotten.',
    deliveredItems: [
      '⚠️ At-Risk (Xd Inactive) — Check In: High-contrast amber/red alert triggered the second a client hits 14+ days without contact',
      '🟡 7+ Days Since Contact: Gentle weekly reminder to keep accounts warm',
      '🟢 Active (Xd ago): Real-time visual confirmation of healthy, active communication',
      '1-Tap Triage Button: Dedicated [⚠️ View At-Risk Clients (14+ Days)] filter to rescue neglected accounts in 60 seconds',
    ],
  },
  {
    number: '02',
    title: 'The "Tailored Client Experience" Dossier',
    promise: 'Always know how every client prefers to communicate, their timezone, and project terms without digging through old threads.',
    icon: CheckSquare,
    accentBg: '#EEF2FF',
    accentColor: '#4F46E5',
    badge: 'Relationship Hub',
    teaser:
      'High-paying remote clients expect seamless communication. Dedicated client dossiers keep their exact timezone, preferred channel, and unique working rules right at your fingertips so you never send an accidental midnight ping or miss a feedback rule.',
    deliveredItems: [
      'Client Timezone Selector: Pre-configured for EST, CST, PST, GMT, CET to eliminate mistimed messages',
      'Preferred Channel Tracker: Explicitly notes whether the client lives in Slack, Email, Loom, or WhatsApp',
      'Contract / Retainer Value: Dedicated currency property ($) for immediate revenue visibility per client',
      'Client Quirks & Working Rules: Pre-built section for behavioral preferences ("Prefers bullet points; 48h review buffer; no Friday calls")',
    ],
  },
  {
    number: '03',
    title: 'The "Never Forget a Call Agreement" Meeting Log Hub',
    promise: 'Never wonder what was agreed upon during a Zoom call or lose track of verbal client feedback.',
    icon: Video,
    accentBg: '#EBF5FF',
    accentColor: '#2563EB',
    badge: 'Decision Tracker',
    teaser:
      'Verbal feedback during video calls is where scope creep and misaligned expectations begin. Standardized meeting decision logs give you a 60-second capture framework that separates approved deliverables from revision requests.',
    deliveredItems: [
      'Meeting Purpose & Attendees: Capture critical call context in under 60 seconds',
      'Zoom / Loom Recording Link: Central archive for video replays, Loom updates, and meeting transcripts',
      'Key Decisions Made: Clean bulleted framework separating what was approved from what was changed',
      'Action Items & Commitments: Explicit tracking of who owns what deliverable by what specific date',
      'Post-Call Recap Sent? Checkbox reminder ensuring you send formal written summaries after every call',
    ],
  },
  {
    number: '04',
    title: 'The "Work Ships On Schedule" Project Milestones Board',
    promise: 'Client relationship health is directly tied to actual deliverables, so scope never drifts and deadlines are never missed.',
    icon: Layers,
    accentBg: '#F3F0FF',
    accentColor: '#6C4DFF',
    badge: 'Kanban Delivery',
    teaser:
      'Managing client relationships without tracking production milestones leads to missed deadlines and unpaid invoices. The 5-stage milestone board connects relationship health directly to live project delivery stages.',
    deliveredItems: [
      'Active Delivery Phases: 5-stage milestone progression property (Kickoff → Milestone 1 → In Review → Final Hand-off → Retainer)',
      'Next Milestone Target Date: High-visibility deadline property for upcoming project deliverables',
      '🚀 Active Project Milestones Board: Visual Kanban board grouping all active clients by production stage',
      'Milestone Progress Checklist: Interactive phase-by-phase completion checklist embedded inside every client page',
    ],
  },
  {
    number: '05',
    title: 'The "High-Stakes Client Retention" Email Swipe Vault',
    promise: 'Never feel awkward defending scope, nudging stalled feedback, or leaving monthly retainer revenue on the table.',
    icon: Zap,
    accentBg: '#EBFBEE',
    accentColor: '#10B981',
    badge: '3 Swipe Scripts',
    teaser:
      'Three field-tested email templates written specifically to protect your boundaries and unlock recurring income—including the exact retainer upsell pitch that turns completed one-off projects into $1,500–$2,500/mo contracts.',
    deliveredItems: [
      'Script 1: The Scope-Creep Defense Email — How to politely yet firmly say no when a client requests extra work outside scope',
      'Script 2: The Delayed-Feedback Nudge — Professional nudge sent when a client hasn\'t given feedback for 5+ days and the project stalls',
      'Script 3: The 1-Click Retainer Upsell Pitch — Battle-tested pitch sent right after final hand-off to secure monthly retainer contracts',
      'Pre-formatted toggle blocks ready to copy-paste directly into your email client in seconds',
    ],
  },
  {
    number: '06',
    title: 'The "5-Second Client Onboarding" Quick Action',
    promise: 'Adding a new paying client takes seconds, not hours of tedious workspace configuration.',
    icon: Clock,
    accentBg: '#FAF5FF',
    accentColor: '#9333EA',
    badge: '1-Click Setup',
    teaser:
      'No complex database linking required. Tap a single button the moment a new client signs their agreement to generate a complete client portal, initialize Phase 1, and reset communication timers.',
    deliveredItems: [
      '1-Click [+ Add Active Client] Action Button: Instantly generates a clean, structured client record',
      'Automatically sets account status to "Active Client"',
      'Initializes Phase 1 (Kickoff & Intake) and stamps last contact date to today',
      'Applies the full dossier, meeting log framework, and milestone checklist automatically',
    ],
  },
  {
    number: '07',
    title: 'The "10-Minute Weekly Client Peace of Mind" Routine',
    promise: 'Maintaining your entire active client roster takes just 10 minutes a week.',
    icon: RotateCw,
    accentBg: '#FFFBEB',
    accentColor: '#B45309',
    badge: 'Friday Routine',
    teaser:
      'A predictable, stress-free Friday afternoon ritual that guarantees zero client drops off your radar over the weekend. Four simple checkpoints give you complete confidence in your client health before Monday hits.',
    deliveredItems: [
      'Built-In Friday Client Review Routine: Step-by-step 4-point protocol embedded directly on your dashboard',
      'Quick-audit active accounts to identify any client nearing the ⚠️ At-Risk threshold',
      'Send 2-sentence low-effort status touchpoints to keep clients feeling valued and informed',
      'Reset contact dates and map next week\'s production milestones with complete peace of mind',
    ],
  },
  {
    number: '08',
    title: 'The Flat $7, Zero Subscription & 100% Private Workspace',
    promise: 'An agency-grade client tracking system without monthly subscription fees or third-party data tracking.',
    icon: FolderLock,
    accentBg: '#FEF2F2',
    accentColor: '#DC2626',
    badge: 'Lifetime $7 Access',
    teaser:
      'Stop paying $30–$80 every month for bloated sales software designed for 50-person enterprise teams. Client Pulse gives you everything a solo operator needs in one private, subscription-free Notion workspace.',
    deliveredItems: [
      'One-Time $7 Lifetime Access: Replaces expensive monthly CRM software (HubSpot, Monday, Pipedrive)',
      '100% Private Workspace: Operates entirely inside your private Notion account—zero external servers or webhooks',
      'Runs on Notion\'s Free Plan: Zero mandatory team seats or paid Notion subscription required',
      'Instant 1-Click Duplication: Copy the entire system into your personal workspace in under 60 seconds',
    ],
  },
];

// 3 High-Stakes Swipe Scripts Sneak Peeks (Curiosity / Locked Previews)
const swipeTeasers = [
  {
    number: '01',
    title: 'The Scope-Creep Defense Email',
    scenario: 'When a paying client asks for extra work outside the agreed project scope without extra compensation.',
    subjectPreview: 'Re: Quick scope question on [Project Name]...',
    hookInsight:
      'Most freelancers either swallow the extra work for free or send an aggressive reply that creates tension. This script uses a "complimentary scope boundary" angle that acknowledges their creative idea while offering two clear, paid options to expand.',
    valueProtected: '$500–$1,500 in unbilled scope saved per project',
    badge: 'Scope Defense',
  },
  {
    number: '02',
    title: 'The Delayed-Feedback Nudge',
    scenario: 'When a client hasn’t reviewed your draft for 5+ days and project delivery is grinding to a halt.',
    subjectPreview: 'Quick update regarding [Deliverable / Milestone] timeline...',
    hookInsight:
      'Instead of a nagging "Did you see my email?", this template politely explains how client review buffers impact the final launch deadline, shifting the responsibility back to them without an ounce of friction.',
    valueProtected: 'Prevents delivery bottlenecks & delayed milestone invoices',
    badge: 'Timeline Protection',
  },
  {
    number: '03',
    title: 'The 1-Click Retainer Upsell Pitch',
    scenario: 'Sent the exact hour of final project hand-off to transition one-off projects into ongoing monthly retainers.',
    subjectPreview: 'Final assets delivered + Next month support for [Client Goal]...',
    hookInsight:
      'Taps into post-delivery relief. When a client sees their project finished, their biggest fear is maintaining it solo. This script frames an ongoing retainer ($1,500–$2,500/mo) as risk-free insurance, securing recurring revenue while momentum is highest.',
    valueProtected: 'Adds $1,500–$2,500/mo in recurring client revenue',
    badge: 'Retainer Multiplier',
  },
];

// Delivery Milestones
const deliveryPhases = [
  {
    stage: 'Phase 1',
    name: 'Kickoff & Intake',
    desc: 'Verify deposit invoice, capture client timezone, preferred comms channel, and working rules in the dossier.',
  },
  {
    stage: 'Phase 2',
    name: 'Milestone 1 (Draft/V1)',
    desc: 'Deep work sprint. Track target delivery date and log all Zoom agreements into the standardized decision hub.',
  },
  {
    stage: 'Phase 3',
    name: 'In Revision / Review',
    desc: 'Structured feedback round. Deploy Script 2 if client review stalls past 5 days to protect the delivery calendar.',
  },
  {
    stage: 'Phase 4',
    name: 'Final Hand-off',
    desc: 'Deliver finalized assets, record approval, and immediately deploy Script 3 for the ongoing monthly retainer transition.',
  },
  {
    stage: 'Phase 5',
    name: 'Ongoing Retainer',
    desc: 'Long-term client relationship health. Inactivity radar monitors weekly touchpoints to eliminate churn permanently.',
  },
];

const faqs = [
  {
    question: 'Does Client Pulse require a paid Notion subscription?',
    answer:
      'No. Every database, Formula 2.0 property, and action button in Client Pulse is engineered to run 100% on Notion’s free personal plan with zero monthly overhead.',
  },
  {
    question: 'How is this different from a generic sales pipeline or lead tracker?',
    answer:
      'A sales pipeline tracks prospective leads before they buy. Client Pulse is built for after the deal is signed—tracking active relationship health, Zoom meeting agreements, delivery milestones, and client retention to prevent churn and unlock recurring retainers.',
  },
  {
    question: 'How does the 14-Day Inactivity Radar formula work?',
    answer:
      'The Formula 2.0 engine calculates the exact number of days between today’s date and your last recorded touchpoint. Once a client hits 14 days without communication, it automatically flags an "⚠️ At-Risk (Xd Inactive)" badge so you can check in before they feel neglected.',
  },
  {
    question: 'What email swipe scripts are included in the template?',
    answer:
      'You receive 3 pre-formatted toggle scripts: Script 1 (The Scope-Creep Defense Email), Script 2 (The Delayed-Feedback Nudge), and Script 3 (The 1-Click Retainer Upsell Pitch to secure $1,500–$2,500/mo ongoing retainers).',
  },
  {
    question: 'How do I duplicate the template into my Notion workspace?',
    answer:
      'Immediately upon completing your $7 checkout on Gumroad, you receive a direct Notion template link on your receipt and via email. Open the link in your browser, log in to Notion, and click "Duplicate" in the upper-right corner. The entire system copies into your account in seconds.',
  },
  {
    question: 'Is my client data private and secure?',
    answer:
      '100% private. Client Pulse operates entirely inside your personal Notion account. No external databases, third-party webhooks, or third-party servers ever touch your client notes or contract rates.',
  },
  {
    question: 'Is there a money-back guarantee?',
    answer:
      'Yes! If Client Pulse does not save you hours of administrative headache and help you maintain stronger client relationships within 30 days, simply reply to your Gumroad receipt for a full, prompt refund.',
  },
];

export default function ClientPulseProductPage() {
  // JSON-LD Product Schema for SEO & GEO Rich Snippets
  const jsonLdProduct = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Client Pulse — Anti-Neglect Relationship CRM for Solo Freelancers',
    image: 'https://growthstackguide.com/images/guides/client-pulse-anti-neglect-freelancer-crm-notion.jpg',
    description:
      'The lightweight Notion CRM for solo service providers. Includes automated 14-day inactivity radar, Zoom meeting decision logs, 5-stage milestone tracking, and 3 client retention swipe scripts.',
    brand: {
      '@type': 'Brand',
      name: 'Growth Stack Guide',
    },
    offers: {
      '@type': 'Offer',
      url: GUMROAD_CLIENT_PULSE_URL,
      priceCurrency: 'USD',
      price: '7.00',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Growth Stack Guide',
      },
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingRate: {
          '@type': 'MonetaryAmount',
          value: '0',
          currency: 'USD',
        },
        shippingDestination: {
          '@type': 'DefinedRegion',
          addressCountry: 'US',
        },
        deliveryTime: {
          '@type': 'ShippingDeliveryTime',
          handlingTime: {
            '@type': 'QuantitativeValue',
            minValue: 0,
            maxValue: 0,
            unitCode: 'DAY',
          },
          transitTime: {
            '@type': 'QuantitativeValue',
            minValue: 0,
            maxValue: 0,
            unitCode: 'DAY',
          },
        },
      },
      hasMerchantReturnPolicy: {
        '@type': 'MerchantReturnPolicy',
        applicableCountry: 'US',
        returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
        merchantReturnDays: 30,
        returnMethod: 'https://schema.org/ReturnByMail',
        returnFees: 'https://schema.org/FreeReturn',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '48',
    },
  };

  return (
    <div className="w-full bg-[var(--bg-main)]">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProduct) }}
      />

      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20 border-b border-[var(--border-color)]">
        <div className="container-custom max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--text-muted)] mb-6 sm:mb-8 text-left">
            <Link href="/" className="hover:text-[var(--text-dark)] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/products/" className="hover:text-[var(--text-dark)] transition-colors">
              Products
            </Link>
            <span>/</span>
            <span className="text-[var(--text-dark)]">Client Pulse CRM</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Direct-Response Sales Copy (7 cols) */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
              
              {/* Badge Group */}
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3F0FF] border border-[#6C4DFF]/30 text-[#6C4DFF] text-xs font-extrabold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>One-Time $7 Lifetime Access</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Runs on Notion&apos;s Free Plan</span>
                </div>
              </div>

              {/* Main Headline with Suspense & Open Loop */}
              <h1 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[var(--text-dark)] tracking-tight leading-[1.15]">
                Why solo freelancers lose their highest-paying clients...{' '}
                <span className="text-[var(--primary-yellow)] underline decoration-[var(--border-color)] decoration-wavy underline-offset-6">
                  and the 10-minute CRM that protects them.
                </span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-sm sm:text-base lg:text-lg text-[var(--text-muted)] leading-relaxed max-w-2xl">
                Never accidentally ghost an active client while heads-down delivering project work. <strong className="text-[var(--text-dark)]">Client Pulse</strong> equips solo freelancers and consultants with an automated 14-day inactivity radar, Zoom meeting decision logs, and 3 high-stakes retention email swipe files—for a single flat $7 payment.
              </p>

              {/* Direct-Response Value Bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-dark)]">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                  <span>Formula 2.0 Inactivity Radar</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-dark)]">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                  <span>Zoom &amp; Loom Decision Log Hub</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-dark)]">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                  <span>3 Retention Email Swipe Files</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-dark)]">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                  <span>Friday 10-Minute Client Review SOP</span>
                </div>
              </div>

              {/* Primary Call to Action Button */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={GUMROAD_CLIENT_PULSE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[var(--primary-yellow)] hover:bg-[var(--primary-yellow-hover)] text-[var(--text-dark)] font-bold text-sm sm:text-base shadow-[var(--shadow-yellow)] transition-all transform hover:-translate-y-0.5 min-h-[50px]"
                >
                  <CreditCard className="w-4 h-4 text-[var(--text-dark)]" />
                  <span>Get Client Pulse for $7 (Instant Access)</span>
                  <ExternalLink className="w-4 h-4 text-[var(--text-dark)] opacity-70" />
                </a>

                <div className="text-left text-xs text-[var(--text-muted)] space-y-0.5">
                  <div className="flex items-center gap-1 font-semibold text-[var(--text-dark)]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>30-Day Money-Back Guarantee</span>
                  </div>
                  <div>One-time payment &bull; Zero monthly subscriptions &bull; Instant duplication</div>
                </div>
              </div>

            </div>

            {/* Right Column: Visual Product Mockup Container (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-[360px] sm:max-w-[420px] rounded-3xl overflow-hidden bg-white border border-[var(--border-color)] shadow-[var(--shadow-lg)] group">
                <div className="aspect-[4/3] overflow-hidden bg-[#F6F3EB] relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <picture>
                    <source
                      srcSet="/images/guides/client-pulse-anti-neglect-freelancer-crm-notion.webp"
                      type="image/webp"
                    />
                    <img
                      src="/images/guides/client-pulse-anti-neglect-freelancer-crm-notion.jpg"
                      alt="Client Pulse Anti-Neglect Relationship CRM Notion Workspace Preview"
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
                      Client Pulse CRM
                    </span>
                    <span className="text-[11px] text-[var(--text-muted)] block">
                      Official Anti-Neglect Notion System
                    </span>
                  </div>
                  <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-[#F3F0FF] text-[#6C4DFF] flex-shrink-0">
                    $7 One-Time
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Problem Agitation Strip: "The Delivery Black Hole" */}
      <section className="py-10 sm:py-14 bg-white border-b border-[var(--border-color)]">
        <div className="container-custom max-w-4xl mx-auto px-4 sm:px-6 text-left space-y-4">
          <span className="text-xs font-bold text-[#E11D48] uppercase tracking-wider block">
            The Solo Operator&apos;s Blindspot
          </span>
          <h2 className="font-heading font-extrabold text-xl sm:text-3xl text-[var(--text-dark)]">
            You don&apos;t lose clients because of poor work. You lose them to silence.
          </h2>
          <div className="text-xs sm:text-sm text-[var(--text-muted)] space-y-3 leading-relaxed">
            <p>
              When you close a $3,000 project or $1,500/month retainer, what happens? You dive headfirst into execution—spending 40 hours inside Figma, Webflow, VS Code, or Google Docs. You are working hard.
            </p>
            <p>
              Meanwhile, 12 to 14 days slip by without touching base with the client. In your head: <em>&quot;I&apos;m delivering great work.&quot;</em> But in the client&apos;s head: <em>&quot;Did they forget about us? Are they behind schedule? Why haven&apos;t we heard anything?&quot;</em>
            </p>
            <p>
              Silence erodes trust. By the time you finally deliver, the client feels neglected, asks for endless out-of-scope revisions to feel in control, and never renews for an ongoing monthly retainer.
            </p>
            <div className="p-4 rounded-2xl bg-[#FFFBEB] border border-[#F59E0B]/30 text-slate-800 text-xs sm:text-sm font-medium">
              <strong className="text-[#B45309]">The Client Pulse Solution:</strong> An automated 14-day inactivity radar that alerts you before a client ever feels neglected—plus a 10-minute Friday routine to keep every paying account warm with zero mental friction.
            </div>
          </div>
        </div>
      </section>

      {/* 3. Deep Dive: All 8 Delivered Promises with Suspense */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[var(--bg-main)]">
        <div className="container-custom max-w-5xl mx-auto px-4 sm:px-6 space-y-10 sm:space-y-14">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--purple-main)] uppercase tracking-wider">
              <Laptop className="w-4 h-4" />
              <span>Full System Architecture</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[var(--text-dark)]">
              The 8 Core Promises Delivered in Client Pulse
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-muted)]">
              Built strictly to replace bloated $30–$80/month CRM software with a lightweight, private Notion workspace.
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
                            PILLAR {pillar.number}
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
                    <span className="text-xs font-medium text-[var(--text-muted)] italic max-w-sm text-right hidden sm:block">
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

      {/* 4. Visual Showcase: The Formula 2.0 Inactivity Radar Simulation */}
      <section className="py-12 sm:py-16 bg-white border-t border-[var(--border-color)]">
        <div className="container-custom max-w-5xl mx-auto px-4 sm:px-6 space-y-8 text-left">
          
          <div className="space-y-2 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-[var(--purple-main)] uppercase tracking-wider block">
              Pillar 01 Proprietary Mechanism
            </span>
            <h2 className="font-heading font-extrabold text-xl sm:text-3xl text-[var(--text-dark)]">
              The Formula 2.0 Inactivity Radar in Action
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-muted)]">
              Automatically calculates days since last touchpoint. You open Notion and know exactly who to message in under 10 seconds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-extrabold">
                🟢 Active (3d ago)
              </span>
              <h3 className="font-heading font-bold text-sm text-slate-800">Healthy Client State</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Recent touchpoint logged within 7 days. Client feels completely supported and informed during active delivery sprints.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-extrabold">
                🟡 7+ Days Since Contact
              </span>
              <h3 className="font-heading font-bold text-sm text-slate-800">Weekly Warning State</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Flags that one week has passed since last update. Signals a quick 2-sentence progress check-in before Friday afternoon wrap-up.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-red-50/60 border border-red-200 space-y-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-extrabold">
                ⚠️ At-Risk (16d Inactive) — Check In
              </span>
              <h3 className="font-heading font-bold text-sm text-slate-800">High-Priority Rescue State</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Triggered at 14+ days of silence. High-contrast alert surfaces on your morning dashboard so you can reach out before they churn.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#F8F9FD] border border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
            <div className="space-y-0.5">
              <span className="text-xs font-bold text-[var(--text-dark)] block">
                Includes 1-Tap Triage Action Button
              </span>
              <span className="text-[11px] text-[var(--text-muted)] block">
                Click <code>[⚠️ View At-Risk Clients]</code> to instantly filter all dormant accounts in 1 click.
              </span>
            </div>
            <a
              href={GUMROAD_CLIENT_PULSE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--primary-yellow)] hover:bg-[var(--primary-yellow-hover)] text-[var(--text-dark)] font-bold text-xs shadow-xs transition-colors flex-shrink-0"
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Get Formula 2.0 Radar ($7)</span>
            </a>
          </div>

        </div>
      </section>

      {/* 5. Delivered Feature Showcase: 3 High-Stakes Retention Email Swipe Files (Locked Curiosity Previews) */}
      <section className="py-12 sm:py-16 bg-[var(--bg-main)] border-t border-[var(--border-color)]">
        <div className="container-custom max-w-5xl mx-auto px-4 sm:px-6 space-y-8 text-left">
          
          <div className="space-y-2 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-[#10B981] uppercase tracking-wider block">
              Pillar 05 Client Retention Swipes
            </span>
            <h2 className="font-heading font-extrabold text-xl sm:text-3xl text-[var(--text-dark)]">
              3 High-Stakes Retention Email Swipe Files (Sneak Peek)
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-muted)]">
              Pre-formatted toggle blocks embedded directly inside your Notion template. Duplicate the workspace to unlock word-for-word copy.
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
                      {swipe.badge}
                    </span>
                    <span className="text-[11px] font-bold text-[#6C4DFF]">
                      Script {swipe.number}
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-base sm:text-lg text-[var(--text-dark)]">
                    {swipe.title}
                  </h3>

                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    {swipe.scenario}
                  </p>

                  {/* Teaser Box with Blurred / Locked Content */}
                  <div className="p-4 rounded-2xl bg-[#F8F9FD] border border-[var(--border-color)] space-y-2.5 relative overflow-hidden">
                    <div className="text-[11px] font-bold text-slate-500 font-mono">
                      Subject: <span className="text-slate-800">{swipe.subjectPreview}</span>
                    </div>

                    <div className="relative pt-1 border-t border-[var(--border-color)]">
                      {/* Blurred teaser mock */}
                      <div className="filter blur-[3.5px] select-none text-[11px] text-slate-400 font-mono leading-relaxed space-y-1">
                        <p>Hi [Client Name],</p>
                        <p>Wanted to touch base regarding the requested additions. To keep our milestone on schedule, here are two options...</p>
                        <p>Let me know which option suits you best,</p>
                      </div>

                      {/* Locked Overlay Badge */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-center bg-white/45 backdrop-blur-[1px]">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0B0E1A] text-white text-[10px] font-extrabold shadow-md">
                          <Lock className="w-3 h-3 text-[var(--primary-yellow)]" />
                          <span>Full Word-for-Word Script Locked</span>
                        </div>
                        <span className="text-[10px] text-slate-600 font-medium mt-1">
                          Unlocked inside the $7 Notion template
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
                  <span className="font-bold text-[#10B981]">{swipe.valueProtected}</span>
                  <a
                    href={GUMROAD_CLIENT_PULSE_URL}
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

          {/* Banner for Retainer Upsell Pitch */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0B0E1A] to-[#1E2438] text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-bold text-[var(--primary-yellow)] uppercase tracking-wider block">
                Pillar 05 Retainer Multiplier
              </span>
              <h3 className="font-heading font-extrabold text-lg sm:text-2xl text-white">
                Turn one-off project handoffs into recurring $1,500–$2,500/mo retainers.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Get all 3 high-stakes client retention swipe scripts formatted directly inside your Notion template for a single $7 payment.
              </p>
            </div>
            <a
              href={GUMROAD_CLIENT_PULSE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[var(--primary-yellow)] hover:bg-[var(--primary-yellow-hover)] text-[var(--text-dark)] font-bold text-xs sm:text-sm shadow-md transition-all flex-shrink-0"
            >
              <CreditCard className="w-4 h-4" />
              <span>Unlock All 3 Swipes for $7</span>
            </a>
          </div>

        </div>
      </section>

      {/* 6. Delivered Feature Showcase: 5-Stage Delivery Milestones Board */}
      <section className="py-12 sm:py-16 bg-white border-t border-[var(--border-color)]">
        <div className="container-custom max-w-5xl mx-auto px-4 sm:px-6 space-y-8 text-left">
          
          <div className="space-y-2 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-[var(--purple-main)] uppercase tracking-wider block">
              Pillar 04 Production Pipeline
            </span>
            <h2 className="font-heading font-extrabold text-xl sm:text-3xl text-[var(--text-dark)]">
              5-Stage Active Project Milestones Board
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-muted)]">
              Connect relationship health directly to live project delivery. Move client cards across stages with complete visual clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {deliveryPhases.map((phase, idx) => (
              <div
                key={phase.stage}
                className="p-4 rounded-2xl bg-[var(--bg-main)] border border-[var(--border-color)] space-y-2 text-left"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-[#6C4DFF] bg-[#F3F0FF] px-2 py-0.5 rounded-full">
                    {phase.stage}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400">Step {idx + 1}</span>
                </div>
                <h4 className="font-heading font-extrabold text-sm text-[var(--text-dark)]">
                  {phase.name}
                </h4>
                <p className="text-[11px] text-[var(--text-muted)] leading-relaxed">
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Zoom & Meeting Decision Log Hub + Friday Review SOP */}
      <section className="py-12 sm:py-16 bg-[var(--bg-main)] border-t border-[var(--border-color)]">
        <div className="container-custom max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            
            {/* Zoom Meeting Log Hub */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[var(--border-color)] shadow-xs space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563EB] uppercase tracking-wider">
                <Video className="w-4 h-4" />
                <span>Pillar 03 Decision Log Hub</span>
              </div>
              <h3 className="font-heading font-extrabold text-lg sm:text-xl text-[var(--text-dark)]">
                Never Wonder What Was Agreed on Zoom
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                Pre-built meeting decision toggles inside every client record keep call notes structured and actionable in under 60 seconds:
              </p>
              <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-[var(--text-dark)]">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                  <span><strong>Meeting Purpose &amp; Attendees:</strong> Instant context logging</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                  <span><strong>Zoom / Loom Replay Link:</strong> One-click video &amp; transcript storage</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                  <span><strong>Key Decisions Made:</strong> Separates approved items from scope edits</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                  <span><strong>Action Items &amp; Deadlines:</strong> Who is doing what by when</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                  <span><strong>Post-Call Recap Sent:</strong> Checkbox reminder for professional summaries</span>
                </li>
              </ul>
            </div>

            {/* Friday Review Routine */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[var(--border-color)] shadow-xs space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B45309] uppercase tracking-wider">
                <RotateCw className="w-4 h-4" />
                <span>Pillar 07 Friday Peace of Mind</span>
              </div>
              <h3 className="font-heading font-extrabold text-lg sm:text-xl text-[var(--text-dark)]">
                The 10-Minute Friday Client Review SOP
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                A predictable, 4-step ritual embedded on your dashboard to review every paying account before signing off for the weekend:
              </p>
              <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-[var(--text-dark)]">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                  <span><strong>Step 1:</strong> Audit dashboard for any ⚠️ At-Risk inactive accounts</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                  <span><strong>Step 2:</strong> Send 2-sentence touchpoints to clients nearing 14 days</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                  <span><strong>Step 3:</strong> Reset contact date properties to lock healthy green states</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                  <span><strong>Step 4:</strong> Review next week&apos;s milestone delivery targets with peace of mind</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 8. Comparison Table: Expensive CRM vs Client Pulse */}
      <section className="py-12 sm:py-16 bg-white border-t border-[var(--border-color)]">
        <div className="container-custom max-w-4xl mx-auto px-4 sm:px-6 space-y-8 text-left">
          
          <div className="space-y-2 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-[var(--purple-main)] uppercase tracking-wider block">
              The Math Is Simple
            </span>
            <h2 className="font-heading font-extrabold text-xl sm:text-3xl text-[var(--text-dark)]">
              Why Solo Freelancers Choose Client Pulse Over $600/Year CRMs
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-muted)]">
              Compare enterprise software bloat against a lightweight system engineered specifically for solo operators.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[var(--border-color)] shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white">
              <thead>
                <tr className="bg-[var(--bg-main)] border-b border-[var(--border-color)] text-[var(--text-dark)] font-bold">
                  <th className="py-3.5 px-4 sm:px-6">Feature</th>
                  <th className="py-3.5 px-4 sm:px-6 text-slate-500">HubSpot / Pipedrive</th>
                  <th className="py-3.5 px-4 sm:px-6 text-slate-500">Messy Spreadsheets</th>
                  <th className="py-3.5 px-4 sm:px-6 bg-[#FAF5FF] text-[#6C4DFF] font-extrabold">Client Pulse ($7)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-color)]">
                <tr className="hover:bg-[#FAF8F2] transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-[var(--text-dark)]">Ongoing Cost</td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-500">$360–$960 / year</td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-500">$0 (High Churn Risk)</td>
                  <td className="py-3.5 px-4 sm:px-6 bg-[#FAF5FF] font-extrabold text-[#6C4DFF]">$7 One-Time Lifetime</td>
                </tr>
                <tr className="hover:bg-[#FAF8F2] transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-[var(--text-dark)]">Inactivity Radar Alerts</td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-500">Requires complex workflows</td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-500">None (Manual mental math)</td>
                  <td className="py-3.5 px-4 sm:px-6 bg-[#FAF5FF] font-extrabold text-emerald-600">Formula 2.0 Automated</td>
                </tr>
                <tr className="hover:bg-[#FAF8F2] transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-[var(--text-dark)]">Zoom Decision Hub</td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-500">Paid add-on / third-party app</td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-500">Scattered in Google Docs</td>
                  <td className="py-3.5 px-4 sm:px-6 bg-[#FAF5FF] font-extrabold text-emerald-600">Embedded in Every Client Card</td>
                </tr>
                <tr className="hover:bg-[#FAF8F2] transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-[var(--text-dark)]">Client Retention Swipes</td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-500">None included</td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-500">None included</td>
                  <td className="py-3.5 px-4 sm:px-6 bg-[#FAF5FF] font-extrabold text-emerald-600">3 Battle-Tested Swipes</td>
                </tr>
                <tr className="hover:bg-[#FAF8F2] transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-[var(--text-dark)]">Setup Time</td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-500">2–3 weeks of onboarding</td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-500">Hours of manual formatting</td>
                  <td className="py-3.5 px-4 sm:px-6 bg-[#FAF5FF] font-extrabold text-emerald-600">Under 60 Seconds (Duplicate)</td>
                </tr>
                <tr className="hover:bg-[#FAF8F2] transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-[var(--text-dark)]">Data Privacy</td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-500">Stored on SaaS servers</td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-500">Google / Microsoft</td>
                  <td className="py-3.5 px-4 sm:px-6 bg-[#FAF5FF] font-extrabold text-emerald-600">100% Private in Your Notion</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* 9. FAQ Section */}
      <section className="py-12 sm:py-16 bg-[var(--bg-main)] border-t border-[var(--border-color)]">
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
                className="p-5 sm:p-6 rounded-2xl bg-white border border-[var(--border-color)] shadow-xs space-y-2"
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

      {/* 10. Final Purchase CTA Banner */}
      <section className="py-12 sm:py-16 bg-white border-t border-[var(--border-color)]">
        <div className="container-custom max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3F0FF] text-[#6C4DFF] text-xs font-bold">
            <Sparkles className="w-4 h-4" />
            <span>Instant Digital Delivery via Gumroad</span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-[var(--text-dark)] tracking-tight">
            Stop losing high-paying clients to accidental radio silence.
          </h2>

          <p className="text-xs sm:text-base text-[var(--text-muted)] max-w-xl mx-auto">
            Get instant lifetime access to the Formula 2.0 Inactivity Radar, Zoom Decision Log Hub, 5-stage milestones, and all 3 retention swipe files for a single $7 payment.
          </p>

          <div className="pt-2">
            <a
              href={GUMROAD_CLIENT_PULSE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[var(--primary-yellow)] hover:bg-[var(--primary-yellow-hover)] text-[var(--text-dark)] font-bold text-sm sm:text-base shadow-[var(--shadow-yellow)] transition-all transform hover:-translate-y-0.5"
            >
              <CreditCard className="w-4 h-4" />
              <span>Get Client Pulse for $7 (Instant Access)</span>
              <ExternalLink className="w-4 h-4 opacity-70" />
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[var(--text-muted)] pt-1">
            <span className="flex items-center gap-1 font-semibold text-slate-700">
              <Check className="w-3.5 h-3.5 text-[#10B981]" /> One-Time $7 (Zero Subscriptions)
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1 font-semibold text-slate-700">
              <Check className="w-3.5 h-3.5 text-[#10B981]" /> Runs on Notion Free Tier
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1 font-semibold text-slate-700">
              <Check className="w-3.5 h-3.5 text-[#10B981]" /> 30-Day Money-Back Guarantee
            </span>
          </div>
        </div>
      </section>

    </div>
  );
}
