import { configureStore } from '@reduxjs/toolkit';
import { carouselSlice } from './carousel-slice.ts';

export const store = configureStore({
  reducer: {
    carousel: carouselSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
