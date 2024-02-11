import { defineConfig, isDev } from "sanity";
import { visionTool } from "@sanity/vision";
import { structureTool } from "sanity/structure";
import { deDELocale } from "@sanity/locale-de-de";
import { schemaTypes } from "./schemas";

export default defineConfig({
	name: "hallo-finanzen",
	title: "Hallo Finanzen",
	projectId: process.env.PUBLIC_SANITY_PROJECT_ID!,
	dataset: "production",
	plugins: [
		structureTool(),
		visionTool(),
		...isDev ? [] : [ deDELocale() ]
	],
	schema: {
		types: schemaTypes
	}
});
