// T030: JournalPrompt component for reflection questions
'use client';

import React, { useState } from 'react';
import { EmotionData } from '../data/types';

// Book icon component
const BookIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
  </svg>
);

// Lightbulb icon component
const LightbulbIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} fill="currentColor" viewBox="0 0 20 20">
    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.477.859h4z" />
  </svg>
);

// Expand/Collapse icons
const ExpandMoreIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

const ExpandLessIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
  </svg>
);

interface JournalPromptProps {
  emotion: EmotionData;
}

export function JournalPrompt({ emotion }: JournalPromptProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [journalText, setJournalText] = useState('');

  const handleToggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handleStartOver = () => {
    // This will be implemented when we add navigation
    window.location.href = '/';
  };

  return (
    <div className="bg-gradient-to-br from-orange-100 to-orange-200 border border-gray-200 rounded-lg shadow-sm">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <BookIcon className="w-8 h-8 mr-3" style={{ color: '#F18F01' }} />
            <h2 className="text-2xl font-semibold" style={{ color: '#2C3E50' }}>
              Reflect & Explore
            </h2>
          </div>

          <button
            onClick={handleToggleExpanded}
            className="p-2 hover:bg-black/5 rounded-full transition-colors"
            style={{ color: '#7F8C8D' }}
          >
            {isExpanded ? (
              <ExpandLessIcon className="w-6 h-6" />
            ) : (
              <ExpandMoreIcon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Prompt Question */}
        <div className="flex items-start gap-3 mb-6">
          <LightbulbIcon className="w-6 h-6 mt-1" style={{ color: '#F18F01' }} />
          
          <div className="flex-1">
            <h3 className="text-xl font-medium mb-2" style={{ color: '#2C3E50' }}>
              Journal Prompt
            </h3>
            
            <p className="leading-relaxed italic text-lg" style={{ color: '#2C3E50' }}>
              {emotion.journalPrompt}
            </p>
          </div>
        </div>

        {/* Expandable Journal Area */}
        <div className={`transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="mt-6">
            <textarea
              className="w-full h-40 p-4 bg-white/70 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
              placeholder="Take a moment to reflect on this question. Write down whatever comes to mind - there's no right or wrong answer..."
              value={journalText}
              onChange={(e) => setJournalText(e.target.value)}
            />

            <div className="text-center mt-4">
              <p className="text-sm italic mb-4" style={{ color: '#7F8C8D' }}>
                Your reflections are private and not saved anywhere.
                This space is just for you.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 pt-6 border-t border-black/10 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleStartOver}
              className="text-white hover:opacity-90 px-8 py-2 rounded-lg font-medium min-w-40 transition-colors"
              style={{ backgroundColor: '#2E86AB' }}
            >
              Explore Another Emotion
            </button>

            {!isExpanded && (
              <button
                onClick={handleToggleExpanded}
                className="border text-white hover:bg-opacity-90 px-8 py-2 rounded-lg font-medium min-w-40 transition-colors"
                style={{ 
                  borderColor: '#F18F01',
                  color: '#F18F01',
                  backgroundColor: 'transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#F18F01';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#F18F01';
                }}
              >
                Open Journal Space
              </button>
            )}
          </div>
        </div>

        {/* Encouraging Message & Start Over */}
        <div className="mt-8 text-center">
          <p className="leading-relaxed text-sm mb-6" style={{ color: '#7F8C8D' }}>
            Taking time to understand your emotions is an act of self-care and wisdom. 
            You're building valuable emotional intelligence.
          </p>
          
          <button
            onClick={handleStartOver}
            className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-xl text-lg transition-all transform hover:-translate-y-0.5 shadow-lg"
          >
            🔄 Start Over - Explore Another Emotion
          </button>
        </div>
      </div>
    </div>
  );
}