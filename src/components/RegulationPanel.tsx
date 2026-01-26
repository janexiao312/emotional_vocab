// T029: RegulationPanel component for technique display
'use client';

import React from 'react';
import { EmotionData } from '../data/types';

// Tool/Build icon component
const BuildIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
  </svg>
);

// Lightbulb icon component
const LightbulbIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} fill="currentColor" viewBox="0 0 20 20">
    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.477.859h4z" />
  </svg>
);

interface RegulationPanelProps {
  emotion: EmotionData;
}

export function RegulationPanel({ emotion }: RegulationPanelProps) {
  return (
    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-lg shadow-sm">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center mb-6">
          <BuildIcon className="w-8 h-8 text-white mr-3" />
          <h2 className="text-2xl font-semibold text-white">
            Ways to Navigate This Feeling
          </h2>
        </div>

        {/* Techniques Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {emotion.generalTechniques.map((technique, index) => (
            <div
              key={index}
              className="flex items-start gap-3"
            >
              <span className="flex items-center justify-center w-8 h-6 bg-white/20 text-white font-bold text-sm rounded-full min-w-8">
                {index + 1}
              </span>
              
              <p className="text-white leading-relaxed flex-1">
                {technique}
              </p>
            </div>
          ))}
        </div>

        {/* Tips Section */}
        <div className="mt-8 pt-6 border-t border-white/20">
          <div className="flex items-center mb-4">
            <LightbulbIcon className="w-5 h-5 text-white mr-2" />
            <p className="font-medium text-white text-sm">
              Remember
            </p>
          </div>
          
          <p className="text-white/90 leading-relaxed text-sm">
            These techniques take practice. Try one or two that resonate with you right now. 
            Be patient with yourself as you learn what works best for you.
          </p>
        </div>
      </div>
    </div>
  );
}