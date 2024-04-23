import { useEffect } from 'react';
import { fetchPeople } from '../store/thunks';
import { selectPeople } from '../store/carousel-slice';
import { useAppDispatch, useAppSelector } from '../store';

export function usePeople() {
  const dispatch = useAppDispatch();
  const people = useAppSelector(selectPeople);

  useEffect(() => {
    dispatch(fetchPeople());
  }, [dispatch]);

  return people;
}
