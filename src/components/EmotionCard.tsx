// T010: Base EmotionCard component with MUI Card layout
'use client';

import React from 'react';
import { Card, CardContent, Typography, CardActionArea } from '@mui/material';
import { CoreEmotion } from '../data/types';

interface EmotionCardProps {
  emotion: {
    name: string;
    description: string;
    color: string;
  };
  onClick: () => void;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export function EmotionCard({ 
  emotion, 
  onClick, 
  size = 'medium',
  className = ''
}: EmotionCardProps) {
  const cardHeight = {
    small: 120,
    medium: 160,
    large: 200,
  }[size];

  const titleSize = {
    small: 'h6',
    medium: 'h5', 
    large: 'h4',
  }[size] as 'h4' | 'h5' | 'h6';

  return (
    <Card
      className={`emotion-card ${className}`}
      sx={{
        height: cardHeight,
        minHeight: 120, // Ensure minimum touch target size for accessibility
        backgroundColor: emotion.color,
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 4,
        },
        '&:active': {
          transform: 'translateY(-2px)',
        },
        '&:focus-within': {
          outline: '2px solid #fff',
          outlineOffset: '2px',
        },
      }}
    >
      <CardActionArea
        onClick={onClick}
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 2,
        }}
        aria-label={`Select ${emotion.name} emotion: ${emotion.description}`}
      >
        <CardContent
          sx={{
            textAlign: 'center',
            padding: '0 !important',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            variant={titleSize}
            component="h3"
            fontWeight="bold"
            gutterBottom
            sx={{
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
              marginBottom: 1,
            }}
          >
            {emotion.name}
          </Typography>
          
          <Typography
            variant="body2"
            sx={{
              opacity: 0.9,
              textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
              fontSize: size === 'small' ? '0.75rem' : undefined,
              lineHeight: 1.3,
              display: size === 'small' ? 'none' : 'block', // Hide description on small cards
            }}
          >
            {emotion.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}