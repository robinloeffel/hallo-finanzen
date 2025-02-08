<script lang="ts">
	import "$styles/base.scss";

	import { dev } from "$app/environment";
	import { page } from "$app/state";
	import { Footer, Navigation } from "$components";
	import type { LayoutProps } from "./$types";

	const { data, children }: LayoutProps = $props();
	const pages = $derived(data.pages);
	const navigationItems = $derived(pages.filter(cmsPage => cmsPage.inNavigation));
</script>

<svelte:head>
	<link href={`https://hallo-finanzen.ch${page.url.pathname}`} rel="canonical" />
	{#if !dev}
		<script
			data-domains="hallo-finanzen.ch"
			data-website-id="24486b1e-aa24-4dd4-8878-6282b9d83c25"
			defer
			src="/stats/script.js"
		></script>
	{/if}
</svelte:head>

<Navigation pages={navigationItems} />
{@render children()}
<Footer {pages} />
