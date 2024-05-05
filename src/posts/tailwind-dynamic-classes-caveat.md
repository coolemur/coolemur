---
title: Dynamic classes caveat
description: Something to keep in mind when using dynamic classes in Tailwind CSS
date: '2024-05-05'
category: 'tailwind'
published: true
image: authority.jpg
---

## Dynamic classes caveat

When using dynamic classes in Tailwind CSS, you need to be aware of a caveat that can cause unexpected behavior.

### The problem

Consider the following example:

```html
<button class="bg-blue-500 hover:bg-blue-700">Click me</button>
```

In this example, the button has a background color of `bg-blue-500` by default, and changes to `bg-blue-700` when hovered over. This works as expected.

Now, let's say you want to make the background color dynamic based on a prop or state in your application. You might be tempted to do something like this:

```html
<button :class="`bg-${color}-500 hover:bg-${color}-700`">Click me</button>
```

This seems like it should work, but there's a caveat you need to be aware of.

### The caveat

Tailwind CSS adds only the classes you use in your code to the final CSS file. This is great for keeping your CSS file size small, but it can cause issues when using dynamic classes. So if you are not using the `bg-blue-500` or `bg-blue-700` classes anywhere else in your code, they will not be included in the final CSS file and the dynamic classes will not work as expected.

### The solution

Use `class-variance-authority` to generate dynamic classes at build time. This will ensure that only the classes you actually use in your application are included in the final CSS file. Plus, this adds a cleaner and more maintainable way to handle dynamic classes.

For example, in svelte:

```svelte
<script>
  import { cva } from 'class-variance-authority';

  const variant = 'default';
  const size = 'default';

  const buttonVariants = cva('cursor-pointer rounded-lg transition-all', {
    variants: {
      variant: {
        default: 'bg-blue-500 text-white hover:bg-blue-500/80',
        destructive: 'bg-red-500 text-white hover:bg-red-500/80'
      },
      size: {
        default: 'px-4 py-1.5',
        sm: 'h-9 px-3',
        lg: 'h-11 px-8',
        icon: 'h-10 w-10'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  });
</script>

<button class={buttonVariants({ variant: 'destructive', size: 'default' })}>Click me</button>
```
