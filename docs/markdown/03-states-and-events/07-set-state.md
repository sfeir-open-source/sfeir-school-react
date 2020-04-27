<!-- .slide: class="with-code" -->

# setState

<!-- we want compact code for good looking slide here -->
<!-- prettier-ignore -->
```javascript
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clickCount: 0, foo: 'bar' };
  }

  render() {
    return (
      <button onClick={() =>
          this.setState({
            clickCount: this.state.clickCount + 1,
          })
        }
      >
        clicked {this.state.clickCount} times
      </button>
    );
  }
}
```

- setState updates the state and triggers a re-render of the component
- setState patches the existing state
