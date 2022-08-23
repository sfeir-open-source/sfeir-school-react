import { useEffect, useState } from 'react';
import { getPeopleById, PersonModel } from '../../api/person';

export default function usePerson(id: string) {
  const [people, setPeople] = useState<PersonModel | null>(null);

  useEffect(() => {
    getPeopleById(id).then(setPeople);
  }, [id]);

  const refreshPerson = (): void => {
    getPeopleById(id).then(setPeople);
  };

  return [people, refreshPerson] as const;
}
