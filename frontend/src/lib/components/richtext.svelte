<div class="richtext">
	<slot />
</div>

<style lang="scss">
	@use "$styles/spacing";

	:global(.richtext > * + *) {
		margin-top: spacing.$space-md;
	}
</style>
