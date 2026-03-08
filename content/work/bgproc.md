---
title: bgproc
publishDate: 2026-01-29 00:00:00
icon: "@assets/icons/propellor.png"
description: Simple process manager for agents
repo: ascorbic/bgproc
tags:
  - TypeScript
  - CLI
  - AI Agents
---

A simple process manager designed to be agent-friendly. Manage background processes like dev servers from the command line with JSON output and easy status checking.

bgproc solves the problem of AI coding assistants needing to start, monitor, and stop long-running processes like dev servers. All commands output JSON to stdout, making it easy for agents to parse responses and check status.

Features include automatic port detection via `lsof`, duplicate prevention, log management with stdout/stderr capture, timeout support, and filtering by working directory.

Available as a skill for Claude Code, Cursor, Codex, and other AI coding tools.
