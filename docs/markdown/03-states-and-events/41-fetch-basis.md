<!-- .slide: class="with-code" -->

# Fetch in JavaScript

```TypeScript
const response: Promise<Response> = fetch('http://localhost:3000/people');

```

<!-- .element: class="big-code" -->

Notes:

- fetch return a promise with the Response
- body is accessible through multiple format: json, text, blob, array buffer or form data

##==##

<!-- .slide: class="with-code" -->

# Fetch in JavaScript

```TypeScript
const response: Promise<any> = fetch('http://localhost:3000/people')
    .then(response => response.json());
```

<!-- .element: class="big-code" -->

Notes:

- but the conversion is also async and return a promise
- so let's use a .then() to convert it from json
- now we have Promise<any> because fetch does not known what is inside the body

##==##

<!-- .slide: class="with-code" -->

# Fetch in JavaScript

Type the body by describe the response type...

```TypeScript
const response: Promise<Person[]> = fetch('http://localhost:3000/people')
    .then((response): Promise<Person[]> => response.json());
```

<!-- .element: class="big-code" -->

...or with a cast

```TypeScript
const response = fetch('http://localhost:3000/people')
    .then(response => response.json() as Promise<Person[]>);
```

<!-- .element: class="big-code" -->

Notes:

- we can cast is easily from any
