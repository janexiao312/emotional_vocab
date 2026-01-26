// T011: EmotionGrid component for responsive card layouts
'use client';

import React from 'react';
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
    small: 'gap-2',
    medium: 'gap-3',
    large: 'gap-4',
  }[cardSize];

  const containerMaxWidth = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl', 
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
  }[maxWidth];

  const cardHeight = {
    small: 'min-h-[120px]',
    medium: 'min-h-[160px]',
    large: 'min-h-[200px]',
  }[cardSize];

  return (
    <div className={`mx-auto ${containerMaxWidth}`}>
      <div className="py-8">
        <div
          className={`flex flex-wrap ${spacing} justify-center items-stretch`}
        >
          {emotions.map((emotion, index) => (
            <div
              key={emotion.name}
              className={`
                flex ${cardHeight}
                w-full
                sm:w-1/2 sm:flex-1 sm:basis-1/2
                md:w-1/3 md:flex-1 md:basis-1/3
                lg:w-1/3 lg:flex-1 lg:basis-1/3
              `}
            >
              <EmotionCard
                emotion={emotion}
                onClick={emotion.onClick}
                size={cardSize}
                className={`emotion-${emotion.name.toLowerCase().replace(/\s+/g, '-')} w-full`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}