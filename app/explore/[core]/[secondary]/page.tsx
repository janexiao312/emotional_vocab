// T021: Tertiary emotion page - shows specific emotions under secondary category
'use client';

import React from 'react';
import { Typography, Box, Card, CardContent, Button } from '@mui/material';
import { EmotionGrid } from '../../../../src/components/EmotionGrid';
import { useEmotionNavigation } from '../../../../src/hooks/useEmotionNavigation';
import { CORE_EMOTION_INFO } from '../../../../src/data/emotions';
import { CoreEmotion } from '../../../../src/data/types';
import { notFound } from 'next/navigation';

interface SecondaryPageProps {
  params: Promise<{ 
    core: string;
    secondary: string;
  }>;
}

export default async function SecondaryEmotionPage({ params }: SecondaryPageProps) {
  const { core, secondary } = await params;
  
  // Validate core emotion
  const coreEmotion = core.charAt(0).toUpperCase() + core.slice(1).toLowerCase();
  if (!Object.keys(CORE_EMOTION_INFO).includes(coreEmotion)) {
    notFound();
  }

  // Decode the secondary emotion slug
  const secondaryEmotion = secondary.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  return (
    <SecondaryEmotionPageClient 
      core={coreEmotion as CoreEmotion} 
      secondary={secondaryEmotion}
    />
  );
}

function SecondaryEmotionPageClient({ 
  core, 
  secondary 
}: { 
  core: CoreEmotion;
  secondary: string;
}) {
  const { selectEmotion, getTertiaryEmotions } = useEmotionNavigation();
  
  const tertiaryEmotions = getTertiaryEmotions(core, secondary);
  const coreInfo = CORE_EMOTION_INFO[core];

  if (tertiaryEmotions.length === 0) {
    notFound();
  }

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
          {secondary}
        </Typography>
        
        <Typography 
          variant="h6" 
          component="p"
          sx={{ 
            color: 'text.secondary',
            maxWidth: '600px',
            mx: 'auto',
            mb: 3,
          }}
        >
          Let's get even more specific about your {secondary.toLowerCase()} feelings
        </Typography>

        <Typography 
          variant="body1" 
          component="p"
          sx={{ 
            color: 'primary.main',
            maxWidth: '600px',
            mx: 'auto',
            fontWeight: 500,
            border: '1px solid',
            borderColor: 'primary.light',
            borderRadius: 2,
            p: 2,
            bgcolor: 'primary.50',
            mb: 2,
          }}
        >
          🎯 Final step: Choose the specific emotion that resonates most with you. Each choice includes definitions and examples to help you decide.
        </Typography>
      </Box>

      {/* Tertiary Emotions */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {tertiaryEmotions.map((emotion) => (
          <Card 
            key={emotion.id}
            sx={{ 
              maxWidth: 800, 
              mx: 'auto',
              cursor: 'pointer',
              transition: 'all 0.2s ease-in-out',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: 3,
              },
            }}
            onClick={() => selectEmotion(emotion.id)}
          >
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                <Typography 
                  variant="h5" 
                  component="h2"
                  sx={{ 
                    color: coreInfo.color,
                    fontWeight: 600,
                  }}
                >
                  {emotion.tertiary}
                </Typography>
                
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    borderColor: coreInfo.color,
                    color: coreInfo.color,
                    '&:hover': {
                      backgroundColor: coreInfo.color,
                      color: 'white',
                    },
                  }}
                >
                  This is it
                </Button>
              </Box>
              
              <Typography 
                variant="body1" 
                paragraph
                sx={{ 
                  color: 'text.primary',
                  lineHeight: 1.6,
                  mb: 2,
                }}
              >
                {emotion.definition}
              </Typography>
              
              <Typography 
                variant="body2" 
                sx={{ 
                  color: 'text.secondary',
                  fontStyle: 'italic',
                }}
              >
                Examples: {emotion.examples.slice(0, 2).join(', ')}
                {emotion.examples.length > 2 && '...'}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}