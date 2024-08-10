import { defineCollection, reference, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // published: z.coerce.date(),
    // author: z.string(),
    // author_category: z
    //   .enum(["organizers", "guest-writers"])
    //   .optional()
    //   .default("organizers"),
    // tags: z.array(reference("tags")).default(["general"]),
  }),
});

export const collections = {
  blog,
};