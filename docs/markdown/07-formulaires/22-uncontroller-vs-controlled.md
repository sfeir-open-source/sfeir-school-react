<!-- .slide: class="with-code" -->

# Controlled or uncontrolled?

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

<!-- .slide: class="quote-slide" -->

<blockquote>
<cite>
  In practice, “controlled” and “uncontrolled” aren’t strict technical terms—each component usually has some mix of both local state and props. However, this is a useful way to talk about how components are designed and what capabilities they offer.
</cite>
</blockquote>
