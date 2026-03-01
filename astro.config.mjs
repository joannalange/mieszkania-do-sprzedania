import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://mieszkania-do-sprzedania.com', 
  base: '/',
  integrations: [tailwind()],
  output: 'static',
});
