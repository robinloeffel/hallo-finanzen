import groq from "groq";

export const getAllPostsQuery = groq`*[_type == "post"]`;
export const getPostBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0]{ ..., author-> }`;

export const getAllPagesQuery = groq`*[_type == "page"]`;
export const getPageBySlugQuery = groq`*[_type == "page" && slug.current == $slug][0]`;
