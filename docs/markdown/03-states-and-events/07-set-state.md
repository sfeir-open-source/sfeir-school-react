<!-- .slide: class="two-column-layout" -->

# setState

##--##

```javascript
    class Button extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          clickCount: 0,
          foo: "bar"
        };
      }
    
      render() {
        return (
          <button onClick={
            () => this.setState({
              clickCount: this.state.clickCount+1
            })
          }>
            clicked {this.state.clickCount} times
          </button>
        );
      }
    }
```

##--##

<br />

* setState updates the state and triggers a re-render of the component

<br/>

* setState patches the existing state
