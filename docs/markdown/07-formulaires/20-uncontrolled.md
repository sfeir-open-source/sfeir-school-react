<!-- .slide: class="transition" -->

# Uncontrolled VS Controlled

##==##

<!-- .slide: class="quote-slide" -->

<blockquote>
<cite>
  It is common to call a component with some local state “uncontrolled”.
</cite>
</blockquote>

##==##

<!-- .slide: class="with-code" -->

# Uncontrolled

```TypeScript
type InputProps = { defaultValue?: string, onChange: ({ input: string }) => void, name: string }

function Input({ name, defaultValue = '', onChange }: InputProps) {
    const [value, setValue] = useState(defaultValue);
    const handleChange = (event: ChangeEvent<HtmlInputElement>) => {
        setValue(event.target.value);
        onChange(event.target.value);
    }
    return <input name={name} value={value} onChange={handleChange} />;
}
```

<!-- .element: class="big-code" -->
