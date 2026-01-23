// T009: useSessionState hook for navigation state management
'use client';

import { useCallback } from 'react';
import { SessionState, NavigationStep, CoreEmotion, EmotionData } from '../data/types';
import { useLocalStorage } from './useLocalStorage';

const INITIAL_SESSION_STATE: SessionState = {
  currentStep: 'core',
  navigationHistory: [],
  timestamp: Date.now(),
};

/**
 * Custom hook for managing user's emotion exploration session state
 * Persists state in localStorage and provides navigation utilities
 */
export function useSessionState() {
  const [session, setSession] = useLocalStorage<SessionState>('emotion-session', INITIAL_SESSION_STATE);

  const updateSession = useCallback((updates: Partial<SessionState>) => {
    setSession((current) => ({
      ...current,
      ...updates,
      timestamp: Date.now(),
    }));
  }, [setSession]);

  const selectCore = useCallback((core: CoreEmotion) => {
    const newStep: NavigationStep = {
      step: 'core',
      selection: core,
      timestamp: Date.now(),
    };

    updateSession({
      currentStep: 'secondary',
      selectedCore: core,
      selectedSecondary: undefined,
      selectedEmotion: undefined,
      navigationHistory: [...session.navigationHistory, newStep],
    });
  }, [session.navigationHistory, updateSession]);

  const selectSecondary = useCallback((secondary: string) => {
    const newStep: NavigationStep = {
      step: 'secondary',
      selection: secondary,
      timestamp: Date.now(),
    };

    updateSession({
      currentStep: 'tertiary',
      selectedSecondary: secondary,
      selectedEmotion: undefined,
      navigationHistory: [...session.navigationHistory, newStep],
    });
  }, [session.navigationHistory, updateSession]);

  const selectEmotion = useCallback((emotion: EmotionData) => {
    const newStep: NavigationStep = {
      step: 'tertiary',
      selection: emotion.tertiary,
      timestamp: Date.now(),
    };

    updateSession({
      currentStep: 'validation',
      selectedEmotion: emotion,
      navigationHistory: [...session.navigationHistory, newStep],
    });
  }, [session.navigationHistory, updateSession]);

  const goBack = useCallback(() => {
    const newHistory = [...session.navigationHistory];
    newHistory.pop(); // Remove the last step

    if (newHistory.length === 0) {
      // Back to core selection
      updateSession({
        currentStep: 'core',
        selectedCore: undefined,
        selectedSecondary: undefined,
        selectedEmotion: undefined,
        navigationHistory: [],
      });
    } else {
      const lastStep = newHistory[newHistory.length - 1];
      
      if (lastStep.step === 'core') {
        updateSession({
          currentStep: 'secondary',
          selectedSecondary: undefined,
          selectedEmotion: undefined,
          navigationHistory: newHistory,
        });
      } else if (lastStep.step === 'secondary') {
        updateSession({
          currentStep: 'tertiary',
          selectedEmotion: undefined,
          navigationHistory: newHistory,
        });
      }
    }
  }, [session.navigationHistory, updateSession]);

  const startOver = useCallback(() => {
    setSession({
      ...INITIAL_SESSION_STATE,
      timestamp: Date.now(),
    });
  }, [setSession]);

  const completeSession = useCallback(() => {
    updateSession({
      currentStep: 'validation',
    });
  }, [updateSession]);

  return {
    session,
    selectCore,
    selectSecondary, 
    selectEmotion,
    goBack,
    startOver,
    completeSession,
    updateSession,
  };
}