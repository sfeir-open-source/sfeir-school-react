<!-- .slide: class="with-code" -->

# And for function component ?

A function has no state...

```typescript
function Button({ clickCount }) => {
  return <button>clicked {clickCount} times</button>;
};
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# And for function component ?

...but we can use the `useState` hook!

```typescript
function Button() => {
  const [clickCount, setClickCount] = useState<number>(0);

  return <button>clicked {clickCount} times</button>;
};
```

<!-- .element: class="big-code" -->
