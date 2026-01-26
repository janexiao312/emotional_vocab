// T028: ValidationPanel component for supportive messages
'use client';

import React from 'react';
import { EmotionData } from '../data/types';

// Heart icon component
const HeartIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
  </svg>
);

// Psychology/Brain icon component
const BrainIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
  </svg>
);

interface ValidationPanelProps {
  emotion: EmotionData;
}

export function ValidationPanel({ emotion }: ValidationPanelProps) {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-200 border border-gray-200 rounded-lg shadow-sm">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center mb-6">
          <HeartIcon className="w-8 h-8 text-red-500 mr-3" />
          <h2 className="text-2xl font-semibold text-text-primary">
            You Are Not Alone
          </h2>
        </div>

        {/* Validation Message */}
        <p className="text-text-primary leading-relaxed text-lg italic mb-8">
          {emotion.validation}
        </p>

        {/* Examples Section */}
        <div className="mt-8">
          <div className="flex items-center mb-4">
            <BrainIcon className="w-6 h-6 text-primary mr-3" />
            <h3 className="text-xl font-medium text-text-primary">
              Common Experiences
            </h3>
          </div>

          <ul className="list-none p-0 m-0 space-y-2">
            {emotion.examples.map((example, index) => (
              <li
                key={index}
                className="text-text-secondary leading-relaxed pl-4 relative"
              >
                <span className="absolute left-0 text-primary font-bold">•</span>
                {example}
              </li>
            ))}
          </ul>
        </div>

        {/* Reassurance Footer */}
        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          <p className="text-text-secondary font-medium text-sm">
            Your feelings are valid and this experience is part of being human. 
            You have the strength to navigate this.
          </p>
        </div>
      </div>
    </div>
  );
}