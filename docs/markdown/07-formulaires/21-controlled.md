<!-- .slide: class="quote-slide" -->

<blockquote>
<cite>
  You might say a component is “controlled” when the important information in it is driven by props rather than its own local state.
</cite>
</blockquote>

##==##

<!-- .slide: class="with-code" -->

# Controlled

```TypeScript
type InputProps = { value?: string, onChange: ({ input: string }) => void, name: string }

function Input({ name, value = '', onChange }: InputProps) {
    const handleChange = (event: ChangeEvent<HtmlInputElement>) => {
        onChange(event.target.value);
    }
    return <input name={name} value={defaultValue} onChange={handleChange} />;
}
```

<!-- .element: class="big-code" -->
