import { deDELocale } from "@sanity/locale-de-de";
import { visionTool } from "@sanity/vision";
import { defineConfig, isProd } from "sanity";
import { structureTool } from "sanity/structure";
import { types } from "./schemas";

export default defineConfig({
	name: "hallo-finanzen",
	title: "Hallo Finanzen",
	projectId: "iwgytvvq",
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
