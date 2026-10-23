'use client';

import React, { useEffect } from 'react';

export default function CodeCopyEnhancer() {
  useEffect(() => {
    // Find all pre elements inside article or main content
    const preElements = document.querySelectorAll<HTMLPreElement>('article pre, .prose pre');

    preElements.forEach((pre) => {
      // Avoid duplicate wrappers
      if (pre.parentElement?.classList.contains('code-block-wrapper')) {
        return;
      }

      // Check if wrapper already added
      if (pre.getAttribute('data-enhanced') === 'true') {
        return;
      }
      pre.setAttribute('data-enhanced', 'true');

      // Create wrapper
      const wrapper = document.createElement('div');
      wrapper.className = 'code-block-wrapper my-6 rounded-2xl overflow-hidden border border-slate-800 bg-[#0B0E1A] shadow-md text-left';

      // Create header bar
      const header = document.createElement('div');
      header.className = 'flex items-center justify-between px-4 py-2.5 bg-[#141829] border-b border-white/10 text-xs';

      // Left window dots + title
      const leftGroup = document.createElement('div');
      leftGroup.className = 'flex items-center gap-2';

      const dots = document.createElement('div');
      dots.className = 'flex items-center gap-1.5';
      dots.innerHTML = `
        <span class="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80 inline-block"></span>
        <span class="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80 inline-block"></span>
        <span class="w-2.5 h-2.5 rounded-full bg-[#10B981]/80 inline-block"></span>
      `;

      const title = document.createElement('span');
      title.className = 'text-slate-400 font-mono text-[11px] font-semibold tracking-wide ml-1.5';
      
      const codeText = pre.textContent || '';
      if (codeText.includes('Subject:')) {
        title.textContent = 'Email Template Script';
      } else if (codeText.includes('Role:') || codeText.includes('Task:')) {
        title.textContent = 'AI Prompt Chain';
      } else {
        title.textContent = 'Operational SOP';
      }

      leftGroup.appendChild(dots);
      leftGroup.appendChild(title);

      // Copy button
      const copyBtn = document.createElement('button');
      copyBtn.type = 'button';
      copyBtn.className = 'inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-bold bg-white/10 hover:bg-white/20 text-slate-200 transition-colors focus:outline-none focus:ring-1 focus:ring-[var(--primary-yellow)]';
      copyBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
        <span>Copy</span>
      `;

      copyBtn.addEventListener('click', async () => {
        try {
          const codeEl = pre.querySelector('code');
          const textToCopy = codeEl ? (codeEl as HTMLElement).innerText || codeEl.textContent || '' : pre.innerText || pre.textContent || '';
          await navigator.clipboard.writeText(textToCopy);
          
          copyBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><polyline points="20 6 9 17 4 12"/></svg>
            <span class="text-emerald-400 font-bold">Copied!</span>
          `;
          copyBtn.classList.add('bg-emerald-500/20', 'border', 'border-emerald-500/30');

          setTimeout(() => {
            copyBtn.innerHTML = `
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
              <span>Copy</span>
            `;
            copyBtn.classList.remove('bg-emerald-500/20', 'border', 'border-emerald-500/30');
          }, 2000);
        } catch (err) {
          console.error('Failed to copy text: ', err);
        }
      });

      header.appendChild(leftGroup);
      header.appendChild(copyBtn);

      // Reparent pre inside wrapper
      pre.parentNode?.insertBefore(wrapper, pre);
      wrapper.appendChild(header);
      wrapper.appendChild(pre);

      // Clean pre borders since wrapper handles outer border
      pre.style.margin = '0';
      pre.style.border = 'none';
      pre.style.borderRadius = '0';
      pre.style.background = 'transparent';
    });
  }, []);

  return null;
}
