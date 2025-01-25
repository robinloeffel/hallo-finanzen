<script lang="ts">
	import { ArticleList, ContentArea, PageHero } from "$components";
	import type { PageProps } from "./$types";

	const { data }: PageProps = $props();
	const posts = $derived(data.posts);
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
