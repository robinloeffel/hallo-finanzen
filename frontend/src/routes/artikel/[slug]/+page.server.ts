import { getPostBySlug } from "$graphql";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async({ params }) => ({
	post: await getPostBySlug(params.slug)
});
