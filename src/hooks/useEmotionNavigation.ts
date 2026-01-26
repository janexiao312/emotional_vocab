// T012: useEmotionNavigation hook for routing logic
'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useSessionState } from './useSessionState';
import { CoreEmotion, EmotionData } from '../data/types';
import { EMOTIONS_BY_CORE, ALL_EMOTIONS } from '../data/emotions';

/**
 * Custom hook that combines session state management with Next.js routing
 * Provides high-level navigation functions for the emotion exploration flow
 */
export function useEmotionNavigation() {
  const router = useRouter();
  const { 
    session, 
    selectCore: setCore,
    selectSecondary: setSecondary,
    selectEmotion: setEmotion,
    goBack: goBackInSession,
    startOver: startOverSession,
  } = useSessionState();

  // Navigate to core emotion selection (secondary emotions page)
  const selectCore = useCallback((core: CoreEmotion) => {
    setCore(core);
    router.push(`/explore/${core.toLowerCase()}`);
  }, [setCore, router]);

  // Navigate to secondary emotion selection (tertiary emotions page)
  const selectSecondary = useCallback((secondary: string) => {
    if (!session.selectedCore) {
      console.warn('No core emotion selected');
      return;
    }
    
    setSecondary(secondary);
    const coreSlug = session.selectedCore.toLowerCase();
    const secondarySlug = secondary.toLowerCase().replace(/\s+/g, '-').replace(/\//g, '-');
    router.push(`/explore/${coreSlug}/${secondarySlug}`);
  }, [session.selectedCore, setSecondary, router]);

  // Navigate to final emotion validation (results page)
  const selectEmotion = useCallback((emotionId: string) => {
    const emotion = ALL_EMOTIONS.find(e => e.id === emotionId);
    if (!emotion) {
      console.warn(`Emotion not found: ${emotionId}`);
      return;
    }
    
    setEmotion(emotion);
    router.push(`/result?emotionId=${emotionId}`);
  }, [setEmotion, router]);

  // Navigate back in the flow
  const goBack = useCallback(() => {
    const currentStep = session.currentStep;
    
    // Update session state first
    goBackInSession();
    
    // Navigate to appropriate page based on current step
    if (currentStep === 'secondary') {
      router.push('/');
    } else if (currentStep === 'tertiary') {
      if (session.selectedCore) {
        router.push(`/explore/${session.selectedCore.toLowerCase()}`);
      } else {
        router.push('/');
      }
    } else if (currentStep === 'validation') {
      if (session.selectedCore && session.selectedSecondary) {
        const coreSlug = session.selectedCore.toLowerCase();
        const secondarySlug = session.selectedSecondary.toLowerCase().replace(/\s+/g, '-');
        router.push(`/explore/${coreSlug}/${secondarySlug}`);
      } else if (session.selectedCore) {
        router.push(`/explore/${session.selectedCore.toLowerCase()}`);
      } else {
        router.push('/');
      }
    }
  }, [session, goBackInSession, router]);

  // Start over - return to home page
  const startOver = useCallback(() => {
    startOverSession();
    router.push('/');
  }, [startOverSession, router]);

  // Utility functions for getting emotion data
  const getSecondaryEmotions = useCallback((core: CoreEmotion) => {
    const emotions = EMOTIONS_BY_CORE[core];
    const secondaries = Array.from(new Set(emotions.map(emotion => emotion.secondary)));
    return secondaries;
  }, []);

  const getTertiaryEmotions = useCallback((core: CoreEmotion, secondary: string) => {
    return EMOTIONS_BY_CORE[core].filter(emotion => emotion.secondary === secondary);
  }, []);

  const getEmotionById = useCallback((id: string): EmotionData | undefined => {
    return ALL_EMOTIONS.find(emotion => emotion.id === id);
  }, []);

  // Get current navigation context
  const canGoBack = session.navigationHistory.length > 0;
  const currentLevel = session.currentStep;
  
  return {
    // Navigation actions
    selectCore,
    selectSecondary,
    selectEmotion,
    goBack,
    startOver,
    
    // State
    session,
    canGoBack,
    currentLevel,
    
    // Data utilities
    getSecondaryEmotions,
    getTertiaryEmotions,
    getEmotionById,
  };
}