<!-- .slide: class="two-column"-->
# A Tree Component

<br/><br/>

- A React application is a composition of components <br/><br/>
- Children are displayed inside their parents if there are presents in the template of the parent<br/><br/>

##--##

<!-- .slide: class="with-code inconsolata"-->

<br/><br/><br/>


```tsx
import Header from './Header';

function App() {
  return (
    <main>
      <Header />
      <div>
        <h1>Hello Students</h1>
      </div>
    </main>
  );
}
```
<!-- .element: class="big-code"-->
