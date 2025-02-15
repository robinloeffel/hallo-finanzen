import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string"
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      }
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: {
        type: "author"
      }
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime"
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text"
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent"
    })
  ]
});
