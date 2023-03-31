<!-- .slide: class="two-column" -->

# Handling events

<br/>

#### DOM
- prevent default behaviour by returning false

<br/>

#### React
- preventDefault() must be called explicitly

##--##

<!-- .slide: class="with-code" -->

```html
    <script>
      function doIt() {
        console.log('did it');
        return false;
      }
    </script>
    <a href="#" onclick="doIt()">
      do it the old way !
    </a>
```
<!-- .element: style="margin-top:200px" -->

```javascript
    const Action = () => {
      function doIt(e) {
        e.preventDefault();
        console.log('did it');
      }
      return (
        <a href="#" onClick={doIt}>
          do it with React !
        </a>
      )
    }
```

Notes:
- show setState with a function
- explain async nature of setState
