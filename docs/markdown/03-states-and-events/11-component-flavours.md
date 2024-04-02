<!-- .slide: class="with-code" -->

# Component flavours

## function component

```typescript
const Hello = ({ name }) => <h1>Hello, {name}</h1>;
```

<!-- .element: class="big-code" -->

<br/>
<br/>

## class component

```typescript
class Hello extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

<!-- .element: class="big-code" -->
