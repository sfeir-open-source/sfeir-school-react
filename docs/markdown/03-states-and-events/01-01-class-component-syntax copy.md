<!-- .slide: class="two-column with-code" -->

# Component flavours

```javascript
const Hello = ({ name }) => <h1>Hello, {name}</h1>;
```
<!-- .element: class="big-code" -->

function component <!-- .element: class="center " -->

##--##

```javascript
class Hello extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```
<!-- .element: class="big-code" -->

class component <!-- .element: class="center" -->
