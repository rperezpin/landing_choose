// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
const NOINDEX_PATHS = [
  '/aviso-legal/',
  '/politica-de-privacidad/',
  '/politica-de-cookies/',
];

export default defineConfig({
  site: 'https://easychoose.es',
  integrations: [
    sitemap({
      filter: (page) => !NOINDEX_PATHS.some((path) => page.endsWith(path)),
    }),
  ],
  trailingSlash: 'always',
});
