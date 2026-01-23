// T008: Emotion data constants with all 30 emotions across 6 core categories
import { EmotionData, CoreEmotion } from '../types';

// Sad Emotions
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
      'Watching friends connect while feeling on the outside',
      'Being surrounded by people but still feeling alone'
    ],
    validation: 'Feeling lonely is deeply human. We\'re wired for connection, and recognizing this need shows your emotional awareness.',
    generalTechniques: [
      'Reach out to someone, even with a simple text or call',
      'Engage in a community activity or group (online or in-person)',
      'Practice self-compassion - treat yourself as you would a friend feeling lonely',
      'Create something or journal to process the feeling'
    ],
    journalPrompt: 'What kind of connection am I craving right now? Is it depth, frequency, shared interests, or something else?'
  },
  {
    id: 'sad-disappointed',
    core: 'Sad',
    secondary: 'Unmet Expectations',
    tertiary: 'Disappointed',
    definition: 'The feeling when reality falls short of what you hoped for or expected.',
    examples: [
      'Not getting a job you really wanted',
      'A friend canceling plans you were excited about',
      'A movie or book not living up to the hype',
      'Someone you trust not following through on their promise'
    ],
    validation: 'Disappointment shows you care deeply and have hopes. This capacity for hope is a strength, even when it leads to letdown.',
    generalTechniques: [
      'Allow yourself to feel the disappointment fully before trying to "fix" it',
      'Reflect on what this shows you about your values and desires',
      'Consider if your expectations were realistic or if you can adjust them',
      'Look for lessons or alternative opportunities that might emerge'
    ],
    journalPrompt: 'What did this disappointment teach me about what I truly value or want in my life?'
  },
  {
    id: 'sad-grief',
    core: 'Sad',
    secondary: 'Loss',
    tertiary: 'Grief',
    definition: 'Deep sorrow from losing someone or something important to you.',
    examples: [
      'The death of a loved one, pet, or even a relationship ending',
      'Losing a job that was meaningful to you',
      'Moving away from a place that felt like home',
      'Realizing a dream is no longer possible'
    ],
    validation: 'Grief is love with nowhere to go. The depth of your grief reflects the depth of what you\'ve lost.',
    generalTechniques: [
      'Honor the loss - create a ritual, write a letter, or share memories',
      'Allow waves of emotion without judgment - grief isn\'t linear',
      'Seek support from others who understand loss',
      'Take care of your basic needs even when you don\'t feel like it'
    ],
    journalPrompt: 'How can I honor what I\'ve lost while slowly opening to what might still be possible?'
  },
  {
    id: 'sad-hopeless',
    core: 'Sad',
    secondary: 'Despair',
    tertiary: 'Hopeless',
    definition: 'Feeling like positive change is impossible or that situations will never improve.',
    examples: [
      'Struggling with a chronic illness or mental health condition',
      'Feeling stuck in a difficult life situation with no clear way out',
      'Repeated failures or setbacks in an important area',
      'Watching world events and feeling powerless to help'
    ],
    validation: 'Hopelessness often comes when we\'ve tried so hard that we\'re exhausted. Your persistence shows incredible strength.',
    generalTechniques: [
      'Focus on tiny, manageable actions rather than overwhelming big changes',
      'Connect with others who\'ve faced similar challenges',
      'Seek professional support - you don\'t have to face this alone',
      'Practice grounding techniques to stay present rather than projecting into the future'
    ],
    journalPrompt: 'If I could only take one small step today, what would feel most manageable or meaningful?'
  },
  {
    id: 'sad-regretful',
    core: 'Sad',
    secondary: 'Guilt/Shame',
    tertiary: 'Regretful',
    definition: 'Wishing you had acted differently in the past, feeling sorrow about choices made or not made.',
    examples: [
      'Saying something hurtful during an argument',
      'Not taking an opportunity that won\'t come again',
      'Spending time on things that didn\'t matter instead of with loved ones',
      'Making a decision that hurt someone else'
    ],
    validation: 'Regret shows your moral compass and desire to do better. This awareness is the first step toward growth.',
    generalTechniques: [
      'Distinguish between guilt (about actions) and shame (about self) - focus on learning from actions',
      'Make amends when possible and appropriate',
      'Practice self-forgiveness - you made the best decision with the information you had then',
      'Use this insight to guide future choices'
    ],
    journalPrompt: 'What would I tell a dear friend who was struggling with this same regret?'
  }
];

// Mad Emotions  
export const MAD_EMOTIONS: EmotionData[] = [
  {
    id: 'mad-frustrated',
    core: 'Mad',
    secondary: 'Blocked',
    tertiary: 'Frustrated',
    definition: 'Feeling blocked or hindered from achieving what you want or need.',
    examples: [
      'Technology not working when you have a deadline',
      'Being stuck in traffic when you\'re already late',
      'Trying to explain something but not being understood',
      'Working hard but not seeing progress'
    ],
    validation: 'Frustration signals that you care about your goals and progress. This drive is valuable.',
    generalTechniques: [
      'Take a brief break to reset your nervous system',
      'Break the problem into smaller, more manageable pieces',
      'Ask for help or a different perspective',
      'Focus on what you can control rather than what you can\'t'
    ],
    journalPrompt: 'What is this frustration telling me about what matters to me right now?'
  },
  {
    id: 'mad-betrayed',
    core: 'Mad',
    secondary: 'Trust Broken',
    tertiary: 'Betrayed',
    definition: 'Feeling that someone you trusted has deliberately deceived or harmed you.',
    examples: [
      'A friend sharing something you told them in confidence',
      'A partner being unfaithful',
      'A colleague taking credit for your work',
      'Someone making promises they never intended to keep'
    ],
    validation: 'Betrayal hurts because you opened yourself to trust. Your ability to trust shows courage and hope.',
    generalTechniques: [
      'Allow yourself to feel angry - betrayal deserves anger',
      'Set clear boundaries about what behavior you will and won\'t accept',
      'Seek support from people you trust',
      'Take time before making decisions about the relationship'
    ],
    journalPrompt: 'What does this betrayal teach me about my values and what I need in relationships?'
  },
  {
    id: 'mad-indignant',
    core: 'Mad',
    secondary: 'Injustice',
    tertiary: 'Indignant',
    definition: 'Anger at perceived unfairness or violation of moral principles.',
    examples: [
      'Witnessing discrimination or prejudice',
      'Seeing someone abuse their power',
      'Being treated unfairly despite following the rules',
      'Watching corruption or dishonesty go unpunished'
    ],
    validation: 'Indignation shows your strong moral compass and care for justice. This anger can fuel positive action.',
    generalTechniques: [
      'Channel the energy into constructive action or advocacy',
      'Connect with others who share your values',
      'Focus on what you can influence rather than what you can\'t control',
      'Practice self-care so you can sustain your efforts for justice'
    ],
    journalPrompt: 'How can I use this sense of injustice to create positive change, even in small ways?'
  },
  {
    id: 'mad-furious',
    core: 'Mad',
    secondary: 'Rage',
    tertiary: 'Furious',
    definition: 'Intense, overwhelming anger that feels almost uncontrollable.',
    examples: [
      'Someone repeatedly dismissing or disrespecting you',
      'Witnessing cruelty toward someone vulnerable',
      'Being lied to or manipulated after giving someone multiple chances',
      'Feeling completely powerless in an important situation'
    ],
    validation: 'Fury often arises when our deepest values are violated. This intensity shows what matters most to you.',
    generalTechniques: [
      'Use physical movement to release the energy safely (run, punch a pillow, etc.)',
      'Step away from the situation until the intensity decreases',
      'Practice deep breathing or other calming techniques',
      'Seek professional support if fury feels unmanageable or harmful'
    ],
    journalPrompt: 'Once this intensity passes, what action would align with my values and serve my long-term well-being?'
  },
  {
    id: 'mad-resentful',
    core: 'Mad',
    secondary: 'Lingering Anger',
    tertiary: 'Resentful',
    definition: 'Long-held anger and bitterness about past wrongs that continues to affect you.',
    examples: [
      'Still feeling angry about childhood mistreatment',
      'Harboring anger toward an ex-partner years later',
      'Feeling bitter about missed opportunities or unfair treatment',
      'Holding onto anger toward someone who never apologized'
    ],
    validation: 'Resentment shows that something important to you was violated. Your pain deserves acknowledgment.',
    generalTechniques: [
      'Acknowledge the real harm that was done - your anger is justified',
      'Consider whether holding onto this anger serves your current well-being',
      'Explore forgiveness as something you do for yourself, not the other person',
      'Seek therapy if resentment is impacting your relationships or happiness'
    ],
    journalPrompt: 'What would my life look like if I carried less of this burden? What might become possible?'
  }
];

// Scared Emotions
export const SCARED_EMOTIONS: EmotionData[] = [
  {
    id: 'scared-anxious',
    core: 'Scared',
    secondary: 'Worry',
    tertiary: 'Anxious',
    definition: 'Feeling worried or uneasy about uncertain outcomes or potential threats.',
    examples: [
      'Worrying about an upcoming job interview or presentation',
      'Feeling uneasy about a health concern',
      'Anxiety about social situations or meeting new people',
      'General worry about the future or things beyond your control'
    ],
    validation: 'Anxiety shows that you care about outcomes and want to be prepared. This care can be channeled positively.',
    generalTechniques: [
      'Practice deep breathing or progressive muscle relaxation',
      'Ground yourself by naming 5 things you can see, 4 you can hear, 3 you can touch',
      'Focus on what you can control and prepare for',
      'Challenge catastrophic thinking with more balanced perspectives'
    ],
    journalPrompt: 'What specific worry is beneath this anxiety, and what small step could I take to address it?'
  },
  {
    id: 'scared-terrified',
    core: 'Scared',
    secondary: 'Overwhelm',
    tertiary: 'Terrified',
    definition: 'Intense fear that feels overwhelming and paralyzing.',
    examples: [
      'Facing a serious illness diagnosis',
      'Being in physical danger or witnessing violence',
      'Confronting a deep-seated phobia',
      'Feeling overwhelmed by major life changes'
    ],
    validation: 'Terror is your system\'s way of protecting you from perceived danger. This response shows your will to survive.',
    generalTechniques: [
      'Focus on immediate safety and basic needs',
      'Use grounding techniques to stay present',
      'Seek immediate support from trusted people',
      'Consider professional help if terror persists or interferes with functioning'
    ],
    journalPrompt: 'What do I need right now to feel even slightly safer or more supported?'
  },
  {
    id: 'scared-vulnerable',
    core: 'Scared',
    secondary: 'Exposure',
    tertiary: 'Vulnerable',
    definition: 'Feeling exposed, defenseless, or open to being hurt emotionally.',
    examples: [
      'Sharing something deeply personal with someone new',
      'Starting a new relationship after being hurt',
      'Asking for help when you prefer to be independent',
      'Taking creative risks or putting your work out there'
    ],
    validation: 'Vulnerability is the birthplace of courage, creativity, and change. Your willingness to be open is brave.',
    generalTechniques: [
      'Remind yourself that vulnerability is strength, not weakness',
      'Start with small acts of vulnerability to build confidence',
      'Choose trustworthy people to be vulnerable with',
      'Practice self-compassion when vulnerability doesn\'t lead to the response you hoped for'
    ],
    journalPrompt: 'What growth or connection might become possible if I stayed open despite feeling vulnerable?'
  },
  {
    id: 'scared-insecure',
    core: 'Scared',
    secondary: 'Self-Doubt',
    tertiary: 'Insecure',
    definition: 'Uncertainty about your own worth, abilities, or place in relationships.',
    examples: [
      'Wondering if you\'re good enough at your job',
      'Feeling unsure about your appearance or social skills',
      'Questioning whether people really like you',
      'Doubting your decisions or judgment'
    ],
    validation: 'Insecurity often means you have high standards for yourself. This desire to grow and improve is valuable.',
    generalTechniques: [
      'Practice self-compassion - treat yourself as kindly as you would a good friend',
      'Look for evidence that contradicts negative self-beliefs',
      'Focus on your efforts and growth rather than comparing yourself to others',
      'Surround yourself with people who appreciate and support you'
    ],
    journalPrompt: 'What would someone who loves me unconditionally say about my worth and capabilities?'
  },
  {
    id: 'scared-panicked',
    core: 'Scared',
    secondary: 'Crisis',
    tertiary: 'Panicked',
    definition: 'Sudden, intense fear that feels out of control and may include physical symptoms.',
    examples: [
      'Having a panic attack with racing heart and difficulty breathing',
      'Feeling completely overwhelmed by a crisis situation',
      'Sudden intense fear in response to a trigger or memory',
      'Feeling like you\'re losing control of your mind or body'
    ],
    validation: 'Panic is your nervous system trying to protect you. You\'re not weak - you\'re human.',
    generalTechniques: [
      'Remember that panic attacks peak and then subside - this will pass',
      'Use box breathing: breathe in for 4, hold for 4, out for 4, hold for 4',
      'Ground yourself with physical sensations: hold ice, splash cold water on your face',
      'Seek professional help for recurrent panic'
    ],
    journalPrompt: 'What does my body need right now to feel safer and more grounded?'
  }
];

// Joyful Emotions
export const JOYFUL_EMOTIONS: EmotionData[] = [
  {
    id: 'joyful-excited',
    core: 'Joyful',
    secondary: 'Anticipation',
    tertiary: 'Excited',
    definition: 'Enthusiastic eagerness about upcoming positive experiences.',
    examples: [
      'Looking forward to a vacation or special event',
      'Anticipating seeing loved ones after a long time apart',
      'Feeling energized about starting a new project or job',
      'Getting ready for a date with someone you really like'
    ],
    validation: 'Your excitement shows your capacity for joy and hope. This enthusiasm is a gift.',
    generalTechniques: [
      'Savor the anticipation - excitement about future events can be as enjoyable as the events themselves',
      'Share your excitement with others who will celebrate with you',
      'Channel the energy into preparation or other positive activities',
      'Balance excitement with presence - don\'t miss current joys while anticipating future ones'
    ],
    journalPrompt: 'What about this upcoming experience makes me feel most alive and enthusiastic?'
  },
  {
    id: 'joyful-grateful',
    core: 'Joyful',
    secondary: 'Appreciation',
    tertiary: 'Grateful',
    definition: 'Deep appreciation for good things in your life, both big and small.',
    examples: [
      'Feeling thankful for supportive friends and family',
      'Appreciating a beautiful sunset or moment in nature',
      'Being grateful for your health, home, or basic needs being met',
      'Feeling thankful for unexpected kindness from a stranger'
    ],
    validation: 'Gratitude is a practice that creates more joy. Your ability to appreciate what you have is a strength.',
    generalTechniques: [
      'Keep a gratitude journal or share appreciation with others',
      'Notice small, everyday things you might usually overlook',
      'Express gratitude directly to people who have made a difference in your life',
      'Use gratitude as an antidote to comparison or envy'
    ],
    journalPrompt: 'What am I grateful for today that I might have taken for granted yesterday?'
  },
  {
    id: 'joyful-content',
    core: 'Joyful',
    secondary: 'Satisfaction',
    tertiary: 'Content',
    definition: 'A peaceful sense of satisfaction with life as it is right now.',
    examples: [
      'Feeling satisfied with your current relationships and circumstances',
      'Enjoying a quiet moment without needing anything to be different',
      'Feeling at peace with yourself and your choices',
      'Appreciating the present moment without rushing toward the next thing'
    ],
    validation: 'Contentment is a form of success. In a world that constantly pushes for more, finding peace with what is takes wisdom.',
    generalTechniques: [
      'Practice mindfulness to fully experience present moments',
      'Resist the urge to immediately seek more stimulation or achievement',
      'Notice and appreciate the stability and peace in your life',
      'Use this content feeling as a foundation for making thoughtful choices about change'
    ],
    journalPrompt: 'What aspects of my life feel "just right" exactly as they are now?'
  },
  {
    id: 'joyful-proud',
    core: 'Joyful',
    secondary: 'Achievement',
    tertiary: 'Proud',
    definition: 'Satisfaction and joy from accomplishing something meaningful or overcoming a challenge.',
    examples: [
      'Completing a difficult project or reaching a long-term goal',
      'Overcoming a fear or pushing through a challenge',
      'Helping someone else succeed or grow',
      'Making progress on personal development or healing'
    ],
    validation: 'Pride in your accomplishments is healthy and deserved. You\'ve worked for this success.',
    generalTechniques: [
      'Take time to fully acknowledge and celebrate your accomplishment',
      'Share your success with people who have supported you',
      'Reflect on the skills, qualities, and effort that made this success possible',
      'Use this confidence as foundation for future challenges'
    ],
    journalPrompt: 'What strengths or qualities did I demonstrate in achieving this that I can recognize and build on?'
  },
  {
    id: 'joyful-blissful',
    core: 'Joyful',
    secondary: 'Transcendence',
    tertiary: 'Blissful',
    definition: 'Profound happiness that feels transcendent and deeply connected to life.',
    examples: [
      'Feeling deeply connected during meditation or spiritual practice',
      'Experiencing awe in nature or art',
      'Feeling profound love and connection with others',
      'Moments of clarity where everything feels perfect and meaningful'
    ],
    validation: 'Bliss reminds you of life\'s profound beauty and your capacity for deep joy. These moments are precious.',
    generalTechniques: [
      'Don\'t try to hold onto or recreate the feeling - let it flow naturally',
      'Remember this feeling during difficult times as proof that joy is possible',
      'Notice what conditions or practices help you access states of deeper connection',
      'Share the glow of this experience with others through kindness or presence'
    ],
    journalPrompt: 'How has this moment of bliss shifted my perspective on what\'s possible in life?'
  }
];

// Powerful Emotions
export const POWERFUL_EMOTIONS: EmotionData[] = [
  {
    id: 'powerful-confident',
    core: 'Powerful',
    secondary: 'Self-Assured',
    tertiary: 'Confident',
    definition: 'Feeling capable, self-assured, and ready to take on challenges.',
    examples: [
      'Walking into a meeting knowing you\'re prepared and capable',
      'Feeling comfortable in your own skin in social situations',
      'Trusting your judgment when making important decisions',
      'Speaking up for yourself or others with clarity and conviction'
    ],
    validation: 'Confidence comes from recognizing your own competence and worth. This self-knowledge is powerful.',
    generalTechniques: [
      'Reflect on past successes and challenges you\'ve overcome',
      'Stand tall and use confident body language',
      'Prepare thoroughly for challenges to build genuine confidence',
      'Practice self-compassion - confidence doesn\'t require perfection'
    ],
    journalPrompt: 'What experiences or qualities can I draw on to feel more confident in future challenges?'
  },
  {
    id: 'powerful-determined',
    core: 'Powerful',
    secondary: 'Focused',
    tertiary: 'Determined',
    definition: 'Strong resolve and unwavering commitment to achieving your goals.',
    examples: [
      'Deciding to pursue a difficult goal despite obstacles',
      'Committing to change a habit or lifestyle that isn\'t serving you',
      'Standing firm in your values even when it\'s unpopular',
      'Persisting through setbacks because you believe in your purpose'
    ],
    validation: 'Determination shows your strength of character and commitment to what matters. This resolve is admirable.',
    generalTechniques: [
      'Break large goals into smaller, actionable steps',
      'Remind yourself regularly of your "why" - the deeper reason behind your determination',
      'Celebrate small wins along the way to maintain motivation',
      'Seek support from others who share or understand your goals'
    ],
    journalPrompt: 'What deeper purpose or value is fueling this determination, and how can I stay connected to it?'
  },
  {
    id: 'powerful-fierce',
    core: 'Powerful',
    secondary: 'Protective',
    tertiary: 'Fierce',
    definition: 'Intense, protective energy when defending yourself or others you care about.',
    examples: [
      'Standing up to someone who is bullying or mistreating someone vulnerable',
      'Advocating strongly for a cause you believe in',
      'Protecting your boundaries when someone repeatedly crosses them',
      'Fighting for resources or opportunities for yourself or your community'
    ],
    validation: 'Fierceness shows your strength and your care for what matters most. This protective instinct is valuable.',
    generalTechniques: [
      'Channel the intensity into focused, strategic action',
      'Make sure your fierceness serves justice rather than just anger',
      'Balance fierce protection with compassion when possible',
      'Take care of yourself so you can sustain your protective energy'
    ],
    journalPrompt: 'What am I protecting or fighting for, and how can I be most effective in this fight?'
  },
  {
    id: 'powerful-empowered',
    core: 'Powerful',
    secondary: 'Agency',
    tertiary: 'Empowered',
    definition: 'Feeling that you have control over your choices and the ability to influence your circumstances.',
    examples: [
      'Realizing you can leave a job or relationship that isn\'t working',
      'Discovering you have skills and strengths you didn\'t know about',
      'Taking action to change something in your community or world',
      'Setting boundaries and seeing them respected'
    ],
    validation: 'Empowerment comes from recognizing your own agency. You have more power than you might realize.',
    generalTechniques: [
      'Focus on areas where you do have choice and influence',
      'Take action, even small ones, to exercise your power positively',
      'Help others recognize and develop their own empowerment',
      'Use your power responsibly and with consideration for others'
    ],
    journalPrompt: 'Where in my life do I have more choice and influence than I\'ve been recognizing?'
  },
  {
    id: 'powerful-inspired',
    core: 'Powerful',
    secondary: 'Motivated',
    tertiary: 'Inspired',
    definition: 'Feeling energized and motivated by a vision, idea, or possibility.',
    examples: [
      'Getting a creative idea that excites you and demands expression',
      'Meeting someone whose life or work inspires you to dream bigger',
      'Having a breakthrough moment where you see new possibilities',
      'Feeling called to contribute to something larger than yourself'
    ],
    validation: 'Inspiration is energy flowing through you toward creation and growth. This connection to possibility is a gift.',
    generalTechniques: [
      'Act on inspiration quickly while the energy is high',
      'Share your inspiration with others who might collaborate or encourage you',
      'Document inspired ideas so you can return to them later',
      'Create conditions that invite more inspiration into your life'
    ],
    journalPrompt: 'How can I honor this inspiration and take concrete steps to bring this vision into reality?'
  }
];

// Peaceful Emotions
export const PEACEFUL_EMOTIONS: EmotionData[] = [
  {
    id: 'peaceful-calm',
    core: 'Peaceful',
    secondary: 'Tranquil',
    tertiary: 'Calm',
    definition: 'A state of inner quiet and emotional balance, free from agitation.',
    examples: [
      'Sitting quietly in nature and feeling at peace',
      'Feeling centered and balanced after meditation or prayer',
      'Being in a familiar, safe space where you can fully relax',
      'Having resolved a conflict and feeling harmony restored'
    ],
    validation: 'Calmness is a form of strength. Your ability to find peace within yourself is a valuable skill.',
    generalTechniques: [
      'Notice and appreciate moments of calm when they arise',
      'Practice deep breathing or other calming techniques to cultivate more calm',
      'Create environments and routines that support your sense of peace',
      'Use calm moments to make thoughtful decisions and connect with your values'
    ],
    journalPrompt: 'What conditions or practices help me access this sense of calm, and how can I invite more of them into my life?'
  },
  {
    id: 'peaceful-relieved',
    core: 'Peaceful',
    secondary: 'Release',
    tertiary: 'Relieved',
    definition: 'The peaceful feeling after stress, worry, or pressure has been lifted.',
    examples: [
      'Finally finishing a big project or exam',
      'Getting good news about a health concern',
      'Resolving a conflict or misunderstanding with someone important',
      'Making it through a difficult period in your life'
    ],
    validation: 'Relief shows you\'ve been carrying a burden and now you can rest. You\'ve made it through something difficult.',
    generalTechniques: [
      'Allow yourself to fully feel and enjoy the relief',
      'Reflect on what you learned or how you grew through the challenging period',
      'Express gratitude for the support that helped you through',
      'Use this relief as an opportunity to rest and recharge'
    ],
    journalPrompt: 'What did I learn about my own resilience and strength by getting through that difficult time?'
  },
  {
    id: 'peaceful-serene',
    core: 'Peaceful',
    secondary: 'Harmony',
    tertiary: 'Serene',
    definition: 'Deep, undisturbed peace that comes from feeling aligned with yourself and your surroundings.',
    examples: [
      'Watching a sunrise or sunset with a quiet heart',
      'Feeling completely present and connected during a conversation with loved ones',
      'Being in a beautiful space that nourishes your soul',
      'Feeling aligned with your values and choices'
    ],
    validation: 'Serenity is a gift you give yourself and others. Your peace contributes to the peace of the world.',
    generalTechniques: [
      'Cultivate awareness of what brings you to this serene state',
      'Protect your peace by setting boundaries around what disturbs it',
      'Share your serenity with others through your presence and energy',
      'Let this feeling guide you toward choices that maintain inner harmony'
    ],
    journalPrompt: 'When I\'m in this serene state, what feels most true about who I am and what I value?'
  },
  {
    id: 'peaceful-balanced',
    core: 'Peaceful',
    secondary: 'Equilibrium',
    tertiary: 'Balanced',
    definition: 'A sense of stability where different aspects of your life feel harmoniously integrated.',
    examples: [
      'Having a good rhythm between work, relationships, and personal time',
      'Feeling emotionally stable - neither too high nor too low',
      'Managing responsibilities without feeling overwhelmed',
      'Feeling connected to both your individual needs and your relationships'
    ],
    validation: 'Balance is something you create actively. Your efforts to maintain equilibrium show wisdom and maturity.',
    generalTechniques: [
      'Notice what activities, relationships, and choices contribute to your sense of balance',
      'Make small adjustments when you feel things getting out of balance',
      'Practice saying no to things that would disrupt your equilibrium',
      'Appreciate balance as an ongoing practice, not a final destination'
    ],
    journalPrompt: 'What does balance look like for me right now, and what small adjustments would help me maintain it?'
  },
  {
    id: 'peaceful-accepting',
    core: 'Peaceful',
    secondary: 'Surrender',
    tertiary: 'Accepting',
    definition: 'Peace that comes from acknowledging reality without fighting against what you cannot change.',
    examples: [
      'Coming to terms with a loss or disappointment',
      'Accepting yourself as you are while still being open to growth',
      'Finding peace with a difficult person or situation by accepting what you can\'t control',
      'Letting go of perfectionism and embracing "good enough"'
    ],
    validation: 'Acceptance is not giving up - it\'s finding peace with what is so you can respond wisely rather than react from struggle.',
    generalTechniques: [
      'Distinguish between what you can and cannot control or influence',
      'Practice self-compassion as you work toward acceptance',
      'Find meaning or growth opportunities within difficult circumstances',
      'Use acceptance as a foundation for wise action rather than passive resignation'
    ],
    journalPrompt: 'What am I learning to accept, and how might this acceptance free me to focus my energy where I can make a difference?'
  }
];

// Combined exports
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

// Core emotion display data
export const CORE_EMOTION_INFO = {
  Sad: {
    color: '#4A90E2',
    description: 'Feelings of loss, disappointment, or longing'
  },
  Mad: {
    color: '#E94B3C',
    description: 'Anger, frustration, or feeling blocked'
  },
  Scared: {
    color: '#F39C12',
    description: 'Fear, anxiety, or feeling unsafe'
  },
  Joyful: {
    color: '#2ECC71',
    description: 'Happiness, excitement, or positive energy'
  },
  Powerful: {
    color: '#8E44AD',
    description: 'Confidence, determination, or feeling strong'
  },
  Peaceful: {
    color: '#1ABC9C',
    description: 'Calm, balanced, or harmonious feelings'
  }
};