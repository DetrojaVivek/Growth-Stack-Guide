import { Article } from '@/lib/types';

export const howToBuildANotionSecondBrainGuide: Article = {
  slug: 'how-to-build-a-notion-second-brain',
  frontmatter: {
    title: 'How to Build a Notion Second Brain: A Practical Step-by-Step Architecture Guide',
    description: 'A complete blueprint for building an interconnected Notion Second Brain. Learn how to connect tasks, projects, resources, and weekly habits using relational databases without dashboard clutter.',
    slug: 'how-to-build-a-notion-second-brain',
    date: '2026-10-01',
    updated: '2026-10-01',
    author: 'Vivek',
    authorSlug: 'vivek',
    category: 'Notion Business Systems',
    categorySlug: 'notion-systems',
    tags: [
      'Notion',
      'Second Brain',
      'Productivity Systems',
      'Task Management',
    ],
    cover: '/images/guides/notion-second-brain-architecture-system.jpg',
    coverAlt: 'Notion Second Brain architecture dashboard showing connected relational databases and daily focus command center',
    featured: true,
    readingTime: 9,
    difficulty: 'Beginner',
    quickAnswer: 'A Notion Second Brain centralizes tasks, projects, notes, and resources into four core relational databases (Projects, Tasks, Resources, and Archives). Instead of creating separate pages for every new idea, you funnel all information through a single Quick-Capture Inbox and connect action items to active projects using relation properties.',
    faqs: [
      {
        question: 'What is the difference between a normal Notion workspace and a Second Brain?',
        answer: 'A normal workspace uses static, isolated nested pages that get lost easily. A Second Brain uses interconnected databases where tasks automatically relate to projects, goals, and resources.',
      },
      {
        question: 'Does building a Second Brain slow down Notion?',
        answer: 'Only if you over-engineer it with heavy third-party widgets and unindexed relations. Our minimalist architecture uses lightweight native formulas and archive filters to ensure sub-second page loads.',
      },
      {
        question: 'Can I build this on the free personal Notion plan?',
        answer: "Yes. Every database, formula, and relation in this guide is 100% compatible with Notion's free tier.",
      },
    ],
  },
  content: '',
  blocks: [
    {
      type: 'heading',
      level: 2,
      id: 'the-chaos-of-traditional-note-taking',
      badge: 'PROBLEM AUDIT',
      text: 'The Chaos of Traditional Note-Taking',
    },
    {
      type: 'paragraph',
      content: 'If you are like most creators and solo operators, your digital life is scattered across a dozen fragmented places:',
    },
    {
      type: 'list',
      icon: 'cross',
      items: [
        'Urgent client tasks scribbled on physical sticky notes.',
        'Bookmark folders filled with 200+ articles you will never re-read.',
        'Random project ideas saved in Apple Notes, Google Docs, and messaging drafts.',
      ],
    },
    {
      type: 'paragraph',
      content: 'This fragmentation creates a continuous background tax on your mental bandwidth. When you sit down to work, you spend the first 20 minutes asking: <em>"What should I actually be doing right now?"</em>',
    },
    {
      type: 'paragraph',
      content: 'The solution is not another task app. The solution is an <strong>interconnected digital architecture</strong> known as a <strong>Second Brain</strong>.',
    },
    {
      type: 'heading',
      level: 2,
      id: 'the-4-pillars-of-a-lean-second-brain',
      badge: 'CORE ARCHITECTURE',
      text: 'The 4 Pillars of a Lean Second Brain',
    },
    {
      type: 'paragraph',
      content: 'A robust Second Brain does not require 50 pages or complicated JavaScript widgets. It rests on four core relational databases:',
    },
    {
      type: 'image',
      src: '/images/guides/notion-second-brain-architecture-system.jpg',
      alt: 'Notion Second Brain Connected Relational Database Architecture',
      caption: 'Figure 1: The 4-pillar relational architecture connecting daily command tasks, projects, and permanent resources.',
      aspectRatio: '16/9',
    },
    {
      type: 'heading',
      level: 3,
      id: 'pillar-1-projects-database',
      text: '1. The Projects Database',
    },
    {
      type: 'paragraph',
      content: 'A Project is an initiative with a <strong>definite completion date</strong> and a <strong>specific outcome</strong> (e.g., <em>"Launch Creator OS V1"</em> or <em>"Onboard Client Alpha"</em>). Every active project must link to one or more tasks.',
    },
    {
      type: 'heading',
      level: 3,
      id: 'pillar-2-tasks-database',
      text: '2. The Tasks Database',
    },
    {
      type: 'paragraph',
      content: 'A Task is an atomic, actionable unit that can be finished in a single sitting (e.g., <em>"Draft proposal terms for Alex"</em> or <em>"Record YouTube Hook"</em>).',
    },
    {
      type: 'heading',
      level: 3,
      id: 'pillar-3-resources-database',
      text: '3. The Resources Database',
    },
    {
      type: 'paragraph',
      content: 'Resources contain reference materials, SOPs, swipe files, and research notes that support your work but do not have an expiration date.',
    },
    {
      type: 'heading',
      level: 3,
      id: 'pillar-4-archive-database',
      text: '4. The Archive Database',
    },
    {
      type: 'paragraph',
      content: 'Completed projects and inactive resources are automatically filtered into an archive view, keeping your daily view clutter-free.',
    },
    {
      type: 'heading',
      level: 2,
      id: 'step-by-step-build-instructions',
      badge: 'IMPLEMENTATION SOP',
      text: 'Step-by-Step Build Instructions',
    },
    {
      type: 'heading',
      level: 3,
      id: 'step-1-master-tasks-database',
      text: 'Step 1: Create the Master Tasks Database',
    },
    {
      type: 'paragraph',
      content: 'Start by creating a full-page table named <code>[DB] Action Tasks</code>. Add the following essential properties:',
    },
    {
      type: 'list',
      icon: 'bullet',
      items: [
        '<strong>Task Name</strong> (Title property)',
        '<strong>Status</strong> (Status property: <code>To Do</code>, <code>In Progress</code>, <code>Done</code>)',
        '<strong>Priority</strong> (Select property: <code>P1 - High</code>, <code>P2 - Medium</code>, <code>P3 - Low</code>)',
        '<strong>Due Date</strong> (Date property)',
        '<strong>Energy Level</strong> (Select property: <code>High Focus</code>, <code>Low Energy</code>, <code>Admin</code>)',
      ],
    },
    {
      type: 'heading',
      level: 3,
      id: 'step-2-master-projects-database',
      text: 'Step 2: Create the Master Projects Database',
    },
    {
      type: 'paragraph',
      content: 'Create a second full-page table named <code>[DB] Projects</code>. Add:',
    },
    {
      type: 'list',
      icon: 'bullet',
      items: [
        '<strong>Project Name</strong> (Title property)',
        '<strong>Deadline</strong> (Date property)',
        '<strong>Status</strong> (Select: <code>Planning</code>, <code>Active Sprint</code>, <code>Review</code>, <code>Completed</code>)',
        '<strong>Category</strong> (Select: <code>Client Work</code>, <code>Digital Products</code>, <code>Marketing</code>, <code>Internal Ops</code>)',
      ],
    },
    {
      type: 'heading',
      level: 3,
      id: 'step-3-connect-tasks-to-projects',
      text: 'Step 3: Connect Tasks to Projects with a Relation',
    },
    {
      type: 'paragraph',
      content: 'Open <code>[DB] Action Tasks</code> and add a new property: (1) Select <strong>Relation</strong> property type. (2) Search and select <code>[DB] Projects</code>. (3) Toggle ON <strong>"Show on [DB] Projects"</strong>. Now, every task you create can be linked directly to its parent project.',
    },
    {
      type: 'heading',
      level: 3,
      id: 'step-4-todays-focus-view',
      text: 'Step 4: Build the "Today\'s Focus" Filtered View',
    },
    {
      type: 'paragraph',
      content: 'On your main dashboard page: (1) Insert a <strong>Linked View of Database</strong> pointing to <code>[DB] Action Tasks</code>. (2) Set layout to <strong>Board View</strong> (grouped by Status). (3) Apply the filter: <code>Due Date is on or before Today</code> AND <code>Status is not Done</code>. This creates your daily command center, completely shielding you from the overwhelm of a 100-task backlog.',
    },
    {
      type: 'heading',
      level: 2,
      id: 'critical-mistakes-to-avoid',
      badge: 'MISTAKES TO AVOID',
      text: '3 Critical Mistakes to Avoid',
    },
    {
      type: 'list',
      icon: 'cross',
      items: [
        '<strong>Over-Engineering with Widgets:</strong> Third-party weather widgets and animated GIFs look nice on social media, but they slow down Notion\'s mobile app and distract from real execution. Keep your canvas clean and text-focused.',
        '<strong>Failing to Archive Completed Tasks:</strong> Always create a filter rule that hides tasks marked Done after 24 hours. A dashboard that displays 50 checked boxes feels heavy and uninviting.',
        '<strong>Skipping the Sunday Weekly Review:</strong> A Second Brain is only as good as its maintenance. Take 15 minutes every Sunday to clear your Quick Capture inbox, archive finished projects, and set your top 3 goals for Monday.',
      ],
    },
  ],
};
