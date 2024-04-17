<script>
  import { page } from '$app/stores';
</script>

{#if $page.status === 404}
  <enhanced:img
    class="h-full w-full object-cover"
    alt="404: animated creature with a magnifying glass"
    src="/src/lib/images/404.webp"
  />
{:else}
  <p>Sorry, we couldn't find the page you were looking for.</p>
{/if}
