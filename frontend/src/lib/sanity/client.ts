import { dev } from "$app/environment";
import { createClient } from "@sanity/client";
import {
	getAllPagesQuery,
	getAllPostsQuery,
	getPageBySlugQuery,
	getPostBySlugQuery
} from "./queries";
import type {
	GetAllPagesQueryResult,
	GetAllPostsQueryResult,
	GetPageBySlugQueryResult,
	GetPostBySlugQueryResult
} from "./types";

export const client = createClient({
	projectId: "iwgytvvq",
	apiVersion: "2024-04-01",
	dataset: "production",
	useCdn: !dev
});

export const getAllPosts = async () => await client.fetch<GetAllPostsQueryResult>(getAllPostsQuery);
export const getPostBySlug = async (slug: string) => await client.fetch<GetPostBySlugQueryResult>(getPostBySlugQuery, { slug });
export const getAllPages = async () => await client.fetch<GetAllPagesQueryResult>(getAllPagesQuery);
export const getPageBySlug = async (slug: string) => await client.fetch<GetPageBySlugQueryResult>(getPageBySlugQuery, { slug });

export type {
	GetAllPagesQueryResult,
	GetAllPostsQueryResult,
	GetPageBySlugQueryResult,
	GetPostBySlugQueryResult
} from "./types";
