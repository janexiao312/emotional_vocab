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
    <div className="min-h-screen">
      {/* Hero Section with Gradient Background */}
      <div className="relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-16 sm:py-24">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">How are you</span>
              <br />
              <span className="text-slate-700">feeling today?</span>
            </h1>
            
            <p className="text-xl sm:text-2xl max-w-4xl mx-auto leading-relaxed mb-10 text-slate-600">
              Let&apos;s start by choosing the core emotion that resonates with you right now.
              <br className="hidden sm:block" />
              We&apos;ll guide you through exploring your feelings with care and understanding.
            </p>
            
            <div className="max-w-2xl mx-auto">
              <div className="instruction-card rounded-2xl p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">💡</span>
                    </div>
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-lg text-slate-800 mb-2">Getting Started</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Choose the emotion that feels most authentic to your current experience. There&apos;s no right or wrong answer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Emotions Grid */}
          <div className="max-w-6xl mx-auto">
            <EmotionGrid
              emotions={coreEmotions}
              cardSize="large"
              columns={{
                xs: 1,
                sm: 2, 
                md: 2,
                lg: 4,
                xl: 4,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
