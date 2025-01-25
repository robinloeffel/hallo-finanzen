<script lang="ts" module>
	import type { GetAllPostsQueryResult } from "$sanity/client";

	interface Props {
		post: GetAllPostsQueryResult[number];
		even: boolean;
	}
</script>

<script lang="ts">
	import { formatDate, urlFor } from "$sanity";

	const { post, even }: Props = $props();

	const image = $derived.by(() =>
		post.image
			? urlFor(post.image)
				.size(1000, 750)
				.auto("format")
				.url()
			: ""
	);

</script>

<a class="article" class:even href={`/artikel/${post.slug?.current}`}>
	<div class="article-media">
		<img class="article-image" alt="" decoding="async" height="750" loading="lazy" src={image} width="1000" />
	</div>
	<div class="article-info">
		<h2 class="article-title">{post.title}</h2>
		<small class="article-date">{formatDate(post.publishedAt ?? "")}</small>
	</div>
</a>

<style lang="scss">
	@use "$styles/color-palette";
	@use "$styles/space-scale";
	@use "$styles/media-queries";

	.article {
		display: grid;
		overflow: clip;
		text-decoration: none;

		@include media-queries.above-sm {
			grid-template-columns: 5fr 4fr;

			&.even {
				grid-template-columns: 4fr 5fr;
			}
		}
	}

	.article-media {
		clip-path: inset(0 round space-scale.$size-16);
		transition: clip-path 0.3s ease-in-out;

		.article:is(:hover, :focus-visible) & {
			clip-path: inset(space-scale.$size-4 round space-scale.$size-24);
		}

		@include media-queries.above-sm {
			.even & {
				order: 1;
			}
		}
	}

	.article-image {
		transition: scale 0.3s ease-in-out;

		.article:is(:hover, :focus-visible) & {
			scale: 1.05;
		}
	}

	.article-info {
		display: grid;
		gap: space-scale.$size-8;
		align-self: end;
		padding: space-scale.$size-24;

		@include media-queries.above-sm {
			padding: space-scale.$size-24 space-scale.$size-32;
		}
	}

	.article-title {
		text-decoration: underline;
		text-decoration-color: transparent;
		transition: text-decoration-color 0.3s ease-in-out;

		.article:is(:hover, :focus-visible) & {
			text-decoration-color: color-palette.$curious-blue;
		}
	}
</style>
