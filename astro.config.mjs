// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:4321/",
  output: "static",

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [mdx(), sitemap()],
  adapter: cloudflare(),
  image: {
    // Esto le dice a Astro: "Optimiza tú las imágenes usando Sharp
    // durante el build, no le pidas nada a Cloudflare luego"
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
});
