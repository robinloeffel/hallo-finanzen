import type { PageServerLoad } from "./$types";
import { getPostBySlug } from "$graphql";

export const load: PageServerLoad = async({ params }) => ({
	post: await getPostBySlug(params.slug)
});
