<!-- .slide: class="with-code two-column" -->

# useEffect hook

```javascript
const FromServer = () => {
  useEffect(() => {
    load().then(setData);
  }, []);

  return <Something />;
};
```

##--##

<!-- .slide: class="with-code" -->

```javascript
class FromServer extends React.Component {
  async componentDidMount() {
    const data = await load();
    this.setState({ data });
  }

  render() {
    return <Something />;
  }
}
```
<!-- .element: style="margin-top:200px" -->
