# Hello JSX

```javascript
const element = <h1>Hello JSX</h1>;

function testResult(condition) {
  if (condition) {
    return <div>Yeah, it's true</div>;
  } else {
    return <div>No, it's false</div>;
  }
}
```

<!-- .element: class="big-code" -->

Notes:

- expressions
- you can bind them
- you can return them

##==##

<!-- .slide: class="with-code" -->

# Hello JSX

```javascript
function wrapWithHeader(elmt) {
  return <header>{elmt}</header>;
}

return wrapWithHeader(<h1>Hello JSX</h1>);
```

<!-- .element: class="big-code" -->

Notes:
you can receive them as parameter

##==##

<!-- .slide: class="with-code" -->

# Hello JSX

```javascript
const el4 = <div>the response is {2 * 3 * 7}</div>;

const big = (message) => <h1>{message.toUpperCase()}</h1>;

const weird = <strong>{<small> Well... </small>}</strong>;
```

<!-- .element: class="big-code" -->

Notes:

- interpolate any JS expression
- (even other JSX if you want)

##==##

<!-- .slide: class="with-code" -->

# Hello JSX

```javascript
const image = (
  <img src={imgUrl} alt="an image"></img>
);

const input = (
  <input tabIndex="1" type="text" value={value} />
);

const invalid = (
  <p>first paragraph</p>
  <p>second paragraph</p>
);
```

<!-- .element: class="big-code" -->

Notes:

- attributes are strings in "" or arbitrary JS expressions
- empty tags are always closed (it's XHTML ;)
- a JSX expression must have a root tag (because it's an expression)

##==##

<!-- .slide: class="with-code" -->

# Hello JSX

```javascript
const valid = [<p>first paragraph</p>, <p>second paragraph</p>];

const fragment = (
  <>
    <p>first paragraph</p>
    <p>second paragraph</p>
  </>
);
```

<!-- .element: class="big-code" -->

Notes:

- Notes was a copy of the previous slide (removed it). What to say here ?
