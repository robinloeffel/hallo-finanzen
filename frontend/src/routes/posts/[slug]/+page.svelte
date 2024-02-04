<script lang="ts">
  import { PortableText } from "@portabletext/svelte";

  export let data;

  const { post } = data;
</script>

<pre>{JSON.stringify(post, null, 2)}</pre>

<h1>{post.title}</h1>

<PortableText value={post.body} />

<a href="/">go back</a>
