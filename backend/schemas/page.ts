import { defineField, defineType } from "sanity";

export default defineType({
	name: "page",
	title: "Page",
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
			name: "inNavigation",
			title: "Show in Navigation",
			type: "boolean"
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
			name: "body",
			title: "Body",
			type: "blockContent"
		})
	]
});
