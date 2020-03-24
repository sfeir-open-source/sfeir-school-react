<!-- .slide: class="with-code" -->

# forms in React docs

```javascript
class MyForm extends Component {
  // init

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <>
        <input name="firstname" value={this.state.firstname} onChange={this.handleChange} />
        <input name="lastname" value={this.state.lastname} onChange={this.handleChange} />
      </>
    );
  }
}
```
