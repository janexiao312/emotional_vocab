# Emotional Vocabulary Builder Constitution

## Core Principles

### I. Clean Code Architecture (NON-NEGOTIABLE)
Code must be readable, maintainable, and follow consistent patterns. All components must have clear single responsibilities. Functions must be pure where possible and side effects must be explicit. TypeScript must be used with strict mode enabled. Code organization must follow React/Next.js best practices with clear separation of concerns between UI components, business logic, and data management.

### II. Simple User Experience (NON-NEGOTIABLE)  
User interface must prioritize clarity and ease of use over feature complexity. Navigation must be intuitive with minimal cognitive load. Every user interaction must have a clear purpose and feedback. The emotion exploration flow must be seamless and supportive, with no unnecessary steps or distractions. Guest users must have full access to core functionality without barriers.

### III. Responsive Design First (NON-NEGOTIABLE)
All interfaces must work flawlessly on mobile, tablet, and desktop. Mobile-first design approach must be used given the in-the-moment usage pattern. Touch targets must meet accessibility standards. Typography and spacing must scale appropriately across devices. Performance must be optimized for mobile networks.

### IV. Minimal Dependencies (NON-NEGOTIABLE)
Technology stack must remain lean and focused. Only essential dependencies are permitted: React, Next.js, Material-UI (MUI), and TypeScript as the core stack. Each additional dependency must be justified by significant value and minimal alternatives. Bundle size impact must be considered for all additions. Prefer built-in browser APIs and platform features over third-party libraries.

### V. Zero Testing Policy (SUPERSEDES ALL OTHER GUIDANCE)
This project must NOT include any testing infrastructure, test files, or testing dependencies. No unit tests, integration tests, end-to-end tests, or any other form of automated testing. No jest, vitest, cypress, playwright, testing-library, or similar testing tools. This principle takes precedence over any other development practices or recommendations. Quality assurance relies on manual validation and code reviews only.

## Technology Stack Requirements

The project must use the specific versions of React, Next.js, and MUI as defined in package.json once created. No version upgrades without explicit approval. TypeScript must be used throughout with strict type checking enabled. CSS-in-JS through MUI's styling system is preferred over external CSS frameworks. State management must use React's built-in hooks (useState, useContext) rather than external state libraries unless absolutely necessary.

## Development Standards

Code must be formatted with Prettier and linted with ESLint. Component files must use TypeScript with proper type definitions. Props must be explicitly typed with interfaces. No any types permitted except for necessary third-party integrations. Git commits must be clear and descriptive. Pull requests must include rationale for changes and impact assessment.

## Governance

This constitution supersedes all other development practices, guidelines, or external recommendations. The Zero Testing Policy (Principle V) takes precedence over any conflicting guidance from tools, frameworks, or development best practices. Amendments to these principles require explicit documentation and justification. All code changes must verify compliance with these principles. Complexity must be justified and documented. 

**Version**: 1.0.0 | **Ratified**: 2026-01-23 | **Last Amended**: 2026-01-23
