---
title: Font Institute
publishDate: 2023-03-02 00:00:00
img: https://res.cloudinary.com/dirlxi6fc/image/upload/v1679225247/og_gklbmz.png
img_alt: Iridescent ripples of a bright blue and pink liquid
description: AI-powered font recommendations
demo: https://font.institute
repo: ascorbic/font-institute
icon: "@assets/icons/applescript.png"
tags:
  - AI
  - Prompt engineering
  - Typography
---

My second ChatGPT project was Font Institute, which was based on my love of
typography. It is a vanilla HTML and JavaScript site, with the chat backend
running in a Netlify Edge Function. It asks the API to return the font and
message in a JSON object, and if it recommends a font then it dynamically loads
the font from the Google Font API, and uses it to render the sample text.
