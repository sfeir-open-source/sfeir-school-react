<!-- .slide: class="center" -->

# Hello JSX

demo 01 bisfundamental tooling


Notes:
transform jsbin to use JSX


##==##
<!-- .slide: class="with-code" -->

# Hello JSX

```

const elements = <h1>Hello JSX</h1>;

function testResult(condition) {
  if (condition) {
    return <div>Yeah, it's true</div>;
  } else {
    return <div>No, it's false</div>;
  }
}

```

Notes:
- expressions
- you can bind them
- you can return them


##==##
<!-- .slide: class="with-code" -->

# Hello JSX

```

function wrapWithHeader(elmt) {
  return (
    <header>
      {elmt}
    </header>
  );
}

return wrapWithHeader(<h1>Hello JSX</h1>);

```

Notes:
you can receive them as parameter


##==##
<!-- .slide: class="with-code" -->

# Hello JSX

```

const el4 = (
  <div>the response is { 2 * 3 * 7 }</div>
);

const big = (message) => (
  <h1>{ message.toUpperCase() }</h1>
);

const weird = (
  <strong>{ <small> Well... </small> }</strong>
);

```

Notes:
- interpolate any JS expression
- (even other JSX if you want)


##==##
<!-- .slide: class="with-code" -->

# Hello JSX

```

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

Notes:
- attributes are strings in "" or arbitrary JS expressions
- empty tags are always closed (it's XHTML ;)
- a JSX expression must have a root tag (because it's an expression)


##==##
<!-- .slide: class="with-code" -->

# Hello JSX

```

const valid = [
  <p>first paragraph</p>,
  <p>second paragraph</p>
];

const fragment = (
  <>
       <p>first paragraph</p>
    <p>second paragraph</p>
  </>
);

```

Notes:
- attributes are strings in "" or arbitrary JS expressions
- empty tags are always closed (it's XHTML ;)
- a JSX expression must have a root tag (because it's an expression)
