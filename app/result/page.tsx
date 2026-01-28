// T027: Validation result page showing emotion details and support
'use client';

import React, { Suspense } from 'react';
import { ValidationPanel } from '../../src/components/ValidationPanel';
import { RegulationPanel } from '../../src/components/RegulationPanel';
import { JournalPrompt } from '../../src/components/JournalPrompt';
import { useEmotionData } from '../../src/hooks/useEmotionData';
import { useSearchParams } from 'next/navigation';
import { notFound } from 'next/navigation';

// Loading spinner component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-32">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

export default function ResultPage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ResultPageContent />
    </Suspense>
  );
}

function ResultPageContent() {
  const searchParams = useSearchParams();
  const emotionId = searchParams.get('emotionId');
  const { getEmotionById } = useEmotionData();

  if (!emotionId) {
    notFound();
  }

  const emotion = getEmotionById(emotionId);

  if (!emotion) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold mb-4" style={{ color: '#2E86AB' }}>
            {emotion.tertiary}
          </h1>
          
          <p className="text-xl max-w-2xl mx-auto leading-relaxed mb-6" style={{ color: '#7F8C8D' }}>
            {emotion.definition}
          </p>
          
          <div className="max-w-lg mx-auto bg-green-50 border border-green-300 rounded-lg p-4">
            <p className="text-green-700 font-medium">
              ✨ Great choice! Now let&apos;s help you work with this emotion in healthy ways.
            </p>
          </div>
        </div>

        {/* Content Sections */}
        <div className="flex flex-col space-y-8">
          {/* Section Header */}
          <div className="text-center mb-4">
            <h2 className="text-3xl font-semibold mb-4" style={{ color: '#2C3E50' }}>
              Your Emotion Toolkit
            </h2>
            <p className="max-w-2xl mx-auto mb-6" style={{ color: '#7F8C8D' }}>
              Now that you&apos;ve identified your specific emotion, here are three powerful ways to work with it:
            </p>
          </div>

          {/* Validation Panel */}
          <ValidationPanel emotion={emotion} />

          {/* Regulation Techniques */}
          <RegulationPanel emotion={emotion} />

          {/* Journal Prompt */}
          <JournalPrompt emotion={emotion} />
        </div>
      </div>
    </div>
  );
}