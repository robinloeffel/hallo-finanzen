<script lang="ts">
	import type { GetAllPagesQueryResult } from "$cms/types";
	import { Icon } from "$components";

	interface Props {
		pages: GetAllPagesQueryResult;
	}

	const { pages }: Props = $props();

	let isHidden = $state(false);
	let isOpen = $state(false);
	let oldScrollY = $state(0);
	let navigation: HTMLElement;

	const close = () => {
		isOpen = false;
	};

	const open = () => {
		isOpen = true;
	};

	const handleWindowScroll = () => {
		isHidden = window.scrollY > 100 && oldScrollY <= window.scrollY;
		oldScrollY = window.scrollY;
	};

	const handleWindowClick = ({ target }: MouseEvent) => {
		if (
			(target instanceof HTMLAnchorElement && navigation.contains(target) && isOpen)
			|| (target instanceof HTMLElement && !navigation.contains(target) && isOpen)
		) {
			close();
		}
	};

	const handleWindowKeydown = ({ key }: KeyboardEvent) => {
		if (key === "Escape" && isOpen) {
			close();
		}
	};
</script>

<svelte:window
	onclick={handleWindowClick}
	onkeydown={handleWindowKeydown}
	onscroll={handleWindowScroll}
/>

<nav
	bind:this={navigation}
	class="navigation"
	class:hidden={isHidden}
	class:open={isOpen}
>
	<ul class="navigation-bar">
		<li class="navigation-item">
			<a class="navigation-link" href="/">Hallo, Finanzen!</a>
		</li>
		<li class="navigation-item">
			<button class="navigation-button" class:hidden={!isOpen} onclick={close} type="button">
				<Icon name="xmark" />
			</button>
			<button class="navigation-button" class:hidden={isOpen} onclick={open} type="button">
				<Icon name="menu" />
			</button>
		</li>
	</ul>
	<div class="navigation-expando">
		<ul class="navigation-list">
			<li class="navigation-item">
				<a class="navigation-link" href="/artikel">Alle Artikel</a>
			</li>
			{#each pages as page (page._id)}
				{#if page.slug?.current && page.title}
					<li class="navigation-item">
						<a class="navigation-link" href={`/${page.slug.current}`}>{page.title}</a>
					</li>
				{/if}
			{/each}
		</ul>
	</div>
</nav>

<style lang="scss">
	@use "$styles/color-palette";
	@use "$styles/space-scale";
	@use "$styles/variables";

	.navigation {
		position: fixed;
		inset: space-scale.$size-32 0 auto;
		z-index: 1;
		width: min(100% - space-scale.$size-64, variables.$content-width / 2);
		padding: space-scale.$size-32;
		margin: auto;
		background-color: color-palette.$dreamless-sleep-90;
		backdrop-filter: blur(space-scale.$size-32);
		border-radius: space-scale.$size-16;
		transition: translate 0.4s;

		&.hidden {
			translate: 0 calc(-100% - space-scale.$size-32);
		}
	}

	.navigation-bar {
		display: flex;
		gap: space-scale.$size-16;
		align-items: center;
		justify-content: space-between;
		list-style: none;
	}

	.navigation-expando {
		display: grid;
		grid-template-rows: 0fr;
		transition: grid-template-rows 0.4s;

		.open & {
			grid-template-rows: 1fr;
		}
	}

	.navigation-list {
		display: grid;
		gap: space-scale.$size-8;
		overflow: hidden;

		> :first-child {
			margin-top: space-scale.$size-32;
		}
	}

	.navigation-item:has(.navigation-button) {
		display: inline-grid;
	}

	.navigation-button {
		display: inline-grid;
		grid-area: 1 / 1;
		color: inherit;
		cursor: pointer;
		background: 0;
		border: 0;
		transition: scale 0.4s, visibility 0.4s;

		&.hidden {
			pointer-events: none;
			visibility: hidden;
			scale: 0;
		}
	}
</style>
