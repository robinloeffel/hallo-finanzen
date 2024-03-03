import { defineConfig, isProd } from "sanity";
import { visionTool } from "@sanity/vision";
import { structureTool } from "sanity/structure";
import { deDELocale } from "@sanity/locale-de-de";
import { types } from "./schemas";

export default defineConfig({
	name: "hallo-finanzen",
	title: "Hallo Finanzen",
	projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
	dataset: "production",
	plugins: [
		structureTool(),
		visionTool(),
		isProd && deDELocale()
	].filter(Boolean),
	schema: {
		types
	}
});
