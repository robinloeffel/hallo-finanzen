<script lang="ts">
	import { ArticleList, ContentArea } from "$components";

	export let data;

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
