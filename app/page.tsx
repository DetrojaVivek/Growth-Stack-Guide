import React from 'react';
import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import CoreCategories from '@/components/CoreCategories';
import FeaturedBlueprint from '@/components/FeaturedBlueprint';
import LatestGuidesFeed from '@/components/LatestGuidesFeed';
import FeaturedFreebie from '@/components/FeaturedFreebie';
import ProductLadder from '@/components/ProductLadder';
import OldVsNewComparison from '@/components/OldVsNewComparison';
import AuthorEEAT from '@/components/AuthorEEAT';

export default function HomePage() {
  return (
    <div className="w-full flex flex-col">
      {/* 1. Hero Section: Direct-response messaging hook for solo operators */}
      <Hero />

      {/* 2. Trust Strip: Problem-first, free-tier compatibility, zero paywall proof */}
      <TrustStrip />

      {/* 3. The 5 Strategic Knowledge Pillars Grid */}
      <CoreCategories />

      {/* 4. Featured Cornerstone Blueprint: Freelance Client Onboarding System */}
      <FeaturedBlueprint />

      {/* 5. Latest Editorial Blueprints Feed */}
      <LatestGuidesFeed />

      {/* 6. Flagship System Showcase: Turnkey Notion Workspace */}
      <FeaturedFreebie />

      {/* 7. Digital Product Ladder ($0 -> $7 -> $19) */}
      <ProductLadder />

      {/* 8. The Old Chaotic Way vs Growth Stack Systems Way */}
      <OldVsNewComparison />

      {/* 9. Founder E-E-A-T Profile & Conspicuous FTC Affiliate Disclosure */}
      <AuthorEEAT />
    </div>
  );
}
