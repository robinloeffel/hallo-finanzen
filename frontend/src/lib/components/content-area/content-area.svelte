<main class="content-area">
	<slot/>
</main>

<style lang="scss">
	@use "$styles/space-scale";
	@use "$styles/variables";

	.content-area {
		width: min(100% - space-scale.$size-64, variables.$content-width);
		margin: space-scale.$size-64 auto space-scale.$size-96;
	}
</style>
