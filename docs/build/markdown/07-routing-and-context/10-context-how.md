<!-- .slide: class="with-code" -->

# Context

<blockquote>
"Context provides a way to pass data through the component tree without having to pass props down manually at every level" - React Doc
</blockquote>

<br>

```javascript
const { Provider, Consumer } = React.createContext(defaultValue);
```

<br>

- **Provider** will hold the value specified in **createContext** and make it accessible to all of its children.
- **Consumer** will read the context value from its closest Provider.
