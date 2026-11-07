import React from 'react';
import Link from 'next/link';
import type { BlogPostMeta } from '@/lib/types';
import KeyTakeaways from '@/components/KeyTakeaways';
import FrameworkBox from '@/components/FrameworkBox';
import ChecklistBlock from '@/components/ChecklistBlock';
import DecisionTree from '@/components/DecisionTree';
import Callout from '@/components/Callout';
import ProductRecommendation from '@/components/ProductRecommendation';
import FAQ from '@/components/FAQ';
import AuthorBox from '@/components/AuthorBox';
import {
  FileText,
  DollarSign,
  Calendar,
  AlertTriangle,
  CheckCircle2,
  ExternalLink,
  ShieldAlert,
  ArrowRight,
  TrendingUp,
  Receipt,
  Scale,
  Sparkles,
  ListOrdered,
} from 'lucide-react';

export const meta: BlogPostMeta = {
  slug: 'track-freelance-income-expenses-notion',
  title: 'How to Track Freelance Income and Expenses in Notion',
  description:
    'Set up a simple Notion system to log freelance invoices, track expenses, and see income vs. spending by month, plus US tax basics worth tracking in 2026.',
  date: '2026-11-07',
  updatedAt: '2026-11-07',
  author: 'Vivek',
  category: 'notion-systems',
  tags: [
    'notion-finances',
    'freelance-finances',
    'expense-tracker',
    'invoice-tracker',
    'notion-systems',
    'us-freelance-taxes',
  ],
  targetAudience: 'both',
  problemSolved:
    'Scattered invoices, lost receipts, and tax season panic caused by lack of a centralized financial ledger.',
  intentLevel: 'implementation',
  depthLevel: 5,
  originalValueElements: ['framework', 'checklist', 'decision-tree', 'practical-example'],
  qualityScore: 98,
  featuredImage: '/images/guides/track-freelance-income-expenses-notion.jpg',
  readingTime: 10,
  contentType: 'blog',
  relatedProducts: ['client-pulse', 'client-kickoff-kit'],
  relatedResources: ['ai-creator-productivity-kit', 'solopreneur-weekly-review-checklist'],
};

export default function TrackFreelanceFinancesNotionArticle() {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Track Freelance Income and Expenses in Notion',
    description:
      'A practical framework for US freelancers and solo operators to build a centralized financial tracking system in Notion using connected databases, automated overdue formulas, and IRS Schedule C aligned expense categories.',
    totalTime: 'PT30M',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: '0',
    },
    step: [
      {
        '@type': 'HowToStep',
        name: 'Step 1: Build the Invoices Database with Automated Overdue Flags',
        text: 'Create a Notion database with invoice numbers, client relations, dollar amounts, due dates, payment methods, and custom formulas to flag past-due receivables.',
        url: 'https://growthstackguide.com/blog/track-freelance-income-expenses-notion/#step-1-invoices',
      },
      {
        '@type': 'HowToStep',
        name: 'Step 2: Build the Expenses Database Aligned to IRS Schedule C',
        text: 'Set up an expense log using IRS Schedule C category names, receipt file attachments, and tax deduction notes for mileage and meals.',
        url: 'https://growthstackguide.com/blog/track-freelance-income-expenses-notion/#step-2-expenses',
      },
      {
        '@type': 'HowToStep',
        name: 'Step 3: Build a Monthly Summary Using Relations and Rollups',
        text: 'Link Invoices and Expenses to a Months database using two-way relations, roll up monthly totals, and calculate net operating cash flow.',
        url: 'https://growthstackguide.com/blog/track-freelance-income-expenses-notion/#step-3-monthly-summary',
      },
      {
        '@type': 'HowToStep',
        name: 'Step 4: Implement the 10-Minute Weekly Financial Routine',
        text: 'Log client billings upon send, reconcile cleared client payments, attach receipts immediately, and run a weekly overdue check.',
        url: 'https://growthstackguide.com/blog/track-freelance-income-expenses-notion/#step-4-weekly-routine',
      },
      {
        '@type': 'HowToStep',
        name: 'Step 5: Apply US Freelance Tax Realities for 2026',
        text: 'Track self-employment tax (15.3%), schedule Form 1040-ES quarterly deadlines, log 1099-NEC payments ($2,000 threshold), and record mileage with split 2026 rates.',
        url: 'https://growthstackguide.com/blog/track-freelance-income-expenses-notion/#us-tax-basics',
      },
    ],
  };

  return (
    <div className="space-y-8 text-left leading-relaxed text-[var(--text-dark)]">
      {/* HowTo JSON-LD Schema for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      {/* Quick Answer Box (Google Position Zero Target) */}
      <div className="p-5 rounded-2xl bg-[#F8F9FD] border-2 border-[var(--purple-main)]/30 text-xs sm:text-sm">
        <strong className="text-[var(--purple-main)] uppercase tracking-wider block font-extrabold text-[11px] mb-1">
          Quick Answer (The Core System)
        </strong>
        <p className="text-[var(--text-dark)] leading-relaxed">
          To track freelance finances in Notion without manual clutter, build three relationally connected databases on a single <strong>Finance</strong> dashboard: (1) an <strong>Invoices Database</strong> tracking sent bills, payment methods, and automated overdue flags; (2) an <strong>Expenses Database</strong> categorizing business costs strictly by IRS Schedule C tax lines with attached receipt files; and (3) a <strong>Months Database</strong> utilizing rollups to sum monthly revenue, expenses, and net profit automatically. This setup satisfies IRS recordkeeping criteria on Notion&apos;s free tier, requiring only a 10-minute weekly reconciliation routine.
        </p>
      </div>

      <KeyTakeaways
        points={[
          'The IRS allows any recordkeeping system that clearly shows income and expenses; a structured Notion workspace meets this standard.',
          'Model your expense categories directly after IRS Schedule C Part II lines to eliminate year-end accounting translation headaches.',
          'Automate overdue accounts receivable tracking with a dynamic Notion formula comparing Status and Due Date against today().',
          'Use relational rollups on a Months table to calculate Net Operating Income (Revenue minus Expenses) in real time.',
          'For tax year 2026, track the $2,000 1099-NEC filing threshold and the mid-year split mileage rate (72.5¢ Jan–Jun, 76¢ Jul–Dec).',
        ]}
      />

      {/* Editorial System Visual (Figure 1) */}
      <figure className="my-6 rounded-2xl overflow-hidden border border-[var(--border-color)] bg-[#FAF8F2] shadow-xs">
        <picture>
          <source srcSet="/images/guides/track-freelance-income-expenses-notion.webp" type="image/webp" />
          <img
            src="/images/guides/track-freelance-income-expenses-notion.jpg"
            alt="Infographic blueprint illustrating the 3-database Notion freelance finance architecture: Invoices ledger, IRS Schedule C expenses, and automated monthly P&L net cash flow rollups"
            width={1200}
            height={675}
            className="w-full h-auto object-cover"
            loading="eager"
          />
        </picture>
        <figcaption className="p-3 text-center text-xs text-[var(--text-muted)] border-t border-[var(--border-color)] bg-white">
          Figure 1: Complete Notion Freelance Finance Architecture — connecting Invoices, IRS Schedule C Expenses, and Monthly Net Profit rollups with automated overdue aging flags.
        </figcaption>
      </figure>

      {/* In-Page Navigation / Table of Contents (User Dwell Time & Quick-Jump) */}
      <nav aria-label="Table of Contents" className="p-5 rounded-2xl bg-white border border-[var(--border-color)] shadow-xs space-y-3">
        <div className="flex items-center gap-2">
          <ListOrdered className="w-4 h-4 text-[var(--purple-main)]" />
          <h2 className="font-heading font-extrabold text-xs sm:text-sm text-[var(--text-dark)] uppercase tracking-wider">
            Quick Navigation &amp; Blueprint Sections
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
          <a href="#why-notion-works" className="text-[var(--text-muted)] hover:text-[var(--purple-main)] transition-colors flex items-center gap-1.5">
            <span className="text-[var(--purple-main)] font-mono font-bold">1.</span>
            <span>Why Notion Works (And Where It Fails)</span>
          </a>
          <a href="#step-1-invoices" className="text-[var(--text-muted)] hover:text-[var(--purple-main)] transition-colors flex items-center gap-1.5">
            <span className="text-[var(--purple-main)] font-mono font-bold">2.</span>
            <span>Step 1: The Invoices Database &amp; Overdue Formulas</span>
          </a>
          <a href="#step-2-expenses" className="text-[var(--text-muted)] hover:text-[var(--purple-main)] transition-colors flex items-center gap-1.5">
            <span className="text-[var(--purple-main)] font-mono font-bold">3.</span>
            <span>Step 2: Expenses Log &amp; IRS Schedule C Tax Lines</span>
          </a>
          <a href="#step-3-monthly-summary" className="text-[var(--text-muted)] hover:text-[var(--purple-main)] transition-colors flex items-center gap-1.5">
            <span className="text-[var(--purple-main)] font-mono font-bold">4.</span>
            <span>Step 3: Monthly P&amp;L Rollups &amp; Net Margin Formula</span>
          </a>
          <a href="#step-4-weekly-routine" className="text-[var(--text-muted)] hover:text-[var(--purple-main)] transition-colors flex items-center gap-1.5">
            <span className="text-[var(--purple-main)] font-mono font-bold">5.</span>
            <span>Step 4: The 10-Minute Friday Maintenance SOP</span>
          </a>
          <a href="#software-decision" className="text-[var(--text-muted)] hover:text-[var(--purple-main)] transition-colors flex items-center gap-1.5">
            <span className="text-[var(--purple-main)] font-mono font-bold">6.</span>
            <span>Notion vs. Dedicated Accounting Software</span>
          </a>
          <a href="#us-tax-basics" className="text-[var(--text-muted)] hover:text-[var(--purple-main)] transition-colors flex items-center gap-1.5">
            <span className="text-[var(--purple-main)] font-mono font-bold">7.</span>
            <span>US Freelance Tax Realities (2026 Rules &amp; Mileage)</span>
          </a>
          <a href="#late-payment-protections" className="text-[var(--text-muted)] hover:text-[var(--purple-main)] transition-colors flex items-center gap-1.5">
            <span className="text-[var(--purple-main)] font-mono font-bold">8.</span>
            <span>US Statutory Late-Payment Protections</span>
          </a>
          <a href="#notion-free-vs-paid" className="text-[var(--text-muted)] hover:text-[var(--purple-main)] transition-colors flex items-center gap-1.5">
            <span className="text-[var(--purple-main)] font-mono font-bold">9.</span>
            <span>Notion Free vs. Paid: Block &amp; File Limits</span>
          </a>
          <a href="#faq" className="text-[var(--text-muted)] hover:text-[var(--purple-main)] transition-colors flex items-center gap-1.5">
            <span className="text-[var(--purple-main)] font-mono font-bold">10.</span>
            <span>Frequently Asked Questions</span>
          </a>
        </div>
      </nav>

      {/* Statutory Disclaimer Callout */}
      <Callout
        type="quick-answer"
        title="IMPORTANT LEGAL & TAX DISCLAIMER"
        content="We are not CPAs, enrolled agents, or tax attorneys. This guide is an operational record-keeping blueprint, not tax or legal advice. Tax codes and statutory thresholds change regularly. Always confirm specific deductions, quarterly estimated figures, and business structure decisions with a licensed tax professional."
      />

      {/* Section 1: Why Notion Works */}
      <section id="why-notion-works" className="space-y-4">
        <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-[var(--text-dark)]">
          1. Why Notion Works for Freelance Finances (And Where It Fails)
        </h2>
        <p className="text-sm sm:text-base text-[var(--text-muted)]">
          If you freelance or run a solo business in the United States, your financial paper trail tends to scatter across fragmented tools: invoices stranded in sent emails, merchant payouts hitting Stripe or PayPal, and software subscription receipts lost in buried download folders.
        </p>
        <p className="text-sm sm:text-base text-[var(--text-muted)]">
          Notion databases solve this by organizing invoices and expenses as structured rows that can be grouped, filtered, sorted, and summed. Because you define the schema, the system adapts directly to your service offerings rather than forcing you into rigid accounting software templates.
        </p>
        <p className="text-sm sm:text-base text-[var(--text-muted)]">
          From a regulatory standpoint, the Internal Revenue Service does not require certified accounting software. According to the{' '}
          <a
            href="https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--purple-main)] underline font-medium hover:text-[var(--purple-dark)]"
          >
            IRS Recordkeeping Guidelines
          </a>
          , taxpayers may choose any recordkeeping system suited to their business, provided it accurately documents gross income, expenses, and credits.
        </p>

        <Callout
          type="warning"
          title="The Critical Notion Boundary: What Notion Cannot Do"
          content="Notion is not double-entry accounting software. It will not automatically pull live bank feeds, generate GAAP-compliant balance sheets, file your taxes, or process credit card payments natively. It serves as an intentional, high-visibility ledger. If you require zero-touch automated bank syncing, skip ahead to our accounting software transition matrix."
        />
      </section>

      {/* Architecture FrameworkBox */}
      <FrameworkBox
        title="The 3-Database Financial Operating Architecture"
        badge="Relational Ledger Schema"
        description="A lightweight relational architecture designed to deliver complete cash flow visibility with zero monthly software costs."
        steps={[
          {
            title: '1. Invoices Database (Receivables)',
            description: 'Captures every sent client bill, payment terms, delivery milestones, and automated overdue aging formulas.',
          },
          {
            title: '2. Expenses Database (Deductions)',
            description: 'Logs all business purchases mapped 1:1 to IRS Schedule C tax lines with uploaded receipt proofs.',
          },
          {
            title: '3. Months Database (P&L Summary)',
            description: 'Connects both tables through two-way relations to roll up gross income, operating costs, and net margin.',
          },
          {
            title: '4. Dedicated Action Views',
            description: 'Filters receivables into instant &ldquo;Unpaid&rdquo; and &ldquo;Overdue&rdquo; pipelines for immediate cash follow-up.',
          },
        ]}
      />

      {/* Section 2: Step 1 Invoices Database */}
      <section id="step-1-invoices" className="space-y-4">
        <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-[var(--text-dark)]">
          2. Step 1: Create the Invoices Database
        </h2>
        <p className="text-sm sm:text-base text-[var(--text-muted)]">
          Create a parent page in your workspace called <strong>Finance</strong>, then insert a full-page database titled <strong>Invoices</strong>. Configure the database with the following specific properties:
        </p>

        {/* Invoices Properties Table */}
        <div className="overflow-x-auto my-6 border border-[var(--border-color)] rounded-xl shadow-xs">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-[#FAF8F2] border-b border-[var(--border-color)] text-[var(--text-dark)] font-heading font-bold">
              <tr>
                <th className="p-3 sm:p-3.5">Property Name</th>
                <th className="p-3 sm:p-3.5">Property Type</th>
                <th className="p-3 sm:p-3.5">Operational Purpose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)] text-[var(--text-muted)]">
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-[var(--text-dark)]">Invoice #</td>
                <td className="p-3 font-mono text-xs text-purple-700 bg-purple-50/50 rounded">Title</td>
                <td className="p-3">Sequential tracking identifier (e.g. <code className="font-mono text-xs">INV-2026-014</code>).</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-[var(--text-dark)]">Client</td>
                <td className="p-3 font-mono text-xs text-purple-700 bg-purple-50/50 rounded">Text / Relation</td>
                <td className="p-3">
                  Billed entity name. If you maintain our{' '}
                  <Link href="/blog/notion-freelancer-crm/" className="text-[var(--purple-main)] underline font-medium hover:text-[var(--purple-dark)]">
                    minimal 5-property Notion freelancer CRM
                  </Link>
                  , connect this field directly to your Clients pipeline database.
                </td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-[var(--text-dark)]">Project</td>
                <td className="p-3 font-mono text-xs text-purple-700 bg-purple-50/50 rounded">Text</td>
                <td className="p-3">Deliverable scope or milestone covered by this billing.</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-[var(--text-dark)]">Amount</td>
                <td className="p-3 font-mono text-xs text-purple-700 bg-purple-50/50 rounded">Number (USD)</td>
                <td className="p-3">Set number format to US Dollar (<code className="font-mono text-xs">$</code>) for rollup sums.</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-[var(--text-dark)]">Issue Date</td>
                <td className="p-3 font-mono text-xs text-purple-700 bg-purple-50/50 rounded">Date</td>
                <td className="p-3">The calendar date the invoice was dispatched to the client.</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-[var(--text-dark)]">Due Date</td>
                <td className="p-3 font-mono text-xs text-purple-700 bg-purple-50/50 rounded">Date</td>
                <td className="p-3">Strict payment deadline per contract (e.g. 14 or 30 days).</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-[var(--text-dark)]">Paid Date</td>
                <td className="p-3 font-mono text-xs text-purple-700 bg-purple-50/50 rounded">Date</td>
                <td className="p-3">Recorded only when funds clear into your business checking account.</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-[var(--text-dark)]">Status</td>
                <td className="p-3 font-mono text-xs text-purple-700 bg-purple-50/50 rounded">Select</td>
                <td className="p-3">Exactly 3 discrete stages: <code className="font-mono text-xs">Draft</code>, <code className="font-mono text-xs">Sent</code>, <code className="font-mono text-xs">Paid</code>.</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-[var(--text-dark)]">Payment Method</td>
                <td className="p-3 font-mono text-xs text-purple-700 bg-purple-50/50 rounded">Select</td>
                <td className="p-3">Options: <code className="font-mono text-xs">ACH / Direct Deposit</code>, <code className="font-mono text-xs">Wire</code>, <code className="font-mono text-xs">Stripe / Card</code>, <code className="font-mono text-xs">Check</code>.</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-[var(--text-dark)]">Terms</td>
                <td className="p-3 font-mono text-xs text-purple-700 bg-purple-50/50 rounded">Text</td>
                <td className="p-3">Contractual terms, e.g., &ldquo;Due upon receipt, 1.5% monthly late fee applies after 14 days&rdquo;.</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-[var(--text-dark)]">PO #</td>
                <td className="p-3 font-mono text-xs text-purple-700 bg-purple-50/50 rounded">Text</td>
                <td className="p-3">Client internal purchase order number (required by corporate accounts).</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm text-[var(--text-muted)]">
          <strong>Key Billing Best Practice:</strong> SCORE small business mentors recommend writing out clear terms such as &ldquo;Payment Due on [Date]&rdquo; rather than industry shorthand like &ldquo;Net 30&rdquo;, which clients frequently misunderstand or delay.
        </p>

        {/* Overdue Formulas (Modern 2.0 & Classic) */}
        <div className="space-y-4 pt-4">
          <h3 className="font-heading font-extrabold text-lg text-[var(--text-dark)]">
            Automating Overdue Detection (Formulas 2.0 &amp; Classic Syntax)
          </h3>
          <p className="text-sm text-[var(--text-muted)]">
            Never manually mark an invoice as &ldquo;Overdue&rdquo; in a dropdown menu. If you forget to update it, unpaid bills slip through the cracks. Instead, add two <strong>Formula</strong> properties to detect past-due balances automatically.
          </p>

          <div className="space-y-4">
            {/* Formula 1 */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#FAF8F2] border border-[var(--border-color)] space-y-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--purple-main)] block">
                Formula 1: Overdue Status Flag
              </span>
              <p className="text-xs text-[var(--text-muted)]">
                Displays the text &ldquo;Overdue&rdquo; only when an invoice is unpaid and past its due date:
              </p>
              
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-[var(--text-dark)] uppercase tracking-wider block">
                  Notion Formula 2.0 Syntax (Modern / Recommended):
                </span>
                <pre className="p-3 rounded-lg bg-white border border-[var(--border-color)] text-xs font-mono text-[var(--purple-dark)] overflow-x-auto">
                  {`prop("Status") != "Paid" and prop("Due date") < today() ? "Overdue" : ""`}
                </pre>
              </div>

              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-[var(--text-muted)] uppercase tracking-wider block">
                  Classic Formula 1.0 Fallback Syntax:
                </span>
                <pre className="p-3 rounded-lg bg-white/70 border border-[var(--border-color)] text-xs font-mono text-[var(--text-muted)] overflow-x-auto">
                  {`if(prop("Status") != "Paid" and prop("Due date") < today(), "Overdue", "")`}
                </pre>
              </div>
            </div>

            {/* Formula 2 */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#FAF8F2] border border-[var(--border-color)] space-y-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--purple-main)] block">
                Formula 2: Days Past Due Counter
              </span>
              <p className="text-xs text-[var(--text-muted)]">
                Calculates the exact integer count of days a delinquent invoice has remained unpaid:
              </p>

              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-[var(--text-dark)] uppercase tracking-wider block">
                  Notion Formula 2.0 Syntax (Modern / Recommended):
                </span>
                <pre className="p-3 rounded-lg bg-white border border-[var(--border-color)] text-xs font-mono text-[var(--purple-dark)] overflow-x-auto">
                  {`prop("Status") != "Paid" and prop("Due date") < today() ? dateBetween(today(), prop("Due date"), "days") : 0`}
                </pre>
              </div>

              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-[var(--text-muted)] uppercase tracking-wider block">
                  Classic Formula 1.0 Fallback Syntax:
                </span>
                <pre className="p-3 rounded-lg bg-white/70 border border-[var(--border-color)] text-xs font-mono text-[var(--text-muted)] overflow-x-auto">
                  {`if(prop("Status") != "Paid" and prop("Due date") < today(), dateBetween(today(), prop("Due date"), "days"), 0)`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Step 2 Expenses Database */}
      <section id="step-2-expenses" className="space-y-4">
        <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-[var(--text-dark)]">
          3. Step 2: Create the Expenses Database (IRS Schedule C Aligned)
        </h2>
        <p className="text-sm sm:text-base text-[var(--text-muted)]">
          Next, add a second database titled <strong>Expenses</strong> inside your Finance hub. The biggest mistake freelancers make is creating arbitrary categories like &ldquo;Tech Stuff&rdquo; or &ldquo;Coffee &amp; Work&rdquo;. When April arrives, your accountant or tax software will make you re-categorize every single item.
        </p>

        {/* Expenses Table */}
        <div className="overflow-x-auto my-6 border border-[var(--border-color)] rounded-xl shadow-xs">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-[#FAF8F2] border-b border-[var(--border-color)] text-[var(--text-dark)] font-heading font-bold">
              <tr>
                <th className="p-3 sm:p-3.5">Property Name</th>
                <th className="p-3 sm:p-3.5">Property Type</th>
                <th className="p-3 sm:p-3.5">Operational Purpose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)] text-[var(--text-muted)]">
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-[var(--text-dark)]">Expense</td>
                <td className="p-3 font-mono text-xs text-purple-700 bg-purple-50/50 rounded">Title</td>
                <td className="p-3">Vendor and item description (e.g. &ldquo;Figma Annual Plan&rdquo;).</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-[var(--text-dark)]">Amount</td>
                <td className="p-3 font-mono text-xs text-purple-700 bg-purple-50/50 rounded">Number (USD)</td>
                <td className="p-3">Total transaction cost in US Dollars.</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-[var(--text-dark)]">Date</td>
                <td className="p-3 font-mono text-xs text-purple-700 bg-purple-50/50 rounded">Date</td>
                <td className="p-3">Transaction date printed on the merchant receipt.</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-[var(--text-dark)]">Category</td>
                <td className="p-3 font-mono text-xs text-purple-700 bg-purple-50/50 rounded">Select</td>
                <td className="p-3">Official IRS Schedule C Part II category (see list below).</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-[var(--text-dark)]">Client</td>
                <td className="p-3 font-mono text-xs text-purple-700 bg-purple-50/50 rounded">Text / Relation</td>
                <td className="p-3">Optional: link if the cost is directly reimbursable by a client.</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-[var(--text-dark)]">Receipt</td>
                <td className="p-3 font-mono text-xs text-purple-700 bg-purple-50/50 rounded">Files &amp; media</td>
                <td className="p-3">Direct upload of PDF receipt, JPG, or PNG screenshot.</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 font-semibold text-[var(--text-dark)]">Notes</td>
                <td className="p-3 font-mono text-xs text-purple-700 bg-purple-50/50 rounded">Text</td>
                <td className="p-3">Business purpose: meeting attendees, business intent, mileage details.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="font-heading font-extrabold text-lg text-[var(--text-dark)]">
          Schedule C Standard Categories to Pre-Load
        </h3>
        <p className="text-sm text-[var(--text-muted)]">
          Configure your Category Select property options to mirror{' '}
          <a
            href="https://www.irs.gov/pub/irs-pdf/f1040sc.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--purple-main)] underline font-medium hover:text-[var(--purple-dark)]"
          >
            IRS Form 1040 Schedule C (Part II)
          </a>
          :
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-[var(--text-dark)] pt-2">
          {[
            'Advertising (Line 8)',
            'Car & Truck Expenses (Line 9)',
            'Commissions & Fees (Line 10)',
            'Contract Labor (Line 11)',
            'Insurance (other than health) (Line 15)',
            'Legal & Professional Services (Line 17)',
            'Office Expense (Line 18)',
            'Rent / Lease (Line 20b)',
            'Repairs & Maintenance (Line 21)',
            'Supplies (Line 22)',
            'Taxes & Licenses (Line 23)',
            'Travel (Line 24a)',
            'Deductible Meals (50%) (Line 24b)',
            'Utilities (Line 25)',
            'Other Expenses (Software/SaaS) (Line 27a)',
          ].map((cat, idx) => (
            <div key={idx} className="p-2.5 rounded-lg bg-white border border-[var(--border-color)] font-medium">
              &bull; {cat}
            </div>
          ))}
        </div>

        <Callout
          type="tip"
          title="Where Do SaaS & AI Software Subscriptions Go?"
          content="You will notice Schedule C has no line item titled 'Software'. Most accountants categorize monthly tools (ChatGPT, Notion, Figma, Webflow) under Line 18 (Office Expense) or Line 27a (Other Expenses - Software). Confirm with your preparer, then maintain that single category consistently."
        />
      </section>

      {/* Section 4: Step 3 Monthly Summary */}
      <section id="step-3-monthly-summary" className="space-y-4">
        <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-[var(--text-dark)]">
          4. Step 3: Build a Monthly Summary (Rollups &amp; Net Formula)
        </h2>
        <p className="text-sm sm:text-base text-[var(--text-muted)]">
          Having separate databases is helpful, but you need a high-level view of your business health: <em>How much came in? How much went out? What is my actual take-home profit?</em>
        </p>

        <div className="p-5 rounded-2xl bg-white border border-[var(--border-color)] shadow-xs space-y-4">
          <h3 className="font-heading font-extrabold text-base sm:text-lg text-[var(--text-dark)]">
            How to Connect the Months Database
          </h3>
          <ol className="list-decimal list-inside space-y-3 text-xs sm:text-sm text-[var(--text-muted)]">
            <li>
              <strong>Create the Months Database:</strong> Add a third table named <strong>Months</strong> with rows for each calendar period (<code className="font-mono text-xs">2026-01</code>, <code className="font-mono text-xs">2026-02</code>, up to <code className="font-mono text-xs">2026-12</code>).
            </li>
            <li>
              <strong>Link Invoices to Months:</strong> In your Invoices database, add a <strong>Relation</strong> property pointing to the Months database. Enable &ldquo;Show on Months&rdquo;.
            </li>
            <li>
              <strong>Link Expenses to Months:</strong> In your Expenses database, add another <strong>Relation</strong> property pointing to Months. Enable &ldquo;Show on Months&rdquo;.
            </li>
            <li>
              <strong>Add Revenue Rollup:</strong> In the Months database, add a <strong>Rollup</strong> property named <code className="font-mono text-xs">Total Revenue</code>. Select the Invoices relation, choose the <code className="font-mono text-xs">Amount</code> property, and set calculation to <strong>Sum</strong>.
            </li>
            <li>
              <strong>Add Expense Rollup:</strong> Add a second <strong>Rollup</strong> named <code className="font-mono text-xs">Total Expenses</code>. Select the Expenses relation, choose <code className="font-mono text-xs">Amount</code>, and set calculation to <strong>Sum</strong>.
            </li>
            <li>
              <strong>Calculate Net Profit:</strong> Add a <strong>Formula</strong> property titled <code className="font-mono text-xs">Net Operating Cash Flow</code>:
              <pre className="mt-2 p-2.5 rounded-lg bg-[#FAF8F2] border border-[var(--border-color)] text-xs font-mono text-[var(--purple-dark)]">
                {`prop("Total Revenue") - prop("Total Expenses")`}
              </pre>
            </li>
          </ol>
        </div>
      </section>

      {/* Section 5: Step 4 Routine */}
      <section id="step-4-weekly-routine" className="space-y-4">
        <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-[var(--text-dark)]">
          5. Step 4: The 10-Minute Weekly Maintenance Routine
        </h2>
        <p className="text-sm sm:text-base text-[var(--text-muted)]">
          Financial systems do not fail because of bad formulas; they fail because of maintenance friction. If you let invoices pile up for 90 days, catching up is miserable. Instead, batch your bookkeeping into a repeatable 10-minute Friday afternoon rhythm:
        </p>

        <ChecklistBlock
          title="Weekly Financial Operations Checklist (Friday SOP)"
          items={[
            {
              text: 'Log newly dispatched client invoices',
              description: 'Create a row immediately upon sending any bill. Set status to Sent and confirm Due Date is locked.',
            },
            {
              text: 'Reconcile cleared client payouts',
              description: 'Check bank checking and Stripe/PayPal balances. Mark cleared invoices as Paid and enter the Paid Date.',
            },
            {
              text: 'Attach expense receipts immediately',
              description: 'Snap photos of paper receipts or download SaaS PDFs and drop them into the Expenses database before they get lost.',
            },
            {
              text: 'Audit the dynamic "Overdue" view',
              description: 'Check for any unpaid invoices past due. If a payment is late, dispatch an immediate administrative reminder.',
            },
            {
              text: 'Assign month relations & verify Net Profit',
              description: 'Link any unassigned rows to the current month to ensure your running cash flow summary remains accurate.',
            },
          ]}
        />

        <p className="text-xs sm:text-sm text-[var(--text-muted)]">
          <strong>Overdue Follow-Up Protocol:</strong> If an invoice triggers your Overdue status filter, avoid timid &ldquo;just checking in&rdquo; messages. Instead, deploy our battle-tested{' '}
          <Link
            href="/blog/freelance-overdue-invoice-email-scripts/"
            className="text-[var(--purple-main)] underline font-medium hover:text-[var(--purple-dark)]"
          >
            4-stage overdue invoice recovery email sequence
          </Link>{' '}
          to systematically collect receivables without burning client rapport. You can also pair this weekly audit with your Sunday planning ritual using our{' '}
          <Link
            href="/blog/solopreneur-operations-os/"
            className="text-[var(--purple-main)] underline font-medium hover:text-[var(--purple-dark)]"
          >
            Solopreneur Operating System architecture
          </Link>
          .
        </p>
      </section>

      {/* Decision Tree: Notion vs Accounting Software */}
      <div id="software-decision">
        <DecisionTree
          title="Software Decision Matrix: When to Keep Notion vs. Migrate to QuickBooks"
          description="Notion is free and flexible, but it has distinct architectural ceilings. Use this matrix to evaluate your operational fit."
          branches={[
            {
              condition: 'You send 1 to 15 invoices per month and maintain low expense transaction volume (< 40 receipts)',
              recommendation: 'Stay in Notion (Zero Software Overhead)',
              rationale: 'A free Notion ledger provides complete visibility without paying $360+/year in unnecessary SaaS subscriptions.',
              tag: 'Ideal for Solopreneurs',
            },
            {
              condition: 'You run an e-commerce store, have W-2 employees, or manage 100+ micro-transactions monthly',
              recommendation: 'Upgrade to Dedicated Accounting Software (QuickBooks / FreshBooks / Xero)',
              rationale: 'Manual data entry will break down. You require automated Plaid bank feeds and double-entry general ledger reconciliation.',
              tag: 'High Transaction Volume',
            },
            {
              condition: 'Your state or clients require formal automated Sales Tax collection and remittance',
              recommendation: 'Use Wave, Stripe Invoicing, or QuickBooks Online',
              rationale: 'Notion cannot calculate dynamic zip-code sales tax rates or auto-generate remittance reports.',
              tag: 'Tax Compliance Requirement',
            },
          ]}
        />
      </div>

      {/* Section 6: US Tax Basics */}
      <section id="us-tax-basics" className="space-y-4">
        <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-[var(--text-dark)]">
          6. US Freelance Tax Realities to Track From Day One (2026 Rules)
        </h2>
        <p className="text-sm sm:text-base text-[var(--text-muted)]">
          Operating as a solo business owner in the United States requires understanding specific federal tax mechanisms. Your Notion tracker provides the exact numbers required by these four federal rules:
        </p>

        {/* Self-Employment Tax */}
        <div className="p-5 rounded-2xl bg-[#FAF8F2] border border-[var(--border-color)] space-y-3">
          <div className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-[var(--purple-main)]" />
            <h3 className="font-heading font-extrabold text-base text-[var(--text-dark)]">
              1. Self-Employment (SE) Tax: The 15.3% Reality
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-[var(--text-muted)]">
            When you transition from a W-2 job to 1099 freelancing, you become responsible for both the employee and employer shares of Social Security and Medicare taxes. Per{' '}
            <a
              href="https://www.irs.gov/taxtopics/tc554"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--purple-main)] underline font-medium hover:text-[var(--purple-dark)]"
            >
              IRS Topic 554
            </a>
            , the self-employment tax rate is <strong>15.3%</strong> (12.4% for Social Security + 2.9% for Medicare).
          </p>
          <p className="text-xs sm:text-sm text-[var(--text-muted)]">
            This tax is calculated on <strong>92.35%</strong> of your net self-employment earnings once net earnings reach <strong>$400</strong>. For example, on $50,000 in net profit, taxable SE earnings equal $46,175, producing roughly $7,065 in self-employment tax alone (exclusive of federal and state income tax). Because SE tax is based on <em>net profit</em>, every legitimate business expense logged in your Notion tracker directly lowers your tax liability.
          </p>
        </div>

        {/* Form 1040-ES Deadlines */}
        <div className="p-5 rounded-2xl bg-white border border-[var(--border-color)] space-y-3">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[var(--purple-main)]" />
            <h3 className="font-heading font-extrabold text-base text-[var(--text-dark)]">
              2. 2026 Estimated Quarterly Tax Deadlines (Form 1040-ES)
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-[var(--text-muted)]">
            Because freelance clients do not withhold income taxes, the IRS requires quarterly estimated tax payments if you expect to owe $1,000 or more in federal taxes for the year (per{' '}
            <a
              href="https://www.irs.gov/pub/irs-pdf/f1040es.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--purple-main)] underline font-medium hover:text-[var(--purple-dark)]"
            >
              IRS Form 1040-ES
            </a>
            ). Mark these official 2026 filing dates in your calendar:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[var(--text-dark)] pt-1">
            <div className="p-3 rounded-lg bg-[#FAF8F2] border border-[var(--border-color)]">
              <strong>Q1 Deadline:</strong> April 15, 2026
            </div>
            <div className="p-3 rounded-lg bg-[#FAF8F2] border border-[var(--border-color)]">
              <strong>Q2 Deadline:</strong> June 15, 2026
            </div>
            <div className="p-3 rounded-lg bg-[#FAF8F2] border border-[var(--border-color)]">
              <strong>Q3 Deadline:</strong> September 15, 2026
            </div>
            <div className="p-3 rounded-lg bg-[#FAF8F2] border border-[var(--border-color)]">
              <strong>Q4 Deadline:</strong> January 15, 2027*
            </div>
          </div>
          <p className="text-[11px] text-[var(--text-muted)]">
            *You can skip the January 15 payment if you file your complete 2026 Form 1040 return and pay your full balance by February 1, 2027.
          </p>
        </div>

        {/* 1099-NEC Threshold */}
        <div className="p-5 rounded-2xl bg-[#FAF8F2] border border-[var(--border-color)] space-y-3">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[var(--purple-main)]" />
            <h3 className="font-heading font-extrabold text-base text-[var(--text-dark)]">
              3. The 1099-NEC Threshold: $2,000 for 2026
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-[var(--text-muted)]">
            Under recent legislative updates, businesses are generally required to issue Form 1099-NEC to non-corporate independent contractors who receive payments of <strong>$2,000 or more</strong> during 2026 (an increase from the historical $600 threshold).
          </p>
          <p className="text-xs sm:text-sm text-[var(--text-muted)]">
            <strong>Critical Freelancer Trap:</strong> Many freelancers mistakenly believe that if a client pays them less than $2,000 and does not issue a 1099, that income is tax-free. According to the IRS, <em>all self-employment income must be reported on Schedule C</em> regardless of whether you receive a 1099 form. Your Invoices table is your legal record of total gross income.
          </p>
        </div>

        {/* Deductions: Home Office, Mileage Split, Meals */}
        <div className="p-5 rounded-2xl bg-white border border-[var(--border-color)] space-y-3">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[var(--purple-main)]" />
            <h3 className="font-heading font-extrabold text-base text-[var(--text-dark)]">
              4. Deductions Worth Tracking (2026 Rules)
            </h3>
          </div>
          <ul className="space-y-2.5 text-xs sm:text-sm text-[var(--text-muted)]">
            <li>
              <strong>Home Office Deduction (Simplified Method):</strong> Claim $5 per square foot of dedicated, exclusive workspace up to 300 square feet (maximum standard deduction of $1,500).
            </li>
            <li>
              <strong>2026 Mid-Year Mileage Rate Split:</strong> The IRS updated standard business mileage rates mid-year. Trips from <em>January 1 through June 30, 2026</em> are deductible at <strong>72.5¢ per mile</strong>; trips from <em>July 1 through December 31, 2026</em> are deductible at <strong>76¢ per mile</strong>. Ensure your expense tracker records the specific trip date.
            </li>
            <li>
              <strong>Business Meals:</strong> Limited to <strong>50%</strong> deductibility under IRS Publication 334. You must document the business purpose and attendees in the Notes field.
            </li>
            <li>
              <strong>Record Retention:</strong> Keep your digital receipts in Notion for a minimum of <strong>3 years</strong> from the date you file your return (6 years if income omissions exceed 25%).
            </li>
          </ul>
        </div>
      </section>

      {/* Section 7: US Late Payment Protections */}
      <section id="late-payment-protections" className="space-y-4">
        <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-[var(--text-dark)]">
          7. US Late-Payment Protections Worth Knowing
        </h2>
        <p className="text-sm sm:text-base text-[var(--text-muted)]">
          A landmark Freelancers Union study revealed that roughly 50% of independent workers face difficulties collecting payment from clients. To combat non-payment, multiple US jurisdictions have enacted statutory protections:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[var(--text-dark)]">
          <div className="p-4 rounded-xl bg-white border border-[var(--border-color)] space-y-1">
            <strong className="text-[var(--purple-main)] block font-heading font-bold text-sm">
              New York City (Freelance Isn&apos;t Free)
            </strong>
            <p className="text-[var(--text-muted)] text-xs">
              Mandates written contracts for projects of $800+ and requires full payment within 30 days unless another date is agreed upon in writing.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-[var(--border-color)] space-y-1">
            <strong className="text-[var(--purple-main)] block font-heading font-bold text-sm">
              California (FWPA — Effective 2025)
            </strong>
            <p className="text-[var(--text-muted)] text-xs">
              Statewide protection covering contracts worth $250 or more. Requires payment on or before the agreed contract date, with statutory penalties for violations.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-[var(--border-color)] space-y-1">
            <strong className="text-[var(--purple-main)] block font-heading font-bold text-sm">
              Illinois (Freelance Worker Protection Act)
            </strong>
            <p className="text-[var(--text-muted)] text-xs">
              Covers freelance contracts of $500 or more within a 120-day period, enforcing mandatory 30-day payment timelines.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-[var(--border-color)] space-y-1">
            <strong className="text-[var(--purple-main)] block font-heading font-bold text-sm">
              New York State
            </strong>
            <p className="text-[var(--text-muted)] text-xs">
              Enacted statewide protections mirroring NYC, providing administrative complaint options for unpaid independent contractors.
            </p>
          </div>
        </div>

        <p className="text-xs text-[var(--text-muted)]">
          The best defense against delayed billing is maintaining an explicit contract with written milestone due dates and auditing your Notion Overdue view every single week.
        </p>
      </section>

      {/* Section 8: Notion Free vs Paid */}
      <section id="notion-free-vs-paid" className="space-y-4">
        <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-[var(--text-dark)]">
          8. Notion Free vs. Paid: What Freelancers Need to Know
        </h2>
        <p className="text-sm sm:text-base text-[var(--text-muted)]">
          You do not need Notion Plus ($10/month) to run this financial system. The Free plan fully supports relational databases, rollups, and formulas. However, keep these specific platform constraints in mind:
        </p>

        <div className="p-5 rounded-2xl bg-white border border-[var(--border-color)] space-y-3 text-xs sm:text-sm text-[var(--text-muted)]">
          <ul className="space-y-2">
            <li>
              <strong>Block Limits:</strong> Solo workspaces on the Free tier have unlimited blocks. However, if you invite a team member (such as an external bookkeeper) to your workspace, a 1,000-block ceiling is triggered across the workspace.
            </li>
            <li>
              <strong>File Upload Limit (5 MB):</strong> Receipt attachments on the Free tier are limited to 5 MB per file. Standard smartphone photos and PDF receipts fit comfortably, but high-resolution multi-page scans should be compressed before uploading.
            </li>
            <li>
              <strong>Data Backups:</strong> At the end of each quarter, export your Finance database as <strong>Markdown &amp; CSV</strong> (via the &bull;&bull;&bull; menu) to maintain offline financial archives in Excel or Google Sheets.
            </li>
          </ul>
        </div>
      </section>

      {/* Monetization: Product Recommendation */}
      <ProductRecommendation
        title="Client Pulse — Anti-Neglect Relationship CRM"
        tagline="Pair your financial ledger with an anti-neglect client tracking engine in Notion. Monitor touchpoints, follow-up timers, and project milestones in under 60 seconds a day."
        priceDisplay="$7"
        productSlug="client-pulse"
        gumroadUrl="https://growthstackhub1.gumroad.com/l/client-pulse-crm"
        features={[
          'Automated 14-Day Client Inactivity Radar',
          'Standardized Meeting Decision & Action Item Log',
          'Built-In Milestone Invoice & Scope Lock Hub',
          '100% Compatible with Free-Tier Notion Workspaces',
        ]}
      />

      {/* FAQ Section */}
      <div id="faq">
        <FAQ
          title="Frequently Asked Questions: Tracking Freelance Finances in Notion"
          items={[
            {
              question: 'Is Notion good enough for freelance bookkeeping?',
              answer:
                'For tracking invoices, logging deductible expenses, and monitoring net income, yes. The IRS accepts any recordkeeping system that clearly documents your income and expenditures. Notion falls short only if you require automated double-entry accounting or live bank account synchronization.',
            },
            {
              question: 'Can I use this financial setup on Notion\'s Free plan?',
              answer:
                'Yes. All core database mechanisms—relations, rollups, formula properties, and filtered views—function on the free tier. The only constraints are a 5 MB upload limit per receipt and a single native chart view.',
            },
            {
              question: 'How much should I set aside for freelance taxes?',
              answer:
                'Because tax liability depends on your net profit, state income tax rate, and eligible deductions, the IRS does not prescribe a universal percentage. Most solo operators set aside 25% to 30% of net income in a dedicated high-yield business savings account for quarterly payments.',
            },
            {
              question: 'Do I need to receive a 1099-NEC to report my freelance income?',
              answer:
                'No. You are legally required to report all self-employment income on IRS Schedule C regardless of whether a client sends a 1099 form. For 2026, clients are generally only required to file Form 1099-NEC if payments equal or exceed $2,000.',
            },
            {
              question: 'What are the 2026 estimated quarterly tax due dates?',
              answer:
                'The four federal Form 1040-ES due dates are April 15, June 15, September 15, 2026, and January 15, 2027. You can skip the January payment if you file your complete 2026 return and pay in full by February 1, 2027.',
            },
            {
              question: 'How do I log business mileage deductions in Notion?',
              answer:
                'Add a Number property for miles driven in your Expenses table. For tax year 2026, note the transaction date: trips taken January 1 through June 30 are deductible at 72.5¢/mile, while trips taken July 1 through December 31 are deductible at 76¢/mile.',
            },
          ]}
        />
      </div>

      {/* Statutory Sources & Citations */}
      <section className="pt-6 border-t border-[var(--border-color)] text-xs text-[var(--text-muted)] space-y-2">
        <h4 className="font-heading font-bold text-sm text-[var(--text-dark)]">
          Statutory Sources &amp; Official References
        </h4>
        <p>
          IRS Sources:{' '}
          <a
            href="https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--purple-main)] underline hover:text-[var(--purple-dark)]"
          >
            IRS Recordkeeping Guide
          </a>
          {' '}&bull;{' '}
          <a
            href="https://www.irs.gov/taxtopics/tc554"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--purple-main)] underline hover:text-[var(--purple-dark)]"
          >
            Topic 554 (Self-Employment Tax)
          </a>
          {' '}&bull;{' '}
          <a
            href="https://www.irs.gov/pub/irs-pdf/f1040es.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--purple-main)] underline hover:text-[var(--purple-dark)]"
          >
            2026 Form 1040-ES (Estimated Taxes)
          </a>
          {' '}&bull;{' '}
          <a
            href="https://www.irs.gov/pub/irs-pdf/f1040sc.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--purple-main)] underline hover:text-[var(--purple-dark)]"
          >
            Schedule C (Form 1040)
          </a>
          {' '}&bull;{' '}
          <a
            href="https://www.irs.gov/tax-professionals/standard-mileage-rates"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--purple-main)] underline hover:text-[var(--purple-dark)]"
          >
            IRS Standard Mileage Rates
          </a>
          {' '}&bull;{' '}
          <a
            href="https://www.irs.gov/businesses/small-businesses-self-employed/simplified-option-for-home-office-deduction"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--purple-main)] underline hover:text-[var(--purple-dark)]"
          >
            Simplified Home Office Deduction
          </a>
          .
        </p>
        <p>
          Statutory &amp; Small Business Authorities:{' '}
          <a
            href="https://www.score.org/articles/11-tips-handling-late-paying-customers/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--purple-main)] underline hover:text-[var(--purple-dark)]"
          >
            SCORE Small Business Guidance
          </a>
          {' '}&bull;{' '}
          <a
            href="https://www.sba.gov/business-guide/launch-your-business/open-business-bank-account"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--purple-main)] underline hover:text-[var(--purple-dark)]"
          >
            SBA Bank Account Guidelines
          </a>
          {' '}&bull;{' '}
          <a
            href="https://www.nyc.gov/site/dca/workers/workersrights/freelancer-workers.page"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--purple-main)] underline hover:text-[var(--purple-dark)]"
          >
            NYC Freelance Isn&apos;t Free Act
          </a>
          {' '}&bull;{' '}
          <a
            href="https://labor.illinois.gov/laws-rules/legal/freelance-worker-protection-act"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--purple-main)] underline hover:text-[var(--purple-dark)]"
          >
            Illinois Freelance Worker Protection Act
          </a>
          {' '}&bull;{' '}
          <a
            href="https://wagesla.lacity.gov/sites/g/files/wph1941/files/2026-05/FWPO%20Fact%20Sheet%20ADA%20-%20English.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--purple-main)] underline hover:text-[var(--purple-dark)]"
          >
            California &amp; Los Angeles FWPO
          </a>
          .
        </p>
      </section>

      {/* Author EEAT Box */}
      <AuthorBox />
    </div>
  );
}
