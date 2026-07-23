import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.shelbywebco.com',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react(), sitemap()],
  output: 'static',
  image: {
    domains: ['www.shelbywebco.com'],
  }
});
