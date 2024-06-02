<!-- .slide: class="transition" -->

# `React.memo`

Notes:

0h15

##==##

# Props

![center](./assets/images/props-1.png)

##==##

# Props

![center](./assets/images/props-2.png)

##==##

<!-- .slide: class="with-code" -->

# Without `React.memo`

<!-- prettier-ignore -->
```typescript
type HeaderProps = { isAdmin: boolean, theme: Theme };

export function Header({ isAdmin, theme }: HeaderProps) {
  return <header>...</header>;
}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# With `React.memo`

<!-- prettier-ignore -->
```typescript
type HeaderProps = { isAdmin: boolean, theme: Theme };

export function HeaderRaw({ isAdmin, theme }: HeaderProps) {
  return <header>...</header>;
}

export const Header = React.memo(HeaderRaw);
```

<!-- .element: class="big-code" -->

Notes:

- explains in details the memoization concept

  - keep previous props
  - compare it with new props
  - use more memory
  - avoid re-rendering
  - it's a trade-off

- explain the convention ComponentRaw + Component
  - there is also the convention Component + ComponentMemo

##==##

<!-- .slide: class="with-code" -->

# With `React.memo`

<!-- prettier-ignore -->
```typescript
export const Header = React.memo(
    HeaderRaw,
    (previous: HeaderProps, next: HeaderProps) => {
        return Object.is(previous, next); // default implementation
    });
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# With `React.memo`

<!-- prettier-ignore -->
```typescript
export const Header = React.memo(
    HeaderRaw,
    (previous: HeaderProps, next: HeaderProps) => {
        return previous.isAdmin === next.isAdmin && 
            previous.theme.name === next.theme.name;
    });
```

<!-- .element: class="big-code" -->
