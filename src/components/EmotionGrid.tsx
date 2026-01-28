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
    xl?: number;
  };
}

export function EmotionGrid({ 
  emotions, 
  title,
  maxWidth = 'lg',
  cardSize = 'medium',
  columns = { xs: 1, sm: 2, md: 3, lg: 3 }
}: EmotionGridProps) {
  const containerMaxWidth = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl', 
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
  }[maxWidth];

  return (
    <div className={`mx-auto ${containerMaxWidth}`}>
      <div className="py-8">
        <div className="grid gap-6 sm:gap-8">
          <div
            className={`
              grid gap-6 sm:gap-8
              grid-cols-${columns.xs || 1}
              sm:grid-cols-${columns.sm || 2}
              md:grid-cols-${columns.md || 3}
              lg:grid-cols-${columns.lg || 3}
            `}
          >
            {emotions.map((emotion, index) => (
              <div key={emotion.name} className="transform transition-all duration-300 hover:z-10">
                <EmotionCard
                  emotion={emotion}
                  onClick={emotion.onClick}
                  size={cardSize}
                  className={`emotion-${emotion.name.toLowerCase().replace(/\s+/g, '-')} w-full h-full`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}