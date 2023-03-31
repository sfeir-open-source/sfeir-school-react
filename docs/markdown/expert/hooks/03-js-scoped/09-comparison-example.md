<!-- .slide: class="two-column" -->

## Class

```javascript
class ProfilePage extends React.Component {
  showMessage = () => {
    alert('Followed ' + this.props.user);
  };

  handleClick = () => {
    setTimeout(this.showMessage, 3000);
  };

  render() {
    return <button onClick={this.handleClick}>Follow</button>;
  }
}
```

![](https://overreacted.io/386a449110202d5140d67336a0ade5a0/bug.gif)
##--##

## Hook
```javascript
function ProfilePage(props) {
  const showMessage = () => {
    alert('Followed ' + props.user);
  };

  const handleClick = () => {
    setTimeout(showMessage, 3000);
  };

  return (
    <button onClick={handleClick}>Follow</button>
  );
}
```

![](https://overreacted.io/84396c4b3982827bead96912a947904e/fix.gif)


[Credits : How Are Function Components Different from Classes?](https://overreacted.io/how-are-function-components-different-from-classes/) -- [Dan Abramov](https://mobile.twitter.com)
