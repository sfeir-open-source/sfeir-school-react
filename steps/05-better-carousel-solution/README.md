# 05-better-carousel instructions

## How to run?

```Bash
cd ./steps
npm run 05-better-carousel
```

## TODO

1. Show Play/Pause button regarding carousel state

   - Edit the `src/components/Carousel.tsx` component
   - If state is `PLAY`, only show Pause button
   - If state is `PAUSE`, only show Play button
   - Clicking on Play button change the state to `PLAY`
   - Clicking on Pause button change the state to `PAUSE`

2. Make the Carousel playing

   - If state is `PLAY`, the Carousel should show next person automatically after 2 seconds
   - If state is `PAUSE`, the interval should be cleared
