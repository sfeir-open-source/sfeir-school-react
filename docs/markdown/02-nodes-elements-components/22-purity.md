# Purity

All React components **must** act like **pure functions** with respect to their props.

##==##

<!-- .slide: class="with-code" -->

# Purity

## Pure function

```typescript
function sum(a, b) {
  return a + b;
}
```

<!-- .element: class="big-code" -->

- always returns the same result for a given set of parameters
- does not modify its parameters
- does not have semantical side effects

##==##

<!-- .slide: class="with-code" -->

# Purity

## Impure function

```typescript
const fee = 0.5;

function withdraw(account, x) {
  account.total -= x + fee;
}
```

<!-- .element: class="big-code" -->

- modifies its parameters
- and/or depends on external context
