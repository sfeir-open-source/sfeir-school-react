<!-- .slide: class="with-code" -->

# HOC is HOF but with components

```TypeScript
// this is a Component
function Text({ text }: { text: string }) {
    return <p>{text}</p>;
}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# HOC is HOF but with components

```TypeScript
// this is a Component
function Text({ text }: { text: string }) {
    return <p>{text}</p>;
}
```

<!-- .element: class="big-code" -->

```TypeScript
// this is an HOC
function withCapitalize<TProps extends { text: string }>(Inner: React.ComponentType<TProps>) {
    return ({ text, ...props }: TProps) => {
        return <Inner text={text?.toLocalUpperCase()} {...props} />;
    }
}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# HOC is HOF but with components

```TypeScript
// this is a Component
function Text({ text }: { text: string }) {
    return <p>{text}</p>;
}
```

<!-- .element: class="big-code" -->

```TypeScript
// this is an HOC
function withCapitalize<TProps extends { text: string }>(Inner: React.ComponentType<TProps>) {
    return ({ text, ...props }: TProps) => {
        return <Inner text={text?.toLocalUpperCase()} {...props} />;
    }
}
```

<!-- .element: class="big-code" -->

```TypeScript
// this is HOC usage
const CapitalizedText = withCapitalize(Text);
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# HOC are composable

```TypeScript
const SuperText = withValidation(withStrong(withCapitalize(Text)));
```

<!-- .element: class="big-code" -->
