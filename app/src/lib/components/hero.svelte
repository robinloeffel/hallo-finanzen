<header class="hero">
  <p class="hero-text">
    <a href="/">Hallo, Finanzen!</a> ist ein Ratgeber, der sich mit der Schweizer Finanzlandschaft beschäftigt. Das Ziel ist, diese Welt zu entwirren und die Leser:innen anzuregen, sich mit ihren Finanzen auseinanderzusetzen.
  </p>
</header>

<style lang="scss">
  @use "$styles/space-scale";
  @use "$styles/color-palette";
  @use "$styles/type-scale";
  @use "$styles/variables";
  @use "$styles/media-queries";

  .hero {
    position: relative;
    display: grid;
    grid-template-columns: 1fr min(100% - space-scale.$size-64, variables.$content-width) 1fr;
    place-items: center;
    min-height: 100vh;
    background-image:
      linear-gradient(
        to top right,
        color-palette.$dreamless-sleep,
        color-palette.$black-pearl
      );

    &::before {
      position: absolute;
      inset: auto 0 0;
      height: space-scale.$size-4 / 2;
      content: "";
      background-color: color-palette.$curious-blue;
    }
  }

  .hero-text {
    grid-column: 2 / 3;
    font-size: type-scale.$size-30;
    hyphens: auto;
  }
</style>
