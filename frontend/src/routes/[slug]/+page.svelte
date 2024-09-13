<script lang="ts">
	import { ContentArea, Richtext } from "$components";
	import { Body } from "$components/portable-text";
	import type { PageServerData } from "./$types";

	export let data: PageServerData;

	$: ({ page } = data);
</script>

<svelte:head>
	<title>{page?.title} &mdash; Hallo, Finanzen!</title>
</svelte:head>

<ContentArea>
	<Richtext>
		<Body value={page?.body} />
	</Richtext>
</ContentArea>
