<script lang="ts">
	import { type AllPages } from "$graphql";

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
	@use "$styles/spacing";

	.footer {
		display: grid;
		gap: spacing.$space-md;
		place-items: center;
		width: min(100%, spacing.$content-width);
		margin: 0 auto spacing.$space-lg;
	}

	.sitemap {
		display: flex;
		list-style: none;
	}

	.sitemap-item {
		display: inline-flex;

		&:not(:last-child)::after {
			margin: 0 spacing.$space-sm;
			content: "—";
		}
	}
</style>
