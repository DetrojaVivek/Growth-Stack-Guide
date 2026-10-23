import React from 'react';
import { GitFork, ArrowRight } from 'lucide-react';

interface DecisionBranch {
  condition: string;
  recommendation: string;
  rationale: string;
  tag?: string;
}

interface DecisionTreeProps {
  title: string;
  description?: string;
  branches: DecisionBranch[];
}

export default function DecisionTree({
  title,
  description,
  branches,
}: DecisionTreeProps) {
  return (
    <div className="my-8 p-6 sm:p-7 rounded-2xl bg-white border border-[var(--border-color)] shadow-[var(--shadow-sm)] text-left space-y-4">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-xl bg-[var(--purple-light)] text-[var(--purple-main)] flex items-center justify-center flex-shrink-0">
          <GitFork className="w-4 h-4" />
        </div>
        <div>
          <h3 className="font-heading font-extrabold text-base sm:text-lg text-[var(--text-dark)]">
            {title}
          </h3>
          {description && (
            <p className="text-xs text-[var(--text-muted)] mt-0.5">{description}</p>
          )}
        </div>
      </div>

      <div className="space-y-3 pt-2">
        {branches.map((branch, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl bg-[#FAF8F2] border border-[var(--border-color)] space-y-2"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[var(--text-dark)]">
                <span className="text-[var(--purple-main)] uppercase tracking-wider text-[11px] font-extrabold">
                  IF:
                </span>
                <span>{branch.condition}</span>
              </div>
              {branch.tag && (
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-white text-[var(--text-muted)] border border-[var(--border-color)] self-start sm:self-auto">
                  {branch.tag}
                </span>
              )}
            </div>

            <div className="flex items-start gap-2 pt-1 border-t border-[var(--border-color)] text-xs sm:text-sm text-[var(--purple-main)] font-bold">
              <ArrowRight className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span>{branch.recommendation}</span>
            </div>

            <p className="text-xs text-[var(--text-muted)] leading-relaxed pl-6">
              {branch.rationale}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
