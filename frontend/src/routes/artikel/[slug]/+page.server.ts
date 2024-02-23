import type { PageServerLoad } from "./$types";
import { getPostBySlug } from "$lib/graphql";

export const load: PageServerLoad = async({ params }) => ({
	post: await getPostBySlug(params.slug)
});
