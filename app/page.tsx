// T014: Homepage with core emotion cards
'use client';

import React from 'react';
import { EmotionGrid } from '../src/components/EmotionGrid';
import { useEmotionNavigation } from '../src/hooks/useEmotionNavigation';
import { CORE_EMOTION_INFO } from '../src/data/emotions';
import { CoreEmotion } from '../src/data/types';

export default function Home() {
  const { selectCore } = useEmotionNavigation();

  // Prepare core emotions data for the grid
  const coreEmotions = Object.entries(CORE_EMOTION_INFO).map(([emotion, info]) => ({
    name: emotion,
    description: info.description,
    color: info.color,
    onClick: () => selectCore(emotion as CoreEmotion),
  }));

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="min-h-screen flex flex-col justify-center py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-semibold mb-4" style={{ color: '#2C3E50' }}>
            How are you feeling?
          </h1>
          
          <p className="text-xl max-w-2xl mx-auto leading-relaxed mb-6" style={{ color: '#7F8C8D' }}>
            Let's start by choosing the highest level emotion that best matches how you're feeling right now. 
            We'll then guide you to explore more specific feelings.
          </p>
          
          <div className="max-w-lg mx-auto bg-blue-50 border border-blue-300 rounded-lg p-4">
            <p className="font-medium" style={{ color: '#2E86AB' }}>
              💡 Instruction: Pick the core emotion that feels most true to you right now
            </p>
          </div>
        </div>

        {/* Core Emotions Grid */}
        <EmotionGrid
          emotions={coreEmotions}
          cardSize="large"
          columns={{
            xs: 1,
            sm: 2, 
            md: 2,
            lg: 3,
          }}
        />

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="italic" style={{ color: '#7F8C8D' }}>
            No account required • Private and secure • Take your time
          </p>
        </div>
      </div>
    </div>
  );
}
