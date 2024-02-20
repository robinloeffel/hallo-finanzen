<div class="richtext">
	<slot />
</div>

<style lang="scss">
	:global(.richtext > * + *) {
		margin-top: 1em;
	}
</style>
