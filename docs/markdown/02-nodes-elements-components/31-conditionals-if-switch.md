<!-- .slide: class="with-code" -->

# Conditionals

## use **if-then-else**

```typescript
const Header = ({ username, login }) => {
  if (username) {
    return <Welcome username={username} />;
  } else {
    return <Login onLogin={login} />;
  }
};
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Conditionals

## or **switch**

```typescript
const Header = ({ username, login, page }) => {
  switch (page) {
    case 'welcome':
      return <Welcome username={username} />;
    case 'login':
      return <Login onLogin={login} />;
    default:
      return <NotFound />;
  }
};
```

<!-- .element: class="big-code" -->
