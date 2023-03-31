<!-- .slide: class="with-code two-column" -->

# &lt;Link> and &lt;Navlink>

These components render controlled links : **no GET request will be made**, it's the **history API** who is in charge.

**Navlink** sets a ‘className’ when the path matches.

##--##

<!-- .slide: class="with-code" -->

```javascript
<Link to="/home">home</link>

<NavLink
  to="/users"
  activeClassName="selected"
  exact
>
  users
</NavLink>
```
<!-- .element: style="margin-top:200px" -->
