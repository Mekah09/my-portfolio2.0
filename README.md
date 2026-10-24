# Mekah — developer portfolio

An editorial portfolio built with React 19, Tailwind CSS 4, and Vite. It features original SVG artwork, locally hosted fonts, gently animated illustrations, responsive navigation, project filters, accessible case-study dialogs, and contact-link copying. No animation library, image service, or backend is required.

## Run locally

Use Node.js 22.12+ (validated on Node.js 24) and npm.

```sh
npm ci
npm run dev
```

For a cloud development server:

```sh
npm run dev -- --host 0.0.0.0 --port 5173 --strictPort
```

```sh
npm run build    # Production output in dist/
npm run preview  # Inspect the production build
npm run lint    # ESLint
```

## Make it yours

- **`src/data/portfolio.js`**: your name, email, GitHub URL, projects, descriptions, and skills. An empty email uses GitHub as the contact destination; adding an email enables `mailto:` links and email copying. There is no message submission service.
- **`src/App.jsx`**: introduction, about copy, section headings, and wordmark.
- **`src/components/ProjectVisuals.jsx`**: the original Orbit and Forma project mockups. Replace these with your own screenshots/components when adding real projects.
- **`src/components/HeroScene.jsx`**: the illustrated hero and code snippet.
- **`src/index.css`**: Tailwind theme colors, font declarations, and animation keyframes.
- **`index.html` and `public/favicon.svg`**: page title, search description, and favicon.

Orbit and Forma are explicitly labeled illustrative concepts, not shipped products or client work. Their technology choices describe proposed builds. Replace them and their concept labels with real case studies before presenting them as completed work. Toolkit entries are editable examples; keep the technologies that match your experience.

All layout and component styling uses Tailwind utilities. Small global styles define fonts, theme tokens, focus states, and motion. Animated elements respect reduced-motion preferences. Native dialogs support Escape, focus containment, and focus restoration.

The self-hosted DM Sans and Instrument Serif fonts include their SIL Open Font Licenses in `public/fonts/`.

## Deployment

Deploy `dist/` to a static host after `npm run build`. No runtime secrets or server environment variables are required. Continue working on the `master` branch.
