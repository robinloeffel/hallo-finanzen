<script lang="ts" module>
	import type { GetAllPostsQueryResult } from "$sanity/client";

	interface Props {
		articles: GetAllPostsQueryResult;
	}
</script>

<script lang="ts">
	import { formatDate } from "$sanity";
	const { articles }: Props = $props();
</script>

<ol class="articles">
	{#each articles as article (article._id)}
		<li class="article">
			<a class="article-link" href={`/artikel/${article.slug?.current}`}>
				<span class="article-title">{article.title}</span>
				<small class="article-date">{formatDate(article.publishedAt ?? "")}</small>
			</a>
		</li>
	{/each}
</ol>

<style lang="scss">
	@use "$styles/color-palette";
	@use "$styles/space-scale";
	@use "$styles/type-scale";

	.articles {
		display: grid;
		gap: space-scale.$size-4;
		list-style: none;
	}

	.article-link {
		display: grid;
		grid-template-columns: 2fr 6fr;
		place-items: end start;
		text-decoration: none;
	}

	.article-title {
		order: 1;
		font-size: type-scale.$size-24;
		text-decoration: underline color-palette.$curious-blue;
	}
</style>
