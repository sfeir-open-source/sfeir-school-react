<!-- .slide: class="center" -->

# UseCallback

* Memoize function

* Useful for function as dependency

```javascript
const callback = useCallback((args) => {
   // Do something with args and items
}, [items])

useEffect(() => {
    callback("some-args");
}, [callback])
```