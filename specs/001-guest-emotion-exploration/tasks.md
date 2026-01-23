# Tasks: Guest User Emotion Exploration

**Input**: Design documents from `/specs/001-guest-emotion-exploration/`
**Prerequisites**: plan.md ✅, spec.md ✅, research.md ✅, data-model.md ✅, contracts/ ✅

**Tests**: Zero Testing Policy (Constitution Principle V) - No test tasks included

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

Next.js web application with App Router - paths assume repository root structure

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Create Next.js project with TypeScript and App Router per quickstart.md
- [x] T002 [P] Install MUI dependencies (@mui/material, @emotion/react, @emotion/styled)
- [x] T003 [P] Configure TypeScript paths and strict mode in tsconfig.json
- [x] T004 [P] Create project directory structure (app/, src/components/, src/data/, src/hooks/, src/utils/)
- [x] T005 Setup global CSS and MUI theme configuration in app/globals.css and theme provider

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T006 [P] Create core TypeScript interfaces in src/data/types.ts (EmotionData, SessionState, CoreEmotion)
- [x] T007 [P] Implement useLocalStorage hook in src/hooks/useLocalStorage.ts for session persistence
- [x] T008 [P] Create emotion data constants in src/data/emotions/index.ts with all 30 emotions across 6 core categories
- [x] T009 [P] Implement useSessionState hook in src/hooks/useSessionState.ts for navigation state management
- [x] T010 [P] Create base EmotionCard component in src/components/EmotionCard.tsx with MUI Card layout
- [x] T011 [P] Create EmotionGrid component in src/components/EmotionGrid.tsx for responsive card layouts
- [x] T012 [P] Implement useEmotionNavigation hook in src/hooks/useEmotionNavigation.ts for routing logic
- [x] T013 Create root layout in app/layout.tsx with MUI theme provider and navigation structure

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Core Emotion Selection (Priority: P1) 🎯 MVP

**Goal**: Enable guest users to select from 6 core emotions (Sad, Mad, Scared, Joyful, Powerful, Peaceful) without authentication barriers

**Independent Test**: Load application homepage and verify all 6 core emotion cards display with colors, names, descriptions, and successful navigation to secondary emotions on selection

### Implementation for User Story 1

- [x] T014 [P] [US1] Create homepage with core emotion cards in app/page.tsx
- [x] T015 [P] [US1] Style core emotion cards with distinct colors and descriptions using MUI theming
- [x] T016 [US1] Implement core emotion selection navigation to /explore/[core] routes
- [x] T017 [US1] Create core emotion layout wrapper in app/explore/layout.tsx with breadcrumb navigation
- [x] T018 [US1] Add session persistence for selected core emotion using useSessionState hook
- [x] T019 [US1] Implement responsive grid layout for mobile-first core emotion display

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Secondary and Tertiary Emotion Selection (Priority: P1)

**Goal**: Allow navigation through secondary emotions under chosen core emotion, then to specific tertiary emotions that match user's feelings

**Independent Test**: Select core emotion, navigate through secondary emotions with descriptions, select tertiary emotion and verify emotion data displays correctly

### Implementation for User Story 2

- [x] T020 [P] [US2] Create secondary emotion page in app/explore/[core]/page.tsx
- [x] T021 [P] [US2] Create tertiary emotion page in app/explore/[core]/[secondary]/page.tsx
- [x] T022 [US2] Implement secondary emotion filtering logic in useEmotionData hook in src/hooks/useEmotionData.ts
- [ ] T023 [US2] Implement tertiary emotion filtering and display with definitions and examples
- [ ] T024 [US2] Add back navigation functionality between core → secondary → tertiary layers
- [ ] T025 [US2] Create emotion confirmation component for "This is it" selection in src/components/EmotionConfirmation.tsx
- [ ] T026 [US2] Implement navigation state updates for secondary and tertiary selections

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Emotion Validation and Regulation (Priority: P1)

**Goal**: Provide validation messages, regulation techniques, and journal prompts specific to the identified emotion

**Independent Test**: Complete emotion selection flow and verify validation message, 3-4 regulation techniques, and thoughtful journal prompt display appropriately

### Implementation for User Story 3

- [x] T027 [P] [US3] Create validation result page in app/result/page.tsx
- [x] T028 [P] [US3] Create ValidationPanel component in src/components/ValidationPanel.tsx for supportive messages
- [x] T029 [P] [US3] Create RegulationPanel component in src/components/RegulationPanel.tsx for technique display
- [x] T030 [P] [US3] Create JournalPrompt component in src/components/JournalPrompt.tsx for reflection questions
- [ ] T031 [US3] Implement emotion result routing from tertiary selection to validation display
- [ ] T032 [US3] Add "Start Over" functionality to return to core emotion selection
- [ ] T033 [US3] Implement session completion tracking and state cleanup

**Checkpoint**: All core user stories (P1) should now be independently functional

---

## Phase 6: User Story 4 - Guest-to-Account Conversion Invitation (Priority: P2)

**Goal**: Present non-intrusive invitation to create account for saving emotional vocabulary journey after exploration completion

**Independent Test**: Complete emotion exploration flow and verify account creation invitation appears without blocking continued guest usage

### Implementation for User Story 4

- [ ] T034 [P] [US4] Create AccountInvitation component in src/components/AccountInvitation.tsx
- [ ] T035 [P] [US4] Design non-intrusive invitation UI with "Save this to your collection" messaging
- [ ] T036 [US4] Integrate account invitation display at end of validation flow in result page
- [ ] T037 [US4] Implement graceful decline handling to allow continued guest usage
- [ ] T038 [US4] Add session data preparation for potential account creation and save

**Checkpoint**: All user stories should now be independently functional

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T039 [P] Add loading states for all navigation transitions using Next.js loading.tsx files
- [ ] T040 [P] Add error boundaries for graceful error handling in app/error.tsx
- [ ] T041 [P] Implement mobile-first responsive design optimizations across all emotion cards
- [ ] T042 [P] Add WCAG 2.1 AA accessibility enhancements (focus states, screen reader support)
- [ ] T043 [P] Optimize bundle size and ensure offline capability for embedded emotion data
- [ ] T044 [P] Add performance monitoring for 2-second load time requirement on 3G networks
- [ ] T045 Create comprehensive README.md with setup and development instructions
- [ ] T046 Run quickstart.md validation and verify all implementation matches design specifications

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3-6)**: All depend on Foundational phase completion
  - User stories can proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P1 → P1 → P2)
- **Polish (Phase 7)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P1)**: Depends on User Story 1 completion for navigation flow - Sequential dependency
- **User Story 3 (P1)**: Depends on User Story 2 completion for emotion selection - Sequential dependency  
- **User Story 4 (P2)**: Can start after User Story 3 completion - Sequential dependency for invitation placement

### Within Each User Story

- Component creation before page integration
- Hook implementation before component usage
- Navigation logic before routing implementation
- Core functionality before styling and optimization

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Within User Stories: Component creation tasks marked [P] can run in parallel
- User Story 4 can be developed in parallel with polishing tasks once core stories complete

---

## Parallel Example: User Story 1

```bash
# These can run simultaneously (different files):
T014 - Create homepage (app/page.tsx)
T015 - Style emotion cards (MUI theming)

# These must run after above complete:
T016 - Implement navigation (depends on page structure)
T017 - Create layout (depends on navigation)

# These can run in parallel after navigation ready:
T018 - Add session persistence
T019 - Implement responsive grid
```

---

## Implementation Strategy

### MVP Scope (Recommended First Release)
- **Complete**: User Stories 1, 2, and 3 (Core emotion exploration flow)
- **Exclude**: User Story 4 (Account conversion invitation)
- **Result**: Fully functional guest emotion exploration with validation and regulation

### Incremental Delivery
1. **Week 1**: Setup + Foundational + User Story 1 (Core emotion selection)
2. **Week 2**: User Story 2 (Secondary/tertiary navigation) 
3. **Week 3**: User Story 3 (Validation and regulation)
4. **Week 4**: User Story 4 + Polish (Account invitation + optimizations)

### Total Task Summary
- **Setup Tasks**: 5 tasks
- **Foundational Tasks**: 8 tasks  
- **User Story 1**: 6 tasks
- **User Story 2**: 7 tasks
- **User Story 3**: 7 tasks
- **User Story 4**: 5 tasks
- **Polish Tasks**: 8 tasks
- **Total**: 46 tasks

### Success Metrics Alignment
- **SC-001** (3-minute completion): Tasks T014-T033 deliver complete flow
- **SC-002** (95% navigation success): Tasks T016, T024, T031 ensure smooth transitions
- **SC-003** (2-second load time): Task T043 optimizes bundle size and loading
- **SC-004** (backward navigation): Tasks T024, T032 implement back functionality
- **SC-006** (cross-device compatibility): Tasks T019, T041 ensure responsive design