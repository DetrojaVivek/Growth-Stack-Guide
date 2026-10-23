'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Copy, Check, Info, AlertTriangle, Lightbulb, CheckCircle2 } from 'lucide-react';
import { GuideBlock } from '@/lib/types';
import GuideImage from './GuideImage';
import EmailPreviewCard from './EmailPreviewCard';

interface GuideRendererProps {
  blocks: GuideBlock[];
}

function CodeBlockWithCopy({ title, language, code }: { title?: string; language?: string; code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="my-6 rounded-2xl overflow-hidden border border-slate-800 bg-[#0B0E1A] shadow-md text-left not-prose">
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#141829] border-b border-white/10 text-xs">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80 inline-block"></span>
          </div>
          <span className="text-slate-400 font-mono text-[11px] font-semibold tracking-wide ml-1.5">
            {title || (language ? `${language.toUpperCase()} SNIPPET` : 'CODE SNIPPET')}
          </span>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-bold bg-white/10 hover:bg-white/20 text-slate-200 transition-colors focus:outline-none"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-bold">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-slate-300" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      <pre className="p-4 sm:p-5 text-xs text-slate-200 font-mono overflow-x-auto leading-relaxed max-w-full">
        <code className="bg-transparent text-slate-200 p-0 block">{code}</code>
      </pre>
    </div>
  );
}

export default function GuideRenderer({ blocks }: GuideRendererProps) {
  let imageCounter = 0;

  return (
    <div className="w-full space-y-6 text-left min-w-0 max-w-full">
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'heading': {
            if (block.level === 2) {
              return (
                <div key={index} id={block.id} className="pt-8 sm:pt-10 scroll-mt-24 space-y-2 border-b border-[var(--border-color)] pb-3">
                  {block.badge && (
                    <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[var(--purple-light)] text-[var(--purple-main)] border border-[var(--purple-glow)]">
                      {block.badge}
                    </span>
                  )}
                  <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-[var(--text-dark)] tracking-tight">
                    {block.text}
                  </h2>
                </div>
              );
            }
            return (
              <h3 key={index} id={block.id} className="font-heading font-bold text-base sm:text-lg text-[var(--text-dark)] pt-4 scroll-mt-24">
                {block.text}
              </h3>
            );
          }

          case 'paragraph': {
            return (
              <p
                key={index}
                className="text-sm sm:text-base text-slate-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: block.content }}
              />
            );
          }

          case 'image': {
            imageCounter++;
            return (
              <GuideImage key={index} block={block} figureNumber={imageCounter} />
            );
          }

          case 'list': {
            return (
              <ul key={index} className="space-y-2 text-xs sm:text-sm text-slate-700 py-1">
                {block.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2.5">
                    {block.icon === 'check' ? (
                      <Check className="w-4 h-4 text-emerald-600 font-bold flex-shrink-0 mt-0.5" />
                    ) : block.icon === 'cross' ? (
                      <span className="text-red-500 font-bold flex-shrink-0 mt-0.5 text-xs">✕</span>
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--purple-main)] flex-shrink-0 mt-2"></span>
                    )}
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            );
          }

          case 'callout': {
            const icons = {
              'quick-answer': Lightbulb,
              tip: Info,
              warning: AlertTriangle,
              success: CheckCircle2,
            };
            const styles = {
              'quick-answer': 'bg-[#FFFBF0] border-[#FDE68A] text-[#92400E]',
              tip: 'bg-[var(--purple-light)] border-[var(--purple-glow)] text-[var(--purple-main)]',
              warning: 'bg-[#FFF5F5] border-[#FED7D7] text-[var(--color-error)]',
              success: 'bg-[var(--color-success-bg)] border-[#BBF7D0] text-[var(--color-success)]',
            };
            const calloutKey = (block.calloutType || block.tone || 'tip') as 'quick-answer' | 'tip' | 'warning' | 'success';
            const Icon = icons[calloutKey] || Info;
            const style = styles[calloutKey] || styles.tip;

            return (
              <aside key={index} className={`my-6 p-5 sm:p-6 rounded-2xl border ${style} text-left space-y-2 shadow-xs`}>
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  <span className="font-heading font-extrabold text-xs tracking-wider uppercase">
                    {block.title || 'OPERATIONAL TAKEAWAY'}
                  </span>
                </div>
                <div
                  className="text-xs sm:text-sm text-slate-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: block.content }}
                />
              </aside>
            );
          }

          case 'email-script': {
            return <EmailPreviewCard key={index} block={block} />;
          }

          case 'code': {
            return (
              <CodeBlockWithCopy
                key={index}
                title={block.title}
                language={block.language}
                code={block.code}
              />
            );
          }

          case 'comparison': {
            return (
              <div key={index} className="my-8 rounded-2xl border border-[var(--border-color)] bg-white p-5 sm:p-7 shadow-xs not-prose">
                <div className="text-center mb-6">
                  {block.badge && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[var(--purple-light)] text-[var(--purple-main)] border border-[var(--purple-glow)]">
                      {block.badge}
                    </span>
                  )}
                  <h4 className="font-heading font-extrabold text-base sm:text-lg text-[var(--text-dark)] mt-2">
                    {block.title}
                  </h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="p-5 rounded-xl border border-red-200 bg-red-50/40 text-left space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-red-700 uppercase tracking-wider">
                      <span className="w-2 h-2 rounded-full bg-red-500"></span>
                      <span>{block.left.title}</span>
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                      {block.left.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-red-500 font-bold mt-0.5">✕</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-5 rounded-xl border border-emerald-200 bg-emerald-50/40 text-left space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <span>{block.right.title}</span>
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                      {block.right.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          }

          case 'kanban': {
            return (
              <div key={index} className="my-6 rounded-2xl border border-[var(--border-color)] bg-white p-4 sm:p-5 shadow-xs not-prose overflow-x-auto">
                <div className="min-w-[620px] grid grid-cols-4 gap-3 text-left">
                  {block.columns.map((col, colIdx) => (
                    <div key={colIdx} className="space-y-2 bg-[#FAF8F2] p-3 rounded-xl border border-[var(--border-color)]">
                      <div className="flex items-center justify-between text-xs font-bold text-[var(--text-dark)] pb-1 border-b border-[var(--border-color)]">
                        <span className="flex items-center gap-1.5">
                          <span className={`w-2 h-2 rounded-full ${col.dotColor || 'bg-slate-400'}`}></span>
                          {col.title}
                        </span>
                        {col.count !== undefined && (
                          <span className="text-[10px] text-[var(--text-muted)] font-mono">{col.count}</span>
                        )}
                      </div>
                      {col.cards.map((card, cIdx) => (
                        <div
                          key={cIdx}
                          className={`p-2.5 rounded-lg bg-white border border-[var(--border-color)] shadow-xs text-xs space-y-1 ${
                            card.strikethrough ? 'opacity-80' : ''
                          }`}
                        >
                          <div className={`font-semibold text-[var(--text-dark)] ${card.strikethrough ? 'line-through text-slate-500' : ''}`}>
                            {card.title}
                          </div>
                          <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded font-bold ${card.tagColor || 'bg-slate-100 text-slate-600'}`}>
                            {card.tag}
                          </span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            );
          }

          case 'checklist': {
            return (
              <div key={index} className="my-6 rounded-2xl border border-[var(--border-color)] bg-white p-5 sm:p-6 shadow-xs not-prose space-y-3 text-left">
                <div className="flex items-center justify-between pb-2 border-b border-[var(--border-color)]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--purple-main)]">
                    {block.title}
                  </span>
                  {block.badge && (
                    <span className="text-[11px] font-bold text-[var(--text-muted)]">{block.badge}</span>
                  )}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {block.items.map((item, iIdx) => (
                    <div key={iIdx} className="p-3 rounded-xl bg-[#FAF8F2] border border-[var(--border-color)] flex items-start gap-2.5 text-xs text-[var(--text-dark)]">
                      <span className="w-4 h-4 rounded border border-slate-400 bg-white flex items-center justify-center text-[10px] font-bold text-slate-500 flex-shrink-0 mt-0.5">
                        {item.checked ? '✓' : '□'}
                      </span>
                      <span>
                        {item.title ? (
                          <>
                            <strong>{item.title}:</strong> {item.description}
                          </>
                        ) : (
                          item.label || item.description
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          }

          case 'table': {
            return (
              <div key={index} className="overflow-x-auto my-6 border border-[var(--border-color)] rounded-2xl bg-white shadow-xs not-prose">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-[#FAF8F2] border-b border-[var(--border-color)] font-heading font-bold text-[var(--text-dark)] uppercase text-[11px] tracking-wider">
                    <tr>
                      {block.headers.map((h, hIdx) => (
                        <th key={hIdx} className={`py-3 px-4 ${hIdx === block.headers.length - 1 ? 'text-right' : ''}`}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--border-color)] text-[var(--text-muted)]">
                    {block.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-slate-50/50">
                        {row.map((cell, cIdx) => {
                          const isLast = cIdx === row.length - 1;
                          if (typeof cell === 'object') {
                            return (
                              <td key={cIdx} className={`py-3 px-4 ${isLast ? 'text-right' : ''}`}>
                                {cell.badge ? (
                                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold ${cell.badgeColor || 'bg-slate-100 text-slate-700'}`}>
                                    {cell.badge}
                                  </span>
                                ) : cell.isAction ? (
                                  <span className="font-semibold text-[var(--purple-main)]">{cell.text}</span>
                                ) : (
                                  <span>{cell.text}</span>
                                )}
                              </td>
                            );
                          }
                          return (
                            <td key={cIdx} className={`py-3 px-4 ${isLast ? 'text-right font-medium text-[var(--purple-main)]' : ''}`}>
                              {cell}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          }

          default:
            return null;
        }
      })}
    </div>
  );
}
