<!-- .slide: class="transition bg-pink" -->

# Custom Hooks

##==##

<!-- .slide: class="with-code" -->

# Hooks are functions!

```TypeScript
function People() {
    const [people, setPeople] = useState<Person[]>([]);
    useEffect(() => {
        fetch('http://localhost:3000/people')
            .then((res): Promise<Person[]> => res.json())
            .then((newPeople) => (setPeople(newPeople)));
    }, []);

    return <ul>{people.map(person => <li>{person.firstname} {person.lastname}</li>)}</ul>
}
```

<!-- .element: class="big-code" -->

Notes:

- hooks are plain functions with conventions (name starting with `use`)
- calling a hook is calling a function

##==##

<!-- .slide: class="with-code" -->

# How to create custom hooks?

Notes:

- Ask: how to create custom hooks?

##==##

<!-- .slide: class="with-code" -->

# Custom hooks are just functions!

```TypeScript
function usePeople() {
    const [people, setPeople] = useState<Person[]>([]);
    useEffect(() => {
        fetch('http://localhost:3000/people')
            .then((res): Promise<Person[]> => res.json())
            .then((newPeople) => (setPeople(newPeople)));
    }, []);
    return people;
}
```

<!-- .element: class="big-code" -->

Notes:

- no overload to use custom hooks
- do not hesitate to group business logic with custom hooks!

##==##

<!-- .slide: class="with-code" -->

# Custom hooks are just functions!

```TypeScript
function People() {
    const people = usePeople();
    return <ul>{
        people.map(person => (
            <li>{person.firstname} {person.lastname}</li>
        ))
    }</ul>
}
```

<!-- .element: class="big-code" -->
