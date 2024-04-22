<!-- .slide: class="with-code " -->

# Conditionals

## or a **variable**

```typescript
const Header = ({ username, login }) => {
  let welcome;
  if (username) {
    welcome = <Welcome username={username} />;
  } else {
    welcome = <Login onLogin={login} />;
  }

  return (
    <header>
      <img src={logo} />
      {welcome}
    </header>
  );
};
```
