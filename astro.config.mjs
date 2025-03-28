// @ts-check
import { defineConfig } from "astro/config";
import { FontaineTransform } from "fontaine";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
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
    // plugins: [
    //   FontaineTransform.vite({
    //     fallbacks: [
    //       "BlinkMacSystemFont",
    //       "Segoe UI",
    //       "Roboto",
    //       "Helvetica Neue",
    //       "Arial",
    //     ],
    //     resolvePath: (id) => new URL(`./public${id}`, import.meta.url),
    //   }),
    // ],
  },

  experimental: {
    fonts: {
      families: [
        {
          name: "Geneva12",
          provider: "local",
          src: [
            {
              paths: ["./src/assets/fonts/bitgeneva12.woff2"],
            },
          ],
          // fallbacks: ["sans-serif"],
        },
        {
          name: "Geneva91",
          provider: "local",
          src: [{ paths: ["./src/assets/fonts/geneva-9-1.woff2"] }],
          // fallbacks: ["sans-serif"],
        },
        {
          name: "Chicago",
          provider: "local",
          src: [{ paths: ["./src/assets/fonts/sysfont.woff2"] }],
          // fallbacks: ["sans-serif"],
        },
      ],
    },
  },

  adapter: netlify(),
});
