// T020: Secondary emotion page - shows secondary emotions under selected core emotion
'use client';

import React from 'react';
import { EmotionGrid } from '../../../src/components/EmotionGrid';
import { useEmotionNavigation } from '../../../src/hooks/useEmotionNavigation';
import { CORE_EMOTION_INFO } from '../../../src/data/emotions';
import { CoreEmotion } from '../../../src/data/types';
import { notFound } from 'next/navigation';

interface CorePageProps {
  params: Promise<{ core: string }>;
}

export default async function CoreEmotionPage({ params }: CorePageProps) {
  const { core } = await params;
  
  // Validate core emotion
  const coreEmotion = core.charAt(0).toUpperCase() + core.slice(1).toLowerCase();
  if (!Object.keys(CORE_EMOTION_INFO).includes(coreEmotion)) {
    notFound();
  }

  return <CoreEmotionPageClient core={coreEmotion as CoreEmotion} />;
}

function CoreEmotionPageClient({ core }: { core: CoreEmotion }) {
  const { selectSecondary, getSecondaryEmotions } = useEmotionNavigation();
  
  const secondaryEmotions = getSecondaryEmotions(core);
  const coreInfo = CORE_EMOTION_INFO[core];

  // Prepare secondary emotions for the grid
  const secondaryEmotionData = secondaryEmotions.map((secondary) => ({
    name: secondary,
    description: `Explore ${secondary.toLowerCase()} feelings`,
    color: coreInfo.color, // Use the same color as the core emotion
    onClick: () => selectSecondary(secondary),
  }));

  return (
    <div className="py-4">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 
          className="text-4xl font-semibold mb-4"
          style={{ color: coreInfo.color }}
        >
          {core} Emotions
        </h1>
        
        <p className="text-xl max-w-2xl mx-auto leading-relaxed mb-6" style={{ color: '#7F8C8D' }}>
          {coreInfo.description}
        </p>

        <div className="max-w-lg mx-auto bg-blue-50 border border-blue-300 rounded-lg p-4 mb-4">
          <p className="font-medium" style={{ color: '#2E86AB' }}>
            💭 Now let's get more specific. Which of these {core.toLowerCase()} emotions feels closest to what you're experiencing?
          </p>
        </div>
      </div>

      {/* Secondary Emotions Grid */}
      <EmotionGrid
        emotions={secondaryEmotionData}
        cardSize="medium"
        columns={{
          xs: 1,
          sm: 2,
          md: 3,
          lg: 3,
        }}
      />
    </div>
  );
}