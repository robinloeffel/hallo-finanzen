<script lang="ts">
	import { dev } from "$app/environment";
	import { Footer, Navigation } from "$components";
	import "$styles/base.scss";
	import type { LayoutServerData } from "./$types";

	export let data: LayoutServerData;

	const { pages } = data;

	const navigationItems = pages.filter(page => page.inNavigation);
</script>

<svelte:head>
	{#if !dev}
		<script
			data-domains="hallo-finanzen.ch"
			data-website-id="24486b1e-aa24-4dd4-8878-6282b9d83c25"
			defer
			src="/stats/script.js"
		></script>
	{/if}
</svelte:head>

<Navigation pages={navigationItems}/>
<slot/>
<Footer {pages}/>
