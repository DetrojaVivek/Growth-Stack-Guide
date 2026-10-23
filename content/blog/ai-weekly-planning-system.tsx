import React from 'react';
import type { BlogPostMeta } from '@/lib/types';
import KeyTakeaways from '@/components/KeyTakeaways';
import FrameworkBox from '@/components/FrameworkBox';
import ChecklistBlock from '@/components/ChecklistBlock';
import DecisionTree from '@/components/DecisionTree';
import FAQ from '@/components/FAQ';
import AuthorBox from '@/components/AuthorBox';
import ProductRecommendation from '@/components/ProductRecommendation';
import Callout from '@/components/Callout';

export const meta: BlogPostMeta = {
  slug: 'ai-weekly-planning-system',
  title: 'How Solopreneurs Can Run an Autonomous AI Weekly Planning Sprint in 20 Minutes',
  description:
    'A step-by-step prompt chain protocol using Claude and ChatGPT to analyze past weekly output, prioritize high-leverage revenue sprints, and eliminate Monday decision fatigue.',
  date: '2026-10-02',
  updatedAt: '2026-10-03',
  author: 'Vivek',
  category: 'ai-productivity',
  tags: ['ai-workflows', 'weekly-planning', 'solopreneur-ops', 'claude-prompts'],
  targetAudience: 'solopreneur',
  problemSolved:
    'Monday morning decision paralysis wastes prime creative hours deciding what to work on instead of executing.',
  intentLevel: 'implementation',
  depthLevel: 4,
  originalValueElements: ['framework', 'checklist', 'decision-tree', 'practical-example'],
  qualityScore: 97,
  featuredImage: '/images/guides/ai-weekly-planning-sprint-claude-chatgpt.jpg',
  readingTime: 8,
  contentType: 'blog',
  relatedProducts: ['client-pulse'],
  relatedResources: ['50-ai-prompt-vault-swipe-file'],
};

export default function AiWeeklyPlanningArticle() {
  return (
    <div className="space-y-8 text-left leading-relaxed text-[var(--text-dark)]">
      <div className="p-5 rounded-2xl bg-[#F8F9FD] border-2 border-[var(--purple-main)]/30 text-xs sm:text-sm">
        <strong className="text-[var(--purple-main)] uppercase tracking-wider block font-extrabold text-[11px] mb-1">
          Quick Answer (The Core System)
        </strong>
        <p className="text-[var(--text-dark)] leading-relaxed">
          An AI weekly planning sprint uses a 3-step structured prompt chain every Sunday evening: (1) Output Audit prompt to review logged tasks, (2) Revenue Alignment rubric to filter out low-ROI busywork, and (3) Time-Block Calendar synthesis that slots the top 3 weekly outcomes into protected morning deep-work blocks.
        </p>
      </div>

      <KeyTakeaways
        points={[
          'Eliminate Monday morning decision fatigue by finalizing the weekly roadmap on Sunday evening.',
          'Feed your raw notes and task log into an AI prompt chain with explicit negative constraints.',
          'Limit each week to exactly 3 non-negotiable needle-moving outcomes.',
          'Protect 9:00 AM – 11:30 AM every weekday exclusively for deep revenue-producing work.',
        ]}
      />

      <section className="space-y-4">
        <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-[var(--text-dark)]">
          1. The Solopreneur Monday Morning Trap
        </h2>
        <p className="text-sm sm:text-base text-[var(--text-muted)]">
          Most one-person businesses start Monday morning by opening email, checking social media notifications, or browsing a messy 40-item Notion task backlog. By noon, 3 hours of peak cognitive focus have been burned replying to low-priority messages and reorganizing tags.
        </p>
        <p className="text-sm sm:text-base text-[var(--text-muted)]">
          AI should not write generic motivational essays; it should act as an unbiased chief of staff that cross-examines your priorities and ruthlessly cuts administrative noise.
        </p>
      </section>

      <FrameworkBox
        title="The 3-Step AI Planning Sprint"
        badge="Autonomous Prompt Protocol"
        description="Run this sequence in Claude 3.5 Sonnet or ChatGPT Plus in under 20 minutes."
        steps={[
          {
            title: 'Prompt 1: Raw Output & Bottleneck Extraction',
            description: 'Paste your raw notes from the previous week. AI categorizes hours spent into Revenue vs Admin vs Drag.',
          },
          {
            title: 'Prompt 2: The 3-Outcome Prioritization Rubric',
            description: 'Feed current monthly revenue goals. AI identifies the top 3 high-impact leverage points that unlock the rest.',
          },
          {
            title: 'Prompt 3: Day-by-Day Time Blocking Schedule',
            description: 'AI generates a calendar markdown table with protected deep-work blocks and batched admin windows.',
          },
        ]}
      />

      <Callout
        type="tip"
        title="Negative Constraint Prompting Tip"
        content="Always include this constraint in your planning prompts: 'Do NOT give me generic productivity platitudes or suggest more than 3 primary objectives. Flag any task that produces zero revenue or audience growth as a candidate for elimination.'"
      />

      <DecisionTree
        title="Weekly Task Prioritization Matrix"
        description="How to filter incoming weekly obligations before committing calendar blocks."
        branches={[
          {
            condition: 'Task directly touches a paying client deliverable or product release',
            recommendation: 'Slot into Morning Deep-Work Block (9:00 AM – 11:30 AM)',
            rationale: 'Revenue-generating deliverables must always receive your peak cognitive energy.',
            tag: 'Priority 1',
          },
          {
            condition: 'Task is administrative (invoicing, filing, updating software)',
            recommendation: 'Batch into Friday afternoon 60-minute admin sprint',
            rationale: 'Spreading admin across the week introduces severe context switching penalties.',
            tag: 'Batch Admin',
          },
          {
            condition: 'Task is an unvalidated new idea or unsolicited partnership inquiry',
            recommendation: 'Move to Notion "Ideas Parking Lot" database for 14-day incubation',
            rationale: 'Immediate action on shiny ideas derails ongoing revenue commitments.',
            tag: 'Parking Lot',
          },
        ]}
      />

      <ChecklistBlock
        title="Sunday 20-Minute Planning Sprint Checklist"
        items={[
          { text: 'Review previous week logged tasks and mark completions', description: 'Log honest friction points where projects stalled.' },
          { text: 'Run Prompt 1 (Audit & Friction Extraction) in Claude or ChatGPT', description: 'Copy output into Notion Weekly Review archive.' },
          { text: 'Select the Top 3 High-Leverage Outcomes for the coming 7 days', description: 'Each outcome must have a verifiable definition of done.' },
          { text: 'Map the 3 outcomes into calendar deep-work blocks (Mon-Thu)', description: 'Keep Friday open for buffer and administrative wrap-up.' },
          { text: 'Turn off all notifications until 11:30 AM every morning', description: 'Guard your morning focus window from inbound requests.' },
        ]}
      />

      <ProductRecommendation
        title="Client Pulse: Anti-Neglect Freelancer CRM"
        tagline="Lightweight freelancer CRM with an automated 14-day inactivity radar, client dossiers, and Friday weekly review routine."
        priceDisplay="$7 One-Time"
        productSlug="client-pulse"
        gumroadUrl="https://growthstackhub1.gumroad.com/l/client-pulse-crm?wanted=true"
        features={[
          'Automated 14-Day Inactivity Radar (Formula 2.0 alerts)',
          'Built-In Friday 10-Minute Weekly Client Review Routine',
          'Standardized Zoom Meeting Decision Log Hub',
          '3 High-Stakes Retention Email Swipe Files',
        ]}
      />

      <FAQ
        title="Frequently Asked Questions: AI Planning Workflows"
        items={[
          {
            question: 'Can I run this weekly planning sprint with free ChatGPT or Claude?',
            answer:
              'Yes. The structured prompting format works effectively on free tiers of ChatGPT (GPT-4o mini) and Claude 3.5 Sonnet free tier.',
          },
          {
            question: 'What if an unexpected client emergency disrupts my schedule on Tuesday?',
            answer:
              'Our framework includes Friday as an uncommitted buffer window. Never schedule deep-work on Friday afternoons; keep it reserved for absorbed overflow.',
          },
        ]}
      />

      <AuthorBox />
    </div>
  );
}
