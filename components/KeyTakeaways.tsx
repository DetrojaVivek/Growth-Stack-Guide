import React from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';

interface KeyTakeawaysProps {
  title?: string;
  points: string[];
}

export default function KeyTakeaways({
  title = 'Key Takeaways & Core Principles',
  points,
}: KeyTakeawaysProps) {
  return (
    <section className="my-6 sm:my-8 p-5 sm:p-6 rounded-2xl bg-white border-2 border-[var(--border-color)] shadow-[var(--shadow-sm)] space-y-3.5 text-left">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg bg-[var(--purple-light)] text-[var(--purple-main)] flex items-center justify-center">
          <Sparkles className="w-4 h-4" />
        </div>
        <h2 className="font-heading font-extrabold text-sm sm:text-base text-[var(--text-dark)] uppercase tracking-wider">
          {title}
        </h2>
      </div>

      <ul className="space-y-2.5">
        {points.map((point, idx) => (
          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-dark)] leading-relaxed">
            <CheckCircle2 className="w-4 h-4 text-[var(--color-success)] flex-shrink-0 mt-0.5" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
