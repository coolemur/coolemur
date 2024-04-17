<script>
  import { page } from '$app/stores';

  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import './styles.css';
</script>

<svelte:head>
  <title>{$page.data.title}</title>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/themes/prism-coy.min.css"
    integrity="sha512-XcB0I04SuOVkb6ewfVz0qMhU5QADIiFBFxPRRNWZUANF1W5onx8GlbHYYIivw3gXrTuZfu+1gAG8HvvKQG3oGA=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
</svelte:head>
<div class="app flex min-h-screen flex-col">
  <Header />

  <main class="bg-paper-light flex-1">
    <slot />
  </main>

  <Footer />
</div>
