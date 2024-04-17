<script>
  import { page } from '$app/stores';

  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import './styles.css';
</script>

<svelte:head>
  <title>{$page.data.title}</title>
</svelte:head>
<div class="app flex min-h-screen flex-col">
  <Header />

  <main class="bg-paper-light flex-1">
    <slot />
  </main>

  <Footer />
</div>
