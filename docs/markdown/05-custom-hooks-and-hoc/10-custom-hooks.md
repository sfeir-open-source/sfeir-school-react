<!-- .slide: class="transition" -->

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

# Remember the Hook Rules!

##==##

# Remember the Hook Rules!

- No hook call in conditions or loop

##==##

# Remember the Hook Rules!

- No hook call in conditions or loop
- No hook call in inner function

##==##

# Remember the Hook Rules!

- No hook call in conditions or loop
- No hook call in inner function
- No hook call in classical JS function
