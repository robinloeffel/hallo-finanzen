<script lang="ts" module>
	import type { GetAllPagesQueryResult } from "$sanity/types";

	interface Props {
		pages: GetAllPagesQueryResult;
	}
</script>

<script lang="ts">
	const { pages }: Props = $props();

	let hidden = $state(false);
	let oldScrollY = $state(0);

	const handleWindowScroll = () => {
		hidden = window.scrollY > 100 && oldScrollY <= window.scrollY;
		oldScrollY = window.scrollY;
	};
</script>

<svelte:window onscroll={handleWindowScroll} />

<nav class="navigation" class:hidden>
	<ul class="navigation-list">
		<li class="navigation-item">
			<a class="navigation-link" href="/">Hallo, Finanzen!</a>
		</li>
		<li class="navigation-item">
			<a class="navigation-link" href="/artikel">Archiv</a>
		</li>
		{#each pages as page (page._id)}
			<li class="navigation-item">
				<a class="navigation-link" href={`/${page.slug?.current}`}>{page.title}</a>
			</li>
		{/each}
	</ul>
</nav>

<style lang="scss">
	@use "$styles/color-palette";
	@use "$styles/space-scale";
	@use "$styles/variables";

	.navigation {
		position: sticky;
		inset: space-scale.$size-32 0 auto;
		z-index: 1;
		width: min(100% - space-scale.$size-64, variables.$content-width + space-scale.$size-64);
		padding: space-scale.$size-24 space-scale.$size-32;
		margin: space-scale.$size-32 auto;
		background-color: color-palette.$black-pearl;
		border-radius: space-scale.$size-16;
		transition: translate 0.4s ease-in-out;

		&.hidden {
			translate: 0 -200%;
		}
	}

	.navigation-list {
		display: flex;
		gap: space-scale.$size-16;
		list-style: none;
	}

	.navigation-item {
		display: inline-block;

		&:first-child {
			margin-right: auto;
		}
	}
</style>
