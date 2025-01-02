---
title: cdn-cache-control
publishDate: 2024-06-06 00:00:00
description: Easy, opinionated CDN cache header handling.
repo: ascorbic/cdn-cache-control
icon: "@assets/icons/disk.png"
tags:
  - TypeScript
---

Modern CDNs allow very fine-grained control over the cache. This is particularly
useful for server-side rendering of web content, as it allows you to manually
handle the invalidation of content, ensuring it stays fast and fresh. This
package provides a subclass of the `Headers` class that makes it easier to set
cache control headers for content served through a modern CDN. It provides a
simple, chainable API with sensible defaults for common use cases
