import fs from 'fs';
import path from 'path';
import { CORNERSTONE_ARTICLES_META } from '../data/cornerstone-meta';
import { TOPIC_PILLARS } from '../data/topics';
import { PRODUCTS } from '../data/products';
import { RESOURCES } from '../data/resources';
import { TOOLS } from '../data/tools';

interface SearchIndexItem {
  title: string;
  description: string;
  url: string;
  category: string;
  type: 'guide' | 'topic' | 'product' | 'resource' | 'tool';
  tags: string[];
}

export function compileSearchIndex(): SearchIndexItem[] {
  const items: SearchIndexItem[] = [];

  // 1. Index Registered TSX Articles
  const articles = CORNERSTONE_ARTICLES_META;
  for (const article of articles) {
    items.push({
      title: article.title,
      description: article.description,
      url: `/blog/${article.slug}/`,
      category: article.category,
      type: 'guide',
      tags: article.tags,
    });
  }

  // 2. Index The 5 Strategic Pillars
  for (const pillar of Object.values(TOPIC_PILLARS)) {
    items.push({
      title: pillar.title,
      description: pillar.description,
      url: `/topics/${pillar.slug}/`,
      category: pillar.slug,
      type: 'topic',
      tags: [pillar.categoryName, 'knowledge-pillar', 'systems'],
    });
  }

  // 3. Index Products
  for (const prod of PRODUCTS) {
    items.push({
      title: prod.title,
      description: prod.tagline,
      url: `/products/${prod.slug}/`,
      category: prod.categorySlug,
      type: 'product',
      tags: ['notion-template', prod.tier, prod.badge],
    });
  }

  // 4. Index Resources
  for (const res of RESOURCES) {
    items.push({
      title: res.title,
      description: res.tagline,
      url: `/resources/${res.slug}/`,
      category: res.categorySlug,
      type: 'resource',
      tags: ['notion-template', 'systems', res.badge],
    });
  }

  // 5. Index Software Tools
  for (const tool of TOOLS) {
    items.push({
      title: tool.name,
      description: tool.tagline,
      url: `/tools/${tool.slug}/`,
      category: tool.categorySlug,
      type: 'tool',
      tags: ['software-review', tool.category, tool.pricingTier],
    });
  }

  return items;
}

// Ensure public/data directory exists
const outputDir = path.join(process.cwd(), 'public', 'data');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const outputPath = path.join(outputDir, 'search-index.json');
const indexData = compileSearchIndex();
fs.writeFileSync(outputPath, JSON.stringify(indexData), 'utf-8');

console.log(`Successfully compiled search index to ${outputPath} (${indexData.length} items)`);
