<script lang="ts" module>
	import type { Snippet } from "svelte";

	interface Props {
		children: Snippet;
		inline?: boolean;
		blocks?: boolean;
	}
</script>

<script lang="ts">
	const { children, inline, blocks }: Props = $props();
</script>

<main class="content" class:blocks class:inline>
	{@render children()}
</main>

<style lang="scss">
	@use "$styles/space-scale";
	@use "$styles/variables";

	.content {
		width: min(100% - space-scale.$size-64, variables.$content-width);
		margin: space-scale.$size-192 auto space-scale.$size-96;

		&.inline {
			margin-top: space-scale.$size-64;
		}

		&.blocks :global(> * + *) {
			margin-top: 1em;
		}
	}
</style>
