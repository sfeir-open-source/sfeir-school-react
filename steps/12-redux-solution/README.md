# 12-redux instructions

## How to run?

```Bash
cd ./steps
npm run 12-redux
```

## TODO

0. Install the Redux extension

   - Chrome: https://chromewebstore.google.com/detail/lmhkpmbekcpmknklioeibfkpmmfibljd
   - Firefox: https://addons.mozilla.org/fr/firefox/addon/reduxdevtools/

1. Setup the store

   - Create the store in `src/store/index.ts` using `configureStore` from `@reduxjs/toolkit`
   - Give access to the store to the whole app by providing it in `src/main.tsx`

2. Create the slice for the Carousel state

   - You will need 5 actions:
     - updatePeople => to init the people list in the redux state
     - previous
     - next
     - play
     - pause
   - Do not forget to add your slide to your store by adding it to the `configureStore` config

3. Rewrite Carousel `useCarousel` to use Redux

   - Edit only `useCarousel` from `src/components/Carousel.tsx`
   - You should not change the API (states and functions) returned by the `useCarousel` hook, only change its implementation
   - Use `useEffect` to dispatch new people array to the store

4. Pause and reset to the first person the carousel on navigate to another page

   - Create in `src/store/actions.ts` an action `navigateTo`
   - Dispatch this action at every router navigation
   - Add an `extraReducer` to `carouselSlice` to pause and reset the carousel state when navigating outside the home page (pathname === '/')
   - play when navigating to home page
