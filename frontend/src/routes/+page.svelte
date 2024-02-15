<script lang="ts">
	import { PageHero } from "$lib/components";

	export let data;

	const { posts } = data;
</script>

<svelte:head>
	<title>Hallo, Finanzen!</title>
</svelte:head>

<PageHero />

{#if posts.length > 0}
	<ul>
		{#each posts as post}
			<li>
				<a href={`/artikel/${post.slug.current}`}>{post.title}</a>
			</li>
		{/each}
	</ul>
{/if}
