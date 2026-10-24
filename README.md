# Shopkart — Storybook Example

A small e-commerce component library built with **Next.js**, **React**, and **Storybook**, used to practice building and documenting UI components in isolation.

## Components

| Component     | Description                                                                 |
| ------------- | --------------------------------------------------------------------------- |
| `Button`      | Primary / secondary / danger variants, three sizes, disabled and loading states |
| `Badge`       | Small status label with success, warning, error, and neutral tones          |
| `ProductCard` | Product image, title, INR price, rating, stock badge, and Add to Cart button |
| `Header`      | Store name and live cart count (reads from `CartContext`)                   |

Each component lives in `src/components/<Name>/` with its own CSS module and a `*.stories.tsx` file.

## Tech stack

- Next.js 16 / React 19
- Storybook 10 (`@storybook/nextjs-vite`) with Docs, A11y, and Vitest addons
- CSS Modules
- TypeScript

## Getting started

```bash
npm install
npm run storybook
```

Storybook opens at [http://localhost:6006](http://localhost:6006).

To run the Next.js app instead:

```bash
npm run dev
```

## Scripts

| Command                   | What it does                         |
| ------------------------- | ------------------------------------ |
| `npm run storybook`       | Start Storybook on port 6006         |
| `npm run build-storybook` | Build a static Storybook to `storybook-static/` |
| `npm run dev`             | Start the Next.js dev server         |
| `npm run build`           | Production build of the Next.js app  |
| `npm run lint`            | Run ESLint                           |
