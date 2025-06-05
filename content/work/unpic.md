---
title: Unpic
publishDate: 2023-01-01 00:00:00
featured: 1
icon: "@assets/icons/crop.png"
image: https://images.unsplash.com/photo-1522303099041-44f71373af66
description: A toolkit for images on the web
demo: https://unpic.pics
repo: ascorbic/unpic-img
tags:
  - TypeScript
  - Images
  - Multi-framework
---

Unpic is a set of tools for working with images on the web:

- Ten framework-specific [image components](https://unpic.pics/img) for
  displaying high-performance, responsive images
- A [library](https://unpic.pics/lib) for manipulating image CDN URLs
- A library for [generating placeholder images](https://unpic.pics/placeholder)
- A Deno and Node module for [extracting raw pixels](https://unpic.pics/pixels)
  from images

The core of the project is unpic-img, which involved creating a core library for
generating the optimal `srcset`, `sizes` and styles for an image, and then
building framework-specific components on top of that. I was one of the creators
of the Gatsby image plugin several years ago, and for a long time I've wanted to
build a framework-agnostic equivalent. It was an interesting exercise working
with so many frameworks. For some of them I already had a good amount of
experience, but for others I had to learn the basics. I also had to learn how to
publish packages for each of them.
