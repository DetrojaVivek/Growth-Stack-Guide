import React from 'react';
import { Info, AlertTriangle, Lightbulb, CheckCircle2 } from 'lucide-react';

interface CalloutProps {
  type?: 'quick-answer' | 'tip' | 'warning' | 'success';
  title?: string;
  content?: string;
  children?: React.ReactNode;
}

export default function Callout({ type = 'quick-answer', title, content, children }: CalloutProps) {
  const configs = {
    'quick-answer': {
      bg: 'bg-[#FFFBF0]',
      border: 'border-[#FDE68A]',
      iconColor: 'text-[#B45309]',
      titleColor: 'text-[#92400E]',
      Icon: Lightbulb,
      defaultTitle: 'QUICK ANSWER & KEY TAKEAWAYS',
    },
    tip: {
      bg: 'bg-[var(--purple-light)]',
      border: 'border-[var(--purple-glow)]',
      iconColor: 'text-[var(--purple-main)]',
      titleColor: 'text-[var(--purple-main)]',
      Icon: Info,
      defaultTitle: 'PRO OPERATIONAL TIP',
    },
    warning: {
      bg: 'bg-[#FFF5F5]',
      border: 'border-[#FED7D7]',
      iconColor: 'text-[var(--color-error)]',
      titleColor: 'text-[var(--color-error)]',
      Icon: AlertTriangle,
      defaultTitle: 'CRITICAL WARNING',
    },
    success: {
      bg: 'bg-[var(--color-success-bg)]',
      border: 'border-[#BBF7D0]',
      iconColor: 'text-[var(--color-success)]',
      titleColor: 'text-slate-800',
      Icon: CheckCircle2,
      defaultTitle: 'VERIFIED WORKFLOW RESULT',
    },
  };

  const config = configs[type];
  const IconComponent = config.Icon;

  return (
    <aside
      className={`my-6 p-5 sm:p-6 rounded-2xl border ${config.bg} ${config.border} text-left space-y-2.5 shadow-xs`}
      aria-label={title || config.defaultTitle}
    >
      <div className="flex items-center gap-2.5">
        <IconComponent className={`w-5 h-5 flex-shrink-0 ${config.iconColor}`} />
        <h4 className={`font-heading font-extrabold text-xs sm:text-sm tracking-wider uppercase ${config.titleColor}`}>
          {title || config.defaultTitle}
        </h4>
      </div>
      <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
        {content ? <p>{content}</p> : children}
      </div>
    </aside>
  );
}
