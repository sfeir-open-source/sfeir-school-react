<!-- .slide: class="with-code" -->

# The old way: Class Component

```typescript [1-19|4|5,10-14|7|1-19]
type ComponentProps = { text: string };
type ComponentState = { a: string; b: string };

class MyComponent extends Component<ComponentProps> {
  state: ComponentState = { a: 'A', b: 'B' };
  render() {
    this.setState({ a: 'C' }); // don't do this at home
    return (
      <>
        <p>{this.props.text}</p>
        <p>
          {this.state.a}
          {this.state.b}
        </p>
        <AnotherComponent />
      </>
    );
  }
}
```

Notes:

- The only way to do component up to the version 15 (0.15)
- A class component extends Component
- the state and props are defined on the instance of the Component
- we edit the state by calling this.setState (with shallow merge)
- what is displayed by the rows 12 and 13 ? ('AB' then 'CB' because of merging)

##==##

<!-- .slide: class="with-code" -->

# The modern way: Function Component

```typescript [1-17|4|4,9|5,10-13|6|1-17]
type ComponentProps = { text: string };
type ComponentState = { a: string; b?: string };

function MyComponent({ text }: ComponentProps) {
  const [state, setState] = useState<ComponentState>({ a: 'A', b: 'B' });
  setState({ a: 'C' }); // don't do this at home
  return (
    <>
      <p>{text}</p>
      <p>
        {state.a}
        {state.b}
      </p>
      <AnotherComponent />
    </>
  );
}
```

Notes:

- The recommanded way from version 16.0.0 (September, 17th 2017)
- Just a plain function (or a const arrow function)
- Props are passed as one object in parameter
- state is declared with hook
- we edit the state by calling setState (without any merge)
- what is displayed by the rows 11 and 12 ('AB' then 'C' because no merging)

##==##

<!-- .slide: class="quote-slide" -->

<blockquote>
<cite>
  React components are just a class/function that return a single JSX Element.
</cite>
</blockquote>
