---
title: Using fonts in Tailwind 4
description: By far easiest and fastest way to add fonts to your project
date: '2024-04-07'
category: 'tailwind'
published: true
image: image-1.png
---

## Tailwind Fonts Made Easy

### Why Customize Fonts?

Unique fonts are a powerful way to enhance your website's design, branding, and overall visual appeal. With Tailwind CSS integrating new fonts becomes remarkably simple.

**Step 1 - Choose your font from [https://fonts.google.com/](https://fonts.google.com/)**

**Step 2 - Add chosen font link to your html as described in [https://developers.google.com/fonts/docs/getting_started](https://developers.google.com/fonts/docs/getting_started)**

```html
<!-- index.html -->

<!-- Without font weight -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lora&display=swap" />

<!-- Specify font weight values -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lora:400,700&display=swap" />
```

**Step 3 - Add tailwind variable to theme**

```css
/* main.css */

@import 'tailwindcss';

@theme {
  --font-family-lora: 'lora', 'sans-serif';
}
```

**Step 4 - Use it**

```html
<!-- Apply to whole document -->
<body class="font-lora"> </body>

<!-- Apply to specific elements of document -->
<... class="font-lora"></...>
```

### Furthermore

If you think that applying fonts to each element is too much work, you can have default font styles for common elements like headings, paragraphs, etc. in _@layer base_ of tailwind configuration.

```css
@layer base {
  h1 {
    font-family: var(--font-family-lora);
    font-size: 2rem;
    font-weight: 700;
    color: var(--color-black);
  }

  p {
    font-family: var(--font-family-lora);
    font-size: 1rem;
    font-weight: 400;
    color: var(--color-black);
  }
}
```

Then you can use these elements without worrying about applying font styles troughout the project. And only when you need to use a different font, you can apply it to the specific element.

```html
<h1 class="font-sans text-2xl font-bold text-white">Heading</h1>
<p class="font-sans text-lg text-black">Paragraph</p>
```

This keeps your project clean, easy to maintain and semantically correct.
