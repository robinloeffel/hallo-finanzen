<script lang="ts">
	import type { AllPages } from "$graphql";
	import type { Action } from "svelte/action";

	export let pages: AllPages;

	let shadow = false;
	let hidden = false;
	let oldScrollY = 0;
	let spaceToTop = 0;

	const observe: Action = navigation => {
		const computedStyle = window.getComputedStyle(navigation);
		const height = Number.parseFloat(computedStyle.height);
		const margin = Number.parseFloat(computedStyle.marginTop);

		spaceToTop = height + margin * 2;

		const io = new IntersectionObserver(entries => {
			shadow = entries.at(0)?.isIntersecting ?? false;
		}, { rootMargin: "0px 0px -100% 0px" });

		io.observe(document.body);

		return {
			destroy: () => {
				io.disconnect();
			}
		};
	};

	const handleWindowScroll = () => {
		hidden = shadow && window.scrollY > spaceToTop && !(oldScrollY > window.scrollY);
		oldScrollY = window.scrollY;
	};
</script>

<svelte:window on:scroll={handleWindowScroll} />

<nav class="navigation" class:hidden class:shadow use:observe>
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
		inset: spacing.$space-lg 0;
		width: min(100% - spacing.$space-xl, spacing.$content-width + 2 * $padding-x);
		padding: $padding-y $padding-x;
		margin: spacing.$space-lg auto;
		background-color: color-palette.$tame-white-75;
		background-blend-mode: soft-light;
		backdrop-filter: blur(spacing.$space-md);
		border-radius: spacing.$space-md;
		transition: translate 0.4s ease-in-out;

		&::after {
			position: absolute;
			inset: 0;
			pointer-events: none;
			content: "";
			border-radius: inherit;
			box-shadow: 0 spacing.$space-sm spacing.$space-md color-palette.$dreamless-sleep-10;
			opacity: 0;
			transition: opacity 0.3s ease-in-out;
		}

		&.hidden {
			translate: 0 -200%;
		}

		&.shadow::after {
			opacity: 1;
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

	.navigation-link {
		color: inherit;
	}
</style>
