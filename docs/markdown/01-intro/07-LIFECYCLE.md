<!-- .slide: class="transition-bg-blue-3 right"-->

# Lifecycle In React

##==##

# How to manage the lifecycle of a React component

In React, functional components can leverage Hooks to manage the component's lifecycle.

Hooks like **useState** and **useEffect** play a key role in achieving similar behavior to class-based components. Let's explore how functional components handle lifecycle events.

In this chapter, we will mainly focus on the **useEffect** hook.

<!-- .element: class="important"-->

##==##

# useEffect: On Mount

The **useEffect** hook is a function that takes two arguments:

- A callback function
- A **mandatory** array of dependencies
<!-- .element: class="important"-->

</br>

```jsx
import React, { useEffect } from 'react';

const MyComponent = () => {
  useEffect(() => {
    // what to do
  }, []); // <-- when to do it
};
```

</br>

If the array of dependencies is **empty**, the function will be executed only once, when the component is mounted.

<!-- .element: class="important"-->

Without Dependency Array:

- The effect will run on every render (including the initial render).
- This means that for every update to your component (e.g. state changes), the effect will be executed again.
- This can lead to unnecessary and potentially performance-intensive operations being performed repeatedly.

##==##

# useEffect: On Update

If the array of dependencies is **not empty**, the function will be executed when the component is mounted and every time one of the dependencies changes.

```jsx
import React, { useEffect, useState } from 'react';
import { userService } from '../services/userService';
import { useGetUserIdFromUrl } from '../hooks/useGetUserIdFromUrl';

const MyComponent = () => {
  const userId = useGetUserIdFromUrl();

  useEffect(() => {
    const userInfo = userService.getUser(userId);
    console.log(userInfo); // <-- will be executed every time userId changes
  }, [userId]); // <-- when to do it
};
```

</br>

- The effect will run anytime the value of one of the dependencies changes.
- This means that any other state changes outside of the dependency array will not trigger the effect.

##==##

# useEffect: On Unmount

The **useEffect** hook can also be used to perform cleanup operations when the component is unmounted.

```jsx
import React, { useEffect, useState } from 'react';
import { userService } from '../services/userService';
import { useGetUserIdFromUrl } from '../hooks/useGetUserIdFromUrl';

const MyComponent = () => {
  const userId = useGetUserIdFromUrl();

  useEffect(() => {
    const userInfo = userService.getUser(userId);
    console.log(userInfo); // <-- will be executed every time userId changes

    return () => {
      // <-- will be executed when the component is unmounted
      console.log('Component is unmounted');
    };
  }, [userId]); // <-- when to do it
};
```

- The function returned by the effect will be executed when the component is unmounted.
