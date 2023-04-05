<!-- .slide: class="two-column-layout" -->

# Handling events

##--##

<br/>

#### DOM
* event names are lowercase
* string is evaluated (what's the context?)

<br/>

#### React
* names are camelCase
* functions are called in global context like pure callbacks

##--##

```html
    <script>
      function doIt() {
        console.log('did it');
        // this?
      }
    </script>
    <button onclick="doIt()">
      do it the old way !
    </button>
```

```javascript
    const Action = () => {
      const doIt = () => {
        console.log('did it');
        // this?
      }
      return (
        <button onClick={doIt}>
          do it with React !
        </button>
      )
    }
```

Notes:
- show setState with a function
- explain async nature of setState
