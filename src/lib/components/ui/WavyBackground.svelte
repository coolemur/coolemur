<script>
  import { cn } from '$lib/utils/cn';
  import { createNoise3D } from 'simplex-noise';
  import { onMount } from 'svelte';

  const noise = createNoise3D();
  let backgroundFill = $state();
  let blur = $state();
  let canvas = $state();
  let canvasRef = $state();
  let className = $state();
  let colors = $state();
  let containerClassName = $state();
  let ctx = $state();
  let h = $state();
  let i = $state();
  let nt = $state();
  let speed = $state();
  let w = $state();
  let waveOpacity = $state();
  let waveWidth = $state();
  let x = $state();
  let y = $state();

  const getSpeed = () => {
    switch (speed) {
      case 'slow':
        return 0.001;
      case 'fast':
        return 0.002;
      default:
        return 0.001;
    }
  };

  const init = () => {
    canvas = canvasRef;
    ctx = canvas.getContext('2d');
    if (!ctx) return;
    w = ctx.canvas.width = window.innerWidth;
    h = ctx.canvas.height = window.innerHeight;
    ctx.filter = `blur(${blur}px)`;
    nt = 0;
    window.onresize = function () {
      if (!ctx) return;
      w = ctx.canvas.width = window.innerWidth;
      h = ctx.canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
    };
    render();
  };

  const waveColors = colors ?? ['#38bdf8', '#818cf8', '#c084fc', '#e879f9', '#22d3ee'];
  /**
   * @param {number} n
   */
  const drawWave = (n) => {
    nt += getSpeed();
    for (i = 0; i < n; i++) {
      if (!ctx) return;
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 50;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (x = 0; x < w; x += 5) {
        var y = noise(x / 800, 0.3 * i, nt) * 250;
        ctx.lineTo(x, y + h * 0.5); // adjust for height, currently at 50% of the container
      }
      ctx.stroke();
      ctx.closePath();
    }
  };

  /** @type {number} */
  let animationId;
  const render = () => {
    if (!ctx) return;
    ctx.fillStyle = backgroundFill || 'black';
    ctx.globalAlpha = waveOpacity || 0.5;
    ctx.fillRect(0, 0, w, h);
    drawWave(5);
    animationId = requestAnimationFrame(render);
  };

  onMount(() => {
    init();
    return () => {
      cancelAnimationFrame(animationId);
    };
  });
</script>

<div
  class={cn(
    'flex h-screen flex-col items-center justify-center absolute w-full h-full top-0 left-0 overflow-hidden',
    containerClassName
  )}
  style={`top: ${y * 0.4}px;`}
>
  <canvas
    class="absolute inset-0 z-0 h-full w-full blur-sm scale-x-110"
    bind:this={canvasRef}
    id="canvas"
  ></canvas>
  <div class={cn('relative z-10', className)}>
    <slot />
  </div>
</div>
<svelte:window bind:scrollY={y} />
