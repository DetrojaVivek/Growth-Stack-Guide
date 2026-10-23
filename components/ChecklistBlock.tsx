'use client';

import React, { useState } from 'react';
import { CheckSquare, Square, RotateCcw } from 'lucide-react';

interface ChecklistItem {
  id?: string;
  text: string;
  description?: string;
}

interface ChecklistBlockProps {
  title?: string;
  items: ChecklistItem[];
}

export default function ChecklistBlock({
  title = 'Actionable Implementation Checklist',
  items,
}: ChecklistBlockProps) {
  const [checkedState, setCheckedState] = useState<Record<number, boolean>>({});

  const toggleItem = (idx: number) => {
    setCheckedState((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const completedCount = Object.values(checkedState).filter(Boolean).length;
  const progressPercent = items.length > 0 ? Math.round((completedCount / items.length) * 100) : 0;

  const resetAll = () => {
    setCheckedState({});
  };

  return (
    <div className="my-8 p-6 sm:p-7 rounded-2xl bg-white border border-[var(--border-color)] shadow-[var(--shadow-sm)] text-left space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--border-color)] pb-3">
        <div>
          <h3 className="font-heading font-extrabold text-base sm:text-lg text-[var(--text-dark)]">
            {title}
          </h3>
          <p className="text-xs text-[var(--text-muted)]">
            Interactive tracker — click items as you complete them
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[var(--purple-light)] text-[var(--purple-main)]">
            {completedCount}/{items.length} Done ({progressPercent}%)
          </span>
          {completedCount > 0 && (
            <button
              type="button"
              onClick={resetAll}
              className="text-xs text-[var(--text-muted)] hover:text-[var(--text-dark)] flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      <div className="space-y-2 divide-y divide-[var(--border-color)]">
        {items.map((item, idx) => {
          const isChecked = !!checkedState[idx];
          return (
            <div
              key={idx}
              onClick={() => toggleItem(idx)}
              className="pt-2.5 pb-2 flex items-start gap-3 cursor-pointer group transition-colors select-none"
            >
              <button
                type="button"
                className="mt-0.5 text-[var(--purple-main)] flex-shrink-0 focus:outline-none"
                aria-label={`Mark "${item.text}" as ${isChecked ? 'incomplete' : 'complete'}`}
              >
                {isChecked ? (
                  <CheckSquare className="w-5 h-5 text-[#10B981]" />
                ) : (
                  <Square className="w-5 h-5 text-[var(--text-light)] group-hover:text-[var(--purple-main)]" />
                )}
              </button>
              <div className="space-y-0.5">
                <span
                  className={`text-xs sm:text-sm font-semibold transition-colors block ${
                    isChecked
                      ? 'line-through text-[var(--text-light)]'
                      : 'text-[var(--text-dark)] group-hover:text-[var(--purple-main)]'
                  }`}
                >
                  {item.text}
                </span>
                {item.description && (
                  <p
                    className={`text-xs transition-colors ${
                      isChecked ? 'text-[var(--text-light)] line-through' : 'text-[var(--text-muted)]'
                    }`}
                  >
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
