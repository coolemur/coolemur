<script>
  import PostCard from '$lib/components/PostCard.svelte';
  import WavyBackground from '$lib/components/ui/WavyBackground.svelte';
  import { goto } from '$app/navigation';

  /** @type {import('./$types').PageData} */
  export let data;

  let uniqueCategories = new Set();
  data.categories.forEach((c) => uniqueCategories.add(c));

  let show = 8;
  function handleShowMore() {
    goto(`${data.pathname}?show=${show}`, { noScroll: true });
    show += 4;
  }

  function handleShowLess() {
    show = 4;
    goto(`${data.pathname}?show=${show}`, { noScroll: true });
    show = 8;
  }

  /**
   * Toggles the display of posts based on user interaction.
   * @param {boolean} toToggle - Determines whether to show more or less posts.
   */
  function handleShow(toToggle) {
    if (toToggle) {
      handleShowMore();
    } else {
      handleShowLess();
    }
  }
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
      Crafting Digital Dreams
    </h1>
    <h2 class="text-4xl font-bold">Topics</h2>
    <div class="text-dark-gray mt-8 flex gap-5">
      <a
        class={`${!data.currentCategory ? 'text-highlight after:bg-highlight cursor-default after:content-none' : 'after:bg-dark-gray'} relative text-xl first-letter:uppercase after:absolute after:bottom-0  after:left-0 after:h-[2px] after:w-full after:scale-x-[0] after:transition-transform after:content-[''] hover:after:scale-x-[1]`}
        href="/"
        data-sveltekit-noscroll>All</a
      >

      {#each uniqueCategories as category}
        <a
          class={`${data.currentCategory === category ? 'text-highlight after:bg-highlight cursor-default after:content-none' : 'after:bg-dark-gray'} relative text-xl first-letter:uppercase after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:scale-x-[0] after:transition-transform after:content-[''] hover:after:scale-x-[1]`}
          href={`/${category}`}
          data-sveltekit-noscroll>{category}</a
        >
      {/each}
    </div>

    <div class="mt-8 grid grid-cols-1 gap-x-5 gap-y-12 sm:grid-cols-2 xl:grid-cols-4">
      {#each data.posts as { date, title, description, category, slug }}
        <PostCard {date} {title} {description} href={`/blog/${category}/${slug}`} {slug} />
      {/each}
    </div>

    <div class="mt-16 flex justify-center">
      <button
        class="group bg-highlight hover:bg-highlight-dark flex transform-gpu cursor-pointer items-center gap-3 rounded-lg py-3 px-8 text-xl font-bold text-white shadow-lg transition hover:scale-105 hover:shadow-xl"
        on:click={() => handleShow(data.showMore)}
      >
        {#if data.showMore}
          <span>Show More</span>
        {:else}
          <span>Show Less</span>
        {/if}

        <svg
          class="h-auto w-4 origin-center transition-transform duration-200 {data.showMore
            ? 'rotate-0 group-hover:translate-y-0.5 '
            : 'rotate-180 group-hover:-translate-y-0.5'}"
          width="800"
          height="800"
          viewBox="0 -4.5 20 20"
        >
          <path
            fill="currentColor"
            d="M.292.366c-.39.405-.39 1.06 0 1.464l8.264 8.563c.78.81 2.047.81 2.827 0l8.325-8.625c.385-.4.39-1.048.01-1.454a.976.976 0 0 0-1.425-.011l-7.617 7.893a.975.975 0 0 1-1.414 0L1.705.366a.974.974 0 0 0-1.413 0"
          />
        </svg>
      </button>
    </div>
  </div>
</section>
