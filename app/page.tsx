// T014: Homepage with core emotion cards
'use client';

import React from 'react';
import { Typography, Box, Container } from '@mui/material';
import { EmotionGrid } from '../src/components/EmotionGrid';
import { useEmotionNavigation } from '../src/hooks/useEmotionNavigation';
import { CORE_EMOTION_INFO } from '../src/data/emotions';
import { CoreEmotion } from '../src/data/types';

export default function Home() {
  const { selectCore } = useEmotionNavigation();

  // Prepare core emotions data for the grid
  const coreEmotions = Object.entries(CORE_EMOTION_INFO).map(([emotion, info]) => ({
    name: emotion,
    description: info.description,
    color: info.color,
    onClick: () => selectCore(emotion as CoreEmotion),
  }));

  return (
    <Container maxWidth="lg">
      <Box 
        sx={{ 
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          py: 4,
        }}
      >
        {/* Header */}
        <Box 
          sx={{ 
            textAlign: 'center',
            mb: 4,
          }}
        >
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom
            sx={{ 
              fontWeight: 600,
              color: 'text.primary',
              mb: 2,
            }}
          >
            How are you feeling?
          </Typography>
          
          <Typography 
            variant="h6" 
            component="p"
            sx={{ 
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6,
              mb: 3,
            }}
          >
            Let's start by choosing the highest level emotion that best matches how you're feeling right now. 
            We'll then guide you to explore more specific feelings.
          </Typography>
          
          <Typography 
            variant="body1" 
            component="p"
            sx={{ 
              color: 'primary.main',
              maxWidth: '500px',
              mx: 'auto',
              fontWeight: 500,
              border: '1px solid',
              borderColor: 'primary.light',
              borderRadius: 2,
              p: 2,
              bgcolor: 'primary.50',
            }}
          >
            💡 Instruction: Pick the core emotion that feels most true to you right now
          </Typography>
        </Box>

        {/* Core Emotions Grid */}
        <EmotionGrid
          emotions={coreEmotions}
          cardSize="large"
          columns={{
            xs: 1,
            sm: 2, 
            md: 2,
            lg: 3,
          }}
        />

        {/* Footer */}
        <Box 
          sx={{ 
            textAlign: 'center',
            mt: 4,
          }}
        >
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'text.secondary',
              fontStyle: 'italic',
            }}
          >
            No account required • Private and secure • Take your time
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
