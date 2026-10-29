import { ResourceItem } from '@/lib/types';

export const RESOURCES: ResourceItem[] = [
  {
    slug: 'ai-creator-productivity-kit',
    title: 'Freelancer Follow-Up Tracker',
    tagline: 'A high-speed follow-up pipeline that guarantees zero freelance inquiries slip through the cracks—with automated urgency alerts and 3 email swipe scripts.',
    badge: 'Core System',
    coverImage: '/images/guides/freelancer-follow-up-tracker-notion-system.jpg',
    description:
      'Never lose a prospective client inquiry across email, LinkedIn, Upwork, or social DMs again. Features a 1-tap quick-log dock, dynamic Formula 2.0 urgency radar, 3 battle-tested follow-up swipe files, and an instant client context dossier.',
    modulesCount: 'Follow-Up System',
    features: [
      '1-Tap [+ Quick-Log Inbound Lead] action dock (captures in under 5 seconds)',
      'Dynamic Formula 2.0 Urgency Radar (🚨 Overdue, ⏰ Due Today, ⏳ In Xd, ✅ Concluded)',
      '3 Battle-Tested Follow-Up Email Swipe Scripts (48h Nudge, Value-Add, 9-Word Breakup)',
      '14-Day Cadence Timing Roadmap Table (Day 0 to Day 14 milestone cadence)',
      'Instant Context Lead Dossier note framework (Goals, budget, scope, talking points)',
      '5-Minute Client Hand-Off Protocol interactive checklist',
      '100% Free Forever on Notion personal tier • 100% Private in your workspace',
    ],
    gumroadUrl: 'https://growthstackguide.gumroad.com/l/freelancer-follow-up-tracker',
    categorySlug: 'freelancer-systems',
    categoryName: 'Freelancer Business Systems',
    faqs: [
      {
        question: 'Is this template really 100% free?',
        answer: 'Yes. The Freelancer Follow-Up Tracker is 100% free with zero paywalls, trial expirations, or recurring charges.',
      },
      {
        question: 'What is the Urgency Radar formula?',
        answer: 'It is a native Formula 2.0 property that automatically categorizes every lead into 🚨 Overdue, ⏰ Due Today, ⏳ Upcoming, or ✅ Concluded without any mental math.',
      },
      {
        question: 'What email swipe scripts are included?',
        answer: 'Script 1: The 48-Hour Polite Nudge, Script 2: The Value-Add Touchpoint, and Script 3: The 9-Word Breakup Email (40%+ response rate after radio silence).',
      },
      {
        question: 'Do I need a paid Notion subscription?',
        answer: 'No. Every database, view, and formula in this workspace is engineered to work perfectly within Notion’s free personal plan.',
      },
      {
        question: 'How do I duplicate this into my workspace?',
        answer: 'Click the download link, open the Notion template URL from your receipt, and tap "Duplicate" in the top-right corner to copy it into your private Notion account.',
      },
    ],
  },
  {
    slug: 'solopreneur-weekly-review-checklist',
    title: 'Solopreneur Weekly Review Operating Checklist',
    tagline: 'A repeatable 45-minute Sunday ritual SOP to clear backlogs, audit financial inputs, and plan high-impact sprints.',
    badge: 'Productivity SOP',
    coverImage: '/images/guides/solopreneur-weekly-review-operating-system.jpg',
    description:
      'Stop starting Monday mornings in reactive firefighting mode. This step-by-step review checklist walks you through an intentional 4-stage Sunday audit: Physical & Digital Inbox Zero, Project Pipeline Health, Cashflow Check, and Next Week’s Rule of 3 Focus.',
    modulesCount: '4 Review Stages',
    features: [
      'Stage 1: Clearing physical and digital inboxes to achieve mental clarity',
      'Stage 2: Active project audit to catch lagging deliverables early',
      'Stage 3: Accounts receivable and weekly financial runway check',
      'Stage 4: Setting 3 non-negotiable needle-mover goals for the upcoming week',
      'Pre-built Notion database view and printable markdown checklist',
    ],
    gumroadUrl: 'https://growthstackhub.gumroad.com/l/weekly-review-checklist',
    categorySlug: 'solopreneur-operations',
    categoryName: 'Solopreneur Operations OS',
    faqs: [
      {
        question: 'How long does this weekly review take to execute?',
        answer: 'Once familiar with the 4 stages, most solo operators complete the entire review in 35 to 45 minutes every Sunday afternoon.',
      },
      {
        question: 'Can I import this checklist into Notion or Apple Notes?',
        answer: 'Yes. The download includes both a direct 1-click Notion database view and a plain text markdown checklist.',
      },
    ],
  },
  {
    slug: '50-ai-prompt-vault-swipe-file',
    title: '50 Field-Tested AI Prompts for Creators',
    tagline: 'Copy-paste prompt chains for Claude 3.5 Sonnet and ChatGPT to write newsletters, hooks, and proposals.',
    badge: 'Prompt Vault',
    coverImage: '/images/guides/50-ai-prompt-vault-claude-chatgpt.jpg',
    description:
      'Generic one-line prompts produce generic, robotic copy. This curated swipe file includes 50 structured, multi-turn prompt chains with role priming, voice constraints, and output rubrics for drafting engaging newsletters, high-retention video hooks, and client proposals.',
    modulesCount: '50 Prompts',
    features: [
      '15 Content Ideation & Hook Generation prompt chains',
      '10 Newsletter First-Draft structures with voice matching constraints',
      '10 Client Proposal & Scope Definition templates',
      '10 Research Synthesis & Long-Form Breakdown chains',
      '5 Daily Prioritization and Time-Blocking assistant prompts',
    ],
    gumroadUrl: 'https://growthstackguide.gumroad.com/l/50-ai-prompts-vault',
    categorySlug: 'ai-productivity',
    categoryName: 'AI Productivity Systems',
    faqs: [
      {
        question: 'Which AI models are these prompts designed for?',
        answer: 'Every prompt has been field-tested on Claude 3.5 Sonnet, ChatGPT (GPT-4o), and Perplexity Pro.',
      },
      {
        question: 'Are these just basic one-liners?',
        answer: 'No. Every prompt is a structured chain that includes Context, Persona Priming, Negative Constraints (what NOT to say), and explicit formatting rules.',
      },
    ],
  },
];

export function getAllResources(): ResourceItem[] {
  return RESOURCES;
}

export function getResourceBySlug(slug: string): ResourceItem | null {
  if (slug === 'freelancer-follow-up-tracker') return RESOURCES[0];
  return RESOURCES.find((r) => r.slug === slug) || null;
}

export function getResourcesByCategory(categorySlug: string): ResourceItem[] {
  return RESOURCES.filter((r) => r.categorySlug === categorySlug);
}
