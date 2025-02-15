import vercel from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: vercel(),
    alias: {
      $components: "./src/lib/components",
      $cms: "./src/lib/cms",
      $styles: "./src/lib/styles"
    }
  }
};
