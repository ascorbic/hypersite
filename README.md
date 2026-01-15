# Hypersite

A HyperCard-inspired personal website built with Astro v5, recreating the aesthetic and interaction patterns of Apple's 1990s HyperCard application. The site is deployed to Netlify and features zero client-side JavaScript.

## Purpose

This site recreates the experience of HyperCard, a pre-web hypermedia application that came with early Macintosh computers. HyperCard allowed users to build "stacks" (similar to local-only websites) with "cards" that could be linked together and scripted elements. This was the first environment where I learned to build useful applications (around 1991), making the early web feel familiar when I first encountered it a few years later.

## Technologies Used

### Core Framework
- **Astro v5.11.0** - Modern static site generator with zero client-side JavaScript by default
- **TypeScript** - Type-safe development
- **pnpm** - Package manager (v9.14.4)

### Deployment & Hosting
- **Netlify** - Deployment platform via `@astrojs/netlify` adapter
- **Netlify Edge Functions** - Dynamic OG image generation at the edge

### Image & Asset Processing
- **Sharp** - High-performance image processing
- **Fontaine** - Custom font optimization with automatic fallback generation

### Content Management
- **Astro Content Collections** - Type-safe content management with glob-based loading
- **Markdown** - Content authoring format for portfolio items

## Key Features

### Technical Implementation
- **Zero client-side JavaScript** - Built entirely with Astro components and server-side rendering
- **Content Collections** - Work portfolio items stored in `content/work/` with structured schema
- **Custom path aliases** - `@components` maps to `/src/components` and `@assets` maps to `/src/assets`
- **Font optimization** - Fontaine plugin enables custom font loading with automatic fallback generation
- **Dynamic OG images** - Netlify Edge Function at `/netlify/edge-functions/og.tsx` creates dynamic social media previews

### Visual Design System
- **Period-accurate fonts** - Custom web fonts recreating classic Mac OS typefaces:
  - Sysfont (Chicago recreation by Alina Sava)
  - Geneva 9.1 (by Kelsey Higham)
  - BitGeneva 12
- **HyperCard UI elements** - Window frames with striped title bars, pixel-perfect icons from Susan Kare's original HyperCard graphics
- **Mac desktop metaphor** - Icon grid navigation mimics classic Macintosh desktop
- **Easter egg** - Hot corner in bottom-left activates flying toasters screensaver (CSS-only animation)

### Content Structure
- Pages follow HyperCard "stack" metaphor with "Home", "About", "Projects" cards
- Work portfolio with 24+ projects automatically generated from content collection
- Projects include: am-i-vibing, astro-docs-mcp, bluesky-tools, chalkstream, cirrus, daneel, departures-live, ephemeris-fyi, font-institute, graphql-explorer, impala, live-trains-wear-app, mixie, mux-player-astro, process-ancestry, react-artboard, solar-picker, turbofan, unpic, usephp, vela-one
- Files starting with `_` in content/work/ are excluded from the collection

## Project Structure

```
hypersite/
├── src/
│   ├── components/       # Astro components (Window, Button, Home, etc.)
│   ├── layouts/          # Page layout templates
│   ├── pages/            # Route pages (index, about, projects, etc.)
│   ├── assets/           # Fonts, icons, images, CSS
│   ├── content.config.ts # Content collection schema
│   └── lib.ts            # Utility functions
├── content/work/         # Portfolio items as markdown files
├── public/               # Static assets (fonts, images, icons)
├── netlify/
│   └── edge-functions/
│       └── og.tsx        # Dynamic OG image generation
├── astro.config.mjs      # Astro configuration
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
└── README.md             # This file
```

## Development Commands

- `pnpm dev` - Start the development server
- `pnpm build` - Build the site for production
- `pnpm preview` - Preview the production build locally

## Credits and Inspiration

- **Inspiration**: [Wes95](https://wes.dev/) by Wes Souza
- **Design inspiration**: [HyperCard Simulator](https://hcsimulator.com/)
- **Chicago font**: [Sysfont](https://fontsarena.com/sysfont-by-alina-sava/) by Alina Sava
- **Geneva font**: [Geneva 9.1](https://fontstruct.com/fontstructions/show/1304775/geneva-9) by Kelsey Higham
- **Icons**: Original HyperCard graphics by Susan Kare, extracted from [HyperCard Graphics pack](https://egardepe.itch.io/hypercardgraphics)
- **Reference**: [Infinite Mac](https://system6.app/) - run old versions of Mac OS in your browser
