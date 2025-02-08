<script lang="ts">
	import { formatDate } from "$cms";
	import type { GetAllPostsQueryResult } from "$cms/client";

	interface Props {
		items: GetAllPostsQueryResult;
	}

	const { items }: Props = $props();
</script>

<ol class="article-list">
	{#each items as item (item._id)}
		<li class="article-list-item">
			<a class="article-list-item-link" href={`/artikel/${item.slug?.current}`}>
				<span class="article-list-item-title">{item.title}</span>
				<span class="article-list-item-date">{formatDate(item.publishedAt ?? "")}</span>
			</a>
		</li>
	{/each}
</ol>

<style lang="scss">
	@use "$styles/color-palette";
	@use "$styles/space-scale";
	@use "$styles/type-scale";
	@use "$styles/media-queries";

	.article-list {
		display: grid;
		gap: space-scale.$size-4;
		list-style: none;
	}

	.article-list-item-link {
		display: grid;
		grid-template-columns: 2fr 6fr;
		place-items: end start;
		text-decoration: none;
	}

	.article-list-item-title {
		grid-column: 1 / -1;
		order: 1;
		font-size: type-scale.$size-24;
		text-decoration: underline color-palette.$curious-blue;

		@include media-queries.above-sm {
			grid-column: 2 / 3;
		}
	}

	.article-list-item-date {
		grid-column: 1 / -1;
		font-size: type-scale.$size-16;

		@include media-queries.above-sm {
			grid-column: 1 / 2;
		}
	}
</style>
