import { getAllPosts } from "$sanity/client";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async() => ({
	posts: await getAllPosts()
});
