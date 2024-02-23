import type { PageServerLoad } from "./$types";
import { getAllPosts } from "$lib/graphql";

export const load: PageServerLoad = async() => ({
	posts: await getAllPosts()
});
