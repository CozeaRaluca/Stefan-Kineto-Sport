import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://stefan-kinetosport.ro",
  integrations: [tailwind({ nesting: true }), sitemap(), partytown({
    config: {
      forward: ["dataLayer.push"]
    }
  }), mdx()],
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  })
});