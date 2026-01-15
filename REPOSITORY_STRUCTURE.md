# Hypersite Repository Contents

## Overview
A HyperCard-inspired personal website built with Astro v5, recreating the aesthetic and interaction patterns of Apple's 1990s HyperCard application. The site is deployed to Netlify and features zero client-side JavaScript.

## Project Structure

### Root Configuration
- `astro.config.mjs` - Astro configuration with Netlify adapter
- `package.json` - Dependencies and scripts (dev, build, preview)
- `tsconfig.json` - TypeScript configuration
- `.prettierrc` / `.prettierignore` - Code formatting rules
- `CLAUDE.md` - Development guidelines for AI assistants
- `README.md` - Project description and credits

### Source Code (`src/`)

#### Configuration
- `content.config.ts` - Content collection schema for work portfolio items
- `lib.ts` - Utility functions and shared code

#### Components (`src/components/`)
- `Window.astro` - HyperCard-style window frame component with striped title bar
- `Button.astro` - Retro-style button component
- `Home.astro` - Home page icon/button
- `Back.astro` - Back navigation button
- `Nav.astro` - Navigation component
- `IconGrid.astro` - Grid layout for icons (mimics Mac desktop)
- `PixelImg.astro` - Pixel-perfect image component
- `Toasters.astro` - Flying toasters Easter egg (CSS-only animation)
- `OG.astro` - OpenGraph image component for social media

#### Layouts (`src/layouts/`)
- Base layout components for page structure

#### Pages (`src/pages/`)
- `index.astro` - Homepage (desktop-like interface)
- `about.astro` - About card/page
- `hypersite.astro` - Hypersite description page
- `desktop.astro` - Desktop page
- `afterdark.astro` - After Dark screensaver reference
- `projects/` - Dynamic project pages generated from content collection

#### Assets (`src/assets/`)
- `icons/` - Custom icon assets

### Content (`content/work/`)
Markdown files for portfolio/work items with structured metadata:
- Each file includes: title, description, publishDate, optional repo/demo URLs, icon, tags
- 24+ project entries including: am-i-vibing, astro-docs-mcp, bluesky-tools, chalkstream, cirrus, daneel, departures-live, ephemeris-fyi, font-institute, graphql-explorer, impala, live-trains-wear-app, mixie, mux-player-astro, process-ancestry, react-artboard, solar-picker, turbofan, unpic, usephp, vela-one
- Files starting with `_` are excluded from the collection

### Static Assets (`public/`)
- `fonts/` - Custom web fonts (Chicago/Sysfont and Geneva recreations)
- `icons/` - HyperCard pixel art icons from Susan Kare
- `images/` - Additional images
- `favicon.svg` - Site favicon
- `og-image.png` - Static OG image fallback
- `toast.webp` / `toaster.webp` - Toaster graphics for Easter egg

### Netlify Functions (`netlify/edge-functions/`)
- `og.tsx` - Edge function for dynamic OG image generation using React

## Key Features

### Technical Implementation
- **Zero client-side JavaScript**: Built entirely with Astro components and SSR
- **Content Collections**: Work portfolio items stored in `content/work/` with structured schema
- **Custom aliases**: `@components` → `/src/components`, `@assets` → `/src/assets`
- **Font optimization**: Fontaine plugin for custom font loading with fallbacks
- **OG Image generation**: Netlify Edge Function creates dynamic social media previews

### Visual Design
- **Period-accurate fonts**: Sysfont (Chicago) and Geneva 9.1 recreations
- **HyperCard UI**: Window frames, striped title bars, pixel-perfect icons
- **Mac desktop metaphor**: Icon grid navigation
- **Easter egg**: Flying toasters screensaver (CSS-only, activated by bottom-left corner)

## Development
- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build locally

## Credits and Inspiration
- Inspired by Wes Souza's [Wes95](https://wes.dev/) site
- Design inspiration from [HyperCard Simulator](https://hcsimulator.com/)
- "Chicago" font: [Sysfont](https://fontsarena.com/sysfont-by-alina-sava/) by Alina Sava
- "Geneva" font: [Geneva 9.1](https://fontstruct.com/fontstructions/show/1304775/geneva-9) by Kelsey Higham
- Icons: Original HyperCard graphics by Susan Kare via [HyperCard Graphics pack](https://egardepe.itch.io/hypercardgraphics)
- Reference: [Infinite Mac](https://system6.app/) for System 6 and HyperCard behavior
