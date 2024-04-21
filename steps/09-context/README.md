# 09-context instructions

## How to run?

```Bash
cd ./steps
npm run 09-context
```

## TODO

1. Create ConfigContext

   - Create file `src/config.tsx`
   - Use `createContext` to build a config Context
   - The context should contains a field `apiBaseUrl: string` and a field `theme: 'blue' | 'pink'`

2. Make accessible the Context to the whole app

   - Create a `AppConfigProvider` component in `src/config.tsx`
   - The `AppConfigProvider` use the context provider and put component children in as children's provider
   - Use `AppConfigProvider` in the `src/main.tsx`

3. Use the context

   - Create a hook `useAppConfig()` in `src/config.tsx`
   - Get the apiBaseUrl in the `usePeople` hook
   - Get the theme in the `Header` component to change the top bar color
   - Get the theme in the `Header` component to change the theme button color

4. Use the context to change theme color on click on the new header button
