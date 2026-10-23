# Growth Stack Guide 🚀

> High-authority digital systems, AI productivity workflows, and operational architectures built for modern US solopreneurs, creators, and independent consultants.

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Proprietary-red?style=flat)]()

---

## ⚡ Overview

**Growth Stack Guide** is a modern, high-performance static web application engineered with Next.js 14 App Router, TypeScript, and Tailwind CSS. It is specifically designed to provide actionable, zero-fluff business systems, Notion templates, AI implementation workflows, and software guides.

### Key Pillars Covered:
1. **AI Productivity & Workflows** — Practical automation, prompt engineering, and meeting intelligence.
2. **Notion Operating Systems** — High-yield workspaces, CRMs, client portals, and project tracking.
3. **Freelance & Client Systems** — Onboarding funnels, SOP delivery kits, and proposal frameworks.
4. **Digital Products & Assets** — Asset vaults, playbooks, and scalable digital toolkits.
5. **Growth & Conversion Engines** — Organic traffic systems, bridge funnels, and email engines.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: [Next.js 14](https://nextjs.org/) (Static Export / SSG)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict typing)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + PostCSS
- **Icons**: [Lucide React](https://lucide.dev/)
- **Markdown & Frontmatter**: `gray-matter`, `remark`, `remark-html`
- **Search Engine**: Custom client-side search index compiled at build time (`tsx scripts/build-search-index.ts`)
- **SEO & Compliance**: Schema.org JSON-LD structured data, OpenGraph cards, FTC compliant affiliate disclosures

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v18.17.0` or higher
- **npm**: `v9.0.0` or higher

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/DetrojaVivek/Growth-Stack-Guide.git
   cd Growth-Stack-Guide
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   Configure your optional analytics and search console verification tokens:
   - `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID`

4. **Run the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Build & Deployment

To generate an optimized static production export (`out/` directory):

```bash
npm run build
```

The prebuild hook compiles the search index (`scripts/build-search-index.ts`) before Next.js builds and exports all static routes.

### Deploying to Hosting Providers:
- **Vercel**: Framework Preset `Next.js` (Root directory: `./`)
- **Cloudflare Pages / GitHub Pages / Netlify**: Publish directory `out`

---

## 📂 Project Structure

```text
├── app/                  # Next.js App Router (pages, layouts, metadata)
│   ├── blog/             # Cornerstone guides & deep dives
│   ├── products/         # Digital products & Notion systems
│   ├── resources/        # Free tools, checklists & templates
│   ├── tools/            # Curated software reviews & evaluations
│   ├── topics/           # The 5 strategic knowledge pillars
│   ├── search/           # Real-time search engine
│   └── ...               # Legal & policy routes (privacy, terms, disclosure)
├── components/           # Reusable UI components, cards & layouts
├── content/              # Blog content and guide source files
├── data/                 # Data catalogs (products, tools, resources, meta)
├── lib/                  # Utility functions and helpers
├── public/               # Static assets (images, favicons, search index)
├── scripts/              # Build-time indexing and automation scripts
└── ...config files       # Tailwind, PostCSS, TypeScript, Next.js configs
```

---

## 📄 License & Ownership

© 2026 Growth Stack Guide. All rights reserved.
