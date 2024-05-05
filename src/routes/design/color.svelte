<script>
  import { cva } from 'class-variance-authority';
  const { name } = $props();

  const color = cva('flex items-center justify-center rounded-lg text-4xl capitalize text-white', {
    variants: {
      color: {
        highlight: 'bg-highlight',
        'highlight-dark': 'bg-highlight-dark',
        paper: 'bg-paper',
        'paper-light': 'bg-paper-light',
        'dark-gray': 'bg-dark-gray',
        secondary: 'bg-secondary',
        'secondary-dark': 'bg-secondary-dark'
      }
    }
  });
</script>

<div class={color({ color: name })}>
  <span class="rounded-lg bg-black/20 py-2 px-4">
    {name}
  </span>
</div>
