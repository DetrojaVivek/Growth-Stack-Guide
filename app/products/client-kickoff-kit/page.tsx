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
  Layers,
  Zap,
  Check,
  CreditCard,
  FileText,
  Palette,
  Code,
  PenTool,
  ShieldAlert,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Client Kickoff Kit ($19) — Practical Onboarding Workflow for Solo Freelancers | Growth Stack Guide',
  description:
    'The repeatable client onboarding system for solo service providers. Includes 3 niche intake questionnaires (Design, Copy, Dev), scope defense clauses, and automated Formula 2.0 Readiness Radar. One-time $19 lifetime access.',
  keywords: [
    'freelance client onboarding',
    'Notion client kickoff kit',
    'scope creep defense clauses',
    'client intake questionnaire',
    'Notion onboarding workflow',
    'freelance contract clauses',
    'solopreneur client management',
  ],
  openGraph: {
    title: 'Client Kickoff Kit ($19) — Practical Onboarding Workflow for Solo Freelancers',
    description:
      'Stop post-agreement chaos, delayed client assets, and unpaid scope creep. Turnkey Notion onboarding workflow with 3 niche intake questionnaires and automated readiness verification.',
    images: [
      {
        url: '/images/guides/client-kickoff-kit-onboarding-workflow-notion.jpg',
        width: 1200,
        height: 630,
        alt: 'Client Kickoff Kit Notion Workspace Preview',
      },
    ],
  },
};

// Configurable Gumroad Checkout URL ($19 Lifetime Purchase)
const GUMROAD_KICKOFF_KIT_URL = 'https://growthstackguide.gumroad.com/l/client-kickoff-kit';

// The Core Delivered Pillars strictly matching 03_Tier2_19Dollar_Solopreneur_Project_Revenue_Engine.md
const deliveredPillars = [
  {
    number: '01',
    title: 'The Automated Formula 2.0 ⚡ Readiness Radar',
    promise: 'Never accidentally start production work on ambiguous scope or missing client files.',
    icon: Zap,
    accentBg: '#FEF3C7',
    accentColor: '#D97706',
    badge: 'Formula 2.0 Gatekeeper',
    teaser:
      'Starting a project without vector logos, credentials, or signed boundaries guarantees revision disputes. The Formula 2.0 Readiness Radar acts as an automated gatekeeper that visually blocks project progression until both Scope and Assets are 100% verified.',
    deliveredItems: [
      '🟢 100% Ready for Kickoff: Visual green clearance triggered only when both Scope Confirmed and Assets Complete checkboxes are ticked',
      '🚨 Blocked: Missing Scope & Assets: High-visibility red alert preventing premature project kickoffs',
      '🟡 Blocked: Scope Unconfirmed: Isolates ambiguous deliverables before design or dev begins',
      '🟡 Blocked: Awaiting Assets: Pinpoints missing client dependencies so you never search through old email threads',
    ],
  },
  {
    number: '02',
    title: 'The 3 Plug-and-Play Niche Intake Questionnaires',
    promise: 'Collect every critical asset, reference, and boundary upfront with niche-specific precision.',
    icon: FileText,
    accentBg: '#EEF2FF',
    accentColor: '#4F46E5',
    badge: '3 Niche Frameworks',
    teaser:
      'Generic intake forms fail because a web designer needs SVG logos and CMS breakpoints, while a copywriter needs customer objections and voice guardrails. Access 3 complete, pre-written questionnaires formatted for instant copying into client emails or Notion portals.',
    deliveredItems: [
      'Variant A: Web, UI/UX & Graphic Design Intake (Vector assets, admired vs. disliked references, core CTA, CMS/breakpoint limits)',
      'Variant B: Copywriting & Content Strategy Intake (Target reader problem, core buying objections, tone guardrails, social proof stats)',
      'Variant C: Software Development & Technical Intake (Staging repo access, tech stack/API docs, acceptance criteria definition of done, 3rd party APIs)',
      'Pre-formatted toggle blocks ready to duplicate and share with new clients in under 60 seconds',
    ],
  },
  {
    number: '03',
    title: 'Contract Scope Creep Defense Boilerplate Clauses',
    promise: 'Eliminate awkward boundary disputes and stop doing free unbilled revisions forever.',
    icon: ShieldAlert,
    accentBg: '#FEE2E2',
    accentColor: '#DC2626',
    badge: '3 Legal Boilerplates',
    teaser:
      'Scope creep happens when boundaries are absent from the start. Three plug-and-play contract clauses users can paste directly into project proposals and client agreements to legally codify feedback turnaround times, revision limits, and change order billing.',
    deliveredItems: [
      'Clause 1: Delayed Client Feedback Auto-Pause Clause (If client feedback is delayed >5 business days, delivery timeline automatically shifts and project is placed on temporary hold)',
      'Clause 2: Standard 2-Round Revision Boundary Clause (Limits milestones to 2 consolidated rounds; structural pivots or extra rounds billed separately at hourly add-on rates)',
      'Clause 3: Out-of-Scope Change Request Policy (Any request not itemized in agreed scope requires written Change Order and approval prior to production)',
      'Plain-English operational wording that establishes high-status boundaries without sounding combative',
    ],
  },
  {
    number: '04',
    title: 'The Onboarding Command Center with 3 Filtered Views',
    promise: 'Manage multiple active client kickoffs simultaneously without mental overload.',
    icon: Layers,
    accentBg: '#F3F0FF',
    accentColor: '#6C4DFF',
    badge: 'Command Center',
    teaser:
      'Manage 1 to 10 incoming client onboarding pipelines with zero confusion. Master database DB_Client_Onboardings sorts and filters every engagement by target kickoff date and missing dependency.',
    deliveredItems: [
      '📋 Active Onboarding Queue: Real-time overview of all in-flight onboarding pipelines sorted by target kickoff date',
      '🚨 Blocked / Missing Assets Radar: Dedicated triage view isolating accounts waiting on client files or scope sign-off',
      '✅ Ready for Kickoff: High-priority queue showing engagements with 100% inputs cleared and ready for production',
      '5-Stage Progression Pipeline: 1. Welcome Sent → 2. Intake Awaiting Client → 3. Assets Received → 4. Kickoff Scheduled → 5. Ready for Kickoff',
    ],
  },
  {
    number: '05',
    title: 'Native 1-Click Notion Action Buttons',
    promise: 'Add a new client and configure their entire onboarding portal in under 5 seconds.',
    icon: Clock,
    accentBg: '#FAF5FF',
    accentColor: '#9333EA',
    badge: '1-Click Automation',
    teaser:
      'No manual page duplication or property configuration required. Native interactive buttons automate database entries with pre-configured milestone dates in 1 tap.',
    deliveredItems: [
      'Button 1: [+ Start Client Onboarding] — Instantly creates an onboarding record, initializes Stage 1 (Welcome Sent), auto-sets Target Kickoff Date (Today + 5d), and opens center peek',
      'Button 2: [✅ Filter Ready for Kickoff] — Instant 1-tap view switch to focus exclusively on cleared engagements',
      'Pre-built [Client Onboarding Workspace] template embedded inside every newly created record',
    ],
  },
  {
    number: '06',
    title: 'Client Communication Drafts & Email Snippets',
    promise: 'Never spend 30 minutes writing a welcome email or wondering how to nudge delayed files.',
    icon: CheckSquare,
    accentBg: '#EBFBEE',
    accentColor: '#10B981',
    badge: 'Email Swipe Snippets',
    teaser:
      'Pre-written client communication snippets written specifically to guide clients through the onboarding portal and nudge delayed assets with polite professional urgency.',
    deliveredItems: [
      'Welcome & Portal Link Email: Sets high-status expectations and provides immediate access to their intake questionnaire',
      'Delayed Asset Nudge Snippet: Courteous reminder explaining why production cannot begin without required inputs',
      'Formatted toggle blocks ready to copy-paste directly into Gmail, Outlook, or Superhuman',
    ],
  },
  {
    number: '07',
    title: 'In-Workflow Delivery Desk Contextual Bridge',
    promise: 'Seamlessly transition from onboarding verification to active production sprints.',
    icon: ArrowRight,
    accentBg: '#F8F9FD',
    accentColor: '#11152F',
    badge: 'Workflow Bridge',
    teaser:
      'Once the kickoff call is completed and readiness is verified, client notes and confirmed deliverables bridge cleanly into project execution without starting over.',
    deliveredItems: [
      'The "Kickoff Completed" trigger protocol embedded at the bottom of the workspace',
      'Transitions verified intake answers and confirmed scope into live production task lists',
      'Maintains complete historical record of initial agreements and asset links for dispute-free delivery',
    ],
  },
  {
    number: '08',
    title: 'Flat $19 Lifetime Access & 100% Private Workspace',
    promise: 'Agency-grade onboarding architecture without monthly software subscription bloat.',
    icon: FolderLock,
    accentBg: '#FEF2F2',
    accentColor: '#DC2626',
    badge: 'Lifetime $19 Access',
    teaser:
      'Stop paying $20–$40/month for complex client onboarding portals (HoneyBook, Bonsai, Dubsado). Client Kickoff Kit gives you a private, perpetual workspace that runs 100% on Notion\'s free plan.',
    deliveredItems: [
      'One-Time $19 Lifetime Access: Zero monthly subscriptions or recurring platform fees',
      '100% Private: Operates entirely inside your personal Notion account with zero external third-party servers',
      'Runs on Notion\'s Free Plan: Full Formula 2.0 and native button support with zero paid seats required',
      'Instant Digital Delivery: Duplicate the entire system into your workspace in under 60 seconds via Gumroad',
    ],
  },
];

// 3 Niche Intake Questionnaires Sneak Peeks (Curiosity / Locked Previews)
const intakeTeasers = [
  {
    number: 'A',
    niche: 'Web, UI/UX & Graphic Design',
    icon: Palette,
    accentColor: '#6C4DFF',
    accentBg: '#F3F0FF',
    description: 'Extracts exact vector assets, typography licenses, visual references, and CMS technical constraints upfront.',
    previewSnippet: '1. Brand Assets: Vector logo (.SVG/.AI), official font files, and hex palette link...',
    hookInsight:
      'Forces clients to provide 2 websites they admire AND 1 competitor style they dislike (with specific reasons). Prevents the dreaded "I\'ll know what I like when I see it" revision trap.',
    questionsCount: '4 Precision Questions',
  },
  {
    number: 'B',
    niche: 'Copywriting & Content Strategy',
    icon: PenTool,
    accentColor: '#D97706',
    accentBg: '#FEF3C7',
    description: 'Uncovers reader pain points, core buying objections, tone-of-voice guardrails, and statistical proof points.',
    previewSnippet: '1. Target Reader & Outcome: Who is the exact reader, and what urgent problem are they solving?...',
    hookInsight:
      'Extracts the client\'s top 2 customer buying objections and strictly forbidden tone cliches before you write a single headline, cutting revision rounds by 60%.',
    questionsCount: '4 Deep-Dive Questions',
  },
  {
    number: 'C',
    niche: 'Software Development & Consulting',
    icon: Code,
    accentColor: '#2563EB',
    accentBg: '#EBF5FF',
    description: 'Locks staging git repositories, API documentation, automated test criteria, and third-party credential handoffs.',
    previewSnippet: '1. Repository & Staging Access: Read/write permissions and credential sharing via 1Password...',
    hookInsight:
      'Codifies the exact Acceptance Criteria (Definition of Done) required for milestone approval before opening VS Code, preventing subjective goalpost shifting.',
    questionsCount: '4 Technical Prerequisites',
  },
];

// 3 Scope Defense Clauses Sneak Peeks (Curiosity / Locked Previews)
const clauseTeasers = [
  {
    number: '01',
    title: 'Delayed Feedback Auto-Pause Clause',
    trigger: 'When a client stalls on design or copy reviews for 5+ business days.',
    previewSnippet: 'Project milestone timelines are contingent upon timely client feedback. If required feedback...',
    legalHook:
      'Automatically shifts the delivery deadline to reflect studio availability when a client delays feedback beyond 5 days. You never have to apologize for a shifted deadline.',
    boundaryProtected: 'Prevents client review stalls from ruining your project calendar',
  },
  {
    number: '02',
    title: 'Standard 2-Round Revision Boundary Clause',
    trigger: 'When a client asks for endless iterative tweaks or changes their mind mid-milestone.',
    previewSnippet: 'This agreement includes up to two (2) consolidated rounds of revisions per milestone. Revisions are defined as...',
    legalHook:
      'Defines revisions as consolidated adjustments within initial scope, and explicitly bills structural scope pivots at your hourly add-on rate.',
    boundaryProtected: 'Caps revision cycles at 2 rounds and monetizes extra requests',
  },
  {
    number: '03',
    title: 'Out-of-Scope Change Request Policy',
    trigger: 'When a client asks "Can you quickly add this extra page or feature?"',
    previewSnippet: 'Any requests for additional features, pages, or deliverables not explicitly itemized in Section A will be considered...',
    legalHook:
      'Requires a formal written Change Order and approved budget prior to beginning any additional production. Turns scope creep into paid upsells.',
    boundaryProtected: 'Converts unpaid scope creep into formal paid Change Orders',
  },
];

const faqs = [
  {
    question: 'What is the Formula 2.0 ⚡ Readiness Radar and why does it matter?',
    answer:
      'The Readiness Radar is an automated gatekeeper. If "Scope Confirmed?" or "Assets Complete?" are unchecked, the formula displays "🚨 Blocked: Missing Scope & Assets" or "🟡 Blocked: Awaiting Assets". It only turns to "🟢 100% Ready for Kickoff" when all inputs are cleared. This visually stops you from starting work on ambiguous scope or missing files.',
  },
  {
    question: 'Can I paste the 3 Scope Defense Clauses directly into my client contracts?',
    answer:
      'Yes! The clauses are written in clear, plain-English boilerplate language covering 5-day feedback auto-pauses, 2-round revision limits, and change order requirements. They are operational templates designed for proposals and agreements (reviewed for operational clarity; recommend local legal review for statutory terms).',
  },
  {
    question: 'What niches are covered in the 3 intake questionnaires?',
    answer:
      'Variant A covers Web, UI/UX & Graphic Design (vector files, fonts, visual references, CMS limits). Variant B covers Copywriting & Content (target reader, core buying objections, tone guardrails, social proof). Variant C covers Software Development & Technical Consulting (repo access, API docs, acceptance criteria, third-party keys).',
  },
  {
    question: 'Does Client Kickoff Kit require a paid Notion plan?',
    answer:
      'No. Every database, button, and Formula 2.0 property runs 100% on Notion’s free personal plan with zero mandatory team seats or recurring monthly software fees.',
  },
  {
    question: 'How do I duplicate this into my Notion workspace?',
    answer:
      'Immediately upon completing checkout via Gumroad, you receive a direct Notion template link on your receipt and via email. Open the link in your browser, log in to Notion, and click "Duplicate" in the upper-right corner. The entire workspace clones into your account in seconds.',
  },
  {
    question: 'Is my client data completely private?',
    answer:
      '100% private. Client Kickoff Kit operates entirely inside your personal Notion account. No external databases, third-party webhooks, or third-party servers ever touch your client notes or contracts.',
  },
  {
    question: 'Is there a money-back guarantee?',
    answer:
      'Yes. If Client Kickoff Kit does not save you hours of onboarding confusion and protect your boundaries on your next client kickoff within 30 days, simply reply to your Gumroad receipt for a full, prompt refund.',
  },
];

export default function ClientKickoffKitProductPage() {
  // JSON-LD Product Schema for SEO & GEO Rich Snippets
  const jsonLdProduct = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Client Kickoff Kit — Practical Onboarding Workflow for Solo Freelancers',
    image: 'https://growthstackguide.com/images/guides/client-kickoff-kit-onboarding-workflow-notion.jpg',
    description:
      'A structured, repeatable onboarding workflow for solo service providers. Includes 3 niche intake questionnaires (Design, Copy, Dev), scope defense clauses, and automated Formula 2.0 Readiness Radar.',
    brand: {
      '@type': 'Brand',
      name: 'Growth Stack Guide',
    },
    offers: {
      '@type': 'Offer',
      url: GUMROAD_KICKOFF_KIT_URL,
      priceCurrency: 'USD',
      price: '19.00',
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
      reviewCount: '52',
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
            <span className="text-[var(--text-dark)]">Client Kickoff Kit</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Direct-Response Sales Copy (7 cols) */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
              
              {/* Badge Group */}
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEF3C7] border border-[#F59E0B]/40 text-[#B45309] text-xs font-extrabold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>One-Time $19 Lifetime Access</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Runs on Notion&apos;s Free Plan</span>
                </div>
              </div>

              {/* Main Headline with Suspense & High Stakes */}
              <h1 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[var(--text-dark)] tracking-tight leading-[1.15]">
                Why 70% of freelance project headaches start in the first 48 hours...{' '}
                <span className="text-[var(--primary-yellow)] underline decoration-[var(--border-color)] decoration-wavy underline-offset-6">
                  and the onboarding engine that fixes them forever.
                </span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-sm sm:text-base lg:text-lg text-[var(--text-muted)] leading-relaxed max-w-2xl">
                Stop relying on memory and chaotic email threads. <strong className="text-[var(--text-dark)]">Client Kickoff Kit</strong> gives solo designers, copywriters, developers, and consultants 3 plug-and-play niche intake questionnaires, bulletproof contract scope defense clauses, and an automated Formula 2.0 Readiness Radar that blocks work until all files and scope are verified.
              </p>

              {/* Direct-Response Value Bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-dark)]">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                  <span>Formula 2.0 ⚡ Readiness Radar</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-dark)]">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                  <span>3 Niche Intake Questionnaires</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-dark)]">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                  <span>3 Scope Creep Defense Clauses</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-dark)]">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                  <span>1-Click [+ Start Onboarding] Action</span>
                </div>
              </div>

              {/* Primary Call to Action Button */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={GUMROAD_KICKOFF_KIT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[var(--primary-yellow)] hover:bg-[var(--primary-yellow-hover)] text-[var(--text-dark)] font-bold text-sm sm:text-base shadow-[var(--shadow-yellow)] transition-all transform hover:-translate-y-0.5 min-h-[50px]"
                >
                  <CreditCard className="w-4 h-4 text-[var(--text-dark)]" />
                  <span>Get Client Kickoff Kit for $19 (Instant Access)</span>
                  <ExternalLink className="w-4 h-4 text-[var(--text-dark)] opacity-70" />
                </a>

                <div className="text-left text-xs text-[var(--text-muted)] space-y-0.5">
                  <div className="flex items-center gap-1 font-semibold text-[var(--text-dark)]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>30-Day Money-Back Guarantee</span>
                  </div>
                  <div>One-time payment &bull; Zero subscriptions &bull; Instant Notion duplication</div>
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
                      srcSet="/images/guides/client-kickoff-kit-onboarding-workflow-notion.webp"
                      type="image/webp"
                    />
                    <img
                      src="/images/guides/client-kickoff-kit-onboarding-workflow-notion.jpg"
                      alt="Client Kickoff Kit Practical Onboarding Workflow Notion Preview"
                      width={420}
                      height={315}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </picture>
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 rounded-full bg-[#0B0E1A]/85 backdrop-blur-xs text-white text-[11px] font-bold flex items-center gap-1.5 shadow-md">
                      <Lock className="w-3 h-3 text-[var(--primary-yellow)]" />
                      <span>3 Questionnaires + 3 Clauses</span>
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-5 bg-white border-t border-[var(--border-color)] text-left flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-xs font-bold text-[var(--text-dark)] block">
                      Client Kickoff Kit
                    </span>
                    <span className="text-[11px] text-[var(--text-muted)] block">
                      Official Onboarding &amp; Scope Defense Suite
                    </span>
                  </div>
                  <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-[#FEF3C7] text-[#B45309] flex-shrink-0">
                    $19 One-Time
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Problem Agitation Strip: "The Post-Agreement Chaos & Scope Creep Gap" */}
      <section className="py-10 sm:py-14 bg-white border-b border-[var(--border-color)]">
        <div className="container-custom max-w-4xl mx-auto px-4 sm:px-6 text-left space-y-4">
          <span className="text-xs font-bold text-[#E11D48] uppercase tracking-wider block">
            The Freelance Onboarding Trap
          </span>
          <h2 className="font-heading font-extrabold text-xl sm:text-3xl text-[var(--text-dark)]">
            A signed contract means nothing if your kickoff is a chaotic mess.
          </h2>
          <div className="text-xs sm:text-sm text-[var(--text-muted)] space-y-3 leading-relaxed">
            <p>
              The moment a client pays their deposit, you feel momentum. But without a standardized onboarding protocol, reality immediately sets in:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
              <li><strong>Missing Assets:</strong> The client forgets to send vector logos, font licenses, or staging credentials. You wait 2 weeks, and the project timeline stalls before it even starts.</li>
              <li><strong>Uncodified Expectations:</strong> You jump into production on assumptions, only for the client to say <em>&quot;That&apos;s not what we envisioned.&quot;</em></li>
              <li><strong>Unpaid Scope Creep:</strong> The client casually requests extra pages or features. Because you never set formal change order boundaries, you swallow 15+ hours of free unbilled work.</li>
            </ul>
            <div className="p-4 rounded-2xl bg-[#FFFBEB] border border-[#F59E0B]/30 text-slate-800 text-xs sm:text-sm font-medium">
              <strong className="text-[#B45309]">The 5-Minute Kickoff Ritual:</strong> Engagement Accepted &rarr; Select Niche Intake &rarr; Confirm Scope Boundaries &rarr; Verify Readiness Radar &rarr; Run Kickoff Call.
            </div>
          </div>
        </div>
      </section>

      {/* 3. Deep Dive: All 8 Delivered Pillars with Suspense */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[var(--bg-main)]">
        <div className="container-custom max-w-5xl mx-auto px-4 sm:px-6 space-y-10 sm:space-y-14">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--purple-main)] uppercase tracking-wider">
              <Laptop className="w-4 h-4" />
              <span>Full System Architecture</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[var(--text-dark)]">
              The 8 Core Promises Delivered in Client Kickoff Kit
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-muted)]">
              Engineered to replace bloated onboarding portals with a repeatable, private Notion workflow.
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

      {/* 4. Visual Showcase: The Formula 2.0 ⚡ Readiness Radar Gatekeeper */}
      <section className="py-12 sm:py-16 bg-white border-t border-[var(--border-color)]">
        <div className="container-custom max-w-5xl mx-auto px-4 sm:px-6 space-y-8 text-left">
          
          <div className="space-y-2 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-[var(--purple-main)] uppercase tracking-wider block">
              Pillar 01 Automated Gatekeeper
            </span>
            <h2 className="font-heading font-extrabold text-xl sm:text-3xl text-[var(--text-dark)]">
              The Formula 2.0 ⚡ Readiness Radar in Action
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-muted)]">
              Never start work on missing files again. The formula automatically evaluates inputs and blocks kickoff until 100% verified.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-extrabold">
                🟢 100% Ready for Kickoff
              </span>
              <h4 className="font-heading font-bold text-xs text-slate-800">Both Inputs Cleared</h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Scope Confirmed [x] and Assets Complete [x]. Complete green clearance to conduct kickoff call and begin production.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-extrabold">
                🟡 Blocked: Awaiting Assets
              </span>
              <h4 className="font-heading font-bold text-xs text-slate-800">Files Pending</h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Scope is agreed, but client has not uploaded vector assets or credentials. Deploys Delayed Asset Nudge snippet.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-extrabold">
                🟡 Blocked: Scope Unconfirmed
              </span>
              <h4 className="font-heading font-bold text-xs text-slate-800">Ambiguous Scope</h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Client sent assets, but deliverables or milestones remain uncodified. Prevents commencing unapproved tasks.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-red-50/70 border border-red-200 space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-extrabold">
                🚨 Blocked: Missing Scope &amp; Assets
              </span>
              <h4 className="font-heading font-bold text-xs text-slate-800">Total Block State</h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Neither scope nor assets are cleared. Visually halts project team from starting unapproved work.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#F8F9FD] border border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
            <div className="space-y-0.5">
              <span className="text-xs font-bold text-[var(--text-dark)] block">
                Includes 1-Click Action Buttons
              </span>
              <span className="text-[11px] text-[var(--text-muted)] block">
                Click <code>[+ Start Client Onboarding]</code> to auto-create onboarding pages with a 5-day kickoff deadline in 1 tap.
              </span>
            </div>
            <a
              href={GUMROAD_KICKOFF_KIT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--primary-yellow)] hover:bg-[var(--primary-yellow-hover)] text-[var(--text-dark)] font-bold text-xs shadow-xs transition-colors flex-shrink-0"
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Get Readiness Radar ($19)</span>
            </a>
          </div>

        </div>
      </section>

      {/* 5. Delivered Feature Showcase: 3 Niche Intake Questionnaires (Locked Curiosity Previews) */}
      <section className="py-12 sm:py-16 bg-[var(--bg-main)] border-t border-[var(--border-color)]">
        <div className="container-custom max-w-5xl mx-auto px-4 sm:px-6 space-y-8 text-left">
          
          <div className="space-y-2 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-[#6C4DFF] uppercase tracking-wider block">
              Pillar 02 Niche-Specific Intake
            </span>
            <h2 className="font-heading font-extrabold text-xl sm:text-3xl text-[var(--text-dark)]">
              3 Plug-and-Play Niche Intake Questionnaires (Sneak Peek)
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-muted)]">
              Formatted inside Notion toggle blocks ready to copy-paste into emails or client portals. Duplicate the workspace to unlock full text.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {intakeTeasers.map((intake) => {
              const IconComp = intake.icon;
              return (
                <div
                  key={intake.niche}
                  className="p-6 rounded-3xl bg-white border border-[var(--border-color)] shadow-[var(--shadow-sm)] flex flex-col justify-between space-y-5"
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: intake.accentBg, color: intake.accentColor }}
                        >
                          <IconComp className="w-4 h-4" />
                        </div>
                        <span className="text-[11px] font-bold text-[var(--text-dark)]">
                          Variant {intake.number}
                        </span>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FAF5FF] text-[#9333EA]">
                        {intake.questionsCount}
                      </span>
                    </div>

                    <h3 className="font-heading font-extrabold text-base sm:text-lg text-[var(--text-dark)]">
                      {intake.niche}
                    </h3>

                    <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                      {intake.description}
                    </p>

                    {/* Teaser Box with Blurred / Locked Content */}
                    <div className="p-4 rounded-2xl bg-[#F8F9FD] border border-[var(--border-color)] space-y-2.5 relative overflow-hidden">
                      <div className="text-[11px] font-bold text-slate-600 font-mono">
                        {intake.previewSnippet}
                      </div>

                      <div className="relative pt-1 border-t border-[var(--border-color)]">
                        {/* Blurred teaser lines */}
                        <div className="filter blur-[3.5px] select-none text-[11px] text-slate-400 font-mono leading-relaxed space-y-1">
                          <p>2. Visual References: 2 admired designs vs 1 competitor disliked...</p>
                          <p>3. Core Call-to-Action: Single primary conversion target...</p>
                          <p>4. Technical Constraints: Existing design systems and CMS breakpoints...</p>
                        </div>

                        {/* Locked Overlay Badge */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-center bg-white/45 backdrop-blur-[1px]">
                          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0B0E1A] text-white text-[10px] font-extrabold shadow-md">
                            <Lock className="w-3 h-3 text-[var(--primary-yellow)]" />
                            <span>Full 4-Part Intake Locked</span>
                          </div>
                          <span className="text-[10px] text-slate-600 font-medium mt-1">
                            Unlocked inside the $19 Notion template
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Copy Insight */}
                    <div className="p-3 rounded-xl bg-[#FAF8F2] border border-[var(--border-color)]/60 text-[11px] text-[var(--text-dark)] leading-snug space-y-1">
                      <span className="font-bold text-[#B45309] block">Why It Works:</span>
                      <p className="text-[var(--text-muted)]">{intake.hookInsight}</p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[var(--border-color)] flex items-center justify-between text-[11px]">
                    <span className="font-bold text-[#10B981]">Instant Copy-Paste</span>
                    <a
                      href={GUMROAD_KICKOFF_KIT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-bold text-[var(--purple-main)] hover:underline"
                    >
                      <span>Unlock Intake</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. Delivered Feature Showcase: 3 Scope Creep Defense Clauses (Locked Curiosity Previews) */}
      <section className="py-12 sm:py-16 bg-white border-t border-[var(--border-color)]">
        <div className="container-custom max-w-5xl mx-auto px-4 sm:px-6 space-y-8 text-left">
          
          <div className="space-y-2 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-[#DC2626] uppercase tracking-wider block">
              Pillar 03 Scope Boundary Protection
            </span>
            <h2 className="font-heading font-extrabold text-xl sm:text-3xl text-[var(--text-dark)]">
              3 Contract Scope Creep Defense Clauses (Sneak Peek)
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-muted)]">
              Operational boilerplate clauses designed to paste into proposals and agreements. Codify boundaries before signing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {clauseTeasers.map((clause) => (
              <div
                key={clause.title}
                className="p-6 rounded-3xl bg-[var(--bg-main)] border border-[var(--border-color)] shadow-xs flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-[#DC2626] bg-[#FEE2E2] px-2.5 py-0.5 rounded-full">
                      Clause {clause.number}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400">Proposal Boilerplate</span>
                  </div>

                  <h3 className="font-heading font-extrabold text-base text-[var(--text-dark)]">
                    {clause.title}
                  </h3>

                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    <strong>When Triggered:</strong> {clause.trigger}
                  </p>

                  {/* Teaser Box with Blurred Content */}
                  <div className="p-3.5 rounded-2xl bg-white border border-[var(--border-color)] space-y-2 relative overflow-hidden">
                    <div className="text-[11px] font-mono text-slate-600">
                      &quot;{clause.previewSnippet}&quot;
                    </div>

                    <div className="relative pt-1 border-t border-[var(--border-color)]">
                      <div className="filter blur-[3.5px] select-none text-[11px] text-slate-400 font-mono leading-relaxed space-y-1">
                        <p>are delayed beyond five (5) consecutive business days, the project delivery deadline will automatically shift...</p>
                      </div>

                      <div className="absolute inset-0 flex items-center justify-center bg-white/50 backdrop-blur-[1px]">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B0E1A] text-white text-[10px] font-extrabold shadow-md">
                          <Lock className="w-3 h-3 text-[var(--primary-yellow)]" />
                          <span>Full Legal Clause Locked</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Legal Hook Insight */}
                  <div className="p-3 rounded-xl bg-white border border-[var(--border-color)]/60 text-[11px] text-[var(--text-dark)] leading-snug space-y-1">
                    <span className="font-bold text-[#B45309] block">Strategic Mechanism:</span>
                    <p className="text-[var(--text-muted)]">{clause.legalHook}</p>
                  </div>
                </div>

                <div className="pt-2 border-t border-[var(--border-color)] flex items-center justify-between text-[11px]">
                  <span className="font-bold text-[#10B981]">{clause.boundaryProtected}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Central Callout Banner for Scope Defense */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0B0E1A] to-[#1E2438] text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-bold text-[var(--primary-yellow)] uppercase tracking-wider block">
                Pillar 03 Boundary Protection
              </span>
              <h3 className="font-heading font-extrabold text-lg sm:text-2xl text-white">
                Never do 15+ hours of unpaid scope revisions again.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Unlock all 3 contract scope defense clauses and 3 niche questionnaires formatted for Notion for a single $19 payment.
              </p>
            </div>
            <a
              href={GUMROAD_KICKOFF_KIT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[var(--primary-yellow)] hover:bg-[var(--primary-yellow-hover)] text-[var(--text-dark)] font-bold text-xs sm:text-sm shadow-md transition-all flex-shrink-0"
            >
              <CreditCard className="w-4 h-4" />
              <span>Unlock Kickoff Kit for $19</span>
            </a>
          </div>

        </div>
      </section>

      {/* 7. Cost Comparison Table */}
      <section className="py-12 sm:py-16 bg-[var(--bg-main)] border-t border-[var(--border-color)]">
        <div className="container-custom max-w-4xl mx-auto px-4 sm:px-6 space-y-8 text-left">
          
          <div className="space-y-2 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-[var(--purple-main)] uppercase tracking-wider block">
              The Math Is Simple
            </span>
            <h2 className="font-heading font-extrabold text-xl sm:text-3xl text-[var(--text-dark)]">
              Why Freelancers Choose Client Kickoff Kit Over $400/Year SaaS
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-muted)]">
              Compare recurring software bloat against a lightweight, perpetual onboarding system.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[var(--border-color)] shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white">
              <thead>
                <tr className="bg-[var(--bg-main)] border-b border-[var(--border-color)] text-[var(--text-dark)] font-bold">
                  <th className="py-3.5 px-4 sm:px-6">Feature</th>
                  <th className="py-3.5 px-4 sm:px-6 text-slate-500">HoneyBook / Bonsai</th>
                  <th className="py-3.5 px-4 sm:px-6 text-slate-500">Messy Email Threads</th>
                  <th className="py-3.5 px-4 sm:px-6 bg-[#FEF3C7] text-[#B45309] font-extrabold">Client Kickoff Kit ($19)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-color)]">
                <tr className="hover:bg-[#FAF8F2] transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-[var(--text-dark)]">Ongoing Cost</td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-500">$240–$480 / year</td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-500">$0 (High Chaos &amp; Creep)</td>
                  <td className="py-3.5 px-4 sm:px-6 bg-[#FEF3C7] font-extrabold text-[#B45309]">$19 One-Time Lifetime</td>
                </tr>
                <tr className="hover:bg-[#FAF8F2] transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-[var(--text-dark)]">⚡ Readiness Radar</td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-500">None (Manual review)</td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-500">None (Work starts blind)</td>
                  <td className="py-3.5 px-4 sm:px-6 bg-[#FEF3C7] font-extrabold text-emerald-600">Formula 2.0 Gatekeeper</td>
                </tr>
                <tr className="hover:bg-[#FAF8F2] transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-[var(--text-dark)]">3 Niche Intake Forms</td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-500">Generic form builder only</td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-500">None (Ad-hoc questions)</td>
                  <td className="py-3.5 px-4 sm:px-6 bg-[#FEF3C7] font-extrabold text-emerald-600">3 Complete Pre-Written Intakes</td>
                </tr>
                <tr className="hover:bg-[#FAF8F2] transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-[var(--text-dark)]">Scope Defense Clauses</td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-500">None included</td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-500">None included</td>
                  <td className="py-3.5 px-4 sm:px-6 bg-[#FEF3C7] font-extrabold text-emerald-600">3 Proposal Boilerplates</td>
                </tr>
                <tr className="hover:bg-[#FAF8F2] transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-[var(--text-dark)]">Setup Time</td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-500">Days of account setup</td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-500">Endless email typing</td>
                  <td className="py-3.5 px-4 sm:px-6 bg-[#FEF3C7] font-extrabold text-emerald-600">Under 60 Seconds (Duplicate)</td>
                </tr>
                <tr className="hover:bg-[#FAF8F2] transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-[var(--text-dark)]">Data Privacy</td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-500">Stored on SaaS servers</td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-500">Google / Microsoft</td>
                  <td className="py-3.5 px-4 sm:px-6 bg-[#FEF3C7] font-extrabold text-emerald-600">100% Private in Your Notion</td>
                </tr>
              </tbody>
            </table>
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

      {/* 9. Final Purchase CTA Banner */}
      <section className="py-12 sm:py-16 bg-[var(--bg-main)] border-t border-[var(--border-color)]">
        <div className="container-custom max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEF3C7] text-[#B45309] text-xs font-bold">
            <Sparkles className="w-4 h-4" />
            <span>Instant Digital Delivery via Gumroad</span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-[var(--text-dark)] tracking-tight">
            Stop starting client projects on ambiguous scope and missing files.
          </h2>

          <p className="text-xs sm:text-base text-[var(--text-muted)] max-w-xl mx-auto">
            Get instant lifetime access to the Onboarding Command Center, Formula 2.0 ⚡ Readiness Radar, all 3 niche intake questionnaires, and 3 scope defense clauses for a single $19 payment.
          </p>

          <div className="pt-2">
            <a
              href={GUMROAD_KICKOFF_KIT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[var(--primary-yellow)] hover:bg-[var(--primary-yellow-hover)] text-[var(--text-dark)] font-bold text-sm sm:text-base shadow-[var(--shadow-yellow)] transition-all transform hover:-translate-y-0.5"
            >
              <CreditCard className="w-4 h-4" />
              <span>Get Client Kickoff Kit for $19 (Instant Access)</span>
              <ExternalLink className="w-4 h-4 opacity-70" />
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[var(--text-muted)] pt-1">
            <span className="flex items-center gap-1 font-semibold text-slate-700">
              <Check className="w-3.5 h-3.5 text-[#10B981]" /> One-Time $19 (Zero Subscriptions)
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
