import React from 'react';
import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';
import { ArticleFrontmatter } from '@/lib/types';

interface BlogCardProps {
  article: ArticleFrontmatter;
  featured?: boolean;
}

export default function BlogCard({ article, featured = false }: BlogCardProps) {
  return (
    <article
      className={`group flex flex-col justify-between rounded-2xl bg-white border border-[var(--border-color)] hover:border-[var(--purple-main)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-all overflow-hidden text-left ${
        featured ? 'md:col-span-2 lg:col-span-3' : ''
      }`}
    >
      <Link href={`/blog/${article.slug}/`} className="block overflow-hidden relative aspect-[16/9] bg-[#F6F3EB]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <picture>
          <source
            srcSet={(article.cover || '/images/guides/1-prompt-content-system.png').replace(/\.(png|jpg|jpeg)$/, '.webp')}
            type="image/webp"
          />
          <img
            src={article.cover || '/images/guides/1-prompt-content-system.png'}
            alt={article.coverAlt || article.title}
            width={640}
            height={360}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </picture>
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-xs text-[var(--purple-main)] shadow-xs border border-[var(--border-color)]">
            {article.category}
          </span>
          {article.featured && (
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[var(--primary-yellow)] text-[var(--text-dark)] shadow-xs">
              Featured
            </span>
          )}
        </div>
      </Link>

      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2.5">
          <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] font-medium">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[var(--text-light)]" />
              <span>{article.readingTime || 5} min read</span>
            </span>
            <span>&bull;</span>
            <span>{article.date}</span>
          </div>

          <h3 className="font-heading font-bold text-base sm:text-lg text-[var(--text-dark)] group-hover:text-[var(--purple-main)] transition-colors leading-snug line-clamp-2">
            <Link href={`/blog/${article.slug}/`}>{article.title}</Link>
          </h3>

          <p className="text-xs sm:text-sm text-[var(--text-muted)] line-clamp-2 leading-relaxed">
            {article.description}
          </p>
        </div>

        <div className="pt-3 border-t border-[var(--border-color)] flex items-center justify-between text-xs">
          <span className="text-[var(--text-muted)] font-medium">
            By <strong className="text-[var(--text-dark)]">{article.author}</strong>
          </span>
          <Link
            href={`/blog/${article.slug}/`}
            className="inline-flex items-center gap-1 font-bold text-[var(--purple-main)] group-hover:translate-x-1 transition-transform"
          >
            <span>Read Blueprint</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
