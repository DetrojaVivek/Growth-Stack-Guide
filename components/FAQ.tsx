import React from 'react';
import { HelpCircle } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  items: FAQItem[];
}

export default function FAQ({
  title = 'Frequently Asked Questions',
  items,
}: FAQProps) {
  // Generate FAQPage JSON-LD schema
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <section className="my-10 space-y-4 text-left">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg bg-[var(--purple-light)] text-[var(--purple-main)] flex items-center justify-center">
          <HelpCircle className="w-4 h-4" />
        </div>
        <h2 className="font-heading font-extrabold text-lg sm:text-xl text-[var(--text-dark)]">
          {title}
        </h2>
      </div>

      <div className="space-y-3">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-white border border-[var(--border-color)] space-y-2 shadow-xs"
          >
            <h3 className="font-heading font-bold text-sm sm:text-base text-[var(--text-dark)]">
              {item.question}
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
