# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `pnpm dev` - Start the development server
- `pnpm build` - Build the site for production
- `pnpm preview` - Preview the production build locally

## Project Architecture

This is a **HyperCard-inspired personal website** built with Astro v5 and deployed to Netlify. The site recreates the aesthetic and interaction patterns of Apple's 1990s HyperCard application.

### Key Architecture Elements

- **Zero client-side JavaScript** - Built entirely with Astro components and server-side rendering
- **Content Collections**: Work portfolio items stored in `content/work/` with structured metadata (title, description, publishDate, repo, demo, icon, etc.)
- **Custom aliases**: `@components` maps to `/src/components` and `@assets` maps to `/src/assets`
- **Font optimization**: Uses Fontaine plugin for custom font loading with fallbacks
- **OG Image generation**: Netlify Edge Function at `/netlify/edge-functions/og.tsx` creates dynamic social media previews

### Visual Design System

- **Period-accurate fonts**: Custom web fonts recreating Chicago (Sysfont) and Geneva typefaces from classic Mac OS
- **HyperCard UI elements**: Window frames, striped title bars, pixel-perfect icons from Susan Kare's original HyperCard graphics
- **Easter egg**: Hot corner in bottom-left activates flying toasters screensaver (CSS-only animation)

### Content Structure

- Pages follow HyperCard "stack" metaphor with "Home", "About", "Projects" cards
- Work items automatically filtered (files starting with `_` are excluded via glob pattern `[^_]*.md`)
- Icon grid navigation mimics classic Mac desktop with custom pixel art icons

### Deployment

- Configured for Netlify with edge functions for OG image generation
- Uses `overscroll-behavior: none` to prevent iOS bounce scrolling that breaks the retro aesthetic and causes visual glitches