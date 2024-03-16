import { PUBLIC_SANITY_PROJECT_ID } from "$env/static/public";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

const builder = imageUrlBuilder({
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: "production"
});

export default (source: SanityImageSource) => builder.image(source);
