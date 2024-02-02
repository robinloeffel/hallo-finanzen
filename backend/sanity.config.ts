import { defineConfig, isDev } from "sanity";
import { visionTool } from "@sanity/vision";
import { structureTool } from "sanity/structure";
import { deDELocale } from "@sanity/locale-de-de";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "default",
  title: "hallo-finanzen",
  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
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
