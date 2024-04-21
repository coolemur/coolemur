---
title: Keep footer at bottom of the page
description: Content too short and footer is not at the bottom of the page? Here is a simple solution.
date: '2024-04-14'
category: 'tailwind'
published: true
image: feet.jpg
---

## Solution:

```html
<div class="app flex min-h-screen flex-col">
  <header>Header</header>
  <main class="flex-1">Content</main>
  <footer>Footer</footer>
</div>
```

## Explanation:

- **min-h-screen** makes sure the container is at least the height of the screen.
- **flex-col** makes sure the children are stacked vertically.
- **flex-1** makes sure the main content takes up the remaining space.
