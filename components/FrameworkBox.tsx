import React from 'react';
import { Layers } from 'lucide-react';

interface FrameworkBoxProps {
  title: string;
  badge?: string;
  description?: string;
  steps?: Array<{ title: string; description: string }>;
  children?: React.ReactNode;
}

export default function FrameworkBox({
  title,
  badge = 'Architectural Framework',
  description,
  steps,
  children,
}: FrameworkBoxProps) {
  return (
    <div className="my-8 p-6 sm:p-7 rounded-2xl bg-[#F8F9FD] border border-[var(--border-color)] border-l-[5px] border-l-[var(--purple-main)] shadow-xs text-left space-y-4">
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--purple-light)] text-[var(--purple-main)] text-xs font-bold uppercase tracking-wider">
          <Layers className="w-3.5 h-3.5" />
          <span>{badge}</span>
        </div>
      </div>

      <h3 className="font-heading font-extrabold text-lg sm:text-xl text-[var(--text-dark)] leading-snug">
        {title}
      </h3>

      {description && (
        <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
          {description}
        </p>
      )}

      {steps && steps.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-white border border-[var(--border-color)] space-y-1 shadow-xs"
            >
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[var(--purple-light)] text-[var(--purple-main)] text-xs font-extrabold flex items-center justify-center">
                  {idx + 1}
                </span>
                <strong className="font-heading font-bold text-xs sm:text-sm text-[var(--text-dark)]">
                  {step.title}
                </strong>
              </div>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed pl-7">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      )}

      {children && <div className="pt-2">{children}</div>}
    </div>
  );
}
