import { describe, expect, it } from 'vitest';
import { CarouselReducerState, carouselActions, carouselSlice } from './carousel-slice';

describe('carouselSlice', () => {
  it('should get initial state by default', () => {
    const expectedState: CarouselReducerState = {
      people: [],
      currentIndex: -1,
      currentPerson: undefined,
      status: 'PAUSE',
    };
    expect(carouselSlice.reducer(undefined, { type: 'unknown action' })).toEqual(expectedState);
  });
  describe(carouselActions.updatePeople.type, () => {
    it('should update the people list', () => {
      const initialState: CarouselReducerState = {
        people: [],
        currentIndex: -1,
        currentPerson: undefined,
        status: 'PAUSE',
      };
      const action = carouselActions.updatePeople([{ id: 'A' } as Person]);
      const expectedState: CarouselReducerState = {
        people: [{ id: 'A' } as Person],
        currentIndex: 0,
        currentPerson: { id: 'A' } as Person,
        status: 'PAUSE',
      };
      expect(carouselSlice.reducer(initialState, action)).toEqual(expectedState);
    });
    it('should reset on update people when carousel is not on the first person');
  });
  describe(carouselActions.next.type, () => {
    it('should go to the next person when status is PLAY');
    it('should go to the next person when status is PAUSE');
    it('should go to the first person when at the end of the list');
  });
  describe(carouselActions.previous.type, () => {
    it('should go to the previous person when status is PLAY');
    it('should go to the previous person when status is PAUSE');
    it('should go to the last person when at the start of the list');
  });
  describe(carouselActions.play.type, () => {
    it('should set the status to PLAY when status is PAUSE');
    it('should do nothing when already on the PLAY status');
  });
  describe(carouselActions.play.type, () => {
    it('should set the status to PAUSE when status is PLAY');
    it('should do nothing when already on the PAUSE status');
  });
});
