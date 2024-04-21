---
title: React - unit testing
description: Everything about unit testing in React
date: '2024-04-16'
category: 'react'
published: true
image: testing.webp
---

## Tips for unit testing in React. To be continued...

### Why unit testing is important?

Unit testing is important because it helps you catch bugs early in the development process. It also helps you write better code by forcing you to think about how your code should behave in different scenarios. It makes your code more reliable and easier to maintain. For example, if you refactor your code, you can run your unit tests to make sure that you haven't broken anything.

### Tip number 1: Extract logic into custom hooks

When writing unit tests for your React components, it's a good idea to extract logic into custom hooks. This makes your components more testable because you can test the logic in isolation from the UI. Custom hooks are also reusable, so you can use them in multiple components.

On top of that, it is easier to cover the logic with tests when it is extracted into a custom hook. This is because custom hooks are just functions, and you can test them like any other JavaScript function without the need of rendering a whole component.
