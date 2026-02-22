import { defineCollection, z } from 'astro:content';
// import { files } from 'astro/loaders'; // Not needed for default collection loading

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	// loader: files({ base: './src/content/blog' }), // Astro automatically finds files in collections
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
		}),
});

const devices = defineCollection({
	// loader: files({ base: './src/content/devices' }), // Astro automatically finds files in collections
	schema: ({ image }) =>
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
			heroImage: image().optional(),
		}),
});

export const collections = { blog, devices };
