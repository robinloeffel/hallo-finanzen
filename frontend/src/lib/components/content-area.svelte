<script lang="ts" module>
	import type { Snippet } from "svelte";

	interface Props {
		children: Snippet;
	}
</script>

<script lang="ts">
	const { children }: Props = $props();
</script>

<main class="content-area">
	{@render children()}
</main>

<style lang="scss">
	@use "$styles/space-scale";
	@use "$styles/variables";

	.content-area {
		width: min(100% - space-scale.$size-64, variables.$content-width);
		margin: space-scale.$size-64 auto space-scale.$size-96;
	}
</style>
