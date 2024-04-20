<!-- .slide: class="with-code" -->

# Component will unmount

```TypeScript [5-7]
class Repeat extends React.Component {
  componentDidMount() {
    this.intervalId = setInterval(() => this.repeatSomething(), 100);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() { return <Something />; }
}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Component will unmount

```TypeScript [4]
function Repeat() {
  useEffect(() => {
    const timeoutId = setTimeout(() => repeatSomething(), 100);
    return () => clearTimeout(timeoutId);
  });

  return <Something />;
}
```

<!-- .element: class="big-code" -->
