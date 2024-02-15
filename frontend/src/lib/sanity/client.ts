import { PUBLIC_SANITY_PROJECT_ID } from "$env/static/public";
import { createClient } from "@sanity/client";

const client = createClient({
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: "production",
	apiVersion: "2024-02-01",
	perspective: "published",
	useCdn: import.meta.env.PROD
});

const getAllPosts = async() => await client.fetch<Sanity.HalloFinanzen.Schema.Post[]>("*[_type == 'post']");
const getPostBySlug = async(slug: string) => await client.fetch<Sanity.HalloFinanzen.Schema.Post>("*[_type == 'post' && slug.current == $slug][0]", { slug });

export default {
	getAllPosts,
	getPostBySlug
};

export { client };
