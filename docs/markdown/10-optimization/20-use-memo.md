<!-- .slide: class="transition" -->

# `useMemo`

Notes:

0h15

##==##

# `useMemo`

##==##

# `useMemo`

- `React.memo` is for memoize component

##==##

# `useMemo`

- `React.memo` is for memoize component
- But sometime we only need to memoize one computation

##==##

# `useMemo`

- `React.memo` is for memoize component
- But sometime we only need to memoize one computation
- `useMemo` is for fine grained memoization

##==##

# `useMemo`

- `React.memo` is for memoize component
- But sometime we only need to memoize one computation
- `useMemo` is for fine grained memoization
- Do not forget memoization is a trade-off between use more memory or recompute things

##==##

<!-- .slide: class="with-code" -->

# `useMemo`

<!-- prettier-ignore -->
```typescript
export function MyComponent() {
  const result = makeVeryLongComputation();
  return <>...</>;
}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# `useMemo`

<!-- prettier-ignore -->
```typescript
export function MyComponent() {
  const result = useMemo(() => makeVeryLongComputation(), []);
  return <>...</>;
}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# `useMemo`

<!-- prettier-ignore -->
```typescript
export function MyComponent({ anyProps }) {
  const result = useMemo(() => makeVeryLongComputation(), [anyProps]);
  return <>...</>;
}
```

<!-- .element: class="big-code" -->
