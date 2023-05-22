import { defineConfig } from "astro/config";

// Integrations
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import vercel from "@astrojs/vercel/serverless";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://flash-jkinsight.vercel.app",
  output: "hybrid",
  experimental: {
    hybridOutput: true,
  },
  adapter: vercel(),
  integrations: [
    tailwind(),
    solidJs(),
    compress({
      path: "./.vercel/output/static",
    }),
    sitemap(),
    robotsTxt({
      sitemap: true,
    }),
  ],
});
