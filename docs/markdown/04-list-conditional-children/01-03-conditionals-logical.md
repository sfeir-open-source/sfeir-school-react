<!-- .slide: class="center" -->

# Conditionals

## or a **logical operator** <br /> React ignores false and null

```javascript
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
    }
```
