<script lang="ts">
	import type { AllPages } from "$graphql";

	export let pages: AllPages;

	let hidden = false;
	let oldScrollY = 0;

	const handleWindowScroll = () => {
		hidden = window.scrollY > 100 && oldScrollY <= window.scrollY;
		oldScrollY = window.scrollY;
	};
</script>

<svelte:window on:scroll={handleWindowScroll} />

<nav class="navigation" class:hidden>
	<ul class="navigation-list">
		<li class="navigation-item">
			<a class="navigation-link" href="/">Hallo, Finanzen!</a>
		</li>
		<li class="navigation-item">
			<a class="navigation-link" href="/artikel">Archiv</a>
		</li>
		{#each pages as page}
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
		background-color: color-palette.$black-pearl-80;
		background-blend-mode: soft-light;
		backdrop-filter: blur(space-scale.$size-16);
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
