import { PUBLIC_SANITY_PROJECT_ID } from "$env/static/public";
import { createClient } from "@sanity/client";
import type { Post } from "./types.generated";

const client = createClient({
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: "production",
	apiVersion: "2024-02-01",
	perspective: "published",
	useCdn: import.meta.env.DEV
});

const getAllPosts = async() => await client.fetch<Post[]>("*[_type == 'post']");
const getPostBySlug = async(slug: string) => await client.fetch<Post>("*[_type == 'post' && slug.current == $slug][0]", { slug });

export default {
	client,
	getAllPosts,
	getPostBySlug
};

export { client };
