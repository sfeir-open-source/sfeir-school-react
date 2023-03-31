<!-- .slide: class="with-code two-column" -->

# Route props...

render: func

```javascript
<Route path="/songs" render={() => <Songs songList={SONGS} />} />
```

##--##

<!-- .slide: class="with-code" -->

exact: bool
<!-- .element: class="mt-200" -->

```javascript
<Route path="/" exact component={Index} />
```
