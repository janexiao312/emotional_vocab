// T011: EmotionGrid component for responsive card layouts
'use client';

import React from 'react';
import { Container, Box } from '@mui/material';
import { EmotionCard } from './EmotionCard';

interface GridEmotion {
  name: string;
  description: string;
  color: string;
  onClick: () => void;
}

interface EmotionGridProps {
  emotions: GridEmotion[];
  title?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
  cardSize?: 'small' | 'medium' | 'large';
  columns?: {
    xs?: number;
    sm?: number; 
    md?: number;
    lg?: number;
  };
}

export function EmotionGrid({ 
  emotions, 
  title,
  maxWidth = 'lg',
  cardSize = 'medium',
  columns = { xs: 1, sm: 2, md: 3, lg: 3 }
}: EmotionGridProps) {
  // Determine grid spacing based on card size
  const spacing = {
    small: 2,
    medium: 3,
    large: 4,
  }[cardSize];

  return (
    <Container maxWidth={maxWidth}>
      <Box sx={{ py: 4 }}>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: spacing,
            justifyContent: 'center',
            alignItems: 'stretch',
          }}
        >
          {emotions.map((emotion, index) => (
            <Box
              key={emotion.name}
              sx={{
                display: 'flex',
                minHeight: cardSize === 'small' ? 120 : cardSize === 'medium' ? 160 : 200,
                flex: {
                  xs: `1 1 ${100 / (columns.xs || 1)}%`,
                  sm: `1 1 ${100 / (columns.sm || 2)}%`,
                  md: `1 1 ${100 / (columns.md || 3)}%`,
                  lg: `1 1 ${100 / (columns.lg || 3)}%`,
                },
                maxWidth: {
                  xs: `${100 / (columns.xs || 1)}%`,
                  sm: `${100 / (columns.sm || 2)}%`,
                  md: `${100 / (columns.md || 3)}%`,
                  lg: `${100 / (columns.lg || 3)}%`,
                },
              }}
            >
              <EmotionCard
                emotion={emotion}
                onClick={emotion.onClick}
                size={cardSize}
                className={`emotion-${emotion.name.toLowerCase().replace(/\s+/g, '-')}`}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
}