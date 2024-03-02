import type { PageServerLoad } from "./$types";
import { getAllPosts } from "$graphql";

export const load: PageServerLoad = async() => ({
	posts: await getAllPosts()
});
