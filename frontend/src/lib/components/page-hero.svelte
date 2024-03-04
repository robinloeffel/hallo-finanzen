<header class="page-hero">
	<p class="page-hero-text">
		<a href="/">Hallo, Finanzen!</a> ist ein Blog, der sich mit der Schweizer Finanzlandschaft beschäftigt. Dies, aus der Perspektive eines Privatanlegers. Der Sinn und Zweck der Webseite ist es, diese Welt zu entwirren, und die Leser:innen anzuregen, sich mit ihren Finanzen auseinanderzusetzen.
	</p>
</header>

<style lang="scss">
	@use "$styles/color-palette";
	@use "$styles/spacing";

	.page-hero {
		display: grid;
		height: calc(100dvh - spacing.$space-lg);
		padding: spacing.$space-xl * 0.75 spacing.$space-xl;
		margin: 0 spacing.$space-lg spacing.$space-lg;
		background-color: color-palette.$super-white;
		border-radius: 0 0 spacing.$space-md spacing.$space-md;
	}

	.page-hero-text {
		place-self: end;
		width: 75%;
		font-size: larger;
		text-align: right;
	}
</style>
