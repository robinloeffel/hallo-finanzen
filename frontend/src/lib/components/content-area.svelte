<main class="content-area">
	<slot/>
</main>

<style lang="scss">
	@use "$styles/spacing";

	.content-area {
		width: min(100% - spacing.$space-xl, spacing.$content-width);
		margin: spacing.$space-xl auto;
	}
</style>
