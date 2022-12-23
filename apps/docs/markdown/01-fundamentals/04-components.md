<!-- .slide: class="with-code" -->
# Components

- JavaScript function
- Independent and isolated pieces of UI
- Reusable : use them anywhere
- Composable : use them to create other components
- Has its own lifecycle

##==##
<!-- .slide: class="with-code two-column" -->

card.js
```javascript []
export function Card() {
    return "<h1>Hello World</h1>"
}
```

settings.js
```javascript []
import { Card } from './components/card.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Card />);
```

index.html
```html []
<html>
    <head>...</head>
    <body>
        <div id="root"></div>
        <script type="text/babel" src="settings.js"></script>
    </body>
</html>
```

##==##
<b>Preview</b>

\<h1>Hello World\</h1>

<i style="color: red">Oops! the "h1" is not interpreted by my browser, why?</i>

- We rendered this via our Virtual DOM by saying 'I want a string like this: "\<h1>Hello World\</h1>"'
```javascript []
export function Card() {
    return "<h1>Hello World</h1>"
}
```
- We must use another way to describe the fact we want to render a h1 with "Hello World"
```javascript []
export function Card() {
    return React.createElement("h1", { }, "Hello World");
}
```
- React.createElement can be very verbose so we use something better : JSX
```javascript []
export function Card() {
    return (<h1>Hello World</h1>);
}
```
<!-- .element: class="list-fragment" -->