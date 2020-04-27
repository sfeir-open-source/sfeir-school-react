<!-- .slide: class="two-column-layout with-code" -->

# Component flavours

##--##

```javascript
const Button = ({ clickCount }) => <button>clicked {clickCount} times</button>;
```

<!-- .element: class="big-code" -->

a class instance can keep state... <!-- .element: class="center" -->

but why is state an object ? <!-- .element: class="center" -->

##--##

```javascript
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
