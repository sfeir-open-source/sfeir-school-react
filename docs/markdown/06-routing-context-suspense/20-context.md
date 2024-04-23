<!-- .slide: class="transition" -->

# Context

##==##

# With props

![center](./assets/images/context_passing-data-lifting-state.webp)

##==##

# With props

![center](./assets/images/context_passing-data-prop-drilling.webp)

##==##

# With Context

![center](./assets/images/context_passing-data-context-close.webp)

##==##

# With Context

![center](./assets/images/context_passing-data-context-far.webp)

##==##

<!-- .slide: class="with-code" -->

# Context - create

```TypeScript
import { createContext } from 'react';

export const ThemeContext = createContext<'light'|'dark'>('light');
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Context - use it

```TypeScript
function ShowColorTheme() {
    const theme = useContext(ThemeContext);
    return <p>{theme}</p>
}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Context - provide it

```TypeScript
function App() {
    const [theme, setTheme] = useState('light');
    return <ThemeContext.Provider value={theme}>
        <ShowColorTheme />
    </ThemeContext.Provider>
}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Context - provide it (multiple times)

```TypeScript [2-11]
function App() {
    const [theme1, setTheme1] = useState('light');
    const [theme2, setTheme2] = useState('dark');
    return <>
        <ThemeContext.Provider value={theme1}>
            <ShowColorTheme />
        </ThemeContext.Provider>
        <ThemeContext.Provider value={theme2}>
            <ShowColorTheme />
        </ThemeContext.Provider>
    </>
}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Context - wrap it all!

```TypeScript [3-5|7-9|11-16]
import { createContext } from 'react';

const ThemeContext = createContext<{
    theme:'light'|'dark', setTheme(newTheme:'light'|'dark'): void
}>({ theme: 'light', setTheme() {} });

export function useTheme() {
    return useContext(ThemeContext);
}

export ThemeProvider() {
    const [theme, setTheme] = useState('light');
    return <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
    </ThemeContext.Provider>
}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Use theme everywhere!

```TypeScript [1|3-6|8-11]
import { useTheme } from './useTheme';

function ShowColorTheme() {
    const { theme } = useTheme();
    return <p>{theme}</p>
}

function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    return <button onClick={() => setTheme(nextTheme)}>Active {nextTheme}</button>;
}
```

<!-- .element: class="big-code" -->
