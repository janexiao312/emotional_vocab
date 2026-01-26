// T027: Validation result page showing emotion details and support
'use client';

import React, { Suspense } from 'react';
import { Box, Typography, Container, CircularProgress } from '@mui/material';
import { ValidationPanel } from '../../src/components/ValidationPanel';
import { RegulationPanel } from '../../src/components/RegulationPanel';
import { JournalPrompt } from '../../src/components/JournalPrompt';
import { useEmotionData } from '../../src/hooks/useEmotionData';
import { useSearchParams } from 'next/navigation';
import { notFound } from 'next/navigation';

export default function ResultPage() {
  return (
    <Suspense fallback={<CircularProgress />}>
      <ResultPageContent />
    </Suspense>
  );
}

function ResultPageContent() {
  const searchParams = useSearchParams();
  const emotionId = searchParams.get('emotionId');
  const { getEmotionById } = useEmotionData();

  if (!emotionId) {
    notFound();
  }

  const emotion = getEmotionById(emotionId);

  if (!emotion) {
    notFound();
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ py: 4 }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h3" 
            component="h1" 
            gutterBottom
            sx={{ 
              fontWeight: 600,
              color: 'primary.main',
            }}
          >
            {emotion.tertiary}
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
            {emotion.definition}
          </Typography>
          
          <Typography 
            variant="body1" 
            component="p"
            sx={{ 
              color: 'success.main',
              maxWidth: '500px',
              mx: 'auto',
              fontWeight: 500,
              border: '1px solid',
              borderColor: 'success.light',
              borderRadius: 2,
              p: 2,
              bgcolor: 'success.50',
            }}
          >
            ✨ Great choice! Now let's help you work with this emotion in healthy ways.
          </Typography>
        </Box>

        {/* Content Sections */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {/* Dualization Section Header */}
          <Box sx={{ textAlign: 'center', mb: 2 }}>
            <Typography 
              variant="h4" 
              component="h2"
              gutterBottom
              sx={{ 
                fontWeight: 600,
                color: 'text.primary',
                mb: 2,
              }}
            >
              Your Emotion Toolkit
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: 'text.secondary',
                maxWidth: '600px',
                mx: 'auto',
                mb: 3,
              }}
            >
              Now that you've identified your specific emotion, here are three powerful ways to work with it:
            </Typography>
          </Box>

          {/* Validation Panel */}
          <ValidationPanel emotion={emotion} />

          {/* Regulation Techniques - ① Actionable Regulation */}
          <RegulationPanel emotion={emotion} />

          {/* Journal Prompt - ② Journal Prompt & ③ Start Over */}
          <JournalPrompt emotion={emotion} />
        </Box>
      </Box>
    </Container>
  );
}