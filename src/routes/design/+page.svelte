<script>
  import InnerLayout from '$lib/layouts/InnerLayout.svelte';
  import Color from './color.svelte';
</script>

<InnerLayout title="Design">
  <section>
    <h2 class="font-lora text-dark-gray text-4xl">Custom colors</h2>

    <div class="mt-8 grid auto-rows-[100px] gap-4">
      <Color name="highlight" />
      <Color name="highlight-dark" />
      <Color name="paper" />
      <Color name="paper-light" />
      <Color name="dark-gray" />
      <Color name="secondary" />
      <Color name="secondary-dark" />
    </div>

    <h2 class="font-lora text-dark-gray mt-32 text-4xl">Font families</h2>

    <div class="mt-8 grid gap-4">
      <div class="font-lora text-4xl text-black">Lora</div>
      <div class="font-roboto text-4xl text-black">Roboto</div>
    </div>
  </section>
</InnerLayout>
