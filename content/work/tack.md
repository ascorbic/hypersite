---
title: Tack
publishDate: 2026-10-31 00:00:00
icon: "@assets/icons/diary.png"
description: A self-hosted, git-native whiteboard for collaborative planning
demo: https://tack.social
repo: ascorbic/tack
tags:
  - TypeScript
  - React
  - Cloudflare Workers
  - GitHub
---

A shared whiteboard for planning open source work, where GitHub is the source
of truth. Paste an issue or pull request link and it becomes a card that stays
live via webhooks, then move, group and sort it freely alongside stickies
without touching anything on GitHub until you're ready.

When you are, the changes are staged: stickies become issues, labels and links
get applied, and decisions are written back as ADR pull requests or Discussion
posts – all reviewed and pushed as one batch. It's built for async teams too,
with "since you were here" summaries, history replay and open voting windows.

You sign in with GitHub, and your repo permissions decide what you can do. It
runs as a single Cloudflare Worker with a GitHub App you own, with the canvas
built on React Flow and sync on Yjs. You can
[try it in your browser](https://tack.social/try/) without deploying anything.
