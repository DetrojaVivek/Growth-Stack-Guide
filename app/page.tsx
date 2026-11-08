import React from 'react';
import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import ProblemRoadmap from '@/components/ProblemRoadmap';
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
      {/* 1. Hero Section: Editorial mission & dual CTA */}
      <Hero />

      {/* 2. Trust Strip: Editorial proof, free-tier compatibility, zero paywall proof */}
      <TrustStrip />

      {/* 3. Start Here: Interactive Problem-First Operational Roadmap */}
      <ProblemRoadmap />

      {/* 4. Featured Cornerstone Blueprint: Freelance Client Onboarding System */}
      <FeaturedBlueprint />

      {/* 5. The 5 Strategic Knowledge Pillars Grid */}
      <CoreCategories />

      {/* 6. Latest Editorial Blueprints Feed */}
      <LatestGuidesFeed />

      {/* 7. The Free Solopreneur Starter Vault: Gumroad Lead Engine ($0) */}
      <FeaturedFreebie />

      {/* 8. Open-Access Promise & Optional Turnkey Workspaces */}
      <ProductLadder />

      {/* 9. The Old Chaotic Way vs Growth Stack Systems Way */}
      <OldVsNewComparison />

      {/* 10. Founder E-E-A-T Profile & Conspicuous FTC Affiliate Disclosure */}
      <AuthorEEAT />
    </div>
  );
}
