---
title: Cirrus
publishDate: 2025-12-01 00:00:00
featured: 2
icon: "@assets/icons/moon.png"
description: The lightest PDS in the Atmosphere
demo: https://getcirrus.dev
repo: ascorbic/cirrus
tags:
  - TypeScript
  - AT Protocol
  - Cloudflare Workers
---

A single-user [AT Protocol](https://atproto.com) Personal Data Server (PDS) that runs on a Cloudflare Worker.

Running a personal PDS provides independence from platform changes, network resilience through a diverse ecosystem of providers, data sovereignty on infrastructure under direct control, and portability between hosting providers without losing followers or identity.

The implementation uses Cloudflare Workers with Durable Objects and R2:

- **Worker** – Stateless edge handler for routing, authentication, and DID document serving
- **Durable Object** – Single-instance SQLite storage for the AT Protocol repository
- **R2** – Object storage for blobs (images, videos)

The result is a PDS that runs at the edge with no servers to manage, automatic scaling, and pay-per-use pricing.

Get started with `npm create pds`.
