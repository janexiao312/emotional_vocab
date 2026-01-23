// Core Type Definitions for Guest Emotion Exploration
// Generated: 2026-01-23

// Core emotion categories from Dr. Gloria Willcox's Feelings Wheel
export type CoreEmotion = 'Sad' | 'Mad' | 'Scared' | 'Joyful' | 'Powerful' | 'Peaceful';

// Complete emotion data structure
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

// User session tracking
export interface SessionState {
  currentStep: NavigationStep;
  selectedCore?: CoreEmotion;
  selectedSecondary?: string;
  selectedEmotion?: EmotionData;
  navigationHistory: NavigationHistoryItem[];
  timestamp: number;
  userId?: string;              // Optional for guest users
}

// Navigation flow steps
export type NavigationStep = 'core' | 'secondary' | 'tertiary' | 'validation';

// Navigation history tracking
export interface NavigationHistoryItem {
  step: NavigationStep;
  selection: string;
  timestamp: number;
  route: string;
}

// Next.js page props interfaces
export interface CorePageProps {
  params: Record<string, never>;  // No params for core page
  searchParams: Record<string, never>;
}

export interface SecondaryPageProps {
  params: { core: string };
  searchParams: Record<string, never>;
}

export interface TertiaryPageProps {
  params: { 
    core: string;
    secondary: string;
  };
  searchParams: Record<string, never>;
}

export interface ValidationPageProps {
  params: Record<string, never>;
  searchParams: { emotionId: string };
}

// Hook return types
export interface UseSessionStateReturn {
  session: SessionState;
  updateSession: (updates: Partial<SessionState>) => void;
  clearSession: () => void;
  isLoading: boolean;
}

export interface UseEmotionNavigationReturn {
  selectCore: (core: CoreEmotion) => void;
  selectSecondary: (secondary: string) => void;
  selectEmotion: (emotionId: string) => void;
  goBack: () => void;
  startOver: () => void;
  currentSession: SessionState;
  canGoBack: boolean;
}

export interface UseEmotionDataReturn {
  getCoreEmotions: () => CoreEmotion[];
  getSecondaryEmotions: (core: CoreEmotion) => string[];
  getTertiaryEmotions: (core: CoreEmotion, secondary: string) => EmotionData[];
  getEmotionById: (id: string) => EmotionData | undefined;
  getAllEmotions: () => EmotionData[];
}

// Theme and styling types
export interface EmotionTheme {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  accent: string;
}

export interface CoreEmotionColors {
  Sad: EmotionTheme;
  Mad: EmotionTheme;
  Scared: EmotionTheme;
  Joyful: EmotionTheme;
  Powerful: EmotionTheme;
  Peaceful: EmotionTheme;
}

// Error handling types
export interface EmotionExplorationError {
  code: string;
  message: string;
  step?: NavigationStep;
  emotionId?: string;
  recoverable: boolean;
}

// Analytics/tracking types (for future use)
export interface SessionAnalytics {
  sessionId: string;
  startTime: number;
  endTime?: number;
  completedFlow: boolean;
  selectedEmotion?: string;
  navigationPath: string[];
  deviceType: 'mobile' | 'tablet' | 'desktop';
}

// Accessibility types
export interface AccessibilityAnnouncement {
  message: string;
  priority: 'polite' | 'assertive';
  clear?: boolean;
}