# Quickstart: Guest User Emotion Exploration

**Feature**: Guest User Emotion Exploration  
**Generated**: 2026-01-23  
**Prerequisites**: Node.js 18+, basic React/Next.js knowledge

## Project Setup

### 1. Initialize Next.js Project

```bash
# Create Next.js app with TypeScript and App Router
npx create-next-app@latest emotional-vocab --typescript --app --eslint --tailwind --src-dir=false

cd emotional-vocab
```

### 2. Install Dependencies

```bash
# Core dependencies (per Constitution: minimal dependencies)
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material  # For emotion icons

# Development dependencies
npm install --save-dev @types/node
```

### 3. Configure TypeScript

Update `tsconfig.json`:
```json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/data/*": ["./src/data/*"],
      "@/hooks/*": ["./src/hooks/*"],
      "@/utils/*": ["./src/utils/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### 4. Create Project Structure

```bash
# Create directory structure
mkdir -p src/{components,data,hooks,utils}
mkdir -p src/data/emotions
mkdir -p src/components/{cards,layout,navigation}
mkdir -p app/{explore,result}

# Create basic files
touch src/data/{types.ts,emotions/index.ts}
touch src/hooks/{useSessionState.ts,useEmotionNavigation.ts,useEmotionData.ts}
touch src/components/layout/{EmotionLayout.tsx,NavigationButtons.tsx}
```

## Implementation Steps

### Step 1: Core Data Types

Create `src/data/types.ts`:
```typescript
export type CoreEmotion = 'Sad' | 'Mad' | 'Scared' | 'Joyful' | 'Powerful' | 'Peaceful';

export interface EmotionData {
  id: string;
  core: CoreEmotion;
  secondary: string;
  tertiary: string;
  definition: string;
  examples: string[];
  validation: string;
  generalTechniques: string[];
  journalPrompt: string;
}

export interface SessionState {
  currentStep: 'core' | 'secondary' | 'tertiary' | 'validation';
  selectedCore?: CoreEmotion;
  selectedSecondary?: string;
  selectedEmotion?: EmotionData;
  navigationHistory: Array<{step: string; selection: string; timestamp: number}>;
  timestamp: number;
}
```

### Step 2: Emotion Data Setup

Create emotion data files:
```bash
# Create individual emotion category files
touch src/data/emotions/{sad,mad,scared,joyful,powerful,peaceful}.ts
```

Example `src/data/emotions/sad.ts`:
```typescript
import { EmotionData } from '../types';

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
    validation: 'Feeling lonely is deeply human. We\'re wired for connection, and when we experience distance from others—whether physical or emotional—it makes complete sense that loneliness surfaces.',
    generalTechniques: [
      'Reach out to someone, even with a simple text or call',
      'Engage in a community activity or group (online or in-person)',
      'Practice self-compassion - treat yourself as you would a friend feeling lonely',
      'Create something or journal to process the feeling'
    ],
    journalPrompt: 'What kind of connection am I craving right now? Is it depth, frequency, shared interests, or something else?'
  },
  // Add more sad emotions...
];
```

### Step 3: Session State Hook

Create `src/hooks/useSessionState.ts`:
```typescript
import { useState, useEffect, useCallback } from 'react';
import { SessionState } from '@/data/types';

const STORAGE_KEY = 'emotion-session';

export function useSessionState() {
  const [session, setSession] = useState<SessionState>({
    currentStep: 'core',
    navigationHistory: [],
    timestamp: Date.now(),
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setSession(JSON.parse(saved));
    } catch (error) {
      console.warn('Failed to load session state');
    }
  }, []);

  const updateSession = useCallback((updates: Partial<SessionState>) => {
    const newSession = { ...session, ...updates, timestamp: Date.now() };
    setSession(newSession);
    
    if (isClient) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newSession));
      } catch (error) {
        console.warn('Failed to save session state');
      }
    }
  }, [session, isClient]);

  return [session, updateSession] as const;
}
```

### Step 4: Basic Components

Create `src/components/cards/EmotionCard.tsx`:
```typescript
import { Card, CardContent, Typography } from '@mui/material';

interface EmotionCardProps {
  title: string;
  description?: string;
  onClick: () => void;
  color?: string;
}

export default function EmotionCard({ title, description, onClick, color = 'primary.main' }: EmotionCardProps) {
  return (
    <Card
      sx={{
        minHeight: 120,
        cursor: 'pointer',
        transition: 'all 0.2s',
        '&:hover': { transform: 'translateY(-2px)', boxShadow: 3 },
        '&:active': { transform: 'scale(0.98)' },
        borderLeft: `4px solid`,
        borderLeftColor: color,
      }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <CardContent>
        <Typography variant="h6" component="h2" gutterBottom>
          {title}
        </Typography>
        {description && (
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}
```

### Step 5: Page Implementation

Create `app/page.tsx` (Core emotions landing page):
```typescript
import { Grid, Container, Typography, Box } from '@mui/material';
import EmotionCard from '@/components/cards/EmotionCard';
import { useEmotionNavigation } from '@/hooks/useEmotionNavigation';

const CORE_EMOTIONS = [
  { name: 'Sad', color: '#4A90A4', description: 'Feelings of sadness, grief, and loss' },
  { name: 'Mad', color: '#C85250', description: 'Anger, frustration, and irritation' },
  { name: 'Scared', color: '#8B7355', description: 'Fear, anxiety, and worry' },
  { name: 'Joyful', color: '#F4A261', description: 'Happiness, excitement, and contentment' },
  { name: 'Powerful', color: '#E76F51', description: 'Strength, confidence, and determination' },
  { name: 'Peaceful', color: '#2A9D8F', description: 'Calm, relaxed, and serene feelings' }
];

export default function HomePage() {
  const { selectCore } = useEmotionNavigation();

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h3" component="h1" gutterBottom>
          How are you feeling?
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Choose the emotion category that best matches your current feelings
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {CORE_EMOTIONS.map((emotion) => (
          <Grid item xs={12} sm={6} md={4} key={emotion.name}>
            <EmotionCard
              title={emotion.name}
              description={emotion.description}
              color={emotion.color}
              onClick={() => selectCore(emotion.name as CoreEmotion)}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
```

### Step 6: Routing Setup

Create the route files:
```bash
# Create route pages
touch app/explore/[core]/page.tsx
mkdir -p app/explore/[core]/[secondary]
touch app/explore/[core]/[secondary]/page.tsx
touch app/result/page.tsx
```

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Type checking
npx tsc --noEmit
```

## Key Implementation Notes

### Constitutional Compliance
- ✅ **Clean Code**: TypeScript strict mode, component separation
- ✅ **Simple UX**: Card-based navigation, minimal cognitive load  
- ✅ **Responsive Design**: Mobile-first MUI Grid system
- ✅ **Minimal Dependencies**: Only React, Next.js, MUI, TypeScript
- ✅ **Zero Testing**: No testing framework or test files

### Performance Optimization
- Static generation for all emotion routes
- localStorage session persistence
- MUI component tree-shaking
- TypeScript strict mode for compile-time optimization

### Accessibility Features
- Keyboard navigation support
- ARIA labels and roles
- Focus management
- Screen reader announcements
- High contrast theme support

## Next Steps

1. Complete emotion data population (30 emotions total)
2. Implement remaining route pages
3. Add navigation components with back functionality
4. Create validation and regulation display components
5. Implement account creation invitation flow
6. Add error boundaries and loading states
7. Test on mobile devices and screen readers

## Troubleshooting

### Common Issues

**TypeScript errors**: Ensure all imports use absolute paths with `@/` prefix
**MUI styling issues**: Wrap app in MUI ThemeProvider
**localStorage SSR errors**: Always check `typeof window !== 'undefined'`
**Route navigation**: Use Next.js `useRouter` hook for client-side navigation

### Development Tips

- Use `console.log` for debugging (no testing framework available)
- Test localStorage in incognito mode for fallback behavior  
- Validate TypeScript with `npx tsc --noEmit` before building
- Use browser dev tools for responsive design testing