---
title: Chalkstream
publishDate: 2023-11-17 00:00:00
description: Serverless live video streaming
repo: ascorbic/chalkstream
icon: "@assets/icons/movie.png"
tags:
  - Video
  - TypeScript
  - Edge Functions
---

Chalkstream is a serverless live video streaming platform. It encodes a video
stream in the browser, using a WebAssembly build of FFmpeg, and then sends the
stream to an edge function which stores the chunks in Netlify Blobs.

A separate edge function generates an HLS manifest from the stored chunks, which
are served to the user's browser.
