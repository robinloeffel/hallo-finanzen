import { graphql } from "gql.tada";
import { ImageFragment } from "./fragments";

export const getAllPostsQuery = () => graphql(`
	query GetAllPosts {
		allPost {
			title
			slug {
				current
			}
		}
	}
`);

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
			image {
				...ImageFragment
			}
		}
	}
`, [ ImageFragment ]);
