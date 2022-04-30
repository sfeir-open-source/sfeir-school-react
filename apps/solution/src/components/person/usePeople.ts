import { useEffect, useState } from 'react';
import { getPeople, PersonModel } from '../../api/person';

export default function usePeople() {
  const [people, setPeople] = useState<PersonModel[] | null>(null);

  useEffect(() => {
    getPeople().then(setPeople);
  }, []);

  return people;
}
