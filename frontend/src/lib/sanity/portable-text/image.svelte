<script lang="ts">
	import type { CustomBlockComponentProps } from "@portabletext/svelte";
	import { sanityImage } from "..";

	export let portableText: CustomBlockComponentProps;

	const url = sanityImage(portableText.value)
		.width(300)
		.url();
</script>

<img class="portable-text-image" src={url} alt="" width="300" height="300">
