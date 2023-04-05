<!-- .slide: class="with-code" -->

# Context

```javascript
import MyContext from '../contexts/MyContext';

class A extends React.Component {
  render() {
    return <MyContext.Provider value={contextValue}>{this.props.children}</MyContext.Provider>;
  }
}
```

```javascript
import MyContext from '../contexts/MyContext';

class D extends React.Component {
  render() {
    return (
      <MyContext.Consumer>
        {(contextValue) => {
          // has access to the contextValue
        }}
      </MyContext.Consumer>
    );
  }
}
```
