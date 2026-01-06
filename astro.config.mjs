// @ts-check
import { defineConfig } from "astro/config";
import { FontaineTransform } from "fontaine";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  vite: {
    resolve: {
      alias: {
        "@components": "/src/components",
        "@assets": "/src/assets",
      },
    },
    build: {
      assetsInlineLimit: 20048,
    },

    plugins: [
      FontaineTransform.vite({
        fallbacks: [
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
        ],
        resolvePath: (id) => new URL(`./public${id}`, import.meta.url),
      }),
    ],
  },

  adapter: netlify(),

  experimental: {
    csp: true,
    contentIntellisense: true,
  },
});
