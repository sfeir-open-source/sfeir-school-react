# Less computing

```javascript
function MyComponent({items}) => {
    const [items, setItems] = useState(
        () => somethingTimeConsuming() // arrow function only called once
        // somethinTimeConsuming // even better : not arrow function redefined on each render 
    )

    // redefined on every render
    const callback = useCallback(() => {
        items.filter(...).sort(...).map(...)
    }, [items]); 

    useEffect(() => {
        // Called only when `callback`changes,
        // (each time items changes)
    }, [callback])
}
```