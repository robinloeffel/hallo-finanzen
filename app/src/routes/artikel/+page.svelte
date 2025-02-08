<script lang="ts">
  import { ArticleList, Content } from "$components";
  import type { PageProps } from "./$types";

  const { data }: PageProps = $props();
  const items = $derived(data.posts);
</script>

<svelte:head>
  <title>Alle Artikel &mdash; Hallo, Finanzen!</title>
</svelte:head>

<Content>
  <ArticleList {items} />
</Content>
