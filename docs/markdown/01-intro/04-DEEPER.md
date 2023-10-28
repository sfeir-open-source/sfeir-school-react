<!-- .slide: class="transition-bg-blue-3 right"-->
# Deep Deeper in basic concepts

##==##

# What is client side rendering?

<br/><br/>

- Client Side Rendering means rendering page using client side javascript<br/><br/>
- In the browser you app is represented by a tree of DOM elements<br/><br/>
- All data, navigation, logic and views are handled by the browser<br/><br/>

##==##

# Impact of client side rendering app?

<br/><br/>

- **LCP** (Largest Contentful Paint) impacted in negative way<br/><br/>
- **SEO** (Search Engine Optimization) impacted in negative way<br/><br/>
- **Caching** not possible before app totally loaded

##==##

# Deep dive in createRoot function

**createRoot** create a "container" that can understand React. Base on this definition two mode is possible with React.

<br/><br/>

- Rendering an app fully built with react<br/><br/>
- Rendering page with some elements built with react

##==##

<!-- .slide: class="with-code inconsolata"-->
# Rendering an app fully built with react

Wrap all the application into an root component.
<!-- .element: class="important"-->


```tsx
export function APP(){
  return (
    <div> <!-- Here goes your content--> </div>
  )
}
```
<!-- .element: class="big-code"-->

```tsx [1,5]
import { APP } from './app';
const root = createRoot(document.getElementById('root') as HTMLDivElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
```
<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="with-code inconsolata"-->
# Rendering an app partially built with React

```html
<!DOCTYPE html>
<html>
  <head><title>My app</title></head>
  <body>
    <main>
      <p>This paragraph is not rendered by React (open index.html to verify).</p>
      <section id="comments"></section>
    </main>
  </body>
  <script src="/src/main.tsx"></script>
</html>
```
<!-- .element: class="big-code"-->

```tsx
const commentDomNode = document.getElementById('comments');
const commentRoot = createRoot(commentDomNode); 
commentRoot.render(<Comments />)
```
<!-- .element: class="big-code"-->

