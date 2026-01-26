// T021: Tertiary emotion page - shows specific emotions under secondary category
'use client';

import React from 'react';
import { useEmotionNavigation } from '../../../../src/hooks/useEmotionNavigation';
import { CORE_EMOTION_INFO } from '../../../../src/data/emotions';
import { CoreEmotion } from '../../../../src/data/types';
import { notFound } from 'next/navigation';

interface SecondaryPageProps {
  params: Promise<{ 
    core: string;
    secondary: string;
  }>;
}

export default async function SecondaryEmotionPage({ params }: SecondaryPageProps) {
  const { core, secondary } = await params;
  
  // Validate core emotion
  const coreEmotion = core.charAt(0).toUpperCase() + core.slice(1).toLowerCase();
  if (!Object.keys(CORE_EMOTION_INFO).includes(coreEmotion)) {
    notFound();
  }

  // Decode the secondary emotion slug - handle special cases
  let secondaryEmotion: string;
  if (secondary === 'guilt-shame') {
    secondaryEmotion = 'Guilt/Shame';
  } else if (secondary === 'trust-broken') {
    secondaryEmotion = 'Trust Broken';
  } else if (secondary === 'unmet-expectations') {
    secondaryEmotion = 'Unmet Expectations';
  } else if (secondary === 'lingering-anger') {
    secondaryEmotion = 'Lingering Anger';
  } else if (secondary === 'self-doubt') {
    secondaryEmotion = 'Self-Doubt';
  } else {
    secondaryEmotion = secondary.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  }

  return (
    <SecondaryEmotionPageClient 
      core={coreEmotion as CoreEmotion} 
      secondary={secondaryEmotion}
    />
  );
}

function SecondaryEmotionPageClient({ 
  core, 
  secondary 
}: { 
  core: CoreEmotion;
  secondary: string;
}) {
  const { selectEmotion, getTertiaryEmotions } = useEmotionNavigation();
  
  const tertiaryEmotions = getTertiaryEmotions(core, secondary);
  const coreInfo = CORE_EMOTION_INFO[core];

  if (tertiaryEmotions.length === 0) {
    notFound();
  }

  return (
    <div className="py-4">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 
          className="text-4xl font-semibold mb-4"
          style={{ color: coreInfo.color }}
        >
          {secondary}
        </h1>
        
        <p className="text-xl max-w-2xl mx-auto mb-6" style={{ color: '#7F8C8D' }}>
          Let's get even more specific about your {secondary.toLowerCase()} feelings
        </p>

        <div className="max-w-2xl mx-auto bg-blue-50 border border-blue-300 rounded-lg p-4 mb-4">
          <p className="font-medium" style={{ color: '#2E86AB' }}>
            🎯 Final step: Choose the specific emotion that resonates most with you. Each choice includes definitions and examples to help you decide.
          </p>
        </div>
      </div>

      {/* Tertiary Emotions */}
      <div className="flex flex-col space-y-6">
        {tertiaryEmotions.map((emotion) => (
          <div 
            key={emotion.id}
            className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-lg shadow-sm cursor-pointer transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-lg"
            onClick={() => selectEmotion(emotion.id)}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 
                  className="text-2xl font-semibold"
                  style={{ color: coreInfo.color }}
                >
                  {emotion.tertiary}
                </h2>
                
                <button
                  className="px-4 py-2 border rounded-lg text-sm font-medium transition-colors"
                  style={{ 
                    borderColor: coreInfo.color,
                    color: coreInfo.color,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = coreInfo.color;
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = coreInfo.color;
                  }}
                >
                  This is it
                </button>
              </div>
              
              <p className="leading-relaxed mb-4" style={{ color: '#2C3E50' }}>
                {emotion.definition}
              </p>
              
              <p className="text-sm italic" style={{ color: '#7F8C8D' }}>
                Examples: {emotion.examples.slice(0, 2).join(', ')}
                {emotion.examples.length > 2 && '...'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}