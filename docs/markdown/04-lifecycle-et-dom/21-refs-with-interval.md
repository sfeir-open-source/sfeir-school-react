<!-- .slide: class="with-code" -->

# useRef

```TypeScript
export function Stopwatch() {
  const intervalRef = useRef(null);
  const handleStart = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => { /* */ }, 10);
  }
  const handleStop = () => clearInterval(intervalRef.current);
}
```

<!-- .element: class="big-code" -->

![center](./assets/images/refs-stop-watch.png)
