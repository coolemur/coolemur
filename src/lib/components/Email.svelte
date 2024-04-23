<script>
  let el;

  // JS obfuscation to prevent email scraping
  $effect(() => {
    const anchor = document.createElement('a');
    anchor.href = 'mailto:' + 'coolemur' + '@' + 'gmail.com';
    anchor.textContent = '@coolemur';
    anchor.classList.add('hover:text-highlight');
    anchor.classList.add('cursor-pointer');
    anchor.classList.add('transition-colors');
    el.parentNode.replaceChild(anchor, el);
  });
</script>

<div bind:this={el}></div>
