<script lang="ts">
	import { Navigation } from "$components";
	import "$styles/base.scss";
	import "@fontsource-variable/inter";

	export let data;

	const { pages } = data;

	const navigationItems = pages.filter(page => page.inNavigation);
</script>

<Navigation pages={navigationItems}/>
<slot/>
