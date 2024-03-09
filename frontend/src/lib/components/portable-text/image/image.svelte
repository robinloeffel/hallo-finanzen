<script lang="ts">
	import { urlFor } from "$sanity";
	import type { CustomBlockComponentProps } from "@portabletext/svelte";

	export let portableText: CustomBlockComponentProps;

	const source = urlFor(portableText.value)
		.size(1500, 1000)
		.auto("format")
		.url();
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
	@use "$styles/spacing";

	.image {
		border-radius: spacing.$space-md;
	}
</style>
