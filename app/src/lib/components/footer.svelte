<script lang="ts">
  import type { GetAllPagesQueryResult } from "$cms/types";

  interface Props {
    pages: GetAllPagesQueryResult;
  }

  const { pages }: Props = $props();
</script>

<footer class="footer">
  <ul class="sitemap">
    <li class="sitemap-item">
      <a href="/">Home</a>
    </li>
    <li class="sitemap-item">
      <a href="/artikel">Alle Artikel</a>
    </li>
    {#each pages as page (page._id)}
      <li class="sitemap-item">
        <a href={`/${page.slug?.current}`}>{page.title}</a>
      </li>
    {/each}
  </ul>
  <span class="copyright">
    &copy; Hallo, Finanzen! 2025
  </span>
</footer>

<style lang="scss">
  @use "$styles/space-scale";
  @use "$styles/type-scale";
  @use "$styles/variables";
  @use "$styles/color-palette";

  .footer {
    position: relative;
    display: grid;
    grid-template-columns: 1fr min(100% - space-scale.$size-64, variables.$content-width) 1fr;
    gap: space-scale.$size-32;
    place-items: center;
    padding: space-scale.$size-96 0 space-scale.$size-64;
    background-image:
      linear-gradient(
        to bottom left,
        color-palette.$dreamless-sleep,
        color-palette.$black-pearl
      );

    &::before {
      position: absolute;
      inset: 0 0 auto;
      height: space-scale.$size-4 / 2;
      content: "";
      background-color: color-palette.$curious-blue;
    }
  }

  .sitemap {
    display: flex;
    flex-wrap: wrap;
    grid-column: 2/3;
    justify-content: center;
    list-style: none;
  }

  .sitemap-item {
    display: inline-flex;

    &:not(:last-child)::after {
      margin: 0 space-scale.$size-8;
      content: "—";
    }
  }

  .copyright {
    grid-column: 2/3;
    font-size: type-scale.$size-16;
  }
</style>
