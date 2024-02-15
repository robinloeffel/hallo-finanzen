<script lang="ts">
	import type { CustomBlockComponentProps } from "@portabletext/svelte";
	import { sanityImage } from "..";

	export let portableText: CustomBlockComponentProps;

	const url = sanityImage(portableText.value)
		.size(300, 300)
		.url();
</script>

<img class="portable-text-image" alt="" height="300" src={url} width="300">
