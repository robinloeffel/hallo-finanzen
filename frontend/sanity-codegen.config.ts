import type { SanityCodegenConfig } from "@sanity-codegen/cli";

const config: SanityCodegenConfig = {
	sanityConfigPath: "../backend/sanity.config.ts",
	output: "./src/lib/sanity/types.d.ts"
};

export default config;
