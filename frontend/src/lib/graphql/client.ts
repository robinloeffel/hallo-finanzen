import { PUBLIC_GRAPHQL_API } from "$env/static/public";
import { Client, cacheExchange, fetchExchange } from "@urql/core";
import {
	getAllPagesQuery,
	getAllPostsQuery,
	getPageBySlugQuery,
	getPostBySlugQuery
} from "./queries";

const client = new Client({
	url: PUBLIC_GRAPHQL_API,
	exchanges: [ cacheExchange, fetchExchange ]
});

export const getAllPosts = async() => {
	const query = getAllPostsQuery();
	const { data } = await client.query(query, {});
	return data?.allPost ?? [];
};

export type AllPosts = Awaited<ReturnType<typeof getAllPosts>>;

export const getPostBySlug = async(slug: string) => {
	const query = getPostBySlugQuery(slug);
	const { data } = await client.query(query, {});
	return data?.allPost.at(0);
};

export type PostBySlug = Awaited<ReturnType<typeof getPostBySlug>>;

export const getAllPages = async() => {
	const query = getAllPagesQuery();
	const { data } = await client.query(query, {});
	return data?.allPage ?? [];
};

export type AllPages = Awaited<ReturnType<typeof getAllPages>>;

export const getPageBySlug = async(slug: string) => {
	const query = getPageBySlugQuery(slug);
	const { data } = await client.query(query, {});
	return data?.allPage.at(0);
};

export type PageBySlug = Awaited<ReturnType<typeof getPageBySlug>>;
