# Purity

All React components **must** act like **pure functions** with respect to their props.

##==##

<!-- .slide: class="with-code" -->

# Purity

## Impure function

Do you know why this function is not pure ?

```typescript
let count = 0;

function incrementCount(obj) {
  count++;
  obj.value = count;
  return count;
}
```

##==##

<!-- .slide: class="with-code" -->

# Purity

## Impure function

Do you know why this function is not pure ?

```typescript
let count = 0;

function incrementCount(obj) {
  count++;
  obj.value = count;
  return count;
}
```

- depends on external variable context
- creates side effect (updates external variable and argument)

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
- does not create side effects
