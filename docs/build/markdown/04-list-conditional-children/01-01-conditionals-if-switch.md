<!-- .slide: class="center" -->

# Conditionals

## use **if-then-else** or **switch**

```javascript
    const Welcome = ({ username }) => (
      <h1>Welcome back, {username}</h1>
    );
    
    const Login = ({ onLogin }) => (
      <h1>Please <button onClick={onLogin}>login</button></h1>
    );
    
    const Header = ({ username, login }) => {
      if (username) {
        return <Welcome username={username} />;
      } else {
        return <Login onLogin={login} />;
      }
    }

```
