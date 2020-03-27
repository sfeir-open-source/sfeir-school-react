<!-- .slide: class="two-column-layout" -->

# Component flavours

##--##

```javascript
  const Hello = ({ name }) => (
    <h1>Hello, {name}</h1>
  );
```

function component <!-- .element: class="center" -->

##--##

```javascript
  class Hello extends React.Component {
    render() {
      return (
        <h1>Hello, {this.props.name}</h1>
      );
    }
  }
```

class component <!-- .element: class="center" -->
