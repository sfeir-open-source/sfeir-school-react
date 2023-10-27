<!-- .slide: class="transition-bg-blue-3 right"-->
# Famous Hello World

##==##

# What concretely is React?

<br/><br/>

- React is a Web library that let you to create web application easily<br/><br/>
- React is a Javascript library but you can use it with Typescript as well<br/><br/>
- React is based on JSX<br/><br/>

##==##

<!-- .slide: class="with-code inconsolata"-->
# Okay but what is JSX?

- JSX is a syntax extension to JavaScript<br/><br/>
- Javascript was in charge of HTML<br/><br/>
- HTML, CSS , and Javascript in the same place<br/><br/>

```jsx
import './index.css'

const element = <h1>Hello, world!</h1>;
```
<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="two-column"-->

# Bootstrapped is really simple 

<br/><br/>
- **2 files**<br/><br/>
  - index.html (main html file for Client Side Rendering)<br/><br/>
  - main.j(t)sx (main file for react application) <br/><br/>

##--##

<!-- .slide: class="with-code inconsolata"-->

<br/><br/>

```html
<!doctype html>
<html lang="en">
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```
<!-- .element: class="big-code"-->

```tsx
const root = createRoot(document.getElementById('root') as HTMLDivElement);
root.render(
  <StrictMode>
    <div>
      <h1>Hello Students</h1>
    </div>
  </StrictMode>
);
```
<!-- .element: class="big-code"-->

##==##

# Why not? but what the hell is that?

- **createRoot**: function to React root for displaying react content inside a specific node DOM<br/><br/>
- **StrictMode**: is a tool for highlighting potential problems in an application in dev mode<br/><br/>
- **render**: called on the Root Element to render react content

<br/><br/>

StrictMode is a tool for highlighting potential problems in an application. StrictMode does not render any visible UI. It activates additional checks and warnings for its descendants. By design this component is not mandatory, it's just recommended to use it in dev.
<!-- .element: class="important"-->
