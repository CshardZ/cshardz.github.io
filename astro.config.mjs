// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://cshardz.github.io',
  // base: 'my-repo', Don't need base for username.github.io
  vite: {
    plugins: [tailwindcss()],
  },
});