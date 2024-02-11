import { merge } from "ts-deepmerge";
import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
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
};

export default config;
