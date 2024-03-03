<script lang="ts">
	import { urlFor } from "$sanity";
	import type { CustomBlockComponentProps } from "@portabletext/svelte";

	export let portableText: CustomBlockComponentProps;

	const source = urlFor(portableText.value)
		.size(1500, 1000)
		.auto("format")
		.url();
</script>

<img class="image" alt="" height="1000" src={source} width="1500" />
