<!-- .slide: class="with-code" -->

# On the class component side

A class instance can keep state... but why is state an object ?

```typescript
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0,
    };
  }
  render() {
    return <button>clicked {this.state.clickCount} times</button>;
  }
}
```

<!-- .element: class="big-code" -->
