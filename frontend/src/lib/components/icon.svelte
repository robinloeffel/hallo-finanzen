<script lang="ts" module>
	import menu from "iconoir/icons/menu.svg?raw";
	import xmark from "iconoir/icons/xmark.svg?raw";

	const map = {
		menu,
		xmark
	} as const;

	interface Props {
		name: keyof typeof map;
		color?: string;
	}
</script>

<script lang="ts">
	const { name, color }: Props = $props();
</script>

<i style:--color={color} class="icon">
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html map[name]}
</i>

<style lang="scss">
	.icon {
		display: inline-grid;
		color: var(--color, inherit);
	}
</style>
