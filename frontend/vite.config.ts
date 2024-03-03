import { sveltekit } from "@sveltejs/kit/vite";
import browserslist from "browserslist-to-esbuild";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		sveltekit()
	],
	build: {
		target: browserslist()
	}
});
