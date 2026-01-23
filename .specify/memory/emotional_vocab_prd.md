# Emotional Vocabulary Builder - Product Requirements Document

## 1. Product Overview

### 1.1 Purpose
Help users identify, name, and regulate emotions through guided exploration of emotional vocabulary based on Dr. Gloria Willcox's Feelings Wheel, with optional account features to track patterns over time.

### 1.2 Target Users
- Individuals working on emotional regulation skills
- People in therapy or personal development
- Anyone seeking to expand their emotional vocabulary
- Users who need in-the-moment support with identifying feelings

### 1.3 Core Value Proposition
- Guided, compassionate exploration of emotional nuance
- Immediate validation and regulation support
- Personal vocabulary collection that reveals patterns over time
- Accessible without login, valuable with an account

---

## 2. User Stories

### 2.1 Guest User
- As a guest user, I want to explore emotions without creating an account, so I can get immediate help identifying what I'm feeling
- As a guest user, I want to receive validation and regulation techniques, so I feel supported in the moment
- As a guest user, I want clear definitions and examples, so I can learn new emotional vocabulary

### 2.2 Registered User
- As a registered user, I want to save my identified emotions, so I can build a personal emotional vocabulary collection
- As a registered user, I want to see when and how often I experience certain emotions, so I can identify patterns
- As a registered user, I want to review past regulation suggestions, so I can reinforce helpful techniques

---

## 3. Technical Specifications

### 3.1 Technology Stack
- **Frontend Framework**: React with TypeScript
- **UI Component Library**: Material-UI (MUI)
- **Responsive Design**: Mobile-first, works across all devices
- **State Management**: React Context API or Redux (TBD based on complexity)
- **Authentication**: (TBD - Firebase Auth, Auth0, or custom)
- **Database**: (TBD - Firebase, Supabase, or custom backend)
- **Storage**: Persistent storage for registered users

### 3.2 Key Technical Requirements
- Fully responsive web application
- Offline-capable for guest mode (optional enhancement)
- Fast load times for in-the-moment usage
- Accessible (WCAG 2.1 AA compliance)
- Clean, calming visual design

---

## 4. Feature Specifications

### 4.1 Emotion Exploration Flow

#### 4.1.1 Three-Layer Navigation
Based on Dr. Gloria Willcox's Feelings Wheel structure:
- **Layer 1 (Core)**: 6 basic emotions (Sad, Mad, Scared, Joyful, Powerful, Peaceful)
- **Layer 2 (Secondary)**: More specific categories
- **Layer 3 (Tertiary)**: Nuanced emotional vocabulary

#### 4.1.2 Navigation Behavior
- Users start by selecting a core emotion
- System displays secondary emotions with brief context
- Users select secondary emotion to see tertiary options
- Each level shows definitions and examples
- Users can navigate back to previous layers
- Single emotion selection per session (V1)

#### 4.1.3 UI Components
- Visual representation inspired by emotion wheel (radial or card-based)
- Clear progress indicator showing current layer
- "Back" functionality at each layer
- Prominent "This is it" or "Confirm" button for final selection

### 4.2 Validation & Regulation Phase

#### 4.2.1 Validation Message
- Displays immediately after emotion confirmation
- Warm, educational tone
- Acknowledges the emotion as valid and understandable
- 2-4 sentences that normalize the experience

#### 4.2.2 Regulation Techniques
- 3-4 general regulation strategies
- Presented as actionable items
- Examples: breathing exercises, grounding techniques, movement, connection

#### 4.2.3 Journal Prompt
- Single emotion-specific reflective question
- Display-only (no input required in V1)
- Designed to deepen self-awareness
- Users can copy/save externally if desired

#### 4.2.4 UI Layout
```
┌─────────────────────────────────┐
│  [Emotion Name]                 │
│  "Validation message..."        │
├─────────────────────────────────┤
│  Regulation Techniques:         │
│  • Technique 1                  │
│  • Technique 2                  │
│  • Technique 3                  │
├─────────────────────────────────┤
│  Journal Prompt:                │
│  "Reflective question..."       │
├─────────────────────────────────┤
│  [Save to Collection] [Start Over] │
└─────────────────────────────────┘
```

### 4.3 Guest Mode

#### 4.3.1 Capabilities
- Full access to emotion exploration
- View all definitions, examples, validation, and regulation content
- No data persistence
- Option to create account presented after emotion confirmation

#### 4.3.2 Guest-to-User Conversion
- CTA after validation phase: "Want to save this to your collection?"
- Streamlined registration flow
- Option to save current session after registration

### 4.4 Account Mode

#### 4.4.1 Registration & Authentication
- Simple email/password registration
- Password reset functionality
- Secure authentication
- Optional: Social login (Google, Apple)

#### 4.4.2 Saved Vocabulary Collection

**Data Stored Per Entry:**
- Emotion name (tertiary)
- Full emotion path (Core → Secondary → Tertiary)
- Timestamp (date and time)
- Validation message shown
- Regulation techniques shown
- Journal prompt shown

**Collection View:**
- List/grid of saved emotions
- Sortable by date (newest/oldest)
- Filterable by core emotion category
- Search functionality
- Visual indicators for frequently identified emotions

#### 4.4.3 Emotion Detail View
Clicking on a saved emotion shows:
- Emotion name and full path
- When it was identified (date/time)
- The validation message
- The regulation techniques
- The journal prompt
- Option to delete entry
- Navigation back to collection

#### 4.4.4 Pattern Recognition

**Requirements:**
- Minimum 10 saved entries before showing patterns
- Pattern card displays insights like:
  - "You seem to feel 'overwhelmed' or similar emotions most often on Sunday evenings"
  - Most frequent emotions overall
  - Time-based patterns (day of week, time of day)

**Pattern Card Design:**
- Prominent placement on collection page
- Friendly, non-judgmental language
- Actionable insights where possible
- Updates automatically as new emotions are added

---

## 5. Emotion Content Database (V1 - Top 30)

### 5.1 Data Structure (TypeScript Interface)

```typescript
interface EmotionData {
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

type CoreEmotion = 'Sad' | 'Mad' | 'Scared' | 'Joyful' | 'Powerful' | 'Peaceful';
```

### 5.2 Content Set: Top 30 Common Emotions

#### SAD EMOTIONS (8 emotions)

##### 1. Lonely
```typescript
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
  validation: 'Feeling lonely is deeply human. We\'re wired for connection, and when we experience distance from others—whether physical or emotional—it makes complete sense that loneliness surfaces. This feeling is your heart recognizing that connection matters to you.',
  generalTechniques: [
    'Reach out to someone, even with a simple text or call',
    'Engage in a community activity or group (online or in-person)',
    'Practice self-compassion - treat yourself as you would a friend feeling lonely',
    'Create something or journal to process the feeling'
  ],
  journalPrompt: 'What kind of connection am I craving right now? Is it depth, frequency, shared interests, or something else?'
}
```

##### 2. Abandoned
```typescript
{
  id: 'sad-abandoned',
  core: 'Sad',
  secondary: 'Isolated',
  tertiary: 'Abandoned',
  definition: 'The painful feeling that someone important has left you or given up on you, often accompanied by a sense of being unwanted.',
  examples: [
    'A close friend stops responding to your messages',
    'Feeling forgotten by family members during difficult times',
    'Being excluded from plans or events by people you care about'
  ],
  validation: 'Feeling abandoned touches one of our deepest fears—being left behind by those we care about. This is a profound hurt, and it\'s completely valid. Your feelings of abandonment reflect how much these relationships and connections meant to you.',
  generalTechniques: [
    'Ground yourself in the present moment with your senses',
    'Remind yourself of people who are currently present in your life',
    'Write a letter (you don\'t have to send) expressing your feelings',
    'Seek support from someone you trust'
  ],
  journalPrompt: 'Who in my life has shown up for me consistently? How can I nurture those connections?'
}
```

##### 3. Disappointed
```typescript
{
  id: 'sad-disappointed',
  core: 'Sad',
  secondary: 'Hurt',
  tertiary: 'Disappointed',
  definition: 'The sadness that comes when reality doesn\'t match our hopes or expectations.',
  examples: [
    'Not getting a job you really wanted and prepared for',
    'Someone you trust not following through on a promise',
    'A planned event getting cancelled or not living up to expectations'
  ],
  validation: 'Disappointment is a natural response when things don\'t turn out as we hoped. It shows that you had optimism and that you cared about the outcome. This feeling honors both your hopes and the reality of what happened.',
  generalTechniques: [
    'Allow yourself to feel the disappointment without rushing to "fix" it',
    'Talk through what you were hoping for with someone supportive',
    'Identify what\'s still within your control moving forward',
    'Practice self-compassion - disappointment is part of being human'
  ],
  journalPrompt: 'What was I hoping for, and what can I learn from this gap between expectation and reality?'
}
```

##### 4. Depressed
```typescript
{
  id: 'sad-depressed',
  core: 'Sad',
  secondary: 'Despair',
  tertiary: 'Depressed',
  definition: 'A heavy, persistent sadness often accompanied by low energy, loss of interest in activities, and difficulty seeing hope for the future.',
  examples: [
    'Waking up feeling empty and struggling to find motivation for the day',
    'Activities that used to bring joy now feel pointless or exhausting',
    'Feeling like there\'s a weight on your chest that won\'t lift'
  ],
  validation: 'Depression is real, and what you\'re feeling is significant. This isn\'t weakness or something you can simply "snap out of"—it\'s a serious state that deserves attention and care. You don\'t have to go through this alone.',
  generalTechniques: [
    'Reach out to a mental health professional if you haven\'t already',
    'Take the smallest possible step: one task, one shower, one walk',
    'Connect with someone you trust, even if just to say you\'re struggling',
    'Be gentle with yourself - depression is an illness, not a personal failing'
  ],
  journalPrompt: 'What would I say to a dear friend experiencing what I\'m going through right now? (Note: If you\'re having thoughts of self-harm, please reach out to a crisis line or mental health professional immediately.)'
}
```

##### 5. Guilty
```typescript
{
  id: 'sad-guilty',
  core: 'Sad',
  secondary: 'Remorseful',
  tertiary: 'Guilty',
  definition: 'The uncomfortable feeling that you\'ve done something wrong or harmful, often accompanied by a desire to make amends.',
  examples: [
    'Snapping at someone you care about when they didn\'t deserve it',
    'Missing an important event because you forgot or double-booked',
    'Realizing your actions hurt someone, even if it wasn\'t intentional'
  ],
  validation: 'Feeling guilty shows that you have a conscience and care about your impact on others. This discomfort, while unpleasant, is actually your values speaking—reminding you of the kind of person you want to be. Guilt can be a teacher if we listen to it with self-compassion.',
  generalTechniques: [
    'Acknowledge what happened without over-identifying with the mistake',
    'Make amends if possible and appropriate',
    'Reflect on what you can learn or do differently',
    'Practice self-forgiveness - everyone makes mistakes'
  ],
  journalPrompt: 'What would making amends look like in this situation? If amends aren\'t possible, what can I learn from this experience?'
}
```

##### 6. Ashamed
```typescript
{
  id: 'sad-ashamed',
  core: 'Sad',
  secondary: 'Remorseful',
  tertiary: 'Ashamed',
  definition: 'A painful feeling that you are fundamentally flawed or unworthy, often wanting to hide or disappear.',
  examples: [
    'Feeling like you\'re not good enough compared to others',
    'Being embarrassed about something deeply personal being exposed',
    'Feeling like you\'ve let yourself or others down in a fundamental way'
  ],
  validation: 'Shame is one of the most painful emotions we can experience. Unlike guilt, which says "I did something bad," shame whispers "I am bad." But this isn\'t true. You are worthy of compassion and belonging, especially in this difficult moment. Shame thrives in secrecy and silence—bringing it into the light is the first step toward healing.',
  generalTechniques: [
    'Share your shame with someone safe and empathetic',
    'Separate your actions from your identity - you are not your mistakes',
    'Challenge shame\'s narrative with self-compassion',
    'Remember that everyone experiences shame - you\'re not alone'
  ],
  journalPrompt: 'If I could extend the same compassion to myself that I\'d give to a struggling friend, what would I say to myself right now?'
}
```

##### 7. Powerless
```typescript
{
  id: 'sad-powerless',
  core: 'Sad',
  secondary: 'Vulnerable',
  tertiary: 'Powerless',
  definition: 'The feeling of having no control or influence over a situation, often accompanied by helplessness.',
  examples: [
    'Watching a loved one struggle and not being able to fix it',
    'Facing a major life change that you didn\'t choose',
    'Being in a situation where your voice or choices don\'t seem to matter'
  ],
  validation: 'Feeling powerless is deeply unsettling. When circumstances feel beyond our control, it\'s natural to feel helpless and frustrated. This feeling is valid, and it makes sense that you\'re struggling with it. Even in situations where we can\'t control outcomes, we often have more agency than we realize in how we respond.',
  generalTechniques: [
    'Identify what IS within your control, even if small',
    'Focus on your next right step rather than the whole situation',
    'Reach out for support - asking for help is an act of power',
    'Practice acceptance of what you cannot change while acting on what you can'
  ],
  journalPrompt: 'What is one small thing within my control right now? Even if it doesn\'t solve the whole situation, what\'s one step I can take?'
}
```

##### 8. Grief
```typescript
{
  id: 'sad-grief',
  core: 'Sad',
  secondary: 'Despair',
  tertiary: 'Grief',
  definition: 'Deep sorrow in response to loss, whether of a person, relationship, opportunity, or way of life.',
  examples: [
    'The death of someone you loved',
    'The end of a significant relationship',
    'Losing a job, home, or life you had envisioned'
  ],
  validation: 'Grief is love with nowhere to go. What you\'re feeling is a testament to what or who you\'ve lost—the depth of your grief reflects the depth of what mattered to you. There\'s no timeline for grief, no "right way" to do it. Your grief deserves space, time, and compassion.',
  generalTechniques: [
    'Allow yourself to feel without judgment - grief comes in waves',
    'Create rituals or ways to honor what you\'ve lost',
    'Connect with others who understand loss',
    'Be patient with yourself - healing isn\'t linear'
  ],
  journalPrompt: 'What do I miss most? What would I want to say to or about what I\'ve lost?'
}
```

#### MAD EMOTIONS (7 emotions)

##### 9. Frustrated
```typescript
{
  id: 'mad-frustrated',
  core: 'Mad',
  secondary: 'Annoyed',
  tertiary: 'Frustrated',
  definition: 'The irritated feeling when something isn\'t working, progressing, or going the way you want it to.',
  examples: [
    'Technology not working when you need it most',
    'Explaining the same thing multiple times without being understood',
    'Hitting obstacles when you\'re trying to accomplish something important'
  ],
  validation: 'Frustration makes sense when things aren\'t flowing the way you need them to. It\'s your mind recognizing that there\'s a gap between where you are and where you want to be. This energy can be redirected—frustration often signals that you care about the outcome.',
  generalTechniques: [
    'Take a brief break from the frustrating situation',
    'Physical movement - walk, stretch, or release tension',
    'Problem-solve: Is there a different approach you could try?',
    'Practice patience with yourself and the process'
  ],
  journalPrompt: 'What is this frustration trying to tell me? Is there something I need to change, accept, or approach differently?'
}
```

##### 10. Angry
```typescript
{
  id: 'mad-angry',
  core: 'Mad',
  secondary: 'Hostile',
  tertiary: 'Angry',
  definition: 'A strong feeling of displeasure or antagonism, often in response to perceived wrongdoing or injustice.',
  examples: [
    'Being treated unfairly or disrespectfully',
    'Someone violating your boundaries',
    'Witnessing injustice or harm to yourself or others'
  ],
  validation: 'Anger is a valid and important emotion. It often arises when our boundaries are crossed, our values are violated, or when we or others are treated poorly. Your anger is information—it\'s telling you that something matters to you and that a boundary or value has been impacted.',
  generalTechniques: [
    'Express anger safely - physical activity, journaling, talking it out',
    'Identify what boundary or value was crossed',
    'Use "I feel angry because..." statements to clarify',
    'Channel anger into constructive action when possible'
  ],
  journalPrompt: 'What boundary, need, or value of mine was crossed? What would honoring my anger look like without causing harm?'
}
```

##### 11. Betrayed
```typescript
{
  id: 'mad-betrayed',
  core: 'Mad',
  secondary: 'Hurt',
  tertiary: 'Betrayed',
  definition: 'The painful feeling when someone you trusted acts against you or violates that trust.',
  examples: [
    'Finding out someone lied to you about something important',
    'A partner or friend breaking your confidence',
    'Someone acting in their interest at your expense after you trusted them'
  ],
  validation: 'Betrayal cuts deep because it involves both the hurt of what happened and the breaking of trust. Your feelings are completely understandable. Betrayal affects not just the present but can shake your sense of safety in relationships. This is a significant wound that deserves acknowledgment.',
  generalTechniques: [
    'Allow yourself to feel both the anger and the hurt',
    'Talk to someone you trust about what happened',
    'Set boundaries to protect yourself moving forward',
    'Take time before deciding next steps - you don\'t have to decide everything now'
  ],
  journalPrompt: 'What did I need from this person that was violated? What would rebuilding trust require, or is it time to reassess this relationship?'
}
```

##### 12. Resentful
```typescript
{
  id: 'mad-resentful',
  core: 'Mad',
  secondary: 'Critical',
  tertiary: 'Resentful',
  definition: 'Lingering bitterness or anger about past unfair treatment, often building over time.',
  examples: [
    'Feeling like you always give more in a relationship than you receive',
    'Carrying anger about something that was never resolved or acknowledged',
    'Repeatedly being overlooked or undervalued'
  ],
  validation: 'Resentment is accumulated hurt and anger that hasn\'t been addressed. It makes sense that these feelings have built up—resentment often signals unmet needs or ongoing unfairness. While resentment can feel heavy, it\'s pointing you toward something that needs attention or boundaries.',
  generalTechniques: [
    'Identify the specific unmet needs driving the resentment',
    'Communicate boundaries or needs that haven\'t been expressed',
    'Decide what you need: an apology, changed behavior, or acceptance',
    'Consider whether forgiveness (for your peace) or distance is needed'
  ],
  journalPrompt: 'What need has gone unmet that\'s fueling this resentment? What would resolution look like for me?'
}
```

##### 13. Jealous
```typescript
{
  id: 'mad-jealous',
  core: 'Mad',
  secondary: 'Envious',
  tertiary: 'Jealous',
  definition: 'Feeling threatened by the possibility of losing something or someone important to a rival, or resentment of another\'s advantages.',
  examples: [
    'Worrying that your partner is attracted to someone else',
    'Feeling envious of a colleague\'s success or recognition',
    'Seeing someone else get something you wanted'
  ],
  validation: 'Jealousy is uncomfortable, but it\'s also very human. It often points to things we value deeply—relationships, recognition, success. Rather than judging yourself for feeling jealous, you can use it as information about what matters to you and what might feel threatened or lacking.',
  generalTechniques: [
    'Acknowledge the jealousy without acting impulsively on it',
    'Identify what you fear losing or what you desire',
    'Practice gratitude for what you do have',
    'Channel the energy into working toward your own goals'
  ],
  journalPrompt: 'What is my jealousy protecting or pointing toward? What do I really want or fear in this situation?'
}
```

##### 14. Disrespected
```typescript
{
  id: 'mad-disrespected',
  core: 'Mad',
  secondary: 'Violated',
  tertiary: 'Disrespected',
  definition: 'Feeling that you haven\'t been treated with the dignity, consideration, or regard you deserve.',
  examples: [
    'Someone talking over you or dismissing your ideas',
    'Being treated as less important or capable than you are',
    'Having your time, work, or boundaries treated carelessly'
  ],
  validation: 'Feeling disrespected is a clear signal that your worth or boundaries haven\'t been honored. You deserve to be treated with dignity and consideration, and it makes complete sense that you feel angry or hurt when that doesn\'t happen. This feeling is your self-respect speaking up.',
  generalTechniques: [
    'Name the disrespect clearly to yourself',
    'Decide if and how to address it with the person involved',
    'Reinforce your own boundaries moving forward',
    'Surround yourself with people who do respect you'
  ],
  journalPrompt: 'How do I want to be treated in this type of situation? What boundaries do I need to set or reinforce?'
}
```

##### 15. Outraged
```typescript
{
  id: 'mad-outraged',
  core: 'Mad',
  secondary: 'Furious',
  tertiary: 'Outraged',
  definition: 'Intense anger in response to something perceived as gravely unjust, offensive, or shocking.',
  examples: [
    'Witnessing clear injustice or harm to vulnerable people',
    'Experiencing or learning about a serious violation of ethics or values',
    'Seeing systemic problems hurt people repeatedly'
  ],
  validation: 'Outrage is anger amplified by moral conviction. When you feel outraged, you\'re responding to a serious violation of what you believe is right. This is a powerful emotion that has driven important change throughout history. Your outrage shows that you care deeply about justice and fairness.',
  generalTechniques: [
    'Channel outrage into constructive action - advocacy, organizing, or speaking up',
    'Connect with others who share your values',
    'Take breaks to avoid burnout - sustainable action requires pacing',
    'Direct your energy strategically toward where you can make a difference'
  ],
  journalPrompt: 'What value or principle is being violated that sparks this outrage? What action, even small, could I take that aligns with my values?'
}
```

#### SCARED EMOTIONS (7 emotions)

##### 16. Anxious
```typescript
{
  id: 'scared-anxious',
  core: 'Scared',
  secondary: 'Worried',
  tertiary: 'Anxious',
  definition: 'A feeling of unease, nervousness, or worry, often about future uncertainty or potential threats.',
  examples: [
    'Worrying about an upcoming presentation or important event',
    'Feeling your heart race about things that might go wrong',
    'Persistent concern about multiple things without a clear specific threat'
  ],
  validation: 'Anxiety is your mind trying to prepare for or protect you from potential threats. While it can feel overwhelming, it makes sense that your body is responding to uncertainty or stress. You\'re not broken—anxiety is a common human experience, especially in times of change or challenge.',
  generalTechniques: [
    'Practice deep breathing: 4 counts in, hold 4, out 4, hold 4',
    'Ground yourself in the present moment using your five senses',
    'Write down your worries to externalize them',
    'Distinguish between what you can control and what you can\'t'
  ],
  journalPrompt: 'What am I really afraid might happen? If the worst-case scenario occurred, how would I cope?'
}
```

##### 17. Overwhelmed
```typescript
{
  id: 'scared-overwhelmed',
  core: 'Scared',
  secondary: 'Stressed',
  tertiary: 'Overwhelmed',
  definition: 'Feeling like there\'s too much to handle, as if demands exceed your capacity to manage them.',
  examples: [
    'Having multiple deadlines and not knowing where to start',
    'Juggling too many responsibilities at once',
    'Feeling like everything is urgent and you can\'t catch up'
  ],
  validation: 'Feeling overwhelmed is a sign that you\'re carrying a lot right now. It\'s not that you\'re incapable—it\'s that the demands are legitimately high. This feeling is your system signaling that you need to prioritize, delegate, or take things one step at a time. You\'re not failing; you\'re human.',
  generalTechniques: [
    'Make a brain dump list of everything on your mind',
    'Choose ONE small thing to do next, just to build momentum',
    'Ask for help or delegate if possible',
    'Give yourself permission to not do everything perfectly or immediately'
  ],
  journalPrompt: 'If I could only accomplish three things this week, what would matter most? What can I let go of or postpone?'
}
```

##### 18. Terrified
```typescript
{
  id: 'scared-terrified',
  core: 'Scared',
  secondary: 'Frightened',
  tertiary: 'Terrified',
  definition: 'Extreme fear, often in response to a serious perceived threat to safety or well-being.',
  examples: [
    'Facing a medical emergency or serious diagnosis',
    'Being in a genuinely dangerous situation',
    'Confronting a deep-seated phobia'
  ],
  validation: 'Terror is our most primal fear response—it\'s your body going into high alert to protect you. What you\'re feeling is intense and real. Whether the threat is immediate or perceived, your fear is valid. In this moment, focus on getting to safety, both physically and emotionally.',
  generalTechniques: [
    'If in immediate danger, prioritize getting to safety',
    'Focus on your breath to help regulate your nervous system',
    'Reach out to someone you trust for support',
    'Remind yourself: "I am safe right now in this moment" (if true)'
  ],
  journalPrompt: 'What do I need right now to feel safer? Who or what could help me feel more grounded? (Note: If you\'re in immediate danger, please reach out to emergency services or a crisis line.)'
}
```

##### 19. Insecure
```typescript
{
  id: 'scared-insecure',
  core: 'Scared',
  secondary: 'Inadequate',
  tertiary: 'Insecure',
  definition: 'Lacking confidence in yourself, your abilities, or your worth, often accompanied by self-doubt.',
  examples: [
    'Doubting whether you\'re good enough at your job',
    'Comparing yourself to others and feeling like you don\'t measure up',
    'Worrying that people will discover you\'re not as competent as they think'
  ],
  validation: 'Insecurity is something almost everyone experiences, even very successful people. These doubts don\'t reflect the truth about your worth or abilities—they reflect the human tendency to focus on our perceived shortcomings. Your insecurity is understandable, and it doesn\'t make you less capable or valuable.',
  generalTechniques: [
    'List your genuine strengths and past accomplishments',
    'Challenge negative self-talk with evidence',
    'Remember that everyone has insecurities - you\'re not alone',
    'Practice self-compassion when you notice self-criticism'
  ],
  journalPrompt: 'What would I tell a friend who was doubting themselves in this situation? Can I offer myself the same compassion?'
}
```

##### 20. Vulnerable
```typescript
{
  id: 'scared-vulnerable',
  core: 'Scared',
  secondary: 'Exposed',
  tertiary: 'Vulnerable',
  definition: 'Feeling emotionally exposed or at risk of being hurt, often when opening up or taking a risk.',
  examples: [
    'Sharing something deeply personal with someone',
    'Asking for what you need and risking rejection',
    'Putting yourself out there creatively or professionally'
  ],
  validation: 'Vulnerability takes courage. When we allow ourselves to be seen, to need, to try something new, we risk being hurt—and that\'s scary. But vulnerability is also where connection, growth, and authenticity live. Your willingness to be vulnerable, even when it\'s frightening, is a sign of strength.',
  generalTechniques: [
    'Acknowledge that vulnerability is brave, not weak',
    'Share vulnerably with people who have earned your trust',
    'Remind yourself that everyone experiences vulnerability',
    'Practice self-compassion regardless of how others respond'
  ],
  journalPrompt: 'What am I risking by being vulnerable here? What might I gain? How can I honor my courage in this moment?'
}
```

##### 21. Rejected
```typescript
{
  id: 'scared-rejected',
  core: 'Scared',
  secondary: 'Excluded',
  tertiary: 'Rejected',
  definition: 'The painful feeling of being dismissed, turned down, or deemed not good enough.',
  examples: [
    'Not being chosen for a job, team, or opportunity you wanted',
    'Having your romantic interest not reciprocated',
    'Being excluded from social plans or groups'
  ],
  validation: 'Rejection stings because it touches our deep need for belonging and acceptance. Your pain is real and valid. Rejection doesn\'t define your worth—it\'s often about fit, timing, or someone else\'s capacity, not about your value as a person. You are still worthy of love and belonging.',
  generalTechniques: [
    'Remind yourself that rejection is often about fit, not worth',
    'Talk to someone who values and accepts you',
    'Practice self-soothing and self-compassion',
    'Redirect energy toward people and places where you are valued'
  ],
  journalPrompt: 'How can I separate this rejection from my worth as a person? Where do I feel genuinely accepted and valued?'
}
```

##### 22. Worried
```typescript
{
  id: 'scared-worried',
  core: 'Scared',
  secondary: 'Concerned',
  tertiary: 'Worried',
  definition: 'Mental distress or unease about something that might happen or go wrong.',
  examples: [
    'Concerned about a loved one\'s health or safety',
    'Thinking repeatedly about potential problems at work',
    'Anticipating that something important might not work out'
  ],
  validation: 'Worry shows that you care about outcomes and the people in your life. Your mind is trying to anticipate and prepare for potential problems—it\'s attempting to protect you. While chronic worry can be exhausting, the feeling itself makes sense given what matters to you.',
  generalTechniques: [
    'Set aside "worry time" - 15 minutes to think through concerns, then move on',
    'Ask yourself: Is this within my control? If yes, make a plan. If no, practice acceptance',
    'Challenge catastrophic thinking with realistic outcomes',
    'Use physical activity to discharge worry energy'
  ],
  journalPrompt: 'What am I worried will happen? What evidence do I have that this will or won\'t occur? What can I actually control in this situation?'
}
```

#### JOYFUL EMOTIONS (3 emotions)

##### 23. Content
```typescript
{
  id: 'joyful-content',
  core: 'Joyful',
  secondary: 'Peaceful',
  tertiary: 'Content',
  definition: 'A state of peaceful satisfaction and acceptance with the present moment.',
  examples: [
    'Feeling settled and satisfied after a good day',
    'Appreciating what you have without needing more',
    'A quiet sense of "this is good enough" without restlessness'
  ],
  validation: 'Contentment is a beautiful, understated form of joy. In a world that often pushes us to want more, do more, or be more, feeling content is a gift. It means you\'re able to be present with what is, and that\'s a form of wisdom and peace.',
  generalTechniques: [
    'Pause and savor this feeling - notice what contributes to it',
    'Practice gratitude for the simple things around you',
    'Share this feeling with someone - contentment can be contagious',
    'Reflect on what helped you reach this peaceful state'
  ],
  journalPrompt: 'What in my life right now am I genuinely satisfied with? What contributes to this sense of contentment?'
}
```

##### 24. Excited
```typescript
{
  id: 'joyful-excited',
  core: 'Joyful',
  secondary: 'Energetic',
  tertiary: 'Excited',
  definition: 'Enthusiastic anticipation and heightened energy about something positive coming up or happening.',
  examples: [
    'Looking forward to an upcoming trip or event',
    'Starting a new project or opportunity you\'re passionate about',
    'Anticipating good news or a meaningful milestone'
  ],
  validation: 'Excitement is pure, forward-looking joy! It shows that you\'re engaged with life and have things to look forward to. This energy and anticipation are wonderful—they remind you that good things exist and are worth celebrating.',
  generalTechniques: [
    'Channel this energy into preparation or creative action',
    'Share your excitement with others who will celebrate with you',
    'Use this momentum for tasks that need energy',
    'Savor the anticipation - it\'s part of the joy'
  ],
  journalPrompt: 'What am I most looking forward to, and why does it matter to me? How can I fully enjoy both the anticipation and the event itself?'
}
```

##### 25. Grateful
```typescript
{
  id: 'joyful-grateful',
  core: 'Joyful',
  secondary: 'Appreciative',
  tertiary: 'Grateful',
  definition: 'Deep appreciation for something or someone, recognizing the good in your life.',
  examples: [
    'Feeling thankful for someone who showed up for you',
    'Appreciating your health, home, or basic comforts',
    'Recognizing how far you\'ve come or what you\'ve overcome'
  ],
  validation: 'Gratitude is a powerful emotion that connects you to the good in your life. Being able to feel and name gratitude shows that you\'re noticing the positive, even amidst challenges. This awareness enriches your experience and deepens your connections.',
  generalTechniques: [
    'Express your gratitude to the person or situation that sparked it',
    'Write down what you\'re grateful for to reinforce the feeling',
    'Reflect on why this particular thing matters to you',
    'Let gratitude inform your priorities and choices'
  ],
  journalPrompt: 'What am I grateful for right now, and why does it matter to me? How can I express or honor this gratitude?'
}
```

#### POWERFUL EMOTIONS (3 emotions)

##### 26. Confident
```typescript
{
  id: 'powerful-confident',
  core: 'Powerful',
  secondary: 'Certain',
  tertiary: 'Confident',
  definition: 'A strong sense of self-assurance in your abilities, worth, or decisions.',
  examples: [
    'Feeling capable and prepared before a challenge',
    'Trusting your judgment on an important decision',
    'Knowing you can handle whatever comes your way'
  ],
  validation: 'Confidence is earned through experience, preparation, and self-knowledge. Feeling confident means you trust yourself, and that trust is well-founded. This is a powerful state—you\'re recognizing your own competence and worth.',
  generalTechniques: [
    'Acknowledge what you\'ve done to earn this confidence',
    'Use this energy to take on challenges or speak up',
    'Share your confidence with others who might benefit from your strength',
    'Remember this feeling when future doubts arise'
  ],
  journalPrompt: 'What do I feel confident about, and what has contributed to building this confidence? How can I draw on this in other areas?'
}
```

##### 27. Proud
```typescript
{
  id: 'powerful-proud',
  core: 'Powerful',
  secondary: 'Successful',
  tertiary: 'Proud',
  definition: 'A sense of satisfaction and pleasure in your achievements, qualities, or associations.',
  examples: [
    'Completing something challenging that you worked hard on',
    'Watching someone you care about succeed',
    'Standing by your values even when it was difficult'
  ],
  validation: 'Pride is the joy of accomplishment and integrity. You\'ve earned this feeling through effort, courage, or commitment. Allowing yourself to feel proud isn\'t arrogance—it\'s healthy self-recognition and celebration of what matters to you.',
  generalTechniques: [
    'Take a moment to fully acknowledge what you accomplished',
    'Share your success with people who will celebrate with you',
    'Reflect on what you learned or how you grew',
    'Let this pride fuel future efforts and remind you of your capabilities'
  ],
  journalPrompt: 'What am I proud of, and what does this achievement or quality say about my values and growth?'
}
```

##### 28. Motivated
```typescript
{
  id: 'powerful-motivated',
  core: 'Powerful',
  secondary: 'Inspired',
  tertiary: 'Motivated',
  definition: 'A strong drive or desire to take action toward a goal or purpose.',
  examples: [
    'Feeling energized to work toward a meaningful goal',
    'Being inspired by someone or something to take action',
    'Having clarity about what you want and feeling ready to pursue it'
  ],
  validation: 'Motivation is the fuel for action and change. When you feel motivated, you\'re connected to something that matters to you. This drive is valuable—it helps you overcome obstacles and move toward what you care about. Harness this energy while you have it.',
  generalTechniques: [
    'Write down your goal and the first three steps toward it',
    'Take immediate action while the motivation is high',
    'Connect with others working toward similar goals',
    'Create systems to support yourself when motivation naturally ebbs'
  ],
  journalPrompt: 'What am I motivated to do, and why does it matter to me? What\'s the first small step I can take today?'
}
```

#### PEACEFUL EMOTIONS (2 emotions)

##### 29. Calm
```typescript
{
  id: 'peaceful-calm',
  core: 'Peaceful',
  secondary: 'Relaxed',
  tertiary: 'Calm',
  definition: 'A tranquil state free from agitation, stress, or strong emotion.',
  examples: [
    'Feeling settled after resolving a stressful situation',
    'Experiencing inner quiet during meditation or in nature',
    'The peaceful feeling after a good conversation or cry'
  ],
  validation: 'Calmness is a state of nervous system regulation and emotional balance. In our often chaotic world, feeling calm is precious. This peace you\'re experiencing is your body and mind in a state of safety and equilibrium. It\'s worth savoring and protecting.',
  generalTechniques: [
    'Notice what contributed to this calm and try to replicate it',
    'Use this state for reflection or important decisions',
    'Practice gratitude for this moment of peace',
    'Remember this feeling - it can be an anchor during future stress'
  ],
  journalPrompt: 'What helped me find this calm? How can I create more moments like this in my life?'
}
```

##### 30. Relieved
```typescript
{
  id: 'peaceful-relieved',
  core: 'Peaceful',
  secondary: 'Released',
  tertiary: 'Relieved',
  definition: 'The easing of stress or anxiety when a worry is resolved or a feared outcome is avoided.',
  examples: [
    'Getting good news after waiting anxiously for test results',
    'A tense situation resolving better than expected',
    'Finally completing something that\'s been weighing on you'
  ],
  validation: 'Relief is the beautiful release of tension you\'ve been carrying. That weight you feel lifting is real—your body and mind can finally relax now that the uncertainty or threat has passed. This feeling honors both the difficulty of what you were holding and the gift of its resolution.',
  generalTechniques: [
    'Take a deep breath and let your body physically release the tension',
    'Acknowledge what you were worried about and that it\'s now resolved',
    'Do something gentle for yourself to transition out of stress mode',
    'Reflect on how you coped while under pressure'
  ],
  journalPrompt: 'What burden just lifted? How did I handle the uncertainty or challenge, and what can I learn from that?'
}
```

---

## 6. User Interface Specifications

### 6.1 Design Principles
- **Calming Aesthetic**: Soft colors, ample whitespace, gentle transitions
- **Clear Hierarchy**: Easy to understand where you are in the flow
- **Accessibility First**: WCAG 2.1 AA compliance minimum
- **Mobile Responsive**: Optimize for in-the-moment mobile use
- **Minimal Cognitive Load**: Simple, clear choices at each step

### 6.2 Key Screens

#### 6.2.1 Landing Page
- Brief explanation of the tool
- Two clear CTAs: "Start Exploring" (guest) and "Sign In" (returning users)
- Calming hero image or illustration
- Optional: Brief testimonial or explanation of the feelings wheel concept

#### 6.2.2 Emotion Selection - Layer 1 (Core)
- Display 6 core emotions: Sad, Mad, Scared, Joyful, Powerful, Peaceful
- Visual representation (wheel, cards, or buttons)
- Each emotion has brief descriptor
- Clear selection mechanism

#### 6.2.3 Emotion Selection - Layer 2 (Secondary)
- Shows secondary emotions under the selected core emotion
- Breadcrumb showing path (e.g., "Sad > ...")
- Back button to return to Layer 1
- Each option includes brief context

#### 6.2.4 Emotion Selection - Layer 3 (Tertiary)
- Shows specific emotional vocabulary
- Breadcrumb showing full path (e.g., "Sad > Hurt > ...")
- Each emotion shows definition and examples
- "This is it" button for confirmation
- Back button to Layer 2

#### 6.2.5 Validation & Regulation Screen
- Emotion name prominently displayed with full path
- Validation message in warm, readable typography
- Regulation techniques listed clearly
- Journal prompt in distinct section
- CTAs:
  - "Save to Collection" (if logged in)
  - "Create Account to Save" (if guest)
  - "Start Over" / "Explore Another Emotion"

#### 6.2.6 Vocabulary Collection (Logged-in Users)
- Grid or list view of saved emotions
- Each card shows: emotion name, date, visual indicator
- Filter by core emotion category
- Search functionality
- Sort options (newest, oldest, most frequent)
- Pattern recognition card (if 10+ entries)

#### 6.2.7 Emotion Detail View
- Full emotion information from when it was saved
- All metadata displayed
- Option to delete
- Back to collection

### 6.3 Navigation
- Clear "home" or "start over" always accessible
- Breadcrumb navigation during emotion selection
- Persistent user menu (if logged in)

---

## 7. Technical Implementation Notes

### 7.1 Data Storage

#### Guest Mode
- No persistence required
- Session data can live in component state

#### Registered Users
- User authentication table
- Emotion entries table with schema:
```sql
CREATE TABLE emotion_entries (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  core_emotion VARCHAR(50),
  secondary_emotion VARCHAR(50),
  tertiary_emotion VARCHAR(50),
  emotion_path VARCHAR(200),
  validation_message TEXT,
  regulation_techniques JSONB,
  journal_prompt TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### 7.2 Pattern Recognition Logic
- Trigger: 10+ saved entries
- Analysis:
  - Group by day of week and time of day
  - Count frequency of each emotion
  - Identify patterns (e.g., "3+ instances of same/similar emotion on same day/time")
- Display most significant pattern in card format

### 7.3 Performance Considerations
- Lazy load emotion data
- Optimize for mobile (3G connection)
- Cache emotion content data
- Minimize bundle size

---

## 8. Future Enhancements (V2+)

### 8.1 AI-Powered Clarifying Questions
- Conversational flow to help narrow emotion selection
- Uses natural language to guide users
- More personalized experience

### 8.2 Multi-Emotion Handling
- Select multiple emotions in one session
- Understand emotional complexity
- Save as combined entry or separate entries

### 8.3 Advanced Pattern Analysis
- Emotion triggers identification
- Correlation with events, people, or situations
- Visualization of emotional patterns over time
- Emotional health insights

### 8.4 Additional Features
- Export vocabulary collection
- Sharing capabilities (anonymized)
- Integration with journaling apps
- Guided meditation or regulation exercises
- Emotion tracking over specific life events

---

## 9. Success Metrics (For Future Consideration)

### 9.1 Engagement Metrics
- Guest users who create accounts
- Return user rate
- Average emotions saved per user
- Time spent in exploration flow

### 9.2 Value Metrics
- Users who reach 10+ saved emotions (pattern threshold)
- Regulation techniques accessed
- User feedback/satisfaction scores

### 9.3 Technical Metrics
- Page load times
- Mobile vs desktop usage
- Drop-off points in flow

---

## 10. Appendix

### 10.1 Willcox Feelings Wheel Structure
Reference: The feelings wheel contains:
- 6 core emotions
- ~18-24 secondary emotions
- ~72+ tertiary emotions

For V1, we're implementing 30 of the most common tertiary emotions across all categories.

### 10.2 Content Review Checklist
Before launch, review all emotion content for:
- [ ] Accuracy of definitions
- [ ] Appropriateness of examples
- [ ] Compassionate, warm tone in validation messages
- [ ] Practical, accessible regulation techniques
- [ ] Thought-provoking journal prompts
- [ ] Inclusive language
- [ ] Consistency across all emotions

### 10.3 Accessibility Requirements
- [ ] Keyboard navigation throughout
- [ ] Screen reader compatible
- [ ] Color contrast ratios meet WCAG AA
- [ ] Focus indicators on all interactive elements
- [ ] Alt text for all images
- [ ] Clear, simple language (8th grade reading level)
- [ ] Skip navigation links
- [ ] ARIA labels where appropriate

---

## 11. Development Phases

### Phase 1: Core Experience (MVP)
- [ ] Build emotion selection flow (3 layers)
- [ ] Implement validation & regulation display
- [ ] Create guest mode functionality
- [ ] Responsive UI with MUI components
- [ ] Emotion data JSON file with 30 emotions

### Phase 2: User Accounts
- [ ] Authentication system
- [ ] Database setup
- [ ] Save emotion functionality
- [ ] Vocabulary collection view
- [ ] Emotion detail view

### Phase 3: Pattern Recognition
- [ ] Pattern analysis algorithm
- [ ] Pattern card UI
- [ ] Minimum 10 entries threshold

### Phase 4: Polish & Launch
- [ ] Full accessibility audit
- [ ] Performance optimization
- [ ] User testing
- [ ] Bug fixes
- [ ] Documentation

---

## 12. Open Questions / Decisions Needed

1. **Authentication Provider**: Firebase, Auth0, Supabase, or custom?
2. **Database**: Firebase Firestore, Supabase (PostgreSQL), or other?
3. **Hosting**: Vercel, Netlify, AWS, or other?
4. **Analytics**: Google Analytics, Mixpanel, or other?
5. **Emotion Wheel Visual**: Circular wheel design vs. card-based vs. list?
6. **Regulation Techniques**: General techniques only, or also emotion-specific?
7. **Export Feature**: Include in V1 or defer to V2?

---

*This PRD is a living document and should be updated as decisions are made and the product evolves.*