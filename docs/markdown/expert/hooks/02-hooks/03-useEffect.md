
# useEffect 

```javascript
function MyComponent() {
  useEffect(() => {
    // Your effect here

  }, [Dependency array])
}
```

<br/>

Makes an effect  _(ex : setTimeout, HTTPS call, Websocket subscription ...)_
* On first render (_componentDidMount_)
* When dependencies change (_componentDidUpdate_)

##==##

# useEffect 

```javascript
function MyComponent() {
  useEffect(() => {
    // Your effect here

    // Optional cleanup
    return () => {
      // Your cleanup here
    }
  }, [Dependency array])
}
```
<br/>

Calls Cleanup _(ex: clearTimeout, cancel request, close Websocket ...)_
* When dependencies change (_componentDidUpdate_)
* When component is unmounted (_componentWillUnmount_)

##==##

# Be careful :

```javascript
function MyComponent() {
  useEffect(() => {
    // I'll be called on every render

  }) // There is no dependency array
}
```

__No dependency array : every render__

##==##

# Be careful :

```javascript
function MyComponent() {
  useEffect(() => {
    // I'll be called on every render  

  }, []) // Empty dependency array
}
```

__Empty dependency array : first render only__