export const prerender = true;

import { getAllPages } from "$sanity/client";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async() => ({
	pages: await getAllPages()
});
