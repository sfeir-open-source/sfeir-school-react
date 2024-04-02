<!-- .slide: class="quote-slide" -->

# useEffect !

<blockquote>
<cite>
Some components need to synchronize with external systems. For example, you might want to control a non-React component based on the React state, set up a server connection, or send an analytics log when a component appears on the screen. Effects let you run some code after rendering so that you can synchronize your component with some system outside of React.
</cite>
</blockquote>

##==##

<!-- .slide: class="with-code" -->

# useEffect

```TypeScript
function Component() {
    useEffect(() => {
      // do something that have a side effect
      return () => // do cleanup
    }, [
        // here the dependencies
    ])
   // ...
}
```

<!-- .element: class="big-code" -->

##==##

# useEffect - Side effects

##==##

# useEffect - Side effects

- http fetch

##==##

# useEffect - Side effects

- http fetch
- manipulating DOM

##==##

# useEffect - Side effects

- http fetch
- manipulating DOM
- access to globals (`window`, `document`, etc.)

##==##

# useEffect - Side effects

- http fetch
- manipulating DOM
- access to globals (`window`, `document`, etc.)
- listen native event listener (`document.addEventListener('storage', () => ...)`)

##==##

# useEffect - Side effects

- http fetch
- manipulating DOM
- access to globals (`window`, `document`, etc.)
- listen native event listener (`document.addEventListener('storage', () => ...)`)
- ...

##==##

# useEffect - Dependencies

##==##

# useEffect - Dependencies

- []: the effect will run only once when mount the component

##==##

# useEffect - Dependencies

- []: the effect will run only once when mount the component
- [one, two, ...]: the effect will run every time one of the references changes

##==##

# useEffect - Dependencies

- []: the effect will run only once when mount the component
- [one, two, ...]: the effect will run every time one of the references changes
- no deps array: the effect will run after each (re-)render

##==##

<!-- .slide: class="with-code" -->

# useEffect - practical case

```TypeScript [1,4,8]
function Person() {
  const [person, setPerson] = useState<Person | null>(null);

  useEffect(() => {
      fetch(`http://localhost:3000/people/1`)
        .then((res): Promise<Person> => res.json())
        .then((newPerson) => (setPerson(newPerson)));
    }, []);

    return <pre>{person?.firstname}</pre>
}
```

<!-- .element: class="big-code" -->

Notes:

- Ask: when does the effect will be run? And what will be displayed?
- => once after the component mount
- => it will show undefined at start, then when the fetch success the person name

##==##

<!-- .slide: class="with-code" -->

# useEffect - practical case

```TypeScript [1,4-5,8]
function Person({ id }: { id: string }) {
  const [person, setPerson] = useState<Person | null>(null);

  useEffect(() => {
      fetch(`http://localhost:3000/people/${id}`)
        .then((res): Promise<Person> => res.json())
        .then((newPerson) => (setPerson(newPerson)));
    }, []);

    return <pre>{person?.firstname}</pre>
}
```

<!-- .element: class="big-code" -->

Notes:

- Ask: when does the effect will be run? And what will be displayed?
- => once after the component mount
- => it will show undefined at start, then when the fetch success the person name
  => but will never fetch again if the id change

##==##

<!-- .slide: class="with-code" -->

# useEffect - practical case

```TypeScript [1,4,8]
function Person({ id }: { id: string }) {
  const [person, setPerson] = useState<Person | null>(null);

  useEffect(() => {
      fetch(`http://localhost:3000/people/${id}`)
        .then((res): Promise<Person> => res.json())
        .then((newPerson) => (setPerson(newPerson)));
    }, [id]);

    return <pre>{person?.firstname}</pre>
}
```

<!-- .element: class="big-code" -->

Notes:

- Ask: when does the effect will be run? And what will be displayed?
- => once after render, then every time id will change
- => it will show undefined at start, then when the fetch success the person name

##==##

<!-- .slide: class="with-code" -->

# useEffect - practical case

```TypeScript [1,4,8]
function Person({ id }: { id: string }) {
  const [person, setPerson] = useState<Person | null>(null);

  useEffect(() => {
      fetch(`http://localhost:3000/people/${id}`)
        .then((res): Promise<Person> => res.json())
        .then((newPerson) => (setPerson(newPerson)));
    });

    return <pre>{person?.firstname}</pre>
}
```

<!-- .element: class="big-code" -->

Notes:

- Ask: when does the effect will be run? And what will be displayed?
- => once after every (re-)render
- => it will show undefined at start,
  - then when the fetch success the person name
  - re-render occur so fetch again
  - and again
  - and again
  - ...
