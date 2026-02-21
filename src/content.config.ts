import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.string().optional(),
		}),
});

const devices = defineCollection({
	loader: glob({ base: './src/content/devices', pattern: '**/*.{md,mdx}' }),
	schema: () =>
		z.object({
			name: z.string(),
			manufacturer: z.string(),
			releaseDate: z.string().optional(),
			price: z.string().optional(),
			chipset: z.string().optional(),
			screen: z.string().optional(),
			battery: z.string().optional(),
			os: z.string().optional(),
			rating: z.number().min(1).max(10).optional(),
			pros: z.array(z.string()).optional(),
			cons: z.array(z.string()).optional(),
			heroImage: z.string().optional(),
		}),
});

export const collections = { blog, devices };
