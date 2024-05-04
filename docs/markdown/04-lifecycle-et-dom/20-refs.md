<!-- .slide: class="transition" -->

# Refs

##==##

<!-- .slide: class="quote-slide" -->

# Refs

<blockquote>
<cite>
When you want a component to “remember” some information, but you don’t want that information to trigger new renders, you can use a ref.
</cite>
</blockquote>

##==##

<!-- .slide: class="with-code" -->

# useRef

```TypeScript
import { useRef } from 'react';

export function Counter() {
  const ref = useRef(0);
  function handleClick() {
    ref.current = ref.current + 1;
    alert('You clicked ' + ref.current + ' times!');
  }
  return <button onClick={handleClick}>Click me!</button>;
}
```

<!-- .element: class="big-code" -->
