import { env } from "$env/dynamic/private";
import { createClient } from "@sanity/client";

export default createClient({
  projectId: env.SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2024-02-01",
  useCdn: false
});
