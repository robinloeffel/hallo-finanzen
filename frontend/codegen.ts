import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	overwrite: true,
	schema: "https://iwgytvvq.api.sanity.io/v2023-08-01/graphql/production/default",
	generates: {
		"src/lib/sanity/types.generated.ts": {
			plugins: [ "typescript" ]
		}
	}
};

export default config;
