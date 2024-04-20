<!-- .slide: class="with-code" -->

# Component did mount

```TypeScript [2-4]
class Repeat extends React.Component {
  componentDidMount() {
    this.intervalId = setInterval(() => this.repeatSomething(), 100);
  }

  render() {
    return <Something />;
  }
}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Component did mount

```TypeScript [2-4]
function Repeat() {
  useEffect(() => {
    const timeoutId = setTimeout(() => repeatSomething(), 100);
  });

  return <Something />;
}
```

<!-- .element: class="big-code" -->
