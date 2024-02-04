import { sanityClient } from "$lib";

export const load = async({ params }) => {
	const post = await sanityClient.getPostBySlug(params.slug);
	return { post };
};
