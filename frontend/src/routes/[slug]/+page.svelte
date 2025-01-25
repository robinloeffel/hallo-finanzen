<script lang="ts">
	import { ContentArea, Richtext } from "$components";
	import { Body } from "$components/portable-text";
	import type { PageProps } from "./$types";

	const { data }: PageProps = $props();
	const page = $derived(data.page);
</script>

<svelte:head>
	<title>{page?.title} &mdash; Hallo, Finanzen!</title>
</svelte:head>

<ContentArea>
	<Richtext>
		<Body value={page?.body} />
	</Richtext>
</ContentArea>
