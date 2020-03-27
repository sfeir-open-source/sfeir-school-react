<!-- .slide: class="two-column-layout" -->

# Component flavours

##--##

```javascript
  const Button = ({ clickCount }) => (
    <button>
      clicked {clickCount} times
    </button>
  );
```

a class instance can keep state... <!-- .element: class="center" -->

##--##

```javascript
  class Button extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        clickCount: 0
      };
    }
  
    render() {
      return (
        <button>
          clicked {this.state.clickCount} times
        </button>
      );
    }
  }
```
