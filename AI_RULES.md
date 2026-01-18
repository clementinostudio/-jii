# AI Editor Rules for the Felipe Clementino Portfolio

This document outlines the technical stack and specific rules for code modifications to ensure consistency, maintainability, and adherence to the project's high-performance standards.

## 1. Tech Stack Summary

1.  **Core Framework:** React (v19) with TypeScript for robust, type-safe development.
2.  **Styling:** Tailwind CSS is used exclusively for a utility-first approach to design.
3.  **Animations:** Framer Motion is mandatory for all complex, scroll-linked, or interactive animations.
4.  **Icons:** Lucide React is the designated icon library.
5.  **UI Components:** Prioritize using components from the available Shadcn/ui library for standard elements (e.g., Button, Card, Dialog).
6.  **Build Tool:** Vite is used for development and bundling.
7.  **Structure:** The application follows a single-page structure, relying on anchor links (`#projects`, `#about`) and smooth scrolling implemented in custom handlers (e.g., in `Navbar.tsx`).
8.  **Utilities:** Class name merging must be handled using the `cn` utility function (`lib/utils.ts`).

## 2. Library Usage Rules

| Purpose | Library/Tool | Rule |
| :--- | :--- | :--- |
| **Styling** | Tailwind CSS | Use utility classes exclusively. Avoid custom CSS files or inline styles unless absolutely necessary for dynamic values. |
| **Animations** | Framer Motion | Must be used for all non-trivial visual effects, including scroll transformations (`useScroll`, `useTransform`) and entrance/exit transitions (`motion.div`, `AnimatePresence`). |
| **Icons** | Lucide React | Use this package for all visual icons. |
| **Standard UI** | Shadcn/ui | When implementing common UI patterns (forms, buttons, cards, etc.), check if a suitable Shadcn component exists and use it. |
| **Class Merging** | `cn` utility | Always use the `cn` function imported from `lib/utils.ts` when conditionally applying or merging Tailwind classes. |
| **Routing** | Anchor Links | Maintain the current single-page structure using anchor links (`href="#section"`) and custom scroll handlers for navigation. Do not introduce React Router unless explicitly requested for multi-page functionality. |
| **Component Structure** | N/A | Create a new, dedicated file for every new component or hook. Keep components small and focused. |