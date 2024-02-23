<script lang="ts">
	import type { CustomBlockComponentProps } from "@portabletext/svelte";
	import { urlFor } from "$lib/sanity";

	export let portableText: CustomBlockComponentProps;

	const source = urlFor(portableText.value)
		.size(800, 600)
		.url();
</script>

<pre>
	<img alt="" height="600" src={source} width="800" />
</pre>
