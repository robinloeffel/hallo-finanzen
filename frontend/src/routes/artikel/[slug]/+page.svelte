<script lang="ts">
	import type { SanityAsset } from "@sanity/image-url/lib/types/types";
	import { PortableText, type PortableTextComponents } from "@portabletext/svelte";
	import { urlFor } from "$lib/sanity";
	import { Image } from "$lib/components/portable-text";
	import { ContentArea, Navigation, Richtext } from "$lib/components";

	export let data;

	const { post } = data;

	const components: PortableTextComponents = {
		types: {
			image: Image
		}
	};

	const imageUrl = urlFor(post?.image as SanityAsset)
		.size(1280, 720)
		.auto("format")
		.url();
</script>

<svelte:head>
	<title>{post?.title} &mdash; Hallo Finanzen!</title>
</svelte:head>

<header>
	<img class="article-image" alt="" height="720" src={imageUrl} width="1280" />
</header>

<Navigation />

<ContentArea>
	<Richtext>
		<h1>{post?.title}</h1>
		<PortableText {components} value={post?.bodyRaw} />
	</Richtext>
</ContentArea>

<style lang="scss">
	.article-image {
		width: 100%;
		height: 80dvh;
		object-fit: cover;
		object-position: top center;
	}
</style>
