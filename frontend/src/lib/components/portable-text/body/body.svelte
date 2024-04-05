<script lang="ts">
	import { Image } from "$components/portable-text";
	import { PortableText, type InputValue, type PortableTextComponents } from "@portabletext/svelte";

	export let value: InputValue | null | undefined;

	const components: PortableTextComponents = {
		types: {
			image: Image
		}
	};
</script>

{#if value}
	<PortableText {components} {value} />
{/if}
