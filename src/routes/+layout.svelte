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
    href="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/themes/prism.min.css"
    integrity="sha512-/mZ1FHPkg6EKcxo0fKXF51ak6Cr2ocgDi5ytaTBjsQZIH/RNs6GF6+oId/vPe3eJB836T36nXwVh/WBl/cWT4w=="
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
