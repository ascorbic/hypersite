---
title: Cumulus
publishDate: 2026-08-22 00:00:00
icon: "@assets/icons/camera.png"
description: An ATProto blob proxy that lives entirely in Cloudflare's cache
repo: ascorbic/cumulus
tags:
  - TypeScript
  - AT Protocol
  - Cloudflare Workers
---

An [AT Protocol](https://atproto.com) blob proxy – the thing that serves
images for Bluesky-style apps – built as a single Cloudflare Worker with no
storage of its own. Cloudflare's new Workers Cache is the only place a blob
ever lives: a cache hit never runs the Worker at all, and a miss fetches the
blob from the user's PDS, verifies every byte against its CID, sniffs the
real content type and stores the result.

The interesting part is moderation. Rather than running its own takedown
service, Cumulus subscribes to ATProto labelers – by default Bluesky's own
moderation service – and turns `!takedown` labels into cache purges. A
takedown anywhere on the network is enforced at the edge within a few
minutes, with no operator involvement and nothing stored but a stream
cursor.

It also does Bluesky-compatible image presets via Cloudflare Images, and has
a scoped mode that turns it into a private image CDN for a single app,
serving only blobs that a record in your own collections actually references.

It's a companion to [Cirrus](/projects/cirrus), and I run an experimental
instance at `cdn.cirrus.earth` – though you should really deploy your own,
which takes a few minutes on the free plan.
