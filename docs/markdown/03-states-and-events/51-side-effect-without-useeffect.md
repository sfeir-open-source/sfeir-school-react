<!-- .slide: class="with-code" -->

# Fetch in a component ?

```TypeScript
function Peoples() {
  let people: Person[] = [];
  fetch('http://localhost:3000/people')
    .then((res): Promise<Person[]> => res.json())
    .then((newPeople) => (people = newPeople));

    return <ul>{people.map(person => (
        <li>{person.firstname} {person.lastname}</li>
    ))}</ul>
}
```

<!-- .element: class="big-code" -->

Notes:

- ask: does it work?

##==##

<!-- .slide: class="with-code" -->

# Fetch in a component ?

```TypeScript
function Peoples() {
  let people: Person[] = [];
  fetch('http://localhost:3000/people')
    .then((res): Promise<Person[]> => res.json())
    .then((newPeople) => (people = newPeople));

    return <ul>{people.map(person => (
        <li>{person.firstname} {person.lastname}</li>
    ))}</ul>
}
```

<!-- .element: class="big-code" -->

Nope, we will have white screen...

Notes:

- React expect you use pure function
- fetch is impure by nature
- changing "people" will not cause re-render

##==##

<!-- .slide: class="with-code" -->

# Fetch in a component ?

```TypeScript [2,5]
function Peoples() {
  const [people, setState] = useState<Person[]>([]);
  fetch('http://localhost:3000/people')
    .then((res): Promise<Person[]> => res.json())
    .then((newPeople) => (setState(newPeople)));

    return <ul>{people.map(person => (
        <li>{person.firstname} {person.lastname}</li>
    ))}</ul>
}
```

<!-- .element: class="big-code" -->

Nope, we will have infinite re-render...

##==##

![center](assets/images/fetch-infinite-rendering.gif)
