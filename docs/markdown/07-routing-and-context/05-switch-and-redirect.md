<!-- .slide: class="with-code two-column" -->

# &lt;Switch> and &lt;Redirect>

**Switch** displays the first matching route exclusively

##--##

<!-- .slide: class="with-code" -->

```javascript
<Switch>
  <Route exact path="/" component={Home} />
  <Route path="/about" component={About} />
  <Route path="/:user" component={User} />
  <Redirect to="/" />
</Switch>
```
<!-- .element: style="margin-top:200px" -->
