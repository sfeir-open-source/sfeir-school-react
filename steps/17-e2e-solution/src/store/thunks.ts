import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPeople = createAsyncThunk('carousel/fetchPeople', () => {
  return fetch('/api/people/').then((res): Promise<Person[]> => res.json());
});
