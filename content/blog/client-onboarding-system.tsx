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
  slug: 'client-onboarding-system',
  title: 'How Freelancers Can Build a Client Onboarding System That Does Not Depend on Memory',
  description:
    'A battle-tested 4-phase framework for solo service providers to build a shareable Notion client portal, set firm scope boundaries, and automate milestone kickoffs.',
  date: '2026-10-01',
  updatedAt: '2026-10-02',
  author: 'Vivek',
  category: 'freelancer-systems',
  tags: ['client-onboarding', 'notion-portal', 'freelance-ops', 'client-crm'],
  targetAudience: 'freelancer',
  problemSolved:
    'Relying on email memory causes dropped client assets, delayed kickoffs, and destructive scope creep.',
  intentLevel: 'implementation',
  depthLevel: 4,
  originalValueElements: ['framework', 'checklist', 'decision-tree', 'practical-example'],
  qualityScore: 98,
  featuredImage: '/images/guides/freelance-client-onboarding-system-blueprint.jpg',
  readingTime: 9,
  contentType: 'blog',
  relatedProducts: ['client-kickoff-kit'],
  relatedResources: ['ai-creator-productivity-kit'],
};

export default function ClientOnboardingArticle() {
  return (
    <div className="space-y-8 text-left leading-relaxed text-[var(--text-dark)]">
      {/* Quick Answer Box */}
      <div className="p-5 rounded-2xl bg-[#F8F9FD] border-2 border-[var(--purple-main)]/30 text-xs sm:text-sm">
        <strong className="text-[var(--purple-main)] uppercase tracking-wider block font-extrabold text-[11px] mb-1">
          Quick Answer (The Core System)
        </strong>
        <p className="text-[var(--text-dark)] leading-relaxed">
          A dependable freelance client onboarding system eliminates email reliance by standardizing intake into four sequential phases: Intake Questionnaire &rarr; Centralized Asset Lock &rarr; 1-Page Notion Portal Provisioning &rarr; Milestone Kickoff. Never schedule a kickoff call before receiving all required assets.
        </p>
      </div>

      <KeyTakeaways
        points={[
          'Stop using messy email threads for project asset collection; require a single upload link.',
          'Provision a dedicated 1-Page Notion Client Portal immediately upon contract execution.',
          'Never schedule the formal kickoff call until the client fulfills their asset checklist.',
          'Define project scope boundaries in plain English inside the portal dashboard.',
        ]}
      />

      <section className="space-y-4">
        <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-[var(--text-dark)]">
          1. Why Freelancers Fall Victim to Onboarding Chaos
        </h2>
        <p className="text-sm sm:text-base text-[var(--text-muted)]">
          When a client signs your project agreement and pays their 50% deposit, excitement often clouds operational discipline. You send a quick email asking for logos, brand guidelines, and account logins. Three weeks later, you are digging through Slack threads and buried Google Drive folders trying to find a high-res vector file while the client asks why the deliverable is late.
        </p>
        <p className="text-sm sm:text-base text-[var(--text-muted)]">
          Relying on human memory turns professional engagements into administrative firefights. A standardized onboarding system protects your billable hours and sets an authoritative, high-trust tone from day one.
        </p>
      </section>

      <FrameworkBox
        title="The 4-Phase Freelance Onboarding Protocol"
        badge="Standard Operating Procedure"
        description="Every new client project passes through these non-negotiable stages before creative work begins."
        steps={[
          {
            title: 'Phase 1: Automated Intake Questionnaire',
            description: 'Capture brand values, target audience, technical constraints, and primary point of contact in a structured form.',
          },
          {
            title: 'Phase 2: Centralized Asset Vault',
            description: 'Direct file upload into Notion or Drive. Kickoff calls remain unscheduled until all assets pass verification.',
          },
          {
            title: 'Phase 3: Notion Client Portal Provisioning',
            description: 'Duplicate a clean 1-page dashboard containing milestones, deliverables, weekly updates, and invoice ledgers.',
          },
          {
            title: 'Phase 4: Structured Kickoff Sync',
            description: 'A focused 30-minute alignment call reviewing milestones, change order rules, and approval deadlines.',
          },
        ]}
      />

      <section className="space-y-4">
        <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-[var(--text-dark)]">
          2. Realistic Client Scenario: The Brand Redesign Project
        </h2>
        <p className="text-sm sm:text-base text-[var(--text-muted)]">
          Consider a $4,500 brand identity retainer. Without an onboarding portal, you receive font files via WeTransfer links that expire in seven days, copy snippets across four different WhatsApp messages, and conflicting feedback from three different stakeholders.
        </p>
        <p className="text-sm sm:text-base text-[var(--text-muted)]">
          With our 1-Page Notion Portal, the client has a single bookmark. The top of the portal displays:
        </p>
        <ul className="list-disc pl-5 text-sm sm:text-base text-[var(--text-muted)] space-y-2">
          <li><strong>Project Scope &amp; Deliverables:</strong> 3 logo lockups, color palette, typography guidelines, brand deck.</li>
          <li><strong>Revisions Included:</strong> Exactly 2 revision cycles per milestone. Additional rounds billed at $125/hr.</li>
          <li><strong>Deliverable Approvals:</strong> Clear sign-off checkboxes for the designated client decision-maker.</li>
        </ul>
      </section>

      <Callout
        type="warning"
        title="Scope Boundary Protection Rule"
        content="Always write revision terms in plain, unambiguous English. Instead of 'Reasonable revisions included', state: 'Each milestone includes up to 2 rounds of consolidated written feedback. Revisions requested after sign-off require an approved change order.'"
      />

      <DecisionTree
        title="Client Communication Routing Matrix"
        description="How to route client requests during the onboarding phase without bloating your calendar."
        branches={[
          {
            condition: 'Client asks for a quick ad-hoc phone call during intake',
            recommendation: 'Direct them to the written intake form and schedule kickoff call only',
            rationale: 'Unstructured calls dilute requirements and create verbal agreements with zero paper trail.',
            tag: 'Boundary Defense',
          },
          {
            condition: 'Client delivers incomplete brand assets or low-resolution files',
            recommendation: 'Send the Asset Checklist Reminder and pause kickoff scheduling',
            rationale: 'Starting work with missing assets forces you to do unpaid rework once the correct files arrive.',
            tag: 'Timeline Protection',
          },
          {
            condition: 'Client introduces an additional stakeholder midway through onboarding',
            recommendation: 'Request designated Primary Decision-Maker confirmation in writing',
            rationale: 'Having multiple uncoordinated voices causes conflicting feedback loops and delayed sign-offs.',
            tag: 'Governance',
          },
        ]}
      />

      <ChecklistBlock
        title="Client Onboarding Implementation Checklist"
        items={[
          { text: 'Contract signed via DocuSign or HelloSign and 50% deposit received', description: 'Never begin onboarding without cleared funds.' },
          { text: 'Duplicate fresh 1-Page Notion Client Portal from template', description: 'Set permissions to "Can view" with comments enabled.' },
          { text: 'Send welcome email with link to Notion Portal and Intake Questionnaire', description: 'Use our standardized welcome email script.' },
          { text: 'Verify all required brand assets, fonts, and credentials received', description: 'Confirm file formats (SVG, PNG, TTF) meet technical requirements.' },
          { text: 'Schedule 30-minute milestone kickoff call via Calendly', description: 'Send agenda 24 hours prior to the call.' },
        ]}
      />

      <ProductRecommendation
        title="Client Kickoff Kit: Onboarding Workflow &amp; Scope Defense"
        tagline="A turnkey Notion workspace pre-configured with 3 niche intake questionnaires, scope defense clauses, and Formula 2.0 readiness verification."
        priceDisplay="$19 One-Time"
        productSlug="client-kickoff-kit"
        gumroadUrl="https://growthstackhub1.gumroad.com/l/client-kickoff-kit?wanted=true"
        features={[
          'The Onboarding Command Center with 3 Filtered Views',
          'Formula 2.0 ⚡ Readiness Radar Gatekeeper',
          '3 Niche Intake Questionnaires (Design, Copy, Dev)',
          '3 Contract Scope Creep Defense Boilerplate Clauses',
        ]}
      />

      <FAQ
        title="Frequently Asked Questions: Freelance Onboarding"
        items={[
          {
            question: 'Can my clients view the Notion portal without creating an account?',
            answer:
              'Yes. You can publish the Notion portal page via a public web link. Clients can bookmark it in their browser and access project milestones without needing to register or pay.',
          },
          {
            question: 'What if a client refuses to use the Notion portal and insists on email?',
            answer:
              'Send all email updates with a direct link to the portal header: "For current project timeline and deliverable files, see your live portal here." Over 90% of clients quickly appreciate having a single bookmark.',
          },
          {
            question: 'How do you handle scope creep when a client asks for extra work during onboarding?',
            answer:
              'Acknowledge the request enthusiastically: "That is a great feature idea! It sits outside our current milestone scope, so I will draft a quick change order estimate for it right after we launch Phase 1."',
          },
        ]}
      />

      <AuthorBox />
    </div>
  );
}
