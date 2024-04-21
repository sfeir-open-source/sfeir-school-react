<!-- .slide: class="with-code" -->

# One input form

```TypeScript
function MyForm() {
    return <input />;
}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# One input form

With initial value

```TypeScript
type MyFormProps = { initialValue?: string }

function MyForm({ initialValue = '' }: MyFormProps) {
    return <input defaultValue={initialValue} />;
}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# One input form

Follow the value change

```TypeScript [4,5,6]
type MyFormProps = { initialValue?: string }

function MyForm({ initialValue = '' }: MyFormProps) {
    const [value, setValue] = useState(initialValue);
    const handleChange=(event: ChangeEvent<HtmlInputElement>) => setValue(event.target.value);
    return <input defaultValue={initialValue} onChange={handleChange} />;
}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# One input form

Give access to the state change

```TypeScript [1,3,7]
type MyFormProps = { initialValue?: string, onChange: ({ input: string }) => void }

function MyForm({ initialValue = '', onChange }: MyFormProps) {
    const [value, setValue] = useState(initialValue);
    const handleChange = (event: ChangeEvent<HtmlInputElement>) => {
        setValue(event.target.value);
        onChange({ input: event.target.value });
    };
    return <input defaultValue={initialValue} onChange={handleChange} />;
}
```

<!-- .element: class="big-code" -->
