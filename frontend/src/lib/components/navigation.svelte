<script lang="ts">
	import type { Action } from "svelte/action";

	let shadow = false;
	let hidden = false;
	let oldScrollY = 0;

	const observe: Action = () => {
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
		hidden = shadow && window.scrollY > 150 && !(oldScrollY > window.scrollY);
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
			<a class="navigation-link" href="/archiv">Archiv</a>
		</li>
		<li class="navigation-item">
			<a class="navigation-link" href="/empfehlungen">Empfehlungen</a>
		</li>
		<li class="navigation-item">
			<a class="navigation-link" href="/ueber-mich">Über mich</a>
		</li>
	</ul>
</nav>

<style lang="scss">
	@use "$styles/color-palette";
	@use "sass:color";

	.navigation {
		position: sticky;
		inset: 2em 0;
		width: min(100% - 4em, 64ch + 64px);
		padding: 28px 32px;
		margin: 2em auto;
		background-color: color.adjust(color-palette.$tame-white, $alpha: -0.25);
		background-blend-mode: soft-light;
		backdrop-filter: blur(1em);
		border-radius: 1em;
		transition: translate 0.4s ease-in-out;

		&::after {
			position: absolute;
			inset: 0;
			pointer-events: none;
			content: "";
			border-radius: inherit;
			box-shadow: 0 0.5em 2em color.adjust(color-palette.$dreamless-sleep, $alpha: -0.9);
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
		gap: 1em;
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
