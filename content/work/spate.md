---
title: Spate
publishDate: 2026-10-31 00:00:00
icon: "@assets/icons/charts.png"
description: Britain's rivers, tides and storm overflows, live
demo: https://spate.mk.gg
tags:
  - TypeScript
  - Data visualisation
  - Cloudflare Workers
---

A live map of the UK's water. River flows are drawn as moving particles,
alongside tides and storm surge, and the storm overflows that discharge sewage
into rivers and the sea.

The design takes its cue from [nullschool](https://earth.nullschool.net)'s
wind maps, and the aim is for it to be both beautiful and useful. It runs on
Cloudflare Workers, with
the frontend as a plain Vite single-page app.
