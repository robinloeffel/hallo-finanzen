<script lang="ts" module>
	import type { Snippet } from "svelte";

	interface Props {
		children: Snippet;
	}
</script>

<script lang="ts">
	const { children }: Props = $props();
</script>

<div class="richtext">
	{@render children()}
</div>

<style lang="scss">
	@use "$styles/space-scale";

	:global(.richtext > * + *) {
		margin-top: space-scale.$size-16;
	}
</style>
