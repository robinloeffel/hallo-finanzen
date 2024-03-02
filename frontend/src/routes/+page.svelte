<script lang="ts">
	import { PageHero, ContentArea, Navigation } from "$components";
	import { urlFor } from "$sanity";

	export let data;

	const { posts } = data;
</script>

<svelte:head>
	<title>Hallo, Finanzen!</title>
</svelte:head>

<PageHero />
<Navigation />

<ContentArea>
	{#if posts.length > 0}
		<ul class="articles">
			{#each posts as post}
				{@const slug = `/artikel/${post.slug?.current}`}
				{@const title = post?.title}
				{@const imageUrl = urlFor(post?.image).size(640, 480)
					.auto("format")
					.url()}
				<li class="article">
					<a class="article-link" href={slug}>
						<img class="article-image" alt="" src={imageUrl} />
						<h2 class="article-title">{title}</h2>
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</ContentArea>

<style lang="scss">
	@use "$styles/color-palette";

	.articles {
		list-style: none;
	}

	.article + .article {
		margin-top: 2em;
	}

	.article-link {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 1em;
		text-decoration: none;
	}

	.article-image {
		grid-column: 1 / 3;

		.article:nth-child(even) & {
			grid-column: 2 / 4;
		}
	}

	.article-title {
		align-self: end;
		text-decoration: underline;
		text-decoration-color: transparent;
		transition:
			text-decoration-color 0.2s ease-in-out,
			translate 0.2s ease-in-out;

		.article-link:hover &,
		.article-link:focus-visible & {
			text-decoration-color: color-palette.$seashell-cove;
			translate: 0 -0.25em;
		}

		.article:nth-child(even) & {
			grid-row: 1 / 2;
			grid-column: 1 / 2;
		}
	}
</style>
