<script lang="ts">
	import { ContentArea, PageHero } from "$components";
	import ArticleList from "$components/article-list/article-list.svelte";

	export const stickNav = true;
	export let data;

	const { posts } = data;
</script>

<svelte:head>
	<title>Hallo, Finanzen!</title>
</svelte:head>

<PageHero />

<ContentArea>
	{#if posts.length > 0}
		<ArticleList {posts} />
	{/if}
</ContentArea>
