<script>
  import imageNotFound from '$lib/assets/blog/img-404-wide.webp?enhanced';
  import { getImage } from '$lib/utils/images';
  import RelatedPostCard from '$lib/components/RelatedPostCard.svelte';

  /** @type {import('./$types').PageData} */
  let { data } = $props();

  let src = $derived(getImage(data.meta.image, 'lg') || imageNotFound);
</script>

<section class="relative flex justify-center overflow-hidden bg-[#212529] pt-28 pb-20 text-white">
  <div
    class="absolute top-0 h-full w-full self-center object-cover after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 after:bg-black/50 after:content-['']"
  >
    <enhanced:img class="h-full w-full object-cover" alt="Blog Image1" {src} loading="lazy" />
    />
  </div>
  <div class="relative flex max-w-[33rem] flex-col items-center gap-4">
    <a
      href="/{data.meta.category}"
      class="hover:text-highlight font-roboto rounded-lg bg-white/15 py-1 px-3 text-sm font-bold uppercase transition-colors"
      >{data.meta.category}</a
    >
    <h1 class="mt-3 text-center text-3xl font-bold text-white/90">{data.meta.title}</h1>
    <p class="text-paper text-center text-lg text-white/90">{data.meta.description}</p>
    <span class="self-right mt-6 text-sm font-bold text-white/30">By Coolemur</span>
  </div>
</section>

<article class="relative flex flex-col items-center py-24">
  <div class="grid w-full max-w-[90%] grid-cols-1 lg:grid-cols-[0.2fr_0.6fr]">
    <div class="mb-8 flex items-start justify-start lg:justify-end">
      <span
        class="font-roboto caption relative top-0 mt-4 mr-28 after:absolute after:top-1/2 after:-right-2 after:h-[1px] after:w-10 after:-translate-y-1/2 after:translate-x-[100%] after:bg-[#C4C4C4] after:content-['']"
        >{data.meta.date}</span
      >
    </div>
    <div class="content">
      <svelte:component this={data.content} />
    </div>
  </div>
  <a
    class="group group hover:bg-secondary bg-secondary-dark mt-16 flex transform-gpu transform-gpu cursor-pointer items-center gap-3 rounded-lg py-3 px-8 text-xl font-bold text-white shadow-lg transition hover:scale-105 hover:shadow-xl"
    href="/"
  >
    <svg
      class="h-auto w-8 -translate-y-1 transform-gpu transition-transform group-hover:-translate-x-1"
      width="800"
      height="800"
      viewBox="0 0 26.676 26.676"
    >
      <path
        d="M26.105 21.891a.568.568 0 0 1-.529-.346c-.066-.156-1.716-3.857-7.885-4.59-1.285-.156-2.824-.236-4.693-.25v4.613a.574.574 0 0 1-.304.508.577.577 0 0 1-.588-.033L.254 13.815a.573.573 0 0 1 0-.953l11.857-7.979a.563.563 0 0 1 .588-.029c.19.102.303.295.303.502v4.293c2.578.336 13.674 2.33 13.674 11.674a.574.574 0 0 1-.459.562c-.037.006-.076.006-.112.006z"
        fill="currentColor"
      />
    </svg>
    <span>Back</span>
  </a>
</article>

{#if data.relatedPosts.length > 0}
  <section class="bg-paper flex justify-center py-28 text-sm text-white">
    <div class="w-full max-w-[90%]">
      <h2 class="text-dark-gray text-4xl font-bold">Related Posts</h2>

      <div class="mt-16 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {#each data.relatedPosts as { date, title, description, category, slug, image }}
          <RelatedPostCard
            {date}
            {title}
            {description}
            href={`/blog/${category}/${slug}`}
            {slug}
            {image}
          />
        {/each}
      </div>
    </div>
  </section>
{/if}

<style>
  :global(article h1, article h2, article h3, article h4, article h5, article h6) {
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    padding: 0;
    font-weight: 700;
    text-wrap: balance;
  }

  :global(
      article h1:first-of-type,
      article h2:first-of-type,
      article h3:first-of-type,
      article h4:first-of-type,
      article h5:first-of-type,
      article h6:first-of-type
    ) {
    margin-top: 0;
  }

  :global(article h1) {
    font-family: 'Lora';
    font-weight: 700;
    font-size: 2.25rem;
    margin-bottom: 1.75rem;
  }

  :global(article h2) {
    font-family: 'Lora';
    font-weight: 700;
    font-size: 2.25rem;
    margin-bottom: 1.5rem;
  }

  :global(article h3) {
    font-family: 'Lora';
    font-weight: 700;
    font-size: 1.125rem;
    margin-bottom: 1.25rem;
  }

  :global(article .caption) {
    font-weight: 700;
    font-size: 0.75rem;
  }

  :global(article .content p) {
    font-family: 'Lora';
    font-weight: 400;
    font-size: 0.875rem;
    margin-bottom: 1.5rem;
  }

  :global(article .content > *:last-child) {
    margin-bottom: 0;
  }

  :global(article .content a) {
    position: relative;
    color: #d4a373;
    text-decoration: none;
  }

  :global(article a:after) {
    position: absolute;
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    left: 0;
    bottom: -2px;
    background: #d4a373;
    transition: transform 0.3s;
    transform: scaleX(0);
    transform-origin: left;
  }

  :global(article .content a:hover:after) {
    transform: scaleX(1);
  }

  :global(article ul) {
    list-style-type: disc;
  }

  :global(article ol) {
    list-style-type: decimal;
  }

  :global(article ol),
  :global(article ul) {
    padding-left: 1.5rem;
    margin-bottom: 1rem;
  }

  :global(article a:has(img)) {
    display: block;
    max-width: fit-content;
    margin-bottom: 1.5rem;
  }

  :global(article a:has(img)::after) {
    content: none;
  }

  :global(article a:has(img):hover) {
    display: block;
    outline: 2px solid var(--color-highlight);
    max-width: fit-content;

    transition: outline 0.1s ease-out;
  }

  :global(article .content) {
    overflow-wrap: break-word;
  }

  :global(article .content pre) {
    padding: 0;
    margin: 0;
    overflow: hidden;
    white-space: pre-wrap;
    margin-bottom: 1.5rem;
  }

  :global(article .content pre code) {
    padding: 1rem 2rem;
    background-color: var(--color-white);
    color: var(--color-dark-gray);
    white-space: pre-wrap;
    word-wrap: break-word;
    overflow-wrap: break-word;
    font-family: monospace;
  }

  :global(article pre[class*='language-']) {
    border-radius: 0.5rem;
    border-left: 2px solid var(--color-highlight-dark);
    box-shadow:
      -1px 0 0 0 var(--color-highlight),
      0 0 0 1px #dfdfdf;
  }

  /* Contrast colors for accessibility  */

  :global(article .content pre code span.token.comment) {
    color: #63717f;
  }

  :global(article .content pre code span.token.attr-value),
  :global(article .content pre code span.token.keyword),
  :global(article .content pre code span.token.class-name) {
    color: #157ea1;
  }

  :global(article .content pre code span.token.attr-name),
  :global(article .content pre code span.token.string),
  :global(article .content pre code span.token.function) {
    color: #278408;
  }

  :global(article .content pre code code.language-tsx) {
    color: var(--color-black);
  }

  /* Code fade to indicate that there is something to scroll */

  :global(article .content pre code:after) {
    pointer-events: none;
    content: '';
    display: block;
    width: 100%;
    height: 4rem;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 90%);
    position: absolute;
    bottom: 0;
    left: 0;
  }
</style>
