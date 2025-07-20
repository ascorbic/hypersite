---
title: Astro Loaders
publishDate: 2024-07-20 00:00:00
description: A selection of content loaders for Astro
repo: ascorbic/astro-loaders
icon: "@assets/icons/sharing.png"
featured: 2
tags:
  - TypeScript
---

When implementing the new Astro content layer, I also built a selection of
loaders to both experiment with the API and provide some useful functionality.
They load data from various sources when an Astro site is built and make it
available to the site at build time.

The loaders are:

- @ascorbic/airtable-loader - Load data from Airtable
- @ascorbic/csv-loader - Load CSV files
- @ascorbic/feed-loader - Load RSS, RDF, and Atom feeds, including podcasts
- @ascorbic/mock-loader - Mock data for development
- @ascorbic/bluesky-loader - Load Bluesky posts
- @ascorbic/youtube-loader - Load YouTube videos
