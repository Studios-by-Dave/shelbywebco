import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://www.shelbywebco.com',
  redirects: {
    '/promotions/free-website-asheville-nc/': '/promotions/',
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react(), sitemap()],
  output: 'static',
  adapter: vercel(),
  image: {
    domains: ['www.shelbywebco.com'],
  }
});
