<script>
  /** @type {HTMLDivElement} */
  let containerRef;

  let angle = 0; // This will serve as the time variable for sin/cos calculations
  /** @type {number | null} */
  let animationFrameId = null;

  /**
   * Animates the card with sinusoidal movement when hovered.
   */
  const animate = () => {
    if (!containerRef) return;

    // Increment the angle for the next frame more slowly
    angle += 0.005; // Reduced from 0.05 to 0.01 to slow down the animation

    // Calculate rotation angles based on sine and cosine
    const x = Math.sin(angle) * 10; // Multiplier 10 determines the range of rotation
    const y = Math.cos(angle) * 10;

    // Apply the rotation
    containerRef.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;

    // Request the next frame of the animation
    animationFrameId = requestAnimationFrame(animate);
  };

  /**
   * @param {MouseEvent} e - The mouse event object
   */
  const handleMouseMove = (e) => {
    if (!containerRef) return;

    const { left, top, width, height } = containerRef.getBoundingClientRect();
    const mouseX = (e.clientX - left - width / 2) / 25;
    const mouseY = (e.clientY - top - height / 2) / 25;

    containerRef.style.transform = `rotateY(${mouseX}deg) rotateX(${mouseY}deg)`;
  };

  const handleMouseEnter = () => {
    // Cancel the previous animation frame request
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
    requestAnimationFrame(animate);
  };

  const handleMouseLeave = () => {
    // Reset the transformation and cancel the animation frame
    containerRef.style.transform = 'rotateY(0deg) rotateX(0deg)';
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
    angle = 0; // Reset the angle
  };
</script>

<div class="flex items-center justify-center" style="perspective: 1000px;">
  <div
    bind:this={containerRef}
    on:mousemove={handleMouseMove}
    on:mouseenter={handleMouseEnter}
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
