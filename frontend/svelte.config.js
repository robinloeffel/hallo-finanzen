import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
export default {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias: {
			$styles: "./src/lib/styles",
			$sanity: "./src/lib/sanity",
			$components: "./src/lib/components",
			$graphql: "./src/lib/graphql"
		}
	}
};
