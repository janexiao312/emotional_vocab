// T017: Core emotion layout wrapper with breadcrumb navigation
'use client';

import React from 'react';
import { useEmotionNavigation } from '../../src/hooks/useEmotionNavigation';
import { useRouter } from 'next/navigation';

// Arrow back icon
const ArrowBackIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

// Home icon
const HomeIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} fill="currentColor" viewBox="0 0 20 20">
    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
  </svg>
);

interface ExploreLayoutProps {
  children: React.ReactNode;
}

export default function ExploreLayout({ children }: ExploreLayoutProps) {
  const { session, canGoBack, goBack } = useEmotionNavigation();
  const router = useRouter();

  const handleHome = () => {
    router.push('/');
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="py-4">
        {/* Top Navigation */}
        <div className="flex justify-between items-center mb-6">
          {/* Back Button */}
          <button
            onClick={canGoBack ? goBack : handleHome}
            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors"
            style={{ color: '#7F8C8D' }}
          >
            <ArrowBackIcon className="w-4 h-4" />
            {canGoBack ? 'Back' : 'Home'}
          </button>

          {/* Home Button */}
          <button
            onClick={handleHome}
            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors"
            style={{ color: '#7F8C8D' }}
          >
            <HomeIcon className="w-4 h-4" />
            Start Over
          </button>
        </div>

        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <nav className="flex items-center space-x-2 text-sm" style={{ color: '#7F8C8D' }}>
            <button
              onClick={handleHome}
              className="hover:underline"
              style={{ color: '#7F8C8D' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#2E86AB'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#7F8C8D'}
            >
              Emotions
            </button>
            
            {session.selectedCore && (
              <>
                <span className="mx-2">›</span>
                <span style={{
                  color: session.currentStep === 'secondary' ? '#2E86AB' : '#7F8C8D',
                  fontWeight: session.currentStep === 'secondary' ? '500' : 'normal'
                }}>
                  {session.selectedCore}
                </span>
              </>
            )}
            
            {session.selectedSecondary && (
              <>
                <span className="mx-2">›</span>
                <span style={{
                  color: session.currentStep === 'tertiary' ? '#2E86AB' : '#7F8C8D',
                  fontWeight: session.currentStep === 'tertiary' ? '500' : 'normal'
                }}>
                  {session.selectedSecondary}
                </span>
              </>
            )}
            
            {session.selectedEmotion && (
              <>
                <span className="mx-2">›</span>
                <span style={{ color: '#2E86AB', fontWeight: '500' }}>
                  {session.selectedEmotion.tertiary}
                </span>
              </>
            )}
          </nav>
        </div>

        {/* Page Content */}
        {children}
      </div>
    </div>
  );
}