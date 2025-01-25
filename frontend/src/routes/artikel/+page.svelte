<script lang="ts">
	import { ArticleList, ContentArea } from "$components";
	import type { PageProps } from "./$types";

	const { data }: PageProps = $props();
	const posts = $derived(data.posts);
</script>

<svelte:head>
	<title>Alle Artikel &mdash; Hallo, Finanzen!</title>
</svelte:head>

<ContentArea>
	<ArticleList {posts} />
</ContentArea>
