import React from 'react';
import { GuideImageBlock } from '@/lib/types';

interface GuideImageProps {
  block: GuideImageBlock;
  figureNumber?: number;
}

export default function GuideImage({ block, figureNumber }: GuideImageProps) {
  const aspectClass =
    block.aspectRatio === '4/3'
      ? 'aspect-[4/3]'
      : block.aspectRatio === 'auto'
      ? 'aspect-auto'
      : 'aspect-[16/9]';

  return (
    <figure className="my-8 rounded-2xl border border-[var(--border-color)] bg-white overflow-hidden shadow-xs text-left not-prose">
      <div className={`relative w-full ${aspectClass} bg-[#F6F3EB] overflow-hidden`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <picture>
          <source
            srcSet={block.src.replace(/\.(png|jpg|jpeg)$/, '.webp')}
            type="image/webp"
          />
          <img
            src={block.src}
            alt={block.alt}
            width={1200}
            height={675}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.02]"
            loading="lazy"
          />
        </picture>
      </div>
      {block.caption && (
        <figcaption className="p-3.5 sm:p-4 text-xs text-[var(--text-muted)] bg-[#FAF8F2] border-t border-[var(--border-color)] flex items-start gap-2 leading-relaxed">
          {(block.figureBadge || figureNumber !== undefined) && (
            <span className="font-mono font-bold text-[var(--purple-main)] px-2 py-0.5 rounded-full bg-[var(--purple-light)] text-[10px] uppercase flex-shrink-0">
              {block.figureBadge || `Fig ${figureNumber}`}
            </span>
          )}
          <span className="flex-1">{block.caption}</span>
        </figcaption>
      )}
    </figure>
  );
}
