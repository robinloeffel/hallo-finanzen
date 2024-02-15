import { merge } from "ts-deepmerge";
import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "svelte-define-config";

export default defineConfig({
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		typescript: {
			config: tsConfig => merge(tsConfig, {
				include: [
					"../sanity-codegen.config.ts"
				]
			})
		}
	}
});
