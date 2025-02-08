<script lang="ts">
	import { Image } from "$components/portable-text";
	import { PortableText, type InputValue, type PortableTextComponents } from "@portabletext/svelte";

	interface Props {
		value: InputValue;
	}

	const { value }: Props = $props();

	const components: PortableTextComponents = {
		types: {
			image: Image
		}
	};
</script>

<PortableText {components} {value} />
