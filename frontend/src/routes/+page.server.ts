import type { PageServerLoad } from "./$types";
import { sanityClient } from "$lib/sanity";

export const load: PageServerLoad = async() => {
	const posts = await sanityClient.getAllPosts();
	return { posts };
};
