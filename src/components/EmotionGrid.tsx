// T011: EmotionGrid component for responsive card layouts
'use client';

import React from 'react';
import { Grid, Container, Box } from '@mui/material';
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
        <Grid 
          container 
          spacing={spacing}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'stretch', // Make all cards same height
          }}
        >
          {emotions.map((emotion, index) => {
            // Calculate responsive grid sizes
            const gridSize = {
              xs: 12 / (columns.xs || 1),
              sm: 12 / (columns.sm || 2),
              md: 12 / (columns.md || 3),
              lg: 12 / (columns.lg || 3),
            };

            return (
              <Grid
                item
                key={emotion.name}
                xs={gridSize.xs}
                sm={gridSize.sm}
                md={gridSize.md}
                lg={gridSize.lg}
                sx={{
                  display: 'flex',
                  minHeight: cardSize === 'small' ? 120 : cardSize === 'medium' ? 160 : 200,
                }}
              >
                <EmotionCard
                  emotion={emotion}
                  onClick={emotion.onClick}
                  size={cardSize}
                  className={`emotion-${emotion.name.toLowerCase().replace(/\s+/g, '-')}`}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
}