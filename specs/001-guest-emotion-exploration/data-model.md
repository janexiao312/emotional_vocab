# Data Model: Guest User Emotion Exploration

**Generated**: 2026-01-23  
**Feature**: Guest User Emotion Exploration  
**Context**: Phase 1 data model design based on research findings

## Core Data Entities

### 1. EmotionData Interface

```typescript
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

export type CoreEmotion = 'Sad' | 'Mad' | 'Scared' | 'Joyful' | 'Powerful' | 'Peaceful';
```

### 2. SessionState Interface

```typescript
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
```

### 3. Navigation Flow Types

```typescript
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
```

## Data Organization Structure

### Emotion Data Modules

```typescript
// src/data/emotions/sad.ts
export const SAD_EMOTIONS: EmotionData[] = [
  {
    id: 'sad-lonely',
    core: 'Sad',
    secondary: 'Isolated',
    tertiary: 'Lonely',
    definition: 'A feeling of being disconnected from others, longing for companionship or meaningful connection.',
    examples: [
      'Moving to a new city where you don\'t know anyone yet',
      'Feeling like nobody understands what you\'re going through',
      'Watching friends connect while feeling on the outside'
    ],
    validation: 'Feeling lonely is deeply human. We\'re wired for connection...',
    generalTechniques: [
      'Reach out to someone, even with a simple text or call',
      'Engage in a community activity or group (online or in-person)',
      'Practice self-compassion - treat yourself as you would a friend feeling lonely',
      'Create something or journal to process the feeling'
    ],
    journalPrompt: 'What kind of connection am I craving right now? Is it depth, frequency, shared interests, or something else?'
  },
  // ... more sad emotions
];

// src/data/emotions/index.ts
export const ALL_EMOTIONS: EmotionData[] = [
  ...SAD_EMOTIONS,
  ...MAD_EMOTIONS,
  ...SCARED_EMOTIONS,
  ...JOYFUL_EMOTIONS,
  ...POWERFUL_EMOTIONS,
  ...PEACEFUL_EMOTIONS,
];

export const EMOTIONS_BY_CORE: Record<CoreEmotion, EmotionData[]> = {
  Sad: SAD_EMOTIONS,
  Mad: MAD_EMOTIONS,
  Scared: SCARED_EMOTIONS,
  Joyful: JOYFUL_EMOTIONS,
  Powerful: POWERFUL_EMOTIONS,
  Peaceful: PEACEFUL_EMOTIONS,
};
```

### Data Access Patterns

```typescript
// Utility functions for data access
export function getEmotionById(id: string): EmotionData | undefined {
  return ALL_EMOTIONS.find(emotion => emotion.id === id);
}

export function getSecondaryEmotions(core: CoreEmotion): string[] {
  const emotions = EMOTIONS_BY_CORE[core];
  return Array.from(new Set(emotions.map(emotion => emotion.secondary)));
}

export function getTertiaryEmotions(core: CoreEmotion, secondary: string): EmotionData[] {
  return EMOTIONS_BY_CORE[core].filter(emotion => emotion.secondary === secondary);
}

export function getCoreEmotions(): CoreEmotion[] {
  return ['Sad', 'Mad', 'Scared', 'Joyful', 'Powerful', 'Peaceful'];
}
```

## State Management Patterns

### Session State Hook

```typescript
export function useSessionState(): [SessionState, (state: Partial<SessionState>) => void] {
  const [session, setSession] = useLocalStorage<SessionState>('emotion-session', {
    currentStep: 'core',
    navigationHistory: [],
    timestamp: Date.now(),
  });

  const updateSession = useCallback((updates: Partial<SessionState>) => {
    setSession(current => ({
      ...current,
      ...updates,
      timestamp: Date.now(),
    }));
  }, [setSession]);

  return [session, updateSession];
}
```

### Navigation State Hook

```typescript
export function useEmotionNavigation(): EmotionNavigation {
  const [session, updateSession] = useSessionState();
  const router = useRouter();

  const selectCore = useCallback((core: CoreEmotion) => {
    updateSession({
      currentStep: 'secondary',
      selectedCore: core,
      navigationHistory: [...session.navigationHistory, {
        step: 'core',
        selection: core,
        timestamp: Date.now(),
      }],
    });
    router.push(`/explore/${core}`);
  }, [updateSession, router, session.navigationHistory]);

  const selectSecondary = useCallback((secondary: string) => {
    if (!session.selectedCore) return;
    
    updateSession({
      currentStep: 'tertiary',
      selectedSecondary: secondary,
      navigationHistory: [...session.navigationHistory, {
        step: 'secondary',
        selection: secondary,
        timestamp: Date.now(),
      }],
    });
    router.push(`/explore/${session.selectedCore}/${encodeURIComponent(secondary)}`);
  }, [updateSession, router, session]);

  const selectEmotion = useCallback((emotionId: string) => {
    const emotion = getEmotionById(emotionId);
    if (!emotion) return;
    
    updateSession({
      currentStep: 'validation',
      selectedEmotion: emotion,
      navigationHistory: [...session.navigationHistory, {
        step: 'tertiary',
        selection: emotionId,
        timestamp: Date.now(),
      }],
    });
    router.push(`/result?emotionId=${emotionId}`);
  }, [updateSession, router, session]);

  const goBack = useCallback(() => {
    const history = session.navigationHistory;
    if (history.length === 0) {
      router.push('/');
      return;
    }

    const previousStep = history[history.length - 1];
    const newHistory = history.slice(0, -1);
    
    updateSession({
      navigationHistory: newHistory,
      currentStep: previousStep.step,
    });

    // Navigate to appropriate route based on step
    switch (previousStep.step) {
      case 'core':
        router.push('/');
        break;
      case 'secondary':
        router.push(`/explore/${session.selectedCore}`);
        break;
      case 'tertiary':
        router.push(`/explore/${session.selectedCore}/${encodeURIComponent(session.selectedSecondary || '')}`);
        break;
    }
  }, [session, updateSession, router]);

  const startOver = useCallback(() => {
    updateSession({
      currentStep: 'core',
      selectedCore: undefined,
      selectedSecondary: undefined,
      selectedEmotion: undefined,
      navigationHistory: [],
    });
    router.push('/');
  }, [updateSession, router]);

  return {
    selectCore,
    selectSecondary,
    selectEmotion,
    goBack,
    startOver,
    currentSession: session,
  };
}
```

## Data Validation & Type Safety

### Runtime Type Checking (Optional)

```typescript
// Optional: Runtime validation for emotion data integrity
export function isValidEmotionData(data: any): data is EmotionData {
  return (
    typeof data.id === 'string' &&
    ['Sad', 'Mad', 'Scared', 'Joyful', 'Powerful', 'Peaceful'].includes(data.core) &&
    typeof data.secondary === 'string' &&
    typeof data.tertiary === 'string' &&
    typeof data.definition === 'string' &&
    Array.isArray(data.examples) &&
    typeof data.validation === 'string' &&
    Array.isArray(data.generalTechniques) &&
    typeof data.journalPrompt === 'string'
  );
}
```

## Performance Considerations

- **Data Splitting**: Emotions organized by core category for tree-shaking
- **Lazy Loading**: Only load relevant emotion data for current selection
- **Memoization**: Cache emotion lookups and navigation state
- **Minimal Updates**: Only update changed portions of session state

## Data Integrity

- **TypeScript Strict Mode**: Compile-time type checking
- **Immutable Updates**: Always create new state objects
- **Consistent IDs**: Predictable emotion ID format (`{core}-{tertiary-lowercase}`)
- **Data Completeness**: All 30 emotions have complete data sets