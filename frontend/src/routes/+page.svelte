<script lang="ts">
	import { ArticleList, ContentArea, PageHero } from "$components";

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
