<!-- .slide: class="with-code" -->

# Fetch in JavaScript

```TypeScript
const headers = { 'Authorization': `Bearer ${token}` };
const body = JSON.stringify({ firstname: 'Jane', lastname: 'Doe' });
const response = fetch('http://localhost:3000/people', { method: 'POST', body, headers });
```

<!-- .element: class="big-code" -->
