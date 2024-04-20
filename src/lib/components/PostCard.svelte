<script>
  import CardBody from './ui/ThreeDCardEffect/CardBody.svelte';
  import CardContainer from './ui/ThreeDCardEffect/CardContainer.svelte';

  import imageNotFound from '$lib/assets/blog/img-404.webp?enhanced';
  import { getImage } from '$lib/utils/blog';
  import { scale } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  /** @type {PostCardProps} */
  let { date, title, description, href, slug } = $props();

  let image = $derived(getImage(slug) || imageNotFound);
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
        src={image}
        loading="lazy"
        sizes="(min-width:1920px) 310px, (min-width:1080px) 310px, (min-width:768px) 310px"
      />
      <div class="mt-4 pt-4 px-5 pb-12">
        <span class="font-roboto text-sm text-[#6C757D]">{date}</span>
        <h3
          class="text-dark-gray group-hover:text-highlight mt-3 text-2xl font-bold transition-colors ease-in"
        >
          {title || '???'}
        </h3>

        <p class="mt-3 text-lg text-[#6C757D]">
          {description || '???'}
        </p>
      </div>
    </a>
  </CardBody>
</CardContainer>
