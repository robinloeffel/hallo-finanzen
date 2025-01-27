export const prerender = true;

import { getAllPages } from "$cms/client";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async () => ({
	pages: await getAllPages()
});
