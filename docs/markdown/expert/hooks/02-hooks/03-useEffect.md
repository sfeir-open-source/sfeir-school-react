<!-- .slide: class=""with-code““ -->

# useEffect 

```javascript
function MyComponent() {
  useEffect(() => {
    // Your effect here

    // Optionally : 
    return () => {
      // Your clean up here
    }
  }, [Dependency array])
}
```

<br />

Makes an effect  _(ex : setTimeout, HTTPS call, Websocket subscription ...)_
* On first render (_componentDidMount_)
* When dependencies change (_componentDidUpdate_)

<br/>

*Be careful* :
 * No dependency array : every render,
 * Empty dependency array : componentDidMount only