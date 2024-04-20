<!-- .slide: class="with-code" -->

# useRef

```TypeScript
export function Form() {
  const inputRef = useRef(null);
  const handleClick = () => inputRef.current.focus();

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}
```

<!-- .element: class="big-code" -->
