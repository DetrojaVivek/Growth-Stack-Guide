'use client';

import React, { useState } from 'react';
import { Copy, Check, Mail } from 'lucide-react';
import { GuideEmailScriptBlock } from '@/lib/types';

interface EmailPreviewCardProps {
  block: GuideEmailScriptBlock;
}

export default function EmailPreviewCard({ block }: EmailPreviewCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      const fullText = `Subject: ${block.subject}\n\n${block.body}`;
      await navigator.clipboard.writeText(fullText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="my-8 rounded-2xl border border-[var(--border-color)] bg-white shadow-xs overflow-hidden text-left not-prose">
      {/* macOS Style Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#FAF8F2] border-b border-[var(--border-color)]">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80 inline-block"></span>
          </div>
          <span className="text-xs font-bold text-[var(--text-dark)] flex items-center gap-1.5 ml-1">
            <Mail className="w-3.5 h-3.5 text-[var(--purple-main)]" />
            <span>{block.title || 'Client Email Template'}</span>
          </span>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all shadow-2xs ${
            copied
              ? 'bg-[var(--color-success-bg)] text-[var(--color-success)] border border-[var(--color-success)]/30'
              : 'bg-white hover:bg-[var(--primary-yellow-light)] text-[var(--text-dark)] border border-[var(--border-color)]'
          }`}
          aria-label="Copy Email Script"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-[var(--color-success)]" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-[var(--purple-main)]" />
              <span>Copy Email</span>
            </>
          )}
        </button>
      </div>

      {/* Email Metadata Details */}
      <div className="px-5 py-3 border-b border-[var(--border-color)]/70 bg-[#FCFAF4] space-y-1.5 text-xs">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-[var(--text-muted)] w-14 flex-shrink-0">Subject:</span>
          <span className="font-bold text-[var(--text-dark)] font-sans">{block.subject}</span>
        </div>
        {block.to && (
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[var(--text-muted)] w-14 flex-shrink-0">To:</span>
            <span className="font-mono text-slate-600 bg-white px-2 py-0.5 rounded border border-[var(--border-color)] text-[11px]">
              {block.to}
            </span>
          </div>
        )}
      </div>

      {/* Email Body Copy */}
      <div className="p-5 sm:p-6 bg-white font-sans text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-line">
        {block.body}
      </div>
    </div>
  );
}
