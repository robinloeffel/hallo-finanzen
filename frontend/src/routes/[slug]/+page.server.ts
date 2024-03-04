import { getPageBySlug } from "$graphql";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async({ params }) => ({
	page: await getPageBySlug(params.slug)
});
