<script lang="ts">
	import type { Action } from "svelte/action";

	let sticking = false;

	const observe: Action = navigation => {
		const topMargin = window.getComputedStyle(navigation).marginTop;
		const topRootMargin = Number.parseFloat(topMargin) + 1;

		const io = new IntersectionObserver(entries => {
			sticking = !entries[0]?.isIntersecting;
		}, {
			rootMargin: `-${topRootMargin}px 0px 0px 0px`,
			threshold: 1
		});

		io.observe(navigation);

		return {
			destroy: () => {
				io.disconnect();
			}
		};
	};
</script>

<nav class="navigation" class:sticking use:observe>
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
	@use "sass:color";

	.navigation {
		position: sticky;
		top: 2em;
		width: min(100% - 4em, 64ch + 64px);
		padding: 28px 32px;
		margin: 2em auto 0;
		isolation: isolate;

		&::before {
			position: absolute;
			inset: 0;
			z-index: -1;
			content: "";
			background-color: color.adjust(#eee, $alpha: -0.2);
			backdrop-filter: blur(12px);
			border: 1px solid #ddd;
			border-radius: 24px;
			box-shadow: 0 4px 8px color.adjust(#111, $alpha: -0.9);
			opacity: 0;
			transition: opacity 0.4s ease-in-out;
		}

		&.sticking::before {
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
