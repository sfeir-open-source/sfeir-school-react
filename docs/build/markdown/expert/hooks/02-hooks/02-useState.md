<!-- .slide: class="with-code-bg-dark“ -->

# useState

```javascript
function MyComponent() {
    const [value, setValue] = useState(initialValue);

    return <div>{value}</div>
}
```
<br/>

```javascript
setValue(newValue);
setValue(oldValue => oldValue + 1);
```

<br/>

* (Multiple) State(s) for you Function Component
* Read-only value
* handler function : `setValue(newValue)`
