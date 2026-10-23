'use client';

import React, { useEffect, useState } from 'react';
import { ListFilter, ChevronRight } from 'lucide-react';

interface TOCItem {
  id: string;
  text: string;
}

interface TOCProps {
  initialHeadings?: TOCItem[];
}

export default function TableOfContents({ initialHeadings = [] }: TOCProps) {
  const [headings, setHeadings] = useState<TOCItem[]>(initialHeadings);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Find all H2 headings inside the article body
    const articleBody = document.querySelector('.prose');
    if (!articleBody) return;

    const h2Elements = articleBody.querySelectorAll('h2');
    const items: TOCItem[] = [];

    h2Elements.forEach((h2, index) => {
      // Ensure heading has an ID
      if (!h2.id) {
        const generatedId = h2.textContent
          ?.toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-') || `section-${index}`;
        h2.id = generatedId;
      }

      items.push({
        id: h2.id,
        text: h2.textContent || `Section ${index + 1}`,
      });
    });

    setHeadings(items);

    // Intersection observer to track active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-80px 0% -60% 0%',
        threshold: 0,
      }
    );

    h2Elements.forEach((h2) => observer.observe(h2));

    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <nav
      aria-label="Table of Contents"
      className="my-8 p-5 sm:p-6 rounded-2xl border border-[var(--border-color)] bg-white shadow-xs text-left not-prose"
    >
      <div className="flex items-center gap-2 pb-3 border-b border-[var(--border-color)] text-xs font-bold text-[var(--purple-main)] uppercase tracking-wider">
        <ListFilter className="w-4 h-4" />
        <span>Quick Guide Navigation</span>
      </div>

      <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
        {headings.map((item, idx) => {
          const isActive = activeId === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`flex items-center gap-2 py-1.5 px-2.5 rounded-lg transition-all ${
                isActive
                  ? 'bg-[var(--purple-light)] text-[var(--purple-main)] font-bold'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-dark)] hover:bg-[#FAF8F2]'
              }`}
            >
              <span className="font-mono text-[11px] opacity-60 flex-shrink-0">
                0{idx + 1}.
              </span>
              <span className="truncate flex-1">{item.text}</span>
              <ChevronRight className="w-3.5 h-3.5 opacity-40 flex-shrink-0" />
            </a>
          );
        })}
      </div>
    </nav>
  );
}
