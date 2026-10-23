import React from 'react';
import type { BlogPostMeta } from '@/lib/types';
import KeyTakeaways from '@/components/KeyTakeaways';
import FrameworkBox from '@/components/FrameworkBox';
import ChecklistBlock from '@/components/ChecklistBlock';
import DecisionTree from '@/components/DecisionTree';
import ComparisonMatrix from '@/components/ComparisonMatrix';
import Callout from '@/components/Callout';
import ProductRecommendation from '@/components/ProductRecommendation';
import ResourceRecommendation from '@/components/ResourceRecommendation';
import FAQ from '@/components/FAQ';
import AuthorBox from '@/components/AuthorBox';

export const meta: BlogPostMeta = {
  slug: 'notion-ai-meeting-notes-action-items',
  title: 'How Freelancers Turn Meeting Notes Into Client Action Items (The 5-Minute Notion & AI System)',
  description:
    'Stop losing verbal client agreements in 45-minute Zoom calls. Learn how to convert meeting transcripts into structured Notion action items and client recap emails in 5 minutes.',
  date: '2026-10-19',
  updatedAt: '2026-10-19',
  author: 'Vivek',
  category: 'ai-productivity',
  tags: ['meeting-notes', 'notion-ai', 'client-crm', 'freelance-ops'],
  targetAudience: 'freelancer',
  problemSolved:
    'Verbal agreements made during Zoom calls get lost in messy notes, causing unpaid scope creep and missed client deliverables.',
  intentLevel: 'implementation',
  depthLevel: 4,
  originalValueElements: ['framework', 'checklist', 'decision-tree', 'practical-example'],
  qualityScore: 98,
  featuredImage: '/images/guides/notion-ai-meeting-notes-action-items-dashboard.jpg',
  readingTime: 8,
  contentType: 'blog',
  relatedProducts: ['client-pulse'],
  relatedResources: ['50-ai-prompt-vault-swipe-file'],
};

export default function NotionAiMeetingNotesArticle() {
  return (
    <div className="space-y-8 text-left leading-relaxed text-[var(--text-dark)]">
      {/* Quick Answer Box (Google Position Zero) */}
      <div className="p-5 rounded-2xl bg-[#F8F9FD] border-2 border-[var(--purple-main)]/30 text-xs sm:text-sm">
        <strong className="text-[var(--purple-main)] uppercase tracking-wider block font-extrabold text-[11px] mb-1">
          Quick Answer (The 5-Minute Protocol)
        </strong>
        <p className="text-[var(--text-dark)] leading-relaxed">
          To convert client meeting notes into Notion action items without manual typing: (1) Capture full audio via Fathom ($0 uncapped free plan for individual recording and transcripts) or native Zoom recording; (2) Run the 3-Way Triage Prompt through Claude 3.5 Sonnet or Notion AI to isolate <em>My Deliverables</em>, <em>Client Dependencies</em>, and <em>Scope Alerts</em>; (3) Paste markdown checkboxes into your meeting page and drag them into a linked <code>Tasks Database</code> view; and (4) Dispatch the pre-drafted 100-word recap email within 60 minutes to establish an unshakeable 24-hour decision receipt.
        </p>
      </div>

      <KeyTakeaways
        points={[
          'Passive meeting summaries are useless for solo operators; action items must distinguish between freelancer tasks and client bottlenecks.',
          'Fathom provides unlimited free recordings and transcripts, but caps advanced AI summaries at 5 calls per month—bypassing this is easy by feeding the free transcript into Claude 3.5 Sonnet for $0.',
          'Verbal agreements made on video calls cause over 80% of freelance scope creep unless confirmed in writing within 24 hours.',
          'Notion has a native "Turn into → Page in" shortcut and drag-and-drop board mechanics that convert raw markdown checkboxes into database cards in under 10 seconds.',
          'In US Two-Party Consent states, always disclose AI recording in advance using a standard 1-sentence booking disclaimer.',
        ]}
      />

      {/* Editorial System Visual */}
      <figure className="my-6 rounded-2xl overflow-hidden border border-[var(--border-color)] bg-[#FAF8F2] shadow-xs">
        <picture>
          <source
            srcSet="/images/guides/notion-ai-meeting-notes-action-items-dashboard.webp"
            type="image/webp"
          />
          <img
            src="/images/guides/notion-ai-meeting-notes-action-items-dashboard.jpg"
            alt="Notion digital meeting notes and client action items dashboard on modern laptop workspace"
            width={760}
            height={428}
            className="w-full h-auto object-cover"
            loading="eager"
          />
        </picture>
        <figcaption className="p-3 text-center text-xs text-[var(--text-muted)] border-t border-[var(--border-color)] bg-white">
          Figure 1: The relational Notion client meeting dashboard setup — separating Meeting Decision Logs, Client Action Items, and Deliverables Kanban.
        </figcaption>
      </figure>

      {/* Section 1: The Problem */}
      <section className="space-y-4">
        <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-[var(--text-dark)]">
          1. The &ldquo;Zoom Amnesia&rdquo; Trap: Why Verbal Agreements Bleed Freelance Revenue
        </h2>
        <p className="text-sm sm:text-base text-[var(--text-muted)]">
          Every freelance designer, developer, and consultant knows the routine. You join a 45-minute milestone sync. The client is enthusiastic, throwing out rapid feedback, brainstormed adjustments, and casual suggestions. You nod along, trying to divide your attention between maintaining eye contact and scribbling hurried shorthand into Apple Notes, a scratchpad, or a physical notebook.
        </p>
        <p className="text-sm sm:text-base text-[var(--text-muted)]">
          Three weeks later, the deliverable is handed off. The client replies: <em>&ldquo;Wait, what happened to the automated analytics report and extra email template we talked about on our call?&rdquo;</em>
        </p>
        <p className="text-sm sm:text-base text-[var(--text-muted)]">
          You never officially agreed to build those features—it was an off-hand brainstorming idea tossed around in minute 32. But because there is no structured decision log, you now face two painful choices: either swallow 12 hours of unpaid rework, or push back defensively and risk damaging a lucrative client relationship.
        </p>
        <p className="text-sm sm:text-base text-[var(--text-muted)]">
          Capturing meeting intelligence is not administrative overhead. It is your project defense insurance.
        </p>
      </section>

      {/* Section 2: US Legal & Consent Callout */}
      <Callout type="warning" title="US Compliance: The 10-Second Recording Consent Rule">
        <p className="text-xs sm:text-sm text-[var(--text-dark)] leading-relaxed">
          More than 11 US states (including California, Florida, Illinois, Pennsylvania, and Washington) enforce <strong>Two-Party Consent wiretapping statutes</strong>. Recording a commercial video call without clear notice can lead to serious compliance disputes.
        </p>
        <div className="mt-3 p-3.5 bg-white rounded-xl border border-amber-300 text-xs text-[var(--text-dark)] space-y-2.5">
          <strong>The Frictionless Booking Disclaimer:</strong>
          <p className="italic text-[var(--text-muted)]">
            Add this line to your Calendly, Cal.com, or booking confirmation email:
          </p>
          <div className="p-2.5 bg-amber-50 rounded-lg font-mono text-[11px] text-amber-950 border border-amber-200">
            &ldquo;Note: Project sync calls are transcribed by Fathom to ensure all agreements, feedback, and action items are accurately documented.&rdquo;
          </div>
          <p className="text-[11px] text-[var(--text-muted)] leading-relaxed">
            If jumping on an unscheduled ad-hoc call, use this 10-second verbal opener: <em>&ldquo;Hey [Client], I have an AI note-taker running so I can focus 100% of my attention on your strategy rather than looking down to type. Let me know if that works for you!&rdquo;</em> (99% of US clients appreciate this professional attention).
          </p>
        </div>
      </Callout>

      {/* Section 3: Dual-Path Stack */}
      <section className="space-y-4">
        <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-[var(--text-dark)]">
          2. The Operational Tech Stack: Native Notion AI vs. The $0 Uncapped Stack
        </h2>
        <p className="text-sm sm:text-base text-[var(--text-muted)]">
          Mainstream SaaS guides insist that you need an enterprise automation stack: Fireflies ($18/mo) connected via Zapier ($20/mo) into Notion AI ($10/mo). That adds up to nearly $50/month before you complete a single billable deliverable.
        </p>
        <p className="text-sm sm:text-base text-[var(--text-muted)]">
          Instead, you have two practical paths depending on whether you already subscribe to Notion&apos;s AI add-on:
        </p>

        <ComparisonMatrix
          title="Operational Stack Comparison: Native Notion AI vs. The $0 Free Stack"
          optionAName="Native Notion AI"
          optionBName="The $0 Free Stack (Fathom + Claude)"
          rows={[
            {
              feature: 'Monthly Subscription Cost',
              optionA: '$10 / member / month',
              optionB: '$0 / month (100% Free)',
            },
            {
              feature: 'Call Recording & Bot',
              optionA: 'Manual audio upload or imported text',
              optionB: 'Automated Zoom/Meet bot (Fathom Free)',
            },
            {
              feature: 'Transcription Limits',
              optionA: 'Workspace file limits apply',
              optionB: 'Unlimited calls & transcript storage (38 languages)',
            },
            {
              feature: 'Processing Location',
              optionA: 'Direct inside Notion page (/ai)',
              optionB: 'Fast copy-paste into Claude 3.5 Sonnet / ChatGPT',
            },
            {
              feature: 'Custom Prompt Depth',
              optionA: 'Standard Notion AI blocks',
              optionB: 'Deep custom system constraints & voice rules',
            },
            {
              feature: 'Scope Creep Defense Email',
              optionA: 'Requires manual follow-up prompt',
              optionB: 'Automated 1-click output in prompt chain',
            },
          ]}
        />

        <Callout type="tip" title="Pro-Tip: Bypassing Fathom's 5-Call Monthly AI Cap for $0">
          <p className="text-xs sm:text-sm text-[var(--text-dark)] leading-relaxed">
            Fathom&apos;s Free Plan gives you <strong>unlimited call recordings and complete transcripts</strong> forever, but it caps its advanced automated AI summaries at 5 calls per month. 
          </p>
          <p className="text-xs sm:text-sm text-[var(--text-dark)] leading-relaxed mt-2">
            Instead of upgrading to their $19/month tier, simply copy the full, unlimited transcript from Fathom and paste it into our free Claude 3.5 Sonnet prompt below. You get agency-grade action item partitioning on every call without paying a single dollar.
          </p>
        </Callout>
      </section>

      {/* Section 4: Relational 3-Database Architecture */}
      <section className="space-y-4">
        <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-[var(--text-dark)]">
          3. The 3-Database Relational Model in Notion
        </h2>
        <p className="text-sm sm:text-base text-[var(--text-muted)]">
          The number one mistake freelancers make with meeting notes is storing them as standalone, loose Notion pages. Once a call ends, that page gets buried beneath other subpages and the tasks vanish from view.
        </p>
        <p className="text-sm sm:text-base text-[var(--text-muted)]">
          A dependable system connects meeting intelligence to your master delivery pipeline through three relational databases:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-[#FAF8F2] border border-[var(--border-color)] text-xs">
          <div className="p-3 bg-white rounded-xl border border-[var(--border-color)] space-y-1">
            <span className="font-bold text-[var(--purple-main)] uppercase tracking-wider text-[10px]">
              Database 1
            </span>
            <strong className="block font-heading text-sm text-[var(--text-dark)]">
              DB_Clients
            </strong>
            <p className="text-[var(--text-muted)]">
              Master company profile, active billing status, primary contact email, and contract rate.
            </p>
          </div>
          <div className="p-3 bg-white rounded-xl border border-[var(--border-color)] space-y-1">
            <span className="font-bold text-[var(--purple-main)] uppercase tracking-wider text-[10px]">
              Database 2
            </span>
            <strong className="block font-heading text-sm text-[var(--text-dark)]">
              DB_Meetings
            </strong>
            <p className="text-[var(--text-muted)]">
              Call date, recording link, executive decision log, and raw transcript text block.
            </p>
          </div>
          <div className="p-3 bg-white rounded-xl border border-[var(--border-color)] space-y-1">
            <span className="font-bold text-[var(--purple-main)] uppercase tracking-wider text-[10px]">
              Database 3
            </span>
            <strong className="block font-heading text-sm text-[var(--text-dark)]">
              DB_Action_Items
            </strong>
            <p className="text-[var(--text-muted)]">
              Global tasks with due dates, owner tags (Freelancer vs. Client), and Kanban delivery status.
            </p>
          </div>
        </div>

        {/* Database Property Blueprint */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[var(--border-color)] space-y-3">
          <strong className="font-heading text-sm sm:text-base text-[var(--text-dark)] block">
            Blueprint: The 5 Essential Properties for Your Meeting Database
          </strong>
          <p className="text-xs sm:text-sm text-[var(--text-muted)]">
            When configuring <code>DB_Meetings</code> in Notion, create these exact properties to keep your client records organized:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[var(--text-dark)] pt-1">
            <li className="p-2.5 rounded-xl bg-[#FAF8F2] border border-[var(--border-color)]">
              <span className="font-mono font-bold text-[var(--purple-main)]">1. Meeting Date:</span> Date property with time zone enabled.
            </li>
            <li className="p-2.5 rounded-xl bg-[#FAF8F2] border border-[var(--border-color)]">
              <span className="font-mono font-bold text-[var(--purple-main)]">2. Client Relation:</span> 2-way relation linked to <code>DB_Clients</code>.
            </li>
            <li className="p-2.5 rounded-xl bg-[#FAF8F2] border border-[var(--border-color)]">
              <span className="font-mono font-bold text-[var(--purple-main)]">3. Meeting Type:</span> Select (Kickoff, Milestone Sync, Retainer Review).
            </li>
            <li className="p-2.5 rounded-xl bg-[#FAF8F2] border border-[var(--border-color)]">
              <span className="font-mono font-bold text-[var(--purple-main)]">4. Recording Replay:</span> URL property pointing to Fathom or Zoom recording.
            </li>
            <li className="p-2.5 rounded-xl bg-[#FAF8F2] border border-[var(--border-color)] sm:col-span-2">
              <span className="font-mono font-bold text-[var(--purple-main)]">5. Scope Health Status:</span> Select (🟢 Scope Verified | 🟡 Clarification Pending | 🔴 Change Order Required).
            </li>
          </ul>
        </div>
      </section>

      {/* Section 5: The Framework Protocol */}
      <FrameworkBox
        title="The 5-Minute Post-Call Triage Protocol"
        badge="Standard Operating Procedure"
        description="Run this exact four-stage protocol within 60 minutes of ending any client sync call."
        steps={[
          {
            title: 'Stage 1: Automated Transcript Export',
            description: 'Meeting concludes. Fathom processes raw audio and compiles the clean transcript in under 60 seconds.',
          },
          {
            title: 'Stage 2: 3-Way Triage Extraction',
            description: 'Run the Master Triage Prompt in Claude 3.5 Sonnet or native Notion AI to partition tasks by ownership.',
          },
          {
            title: 'Stage 3: 60-Second Task Bridge',
            description: 'Paste output checkboxes into Notion and drag them directly into your linked Tasks Database.',
          },
          {
            title: 'Stage 4: Protective Recap Dispatch',
            description: 'Send the pre-drafted 100-word follow-up email to the client, creating a verified 24-hour decision receipt.',
          },
        ]}
      />

      {/* Section 6: Master Copy-Paste Triage Prompt */}
      <section className="space-y-4">
        <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-[var(--text-dark)]">
          4. The Master Copy-Paste 3-Way Triage Prompt
        </h2>
        <p className="text-sm sm:text-base text-[var(--text-muted)]">
          Standard AI summaries lump everything into a disorganized bullet list. This master prompt enforces strict operational partitioning so nothing gets lost:
        </p>

        <div className="p-5 rounded-2xl bg-[#1E293B] text-slate-100 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto shadow-md border border-slate-700">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-700 text-slate-400 text-xs">
            <span>PROMPT: Master Client Triage &amp; Action Item Extraction</span>
            <span className="text-[10px] uppercase tracking-wider bg-slate-800 px-2 py-0.5 rounded text-slate-300">
              Copy-Paste
            </span>
          </div>
          <pre className="whitespace-pre-wrap">
{`Act as a senior operations director for a high-end digital agency. Analyze the following raw client meeting transcript or notes.

Extract and format the response in clean Markdown using these strict sections:

### 1. EXECUTIVE DECISIONS (Max 3 Bullets)
- Concrete decisions, milestone deadlines, or creative choices approved on this call.

### 2. MY DELIVERABLES (Checkboxes with Deadlines)
- [ ] Task Name (Target Due Date) — Brief operational context.

### 3. CLIENT DEPENDENCIES (Checkboxes — What is blocking my delivery?)
- [ ] Asset / Approval Required from Client (Required By Date) — Why it is needed.

### 4. SCOPE ALERT FLAGS (Crucial)
- List any requests made during the call that fall outside our baseline contract agreement or proposal scope. If none, state: "None identified."

### 5. POST-CALL RECAP EMAIL (Ready to Send)
Draft a friendly, professional 100-word follow-up email thanking them for the call, summarizing the decisions, and clearly asking them to confirm the dependencies within 24 hours.

Transcript / Notes:
[PASTE YOUR RAW TRANSCRIPT HERE]`}
          </pre>
        </div>

        {/* Real-World Demonstration */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[var(--border-color)] space-y-3">
          <strong className="font-heading text-sm text-[var(--text-dark)] block">
            Real-World Example: Raw Call Snippet vs. Triage Output
          </strong>
          <div className="p-3 bg-[#FAF8F2] rounded-xl text-xs text-[var(--text-muted)] space-y-1 italic border border-[var(--border-color)]">
            <p><strong>Raw Call Excerpt:</strong> &ldquo;Client: We love the homepage wireframe! Can you change the primary button to navy blue by Friday? Also, can you set up our Mailchimp integration too? We still haven&apos;t sent you the API keys, but we will by Wednesday.&rdquo;</p>
          </div>
          <div className="p-3 bg-[#F8F9FD] rounded-xl text-xs text-[var(--text-dark)] space-y-1.5 border border-[var(--purple-main)]/20">
            <span className="font-bold text-[var(--purple-main)] text-[11px] uppercase tracking-wider block">
              AI Output Partitioning:
            </span>
            <p><strong>My Deliverables:</strong> <code>- [ ] Update homepage button color to navy blue (Due: Friday)</code></p>
            <p><strong>Client Dependencies:</strong> <code>- [ ] Client to deliver Mailchimp API keys (Required by: Wednesday)</code></p>
            <p><strong>Scope Alert Flag:</strong> <code>⚠️ Mailchimp integration is out-of-scope for Phase 1. Flagged for change order sign-off.</code></p>
          </div>
        </div>
      </section>

      {/* Section 7: The 60-Second Markdown-to-Database Bridge */}
      <section className="space-y-4">
        <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-[var(--text-dark)]">
          5. The 60-Second Markdown-to-Database Bridge
        </h2>
        <p className="text-sm sm:text-base text-[var(--text-muted)]">
          A common frustration with AI workflows is moving text from a chat window into actual database rows. Most freelancers manually click <em>&ldquo;+ New Task&rdquo;</em> one by one, which defeats the purpose of saving time.
        </p>
        <p className="text-sm sm:text-base text-[var(--text-muted)]">
          Notion actually has two native, built-in mechanics that turn text blocks into database items in seconds:
        </p>

        <div className="space-y-3 pt-1">
          <div className="p-4 rounded-xl bg-white border border-[var(--border-color)] space-y-2">
            <strong className="text-xs sm:text-sm font-bold text-[var(--text-dark)] block">
              Method 1: The Drag-and-Drop Board View Shortcut (Fastest)
            </strong>
            <ol className="list-decimal pl-5 space-y-1.5 text-xs text-[var(--text-muted)]">
              <li>Copy the AI output checkboxes (<code>- [ ]</code>) and paste them directly into your meeting page. Notion automatically renders them as native To-Do blocks.</li>
              <li>Inside your meeting template, embed a Linked View of your master <code>DB_Action_Items</code> database filtered to <code>Meeting = Current Page</code>.</li>
              <li>Highlight all the generated To-Do blocks and drag them straight into the <em>&ldquo;To Do&rdquo;</em> column of your board view.</li>
              <li>Notion instantly converts every highlighted line into a full database item with relations inherited automatically.</li>
            </ol>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[var(--border-color)] space-y-2">
            <strong className="text-xs sm:text-sm font-bold text-[var(--text-dark)] block">
              Method 2: The Native &ldquo;Turn into &rarr; Page in&rdquo; Shortcut
            </strong>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              If you don&apos;t have an embedded board view handy: highlight the text lines, click the six-dot drag handle on the left of the selection, click <strong>Turn into</strong> &rarr; <strong>Page in</strong>, and select <code>DB_Action_Items</code>. Notion instantly migrates every single bullet into an independent task card.
            </p>
          </div>
        </div>
      </section>

      {/* Section 8: Ready-to-Send Post-Call Recap Email Swipe Template */}
      <section className="space-y-4">
        <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-[var(--text-dark)]">
          6. The 24-Hour Scope Defense Email Swipe File
        </h2>
        <p className="text-sm sm:text-base text-[var(--text-muted)]">
          Once your tasks are logged, dispatch this 100-word decision receipt to the client within 60 minutes. The closing sentence is your legal defense against surprise disputes:
        </p>

        <div className="p-5 rounded-2xl bg-[#FAF8F2] border border-[var(--border-color)] space-y-3 text-xs sm:text-sm">
          <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-2 text-[var(--text-muted)] text-xs">
            <span className="font-semibold text-[var(--text-dark)]">Subject Line Formula:</span>
            <span className="font-mono text-[11px]">[Project Name] — Call Recap &amp; Action Items ([Date])</span>
          </div>

          <div className="space-y-3 font-sans text-[var(--text-dark)] leading-relaxed pt-1">
            <p>Hi [Client Name],</p>
            <p>Thanks for jumping on today&apos;s sync. Here is a quick recap of the decisions we finalized and next milestone steps:</p>
            
            <div className="p-3 bg-white rounded-xl border border-[var(--border-color)] space-y-2 text-xs">
              <p><strong>Approved Decisions:</strong> [1-2 sentences on what was agreed]</p>
              <p><strong>My Action Items:</strong> [Deliverable 1 due Date, Deliverable 2 due Date]</p>
              <p><strong>Your Action Items:</strong> [Asset / Approval needed from Client by Date]</p>
              <p><strong>Scope Clarification (if applicable):</strong> [Note any out-of-scope requests discussed, with note that an estimate will be provided before work begins]</p>
            </div>

            <p className="text-xs italic text-[var(--text-muted)] bg-amber-50/80 p-2.5 rounded-lg border border-amber-200">
              &ldquo;To keep our milestone delivery on schedule, please review the items above. If anything needs adjustment or was misunderstood, let me know by 5:00 PM EST tomorrow; otherwise, we will proceed on this basis.&rdquo;
            </p>

            <p>Best regards,<br />[Your Name]</p>
          </div>
        </div>
      </section>

      {/* Free Lead Magnet Recommendation */}
      <ResourceRecommendation
        title="50+ AI Prompt Vault &amp; System Swipe File"
        tagline="Get our complete, battle-tested prompt chain library for solo service providers and digital consultants. 100% free download."
        resourceSlug="50-ai-prompt-vault-swipe-file"
        badge="100% Free Swipe File ($0)"
      />

      {/* Product Recommendation Component */}
      <ProductRecommendation
        title="Client Pulse: Anti-Neglect Relationship CRM"
        tagline="A turnkey Notion workspace featuring built-in Zoom Decision Logs, Formula 2.0 Inactivity Radar, and Client Retention Swipe Files."
        priceDisplay="$7 One-Time"
        productSlug="client-pulse"
        gumroadUrl="https://growthstackhub1.gumroad.com/l/client-pulse-crm?wanted=true"
        features={[
          'Standardized Zoom & Meeting Decision Log Hub',
          'Automated 14-Day Inactivity Radar (Formula 2.0 alerts)',
          'Active Project Milestones Board with Kanban Delivery',
          '3 High-Stakes Retention Email Swipe Files',
          'Friday 10-Minute Weekly Client Review Routine',
          '100% Free Plan Compatible (Zero Monthly Fees)',
        ]}
      />

      {/* Section 9: Decision Tree */}
      <DecisionTree
        title="Meeting Intelligence & Data Routing Matrix"
        description="How to route call recordings and AI transcriptions based on project sensitivity and client agreements."
        branches={[
          {
            condition: 'Standard discovery, onboarding, or milestone sprint review call',
            recommendation: 'Run automated Fathom transcription and execute the 3-Way Triage Prompt',
            rationale: 'Capturing deliverables in writing protects both parties from memory gaps and scope creep.',
            tag: 'Standard Workflow',
          },
          {
            condition: 'Client under strict mutual NDA with proprietary source code or financial records',
            recommendation: 'Disable cloud AI bots; take structured manual bullet notes inside private Notion',
            rationale: 'Sending unvetted transcripts containing proprietary credentials to cloud LLMs violates strict confidentiality agreements.',
            tag: 'NDA Protection',
          },
          {
            condition: 'Client makes verbal requests on the call outside original proposal scope',
            recommendation: 'Flag under Scope Alert in recap email; require written sign-off before commencing work',
            rationale: 'Never begin unbudgeted deliverable work based on an off-hand Zoom comment.',
            tag: 'Scope Defense',
          },
        ]}
      />

      {/* Section 10: Implementation Checklist */}
      <ChecklistBlock
        title="The 5-Minute Post-Meeting Triage Checklist"
        items={[
          {
            text: 'Verify Two-Party recording consent before or at the start of the call',
            description: 'Use the 1-sentence booking disclaimer or 10-second verbal opener.',
          },
          {
            text: 'Export raw meeting transcript from Fathom or Zoom recording',
            description: 'Available within 60 seconds of hanging up the video call.',
          },
          {
            text: 'Run the Master 3-Way Triage Prompt in Claude 3.5 Sonnet or Notion AI',
            description: 'Separates output into My Deliverables, Client Dependencies, and Scope Alerts.',
          },
          {
            text: 'Paste checkboxes into Notion and drag into Linked Tasks Database',
            description: 'Transforms text checkboxes into relational task cards in 2 seconds.',
          },
          {
            text: 'Review and send the 100-word post-call recap email to the client',
            description: 'Establishes a written 24-hour verification window to eliminate scope disputes.',
          },
        ]}
      />

      {/* Section 11: FAQ */}
      <FAQ
        items={[
          {
            question: 'Will clients get annoyed if an AI bot joins the call?',
            answer:
              'In US business culture, AI note-takers (Fathom, Otter, Read.ai) are standard industry practice. When introduced with the perspective of client benefit ("I am recording this so none of your feedback gets lost"), clients view it as a mark of professionalism.',
          },
          {
            question: 'Does Fathom really offer unlimited free recording?',
            answer:
              'Yes. For solo users, Fathom\'s free tier provides unlimited recording minutes, transcriptions, and cloud storage without forced time limits on 1-on-1 and group calls. While Fathom caps its own AI summaries after 5 calls per month, pairing its free transcript with Claude 3.5 Sonnet gives you unlimited, uncapped summaries for $0.',
          },
          {
            question: 'What if I already subscribe to Notion Plus with Notion AI?',
            answer:
              'You can paste the master prompt into a custom Notion AI block right inside your meeting template, eliminating the need to visit Claude or ChatGPT web interfaces.',
          },
          {
            question: 'How does the post-call recap email prevent unpaid scope creep?',
            answer:
              'Section 4 of the master prompt explicitly flags requests that were not in your baseline scope. The recap email puts the ball in the client\'s court with a 24-hour confirmation window, preventing surprise disputes later in the project.',
          },
        ]}
      />

      <AuthorBox />
    </div>
  );
}
