import { describe, expect, it } from 'vitest';
import { CarouselReducerState, carouselActions, carouselSlice } from './carousel-slice';

function person(person: Partial<Person>) {
  return person as Person;
}

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
      const action = carouselActions.updatePeople([person({ id: 'A' })]);
      const expectedState: CarouselReducerState = {
        people: [person({ id: 'A' })],
        currentIndex: 0,
        currentPerson: person({ id: 'A' }),
        status: 'PAUSE',
      };
      expect(carouselSlice.reducer(initialState, action)).toEqual(expectedState);
    });
    it('should reset on update people when carousel is not on the first person', () => {
      const initialState: CarouselReducerState = {
        people: [person({ id: 'A' }), person({ id: 'B' })],
        currentIndex: 1,
        currentPerson: person({ id: 'B' }),
        status: 'PAUSE',
      };
      const action = carouselActions.updatePeople([person({ id: 'C' })]);
      const expectedState: CarouselReducerState = {
        people: [person({ id: 'C' })],
        currentIndex: 0,
        currentPerson: person({ id: 'C' }),
        status: 'PAUSE',
      };
      expect(carouselSlice.reducer(initialState, action)).toEqual(expectedState);
    });
  });
  describe(carouselActions.next.type, () => {
    it('should go to the next person when status is PLAY', () => {
      const initialState: CarouselReducerState = {
        people: [person({ id: 'A' }), person({ id: 'B' }), person({ id: 'C' })],
        currentIndex: 1,
        currentPerson: person({ id: 'B' }),
        status: 'PLAY',
      };
      const action = carouselActions.next();
      const expectedState: CarouselReducerState = {
        people: [person({ id: 'A' }), person({ id: 'B' }), person({ id: 'C' })],
        currentIndex: 2,
        currentPerson: person({ id: 'C' }),
        status: 'PLAY',
      };
      expect(carouselSlice.reducer(initialState, action)).toEqual(expectedState);
    });
    it('should go to the next person when status is PAUSE', () => {
      const initialState: CarouselReducerState = {
        people: [person({ id: 'A' }), person({ id: 'B' }), person({ id: 'C' })],
        currentIndex: 1,
        currentPerson: person({ id: 'B' }),
        status: 'PAUSE',
      };
      const action = carouselActions.next();
      const expectedState: CarouselReducerState = {
        people: [person({ id: 'A' }), person({ id: 'B' }), person({ id: 'C' })],
        currentIndex: 2,
        currentPerson: person({ id: 'C' }),
        status: 'PAUSE',
      };
      expect(carouselSlice.reducer(initialState, action)).toEqual(expectedState);
    });
    it('should go to the first person when at the end of the list', () => {
      const initialState: CarouselReducerState = {
        people: [person({ id: 'A' }), person({ id: 'B' }), person({ id: 'C' })],
        currentIndex: 2,
        currentPerson: person({ id: 'C' }),
        status: 'PLAY',
      };
      const action = carouselActions.next();
      const expectedState: CarouselReducerState = {
        people: [person({ id: 'A' }), person({ id: 'B' }), person({ id: 'C' })],
        currentIndex: 0,
        currentPerson: person({ id: 'A' }),
        status: 'PLAY',
      };
      expect(carouselSlice.reducer(initialState, action)).toEqual(expectedState);
    });
  });
  describe(carouselActions.previous.type, () => {
    it('should go to the previous person when status is PLAY', () => {
      const initialState: CarouselReducerState = {
        people: [person({ id: 'A' }), person({ id: 'B' }), person({ id: 'C' })],
        currentIndex: 1,
        currentPerson: person({ id: 'B' }),
        status: 'PLAY',
      };
      const action = carouselActions.previous();
      const expectedState: CarouselReducerState = {
        people: [person({ id: 'A' }), person({ id: 'B' }), person({ id: 'C' })],
        currentIndex: 0,
        currentPerson: person({ id: 'A' }),
        status: 'PLAY',
      };
      expect(carouselSlice.reducer(initialState, action)).toEqual(expectedState);
    });
    it('should go to the previous person when status is PAUSE', () => {
      const initialState: CarouselReducerState = {
        people: [person({ id: 'A' }), person({ id: 'B' }), person({ id: 'C' })],
        currentIndex: 1,
        currentPerson: person({ id: 'B' }),
        status: 'PAUSE',
      };
      const action = carouselActions.previous();
      const expectedState: CarouselReducerState = {
        people: [person({ id: 'A' }), person({ id: 'B' }), person({ id: 'C' })],
        currentIndex: 0,
        currentPerson: person({ id: 'A' }),
        status: 'PAUSE',
      };
      expect(carouselSlice.reducer(initialState, action)).toEqual(expectedState);
    });
    it('should go to the last person when at the start of the list', () => {
      const initialState: CarouselReducerState = {
        people: [person({ id: 'A' }), person({ id: 'B' }), person({ id: 'C' })],
        currentIndex: 0,
        currentPerson: person({ id: 'A' }),
        status: 'PLAY',
      };
      const action = carouselActions.previous();
      const expectedState: CarouselReducerState = {
        people: [person({ id: 'A' }), person({ id: 'B' }), person({ id: 'C' })],
        currentIndex: 2,
        currentPerson: person({ id: 'C' }),
        status: 'PLAY',
      };
      expect(carouselSlice.reducer(initialState, action)).toEqual(expectedState);
    });
  });
  describe(carouselActions.play.type, () => {
    it('should set the status to PLAY when status is PAUSE', () => {
      const initialState: CarouselReducerState = {
        people: [person({ id: 'A' }), person({ id: 'B' }), person({ id: 'C' })],
        currentIndex: 1,
        currentPerson: person({ id: 'B' }),
        status: 'PAUSE',
      };
      const action = carouselActions.play();
      const expectedState: CarouselReducerState = {
        people: [person({ id: 'A' }), person({ id: 'B' }), person({ id: 'C' })],
        currentIndex: 1,
        currentPerson: person({ id: 'B' }),
        status: 'PLAY',
      };
      expect(carouselSlice.reducer(initialState, action)).toEqual(expectedState);
    });
    it('should do nothing when already on the PLAY status', () => {
      const initialState: CarouselReducerState = {
        people: [person({ id: 'A' }), person({ id: 'B' }), person({ id: 'C' })],
        currentIndex: 1,
        currentPerson: person({ id: 'B' }),
        status: 'PLAY',
      };
      const action = carouselActions.play();
      const expectedState: CarouselReducerState = {
        people: [person({ id: 'A' }), person({ id: 'B' }), person({ id: 'C' })],
        currentIndex: 1,
        currentPerson: person({ id: 'B' }),
        status: 'PLAY',
      };
      expect(carouselSlice.reducer(initialState, action)).toEqual(expectedState);
    });
  });
  describe(carouselActions.play.type, () => {
    it('should set the status to PAUSE when status is PLAY', () => {
      const initialState: CarouselReducerState = {
        people: [person({ id: 'A' }), person({ id: 'B' }), person({ id: 'C' })],
        currentIndex: 1,
        currentPerson: person({ id: 'B' }),
        status: 'PLAY',
      };
      const action = carouselActions.pause();
      const expectedState: CarouselReducerState = {
        people: [person({ id: 'A' }), person({ id: 'B' }), person({ id: 'C' })],
        currentIndex: 1,
        currentPerson: person({ id: 'B' }),
        status: 'PAUSE',
      };
      expect(carouselSlice.reducer(initialState, action)).toEqual(expectedState);
    });
    it('should do nothing when already on the PAUSE status', () => {
      const initialState: CarouselReducerState = {
        people: [person({ id: 'A' }), person({ id: 'B' }), person({ id: 'C' })],
        currentIndex: 1,
        currentPerson: person({ id: 'B' }),
        status: 'PAUSE',
      };
      const action = carouselActions.pause();
      const expectedState: CarouselReducerState = {
        people: [person({ id: 'A' }), person({ id: 'B' }), person({ id: 'C' })],
        currentIndex: 1,
        currentPerson: person({ id: 'B' }),
        status: 'PAUSE',
      };
      expect(carouselSlice.reducer(initialState, action)).toEqual(expectedState);
    });
  });
});
