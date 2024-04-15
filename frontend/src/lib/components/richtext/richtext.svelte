<div class="richtext">
	<slot />
</div>

<style lang="scss">
	@use "$styles/space-scale";

	:global(.richtext > * + *) {
		margin-top: space-scale.$size-16;
	}
</style>
