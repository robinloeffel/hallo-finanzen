<script lang="ts">
	import type { AllPages } from "$graphql";

	export let pages: AllPages;

	let hidden = false;
	let oldScrollY = 0;

	const handleWindowScroll = () => {
		hidden = window.scrollY > 100 && !(oldScrollY > window.scrollY);
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
	@use "sass:color";
	@use "$styles/color-palette";
	@use "$styles/spacing";

	$padding-x: 32px;
	$padding-y: 28px;

	.navigation {
		position: sticky;
		inset: spacing.$space-lg 0 auto;
		z-index: 1;
		width: min(100% - spacing.$space-xl, spacing.$content-width + 2 * $padding-x);
		padding: $padding-y $padding-x;
		margin: spacing.$space-lg auto;
		background-color: color-palette.$black-pearl-80;
		background-blend-mode: soft-light;
		backdrop-filter: blur(spacing.$space-md);
		border-radius: spacing.$space-md;
		transition: translate 0.4s ease-in-out;

		&.hidden {
			translate: 0 -200%;
		}
	}

	.navigation-list {
		display: flex;
		gap: spacing.$space-md;
		list-style: none;
	}

	.navigation-item {
		display: inline-block;

		&:first-child {
			margin-right: auto;
		}
	}
</style>
