---
title: Cirrus
publishDate: 2026-01-01 00:00:00
icon: "@assets/icons/phone.png"
featured: 2
description: A very easy, single-user Bluesky/ATProto Personal Data Server
repo: ascorbic/cirrus
tags:
  - TypeScript
  - AT Protocol
  - Cloudflare Workers
---

A single-user [AT Protocol](https://atproto.com) (ATProto) Personal Data Server (PDS) that runs on a Cloudflare Worker.

ATProto is the protocol underlying Bluesky, and a PDS holds a user's posts, data and social graph. The protocol allows users to use alternative PDS implementations while still interacting with the wider network.

Cirrus is the first PDS software that is designed to host a single user's account in the easiest possible way. The implementation uses Cloudflare Workers with Durable Objects and R2.

It includes a CLI tool for easy setup and migration from other PDSs – a process that is usually complicated and prone to error. Cirrus is designed to be as lightweight as possible, with a minimal feature set focused on core AT Protocol functionality.
