<script lang="ts" module>
	import type { GetAllPostsQueryResult } from "$sanity/client";

	interface Props {
		posts: GetAllPostsQueryResult;
	}
</script>

<script lang="ts">
	import Article from "./article.svelte";

	const { posts }: Props = $props();
</script>

<ul class="article-list">
	{#each posts as post, index (post._id)}
		{@const even = (index + 1) % 2 === 0}
		<li class="article-list-item">
			<Article {even} {post} />
		</li>
	{/each}
</ul>

<style lang="scss">
	@use "$styles/space-scale";

	.article-list {
		display: grid;
		gap: space-scale.$size-48;
		list-style: none;
	}
</style>
