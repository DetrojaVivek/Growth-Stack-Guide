import { Article } from '@/lib/types';

export const solopreneurWeeklyReviewOperatingSystemGuide: Article = {
  slug: 'solopreneur-weekly-review-operating-system',
  frontmatter: {
    title: 'The 15-Minute Sunday Solopreneur Weekly Review Operating System',
    description: 'A simple, repeatable Sunday reflection SOP for one-person digital businesses. Audit your output, resolve operational bottlenecks, and align your top 3 goals for Monday.',
    slug: 'solopreneur-weekly-review-operating-system',
    date: '2026-10-01',
    updated: '2026-10-01',
    author: 'Vivek',
    authorSlug: 'vivek',
    category: 'Solopreneur Operations OS',
    categorySlug: 'solopreneur-operations',
    tags: [
      'Solopreneur OS',
      'Weekly Review',
      'Goal Setting',
      'Productivity Systems',
    ],
    cover: '/images/guides/solopreneur-weekly-review-operating-system.jpg',
    coverAlt: 'Solopreneur Sunday weekly review dashboard showing revenue tracking and 3-question retrospective audit',
    featured: false,
    readingTime: 6,
    difficulty: 'Beginner',
    quickAnswer: 'A Solopreneur Weekly Review is a 15-minute operational audit conducted every Sunday to measure output against high-leverage goals. By asking three reflective questions (Biggest Win, Main Friction, Key Lesson) and locking in your Top 3 priorities before Monday morning, you replace reactive chaos with intentional forward momentum.',
    faqs: [
      {
        question: 'Why do most people abandon weekly reviews after 2 weeks?',
        answer: 'Most productivity gurus make weekly reviews far too complicated, asking 25 philosophical questions that take 2 hours. Our lean system asks only 3 core questions and takes under 15 minutes.',
      },
      {
        question: 'What time on Sunday should I conduct the review?',
        answer: 'Conduct your review in the late afternoon (around 5:00 PM – 7:00 PM), when the weekend activities are winding down and you can enter Monday with complete clarity.',
      },
    ],
  },
  content: '',
  blocks: [
    {
      type: 'heading',
      level: 2,
      id: 'the-monday-morning-anxiety-trap',
      badge: 'MINDSET & ALIGNMENT',
      text: 'The Monday Morning Anxiety Trap',
    },
    {
      type: 'paragraph',
      content: 'Most solopreneurs start Monday in a defensive, reactive posture: opening their laptop, checking social media notifications, scrolling through an overflowing email inbox, and immediately reacting to other people\'s emergencies.',
    },
    {
      type: 'paragraph',
      content: 'By Wednesday afternoon, they feel exhausted despite working 10 hours a day—because they have been executing **low-leverage administrative busywork** instead of compounding their core digital assets.',
    },
    {
      type: 'callout',
      tone: 'warning',
      title: 'The Solopreneur Paradox',
      content: 'When you are your own boss, you are also your own employee. If the boss never holds a weekly planning meeting, the employee wanders around doing whatever feels easiest in the moment.',
    },
    {
      type: 'paragraph',
      content: 'To maintain sustainable business growth without a manager or team looking over your shoulder, **you must install an operating ritual that holds you accountable.**',
    },
    {
      type: 'image',
      src: '/images/guides/solopreneur-weekly-review-operating-system.jpg',
      alt: 'Solopreneur Weekly Review dashboard and goal matrix',
      caption: 'The 15-Minute Sunday System: Clean sweep, 3-question retrospective, and Monday morning locked priorities.',
      figureBadge: 'Figure 1: The Weekly Review Command Center',
    },
    {
      type: 'heading',
      level: 2,
      id: 'the-3-step-sunday-ritual',
      badge: 'SYSTEM PROTOCOL',
      text: 'The 3-Step Sunday Ritual (15 Minutes Total)',
    },
    {
      type: 'paragraph',
      content: 'Set a recurring 15-minute calendar block every Sunday evening. Open your Notion Weekly Review template and execute these three steps:',
    },
    {
      type: 'heading',
      level: 3,
      id: 'step-1-the-clean-sweep',
      text: 'Step 1: The Clean Sweep (00:00 – 00:05)',
    },
    {
      type: 'paragraph',
      content: 'Before planning the future, clear the physical and digital clutter from the past week:',
    },
    {
      type: 'list',
      icon: 'check',
      items: [
        'Empty your Notion Quick-Capture Inbox (drag notes into appropriate projects or delete).',
        'Review your completed task list: celebrate finished milestones and archive them.',
        'Check your bank account/Stripe dashboard: log your weekly digital product revenue and pending invoices.',
      ],
    },
    {
      type: 'heading',
      level: 3,
      id: 'step-2-the-3-question-retrospective',
      text: 'Step 2: The 3-Question Retrospective (00:05 – 00:10)',
    },
    {
      type: 'paragraph',
      content: 'Answer these three questions in under 100 words each:',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        '**What was my single biggest business win this week?** *(e.g., "Published the 50+ AI Prompt Vault and generated 40 new freebie signups.")*',
        '**Where did I experience the most operational friction or wasted time?** *(e.g., "Spent 3 hours manually replying to client DMs instead of directing them to the portal.")*',
        '**What is the one process fix I will implement to prevent that friction next week?** *(e.g., "Created a canned email snippet linking to the Notion portal guidelines.")*',
      ],
    },
    {
      type: 'heading',
      level: 3,
      id: 'step-3-lock-in-mondays-top-3-priorities',
      text: 'Step 3: Lock in Monday\'s Top 3 High-Impact Priorities (00:10 – 00:15)',
    },
    {
      type: 'paragraph',
      content: 'Never start Monday with a list of 25 tasks. Pick **exactly three non-negotiable needle-movers** for the week:',
    },
    {
      type: 'checklist',
      title: 'Weekly Big-3 Priority Matrix',
      items: [
        { label: 'Priority 1 (Revenue/Growth Engine): e.g., Finish Gumroad checkout setup for the $7 Starter Pack.', checked: false },
        { label: 'Priority 2 (Content/Audience Asset): e.g., Write and batch 1 pillar article + 5 Pinterest pins.', checked: false },
        { label: 'Priority 3 (System/Operational Health): e.g., Audit and update affiliate disclosure links across all guides.', checked: false },
      ],
    },
    {
      type: 'paragraph',
      content: 'When Monday morning arrives, you do not check social media. You open Notion, view your pre-committed Top 3 Priorities, and begin executing with zero hesitation.',
    },
    {
      type: 'callout',
      tone: 'tip',
      title: 'Action Trigger Rule',
      content: 'Set a recurring phone alarm for 6:00 PM Sunday titled "15-Min Review". Place the direct URL to your Notion Weekly Review page in the alarm notes for instant one-tap access.',
    },
  ],
};
