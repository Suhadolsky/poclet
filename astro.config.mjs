// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://thepocketcore.com',
	integrations: [mdx(), sitemap()],
	image: {
		domains: ['upload.wikimedia.org', 'i.redd.it', 'preview.redd.it', 'github.com', 'raw.githubusercontent.com'],
	},
});
