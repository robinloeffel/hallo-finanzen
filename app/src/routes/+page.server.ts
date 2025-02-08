import { getAllPosts } from "$cms/client";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => ({
  posts: await getAllPosts()
});
