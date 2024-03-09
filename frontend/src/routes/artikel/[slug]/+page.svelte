<script lang="ts">
	import { ContentArea, Richtext } from "$components";
	import { Body } from "$components/portable-text";
	import { formatDate, urlFor } from "$sanity";
	import type { SanityAsset } from "@sanity/image-url/lib/types/types";

	export let data;

	const { post } = data;

	const authorImageUrl = urlFor(post?.author?.image as SanityAsset)
		.size(64, 64)
		.auto("format")
		.url();

	const articleImageUrl = urlFor(post?.image as SanityAsset)
		.size(2000, 1333)
		.auto("format")
		.url();
</script>

<svelte:head>
	<title>{post?.title} &mdash; Hallo Finanzen!</title>
</svelte:head>

<header>
	<img
		class="article-image"
		alt=""
		decoding="async"
		fetchpriority="high"
		height="1333"
		src={articleImageUrl}
		width="2000"
	/>
</header>

<ContentArea>
	<Richtext>
		<h1>{post?.title}</h1>
		<small class="article-meta">
			<img class="author-image" alt={post?.author?.name} decoding="async" height="30" loading="lazy" src={authorImageUrl} width="30">
			<a href={`/${post?.author?.slug?.current}`}>{post?.author?.name}</a>,
			<span>{formatDate(post?.publishedAt ?? "")}</span>
		</small>
		<Body value={post?.bodyRaw} />
	</Richtext>
</ContentArea>

<style lang="scss">
	@use "$styles/spacing";

	.article-image {
		width: calc(100dvw - 2 * spacing.$space-lg);
		height: calc(100dvh - spacing.$space-lg);
		margin: 0 spacing.$space-lg spacing.$space-lg;
		object-fit: cover;
		border-radius: 0 0 spacing.$space-md spacing.$space-md;
	}

	.article-meta {
		display: block;
	}

	.author-image {
		display: inline-block;
		vertical-align: middle;
		border-radius: 50%;
	}
</style>
