<script lang="ts">
	import { Content } from "$components";
	import { Body } from "$components/portable-text";
	import type { PageProps } from "./$types";

	const { data }: PageProps = $props();
	const page = $derived(data.page);
</script>

<svelte:head>
	<title>{page?.title} &mdash; Hallo, Finanzen!</title>
</svelte:head>

<Content blocks={true}>
	<Body value={page?.body} />
</Content>
