<script lang="ts">
	import { urlFor } from "$sanity";
	import type { CustomBlockComponentProps } from "@portabletext/svelte";

	export let portableText: CustomBlockComponentProps;

	const source = urlFor(portableText.value)
		.size(800, 600)
		.auto("format")
		.url();
</script>

<pre>
	<img alt="" height="600" src={source} width="800" />
</pre>
