import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "./client";

export default (source: SanityImageSource) => imageUrlBuilder(client).image(source);
