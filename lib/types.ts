export interface ArticleFrontmatter {
  title: string;
  description: string;
  slug: string;
  date: string;
  updated?: string;
  author: string;
  authorSlug: string;
  category: string;
  categorySlug: string;
  tags: string[];
  cover?: string;
  coverAlt?: string;
  featured?: boolean;
  readingTime?: number;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
  quickAnswer?: string;
  faqs?: Array<{ question: string; answer: string }>;
}

export interface GuideImageBlock {
  type: 'image';
  src: string;
  alt: string;
  caption?: string;
  figureBadge?: string;
  aspectRatio?: '16/9' | '4/3' | 'auto';
  border?: boolean;
}

export interface GuideHeadingBlock {
  type: 'heading';
  level: 2 | 3;
  id?: string;
  badge?: string;
  text: string;
}

export interface GuideParagraphBlock {
  type: 'paragraph';
  content: string;
}

export interface GuideListBlock {
  type: 'list';
  items: string[];
  ordered?: boolean;
  icon?: 'check' | 'cross' | 'bullet';
}

export interface GuideCalloutBlock {
  type: 'callout';
  calloutType?: 'tip' | 'warning' | 'quick-answer' | 'success';
  tone?: 'tip' | 'warning' | 'quick-answer' | 'success';
  title?: string;
  content: string;
}

export interface GuideEmailScriptBlock {
  type: 'email-script';
  title: string;
  to?: string;
  subject: string;
  body: string;
}

export interface GuideCodeBlock {
  type: 'code';
  title?: string;
  language?: string;
  code: string;
}

export interface GuideComparisonBlock {
  type: 'comparison';
  badge?: string;
  title: string;
  left: { title: string; badge?: string; items: string[] };
  right: { title: string; badge?: string; items: string[] };
}

export interface GuideKanbanBlock {
  type: 'kanban';
  columns: Array<{
    title: string;
    count?: number;
    dotColor?: string;
    cards: Array<{
      title: string;
      tag: string;
      tagColor?: string;
      strikethrough?: boolean;
    }>;
  }>;
}

export interface GuideChecklistBlock {
  type: 'checklist';
  title: string;
  badge?: string;
  items: Array<{
    title?: string;
    description?: string;
    label?: string;
    checked?: boolean;
  }>;
}

export interface GuideTableBlock {
  type: 'table';
  headers: string[];
  rows: Array<Array<string | { text: string; badge?: string; badgeColor?: string; isAction?: boolean }>>;
}

export type GuideBlock =
  | GuideImageBlock
  | GuideHeadingBlock
  | GuideParagraphBlock
  | GuideListBlock
  | GuideCalloutBlock
  | GuideEmailScriptBlock
  | GuideCodeBlock
  | GuideComparisonBlock
  | GuideKanbanBlock
  | GuideChecklistBlock
  | GuideTableBlock;

export interface Article {
  slug: string;
  frontmatter: ArticleFrontmatter;
  content: string;
  htmlContent?: string;
  blocks?: GuideBlock[];
}

export type TopicPillarSlug =
  | 'ai-productivity'
  | 'notion-systems'
  | 'freelancer-systems'
  | 'solopreneur-operations'
  | 'software-guides';

export type OriginalValueType =
  | 'framework'
  | 'workflow'
  | 'visual-blueprint'
  | 'comparison-matrix'
  | 'practical-example'
  | 'decision-tree'
  | 'checklist'
  | 'mistake-analysis';

export type ContentIntentLevel =
  | 'informational'
  | 'problem-solving'
  | 'implementation'
  | 'decision-making';

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  updatedAt?: string;
  author: 'Vivek';
  category: TopicPillarSlug;
  tags: string[];
  targetAudience: 'freelancer' | 'solopreneur' | 'both';
  problemSolved: string;
  intentLevel: ContentIntentLevel;
  depthLevel: 1 | 2 | 3 | 4 | 5;
  originalValueElements: OriginalValueType[];
  qualityScore: number;
  featuredImage?: string;
  readingTime: number;
  contentType: 'blog';
  relatedProducts?: string[];
  relatedResources?: string[];
  affiliateLinks?: string[];
}

export interface TopicPillar {
  slug: TopicPillarSlug;
  title: string;
  categoryName: string;
  description: string;
  longDescription: string;
  iconName: string;
  accentColor: string;
  accentBg: string;
  badge: string;
  blueprintCount: string;
  coverImage?: string;
  systemSOPs: string[];
  faqs: Array<{ question: string; answer: string }>;
}

export interface ProductItem {
  slug: string;
  title: string;
  tagline: string;
  price: number;
  priceDisplay: string;
  tier: 'Starter Pack' | 'Core System' | 'Value Bundle' | 'Full Agency OS' | 'Relationship CRM' | 'Onboarding Suite' | string;
  badge: string;
  badgeColor: string;
  badgeBg: string;
  coverImage: string;
  description: string;
  outcome: string;
  features: string[];
  includedDatabases: Array<{ name: string; description: string; count?: string }>;
  whoIsThisFor: string[];
  whoIsThisNotFor: string[];
  faqs: Array<{ question: string; answer: string }>;
  gumroadUrl: string;
  categorySlug: string;
  categoryName: string;
}

export interface ResourceItem {
  slug: string;
  title: string;
  tagline: string;
  badge: string;
  coverImage: string;
  description: string;
  modulesCount: string;
  features: string[];
  gumroadUrl: string;
  categorySlug: string;
  categoryName: string;
  faqs: Array<{ question: string; answer: string }>;
}

export interface ToolItem {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  categorySlug: string;
  pricingTier: string;
  pricingSummary: string;
  verifiedDate: string;
  affiliateUrl: string;
  logoUrl?: string;
  pros: string[];
  limitations: string[];
  bestFor: string;
  verdict: string;
  rating: number;
  faqs: Array<{ question: string; answer: string }>;
}

