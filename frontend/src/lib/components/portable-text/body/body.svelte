<script lang="ts" module>
	import type { InputValue } from "@portabletext/svelte";

	interface Props {
		value?: InputValue;
	}
</script>

<script lang="ts">
	import { Image } from "$components/portable-text";
	// eslint-disable-next-line no-duplicate-imports
	import { PortableText, type PortableTextComponents } from "@portabletext/svelte";

	const { value }: Props = $props();

	const components: PortableTextComponents = {
		types: {
			image: Image
		}
	};
</script>

{#if value}
	<PortableText {components} {value} />
{/if}
