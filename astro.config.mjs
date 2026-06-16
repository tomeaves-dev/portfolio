// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://tomeaves.dev',
  devToolbar: { enabled: false },
  integrations: [mdx(), icon()],
  markdown: {
    shikiConfig: {
      theme: 'dracula-soft'
    }
  }
});