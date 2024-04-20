<!-- .slide: class="with-code" -->

# HOF / High Order Function

```TypeScript
// this is a function
function add1(n: number) {
    return n +1;
}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# HOF / High Order Function

```TypeScript
// this is a function
function add1(n: number) {
    return n +1;
}
```

<!-- .element: class="big-code" -->

```TypeScript
// this is an high order function
function add2(f: (n: number) => number) {
    return (n: number) => 2 + f(n);
}
```

<!-- .element: class="big-code" -->

Notes:

- An HOF is a function that take a function in parameter and return another function
