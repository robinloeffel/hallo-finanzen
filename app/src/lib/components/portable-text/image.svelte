<script lang="ts">
	import { urlFor } from "$cms";
	import type { CustomBlockComponentProps } from "@portabletext/svelte";

	interface Props {
		portableText: CustomBlockComponentProps;
	}

	const { portableText }: Props = $props();

	const source = $derived(
		urlFor(portableText.value)
			.size(1500, 1000)
			.auto("format")
			.url()
	);
</script>

<img
	class="image"
	alt=""
	decoding="async"
	height="1000"
	loading="lazy"
	src={source}
	width="1500"
/>

<style lang="scss">
	@use "$styles/space-scale";

	.image {
		border-radius: space-scale.$size-16;
	}
</style>
