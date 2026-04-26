---
title: EmDash
publishDate: 2026-04-01 00:00:00
featured: 1
icon: "@assets/icons/stack.png"
description: A full-stack TypeScript CMS, the spiritual successor to WordPress
demo: https://emdashcms.com
repo: emdash-cms/emdash
tags:
  - TypeScript
  - Astro
  - Cloudflare Workers
---

EmDash is a full-stack TypeScript CMS, designed as the spiritual successor to WordPress, and built to be managed by agents as easily as by humans. It takes the ideas that made WordPress dominant – extensibility, a real admin UI, a plugin ecosystem – and rebuilds them on serverless foundations.

The vast majority of WordPress security incidents come from plugins, which run with unrestricted access to the database and filesystem. EmDash plugins instead run in sandboxed isolates with declared capability manifests, so a compromised plugin can't reach beyond what it has explicitly asked for. Content is stored as structured data rather than HTML, which means AI agents and other tools can read and write it directly without parsing markup.
