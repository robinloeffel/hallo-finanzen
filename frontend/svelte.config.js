import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "svelte-define-config";

export default defineConfig({
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
});
