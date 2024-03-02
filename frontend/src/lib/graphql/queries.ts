import type { introspection } from "./types-generated";
import type { PortableTextBlock } from "@portabletext/types";
import { initGraphQLTada } from "gql.tada";

const graphql = initGraphQLTada<{
	introspection: introspection;
	scalars: {
		DateTime: string;
		JSON: PortableTextBlock;
	};
}>();

const ImageFragment = graphql(`
	fragment ImageFragment on Image {
		asset {
			_id
			url
			path
			assetId
			extension
		}
	}
`);

export const getAllPostsQuery = () => graphql(`
	query GetAllPosts {
		allPost {
			title
			slug {
				current
			}
			image {
				...ImageFragment
			}
		}
	}
`, [ ImageFragment ]);

export const getPostBySlugQuery = (slug: string) => graphql(`
	query GetPostBySlug {
		allPost(
			where: {
				slug: {
					current: {
						eq: "${slug}"
					}
				}
			}
		) {
			title
			bodyRaw
			publishedAt
			author {
				name
				slug {
					current
				}
				image {
					...ImageFragment
				}
			}
			image {
				...ImageFragment
			}
		}
	}
`, [ ImageFragment ]);
