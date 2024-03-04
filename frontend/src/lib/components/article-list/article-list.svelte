<script lang="ts">
	import { type AllPosts } from "$graphql";
	import Article from "./article.svelte";

	export let posts: AllPosts = [];
</script>

<ul class="article-list">
	{#each posts as post, index}
		<li class="article-list-item">
			<Article even={(index + 1) % 2 === 0} {post} />
		</li>
	{/each}
</ul>

<style lang="scss">
	@use "$styles/spacing";

	.article-list {
		display: grid;
		gap: spacing.$space-lg;
		list-style: none;
	}
</style>
