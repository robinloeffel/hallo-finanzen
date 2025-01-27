<script lang="ts">
	import { Articles, ContentArea } from "$components";
	import type { PageProps } from "./$types";

	const { data }: PageProps = $props();
	const articles = $derived(data.posts);
</script>

<svelte:head>
	<title>Alle Artikel &mdash; Hallo, Finanzen!</title>
</svelte:head>

<ContentArea>
	<Articles {articles} />
</ContentArea>
