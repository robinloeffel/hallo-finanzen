<script>
  export let data;

  const { pets } = data;
</script>

{#if pets}
  <ul>
    {#each pets as pet}
      <li>{pet.name}</li>
    {/each}
  </ul>
{/if}
