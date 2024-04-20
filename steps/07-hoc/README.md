# 07-hoc instructions

## How to run?

```Bash
cd ./steps
npm run 07-hoc
```

## TODO

1. Create an HOC for wrapping with the `MuiFab` component

   - Create file `src/components/withFab.tsx`
   - Create an HOC which take a component and a label in parameters
   - You can use the `MuiFab` used in `src/components/Carousel.tsx` as reference
   - The new component should have an `onClick` props

2. Use the HOC `withFab` in `src/components/Carousel.tsx` to create specific action buttons

   - Wanted action buttons: `PreviousFab`, `NextFab`, `PauseFab` and `PlayFab`
