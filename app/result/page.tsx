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
            }}
          >
            {emotion.definition}
          </Typography>
        </Box>

        {/* Content Sections */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {/* Validation Panel */}
          <ValidationPanel emotion={emotion} />

          {/* Regulation Techniques */}
          <RegulationPanel emotion={emotion} />

          {/* Journal Prompt */}
          <JournalPrompt emotion={emotion} />
        </Box>
      </Box>
    </Container>
  );
}