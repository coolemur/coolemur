<script>
  import WavyBackground from '$lib/components/ui/WavyBackground.svelte';

  const { title } = $$props;
</script>

<section class="relative flex h-[400px] justify-center bg-[#212529] text-white">
  <WavyBackground />
</section>

<section
  class="text-dark-gray bg-paper-light relative flex justify-center py-[50px] pt-[100px] md:py-[100px]"
>
  <div class="w-full max-w-[90%]">
    <h1
      class="bg-paper-light absolute top-0 max-w-[800px] -translate-y-16 rounded-t-lg p-8 pr-16 text-4xl font-bold leading-tight text-white shadow-[0px_40px_15px_-25px_rgba(0,50,150,0.4)_inset] [text-shadow:_2px_2px_10px_rgb(255_10_40_/_90%)] lg:text-6xl"
    >
      {title}
    </h1>
  </div>
</section>

<slot />
