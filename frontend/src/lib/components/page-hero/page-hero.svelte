<header class="page-hero">
	<p class="page-hero-text">
		<a href="/">Hallo, Finanzen!</a> ist ein Blog, der sich aus der Sicht eines Privatanlegers mit der Schweizer Finanzlandschaft beschäftigt. Der Sinn und Zweck der Webseite ist es, diese Welt zu entwirren, und die Leser:innen anzuregen, sich mit ihren Finanzen auseinanderzusetzen.
	</p>
</header>

<style lang="scss">
	@use "$styles/color-palette";
	@use "$styles/spacing";

	.page-hero {
		display: grid;
		place-items: center;
		width: min(100%, spacing.$content-width);
		padding: spacing.$space-xl;
		margin: auto;
		background-color: color-palette.$seashell-cove;
		border-radius: spacing.$space-md;
	}

	.page-hero-text {
		font-size: 1.5em;
		text-align: center;
	}
</style>
