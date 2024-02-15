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

<svelte:head>
	<title>{post?.title} &mdash; Hallo Finanzen!</title>
</svelte:head>

<h1>{post?.title}</h1>

<PortableText {components} value={post?.body} />

<a href="/">go back</a>
