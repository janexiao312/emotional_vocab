// T010: Base EmotionCard component with Tailwind CSS styling
'use client';

import React from 'react';

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
    small: 'h-32 min-h-[128px]',
    medium: 'h-40 min-h-[160px]',
    large: 'h-48 min-h-[192px]',
  };

  const titleClasses = {
    small: 'text-lg',
    medium: 'text-xl',
    large: 'text-2xl',
  };

  const descriptionClasses = {
    small: 'text-xs opacity-0',
    medium: 'text-sm',
    large: 'text-base',
  };

  // Create gradient based on emotion color
  const getGradientStyle = (color: string) => {
    const emotionGradients: { [key: string]: string } = {
      '#10B981': 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      '#F59E0B': 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
      '#EF4444': 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
      '#6366F1': 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
    };
    
    return emotionGradients[color] || `linear-gradient(135deg, ${color} 0%, ${color}dd 100%)`;
  };

  return (
    <div
      className={`emotion-card relative overflow-hidden text-white rounded-2xl group ${sizeClasses[size]} ${className}`}
      style={{ 
        background: getGradientStyle(emotion.color),
      }}
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
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 right-4 w-16 h-16 border-2 border-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-4 left-4 w-8 h-8 bg-white rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-6">
        <div className="flex-1 flex flex-col justify-center text-center">
          <h3 className={`font-bold mb-3 ${titleClasses[size]} drop-shadow-lg`}>
            {emotion.name}
          </h3>
          <p className={`${descriptionClasses[size]} opacity-90 leading-relaxed font-medium`}>
            {emotion.description}
          </p>
        </div>
        
        {/* Hover indicator */}
        <div className="flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <div className="w-8 h-1 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
}