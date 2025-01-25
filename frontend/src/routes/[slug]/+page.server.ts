import { getPageBySlug } from "$sanity/client";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => ({
	page: await getPageBySlug(params.slug)
});
