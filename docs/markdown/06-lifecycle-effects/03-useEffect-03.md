<!-- .slide: class="with-code two-column" -->

# useEffect hook

```javascript
const Repeat = () => {
  useEffect(() => {
    const timeoutId = setTimeout(() => repeatSomething(), 100);

    return () => clearTimeout(timeoutId);
  });

  return <Something />;
};
```

##--##

<!-- .slide: class="with-code" -->

```javascript
class Repeat extends React.Component {
  componentDidMount() {
    this.intervalId = setInterval(() => this.repeatSomething(), 100);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return <Something />;
  }
}
```
<!-- .element: style="margin-top:200px" -->
