<script lang="ts">
	import { ArticleList, ContentArea, PageHero } from "$components";
	import type { PageServerData } from "./$types";

	export let data: PageServerData;

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
