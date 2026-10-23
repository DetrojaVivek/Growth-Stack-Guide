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
  slug: 'notion-freelancer-crm',
  title: 'How to Build a Minimal 5-Property Notion CRM That You Will Actually Maintain',
  description:
    'Stop paying $50/month for bloated CRM software. Build a lean, relational Notion client pipeline with exactly 5 properties that takes 60 seconds to update.',
  date: '2026-10-03',
  updatedAt: '2026-10-04',
  author: 'Vivek',
  category: 'notion-systems',
  tags: ['notion-crm', 'freelance-pipeline', 'notion-architecture', 'client-tracking'],
  targetAudience: 'freelancer',
  problemSolved:
    'Complex CRMs require too much manual data entry, quickly becoming abandoned digital ghost towns.',
  intentLevel: 'implementation',
  depthLevel: 3,
  originalValueElements: ['framework', 'checklist', 'decision-tree', 'practical-example'],
  qualityScore: 96,
  featuredImage: '/images/guides/minimal-5-property-notion-freelancer-crm.jpg',
  readingTime: 7,
  contentType: 'blog',
  relatedProducts: ['client-pulse'],
  relatedResources: ['ai-creator-productivity-kit'],
};

export default function NotionFreelancerCrmArticle() {
  return (
    <div className="space-y-8 text-left leading-relaxed text-[var(--text-dark)]">
      <div className="p-5 rounded-2xl bg-[#F8F9FD] border-2 border-[var(--purple-main)]/30 text-xs sm:text-sm">
        <strong className="text-[var(--purple-main)] uppercase tracking-wider block font-extrabold text-[11px] mb-1">
          Quick Answer (The Core System)
        </strong>
        <p className="text-[var(--text-dark)] leading-relaxed">
          The reason most solo service providers abandon their CRM is property bloat. A sustainable freelance CRM requires exactly 5 properties in a single Notion database: (1) Client Name, (2) Deal Stage (Select), (3) Deal Value ($), (4) Next Action Date (Date), and (5) Next Action Step (Text). If updating an entry takes longer than 60 seconds, your system will fail.
        </p>
      </div>

      <KeyTakeaways
        points={[
          'CRMs fail because of data entry fatigue; limit database properties to 5 essential fields.',
          'Never leave an active lead without a populated "Next Action Date" and "Next Action Step".',
          'Use Kanban board views filtered by "Active Pipeline" to monitor deal progression visually.',
          'Connect the CRM directly to your Projects database using Notion relations.',
        ]}
      />

      <section className="space-y-4">
        <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-[var(--text-dark)]">
          1. Why 90% of Freelancer CRMs Become Ghost Towns
        </h2>
        <p className="text-sm sm:text-base text-[var(--text-muted)]">
          Every freelancer has experienced this cycle: you buy an elaborate $49 Notion template or sign up for HubSpot CRM. You spend 4 hours configuring custom fields: lead source, company size, Twitter handle, secondary phone, timezone, and annual budget.
        </p>
        <p className="text-sm sm:text-base text-[var(--text-muted)]">
          Two weeks later, you have 6 proposals out and zero energy to fill in 20 fields per contact. You fall back to checking your sent mail folder. A system that is not updated is useless.
        </p>
      </section>

      <FrameworkBox
        title="The 5 Essential Notion CRM Properties"
        badge="Minimal Relational Schema"
        description="Every property in this schema serves a direct operational decision."
        steps={[
          {
            title: '1. Contact & Company (Title Property)',
            description: 'Name of client and company. Keep notes and meeting recaps inside the page body.',
          },
          {
            title: '2. Deal Stage (Select Property)',
            description: 'Lead &rarr; Qualified &rarr; Proposal Sent &rarr; In Negotiation &rarr; Won &rarr; Lost.',
          },
          {
            title: '3. Estimated Value (Number - Currency)',
            description: 'Total contracted revenue or estimated project fee. Enables automated pipeline sum.',
          },
          {
            title: '4. Next Touchpoint Date (Date Property)',
            description: 'The exact day you must follow up or deliver an asset. Drives your daily dashboard.',
          },
        ]}
      />

      <Callout
        type="tip"
        title="The Non-Negotiable Rule of Next Steps"
        content="Property 5 is 'Next Action Step' (Text). Never close a Notion client page without explicitly typing what you or the client must do next (e.g., 'Send revised wireframe deck by Thursday 3 PM')."
      />

      <DecisionTree
        title="Deal Stage Transition Rules"
        description="When to move cards across your Notion pipeline Kanban board."
        branches={[
          {
            condition: 'Client responds positively to initial outreach or referral',
            recommendation: 'Move from "Lead" to "Qualified" and schedule intake call',
            rationale: 'A lead is only qualified once budget and timeline alignment are confirmed.',
            tag: 'Qualification',
          },
          {
            condition: 'Proposal has been sent but no response after 4 business days',
            recommendation: 'Keep in "Proposal Sent" and trigger polite follow-up email #1',
            rationale: 'Clients are busy; standard follow-up sequences convert 35% of stalled deals.',
            tag: 'Follow-Up',
          },
          {
            condition: 'Client signs contract and submits deposit',
            recommendation: 'Move to "Won" and trigger 1-Page Onboarding Portal',
            rationale: 'Contract execution instantly transitions lead into active project delivery.',
            tag: 'Won Deal',
          },
        ]}
      />

      <ChecklistBlock
        title="Building Your Notion CRM in 15 Minutes"
        items={[
          { text: 'Create new Notion database titled "Client CRM & Deals"', description: 'Choose Full Page Table view to configure properties.' },
          { text: 'Configure the 5 properties: Title, Select, Number ($), Date, and Text', description: 'Remove default tags and multi-select fields.' },
          { text: 'Create Board View grouped by "Deal Stage"', description: 'Enable column calculations to sum total pipeline revenue.' },
          { text: 'Create "Follow-Ups Due Today" view filtered by Date = Today', description: 'Embed this view on your daily homepage dashboard.' },
          { text: 'Migrate active clients and pending proposals into the database', description: 'Assign Next Action Dates to every open card.' },
        ]}
      />

      <ProductRecommendation
        title="Client Pulse: Anti-Neglect Freelancer CRM"
        tagline="Lightweight freelancer CRM with an automated 14-day inactivity radar, client dossiers, and Zoom meeting decision logs."
        priceDisplay="$7 One-Time"
        productSlug="client-pulse"
        gumroadUrl="https://growthstackhub1.gumroad.com/l/client-pulse-crm?wanted=true"
        features={[
          'Automated 14-Day Inactivity Radar (Formula 2.0 At-Risk alerts)',
          'Dedicated Client Relationship Dossiers (Timezones, channels, retainer $)',
          'Standardized Zoom Meeting Decision Log Hub with recap checklist',
          '3 High-Stakes Retention Email Swipe Files (Scope defense & upsells)',
        ]}
      />

      <FAQ
        title="Frequently Asked Questions: Notion CRM"
        items={[
          {
            question: 'Can I track automated email replies inside Notion?',
            answer:
              'While Notion does not have native two-way email sync like HubSpot, you can connect Gmail via free Make.com or Zapier webhooks to log inbound emails automatically.',
          },
          {
            question: 'Is Notion safe for storing client contact information?',
            answer:
              'Yes, for standard business contacts and project scopes. However, never store sensitive payment credentials, credit card numbers, or passwords inside Notion.',
          },
        ]}
      />

      <AuthorBox />
    </div>
  );
}
