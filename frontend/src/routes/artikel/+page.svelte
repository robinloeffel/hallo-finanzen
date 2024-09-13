<script lang="ts">
	import { ArticleList, ContentArea } from "$components";
	import type { PageServerData } from "./$types";

	export let data: PageServerData;

	const { posts } = data;
</script>

<svelte:head>
	<title>Alle Artikel &mdash; Hallo, Finanzen!</title>
</svelte:head>

<ContentArea>
	{#if posts.length > 0}
		<ArticleList {posts} />
	{/if}
</ContentArea>
