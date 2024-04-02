<!-- .slide: class="with-code" -->

# setState - on the class component side

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

##==##

<!-- .slide: class="with-code" -->

# setState - on the function component side

<!-- we want compact code for good looking slide here -->
<!-- prettier-ignore -->
```javascript
function Button(props) {
  const [clickCount, setClickCount] = useState(0);
  const [foo, setFoo] = useState('bar');

  return (
    <button onClick={() => setClickCount(clickCount + 1)}>
      clicked {clickCount} times
    </button>
  );
}
```

- setState updates the state and triggers a re-render of the component
- setState override the existing state
