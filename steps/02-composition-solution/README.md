# 02-composition instructions

## How to run?

```Bash
cd ./steps
npm run 02-composition
```

## TODO

1. Decompose the `src/components/PersonCardModel.tsx` component

   - provide randomPerson as property
   - replace static information with person properties

2. Reuse Card modified to accept children

   - `src/components/Card.tsx` provide more components: Card, CardImage, CardHeader and CardInfo
   - use those sub-components in PersonCard
   - there should not remain any style information left in PersonCard
