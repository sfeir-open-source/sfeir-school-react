# 13-redux-thunk instructions

## How to run?

```Bash
cd ./steps
npm run 13-redux-thunk
```

## TODO

1. Create a thunk `fetchPeople`

   - Use `createAsyncThunk`
   - Create the thunk in `src/store/thunks.ts`
   - It should fetch people

2. Use the `fetchPeople.fulfilled` action in `extraReducer` of `carouselSlice`

3. Rewrite `usePeople` hook

   - No more fetch
   - Dispatch the thunk `fetchPeople`
   - Gets people from the store and not from local state

> You will need to add some declaration to have correct typing: https://redux.js.org/usage/usage-with-typescript#withtypes
