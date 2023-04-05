<!-- .slide: class="with-code two-column-layout" -->

# useEffect hook

##--##

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
