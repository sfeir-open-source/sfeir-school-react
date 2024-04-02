<!-- .slide: class="with-code" -->

# Fetch in JavaScript

```TypeScript
const body = JSON.stringify({ firstname: 'Jane', lastname: 'Doe' });
const response = fetch('http://localhost:3000/people', { method: 'POST', body });
```

<!-- .element: class="big-code" -->

Notes:

- body can be a string or a FormData
