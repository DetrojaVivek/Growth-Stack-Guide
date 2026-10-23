import { Article } from '@/lib/types';

export const the50AiPromptVaultForCreatorsGuide: Article = {
  slug: 'the-50-ai-prompt-vault-for-creators',
  frontmatter: {
    title: 'The 50+ Field-Tested AI Prompt Vault for Creators & Solopreneurs',
    description: 'A categorized master vault of 50 field-tested prompt chains for Claude and ChatGPT to generate high-converting hooks, draft newsletters, and batch content.',
    slug: 'the-50-ai-prompt-vault-for-creators',
    date: '2026-10-01',
    updated: '2026-10-01',
    author: 'Vivek',
    authorSlug: 'vivek',
    category: 'AI Productivity Systems',
    categorySlug: 'ai-productivity',
    tags: [
      'AI Prompts',
      'Claude',
      'ChatGPT',
      'Content Batching',
      'Solopreneur',
    ],
    cover: '/images/guides/50-ai-prompt-vault-claude-chatgpt.jpg',
    coverAlt: '50+ Field-Tested AI Prompt Vault dashboard for Claude and ChatGPT showing headline hooks and newsletter prompts',
    featured: true,
    readingTime: 12,
    difficulty: 'Beginner',
    quickAnswer: 'Effective AI prompt engineering requires four non-negotiable elements: Context, Role Definition, Negative Constraints (banning AI clichés), and Explicit Output Formatting. Rather than asking AI to "write a post", provide a target audience profile, reading grade level, and an exact paragraph structure to receive human-sounding first drafts.',
    faqs: [
      {
        question: 'Which AI models work best with these 50 prompts?',
        answer: 'These prompt chains are tested primarily on Claude 3.5 Sonnet and ChatGPT Plus (GPT-4o), but they function reliably on free ChatGPT and Google Gemini as well.',
      },
      {
        question: 'How do I prevent AI from sounding generic or robotic?',
        answer: 'Always use negative constraint prompts that explicitly forbid words like "delve into", "tapestry", "revolutionize", and "game-changing", while enforcing a specific conversational reading grade level.',
      },
      {
        question: 'Can I save these prompts directly into Notion?',
        answer: 'Yes. All 50 prompt chains are formatted in standard Markdown blocks ready to be pasted directly into your Notion workspace.',
      },
    ],
  },
  content: '',
  blocks: [
    {
      type: 'heading',
      level: 2,
      id: 'why-most-ai-prompts-fail-solo-creators',
      badge: 'PROMPT ARCHITECTURE',
      text: 'Why Most AI Prompts Fail Solo Creators',
    },
    {
      type: 'paragraph',
      content: 'The majority of creators test AI with vague, one-sentence instructions: *"Write a 1,000-word newsletter about productivity."*',
    },
    {
      type: 'paragraph',
      content: 'The result is always the same: flat, generic, robotic text overflowing with cliches like *"In today\'s fast-paced digital world"* and *"Unlock your true potential."* Your audience recognizes automated AI filler immediately and clicks away.',
    },
    {
      type: 'paragraph',
      content: 'To get elite, authentic outputs from Large Language Models like Claude 3.5 Sonnet or ChatGPT, you must treat the model as a **junior research assistant with zero context**. You must specify:',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        '**The Exact Operational Role:** Who the AI is speaking as.',
        '**The Target Audience Persona:** Who specifically is reading (e.g., a solo freelance designer in the US working 50+ hours a week).',
        '**Negative Constraints:** Explicitly forbidding corporate jargon, generic transitions, and hollow adjectives.',
        '**Few-Shot Structure:** Providing the exact structural template of the expected response.',
      ],
    },
    {
      type: 'image',
      src: '/images/guides/50-ai-prompt-vault-claude-chatgpt.jpg',
      alt: 'Claude and ChatGPT prompt chain workflow interface',
      caption: 'The 4-part prompt engineering architecture: Role, Context, Negative Constraints, and Structured Output.',
      figureBadge: 'Figure 1: Prompt Anatomy',
    },
    {
      type: 'heading',
      level: 2,
      id: 'category-1-high-converting-headline-hooks',
      badge: 'CATEGORY 1',
      text: 'Category 1: High-Converting Headline & Hook Formulas (Prompts 1–10)',
    },
    {
      type: 'heading',
      level: 3,
      id: 'prompt-01',
      text: 'Prompt 01: The Direct Counter-Intuitive Hook',
    },
    {
      type: 'code',
      language: 'text',
      code: `Role: Direct-response copywriter for a digital productivity publication.
Context: I am writing a guide about [TOPIC].
Task: Generate 10 contrasting, counter-intuitive hooks for [PLATFORM: Pinterest/YouTube/Twitter].
Constraint: Avoid sensational clickbait. Each hook must contrast a common industry belief with a practical, calmer alternative.
Example format: "Stop doing [COMMON HABIT]. Here is what 6-figure solo creators do instead."`,
    },
    {
      type: 'heading',
      level: 3,
      id: 'prompt-02',
      text: 'Prompt 02: The Specific Number Proof Hook',
    },
    {
      type: 'code',
      language: 'text',
      code: `Task: Write 7 data-anchored hooks explaining how [SYSTEM] eliminates [NUMBER] hours of weekly administrative friction.
Target Audience: US-based freelancers and solo digital operators.
Tone: Calm, analytical, authoritative. No exclamation marks.`,
    },
    {
      type: 'heading',
      level: 3,
      id: 'prompt-03',
      text: 'Prompt 03: The "Old Way vs. New Way" Tension Hook',
    },
    {
      type: 'code',
      language: 'text',
      code: `Analyze the friction point of [PROBLEM: scattered task notes]. Write 5 hooks that frame the Old Way (chaotic, reactive, 50 open tabs) against the Growth Stack Way (centralized second brain, automated priority queue).`,
    },
    {
      type: 'heading',
      level: 3,
      id: 'prompt-04',
      text: 'Prompt 04: The Question-Based Curiosity Hook',
    },
    {
      type: 'code',
      language: 'text',
      code: `Create 6 curiosity-inducing question hooks about [TOPIC] that trigger immediate self-reflection without sounding manipulative.`,
    },
    {
      type: 'heading',
      level: 3,
      id: 'prompt-05',
      text: 'Prompt 05: The "Cost of Inaction" Hook',
    },
    {
      type: 'code',
      language: 'text',
      code: `Draft 5 hooks highlighting the hidden cost of ignoring [PROBLEM: chaotic client onboarding]. Focus on lost revenue and mental burnout.`,
    },
    {
      type: 'heading',
      level: 3,
      id: 'prompt-06',
      text: 'Prompt 06: The Beginner Roadmap Hook',
    },
    {
      type: 'code',
      language: 'text',
      code: `Write 5 step-by-step roadmap hooks for someone starting [SKILL: Notion database design] with zero coding background.`,
    },
    {
      type: 'heading',
      level: 3,
      id: 'prompt-07',
      text: 'Prompt 07: The 3-Mistake Warning Hook',
    },
    {
      type: 'code',
      language: 'text',
      code: `Draft 6 hooks framing the "3 fatal mistakes" creators make when [ACTION: launching digital products].`,
    },
    {
      type: 'heading',
      level: 3,
      id: 'prompt-08',
      text: 'Prompt 08: The Minimalist Workflow Hook',
    },
    {
      type: 'code',
      language: 'text',
      code: `Write 5 hooks emphasizing minimalism: How to achieve [RESULT] with zero employees and a $0 software budget.`,
    },
    {
      type: 'heading',
      level: 3,
      id: 'prompt-09',
      text: 'Prompt 09: The Case Study Breakdown Hook',
    },
    {
      type: 'code',
      language: 'text',
      code: `Draft 5 headline hooks breaking down how [SPECIFIC SYSTEM] helped a solo freelancer transition from chaotic hourly work to structured retainer packages.`,
    },
    {
      type: 'heading',
      level: 3,
      id: 'prompt-10',
      text: 'Prompt 10: The High-RPM Pinterest Search Hook',
    },
    {
      type: 'code',
      language: 'text',
      code: `Generate 10 keyword-rich Pinterest pin titles targeting US search volume for [KEYWORD]. Must include year (2026) and actionable benefit.`,
    },
    {
      type: 'heading',
      level: 2,
      id: 'category-2-newsletter-content-scripting',
      badge: 'CATEGORY 2',
      text: 'Category 2: Newsletter & Content Scripting Chains (Prompts 11–20)',
    },
    {
      type: 'heading',
      level: 3,
      id: 'prompt-11',
      text: 'Prompt 11: The 15-Minute Newsletter First Draft',
    },
    {
      type: 'code',
      language: 'text',
      code: `Role: Senior newsletter editor for Growth Stack Guide.
Topic: [INSERT TOPIC].
Audience: Solopreneurs and digital creators seeking actionable systems.
Structure:
1. Hook: A personal relatable observation about daily operational chaos (75 words).
2. The Core Shift: Why the standard advice fails (100 words).
3. The 3-Step Practical Blueprint: Bulleted actionable steps with concrete examples (250 words).
4. One Actionable Takeaway for this week (50 words).
Negative Constraints: Do not use the words "delve", "tapestry", "revolutionize", "game-changer", or "in conclusion". Write in short 1-2 sentence paragraphs.`,
    },
    {
      type: 'heading',
      level: 3,
      id: 'prompt-12',
      text: 'Prompt 12: The Short-Form Video Script (Under 60 Seconds)',
    },
    {
      type: 'code',
      language: 'text',
      code: `Create a 130-word video script for a vertical video (Reels/Shorts).
Format:
- 0 to 3s: Visual & verbal pattern interrupt hook.
- 4 to 20s: The agitation of daily operational chaos.
- 21 to 45s: The 3-part Notion solution.
- 46 to 60s: Clear, calm CTA to duplicate the free Notion kit in the bio.`,
    },
    {
      type: 'heading',
      level: 3,
      id: 'prompt-13',
      text: 'Prompt 13: The Problem-Agitation-Solution (PAS) Email',
    },
    {
      type: 'code',
      language: 'text',
      code: `Draft an educational newsletter segment using the PAS framework focused on [PROBLEM: client scope creep]. Provide an exact email script freelancers can copy to set boundaries with difficult clients.`,
    },
    {
      type: 'heading',
      level: 3,
      id: 'prompt-14',
      text: 'Prompt 14: The "Behind-the-Scenes" Workflow Breakdown',
    },
    {
      type: 'code',
      language: 'text',
      code: `Write an authentic behind-the-scenes walkthrough of how I plan a week of content in a single 90-minute Sunday session using Notion and Claude.`,
    },
    {
      type: 'heading',
      level: 3,
      id: 'prompt-15',
      text: 'Prompt 15: The Contrarian Perspective Editorial',
    },
    {
      type: 'code',
      language: 'text',
      code: `Draft a 400-word editorial arguing why "more tools" makes creators slower, not faster. Advocate for a minimalist 3-tool tech stack (Notion, Claude, Google Docs).`,
    },
    {
      type: 'heading',
      level: 3,
      id: 'prompt-16',
      text: 'Prompt 16: The Step-by-Step Tutorial Email',
    },
    {
      type: 'code',
      language: 'text',
      code: `Write an email tutorial teaching readers how to create relational database rollups in Notion in 4 simple steps.`,
    },
    {
      type: 'heading',
      level: 3,
      id: 'prompt-17',
      text: 'Prompt 17: The Weekly Digest Curated Wrap-Up',
    },
    {
      type: 'code',
      language: 'text',
      code: `Create a clean newsletter layout summarizing: 1 core system blueprint, 2 recommended AI prompt chains, and 1 quote on digital leverage.`,
    },
    {
      type: 'heading',
      level: 3,
      id: 'prompt-18',
      text: 'Prompt 18: The Direct Product Bridge Email',
    },
    {
      type: 'code',
      language: 'text',
      code: `Draft an email introducing the $19 Creator OS template. The email must deliver 80% free value on content batching before offering the paid template as the pre-built shortcut.`,
    },
    {
      type: 'heading',
      level: 3,
      id: 'prompt-19',
      text: 'Prompt 19: The Interview/Case Study Synthesis',
    },
    {
      type: 'code',
      language: 'text',
      code: `Condense this raw transcript into a structured 3-lesson summary highlighting actionable productivity takeaways.`,
    },
    {
      type: 'heading',
      level: 3,
      id: 'prompt-20',
      text: 'Prompt 20: The FAQs Objection-Busting Email',
    },
    {
      type: 'code',
      language: 'text',
      code: `Address the 3 biggest reader objections regarding [TOPIC: building a Second Brain in Notion]: 1. Takes too long to set up, 2. Too complicated, 3. Hard to maintain.`,
    },
    {
      type: 'heading',
      level: 2,
      id: 'category-3-seo-content-outlining',
      badge: 'CATEGORY 3',
      text: 'Category 3: SEO Content Outlining & GEO Frameworks (Prompts 21–30)',
    },
    {
      type: 'heading',
      level: 3,
      id: 'prompt-21',
      text: 'Prompt 21: The Answer-First GEO Blueprint',
    },
    {
      type: 'code',
      language: 'text',
      code: `Role: Search Engine Optimization Architect.
Target Query: [INSERT US SEARCH PHRASE].
Task: Generate an Answer-First article outline.
Requirements:
- A 60-word bolded Quick Answer definition to capture Google AI Overviews.
- Comprehensive H2 structure with semantic entity coverage.
- Structured data comparison table comparing 3 common approaches.
- 4 practical FAQs matching People Also Ask queries.`,
    },
    {
      type: 'heading',
      level: 3,
      id: 'prompt-22',
      text: 'Prompt 22: Semantic Entity Keyword Expansion',
    },
    {
      type: 'code',
      language: 'text',
      code: `Analyze the topic [TOPIC]. List the 15 most important technical entities, related terms, and user sub-intents that Google expects to see in a comprehensive guide.`,
    },
    {
      type: 'heading',
      level: 3,
      id: 'prompt-23',
      text: 'Prompt 23: The 3-Way Software Comparison Outline',
    },
    {
      type: 'code',
      language: 'text',
      code: `Create an objective comparison outline evaluating Tool A vs Tool B vs Tool C for solo creators. Include: Setup time, price-to-value ratio, learning curve, and clear "Best for X" verdicts.`,
    },
    {
      type: 'heading',
      level: 3,
      id: 'prompt-24',
      text: 'Prompt 24: Step-by-Step SOP Framework',
    },
    {
      type: 'code',
      language: 'text',
      code: `Convert this chaotic operational process into a standardized operating procedure (SOP) with numbering, prerequisite checklists, and failure-point warnings.`,
    },
    {
      type: 'heading',
      level: 3,
      id: 'prompt-25',
      text: 'Prompt 25: Search Intent Dissection',
    },
    {
      type: 'code',
      language: 'text',
      code: `Break down the search intent behind the query [QUERY]. Detail: What problem the user is experiencing right now, what immediate solution they expect, and what template would best help them.`,
    },
    {
      type: 'heading',
      level: 3,
      id: 'prompt-26',
      text: 'Prompt 26: The "Common Mistakes" Content Cluster',
    },
    {
      type: 'code',
      language: 'text',
      code: `Draft an outline for "7 Common Mistakes Creators Make When Setting Up Notion (And How to Fix Them)". Include tangible solutions for each mistake.`,
    },
    {
      type: 'heading',
      level: 3,
      id: 'prompt-27',
      text: 'Prompt 27: Meta Title & Description Generator',
    },
    {
      type: 'code',
      language: 'text',
      code: `Generate 5 click-worthy meta titles (under 60 characters) and meta descriptions (under 155 characters) for [ARTICLE TOPIC]. Must include target keyword and an actionable hook.`,
    },
    {
      type: 'heading',
      level: 3,
      id: 'prompt-28',
      text: 'Prompt 28: Interactive FAQ Accordion Generator',
    },
    {
      type: 'code',
      language: 'text',
      code: `Write 5 clear, concise FAQs for an article about [TOPIC]. Ensure answers are under 50 words each and answer direct operational questions.`,
    },
    {
      type: 'heading',
      level: 3,
      id: 'prompt-29',
      text: 'Prompt 29: Key Takeaways Summary Generator',
    },
    {
      type: 'code',
      language: 'text',
      code: `Read the following article text and extract the top 5 high-impact takeaways formatted as punchy bullet points for skimming readers.`,
    },
    {
      type: 'heading',
      level: 3,
      id: 'prompt-30',
      text: 'Prompt 30: Outbound Authority Source Citations',
    },
    {
      type: 'code',
      language: 'text',
      code: `Suggest 3 authoritative, non-competing official sources (e.g., Notion API docs, FTC guidelines, Harvard Business Review) to cite in an article about [TOPIC].`,
    },
    {
      type: 'heading',
      level: 2,
      id: 'category-4-content-repurposing',
      badge: 'CATEGORY 4',
      text: 'Category 4: Content Repurposing & Multi-Channel Batching (Prompts 31–40)',
    },
    {
      type: 'heading',
      level: 3,
      id: 'prompt-31',
      text: 'Prompt 31: 1 Long-Form Guide into 5 Social Posts',
    },
    {
      type: 'code',
      language: 'text',
      code: `Analyze this 1,200-word guide on [TOPIC]. Sift out 5 distinct insights and reformat them into:
1. One bulleted actionable post for LinkedIn.
2. Two Pinterest text-overlay pin scripts.
3. One standalone newsletter tip.
4. One short Q&A post.`,
    },
    {
      type: 'heading',
      level: 3,
      id: 'prompt-32',
      text: 'Prompt 32: Visual Infographic Scripting',
    },
    {
      type: 'code',
      language: 'text',
      code: `Extract a 4-step flowchart from this article that can be designed into a clean Canva carousel or infographic.`,
    },
    {
      type: 'heading',
      level: 3,
      id: 'prompt-33',
      text: 'Prompt 33: The Twitter/X Deep Dive Thread',
    },
    {
      type: 'code',
      language: 'text',
      code: `Convert this operational guide into an 8-tweet educational thread.
Format:
- Tweet 1: Clear, quantifiable hook.
- Tweets 2-7: 1 actionable step per tweet with tangible examples.
- Tweet 8: Recap + direct link to the free Notion template.`,
    },
    {
      type: 'heading',
      level: 3,
      id: 'prompt-34',
      text: 'Prompt 34: The YouTube Video Description & Timestamp Builder',
    },
    {
      type: 'code',
      language: 'text',
      code: `Draft a high-converting YouTube description for a video about [TOPIC]. Include video summary, timestamps, social links, and an FTC-compliant affiliate disclaimer.`,
    },
    {
      type: 'heading',
      level: 3,
      id: 'prompt-35',
      text: 'Prompt 35: The Pinterest Carousel Script',
    },
    {
      type: 'code',
      language: 'text',
      code: `Write a 5-slide Pinterest carousel script: Slide 1 (Hook), Slides 2-4 (Actionable Tips), Slide 5 (Freebie Call to Action).`,
    },
    {
      type: 'heading',
      level: 3,
      id: 'prompt-36',
      text: 'Prompt 36: Audio Podcast / Voiceover Outline',
    },
    {
      type: 'code',
      language: 'text',
      code: `Convert this technical guide into a conversational 5-minute solo voiceover script with natural transitions and conversational pacing.`,
    },
    {
      type: 'heading',
      level: 3,
      id: 'prompt-37',
      text: 'Prompt 37: The "Stat of the Day" Micro-Post',
    },
    {
      type: 'code',
      language: 'text',
      code: `Extract one startling productivity metric from this text and write a 100-word commentary on why solo operators must address it today.`,
    },
    {
      type: 'heading',
      level: 3,
      id: 'prompt-38',
      text: 'Prompt 38: The Case Study Transformation',
    },
    {
      type: 'code',
      language: 'text',
      code: `Reframe this list of tips into a narrative case study showing how "Alex, a freelance designer" fixed their schedule using these exact steps.`,
    },
    {
      type: 'heading',
      level: 3,
      id: 'prompt-39',
      text: 'Prompt 39: Quick Reference Cheat Sheet',
    },
    {
      type: 'code',
      language: 'text',
      code: `Condense this entire guide into a 1-page Markdown quick reference cheat sheet with bolded key rules and shortcuts.`,
    },
    {
      type: 'heading',
      level: 3,
      id: 'prompt-40',
      text: 'Prompt 40: Community Discussion Prompt',
    },
    {
      type: 'code',
      language: 'text',
      code: `Write 3 engaging discussion questions based on this article to post in creator communities or Facebook groups without sounding promotional.`,
    },
    {
      type: 'heading',
      level: 2,
      id: 'category-5-freelance-crm-prompts',
      badge: 'CATEGORY 5',
      text: 'Category 5: Freelance CRM & Client Communication Prompts (Prompts 41–50)',
    },
    {
      type: 'heading',
      level: 3,
      id: 'prompt-41',
      text: 'Prompt 41: The Scope Creep Boundary Setter',
    },
    {
      type: 'code',
      language: 'text',
      code: `Role: Professional client manager for a solo freelancer.
Situation: A client is asking for additional revisions and features outside our agreed scope.
Task: Write a firm, respectful email that acknowledges the request, explains that it falls outside the current project scope, and provides an estimate for the additional work.
Tone: Warm, collaborative, uncompromising on boundaries.`,
    },
    {
      type: 'heading',
      level: 3,
      id: 'prompt-42',
      text: 'Prompt 42: The 24-Hour Client Onboarding Kickoff',
    },
    {
      type: 'code',
      language: 'text',
      code: `Draft a warm, professional client welcome email that shares the link to their private Notion project portal and outlines the 3 immediate next steps.`,
    },
    {
      type: 'heading',
      level: 3,
      id: 'prompt-43',
      text: 'Prompt 43: The Friendly Invoice Payment Reminder',
    },
    {
      type: 'code',
      language: 'text',
      code: `Write a 3-stage invoice reminder sequence:
1. Friendly reminder 3 days before due date.
2. Due date notice with payment links.
3. Polite but firm past-due notice (5 days overdue) detailing paused deliverables.`,
    },
    {
      type: 'heading',
      level: 3,
      id: 'prompt-44',
      text: 'Prompt 44: The 1-Page Proposal Scope Template',
    },
    {
      type: 'code',
      language: 'text',
      code: `Generate a clean, plain-English freelance proposal outline covering: Project Objective, In-Scope Deliverables, Out-of-Scope Exclusions, Timeline Milestones, and Payment Terms.`,
    },
    {
      type: 'heading',
      level: 3,
      id: 'prompt-45',
      text: 'Prompt 45: The Client Testimonial Extraction Prompt',
    },
    {
      type: 'code',
      language: 'text',
      code: `Write a 4-question email sent to happy clients upon project completion to collect actionable, results-oriented testimonials without making them write essays.`,
    },
    {
      type: 'heading',
      level: 3,
      id: 'prompt-46',
      text: 'Prompt 46: The Retainer Upsell Pitch',
    },
    {
      type: 'code',
      language: 'text',
      code: `Draft an email pitch to an existing one-off project client offering a monthly operational retainer package to maintain and optimize their systems.`,
    },
    {
      type: 'heading',
      level: 3,
      id: 'prompt-47',
      text: 'Prompt 47: The Price Increase Notification',
    },
    {
      type: 'code',
      language: 'text',
      code: `Write a transparent, respectful email notifying long-term clients of an upcoming rate adjustment based on expanded operational capacity.`,
    },
    {
      type: 'heading',
      level: 3,
      id: 'prompt-48',
      text: 'Prompt 48: The Meeting Agenda Optimizer',
    },
    {
      type: 'code',
      language: 'text',
      code: `Draft a tight 20-minute client check-in agenda that keeps meetings focused on decisions rather than status updates.`,
    },
    {
      type: 'heading',
      level: 3,
      id: 'prompt-49',
      text: 'Prompt 49: The Difficult Client Offboarding Email',
    },
    {
      type: 'code',
      language: 'text',
      code: `Draft a polite, professional contract completion email that wraps up final deliverables, transfers ownership assets, and concludes the engagement amicably.`,
    },
    {
      type: 'heading',
      level: 3,
      id: 'prompt-50',
      text: 'Prompt 50: The Referral Request Workflow',
    },
    {
      type: 'code',
      language: 'text',
      code: `Write a low-friction email asking past satisfied clients for warm introductions to other solopreneurs in their network.`,
    },
    {
      type: 'heading',
      level: 2,
      id: 'how-to-deploy-these-prompts-in-daily-workflow',
      badge: 'DEPLOYMENT STRATEGY',
      text: 'How to Deploy These Prompts in Your Daily Workflow',
    },
    {
      type: 'paragraph',
      content: 'Saving 50 prompts is useless if they stay buried in your browser bookmarks. To operationalize this vault:',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        '**Store Them in Your Notion Second Brain:** Create a dedicated "Prompt Vault" database with tags for `Hook`, `Newsletter`, `SEO`, and `Clients`.',
        '**Assign Keyboard Shortcuts or Text Expanders:** For prompts you use daily (like Prompt 01 or Prompt 41), assign them to snippets using tools like Raycast or Alfred.',
        '**Iterate Your Voice:** As you find specific phrasings that resonate with your US audience, update the negative constraints to keep your brand voice consistent.',
      ],
    },
    {
      type: 'callout',
      tone: 'tip',
      title: 'Voice Calibration Tip',
      content: 'Whenever Claude produces an answer that sounds slightly too stiff or robotic, reply with: "Rewrite this at an 8th-grade reading level, make the sentences punchier, and remove any corporate buzzwords." The revision will immediately sound 3x more human.',
    },
  ],
};
