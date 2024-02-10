<script lang="ts">
	import type { CustomBlockComponentProps } from "@portabletext/svelte";
	import { sanityImageUrl } from "..";

	export let portableText: CustomBlockComponentProps;

	const url = sanityImageUrl(portableText.value)
		.width(300)
		.url();
</script>

<img class="portable-text-image" src={url} alt="">
