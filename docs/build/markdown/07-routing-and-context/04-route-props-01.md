<!-- .slide: class="with-code two-column-layout" -->

# Route props...

##--##

render: func

```javascript
<Route path="/songs" render={() => <Songs songList={SONGS} />} />
```

##--##

exact: bool

```javascript
<Route path="/" exact component={Index} />
```
