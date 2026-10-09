// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://mundobox.blog/",
  output: "static",
  base: "/",
  build: {
    assets: "assets",
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    mdx(),
    sitemap({
      // Las páginas con noindex no deben estar en el sitemap
      filter: (page) => !page.includes("/legal"),
    }),
  ],
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
});
