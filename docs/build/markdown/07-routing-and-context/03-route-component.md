<!-- .slide: class="with-code" -->

# &lt;Route />

```html
import { BrowserRouter as Router, Route } from 'react-router-dom';
<Router>
  <div>
    <Route exact path="/" component="{Home}" />
    <Route path="/news" component="{NewsFeed}" />
  </div>
</Router>
```

## url: / rendu :

```html
<div>
  <Home />
  <!-- react-empty: 2 -->
</div>
```

## url /news rendu :

```html
<div>
  <!-- react-empty: 1 -->
  <NewsFeed />
</div>
```
