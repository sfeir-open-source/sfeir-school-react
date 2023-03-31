<!-- .slide: class="with-code two-column" -->

# useEffect hook

```javascript
const FromServer = () => {
  useEffect(() => {
    let set = true;
    load().then((data) => {
      if (set) setData(data);
    });
    return () => (set = false);
  }, []);

  return <Something />;
};
```

##--##
<!-- .slide: class="with-code" -->

```javascript
class FromServer extends React.Component {
  async componentDidMount() {
    this.setData = true;
    const data = await load();
    if (this.setData === true) {
      this.setState({ data });
    }
  }

  componentWillUnmount() {
    this.setData = false;
  }

  render() {
    return <Something />;
  }
}
```
<!-- .element: style="margin-top:200px" -->
