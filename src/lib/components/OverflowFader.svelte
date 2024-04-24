<div class="overflow-fader">
  <slot />
</div>

<style>
  .overflow-fader {
    position: relative;
    margin-right: calc(-5% - 2px);
    padding-right: 5%;
  }

  .overflow-fader :global(> div) {
    overflow: scroll;
    scrollbar-width: none;
  }

  .overflow-fader :global(> div::-webkit-scrollbar) {
    display: none;
  }

  .overflow-fader::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 2rem;
    height: 100%;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), #f8f9fa);
  }
</style>
