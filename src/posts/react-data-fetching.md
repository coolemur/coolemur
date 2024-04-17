---
title: React - data fetching
description: Different ways to fetch data in React
date: '2024-04-16'
category: 'react'
published: true
---

## Some examples of fetching data in React

### Fetching data with **useEffect**, **useState** & **fetch**

```jsx
// App.tsx

import React, { useEffect, useState, useMemo } from 'react';

interface DataItem {
  id: number;
  value: string;
}

export default function App() {
  const [data, setData] = useState<DataItem[]>([]);
  const [count, setCount] = useState(0);

  // Using useEffect to fetch data
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/comments');
      const data: DataItem[] = await response.json();
      setData(data.slice(0, 5));  // Limit to 5 items for display
    }

    fetchData();

    console.log('Data fetched');
  }, []); // Empty dependency array means this effect runs only once on mount

  // Using useMemo to memorize a calculated value based on the data
  const expensiveValue = useMemo(() => {
    return data.reduce((acc, item) => acc + item.id, 0);
  }, [data]);

  return (
    <div className='App'>
      <h1>Hello React TypeScript.</h1>
      <h2>Start editing to see some magic happen!</h2>

      <h3>Fetched Data (IDs):</h3>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.value} (ID: {item.id})</li>
        ))}
      </ul>

      <h3>Sum of IDs (Calculated using useMemo):</h3>
      <p>{expensiveValue}</p>

      <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
      <p>Button clicked {count} times</p>
    </div>
  );
}
```

### Fetching data with **react-query** in a custom hook

```jsx
// useComments.ts

import { useQuery } from 'react-query';

interface DataItem {
  id: number;
  value: string;
}

const fetchComments = async (): Promise<DataItem[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments');
  const data = await response.json();
  return data.slice(0, 5).map((item: any) => ({
    id: item.id,
    value: item.body  // Assuming the actual text is in the `body` field
  }));
}

export default function useComments() {
  return useQuery<DataItem[], Error>('comments', fetchComments);
}
```

```jsx
// App.tsx

import React, { useState, useMemo } from 'react';
import useComments from './useComments'; // Adjust the path as necessary

export default function App() {
  const { data = [], isLoading, error } = useComments();
  const [count, setCount] = useState(0);

  // Using useMemo to memorize a calculated value based on the data
  const expensiveValue = useMemo(() => {
    return data.reduce((acc, item) => acc + item.id, 0);
  }, [data]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>An error occurred: {error.message}</p>;

  return (
    <div className="App">
      <h1>Hello React TypeScript.</h1>
      <h2>Start editing to see some magic happen!</h2>

      <h3>Fetched Data (IDs):</h3>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.value} (ID: {item.id})
          </li>
        ))}
      </ul>

      <h3>Sum of IDs (Calculated using useMemo):</h3>
      <p>{expensiveValue}</p>

      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <p>Button clicked {count} times</p>
    </div>
  );
}
```

#### Nice things about using **react-query**:

- **Automatic caching**: Data is automatically cached and stale-while-revalidate is enabled by default.
- **Automatic refetching**: Data is automatically refetched in the background when the app is idle.
- **Optimistic updates**: Updates are optimistically applied to the cache before the request is even made.
- **Pagination and infinite loading**: Built-in support for pagination and infinite loading.
- **Query invalidation**: Easily invalidate queries based on events like form submissions or other queries.
