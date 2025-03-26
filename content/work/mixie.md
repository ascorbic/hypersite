---
title: Mixie
publishDate: 2023-03-02 00:00:00
description: ChatGPT-powered cocktail chatbot
demo: https://mixie.netlify.app/
icon: "@assets/icons/mixer.png"
tags:
  - AI
  - Preact
  - Prompt engineering
---

I created Mixie because I wanted to investigate using the ChatGPT API to return
structured content. I also wanted to create a fun, conversational experience
that would be useful to people. I created a prompt that asked the API to return
its response as a JSON object, and then I used that JSON object to populate a
cocktail recipe. I included error handling where if the API returned invalid
JSON, that error would be sent back to the API.

The site is built with Preact, with the chat backend running in a Netlify Edge
Function.
