import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { RootState } from './index';
import { navigateTo } from './actions';
import { fetchPeople } from './thunks';

type CarouselStatus = 'PLAY' | 'PAUSE';

export interface CarouselReducerState {
  people: Person[];
  currentIndex: number;
  currentPerson: Person | undefined;
  status: CarouselStatus;
}

const initialState: CarouselReducerState = { people: [], currentIndex: -1, currentPerson: undefined, status: 'PAUSE' };

export const carouselSlice = createSlice({
  name: 'carousel',
  initialState,
  reducers: {
    updatePeople: (state, action: PayloadAction<Person[]>) => {
      state.people = action.payload;
      state.currentIndex = 0;
      state.currentPerson = state.people[0];
    },
    previous: (state) => {
      state.currentIndex = state.currentIndex === 0 ? state.people.length - 1 : state.currentIndex - 1;
      state.currentPerson = state.people[state.currentIndex];
    },
    next: (state) => {
      state.currentIndex = state.currentIndex === state.people.length - 1 ? 0 : state.currentIndex + 1;
      state.currentPerson = state.people[state.currentIndex];
    },
    play: (state) => {
      state.status = 'PLAY';
    },
    pause: (state) => {
      state.status = 'PAUSE';
    },
  },
  extraReducers(builder) {
    builder.addCase(navigateTo, (state, action) => {
      if (action.payload.pathname === '/') {
        state.status = 'PLAY';
      } else {
        state.currentIndex = 0;
        state.currentPerson = state.people[0];
        state.status = 'PAUSE';
      }
    });
    builder.addCase(fetchPeople.fulfilled, (state, action) => {
      state.people = action.payload;
      state.currentIndex = 0;
      state.currentPerson = action.payload[0];
    });
  },
});

// Action creators are generated for each case reducer function
export const carouselActions = carouselSlice.actions;

const carouselStateSelector =
  <T>(project: (carouselState: CarouselReducerState) => T) =>
  (state: RootState) =>
    project(state.carousel);
export const selectPeople = carouselStateSelector((state) => state.people);
export const selectPlayStatus = carouselStateSelector((state) => state.status);
export const selectCurrentPerson = carouselStateSelector((state) => state.currentPerson);
