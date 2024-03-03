<script lang="ts">
	import { type AllPosts } from "$graphql";
	import { formatDate, urlFor } from "$sanity";
	import type { SanityAsset } from "@sanity/image-url/lib/types/types";

	export let post: AllPosts[number];
	export let even: boolean;

	const imageUrl = urlFor(post.image as SanityAsset)
		.size(1000, 750)
		.auto("format")
		.url();
</script>

<a class="article" class:even href={`/artikel/${post.slug?.current}`}>
	<img class="article-image" alt="" height="750" src={imageUrl} width="1000" />
	<div class="article-info">
		<small class="article-date">{formatDate(post.publishedAt ?? "")}</small>
		<h2 class="article-title">{post.title}</h2>
	</div>
</a>

<style lang="scss">
	@use "$styles/color-palette";
	@use "$styles/spacing";

	.article {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: spacing.$space-md;
		text-decoration: none;
	}

	.article-image {
		grid-column: span 2;

		.even & {
			order: 1;
		}
	}

	.article-info {
		align-self: end;
		transition: translate 0.2s ease-in-out;

		.article:hover &,
		.article:focus-visible & {
			translate: 0 -#{spacing.$space-xs};
		}
	}

	.article-title {
		text-decoration: underline;
		text-decoration-color: transparent;
		transition: text-decoration-color 0.2s ease-in-out;

		.article:hover &,
		.article:focus-visible & {
			text-decoration-color: color-palette.$seashell-cove;
		}
	}
</style>
