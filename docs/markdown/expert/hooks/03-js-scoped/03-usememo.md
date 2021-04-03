<!-- .slide: class="center" -->

# UseMemo

* Memoize value

* Re-compute if dependency changes
```javascript
const memoizedValue = useMemo(() => {
    return items.filter(...).sort(...).map(...)
}, [items])
```