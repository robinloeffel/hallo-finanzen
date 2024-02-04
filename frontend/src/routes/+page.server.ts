import { sanityClient } from "$lib";

export const load = async() => {
	const posts = await sanityClient.getAllPosts();
	return { posts };
};
