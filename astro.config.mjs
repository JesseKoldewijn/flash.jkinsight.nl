import { defineConfig } from "astro/config";

// Integrations
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  experimental: {
    hybridOutput: true
  },
  adapter: vercel(),
  integrations: [tailwind(), solidJs()],
});
