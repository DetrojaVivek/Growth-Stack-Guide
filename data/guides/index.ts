import { Article } from '@/lib/types';
import { freelanceClientOnboardingGuide } from './freelance-client-onboarding-portal-guide';
import { howToBuildANotionSecondBrainGuide } from './how-to-build-a-notion-second-brain';
import { multiPlatformContentBatchingSopGuide } from './multi-platform-content-calendar-batching-sop';
import { solopreneurWeeklyReviewOperatingSystemGuide } from './solopreneur-weekly-review-operating-system';
import { the50AiPromptVaultForCreatorsGuide } from './the-50-ai-prompt-vault-for-creators';

export const ALL_GUIDES: Article[] = [
  freelanceClientOnboardingGuide,
  howToBuildANotionSecondBrainGuide,
  the50AiPromptVaultForCreatorsGuide,
  multiPlatformContentBatchingSopGuide,
  solopreneurWeeklyReviewOperatingSystemGuide,
];

export function getGuideBySlugFromData(slug: string): Article | null {
  const guide = ALL_GUIDES.find((g) => g.slug === slug);
  return guide || null;
}

export function getAllGuidesFromData(): Article[] {
  return [...ALL_GUIDES].sort((a, b) => {
    return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
  });
}
