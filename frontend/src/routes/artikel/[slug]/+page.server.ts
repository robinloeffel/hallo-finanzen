import { getPostBySlug } from "$sanity/client";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => ({
	post: await getPostBySlug(params.slug)
});
