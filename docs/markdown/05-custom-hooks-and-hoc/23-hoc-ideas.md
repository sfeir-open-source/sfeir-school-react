<!-- .slide: class="with-code" -->

# Some HOC idea: wrap with component

```TypeScript
function withBold<TProps>(Inner: React.ComponentType<TProps>) {
    return (props: TProps) => {
        return <strong><Inner {...props} /></strong>;
    }
}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Some HOC idea: taking parameter

```TypeScript
function withStyle<TProps>(Inner: React.ComponentType<TProps>, style: 'bold' | 'italic') {
    return (props: TProps) => {
        if (style === 'bold') {
            return <strong><Inner {...props} /></strong>;
        } else {
            return <em><Inner {...props} /></em>;
        }
    }
}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Some HOC idea: edit props

```TypeScript
function withCapitalize<TProps extends { text: string }>(Inner: React.ComponentType<TProps>) {
    return ({ text, ...props }: TProps) => {
        return <Inner text={text?.toLocalUpperCase()} {...props} />;
    }
}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Some HOC idea: props validation

```TypeScript
function withTextValidation<TProps extends { text: string }>(
    Inner: React.ComponentType<TProps>,
    ) {
    return ({ text, ...props }: TProps) => {
        if (!text) {
            return <p>🙊</p>
        }
        return <Inner text={text} {...props} />;
    }
}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Some HOC idea: default value

```TypeScript
function withDefaults<TProps extends { text: string }>(
    Inner: React.ComponentType<TProps>,
    defaults: Partial<TProps>,
    ) {
    return (props: TProps) => {
        const innerProps: TProps = { ...defaults, ...props };
        return <Inner {...props} />;
    }
}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Some HOC idea: add behavior

```TypeScript
type ClickableProps<TInnerProps> =
    { onClick: VoidFunction } &
    TInnerProps &
    JSX.IntrinsicAttributes;
function withClickable<TProps extends JSX.IntrinsicAttributes>(
    Inner: React.ComponentType<TProps>,
    ) {
    return ({ onClick, ...props }: TInnerProps<TProps>) => {
        return <button onClick={onClick}><Inner {...(props as TProps)} /></button>;
    }
}
```

<!-- .element: class="big-code" -->
