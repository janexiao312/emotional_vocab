// T022: useEmotionData hook for secondary emotion filtering logic
'use client';

import { useMemo } from 'react';
import { EmotionData, CoreEmotion } from '../data/types';
import { ALL_EMOTIONS, EMOTIONS_BY_CORE } from '../data/emotions';

/**
 * Custom hook for accessing and filtering emotion data
 * Provides utilities for working with the emotion dataset
 */
export function useEmotionData() {
  // Get all emotions
  const allEmotions = useMemo(() => ALL_EMOTIONS, []);

  // Get emotions by core category
  const getEmotionsByCore = useMemo(() => {
    return (core: CoreEmotion): EmotionData[] => {
      return EMOTIONS_BY_CORE[core] || [];
    };
  }, []);

  // Get unique secondary emotions for a core emotion
  const getSecondaryEmotions = useMemo(() => {
    return (core: CoreEmotion): string[] => {
      const emotions = EMOTIONS_BY_CORE[core] || [];
      const secondaries = emotions.map(emotion => emotion.secondary);
      return Array.from(new Set(secondaries));
    };
  }, []);

  // Get tertiary emotions for a core and secondary combination
  const getTertiaryEmotions = useMemo(() => {
    return (core: CoreEmotion, secondary: string): EmotionData[] => {
      const coreEmotions = EMOTIONS_BY_CORE[core] || [];
      return coreEmotions.filter(emotion => emotion.secondary === secondary);
    };
  }, []);

  // Get emotion by ID
  const getEmotionById = useMemo(() => {
    return (id: string): EmotionData | undefined => {
      return ALL_EMOTIONS.find(emotion => emotion.id === id);
    };
  }, []);

  // Search emotions by text (definition, examples, techniques)
  const searchEmotions = useMemo(() => {
    return (query: string): EmotionData[] => {
      if (!query.trim()) return [];
      
      const searchTerm = query.toLowerCase().trim();
      
      return ALL_EMOTIONS.filter(emotion => {
        return (
          emotion.tertiary.toLowerCase().includes(searchTerm) ||
          emotion.definition.toLowerCase().includes(searchTerm) ||
          emotion.examples.some(example => 
            example.toLowerCase().includes(searchTerm)
          ) ||
          emotion.generalTechniques.some(technique => 
            technique.toLowerCase().includes(searchTerm)
          )
        );
      });
    };
  }, []);

  // Get random emotions (for inspiration)
  const getRandomEmotions = useMemo(() => {
    return (count: number = 5): EmotionData[] => {
      const shuffled = [...ALL_EMOTIONS].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    };
  }, []);

  // Get emotions by validation message tone (positive, supportive, etc.)
  const getEmotionsByValidationType = useMemo(() => {
    return (type: 'supportive' | 'empowering' | 'normalizing'): EmotionData[] => {
      return ALL_EMOTIONS.filter(emotion => {
        const validation = emotion.validation.toLowerCase();
        
        switch (type) {
          case 'supportive':
            return validation.includes('shows') || validation.includes('strength');
          case 'empowering':
            return validation.includes('power') || validation.includes('capable');
          case 'normalizing':
            return validation.includes('human') || validation.includes('normal');
          default:
            return false;
        }
      });
    };
  }, []);

  // Statistics about the emotion dataset
  const getDatasetStats = useMemo(() => {
    return () => {
      const stats = {
        totalEmotions: ALL_EMOTIONS.length,
        emotionsByCore: Object.entries(EMOTIONS_BY_CORE).reduce((acc, [core, emotions]) => {
          acc[core as CoreEmotion] = emotions.length;
          return acc;
        }, {} as Record<CoreEmotion, number>),
        totalSecondaryCategories: Array.from(
          new Set(ALL_EMOTIONS.map(emotion => emotion.secondary))
        ).length,
        averageExamplesPerEmotion: ALL_EMOTIONS.reduce((sum, emotion) => 
          sum + emotion.examples.length, 0
        ) / ALL_EMOTIONS.length,
        averageTechniquesPerEmotion: ALL_EMOTIONS.reduce((sum, emotion) => 
          sum + emotion.generalTechniques.length, 0
        ) / ALL_EMOTIONS.length,
      };
      
      return stats;
    };
  }, []);

  return {
    allEmotions,
    getEmotionsByCore,
    getSecondaryEmotions,
    getTertiaryEmotions,
    getEmotionById,
    searchEmotions,
    getRandomEmotions,
    getEmotionsByValidationType,
    getDatasetStats,
  };
}