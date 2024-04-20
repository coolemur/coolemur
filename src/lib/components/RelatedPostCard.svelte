<script>
  import CardBody from './ui/ThreeDCardEffect/CardBody.svelte';
  import CardContainer from './ui/ThreeDCardEffect/CardContainer.svelte';

  import imageNotFound from '$lib/assets/blog/img-404.webp?enhanced';
  import { getImage } from '$lib/utils/blog';

  /** @type {PostCardProps} */
  let { date, title, description, href, slug } = $props();

  let image = $derived(getImage(slug) || imageNotFound);
</script>

<CardContainer>
  <CardBody>
    <a class="group flex flex-col justify-end overflow-hidden rounded-lg bg-white" {href}>
      <enhanced:img
        class="relative aspect-[420/350] object-cover"
        alt={`Illustration: ${title}` || '???'}
        src={image}
        loading="lazy"
        sizes="(min-width:1920px) 471px, (min-width:1080px) 471px, (min-width:768px) 320px"
      />
      <div
        class="after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 after:bg-black/50 after:content-['']"
      ></div>
      <div class="absolute py-10 px-5">
        <span class="font-roboto text-sm">{date}</span>
        <h3 class="group-hover:text-highlight mt-3 text-2xl font-bold transition-colors ease-in">
          {title || '???'}
        </h3>

        <p class="text-lg">
          {description || '???'}
        </p>
      </div>
    </a>
  </CardBody>
</CardContainer>
