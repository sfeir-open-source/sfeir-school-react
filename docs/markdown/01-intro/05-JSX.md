<!-- .slide: class="transition-bg-blue-3 right"-->

# JSX

##==##

# What is JSX ? what we've seen so far.

- JSX is a syntax extension to JavaScript<br/><br/>
- Javascript was in charge of HTML<br/><br/>
- HTML, CSS , and Javascript in the same place<br/><br/>

```jsx
import './index.css';

const element = <h1>Hello, world!</h1>;
```

<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="two-column"-->

# The Rules of JSX

JSX is often compared to the _HTML_ part of React, so it's only natural that JSX shares the same rules as HTML. But since JSX is a syntax extension of JavaScript, there are some notable differences, as you will see below.

<!-- .element: class="important"-->

##==##

<!-- .slide: class="two-column"-->

# Return a single element

- This is a **valid** JSX

```jsx
const element = (
  <div>
    <p> Hello</p>
    <p> World</p>
  </div>
);
```

- This is a **valid** JSX

```jsx
const element = (
  <>
    <p> Hello</p>
    <p> World</p>
  </>
);
```

<br/>

##--##

# Fragments

- This is **not** a valid JSX

```jsx
const element = (
<p> Hello</p>
<p> World</p>
)
```

##--##

_This empty tag is called a Fragment. Fragments let you group things without leaving any trace in the browser HTML tree._

<!-- .element: class="important"-->

##==##

<!-- .slide: class="two-column"-->

# Closing tags

- JSX requires tags to be explicitly closed: self-closing tags like `<img>` must become `<img />`

```jsx
const element = (
  <>
    <img src="link here" alt="desc here" />
  </>
);
```

</br>

- JSX transforms into JavaScript, where JSX attributes become keys in JavaScript objects.

However, keep in mind JavaScript has naming restrictions, like no dashes or reserved words like "class".

<!-- .element: class="important"-->

##--##

# camelCase

- This is a **valid** JSX

```jsx
const element = (
  <>
    <img data-cy="img" src="link here" alt="desc here" className="card__img" />
  </>
);
```

- This is **not** a valid JSX

```jsx
const element = (
  <>
    <img src="link here" alt="desc here" class="card__img" />
  </>
);
```

</br>

_For historical reasons, `aria-*` and `data-*` attributes are written as in HTML with dashes._

##==##

<!-- .slide: class="transition-bg-blue-3 right"-->

# Javascript in JSX with Curly Braces

##==##

# JSX with Curly Braces

In JSX, you can utilize curly braces to embed JavaScript expressions. This allows for dynamic content within your JSX elements.

<br/>

- **Variables**

```jsx
const name = 'John Doe';

const element = <p>Hello, {name}!</p>;
```

- **Functions**

```jsx
function greet() {
  return 'Hello, world!';
}

const element = <p>{greet()}</p>;
```

- **Terinary operator**

```jsx
const name = 'John Doe';

const element = <p>{name ? `Hello, ${name}!` : 'Hello, stranger!'}</p>;
```

##==##

# JavaScript object inside JSX with curly braces

- **Objects**

```jsx
const user = {
  firstName: 'John',
  lastName: 'Doe',
};

const element = (
  <p>
    Hello, {user.firstName} {user.lastName}!
  </p>
);
```

- **CSS style property**

```jsx
const style = {
  color: 'red',
  fontSize: '20px',
};

const element = <p style={style}>Hello, world!</p>;
```

- CSS style property **double curlies**

```jsx
const element = <p style={{ color: 'red', fontSize: '20px' }}>Hello, world!</p>;
```

<br/>

_The next time you see `{{` and `}}` in JSX, know that it’s nothing more than an object inside the JSX curlies!_

<!-- .element: class="important"-->

##==##

<!-- .slide: class="two-column"-->

# Arrays in JSX

<div style="width: calc(100vw + 30vw)">
You can render an array of <b>JSX elements</b> in JSX, but you need to add a <b>key</b> attribute to each element.
</div>

</br>

- This is **valid** JSX
<!-- .element: class="important"-->

```jsx
const names = ['John', 'Jane', 'Jack'];

const element = <ul>{names}</ul>;
```

- Array of JSX elements with **`key`** attribute. This is **Valid** JSX (but not recommended)
<!-- .element: class="important"-->

```jsx
const names = [<li key={1}> John </li>, <li key={2}> Jane </li>, <li key={3}> Jack </li>];

const element = <ul>{names}</ul>;
```

- This is **valid** JSX (but not recommended)
<!-- .element: class="important"-->

```jsx
const names = [{ name: 'John' }, { name: 'Jane' }, { name: 'Jack' }];

const array = [<li key={1}>{names[0].name}</li>, <li key={2}>{names[1].name}</li>, <li key={3}>{names[2].name}</li>];

const element = <ul>{array}</ul>;
```

##--##

<br/><br/><br/><br/><br/>

- This is **not** a valid JSX
<!-- .element: class="important"-->

```jsx
const names = [{ name: 'John' }, { name: 'Jane' }, { name: 'Jack' }];

const element = <ul>{names}</ul>;
```

##==##

- Arrays with **.map** to turn them into JSX elements

```jsx
const names = ['John', 'Jane', 'Jack'];

const element = (
  <ul>
    // It is always better to use an unique identifier for the key.
    {names.map((name, i) => (
      <li key={`${name}-*${i}`}>{name}</li>
    ))}
  </ul>
);
```

- Arrays with **.map** in a separate function

```jsx
const names = [{ name: 'John' }, { name: 'Jane' }, { name: 'Jack' }];

const renderNames = (names) => {
  return names.map((name, i) => <li key={`${name.name}-*${i}`}>{name.name}</li>);
};

const element = <ul>{renderNames(names)}</ul>;
```

- Arrays with **.map** in a variable

```jsx
const names = [{ name: 'John' }, { name: 'Jane' }, { name: 'Jack' }];

const array = names.map((name, i) => <li key={`${name.name}-*${i}`}>{name.name}</li>);
const element = <ul>{array}</ul>;
```

</br>

_In React, the **key** attribute is essential when rendering arrays to help efficiently track element changes._

<!-- .element: class="important"-->
