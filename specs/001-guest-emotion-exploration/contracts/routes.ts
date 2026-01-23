// Next.js App Router Route Interfaces
// Generated: 2026-01-23

import { CoreEmotion, EmotionData } from './types';

// Route parameter validation
export function isValidCoreEmotion(param: string): param is CoreEmotion {
  return ['sad', 'mad', 'scared', 'joyful', 'powerful', 'peaceful'].includes(param.toLowerCase());
}

export function normalizeRouteParam(param: string): string {
  return decodeURIComponent(param).toLowerCase();
}

export function formatRouteParam(text: string): string {
  return encodeURIComponent(text.toLowerCase().replace(/\s+/g, '-'));
}

// Route generation utilities  
export class EmotionRoutes {
  static home(): string {
    return '/';
  }

  static coreSelection(): string {
    return '/';
  }

  static secondarySelection(core: CoreEmotion): string {
    return `/explore/${core.toLowerCase()}`;
  }

  static tertiarySelection(core: CoreEmotion, secondary: string): string {
    return `/explore/${core.toLowerCase()}/${formatRouteParam(secondary)}`;
  }

  static validation(emotionId: string): string {
    return `/result?emotionId=${emotionId}`;
  }

  static accountCreation(fromEmotion?: string): string {
    const base = '/account/create';
    return fromEmotion ? `${base}?return=${fromEmotion}` : base;
  }
}

// Static route generation for pre-rendering
export interface StaticRouteParams {
  core: string;
  secondary?: string;
}

export function generateStaticParams(): StaticRouteParams[] {
  // This would be populated with actual emotion data in implementation
  const routes: StaticRouteParams[] = [];
  
  const coreEmotions: CoreEmotion[] = ['Sad', 'Mad', 'Scared', 'Joyful', 'Powerful', 'Peaceful'];
  
  coreEmotions.forEach(core => {
    // Add core emotion route
    routes.push({ core: core.toLowerCase() });
    
    // Add secondary emotion routes (would be populated from actual data)
    // This is a placeholder - actual implementation would use emotion data
    const mockSecondaryEmotions = ['category1', 'category2']; // Replace with real data
    mockSecondaryEmotions.forEach(secondary => {
      routes.push({ 
        core: core.toLowerCase(), 
        secondary: formatRouteParam(secondary) 
      });
    });
  });
  
  return routes;
}

// Route metadata for SEO and navigation
export interface RouteMetadata {
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
}

export interface BreadcrumbItem {
  label: string;
  href: string;
  current?: boolean;
}

export function generateRouteMetadata(
  step: 'core' | 'secondary' | 'tertiary' | 'validation',
  core?: CoreEmotion,
  secondary?: string,
  emotion?: EmotionData
): RouteMetadata {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', href: '/' }
  ];

  switch (step) {
    case 'core':
      return {
        title: 'Explore Your Emotions | Emotional Vocabulary Builder',
        description: 'Begin your journey of emotional self-discovery. Choose from six core emotion categories to find the words that match your feelings.',
        breadcrumbs: [...breadcrumbs, { label: 'Explore Emotions', href: '/', current: true }]
      };

    case 'secondary':
      if (!core) throw new Error('Core emotion required for secondary page metadata');
      return {
        title: `${core} Emotions | Emotional Vocabulary Builder`,
        description: `Explore different types of ${core.toLowerCase()} emotions to better understand your current feelings.`,
        breadcrumbs: [
          ...breadcrumbs,
          { label: 'Explore', href: '/' },
          { label: core, href: EmotionRoutes.secondarySelection(core), current: true }
        ]
      };

    case 'tertiary':
      if (!core || !secondary) throw new Error('Core and secondary emotions required for tertiary page metadata');
      return {
        title: `${secondary} (${core}) | Emotional Vocabulary Builder`,
        description: `Find the specific emotion that best describes your ${secondary.toLowerCase()} feelings.`,
        breadcrumbs: [
          ...breadcrumbs,
          { label: 'Explore', href: '/' },
          { label: core, href: EmotionRoutes.secondarySelection(core) },
          { label: secondary, href: EmotionRoutes.tertiarySelection(core, secondary), current: true }
        ]
      };

    case 'validation':
      if (!emotion) throw new Error('Emotion data required for validation page metadata');
      return {
        title: `${emotion.tertiary} - Validation & Support | Emotional Vocabulary Builder`,
        description: `Learn more about feeling ${emotion.tertiary.toLowerCase()} and discover helpful techniques for emotional regulation.`,
        breadcrumbs: [
          ...breadcrumbs,
          { label: 'Explore', href: '/' },
          { label: emotion.core, href: EmotionRoutes.secondarySelection(emotion.core) },
          { label: emotion.secondary, href: EmotionRoutes.tertiarySelection(emotion.core, emotion.secondary) },
          { label: emotion.tertiary, href: EmotionRoutes.validation(emotion.id), current: true }
        ]
      };

    default:
      throw new Error(`Unknown step: ${step}`);
  }
}

// Route guards and validation
export function validateRouteAccess(
  step: 'secondary' | 'tertiary' | 'validation',
  session: { selectedCore?: CoreEmotion; selectedSecondary?: string; selectedEmotion?: EmotionData }
): { valid: boolean; redirectTo?: string; error?: string } {
  switch (step) {
    case 'secondary':
      if (!session.selectedCore) {
        return { 
          valid: false, 
          redirectTo: '/', 
          error: 'Core emotion must be selected first' 
        };
      }
      break;

    case 'tertiary':
      if (!session.selectedCore || !session.selectedSecondary) {
        return {
          valid: false,
          redirectTo: session.selectedCore ? EmotionRoutes.secondarySelection(session.selectedCore) : '/',
          error: 'Core and secondary emotions must be selected first'
        };
      }
      break;

    case 'validation':
      if (!session.selectedEmotion) {
        return {
          valid: false,
          redirectTo: '/',
          error: 'Complete emotion must be selected first'
        };
      }
      break;
  }

  return { valid: true };
}