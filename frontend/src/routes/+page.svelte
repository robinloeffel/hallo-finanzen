<script lang="ts">
	import { Articles, ContentArea, PageHero } from "$components";
	import type { PageProps } from "./$types";

	const { data }: PageProps = $props();
	const articles = $derived(data.posts);
</script>

<svelte:head>
	<title>Hallo, Finanzen!</title>
</svelte:head>

<PageHero />

<ContentArea>
	<Articles {articles} />
</ContentArea>
