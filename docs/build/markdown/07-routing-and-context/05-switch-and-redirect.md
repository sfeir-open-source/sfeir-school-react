<!-- .slide: class="with-code two-column-layout" -->

# &lt;Switch> and &lt;Redirect>

##--##

**Switch** displays the first matching route exclusively

##--##

```javascript
<Switch>
  <Route exact path="/" component={Home} />
  <Route path="/about" component={About} />
  <Route path="/:user" component={User} />
  <Redirect to="/" />
</Switch>
```
