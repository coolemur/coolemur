---
title: React - custom hooks
description: Reusable logic in react
date: '2024-04-02'
category: 'react'
published: true
---

## Cutom hook template

```tsx
import { useState, useEffect } from 'react'; // Import necessary hooks

function useCustomHookName(initialValue) {
  // 1. State variables
  const [stateValue, setStateValue] = useState(initialValue);

  // 2. Effects (if needed)
  useEffect(() => {
    // Perform side effects based on stateValue or other dependencies
  }, [stateValue]); // Adjust the dependency array as needed

  // 3. Helper functions (if needed)
  const functionA = () => {
    // Logic to manipulate state or perform actions
  };

  // 4. Return values
  return { stateValue, setStateValue, functionA /* other values */ };
}

export default useCustomHookName;
```

### Explanation

1. **State Variables:** Declare state variables with useState to manage data within the hook.
2. **Effects:** Use the useEffect hook to perform side effects such as fetching data, setting up subscriptions, or timers. The dependency array in useEffect ensures the effect runs only when necessary.
3. **Helper Functions:** Define functions within the hook to encapsulate component logic and make it reusable.
4. **Return Values:** Return an array containing state variables, functions to update state, and any other relevant values that components using the hook might need.

### Key Points

- **Custom hook names always start with "use".** This convention helps identify them.
- **Custom hooks encapsulate reusable logic.** This promotes code organization and reduces redundancy.
- **They can access other React hooks** for managing state, side effects, and more.

### Example of a Custom Hook without useEffect

```tsx
import { useState } from 'react';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  window.addEventListener('resize', handleResize);

  // Clear event listener on unmount
  return () => window.removeEventListener('resize', handleResize);

  return windowSize;
}

export default useWindowSize;
```

In this example, the custom hook _useWindowSize_ returns the current window size and updates it whenever the window is resized. It also cleans up the event listener when the component using the hook is unmounted.

### The difference between custom hook with and without useEffect

- **Custom hooks with useEffect:** Useful for managing side effects like data fetching, subscriptions, or timers.
- **Custom hooks without useEffect:** Useful for encapsulating logic that doesn't require side effects, such as handling window size or other state changes.

So basically, useEffect is fired every time the hook is initialized, while the hook without useEffect can be initialized many times without side effects. You need to be careful when using useEffect in custom hooks, not to initialize it multiple times without handling side effects properly.
