import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://www.shelbywebco.com',
  redirects: {
    '/promotions/free-website-asheville-nc/': '/promotions/',
    '/booking/': '/contact/',
    '/services/google-optimization/': '/services/seo/',
    '/promos/referral-bonus/': '/promotions/referral-bonus/',
    '/blog/why-choose-studios-by-dave/': '/blog/why-choose-shelby-web-company/',
    '/web-design-asheville-nc/': '/web-design-western-nc/',
    '/promotions/local-business-launchpad/': '/promotions/the-golden-ticket/',
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
