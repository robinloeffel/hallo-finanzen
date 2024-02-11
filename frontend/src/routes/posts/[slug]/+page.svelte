<script lang="ts">
	import { PortableText, type PortableTextComponents } from "@portabletext/svelte";
	import { Image } from "$lib/sanity/portable-text";

	export let data;

	const { post } = data;

	const components: PortableTextComponents = {
		types: {
			image: Image
		}
	};
</script>

<h1>{post?.title}</h1>

<PortableText value={post?.body} {components} />

<a href="/">go back</a>
