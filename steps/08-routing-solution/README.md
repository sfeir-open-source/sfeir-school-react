# 08-routing instructions

## How to run?

```Bash
cd ./steps
npm run 08-routing
```

## TODO

1. Setup router

   - Create file `src/pages/router.tsx`
   - Use `createBrowserRouter` to create a router instance (with 3 routes: /, /people and "not found")
   - Add `RouterProvider` in the `App` component (`src/App.tsx`)
   - Replace `<App/>` in `src/main.tsx` with `<RouterProvider router={router}/>`

2. Create three pages component: `HomePage`, `PeopleGridPage` and `NotFoundPage`

   - Create page components in `src/pages` (example: `src/pages/HomePage.tsx`)
   - Use these page components in the router
   - Move the random `PersonCard` and the `Carousel` from `App` to the `HomePage` component
   - Move the `PeopleGrid` from `App` to the `PeopleGridPage` component

3. Create link in the top bar on the icons with the `Link` component from React Router
