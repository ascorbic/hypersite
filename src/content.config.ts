import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

export const collections = {
  work: defineCollection({
    loader: glob({ base: "content/work", pattern: "[^_]*.md" }),
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        description: z.string(),
        featured: z.number().optional(),
        publishDate: z.coerce.date(),
        repo: z.string().optional(),
        demo: z.string().optional(),
        icon: image().optional(),
        image: z.string().optional(),
        tags: z.array(z.string()).optional(),
      }),
  }),
};
