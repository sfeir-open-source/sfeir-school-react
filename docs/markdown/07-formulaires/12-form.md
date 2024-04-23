<!-- .slide: class="with-code" -->

# With form context

```TypeScript [9,11]
type MyFormProps = { initialValue?: string, onChange: ({ input: string }) => void }

function MyForm({ initialValue = '', onChange }: MyFormProps) {
    const [value, setValue] = useState(initialValue);
    const handleChange = (event: ChangeEvent<HtmlInputElement>) => {
        setValue(event.target.value);
        onChange({ input: event.target.value });
    };
    return <form>
        <input defaultValue={initialValue} onChange={handleChange} />
    </form>;
}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# With submit button

```TypeScript [3,4,7,9]
type MyFormProps = {
    initialValue?: string, onChange: ({ input: string }) => void,
    onSubmit: ({ input: string }) => void }
function MyForm({ initialValue = '', onChange, onSubmit }: MyFormProps) {
    const [value, setValue] = useState(initialValue);
    const handleChange = (event: ChangeEvent<HtmlInputElement>) => { /* ... */ };
    return <form onSubmit={() => onSubmit({ input: value })}>
        <input defaultValue={value} onChange={handleChange} />
        <button type="submit">Send</button>
    </form>;
}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Full form

```TypeScript
type InputProps = { defaultValue?: string, onChange: ({ input: string }) => void, name: string }

function Input({ name, defaultValue = '', onChange }: InputProps) {
    const handleChange = (event: ChangeEvent<HtmlInputElement>) => {
        onChange(event.target.value);
    }
    return <input name={name} defaultValue={defaultValue} onChange={handleChange} />;
}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Full form

```TypeScript
type MyFormValues = { firstname: string; lastname: string; }
type MyFormProps = { initialValue?: Partial<MyFormValues>, onSubmit: (state: MyFormValues) => void }
```

<!-- .element: class="big-code" -->

```TypeScript
function MyForm({ initialValue = {}, onSubmit }: MyFormProps) {
    const [values, setValues] = useState<MyFormValues>({ firstname: '', lastname: '', ...initialValue });
    const handleChange = (name: string) => (newValue: string) => {
        setValues({ ...values, [name]: newValue });
    }
    return <form onSubmit={() => onSubmit(values)}>
        <Input name="firstname" defaultValue={values.firstname} onChange={handleChange('firstname')} />;
        <Input name="lastname" defaultValue={values.lastname} onChange={handleChange('lastname')} />;
        <button type="submit">Save</button>
    </form>
}
```

<!-- .element: class="big-code" -->
