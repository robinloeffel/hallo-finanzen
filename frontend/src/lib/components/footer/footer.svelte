<script lang="ts">
	import { page } from "$app/stores";
	import type { AllPages } from "$graphql";

	export let pages: AllPages;

	$: breadcrumbs = $page.url.pathname.split("/").filter(Boolean);
</script>

<footer class="footer">
	<div class="breadcrumbs">
		{#each breadcrumbs as crumb, index}
			{crumb} {index}
		{/each}
	</div>
	<pre>{JSON.stringify(pages, null, 2)}</pre>
	<pre>{JSON.stringify(breadcrumbs, null, 2)}</pre>
</footer>

<style lang="scss">
	.footer {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
	}
</style>
