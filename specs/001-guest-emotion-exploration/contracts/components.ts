// Component Props Interfaces for Guest Emotion Exploration
// Generated: 2026-01-23

import { EmotionData, CoreEmotion, SessionState } from './types';

// Landing Page Components
export interface CoreEmotionGridProps {
  emotions: CoreEmotion[];
  onEmotionSelect: (core: CoreEmotion) => void;
  loading?: boolean;
}

export interface CoreEmotionCardProps {
  emotion: CoreEmotion;
  description: string;
  color: string;
  onClick: (emotion: CoreEmotion) => void;
  disabled?: boolean;
}

// Secondary Emotion Page Components  
export interface SecondaryEmotionGridProps {
  core: CoreEmotion;
  secondaryEmotions: string[];
  onSecondarySelect: (secondary: string) => void;
  loading?: boolean;
}

export interface SecondaryEmotionCardProps {
  core: CoreEmotion;
  secondary: string;
  emotionCount: number;
  onClick: (secondary: string) => void;
  disabled?: boolean;
}

// Tertiary Emotion Page Components
export interface TertiaryEmotionGridProps {
  core: CoreEmotion;
  secondary: string;
  emotions: EmotionData[];
  onEmotionSelect: (emotionId: string) => void;
  loading?: boolean;
}

export interface TertiaryEmotionCardProps {
  emotion: EmotionData;
  onClick: (emotionId: string) => void;
  expanded?: boolean;
  disabled?: boolean;
}

// Validation & Regulation Components
export interface ValidationPanelProps {
  emotion: EmotionData;
  showFull?: boolean;
}

export interface RegulationPanelProps {
  techniques: string[];
  emotionName: string;
  expanded?: boolean;
}

export interface JournalPromptProps {
  prompt: string;
  emotionName: string;
  allowCopy?: boolean;
}

// Navigation Components  
export interface BreadcrumbNavigationProps {
  currentStep: SessionState['currentStep'];
  selectedCore?: CoreEmotion;
  selectedSecondary?: string;
  selectedEmotion?: EmotionData;
  onNavigate: (step: string) => void;
}

export interface NavigationButtonsProps {
  showBack: boolean;
  showStartOver: boolean;
  showNext?: boolean;
  backLabel?: string;
  nextLabel?: string;
  onBack: () => void;
  onStartOver: () => void;
  onNext?: () => void;
  loading?: boolean;
}

// Layout Components
export interface EmotionLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  showProgress?: boolean;
  currentStep?: number;
  totalSteps?: number;
}

export interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
  stepLabels?: string[];
}

// Account Conversion Components  
export interface AccountInvitationProps {
  selectedEmotion: EmotionData;
  onCreateAccount: () => void;
  onContinueGuest: () => void;
  onDismiss: () => void;
  show: boolean;
}

// Utility Component Props
export interface LoadingSkeletonProps {
  type: 'card' | 'grid' | 'text';
  count?: number;
  height?: number;
}

export interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error: Error; resetError: () => void }>;
  onError?: (error: Error) => void;
}