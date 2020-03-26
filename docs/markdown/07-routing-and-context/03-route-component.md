<!-- .slide: class="with-code" -->

<style>
.special-03-route-component--grid {
    display: grid;
    grid-template-columns: 2fr 6em 6em 1fr;
    grid-template-rows: 50% 50%;
}
.special-03-route-component--grid > * {
    align-self: center;
}
.special-03-route-component--cell-maincode {
    grid-row: 1 / span 2;
}
.special-03-route-component--cell-path {
    text-align: center;
}
.reveal .special-03-route-component--cell-arrow {
    font-size: 2em;
    text-align: center;
}
</style>

# &lt;Route />

<div class="special-03-route-component--grid">
    <div class="special-03-route-component--cell-maincode">
        <pre>
```
import { BrowserRouter as Router, Route } from 'react-router-dom';

<Router>
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/news" component={NewsFeed} />
  </div>
</Router>;
```
        </pre>
    </div>
    <div class="special-03-route-component--cell-path">/</div>
    <div class="special-03-route-component--cell-arrow">⇨</div>
    <div>
        <pre>
```
<div>
  <Home/>
  <!-- react-empty: 2 -->
</div>
```
        </pre>
    </div>
    <div class="special-03-route-component--cell-path">/news</div>
    <div class="special-03-route-component--cell-arrow">⇨</div>
    <div>
        <pre>
```
<div>
  <!-- react-empty: 1 -->
  <NewsFeed/>
</div>
```
        </pre>
    </div>

</div>
