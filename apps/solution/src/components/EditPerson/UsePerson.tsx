import { useEffect, useState } from 'react';
import { getPeopleById, PersonModel } from '../../api/person';

export default function usePerson(id: string): PersonModel | null {
  const [people, setPeople] = useState<PersonModel | null>(null);

  useEffect(() => {
    getPeopleById(id).then(setPeople);
  }, [id]);

  return people;
}
