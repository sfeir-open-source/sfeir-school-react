<!-- .slide: class="with-code" -->

# History API

##==##

<!-- .slide: class="with-code" -->

# History API

```TypeScript
// navigate
const url = new URL('/people');
url.searchParams.set('filter', 'John');
history.pushState({},'' ,url);
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# History API

```TypeScript
// navigate
const url = new URL('/people');
url.searchParams.set('filter', 'John');
history.pushState({},'' ,url);
// go back
history.back();
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# History API

```TypeScript
// navigate
const url = new URL('/people');
url.searchParams.set('filter', 'John');
history.pushState({},'' ,url);
// go back
history.back();
// go forward
history.forward();
```

<!-- .element: class="big-code" -->
