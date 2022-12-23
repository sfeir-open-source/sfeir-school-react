<!-- .slide: class="exercice" -->
# Create your first Component
## Ex 01

1.  Create a Component "xxx"
2.  Returns the HTML
3.  Use the Component in the Parent
<!-- .element: class="list-fragment" -->

##--##
<!-- .slide: class="with-code" -->
# Solution xx

Index.html
```html [5]
<html lang="en">
    <head>...</head>
    <body>
        <div id="root">
            <Card />
        </div>
    </body>
</html>
```

Card.ts
```javascript []
export function Card() { return <span>Hello World</span> }
```