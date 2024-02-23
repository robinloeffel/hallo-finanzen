import type { SanityCodegenConfig } from "@sanity-codegen/cli";

export default {
	sanityConfigPath: "../backend/sanity.config.ts",
	output: "./src/lib/sanity/types.d.ts"
} satisfies SanityCodegenConfig;
