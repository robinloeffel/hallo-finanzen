import { graphql } from "gql.tada";

export const ImageFragment = graphql(`
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
