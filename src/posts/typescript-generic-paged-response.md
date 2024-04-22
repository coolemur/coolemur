---
title: Generic paged response type
description: How to create reusable generic paged response type in TypeScript
date: '2024-04-22'
category: 'typescript'
published: true
image: response.webp
---

## Generic paged response type in TypeScript

### Response example

Imagine you have an API that returns a paged response like this:

```json
{
  "data": [
    { "id": 1, "name": "Alice" },
    { "id": 2, "name": "Bob" }
  ],
  "totalItems": 1,
  "totalPages": 2
}
```

But here is a little twist: the response items type can be different for different endpoints. For example, another endpoint might return a response like this:

```json
{
  "items": [
    { "id": 1, "title": "Post 1" },
    { "id": 2, "title": "Post 2" }
  ],
  "totalItems": 1,
  "totalPages": 2
}
```

### What has changed?

The key for the items array has changed from **data** to **items**. And the item type has changed from

```json
{ "id": number, "name": string }
```

to

```json
{ "id": number, "title": string }
```

### What we want

We want to create a generic type that can handle both response types. The type should allow us to specify the key for the items array and the item type.

### Solution

```typescript
type PagedResponse<ItemKey extends string = 'items', T> = {
  totalItems: number;
  totalPages: number;
} & {
  [K in ItemKey]?: T[];
};
```

### How to use

Now you can use this type to define the response types for your API endpoints:

```typescript
// Define a specific item type
interface User {
  id: number;
  name: string;
}

// Use the PagedResponse type
type UserPagedResponse = PagedResponse<'users', User>;

// Example usage
const response: UserPagedResponse = {
  totalItems: 2,
  totalPages: 1,
  users: [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ]
};
```

This way, you can create a reusable generic paged response type in TypeScript that can handle different item types and keys for the items array.

Isn't TypeScript amazing?
