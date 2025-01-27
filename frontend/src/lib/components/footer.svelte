<script lang="ts" module>
	import type { GetAllPagesQueryResult } from "$cms/types";

	interface Props {
		pages: GetAllPagesQueryResult;
	}
</script>

<script lang="ts">
	const { pages }: Props = $props();
</script>

<footer class="footer">
	<ul class="sitemap">
		<li class="sitemap-item">
			<a href="/">Home</a>
		</li>
		<li class="sitemap-item">
			<a href="/artikel">Alle Artikel</a>
		</li>
		{#each pages as page (page._id)}
			<li class="sitemap-item">
				<a href={`/${page.slug?.current}`}>{page.title}</a>
			</li>
		{/each}
	</ul>
	<span class="copyright">
		&copy; Hallo, Finanzen! 2025
	</span>
</footer>

<style lang="scss">
	@use "$styles/space-scale";
	@use "$styles/type-scale";
	@use "$styles/variables";

	.footer {
		display: grid;
		gap: space-scale.$size-24;
		place-items: center;
		width: min(100% - space-scale.$size-64, variables.$content-width);
		margin: 0 auto space-scale.$size-32;
	}

	.sitemap {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		list-style: none;
	}

	.sitemap-item {
		display: inline-flex;

		&:not(:last-child)::after {
			margin: 0 space-scale.$size-8;
			content: "—";
		}
	}

	.copyright {
		font-size: type-scale.$size-16;
	}
</style>
