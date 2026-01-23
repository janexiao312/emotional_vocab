# Next.js App Router Research: Multi-Layer Navigation for Emotion Exploration

## Overview

This research covers Next.js App Router implementation patterns for a 3-layer emotion exploration flow: **Core Emotions** → **Secondary Emotions** → **Tertiary Emotions** with state preservation, TypeScript integration, and proper loading/error handling.

## 1. File Structure Patterns for Nested Dynamic Routes

### Recommended File Structure

```
app/
├── layout.tsx                          # Root layout
├── page.tsx                           # Home page (core emotions)
├── globals.css                        # Global styles
├── emotion/                           # Emotion exploration routes
│   ├── layout.tsx                     # Emotion-specific layout
│   ├── [core]/                        # Dynamic route for core emotions
│   │   ├── page.tsx                   # Secondary emotions page
│   │   ├── loading.tsx                # Loading UI for secondary emotions
│   │   ├── error.tsx                  # Error boundary for secondary emotions
│   │   └── [secondary]/               # Nested dynamic route
│   │       ├── page.tsx               # Tertiary emotions page
│   │       ├── loading.tsx            # Loading UI for tertiary emotions
│   │       ├── error.tsx              # Error boundary for tertiary emotions
│   │       └── [tertiary]/            # Final nested dynamic route
│   │           ├── page.tsx           # Emotion details & validation
│   │           ├── loading.tsx        # Loading UI for details
│   │           └── error.tsx          # Error boundary for details
├── components/                        # Shared components
│   ├── EmotionCard.tsx
│   ├── Navigation.tsx
│   └── ui/
└── lib/                              # Utilities and types
    ├── emotions.ts                   # Emotion data constants
    ├── types.ts                      # TypeScript types
    └── utils.ts                      # Utility functions
```

### Route Mapping Examples

- `/` → Core emotions selection
- `/emotion/sad` → Secondary emotions for "sad"
- `/emotion/sad/disappointed` → Tertiary emotions for "disappointed"
- `/emotion/sad/disappointed/devastated` → Final emotion details

## 2. TypeScript Types for Route Parameters

### Core Types Definition

```typescript
// lib/types.ts

export type CoreEmotionId = 'sad' | 'mad' | 'scared' | 'joyful' | 'powerful' | 'peaceful';

export interface EmotionRouteParams {
  core: CoreEmotionId;
  secondary?: string;
  tertiary?: string;
}

export interface EmotionPageProps {
  params: Promise<EmotionRouteParams>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export interface CoreEmotion {
  id: CoreEmotionId;
  name: string;
  description: string;
  color: string;
  secondaryEmotions: SecondaryEmotion[];
}

export interface SecondaryEmotion {
  id: string;
  name: string;
  description: string;
  coreEmotionId: CoreEmotionId;
  tertiaryEmotions: TertiaryEmotion[];
}

export interface TertiaryEmotion {
  id: string;
  name: string;
  description: string;
  definition: string;
  examples: string[];
  regulationTechniques: string[];
  validationMessage: string;
  journalPrompt: string;
}

export interface EmotionSession {
  selectedCore?: CoreEmotionId;
  selectedSecondary?: string;
  selectedTertiary?: string;
  sessionId: string;
  timestamp: number;
  completed: boolean;
}
```

## 3. Page Component Patterns

### Root Layout with Session Context

```typescript
// app/layout.tsx

import { Metadata } from 'next';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { EmotionSessionProvider } from '@/components/EmotionSessionProvider';
import theme from '@/lib/theme';

export const metadata: Metadata = {
  title: 'Emotion Exploration',
  description: 'Explore and understand your emotions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <EmotionSessionProvider>
            {children}
          </EmotionSessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
```

### Core Emotions Page (Home)

```typescript
// app/page.tsx

import { Suspense } from 'react';
import { Container, Typography, Grid } from '@mui/material';
import { CoreEmotionCard } from '@/components/CoreEmotionCard';
import { CORE_EMOTIONS } from '@/lib/emotions';
import { CoreEmotionSkeleton } from '@/components/ui/Skeleton';

export default function HomePage() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom align="center">
        How are you feeling right now?
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 4 }}>
        Choose the core emotion that best matches your current state.
      </Typography>
      
      <Grid container spacing={3}>
        {CORE_EMOTIONS.map((emotion) => (
          <Grid item xs={12} sm={6} md={4} key={emotion.id}>
            <Suspense fallback={<CoreEmotionSkeleton />}>
              <CoreEmotionCard emotion={emotion} />
            </Suspense>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
```

### Secondary Emotions Page

```typescript
// app/emotion/[core]/page.tsx

import { notFound } from 'next/navigation';
import { Container, Typography, Grid, Breadcrumbs, Link } from '@mui/material';
import { ChevronLeft } from '@mui/icons-material';
import { EmotionCard } from '@/components/EmotionCard';
import { BackButton } from '@/components/ui/BackButton';
import { getCoreEmotion } from '@/lib/emotions';
import { EmotionPageProps } from '@/lib/types';

export default async function SecondaryEmotionsPage({ 
  params 
}: EmotionPageProps) {
  const { core } = await params;
  const coreEmotion = getCoreEmotion(core);

  if (!coreEmotion) {
    notFound();
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Breadcrumbs sx={{ mb: 2 }}>
        <Link href="/" underline="hover">
          Emotions
        </Link>
        <Typography color="text.primary">{coreEmotion.name}</Typography>
      </Breadcrumbs>

      <BackButton href="/" icon={<ChevronLeft />}>
        Back to Core Emotions
      </BackButton>

      <Typography variant="h3" component="h1" gutterBottom>
        {coreEmotion.name} - Choose a more specific feeling
      </Typography>

      <Typography variant="body1" sx={{ mb: 4 }}>
        {coreEmotion.description}
      </Typography>

      <Grid container spacing={3}>
        {coreEmotion.secondaryEmotions.map((emotion) => (
          <Grid item xs={12} sm={6} md={4} key={emotion.id}>
            <EmotionCard
              emotion={emotion}
              href={`/emotion/${core}/${emotion.id}`}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export async function generateStaticParams() {
  return [
    { core: 'sad' },
    { core: 'mad' },
    { core: 'scared' },
    { core: 'joyful' },
    { core: 'powerful' },
    { core: 'peaceful' },
  ];
}
```

### Tertiary Emotions Page

```typescript
// app/emotion/[core]/[secondary]/page.tsx

import { notFound } from 'next/navigation';
import { Container, Typography, Grid, Breadcrumbs, Link } from '@mui/material';
import { ChevronLeft } from '@mui/icons-material';
import { EmotionCard } from '@/components/EmotionCard';
import { BackButton } from '@/components/ui/BackButton';
import { getSecondaryEmotion, getCoreEmotion } from '@/lib/emotions';
import { EmotionPageProps } from '@/lib/types';

export default async function TertiaryEmotionsPage({ 
  params 
}: EmotionPageProps) {
  const { core, secondary } = await params;
  const coreEmotion = getCoreEmotion(core);
  const secondaryEmotion = getSecondaryEmotion(core, secondary!);

  if (!coreEmotion || !secondaryEmotion) {
    notFound();
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Breadcrumbs sx={{ mb: 2 }}>
        <Link href="/" underline="hover">
          Emotions
        </Link>
        <Link href={`/emotion/${core}`} underline="hover">
          {coreEmotion.name}
        </Link>
        <Typography color="text.primary">{secondaryEmotion.name}</Typography>
      </Breadcrumbs>

      <BackButton href={`/emotion/${core}`} icon={<ChevronLeft />}>
        Back to {coreEmotion.name}
      </BackButton>

      <Typography variant="h3" component="h1" gutterBottom>
        {secondaryEmotion.name} - Find your exact feeling
      </Typography>

      <Typography variant="body1" sx={{ mb: 4 }}>
        {secondaryEmotion.description}
      </Typography>

      <Grid container spacing={3}>
        {secondaryEmotion.tertiaryEmotions.map((emotion) => (
          <Grid item xs={12} sm={6} md={4} key={emotion.id}>
            <EmotionCard
              emotion={emotion}
              href={`/emotion/${core}/${secondary}/${emotion.id}`}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
```

### Final Emotion Details Page

```typescript
// app/emotion/[core]/[secondary]/[tertiary]/page.tsx

import { notFound } from 'next/navigation';
import { 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  Chip, 
  Box,
  Breadcrumbs,
  Link,
  Button
} from '@mui/material';
import { CheckCircle, Lightbulb, Edit } from '@mui/icons-material';
import { BackButton } from '@/components/ui/BackButton';
import { RegulationTechniques } from '@/components/RegulationTechniques';
import { JournalPrompt } from '@/components/JournalPrompt';
import { getTertiaryEmotion, getCoreEmotion, getSecondaryEmotion } from '@/lib/emotions';
import { EmotionPageProps } from '@/lib/types';

export default async function EmotionDetailsPage({ 
  params 
}: EmotionPageProps) {
  const { core, secondary, tertiary } = await params;
  const coreEmotion = getCoreEmotion(core);
  const secondaryEmotion = getSecondaryEmotion(core, secondary!);
  const tertiaryEmotion = getTertiaryEmotion(core, secondary!, tertiary!);

  if (!coreEmotion || !secondaryEmotion || !tertiaryEmotion) {
    notFound();
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Breadcrumbs sx={{ mb: 2 }}>
        <Link href="/" underline="hover">Emotions</Link>
        <Link href={`/emotion/${core}`} underline="hover">{coreEmotion.name}</Link>
        <Link href={`/emotion/${core}/${secondary}`} underline="hover">{secondaryEmotion.name}</Link>
        <Typography color="text.primary">{tertiaryEmotion.name}</Typography>
      </Breadcrumbs>

      <BackButton href={`/emotion/${core}/${secondary}`}>
        Back to {secondaryEmotion.name}
      </BackButton>

      {/* Validation Section */}
      <Card sx={{ mb: 4, bgcolor: 'success.light' }}>
        <CardContent>
          <Box display="flex" alignItems="center" gap={2} mb={2}>
            <CheckCircle color="success" />
            <Typography variant="h5">You're feeling {tertiaryEmotion.name}</Typography>
          </Box>
          <Typography variant="body1">
            {tertiaryEmotion.validationMessage}
          </Typography>
        </CardContent>
      </Card>

      {/* Definition and Examples */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            What does "{tertiaryEmotion.name}" mean?
          </Typography>
          <Typography variant="body1" paragraph>
            {tertiaryEmotion.definition}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Examples of when you might feel this way:
          </Typography>
          {tertiaryEmotion.examples.map((example, index) => (
            <Chip 
              key={index} 
              label={example} 
              variant="outlined" 
              sx={{ m: 0.5 }} 
            />
          ))}
        </CardContent>
      </Card>

      {/* Regulation Techniques */}
      <RegulationTechniques techniques={tertiaryEmotion.regulationTechniques} />

      {/* Journal Prompt */}
      <JournalPrompt prompt={tertiaryEmotion.journalPrompt} />

      {/* Action Buttons */}
      <Box display="flex" gap={2} justifyContent="center" sx={{ mt: 4 }}>
        <Button 
          variant="outlined" 
          href="/"
          startIcon={<Lightbulb />}
        >
          Explore Another Emotion
        </Button>
        <Button 
          variant="contained" 
          startIcon={<Edit />}
          onClick={() => {/* Save to session/local storage */}}
        >
          Save This Insight
        </Button>
      </Box>
    </Container>
  );
}
```

## 4. State Management with Context and localStorage

### Session Context Provider

```typescript
// components/EmotionSessionProvider.tsx

'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { EmotionSession } from '@/lib/types';

interface EmotionSessionContextType {
  session: EmotionSession | null;
  updateSession: (updates: Partial<EmotionSession>) => void;
  clearSession: () => void;
  isLoading: boolean;
}

const EmotionSessionContext = createContext<EmotionSessionContextType | undefined>(undefined);

export function EmotionSessionProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<EmotionSession | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load session from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('emotion-session');
      if (stored) {
        const parsedSession = JSON.parse(stored) as EmotionSession;
        setSession(parsedSession);
      }
    } catch (error) {
      console.error('Failed to load session:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Save session to localStorage whenever it changes
  useEffect(() => {
    if (session && !isLoading) {
      try {
        localStorage.setItem('emotion-session', JSON.stringify(session));
      } catch (error) {
        console.error('Failed to save session:', error);
      }
    }
  }, [session, isLoading]);

  const updateSession = (updates: Partial<EmotionSession>) => {
    setSession(prev => {
      if (!prev) {
        return {
          sessionId: crypto.randomUUID(),
          timestamp: Date.now(),
          completed: false,
          ...updates,
        };
      }
      return {
        ...prev,
        ...updates,
        timestamp: Date.now(),
      };
    });
  };

  const clearSession = () => {
    setSession(null);
    localStorage.removeItem('emotion-session');
  };

  return (
    <EmotionSessionContext.Provider value={{
      session,
      updateSession,
      clearSession,
      isLoading,
    }}>
      {children}
    </EmotionSessionContext.Provider>
  );
}

export function useEmotionSession() {
  const context = useContext(EmotionSessionContext);
  if (context === undefined) {
    throw new Error('useEmotionSession must be used within EmotionSessionProvider');
  }
  return context;
}
```

## 5. Loading and Error Handling

### Loading UI Components

```typescript
// app/emotion/[core]/loading.tsx

import { Container, Grid, Skeleton } from '@mui/material';

export default function Loading() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Skeleton variant="text" width={200} height={40} sx={{ mb: 2 }} />
      <Skeleton variant="text" width={300} height={60} sx={{ mb: 2 }} />
      <Skeleton variant="text" width="100%" height={24} sx={{ mb: 4 }} />
      
      <Grid container spacing={3}>
        {Array.from({ length: 6 }).map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Skeleton variant="rectangular" width="100%" height={200} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
```

### Error Boundary Components

```typescript
// app/emotion/[core]/error.tsx

'use client';

import { useEffect } from 'react';
import { Container, Typography, Button, Alert, Box } from '@mui/material';
import { Home, Refresh } from '@mui/icons-material';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('Emotion page error:', error);
  }, [error]);

  return (
    <Container maxWidth="md" sx={{ py: 8, textAlign: 'center' }}>
      <Alert severity="error" sx={{ mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Something went wrong
        </Typography>
        <Typography variant="body1">
          We encountered an error while loading the emotions. Please try again.
        </Typography>
      </Alert>

      <Box display="flex" gap={2} justifyContent="center">
        <Button
          variant="contained"
          onClick={reset}
          startIcon={<Refresh />}
        >
          Try Again
        </Button>
        <Button
          variant="outlined"
          href="/"
          startIcon={<Home />}
        >
          Go Home
        </Button>
      </Box>
    </Container>
  );
}
```

### Not Found Pages

```typescript
// app/emotion/[core]/not-found.tsx

import { Container, Typography, Button, Box } from '@mui/material';
import { Home, ArrowBack } from '@mui/icons-material';

export default function NotFound() {
  return (
    <Container maxWidth="md" sx={{ py: 8, textAlign: 'center' }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Emotion Not Found
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        The emotion you're looking for doesn't exist or has been moved.
      </Typography>
      
      <Box display="flex" gap={2} justifyContent="center">
        <Button
          variant="contained"
          href="/"
          startIcon={<Home />}
        >
          Start Over
        </Button>
        <Button
          variant="outlined"
          onClick={() => window.history.back()}
          startIcon={<ArrowBack />}
        >
          Go Back
        </Button>
      </Box>
    </Container>
  );
}
```

## 6. Navigation Patterns with State Preservation

### Custom Navigation Hook

```typescript
// lib/hooks/useEmotionNavigation.ts

'use client';

import { useRouter } from 'next/navigation';
import { useEmotionSession } from '@/components/EmotionSessionProvider';
import { CoreEmotionId } from '@/lib/types';

export function useEmotionNavigation() {
  const router = useRouter();
  const { updateSession } = useEmotionSession();

  const navigateToCore = (coreId: CoreEmotionId) => {
    updateSession({ selectedCore: coreId });
    router.push(`/emotion/${coreId}`);
  };

  const navigateToSecondary = (coreId: CoreEmotionId, secondaryId: string) => {
    updateSession({ 
      selectedCore: coreId,
      selectedSecondary: secondaryId 
    });
    router.push(`/emotion/${coreId}/${secondaryId}`);
  };

  const navigateToTertiary = (
    coreId: CoreEmotionId, 
    secondaryId: string, 
    tertiaryId: string
  ) => {
    updateSession({ 
      selectedCore: coreId,
      selectedSecondary: secondaryId,
      selectedTertiary: tertiaryId,
      completed: true
    });
    router.push(`/emotion/${coreId}/${secondaryId}/${tertiaryId}`);
  };

  const navigateBack = () => {
    router.back();
  };

  const navigateHome = () => {
    router.push('/');
  };

  return {
    navigateToCore,
    navigateToSecondary,
    navigateToTertiary,
    navigateBack,
    navigateHome,
  };
}
```

### Enhanced Emotion Card with Navigation

```typescript
// components/EmotionCard.tsx

'use client';

import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { useEmotionNavigation } from '@/lib/hooks/useEmotionNavigation';
import { CoreEmotion, SecondaryEmotion, TertiaryEmotion } from '@/lib/types';

interface EmotionCardProps {
  emotion: CoreEmotion | SecondaryEmotion | TertiaryEmotion;
  href?: string;
  onClick?: () => void;
}

export function EmotionCard({ emotion, href, onClick }: EmotionCardProps) {
  const navigation = useEmotionNavigation();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (href) {
      window.location.href = href;
    }
  };

  return (
    <Card 
      sx={{ 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        '&:hover': {
          transform: 'translateY(-2px)',
          transition: 'transform 0.2s ease-in-out',
        }
      }}
      onClick={handleClick}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" component="h3" gutterBottom>
          {emotion.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {emotion.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button 
          size="small" 
          endIcon={<ArrowForward />}
          fullWidth
        >
          Select
        </Button>
      </CardActions>
    </Card>
  );
}
```

## 7. Performance Optimizations

### Static Generation for Emotion Routes

```typescript
// app/emotion/[core]/[secondary]/[tertiary]/page.tsx

export async function generateStaticParams() {
  const params = [];
  
  // Generate all possible route combinations
  for (const coreEmotion of CORE_EMOTIONS) {
    for (const secondaryEmotion of coreEmotion.secondaryEmotions) {
      for (const tertiaryEmotion of secondaryEmotion.tertiaryEmotions) {
        params.push({
          core: coreEmotion.id,
          secondary: secondaryEmotion.id,
          tertiary: tertiaryEmotion.id,
        });
      }
    }
  }
  
  return params;
}
```

### Metadata Generation

```typescript
// app/emotion/[core]/[secondary]/[tertiary]/page.tsx

export async function generateMetadata({ params }: EmotionPageProps): Promise<Metadata> {
  const { core, secondary, tertiary } = await params;
  const tertiaryEmotion = getTertiaryEmotion(core, secondary!, tertiary!);
  
  if (!tertiaryEmotion) {
    return {
      title: 'Emotion Not Found',
    };
  }

  return {
    title: `${tertiaryEmotion.name} - Emotion Exploration`,
    description: tertiaryEmotion.definition,
  };
}
```

## 8. Best Practices Summary

### 1. Route Organization
- Use nested dynamic routes for hierarchical navigation
- Implement proper `generateStaticParams` for performance
- Create consistent loading and error boundaries at each level

### 2. State Management
- Use React Context for session state
- Persist navigation state in localStorage
- Update session data on each navigation step

### 3. TypeScript Integration
- Define strict types for route parameters
- Use proper async/await patterns for params
- Implement type-safe navigation helpers

### 4. Performance
- Pre-generate static routes where possible
- Implement proper loading states
- Use Suspense boundaries strategically

### 5. User Experience
- Provide breadcrumb navigation
- Implement back button functionality
- Show progress through the emotion exploration flow
- Handle errors gracefully with retry options

This implementation provides a solid foundation for your 3-layer emotion exploration flow with proper Next.js App Router patterns, TypeScript integration, and state preservation.