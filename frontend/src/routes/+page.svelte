<script>
  export let data;

  const { posts } = data;
</script>

<h1>what up man</h1>
{#if posts}
  <ul>
    {#each posts as post}
      <li>
        <a href={`/posts/${post.slug.current}`}>{ post.title }</a>
      </li>
    {/each}
  </ul>
{/if}
