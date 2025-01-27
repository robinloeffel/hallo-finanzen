<script lang="ts">
	import { Content, Post } from "$components";
	import type { PageProps } from "./$types";

	const { data }: PageProps = $props();
	const content = $derived(data.post);
</script>

<svelte:head>
	<title>{content?.title} &mdash; Hallo Finanzen!</title>
	<meta name="description" content={content?.excerpt} />
</svelte:head>

<Content>
	<Post {content} />
</Content>
