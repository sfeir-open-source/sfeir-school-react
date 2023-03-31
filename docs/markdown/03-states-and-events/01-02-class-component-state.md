<!-- .slide: class="two-column with-code" -->

# Component flavours

```javascript
const Button = ({ clickCount }) => <button>clicked {clickCount} times</button>;
```


a class instance can keep state... <!-- .element: class="center" -->

##--##

<!-- .slide: class="with-code" -->

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
<!-- .element: style="margin-top:200px" -->
