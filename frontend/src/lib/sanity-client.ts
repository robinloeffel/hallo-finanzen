import { env } from "$env/dynamic/private";
import { createClient } from "@sanity/client";
import type { Post } from "./sanity-types.generated";

const development = env.NODE_ENV === "development";

const client = createClient({
	projectId: env.SANITY_PROJECT_ID,
	dataset: "production",
	apiVersion: "2024-02-01",
	perspective: "published",
	useCdn: !development
});

const getAllPosts = async() => await client.fetch<Post[]>("*[_type == \"post\"]");
const getPostBySlug = async(slug: string) => await client.fetch<Post>("*[_type == \"post\" && slug.current == $slug][0]", { slug });

export default {
	getAllPosts,
	getPostBySlug
};
