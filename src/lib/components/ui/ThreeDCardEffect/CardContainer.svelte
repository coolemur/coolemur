<script>
  /** @type {HTMLDivElement} */
  let containerRef;

  /**
   * @param {MouseEvent} e - The mouse event object
   */
  const handleMouseMove = (e) => {
    if (!containerRef) return;
    const { left, top, width, height } = containerRef.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseLeave = () => {
    containerRef.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };
</script>

<div class="flex items-center justify-center" style="perspective: 1000px;">
  <div
    bind:this={containerRef}
    on:mousemove={handleMouseMove}
    on:mouseleave={handleMouseLeave}
    class="relative flex h-full items-center justify-center transition-all duration-200 ease-linear"
    style="transform-style: preserve-3d;"
    role="button"
    aria-label="Card Container"
    tabindex="0"
  >
    <slot />
  </div>
</div>
