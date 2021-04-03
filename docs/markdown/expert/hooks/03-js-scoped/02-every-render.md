<!-- .slide: class=""with-code““ -->

# On every render ?

```javascript
function MyComponent({items}) => {
    const [state, useState] = useState(
        somethingTimeConsuming() // on every render (but set only once)
    )

    // redefined on every render
    const callback = (item) => {
        ...
    }; 

    useEffect(() => {
        // UseEffect is call after every render
        // since `callback`ref changes on every render
    }, [callback])
}
```