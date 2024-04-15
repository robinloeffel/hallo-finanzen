<script lang="ts">
	import type { AllPosts } from "$graphql";
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
	@use "$styles/space-scale";

	.article-list {
		display: grid;
		gap: space-scale.$size-48;
		list-style: none;
	}
</style>
