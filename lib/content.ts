import { Article } from './types';
import { getAllArticles as getAllTsxMetas } from './content-registry';
import { getAllGuidesFromData, getGuideBySlugFromData } from '@/data/guides';
import { getTopicPillarBySlug } from '@/data/topics';

export function ensureContentDirectoryExists(): void {
  // Maintained for backward compatibility
}

export function getAllArticles(): Article[] {
  // 1. Convert TSX cornerstone articles into Article interface
  const tsxArticles: Article[] = getAllTsxMetas().map((meta) => {
    const pillar = getTopicPillarBySlug(meta.category);
    return {
      slug: meta.slug,
      frontmatter: {
        title: meta.title,
        description: meta.description,
        slug: meta.slug,
        date: meta.date,
        updated: meta.updatedAt,
        author: meta.author,
        authorSlug: 'about',
        category: pillar?.title || meta.category,
        categorySlug: meta.category,
        tags: meta.tags,
        cover: meta.featuredImage || '/images/guides/freelance-client-onboarding-portal-crm.jpg',
        coverAlt: meta.title,
        featured: meta.depthLevel >= 4,
        readingTime: meta.readingTime,
        difficulty: meta.depthLevel <= 2 ? 'Beginner' : meta.depthLevel <= 4 ? 'Intermediate' : 'Advanced',
      },
      content: meta.description,
    };
  });

  // 2. Fetch existing legacy guides from data/guides
  const legacyGuides = getAllGuidesFromData();
  const existingSlugs = new Set(tsxArticles.map((a) => a.slug));

  // 3. Add legacy guides if their slug is not already present
  const combined = [...tsxArticles];
  for (const guide of legacyGuides) {
    if (!existingSlugs.has(guide.slug)) {
      combined.push(guide);
    }
  }

  return combined;
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const all = getAllArticles();
  const found = all.find((a) => a.slug === slug);
  if (found) return found;

  const legacy = getGuideBySlugFromData(slug);
  return legacy || null;
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  const all = getAllArticles();
  return all.filter((a) => a.frontmatter.categorySlug === categorySlug);
}

export function getRelatedArticles(currentSlug: string, categorySlug: string, limit = 3): Article[] {
  const all = getAllArticles();
  const sameCategory = all.filter(
    (a) => a.slug !== currentSlug && a.frontmatter.categorySlug === categorySlug
  );
  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }
  const others = all.filter(
    (a) => a.slug !== currentSlug && a.frontmatter.categorySlug !== categorySlug
  );
  return [...sameCategory, ...others].slice(0, limit);
}
