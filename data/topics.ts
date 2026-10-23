import { TopicPillar, TopicPillarSlug } from '@/lib/types';

export const TOPIC_PILLARS: Record<TopicPillarSlug, TopicPillar> = {
  'ai-productivity': {
    slug: 'ai-productivity',
    title: 'AI Productivity Systems',
    categoryName: 'AI Productivity',
    badge: 'AI Automation Hub',
    blueprintCount: '3 Master Systems • 50+ Prompts',
    accentColor: '#3B9EFF',
    accentBg: '#EBF5FF',
    iconName: 'Zap',
    coverImage: '/images/guides/ai-weekly-planning-sprint-claude-chatgpt.jpg',
    description:
      'Field-tested prompt chains, autonomous workflow automations, and weekly planning systems that eliminate administrative overhead.',
    longDescription:
      'Generic one-line AI prompts produce generic, robotic copy that your audience immediately tunes out. We build structured, multi-step prompt chains for Claude 3.5 Sonnet and ChatGPT that feed context, voice constraints, and structural rubrics into every generation. Our AI systems focus on practical leverage: drafting newsletters in minutes, outlining SEO guides, and automating client meeting recaps.',
    systemSOPs: [
      'Chain-of-Thought Prompting: Context + Constraints + Few-Shot Examples',
      'Newsletter First-Draft System: Generating Authentic Tone in 15 Minutes',
      'Meeting Prep & Synthesis Chains: Converting Raw Notes into Action Items',
      'Anti-Burnout Automation: Automated Calendar Time-Blocking Workflows',
    ],
    faqs: [
      {
        question: 'Which AI models are these workflows built for?',
        answer:
          'Our prompt chains are tested primarily on Claude 3.5 Sonnet and ChatGPT Plus (GPT-4o), but they function effectively on free versions and Google Gemini as well.',
      },
      {
        question: 'How do you avoid robotic, generic AI phrasing?',
        answer:
          'We use negative constraint prompting (banning AI clichés like "delve into", "tapestry", "game-changer") and supply explicit stylistic voice samples in every system.',
      },
      {
        question: 'Are there paid software requirements for these AI workflows?',
        answer:
          'No. Every prompt chain in our 50+ Prompt Vault can be executed in the free web interfaces of ChatGPT or Claude.',
      },
      {
        question: 'Can I use these AI prompt chains for client deliverables?',
        answer:
          'Yes. However, we advocate using AI strictly for first-draft generation, structure outlines, and transcript synthesis. Always conduct manual editorial review and fact-checking before delivering work to clients.',
      },
    ],
  },
  'notion-systems': {
    slug: 'notion-systems',
    title: 'Notion Business Systems',
    categoryName: 'Notion Systems',
    badge: 'Second Brain Hub',
    blueprintCount: '15+ Blueprints',
    accentColor: '#6C4DFF',
    accentBg: '#F3F0FF',
    iconName: 'Brain',
    coverImage: '/images/guides/minimal-5-property-notion-freelancer-crm.jpg',
    description:
      'Turn chaotic digital notes into an interconnected Second Brain. Master relational databases, habit tracking formulas, and minimal workspace architecture.',
    longDescription:
      'Notion is the premier digital workspace for solo operators, but without proper database architecture, it quickly devolves into an unmanageable mess of nested pages. Our Notion blueprints provide battle-tested, relational templates designed to eliminate cognitive fatigue, organize daily tasks into clear Eisenhower matrices, and automate content pipelines.',
    systemSOPs: [
      'Relational Database Architecture: Connecting Tasks to High-Level Projects',
      'Daily Command Center: Dynamic "Today" Views & Quick Capture Inboxes',
      'Habit & Energy Tracking: Formula 2.0 Progress Rings and Streak Meters',
      'Minimalist Workspaces: Preventing Dashboard Clutter with Archive Filters',
    ],
    faqs: [
      {
        question: 'Do these Notion systems require a paid Notion plan?',
        answer:
          'No. All our Notion architectures and templates are specifically engineered to function 100% within Notion’s free personal tier.',
      },
      {
        question: 'What is a Notion "Second Brain"?',
        answer:
          'A Second Brain is a centralized digital repository inspired by Tiago Forte’s PARA method, allowing you to offload tasks, notes, resources, and projects from your working memory into an interconnected database.',
      },
      {
        question: 'Can I connect these templates to other apps via webhooks?',
        answer:
          'Yes. Because our databases use clean, standardized property naming conventions, you can easily connect them to Make.com, Zapier, or native AI integrations.',
      },
    ],
  },
  'freelancer-systems': {
    slug: 'freelancer-systems',
    title: 'Freelancer Business Systems',
    categoryName: 'Freelance Ops',
    badge: 'Client Ops Hub',
    blueprintCount: '9+ Kits',
    accentColor: '#4F46E5',
    accentBg: '#EEF2FF',
    iconName: 'Briefcase',
    coverImage: '/images/guides/freelance-overdue-invoice-recovery-dashboard.jpg',
    description:
      'Client onboarding portals, plain-English contract agreements, scope boundary protection, and milestone invoice ledgers. Prevent scope creep and eliminate payment delays.',
    longDescription:
      'Freelancers frequently suffer from administrative chaos: lost project agreements, scattered client emails, and delayed invoice payments. Our Freelancer CRM frameworks equip solo service providers with professional, shareable Notion client portals. Keep deliverables transparent, establish crystal-clear scope boundaries, and track payments without paying $50/month for heavy CRM software.',
    systemSOPs: [
      'Overdue Invoice Recovery: 4-Stage Email Escalation Protocol',
      '1-Page Client Portal: Shareable Notion Workspace for Deliverables',
      'Scope Creep Prevention SOP: Defining Boundaries in Plain English',
      'Milestone & Invoice Ledger: Automated Payment Reminders & Logging',
      'Client Onboarding Ritual: From Signed Agreement to Kickoff in 24 Hours',
    ],
    faqs: [
      {
        question: 'Can clients view the portal without a Notion account?',
        answer:
          'Yes. Notion pages can be shared publicly via a secure link so your clients can view project milestones, deliverables, and assets without logging in.',
      },
      {
        question: 'Does this include legal contract advice?',
        answer:
          'Our templates provide plain-English operational agreements covering scope, revisions, and payment terms, but they do not substitute for licensed legal counsel.',
      },
    ],
  },
  'solopreneur-operations': {
    slug: 'solopreneur-operations',
    title: 'Solopreneur Operations OS',
    categoryName: 'Operations OS',
    badge: 'Business OS Hub',
    blueprintCount: '9+ Dashboards',
    accentColor: '#D97706',
    accentBg: '#FEF3C7',
    iconName: 'Target',
    coverImage: '/images/guides/solopreneur-operations-system-dashboard.jpg',
    description:
      'Lean business operating systems for solo digital operators. Sunday weekly review rituals, revenue projection models, and high-impact quarterly OKRs.',
    longDescription:
      'A digital product business succeeds through compounding consistency, not frantic hustle. Our Business OS blueprints deliver the operational scaffolding required to run a high-margin, one-person business. Track monthly revenue, conduct intentional Sunday weekly reviews, and align daily tasks with quarterly financial targets using zero-overhead digital dashboards.',
    systemSOPs: [
      'Sunday Weekly Review Ritual: 15-Minute Operational Retrospective',
      'Revenue & Expense Tracker: Cash Flow Monitoring for Solo Operators',
      'Quarterly OKR Alignment: Connecting 90-Day Goals to Daily Sprints',
      'Digital Product Launch Playbook: Step-by-Step Release Checklist',
    ],
    faqs: [
      {
        question: 'Is this suitable for someone just starting an online business?',
        answer:
          'Yes. In fact, establishing lean operating habits early prevents you from acquiring expensive, redundant software subscriptions as your business grows.',
      },
      {
        question: 'How does the weekly review process work?',
        answer:
          'It is a 15-minute, 3-question audit conducted every Sunday to analyze biggest wins, resolve operational friction, and set the top 3 goals for the coming week.',
      },
    ],
  },
  'software-guides': {
    slug: 'software-guides',
    title: 'AI & Software Decision Guides',
    categoryName: 'Software Guides',
    badge: 'Decision Matrix',
    blueprintCount: '6+ In-Depth Reviews',
    accentColor: '#10B981',
    accentBg: '#EBFBEE',
    iconName: 'PenTool',
    coverImage: '/images/guides/notion-vs-dedicated-crm-comparison-matrix.jpg',
    description:
      'Unbiased, hands-on software evaluations and decision matrices for solo operators. Verified pricing timestamps, honest limitations, and zero sponsor bias.',
    longDescription:
      'Choosing the wrong software wastes hundreds of dollars and dozens of hours migrating data. Our decision guides evaluate tools purely on operational utility for one-person businesses. We test free tiers thoroughly, benchmark speed and limitations, and provide clear trade-off analysis so you can make informed decisions without vendor marketing spin.',
    systemSOPs: [
      'Software Stack Audit: Eliminating Redundant SaaS Subscriptions',
      'Decision Tree: Choosing Between Notion vs Dedicated CRM',
      'LLM Benchmark: Claude 3.5 Sonnet vs ChatGPT for Editorial Writing',
      'Automation Platform Matrix: Make.com vs Zapier Cost Optimization',
    ],
    faqs: [
      {
        question: 'Do software companies pay for reviews on Growth Stack Guide?',
        answer:
          'No. We strictly reject paid placements, pre-approved sponsor copy, and sponsored review scores. Every evaluation highlights genuine limitations alongside strengths.',
      },
      {
        question: 'How frequently are software pricing tiers verified?',
        answer:
          'We audit and update pricing structures, feature limits, and free-tier changes monthly, displaying explicit verification timestamps on every guide.',
      },
    ],
  },
};

export function getAllTopicPillars(): TopicPillar[] {
  return Object.values(TOPIC_PILLARS);
}

export function getTopicPillarBySlug(slug: string): TopicPillar | null {
  return (TOPIC_PILLARS as Record<string, TopicPillar>)[slug] || null;
}
