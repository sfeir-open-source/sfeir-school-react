<!-- .slide: class="with-code" -->

# forms in React docs

```javascript
class MyForm extends Component {
  state = {
    value: this.props.initialValue,
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    return <input value={this.state.value} onChange={this.handleChange} />;
  }
}
```
