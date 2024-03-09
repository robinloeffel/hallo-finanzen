<script lang="ts">
	import { Footer, Navigation } from "$components";
	import "$styles/base.scss";

	export let data;

	const { pages } = data;

	const navigationItems = pages.filter(page => page.inNavigation);
</script>

<Navigation pages={navigationItems}/>
<slot/>
<Footer {pages}/>
