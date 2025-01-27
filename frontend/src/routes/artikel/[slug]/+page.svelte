<script lang="ts">
	import { ContentArea, Richtext } from "$components";
	import { Body } from "$components/portable-text";
	import { formatDate } from "$sanity";
	import type { PageProps } from "./$types";

	const { data }: PageProps = $props();
	const post = $derived(data.post);
</script>

<svelte:head>
	<title>{post?.title} &mdash; Hallo Finanzen!</title>
</svelte:head>

<ContentArea>
	<Richtext>
		<h1>{post?.title}</h1>
		<small class="article-meta">
			<a href={`/${post?.author?.slug?.current}`}>{post?.author?.name}</a>,
			<span>{formatDate(post?.publishedAt ?? "")}</span>
		</small>
		<Body value={post?.body} />
	</Richtext>
</ContentArea>
