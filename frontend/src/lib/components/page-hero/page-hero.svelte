<header class="page-hero">
	<p class="page-hero-text">
		<a href="/">Hallo, Finanzen!</a> ist ein Blog, der sich aus der Sicht eines Privatanlegers mit der Schweizer Finanzlandschaft beschäftigt. Sinn und Zweck der Webseite ist es, diese Welt zu entwirren und die Leser:innen anzuregen, sich mit ihren Finanzen auseinanderzusetzen.
	</p>
</header>

<style lang="scss">
	@use "$styles/color-palette";
	@use "$styles/space-scale";
	@use "$styles/type-scale";
	@use "$styles/variables";

	.page-hero {
		display: grid;
		place-items: center;
		width: min(100%, variables.$content-width);
		margin: space-scale.$size-96 auto space-scale.$size-128;
	}

	.page-hero-text {
		font-size: type-scale.$size-30;
	}
</style>
