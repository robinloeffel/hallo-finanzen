<script lang="ts" module>
	import type { GetPostBySlugQueryResult } from "$cms/types";
	import type { Snippet } from "svelte";

	interface Props {
		content: GetPostBySlugQueryResult;
		children?: Snippet;
	}
</script>

<script lang="ts">
	import { formatDate } from "$cms";
	import { Body } from "$components/portable-text";
	const { content }: Props = $props();
</script>

<article class="post">
	<header class="post-header">
		<h1 class="post-title">{content?.title}</h1>
		<a class="post-author" href="/ueber-mich">{content?.author?.name}</a>,
		<time class="post-date" datetime={content?.publishedAt}>
			{formatDate(content?.publishedAt ?? "")}
		</time>
	</header>
	<section class="post-body">
		<Body value={content?.body} />
	</section>
</article>

<style lang="scss">
	@use "$styles/space-scale";
	@use "$styles/type-scale";

	.post {
		margin-top: space-scale.$size-192;
	}

	.post-header {
		margin-bottom: space-scale.$size-48;
	}

	.post-title {
		margin-bottom: space-scale.$size-8;
		font-size: type-scale.$size-48;
	}

	.post-body :global(> * + *) {
		margin-top: 1em;
	}
</style>
