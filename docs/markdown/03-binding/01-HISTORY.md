<!-- .slide: class="two-column"-->
# Binding in Pure Javascript

```html
<html>
    Bonjour <span id="name"></span>
    <input type="text" />
</html>
```
<!-- .element: class="big-code" -->

##--##
<!-- .slide: class="with-code inconsolata" -->

<br/><br/><br/>

```javascript
window.onload = function() {
  var span= document.querySelector('name');
  var input = document.getElementsByTagName('input')[0];
  
  input.onkeyup = function() {
    if (span.textContent || span.textContent === "") {
      span.textContent = input.value;
    }else if (span.innerText || span.innerText === "") {
      span.innerText = input.value;
    }
  }
}
```
<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="two-column"-->
# Binding using Jquery

```html
<html>
    Bonjour <span id="name"></span>
    <input type="text" />
</html>
```
<!-- .element: class="big-code" -->

##--##
<!-- .slide: class="with-code inconsolata" -->
<br/><br/><br/>

```javascript
$(document).ready(function() {
  var $input = $('input');
  var $span = $('#name');
  $input.keyup(function(event) {
    $span.text(event.target.value);
  });
})
```
<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata"-->
# Binding using React

```tsx
function App() {
  const [name, setName] = useState('SFEIR');
  return (
    <>
      Bonjour <span id="name">{name}</span>
      <input type="text" onInput={e => setName(e.target.value)} />
    </>
  );
}

```
<!-- .element: class="big-code"-->


