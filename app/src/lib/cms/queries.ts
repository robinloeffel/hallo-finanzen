import { defineQuery } from "groq";

export const getAllPostsQuery = defineQuery(`*[_type == "post"]`);
export const getPostBySlugQuery = defineQuery(`*[_type == "post" && slug.current == $slug][0]{ ..., author-> }`);

export const getAllPagesQuery = defineQuery(`*[_type == "page"]`);
export const getPageBySlugQuery = defineQuery(`*[_type == "page" && slug.current == $slug][0]`);
