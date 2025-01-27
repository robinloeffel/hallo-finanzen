<script lang="ts">
	import { ArticleList, Content, Hero } from "$components";
	import type { PageProps } from "./$types";

	const { data }: PageProps = $props();
	const items = $derived(data.posts);
</script>

<svelte:head>
	<title>Hallo, Finanzen!</title>
</svelte:head>

<Hero />
<Content inline={true}>
	<ArticleList {items} />
</Content>
