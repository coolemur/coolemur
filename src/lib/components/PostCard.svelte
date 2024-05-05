<script>
  import CardBody from './ui/ThreeDCardEffect/CardBody.svelte';
  import CardContainer from './ui/ThreeDCardEffect/CardContainer.svelte';

  import imageNotFound from '$lib/assets/blog/img-404.webp?enhanced';
  import { scale } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { getImage } from '$lib/utils/images';

  /** @type {PostCardProps} */
  let { date, title, description, href, slug, image } = $props();

  let src = $derived(getImage(image, 'sm') || imageNotFound);
</script>

<CardContainer>
  <CardBody>
    <a
      class="group flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-2xl"
      {href}
      transition:scale={{ duration: 400, delay: 0, opacity: 0.5, start: 0, easing: quintOut }}
    >
      <enhanced:img
        class="aspect-[310/280] object-cover"
        alt={`Illustration: ${title}` || '???'}
        {src}
        loading="lazy"
      />
      <div class="flex flex-col p-6 pt-4 pb-12">
        <span class="font-roboto self-end text-sm text-[#6C757D]/40">{date}</span>
        <h3
          class="text-dark-gray group-hover:text-highlight-dark mt-6 text-balance text-2xl font-bold transition-colors ease-in"
        >
          {title || '???'}
        </h3>

        <p class="mt-2 text-balance text-lg text-[#6C757D]">
          {description || '???'}
        </p>
      </div>
    </a>
  </CardBody>
</CardContainer>
