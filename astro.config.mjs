import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://www.shelbywebco.com',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    react(),
    sitemap({
      filter: (page) =>
        page !== 'https://www.shelbywebco.com/api/contact' &&
        !page.includes('/api/'),
    }),
  ],
  output: 'static',
  adapter: vercel(),
  image: {
    domains: ['www.shelbywebco.com'],
  }
});
