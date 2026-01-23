// Core TypeScript interfaces for Emotional Vocabulary Builder
// T006: Core TypeScript interfaces in src/data/types.ts

export type CoreEmotion = 'Sad' | 'Mad' | 'Scared' | 'Joyful' | 'Powerful' | 'Peaceful';

export interface EmotionData {
  id: string;                    // Unique identifier (e.g., 'sad-lonely')
  core: CoreEmotion;            // Top-level emotion category  
  secondary: string;            // Mid-level emotion grouping
  tertiary: string;             // Specific emotion name
  definition: string;           // Clear explanation of the emotion
  examples: string[];           // Real-world scenarios (3-4 examples)
  validation: string;           // Supportive validation message
  generalTechniques: string[];  // Regulation techniques (3-4 items)
  journalPrompt: string;        // Reflective question for self-awareness
}

export interface SessionState {
  currentStep: 'core' | 'secondary' | 'tertiary' | 'validation';
  selectedCore?: CoreEmotion;
  selectedSecondary?: string;
  selectedEmotion?: EmotionData;
  navigationHistory: NavigationStep[];
  timestamp: number;
}

export interface NavigationStep {
  step: SessionState['currentStep'];
  selection: string;
  timestamp: number;
}

export interface EmotionNavigation {
  // Core emotion selection
  selectCore: (core: CoreEmotion) => void;
  
  // Secondary emotion selection  
  selectSecondary: (secondary: string) => void;
  
  // Tertiary emotion selection (final)
  selectEmotion: (emotionId: string) => void;
  
  // Navigation controls
  goBack: () => void;
  startOver: () => void;
  
  // Current state
  currentSession: SessionState;
}

// Route parameter types
export interface CorePageProps {
  params: { core: CoreEmotion };
}

export interface SecondaryPageProps {
  params: { 
    core: CoreEmotion;
    secondary: string;
  };
}

export interface EmotionResultProps {
  searchParams: { emotionId: string };
}