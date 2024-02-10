import type { PageServerLoad } from "./$types";
import { sanityClient } from "$lib/sanity";

export const load: PageServerLoad = async({ params }) => {
	const post = await sanityClient.getPostBySlug(params.slug);
	return { post };
};
