# Props

![center](./assets/images/02-fundamentals_05-props-1.png)

<br/>

## properties are being passed from parents to children

##==##

# Props

![center](./assets/images/02-fundamentals_05-props-2.png)

<br/>

## properties must not be modified by children- they are immutable

##==##

# Purity

All React components must act like **pure functions** with respect to their props.

##==##

<!-- .slide class="with-code" -->

# Purity

## pure function

```text
    function sum(a, b) {
      return a + b;
    }
```

- always returns the same result for a given set of parameters
- does not modify its parameters
- does not have semantical side effects

##==##

<!-- .slide class="with-code" -->

# Purity

## impure function

```text
    const fee = 0.5;

    function withdraw(account, x) {
        account.total -= x + fee;
    }
```

- modifies its parameters
- and/or depends on external context
