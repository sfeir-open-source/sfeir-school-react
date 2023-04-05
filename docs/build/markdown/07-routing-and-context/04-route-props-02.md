<!-- .slide: class="with-code" -->

# … or route props ?

```javascript
<Route
  path="/movie/:id"
  render={({
    match: { isExact, params, path, url },
    history: { action, go, goBack, goForward, push, replace },
    location: { hash, key, pathname, search, state },
  }) => <Movie id={params.id} />}
/>
```
