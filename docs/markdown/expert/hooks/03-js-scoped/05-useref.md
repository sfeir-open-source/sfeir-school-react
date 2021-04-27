# useRef

* Keep reference of mutable variable
  * Dependency array don’t take it into account

* Ref to Component
  * DOM Ref : like React.createRef();
  * Any Ref : Keep mutable value

```javascript
function usePrevious(value) {
  const ref = useRef(); // ref is always the memory reference
   useEffect(() => {
      ref.current = value;
   }, [value]); // Only re-run if value changes
 return ref.current;
}
```