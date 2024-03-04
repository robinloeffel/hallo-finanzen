<script lang="ts">
	import { ArticleList, ContentArea, Richtext } from "$components";

	export let data;

	const { posts } = data;
</script>

<svelte:head>
	<title>Alle Artikel &mdash; Hallo, Finanzen!</title>
</svelte:head>

<ContentArea>
	<Richtext>
		<h1>Alle Artikel</h1>
	</Richtext>

	{#if posts.length > 0}
		<ArticleList {posts} />
	{/if}
</ContentArea>
