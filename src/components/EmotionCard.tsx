// T010: Base EmotionCard component with Tailwind CSS styling
'use client';

import React from 'react';
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
  const sizeClasses = {
    small: 'h-30 min-h-[120px]', // 120px minimum
    medium: 'h-40 min-h-[160px]', // 160px 
    large: 'h-50 min-h-[200px]', // 200px
  };

  const titleClasses = {
    small: 'text-lg',
    medium: 'text-xl',
    large: 'text-2xl',
  };

  const descriptionClasses = {
    small: 'text-xs hidden', // Hidden on small cards
    medium: 'text-sm',
    large: 'text-base',
  };

  return (
    <div
      className={`emotion-card relative overflow-hidden text-white ${sizeClasses[size]} ${className}`}
      style={{ backgroundColor: emotion.color }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={`Select ${emotion.name} emotion: ${emotion.description}`}
    >
      <div className="h-full flex flex-col justify-center items-center p-4 text-center">
        <h3 
          className={`font-bold mb-2 ${titleClasses[size]}`}
          style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}
        >
          {emotion.name}
        </h3>
        
        <p 
          className={`opacity-90 leading-tight ${descriptionClasses[size]}`}
          style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}
        >
          {emotion.description}
        </p>
      </div>
    </div>
  );
}