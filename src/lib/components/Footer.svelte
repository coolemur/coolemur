<script>
  import Email from '$lib/components/Email.svelte';
</script>

<footer class="relative flex justify-center overflow-hidden bg-black/90 py-10 text-white md:py-28">
  <div
    class="absolute top-0 left-0 flex h-full w-full animate-[ping_10s_ease-in-out_infinite_alternate] items-center justify-center"
  >
    <svg
      class="min-w-[100%] animate-[spin_40s_ease-in-out_infinite_alternate] blur-2xl"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
    >
      <defs>
        <linearGradient id="a" x1="0" x2="1" y1="1" y2="0">
          <stop offset="0%" stop-color="red" />
          <stop offset="100%" stop-color="blue" />
        </linearGradient>
      </defs>
      <path
        fill="url(#a)"
        d="M14.4-27.1c4.4 4.7 8.2 8.3 12.8 12.6 4.6 4.3 9.9 9.4 7.8 13.3-2.1 3.9-11.6 6.5-15 13-3.3 6.4-.5 16.6-2.8 21.3-2.3 4.6-9.8 3.7-16 1.7-6.3-2-11.4-5.2-16.8-8.1-5.4-2.8-11.1-5.4-14.1-9.8-2.9-4.4-2.9-10.6-.3-15.4 2.6-4.7 8-7.9 11.9-10.5 4-2.5 6.7-4.4 9.5-10 2.7-5.7 5.7-15.3 9.6-17 4-1.8 9 4.1 13.4 8.9Z"
        style="transition:all .3s ease 0s"
        transform="translate(50 50)"
      />
    </svg>
  </div>

  <div
    class="relative flex w-full max-w-[90%] flex-col justify-between gap-y-8 pr-[20%] lg:flex-row xl:pr-[30%]"
  >
    <div class="mr-8 flex flex-col gap-1 md:gap-3">
      <span class="mb-2 text-xl font-bold">Explore</span>
      <a class="hover:text-highlight cursor-pointer transition-colors" href="/partners">Partners</a>
      <a class="hover:text-highlight cursor-pointer transition-colors" href="/job-opportunities"
        >Job Opportunities</a
      >
      <a class="hover:text-highlight cursor-pointer transition-colors" href="/advertise"
        >Advertise</a
      >
    </div>
    <div class="mr-8 flex flex-col gap-1 md:gap-3">
      <span class="mb-2 text-xl font-bold">Headquarter</span>
      <span>123 Electric Avenue,</span>
      <span>CyberTown, Neo-Genesis 50789</span>
      <span>Futuristica</span>
    </div>
    <div class="mr-8 flex flex-col gap-1 md:gap-3">
      <span class="mb-2 text-xl font-bold">Contact the Publisher</span>
      <Email />
    </div>
  </div>
</footer>
