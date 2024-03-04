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
	<div class="article-media">
		<img class="article-image" alt="" decoding="async" height="750" loading="lazy" src={imageUrl} width="1000" />
	</div>
	<div class="article-info">
		<h2 class="article-title">{post.title}</h2>
		<small class="article-date">{formatDate(post.publishedAt ?? "")}</small>
	</div>
</a>

<style lang="scss">
	@use "$styles/color-palette";
	@use "$styles/spacing";

	.article {
		display: grid;
		grid-template-columns: 5fr 4fr;
		overflow: clip;
		text-decoration: none;
		background-color: color-palette.$super-white;
		border-radius: spacing.$space-md;

		&.even {
			grid-template-columns: 4fr 5fr;
		}
	}

	.article-media {
		overflow: clip;

		.even & {
			order: 1;
		}
	}

	.article-image {
		transition: scale 0.3s ease-in-out;

		.article:hover &,
		.article:focus-visible & {
			scale: 1.02;
		}
	}

	.article-info {
		display: grid;
		gap: spacing.$space-sm;
		align-self: end;
		padding: spacing.$space-lg * 0.75 spacing.$space-lg;
	}

	.article-title {
		text-decoration: underline;
		text-decoration-color: transparent;
		transition: text-decoration-color 0.3s ease-in-out;

		.article:hover &,
		.article:focus-visible & {
			text-decoration-color: color-palette.$seashell-cove;
		}
	}
</style>
