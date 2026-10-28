import React from 'react';
import dynamic from 'next/dynamic';
import type { BlogPostMeta, TopicPillarSlug } from '@/lib/types';
import {
  CORNERSTONE_ARTICLES_META,
  onboardingMeta,
  weeklyPlanningMeta,
  crmMeta,
  vsCrmMeta,
  solopreneurOsMeta,
  meetingNotesMeta,
  overdueInvoiceMeta,
  clientRecoveryMeta,
} from '@/data/cornerstone-meta';

// Code-split dynamic imports: each article's heavy JSX is isolated and only loaded on its specific page
const ClientOnboardingArticle = dynamic(() => import('@/content/blog/client-onboarding-system'), { ssr: true });
const AiWeeklyPlanningArticle = dynamic(() => import('@/content/blog/ai-weekly-planning-system'), { ssr: true });
const NotionFreelancerCrmArticle = dynamic(() => import('@/content/blog/notion-freelancer-crm'), { ssr: true });
const NotionVsCrmArticle = dynamic(() => import('@/content/blog/notion-vs-dedicated-crm'), { ssr: true });
const SolopreneurOsArticle = dynamic(() => import('@/content/blog/solopreneur-operations-os'), { ssr: true });
const MeetingNotesArticle = dynamic(() => import('@/content/blog/notion-ai-meeting-notes-action-items'), { ssr: true });
const OverdueInvoiceArticle = dynamic(() => import('@/content/blog/freelance-overdue-invoice-email-scripts'), { ssr: true });
const ClientRecoveryArticle = dynamic(() => import('@/content/blog/freelance-client-recovery-system-30-days'), { ssr: true });

export interface RegisteredArticle {
  Component: React.ComponentType;
  meta: BlogPostMeta;
}

export const BLOG_REGISTRY: Record<string, RegisteredArticle> = {
  'client-onboarding-system': { Component: ClientOnboardingArticle, meta: onboardingMeta },
  'ai-weekly-planning-system': { Component: AiWeeklyPlanningArticle, meta: weeklyPlanningMeta },
  'notion-freelancer-crm': { Component: NotionFreelancerCrmArticle, meta: crmMeta },
  'notion-vs-dedicated-crm': { Component: NotionVsCrmArticle, meta: vsCrmMeta },
  'solopreneur-operations-os': { Component: SolopreneurOsArticle, meta: solopreneurOsMeta },
  'notion-ai-meeting-notes-action-items': { Component: MeetingNotesArticle, meta: meetingNotesMeta },
  'freelance-overdue-invoice-email-scripts': { Component: OverdueInvoiceArticle, meta: overdueInvoiceMeta },
  'freelance-client-recovery-system-30-days': { Component: ClientRecoveryArticle, meta: clientRecoveryMeta },
};

export function getAllArticles(): BlogPostMeta[] {
  // Return distinct cornerstone articles from decoupled metadata
  return CORNERSTONE_ARTICLES_META;
}

export function getAllRegisteredSlugs(): string[] {
  return Object.keys(BLOG_REGISTRY);
}

export function getArticleBySlug(slug: string): RegisteredArticle | undefined {
  return BLOG_REGISTRY[slug];
}

export function getArticlesByCategory(category: TopicPillarSlug): BlogPostMeta[] {
  return getAllArticles().filter((a) => a.category === category);
}

export function getRelatedArticles(currentSlug: string, category: TopicPillarSlug, limit = 3): BlogPostMeta[] {
  const all = getAllArticles();
  const sameCategory = all.filter((a) => a.slug !== currentSlug && a.category === category);
  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }
  const others = all.filter((a) => a.slug !== currentSlug && a.category !== category);
  return [...sameCategory, ...others].slice(0, limit);
}
