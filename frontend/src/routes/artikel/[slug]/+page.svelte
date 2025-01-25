<script lang="ts">
	import { ContentArea, Richtext } from "$components";
	import { Body } from "$components/portable-text";
	import { formatDate, urlFor } from "$sanity";
	import { derived } from "svelte/store";
	import type { PageProps } from "./$types";

	const { data }: PageProps = $props();
	const post = $derived(data.post);

	const authorImage = $derived.by(() =>
		post?.author?.image
			? urlFor(post.author.image)
				.size(64, 64)
				.auto("format")
				.url()
			: ""
	);

	const articleImage = $derived.by(() =>
		post?.image
			? urlFor(post.image)
				.size(2000, 1333)
				.auto("format")
				.url()
			: ""
	);
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
		src={articleImage}
		width="2000"
	/>
</header>

<ContentArea>
	<Richtext>
		<h1>{post?.title}</h1>
		<small class="article-meta">
			<img
				class="author-image"
				alt={post?.author?.name}
				decoding="async"
				height="30"
				loading="lazy" src={authorImage} width="30"
			/>
			<a href={`/${post?.author?.slug?.current}`}>{post?.author?.name}</a>,
			<span>{formatDate(post?.publishedAt ?? "")}</span>
		</small>
		<Body value={post?.body} />
	</Richtext>
</ContentArea>

<style lang="scss">
	@use "$styles/space-scale";

	.article-image {
		width: calc(100dvw - space-scale.$size-64);
		height: calc(100dvh - space-scale.$size-192);
		margin: 0 space-scale.$size-32 space-scale.$size-32;
		object-fit: cover;
		border-radius: space-scale.$size-16;
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
