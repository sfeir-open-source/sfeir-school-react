<!-- .slide: class="with-code two-column-layout" -->

# useEffect hook

##--##

```javascript
const FromServer = () => {
  useEffect(() => {
    load().then(setData);
  }, []);

  return <Something />;
};
```

##--##

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
