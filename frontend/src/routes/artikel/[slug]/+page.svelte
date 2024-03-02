<script lang="ts">
	import type { SanityAsset } from "@sanity/image-url/lib/types/types";
	import { PortableText, type PortableTextComponents } from "@portabletext/svelte";
	import { urlFor, formatDate } from "$sanity";
	import { Image } from "$lib/components/portable-text";
	import { ContentArea, Navigation, Richtext } from "$lib/components";

	export let data;

	const { post } = data;

	const components: PortableTextComponents = {
		types: {
			image: Image
		}
	};

	const authorImageUrl = urlFor(post?.author?.image as SanityAsset)
		.size(64, 64)
		.auto("format")
		.url();

	const articleImageUrl = urlFor(post?.image as SanityAsset)
		.size(1280, 720)
		.auto("format")
		.url();
</script>

<svelte:head>
	<title>{post?.title} &mdash; Hallo Finanzen!</title>
</svelte:head>

<header>
	<img class="article-image" alt="" height="720" src={articleImageUrl} width="1280" />
</header>

<Navigation />

<ContentArea>
	<Richtext>
		<h1>{post?.title}</h1>
		<p class="article-meta">
			<img class="author-image" alt={post?.author?.name} height="30" src={authorImageUrl} width="30">
			<a href={`/${post?.author?.slug?.current}`}>{post?.author?.name}</a>,
			<span>{formatDate(post?.publishedAt ?? "")}</span>
		</p>
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

	.article-meta {
		font-size: 0.9em;
	}

	.author-image {
		display: inline-block;
		vertical-align: middle;
		border-radius: 50%;
	}
</style>
