import { ProductItem } from '@/lib/types';

export const PRODUCTS: ProductItem[] = [
  {
    slug: 'client-pulse',
    title: 'Client Pulse — Anti-Neglect Relationship CRM',
    tagline: 'The lightweight, high-touch freelancer CRM that prevents client neglect, tracks Zoom agreements, and connects project milestones to relationship health.',
    price: 7,
    priceDisplay: '$7',
    tier: 'Relationship CRM',
    badge: 'Quick Win',
    badgeColor: '#6C4DFF',
    badgeBg: '#F3F0FF',
    coverImage: '/images/guides/client-pulse-anti-neglect-freelancer-crm-notion.jpg',
    description:
      'Never accidentally ghost or neglect an active paying client while busy delivering project work. Client Pulse equips solo freelancers with an automated 14-day inactivity radar, dedicated client relationship dossiers, Zoom meeting decision logs, and 5-stage project milestone tracking.',
    outcome: 'Eliminate client churn and manage all paying accounts with zero mental overhead in under 10 minutes a week.',
    features: [
      'Automated 14-Day Inactivity Radar (Formula 2.0 At-Risk alerts)',
      '1-Tap Triage Action Button: [⚠️ View At-Risk Clients (14+ Days)]',
      'Dedicated Client Relationship Dossiers (Timezone selector, preferred channels, retainer $)',
      'Standardized Zoom & Meeting Decision Log Hub with post-call recap checklist',
      '5-Stage Active Project Milestones Board with delivery Kanban',
      '3 High-Stakes Retention Email Swipe Files (Scope defense, feedback nudge, retainer upsell)',
      '1-Click [+ Add Active Client] action button (5-second setup)',
      'Built-in Friday 10-Minute Weekly Client Review Routine',
    ],
    includedDatabases: [
      {
        name: 'Inactivity Radar & Relationship CRM',
        description: 'Formula 2.0 flags At-Risk (14+ days inactive), Weekly Warning, and Active accounts.',
        count: 'Formula 2.0 Enabled',
      },
      {
        name: 'Zoom & Meeting Decision Log Hub',
        description: 'Track call purpose, recording replays, approved decisions, and explicit action items.',
        count: 'Standardized Logs',
      },
      {
        name: 'Active Project Milestones Board',
        description: '5-stage progression: Kickoff → Milestone 1 → In Review → Final Hand-off → Retainer.',
        count: 'Kanban Delivery Board',
      },
      {
        name: 'Client Retention Email Swipe Vault',
        description: '3 scripts: Scope-Creep Defense Email, Delayed-Feedback Nudge, 1-Click Retainer Upsell.',
        count: '3 Battle-Tested Scripts',
      },
    ],
    whoIsThisFor: [
      'Solo freelancers, designers, developers, and consultants who get absorbed in delivery and forget to touch base with active clients.',
      'Service providers tired of losing track of verbal client feedback and agreements made on Zoom calls.',
      'Freelancers looking for an agency-grade relationship hub without bloated $30–$80/month CRM software.',
    ],
    whoIsThisNotFor: [
      'Large enterprise sales teams needing 50-seat cold outreach automation pipelines.',
      'Users looking for rigid closed-source software rather than flexible Notion workspaces.',
    ],
    faqs: [
      {
        question: 'Does Client Pulse require a paid Notion subscription?',
        answer: 'No. Every database property, Formula 2.0 expression, and action button runs 100% on Notion’s free personal plan.',
      },
      {
        question: 'How does the 14-Day Inactivity Radar work?',
        answer: 'The formula calculates days since your last recorded touchpoint. Once a client hits 14 days of silence, it automatically displays a high-visibility "⚠️ At-Risk" badge so you can check in before they feel neglected.',
      },
      {
        question: 'What email swipe scripts are included?',
        answer: 'You receive 3 pre-written scripts: The Scope-Creep Defense Email, The Delayed-Feedback Nudge (for clients stalling reviews), and The 1-Click Retainer Upsell Pitch (for turning one-off gigs into monthly retainers).',
      },
      {
        question: 'How do I duplicate this into my Notion account?',
        answer: 'Immediately upon completing checkout via Gumroad, you receive a direct Notion template link. Click "Duplicate" in the top right corner to instantly copy it into your workspace.',
      },
    ],
    gumroadUrl: 'https://growthstackhub1.gumroad.com/l/client-pulse-crm',
    categorySlug: 'freelancer-systems',
    categoryName: 'Freelancer Business Systems',
  },
  {
    slug: 'client-kickoff-kit',
    title: 'Client Kickoff Kit — Practical Onboarding Workflow',
    tagline: 'A structured, repeatable onboarding workflow for solo service providers—with 3 niche intake questionnaires, scope defense clauses, and automated readiness verification.',
    price: 19,
    priceDisplay: '$19',
    tier: 'Onboarding Suite',
    badge: 'Most Popular',
    badgeColor: '#D97706',
    badgeBg: '#FEF3C7',
    coverImage: '/images/guides/client-kickoff-kit-onboarding-workflow-notion.jpg',
    description:
      'Eliminate post-agreement chaos, delayed client assets, and unpaid scope creep. The Client Kickoff Kit gives you 3 niche-specific intake questionnaires (Design, Copy, Dev), 3 plug-and-play contract scope defense clauses, and a Formula 2.0 Readiness Radar that blocks kickoff until scope and files are 100% verified.',
    outcome: 'Collect every required client asset and lock in clear scope boundaries before kickoff in under 5 minutes.',
    features: [
      'The Onboarding Command Center with 3 views (Active Queue, Missing Assets Radar, Ready for Kickoff)',
      'Automated Formula 2.0 ⚡ Readiness Radar (blocks progression until scope & assets are cleared)',
      'Native 1-Click Notion Action Buttons: [+ Start Client Onboarding] & [Filter Ready for Kickoff]',
      '3 Plug-and-Play Niche Intake Questionnaires (Web/Design, Copy/Content, Dev/Technical Consulting)',
      '3 Contract Scope Creep Defense Boilerplate Clauses (Auto-pause, 2-round revisions, change orders)',
      'Communication Drafts & Email Snippets (Welcome & Asset Nudge reminder emails)',
      'Interactive Client Onboarding Workspace template with step-by-step checklist',
      '100% compatible with Notion free plan with zero third-party tools required',
    ],
    includedDatabases: [
      {
        name: 'DB_Client_Onboardings',
        description: 'Master onboarding engine with automated Formula 2.0 ⚡ Readiness Radar.',
        count: 'Command Center',
      },
      {
        name: '3 Niche Intake Questionnaires',
        description: 'Variant A: Web & UI/UX Design, Variant B: Copywriting & Content, Variant C: Technical Development.',
        count: '3 Complete Questionnaires',
      },
      {
        name: 'Scope Creep Defense Swipe Clauses',
        description: 'Delayed Feedback Auto-Pause, 2-Round Revision Limits, and Out-of-Scope Change Order Policies.',
        count: '3 Proposal Boilerplates',
      },
      {
        name: 'Client Communication Snippets',
        description: 'Pre-written welcome email and polite delayed-asset nudge copy.',
        count: 'Email Swipe Snippets',
      },
    ],
    whoIsThisFor: [
      'Freelance designers, copywriters, developers, and consultants who suffer from clients delaying assets or creeping scope.',
      'Solo service providers who want a repeatable, professional onboarding ritual that looks like a high-end agency.',
      'Anyone who has ever lost weeks waiting for client feedback or done unpaid revisions because boundaries were not codified.',
    ],
    whoIsThisNotFor: [
      'Corporate law departments looking for state-specific statutory legal contracts.',
      'Hobbyists who do not offer commercial digital client services.',
    ],
    faqs: [
      {
        question: 'What is the Formula 2.0 ⚡ Readiness Radar?',
        answer: 'It is an automated gatekeeper. If "Scope Confirmed?" or "Assets Complete?" are unchecked, the formula displays "🚨 Blocked: Missing Scope & Assets" or "🟡 Blocked: Awaiting Assets". It only turns to "🟢 100% Ready for Kickoff" when all inputs are cleared.',
      },
      {
        question: 'What specific niches are included in the intake questionnaires?',
        answer: 'Variant A covers Web, UI/UX & Graphic Design (brand assets, font files, visual references, CMS constraints). Variant B covers Copywriting & Content (target reader, core objections, voice guardrails, social proof). Variant C covers Software Development & Consulting (repository access, tech stack, test criteria, third-party APIs).',
      },
      {
        question: 'Can I copy the scope defense clauses directly into my proposals?',
        answer: 'Yes. They are written in clear, plain English covering 5-day feedback auto-pauses, 2-round revision limits, and change order requirements for out-of-scope requests.',
      },
      {
        question: 'Does this template work on Notion’s free plan?',
        answer: 'Yes, 100%. Every formula, button, and relational property runs natively in Notion personal free tier.',
      },
    ],
    gumroadUrl: 'https://growthstackhub1.gumroad.com/l/client-kickoff-kit',
    categorySlug: 'freelancer-systems',
    categoryName: 'Freelancer Business Systems',
  },
];

export function getAllProducts(): ProductItem[] {
  return PRODUCTS;
}

export function getProductBySlug(slug: string): ProductItem | null {
  // Aliases for backwards compatibility with earlier URLs
  if (slug === 'ai-productivity-starter-pack') return PRODUCTS[0];
  if (slug === 'creator-os') return PRODUCTS[1];
  return PRODUCTS.find((p) => p.slug === slug) || null;
}

export function getProductsByCategory(categorySlug: string): ProductItem[] {
  return PRODUCTS.filter((p) => p.categorySlug === categorySlug);
}
