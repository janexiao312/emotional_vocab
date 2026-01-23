// T020: Secondary emotion page - shows secondary emotions under selected core emotion
'use client';

import React from 'react';
import { Typography, Box } from '@mui/material';
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
    color: coreInfo.color, // Use the same color as the core emotion but with opacity
    onClick: () => selectSecondary(secondary),
  }));

  return (
    <Box sx={{ py: 2 }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom
          sx={{ 
            color: coreInfo.color,
            fontWeight: 600,
          }}
        >
          {core} Emotions
        </Typography>
        
        <Typography 
          variant="h6" 
          component="p"
          sx={{ 
            color: 'text.secondary',
            maxWidth: '600px',
            mx: 'auto',
            mb: 2,
          }}
        >
          {coreInfo.description}
        </Typography>

        <Typography 
          variant="body1" 
          sx={{ 
            color: 'text.secondary',
            maxWidth: '500px',
            mx: 'auto',
          }}
        >
          Select the category that best describes your {core.toLowerCase()} feeling:
        </Typography>
      </Box>

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
    </Box>
  );
}