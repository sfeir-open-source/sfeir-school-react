<!-- .slide: class="two-column with-code" -->

# refs

**refs** of **DOM components** give access to the document object instance - this includes **WebComponents**

**refs** of **class components** give access to their **exposed API**

**you can't ref a function component**

##--##
<!-- .slide: class="with-code" -->

```javascript
class Jukebox extends React.Component {
  audioElmt = React.createRef();

  play() {
    this.audioElmt.current.play();
  }

  render() {
    return <audio ref={this.audioElmt} />;
  }
}

const MyInput = (props) => {
  const inputRef = useRef();

  execWhenItAppears(() => {
    inputRef.current.focus();
  });

  return <input ref={inputRef} {...props} />;
};
```
<!-- .element: style="margin-top:100px" -->
