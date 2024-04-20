# 06-custom-hooks instructions

## How to run?

```Bash
cd ./steps
npm run 06-custom-hooks
```

## TODO

1. Create custom hook to isolate carousel play and navigation logic

   - Isolate the play and navigation logic as a `useCarousel` hook

2. Create custom hook to isolate random person selection

   - Extract data fetch logic to the `useRandomPerson` hook from `src/App.tsx` (in the same file)

3. Create a custom hook for the people fetching

   - Create the file `src/hooks/use-people.ts`
   - Extract data fetch logic to the `usePeople` hook from `src/App.tsx`
