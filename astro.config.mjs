import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://shelbywebco.com',
  integrations: [tailwind(), react(), sitemap()],
  output: 'static',
  redirects: {
    '/blog/why-choose-studios-by-dave': '/blog/why-choose-shelby-web-company',
    '/why-choose-us': '/blog/why-choose-shelby-web-company',
    '/studios': '/about',
    '/services/web-development': '/services/web-design',
    '/services/logo-design': '/services/branding',
    '/case-studies': '/services/case-studies',
  }
});
