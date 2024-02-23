import { PUBLIC_GRAPHQL_API } from "$env/static/public";
import { Client, cacheExchange, fetchExchange } from "@urql/core";
import { getAllPostsQuery, getPostBySlugQuery } from "./queries";

const client = new Client({
	url: PUBLIC_GRAPHQL_API,
	exchanges: [ cacheExchange, fetchExchange ]
});

export const getAllPosts = async() => {
	const query = getAllPostsQuery();
	const { data } = await client.query(query, {});
	return data?.allPost ?? [];
};

export const getPostBySlug = async(slug: string) => {
	const query = getPostBySlugQuery(slug);
	const { data } = await client.query(query, {});
	return data?.allPost.at(0);
};