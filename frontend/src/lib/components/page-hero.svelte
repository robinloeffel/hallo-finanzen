<header class="page-hero">
	<p class="page-hero-text">
		<a href="/">Hallo, Finanzen!</a> ist ein Blog, der sich mit der Schweizer Finanzlandschaft beschäftigt. Dies, aus der Perspektive eines Privatanlegers. Der Sinn und Zweck der Webseite ist es, diese Welt zu entwirren, und die Leser:innen anzuregen, sich mit ihren Finanzen auseinanderzusetzen.
	</p>
</header>

<style lang="scss">
	@use "$styles/color-palette";

	.page-hero {
		display: grid;
		height: 80dvh;
		padding: 2em 3em;
		color: color-palette.$tame-white;
		background-color: color-palette.$black-pearl;
	}

	.page-hero-text {
		place-self: end;
		width: 75%;
		font-size: 1.5em;
		text-align: right;

		a {
			text-decoration-color: color-palette.$arctic-paradise;
		}
	}
</style>
