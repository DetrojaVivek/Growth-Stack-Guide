import { ToolItem } from '@/lib/types';

export const TOOLS: ToolItem[] = [
  {
    slug: 'notion',
    name: 'Notion',
    tagline: 'The premier modular workspace for relational databases, notes, and connected operating systems.',
    category: 'Productivity & Workspaces',
    categorySlug: 'software-guides',
    pricingTier: 'Freemium (Free Tier Available)',
    pricingSummary: 'Free personal plan with unlimited blocks; Plus plan at $10/user/month billed annually.',
    verifiedDate: 'October 2026',
    affiliateUrl: 'https://affiliate.notion.so/growthstackhub',
    pros: [
      'Relational database architecture allows dynamic cross-linking between tasks, projects, and resources.',
      'Extremely generous free personal tier with unlimited pages and block creation for solo operators.',
      'Formulas 2.0 and native button automations make custom workflow scripting accessible without code.',
      'Vibrant global template ecosystem with instant 1-click workspace duplication.',
    ],
    limitations: [
      'Can feel overwhelming for complete beginners without a structured template foundation.',
      'Mobile app offline functionality can lag on complex relational databases with heavy rollups.',
      'Over-engineering dashboards with heavy animated widgets can cause noticeable page lag.',
    ],
    bestFor: 'Solo creators, freelancers, and solopreneurs who want a customized, all-in-one digital operating system.',
    verdict: 'The non-negotiable cornerstone software for modern solo businesses. We build 80% of our systems directly inside Notion.',
    rating: 4.9,
    faqs: [
      {
        question: 'Is the free Notion tier sufficient for solo creators?',
        answer: 'Yes. Notion removed its historic 1,000-block limit on personal free accounts. You can run complete Second Brain and Content Pipeline systems without paying for a subscription.',
      },
      {
        question: 'Does Growth Stack Guide earn an affiliate commission on Notion?',
        answer: 'If you choose to upgrade to a paid Notion Plus or Team plan through our link, we may earn an affiliate commission at zero additional cost to you. We strictly recommend Notion based on years of active operational usage.',
      },
    ],
  },
  {
    slug: 'claude',
    name: 'Claude 3.5 Sonnet',
    tagline: 'The most capable frontier AI model for long-form editorial writing, coding, and nuanced nuance.',
    category: 'Generative AI & Writing',
    categorySlug: 'software-guides',
    pricingTier: 'Freemium (Free Tier + $20/mo Pro)',
    pricingSummary: 'Generous free tier with daily message caps; Claude Pro at $20/month for 5x priority usage.',
    verifiedDate: 'October 2026',
    affiliateUrl: 'https://claude.ai',
    pros: [
      'Outstanding natural, non-robotic tone that requires 70% less manual editing than competing LLMs.',
      'Artifacts interface allows real-time interactive previewing of code, markdown, and visual components.',
      '200,000-token context window allows analyzing entire books, multi-chapter guides, or large codebases in one prompt.',
      'Exceptional adherence to negative constraints (explicitly following instructions on what NOT to say).',
    ],
    limitations: [
      'Free tier message caps can be reached quickly during heavy multi-turn brainstorming sessions.',
      'Does not natively generate images or integrate direct web browsing search on the standard free tier.',
    ],
    bestFor: 'Writers, content strategists, and developers who need nuanced, high-integrity long-form drafts and clean code.',
    verdict: 'The reigning benchmark model for editorial writing and practical reasoning. Our default writing companion for drafting outlines and SOPs.',
    rating: 4.95,
    faqs: [
      {
        question: 'Is Claude 3.5 Sonnet better than ChatGPT for writing?',
        answer: 'In our testing across 100+ articles, Claude 3.5 Sonnet consistently produces more natural vocabulary, smoother sentence rhythm, and significantly fewer generic AI clichés than GPT-4o.',
      },
    ],
  },
  {
    slug: 'chatgpt',
    name: 'ChatGPT (OpenAI)',
    tagline: 'The ubiquitous multimodal AI assistant with web browsing, code interpreter, and custom GPT ecosystems.',
    category: 'Generative AI & Research',
    categorySlug: 'software-guides',
    pricingTier: 'Freemium (Free Tier + $20/mo Plus)',
    pricingSummary: 'Free tier with GPT-4o access; Plus plan at $20/month includes advanced voice mode and priority reasoning.',
    verifiedDate: 'October 2026',
    affiliateUrl: 'https://chatgpt.com',
    pros: [
      'Integrated real-time web search and citation retrieval directly inside the chat interface.',
      'Advanced Data Analysis (Code Interpreter) handles spreadsheet processing, financial math, and CSV cleanups seamlessly.',
      'Custom GPT directory provides specialized niche assistants for specific workflows.',
      'Industry-leading mobile app with fluid Advanced Voice Mode for hands-free brainstorming.',
    ],
    limitations: [
      'Default writing voice can tend toward hyperbolic, formulaic marketing clichés if not tightly constrained.',
      'Occasional context drift during very long, multi-turn prompt conversations.',
    ],
    bestFor: 'General research, quick data analysis, real-time web verification, and interactive voice ideation.',
    verdict: 'An indispensable multipurpose tool for solo operators, especially when paired with Advanced Data Analysis for crunching business numbers.',
    rating: 4.8,
    faqs: [
      {
        question: 'Do I need ChatGPT Plus if I already use Claude Pro?',
        answer: 'Not necessarily. If your primary focus is writing and code, Claude Pro is superior. If you require real-time web search, voice mode, and automated spreadsheet analysis, ChatGPT Plus provides unique utility.',
      },
    ],
  },
  {
    slug: 'make',
    name: 'Make.com',
    tagline: 'Visual workflow automation platform connecting Notion, forms, emails, and webhooks with zero code.',
    category: 'Automation & Integration',
    categorySlug: 'software-guides',
    pricingTier: 'Freemium (1,000 Ops/Mo Free)',
    pricingSummary: 'Free plan with 1,000 operations/month; Core plan starts at $9/month for 10,000 operations.',
    verifiedDate: 'October 2026',
    affiliateUrl: 'https://make.com',
    pros: [
      'Visual drag-and-drop scenario builder with clear branch routing and error handling.',
      'Significantly lower cost per operation than Zapier for complex, multi-step workflows.',
      'Native modules for Notion, Gmail, Airtable, Webhooks, and OpenAI API.',
      'Real-time scenario testing with visual data bubble inspection at every step.',
    ],
    limitations: [
      'Steeper initial learning curve than basic Zapier automations for non-technical creators.',
      'Data mapping syntax requires understanding JSON structure and basic array parsing.',
    ],
    bestFor: 'Solopreneurs who want to automate lead capture, Notion data sync, and email triggers at a fraction of Zapier costs.',
    verdict: 'The best value automation platform in the modern creator stack. 1,000 free operations per month is plenty to start.',
    rating: 4.75,
    faqs: [
      {
        question: 'Why choose Make.com over Zapier?',
        answer: 'Make gives you multi-step visual workflows, robust data transformation tools, and 1,000 free monthly operations on its free plan, whereas Zapier limits free users to basic 2-step single-trigger zaps.',
      },
    ],
  },
  {
    slug: 'kit',
    name: 'Kit (Formerly ConvertKit)',
    tagline: 'The purpose-built email marketing platform for creators, authors, and newsletter operators.',
    category: 'Email Marketing & CRM',
    categorySlug: 'software-guides',
    pricingTier: 'Freemium (Free up to 10,000 Subscribers)',
    pricingSummary: 'Free tier for sending newsletters up to 10k subscribers; Creator tier from $25/mo unlocks automated visual funnels.',
    verifiedDate: 'October 2026',
    affiliateUrl: 'https://kit.com',
    pros: [
      'Superb deliverability rates that consistently land newsletters in primary inboxes rather than promotions tabs.',
      'Visual automation builder allows routing subscribers based on tags, links clicked, and lead magnet choices.',
      'Clean, distraction-free email editor focused on high-converting text-first personal writing.',
      'Built-in Creator Network allows cross-recommending other newsletters to accelerate organic growth.',
    ],
    limitations: [
      'Visual automation builder requires upgrading to the Creator tier once automated drip funnels are needed.',
      'Template styling options are intentionally minimal compared to design-heavy platforms like Mailchimp.',
    ],
    bestFor: 'Solo creators, writers, and digital product sellers who want a reliable, deliverability-focused email engine.',
    verdict: 'The undisputed gold standard for creator newsletters. Its text-first philosophy matches our editorial warm design standards perfectly.',
    rating: 4.85,
    faqs: [
      {
        question: 'Can I start using Kit with $0 capital?',
        answer: 'Yes. Kit’s free plan allows you to host forms, broadcast unlimited newsletters, and build an audience up to 10,000 subscribers before requiring a paid upgrade.',
      },
    ],
  },
  {
    slug: 'canva',
    name: 'Canva Pro',
    tagline: 'The rapid graphic design and visual asset engine for Pinterest pins, banners, and digital covers.',
    category: 'Visual Design & Media',
    categorySlug: 'software-guides',
    pricingTier: 'Freemium (Free Tier + $12.99/mo Pro)',
    pricingSummary: 'Robust free plan with thousands of templates; Pro at $12.99/month for 1-click background removal and brand kits.',
    verifiedDate: 'October 2026',
    affiliateUrl: 'https://canva.com',
    pros: [
      'Massive library of 2:3 Pinterest pin layouts, YouTube thumbnails, and eBook cover mockups ready in seconds.',
      'Magic Studio tools provide instant background removal, smart resizing, and clean vector exports.',
      'Brand Kit feature stores official color hexes, typography, and logos for one-click visual consistency.',
      'Accessible in browser and mobile with instantaneous cloud syncing.',
    ],
    limitations: [
      'Vector editing capabilities are simplified compared to Adobe Illustrator or Figma.',
      'Can tempt beginners into using over-used, generic stock elements if not customized with brand tokens.',
    ],
    bestFor: 'Creators generating high volumes of Pinterest traffic pins, product mockup graphics, and social headers.',
    verdict: 'A massive time-saver for non-designers. The 1-click background remover alone saves hours when assembling product previews.',
    rating: 4.8,
    faqs: [
      {
        question: 'Is Canva Free enough for Pinterest traffic generation?',
        answer: 'Yes. You can create high-converting 1000×1500px Pinterest pins and export crisp WebP/PNG graphics completely on the free plan.',
      },
    ],
  },
];

export function getAllTools(): ToolItem[] {
  return TOOLS;
}

export function getToolBySlug(slug: string): ToolItem | null {
  return TOOLS.find((t) => t.slug === slug) || null;
}

export function getToolsByCategory(categorySlug: string): ToolItem[] {
  if (categorySlug === 'ai-productivity') {
    return TOOLS.filter((t) => ['claude', 'chatgpt', 'make'].includes(t.slug));
  }
  if (categorySlug === 'notion-systems') {
    return TOOLS.filter((t) => ['notion', 'make'].includes(t.slug));
  }
  if (categorySlug === 'freelancer-systems') {
    return TOOLS.filter((t) => ['notion', 'kit'].includes(t.slug));
  }
  if (categorySlug === 'solopreneur-operations') {
    return TOOLS.filter((t) => ['notion', 'claude', 'kit'].includes(t.slug));
  }
  if (categorySlug === 'software-guides') {
    return TOOLS;
  }
  return TOOLS.filter((t) => t.categorySlug === categorySlug);
}
