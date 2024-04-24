import { configureStore } from '@reduxjs/toolkit';
import { carouselSlice } from './carousel-slice.ts';
import { useDispatch, useSelector, useStore } from 'react-redux';

export const store = configureStore({
  reducer: {
    carousel: carouselSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<typeof store>();
