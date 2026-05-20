// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Codex EHS — Astro static build for Cloudflare Pages.
// L'URL canonique est utilisee pour sitemap, robots et OG. La modifier ici
// suffit a propager partout (jamais hardcoder ailleurs dans le code).

export default defineConfig({
  site: 'https://codexehs.com',
  trailingSlash: 'never',
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
    assets: '_astro'
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover'
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      customPages: [
        'https://codexehs.com/',
        'https://codexehs.com/catalogue',
        'https://codexehs.com/produits/plan-action-ehs',
        'https://codexehs.com/a-propos'
      ],
      filter: (page) => !page.includes('/merci') && !page.includes('/404')
    })
  ],
  vite: {
    build: {
      cssMinify: 'lightningcss'
    }
  }
});
