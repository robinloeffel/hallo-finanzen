<script lang="ts">
	import { ContentArea, Richtext } from "$components";
	import { Body } from "$components/portable-text";

	export let data;

	$: ({ page } = data);
</script>

<svelte:head>
	<title>{page?.title} &mdash; Hallo, Finanzen!</title>
</svelte:head>

<ContentArea>
	<Richtext>
		<Body value={page?.bodyRaw} />
	</Richtext>
</ContentArea>
