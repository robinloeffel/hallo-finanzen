import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import browserslist from "browserslist-to-esbuild";

export default defineConfig({
	plugins: [
		sveltekit()
	],
	build: {
		target: browserslist()
	}
});
