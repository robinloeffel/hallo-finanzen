<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    children: Snippet;
    blocks?: boolean;
  }

  const { children, blocks }: Props = $props();
</script>

<main class="content" class:blocks>
  {@render children()}
</main>

<style lang="scss">
  @use "$styles/space-scale";
  @use "$styles/variables";

  .content {
    width: min(100% - space-scale.$size-64, variables.$content-width);
    margin: space-scale.$size-96 auto;

    &.blocks :global(> * + *) {
      margin-top: 1em;
    }
  }
</style>
