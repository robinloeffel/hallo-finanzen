<script lang="ts">
	import type { AllPages } from "$graphql";

	export let pages: AllPages;
</script>

<footer class="footer">
	<ul class="sitemap">
		<li class="sitemap-item">
			<a href="/">Home</a>
		</li>
		<li class="sitemap-item">
			<a href="/artikel">Archiv</a>
		</li>
		{#each pages as page}
			<li class="sitemap-item">
				<a href={`/${page.slug?.current}`}>{page.title}</a>
			</li>
		{/each}
	</ul>
	<small>© Hallo, Finanzen! 2024</small>
</footer>

<style lang="scss">
	@use "$styles/space-scale";
	@use "$styles/variables";

	.footer {
		display: grid;
		gap: space-scale.$size-16;
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
</style>
