import typography from "@tailwindcss/typography"; // En Astro suele usarse import

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [typography],
};
