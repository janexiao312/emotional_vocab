<!--
Sync Impact Report:
Version: N/A → 1.0.0
Added sections: Core Principles (5 principles), Technology Constraints, Development Workflow, Governance
Modified principles: N/A (initial creation)
Templates requiring updates: ⚠ pending (no template files exist yet)
Follow-up TODOs: Create package.json with React, Next.js, and MUI versions
-->

# Emotional Vocabulary Builder Constitution

## Core Principles

### I. Clean Code Architecture (NON-NEGOTIABLE)
Code MUST be readable, maintainable, and self-documenting. Component functions serve single purposes with clear names. Extract complex logic into custom hooks or utility functions. Maintain consistent file structure and naming conventions across the project. No code comments explaining what code does - code should explain itself through clear variable/function names.

**Rationale**: Clean code reduces debugging time, enables faster feature development, and makes the codebase approachable for future developers. Self-documenting code eliminates maintenance overhead of outdated comments.

### II. Simple UX First (NON-NEGOTIABLE)
User experience MUST prioritize simplicity over feature complexity. Each screen serves one primary purpose. Navigation flows are intuitive with clear visual hierarchy. Minimize cognitive load through progressive disclosure. User actions have immediate, clear feedback. Mobile-first design ensures accessibility across all devices.

**Rationale**: The application serves users in emotionally vulnerable states. Complex interfaces increase stress and reduce the tool's therapeutic effectiveness. Simple UX builds trust and encourages regular use.

### III. Responsive Design Excellence
Design MUST work seamlessly across mobile, tablet, and desktop. Touch targets meet accessibility standards (44px minimum). Content reflows gracefully without horizontal scrolling. Typography scales appropriately across screen sizes. Interactive elements remain accessible via keyboard navigation.

**Rationale**: Users need emotional support at any time, on any device. Responsive design ensures the tool is always accessible when needed most.

### IV. Minimal Dependencies Strategy
Dependencies MUST be justified by significant value or critical functionality. Prefer native React/Next.js solutions over third-party libraries. Evaluate bundle size impact before adding new dependencies. Regular dependency audits to remove unused packages. Use Material-UI as the sole UI component library.

**Rationale**: Fewer dependencies reduce security vulnerabilities, simplify maintenance, and improve application performance. Each dependency adds potential points of failure.

### V. Zero Testing Requirement (SUPERSEDES ALL OTHER GUIDANCE)
NO testing frameworks, unit tests, integration tests, or end-to-end tests shall be implemented. This principle overrides any other development practices or recommendations. Development focuses on clean code, code reviews, and manual testing only.

**Rationale**: For this specific project, testing overhead outweighs benefits. Resources are better invested in user experience and clean implementation. Manual testing and code review provide sufficient quality assurance.

## Technology Constraints

**Core Stack Requirements**:
- React as specified in package.json (when created)
- Next.js as specified in package.json (when created) 
- Material-UI (MUI) as specified in package.json (when created)
- TypeScript for type safety
- No additional UI libraries beyond MUI

**Forbidden Technologies**:
- Any testing frameworks (Jest, Cypress, React Testing Library, etc.)
- CSS frameworks beyond MUI (no Tailwind, Bootstrap, etc.)
- State management libraries beyond React Context (no Redux, Zustand, etc.)
- Additional styling libraries (no styled-components, emotion beyond MUI's)

## Development Workflow

**Code Quality Gates**:
1. Manual testing on mobile and desktop
2. Code review focusing on readability and simplicity
3. Performance validation (bundle size, load time)
4. Accessibility validation using browser dev tools

**Implementation Order**:
1. Core emotion exploration flow (guest mode)
2. Validation and regulation display
3. User authentication and data persistence
4. Personal vocabulary collection
5. Pattern recognition features

**Review Requirements**:
- Every PR must demonstrate mobile responsiveness
- Components must follow Material-UI design system
- Code must be self-documenting without comments
- Bundle size impact must be documented for new dependencies

## Governance

This constitution supersedes all other development practices and guidance. Any deviation from these principles requires explicit justification and approval. The Zero Testing requirement cannot be overridden under any circumstances.

**Amendment Process**: Changes to this constitution require clear rationale and version increment following semantic versioning (MAJOR.MINOR.PATCH). Breaking changes to core principles require MAJOR version bump.

**Compliance Review**: All code changes must align with these principles. Complexity must be justified by user value. Simplicity wins over cleverness in all decisions.

**Version**: 1.0.0 | **Ratified**: 2026-01-21 | **Last Amended**: 2026-01-21